const nucleusSearch = (function () {

    const body = $("body");
    const html = $("html");
    const overlay = $("#searchoverlay");

    let searchData;
    let commandData;
    let tokenData;
    let lunrObject;

    let timeout = null;

    let init = false;

    const definition = {
        "module": "Module Reference",
        "general": "General Information",
        "tutorial": "Tutorial",
        "howto": "How To"
    }

    const startSearch = function(input) {
        if (searchData === undefined || searchData === null) {
            return;
        }
        if (input.length > 2) {
            executeSearch(input);
        } else {
            clearSearch();
        }
    };

    const clearSearch = function() {
        $("div[data-search-type] .search-results").html("");
    };

    const clearTimeoutIfExists = function() {
        if (timeout !== null || timeout !== undefined) {
            clearTimeout(timeout);
        }
    }

    // Create the search div
    const createSearchPanel = function() {
        if (init) {
            return;
        }
        init = true;
        // bind to the form
        $("form[data-search]").on("submit", function(event) {
            event.preventDefault();
            startSearch($("form[data-search] input[data-search]").val());
        });
        $("form[data-search] input[data-search]").on("input", function(event) {
            clearTimeoutIfExists();
            setTimeout(() => startSearch($("form[data-search] input[data-search]").val()), 500);
        });
        $.getJSON("/search.json").done(data => {
            searchData = data["standard"];
            commandData = data["command"];
            tokenData = data["token"];
            prepareSearch(data);
        }).fail(() => {
            console.error("Could not download search JSON")
        });
    };

    const executeSearch = function(input) {
        const results = lunrObject.standard.search(input);
        const targetDiv = $("div.search-results");
        // clear it.
        targetDiv.html("");

        if (results.length) { // Are there any results?
            let appendString = '';
            for (let i = 0; i < results.length; i++) {  // Iterate over the results
                const item = searchData[results[i].ref];
                appendString += renderStandardItem(item);
            }
            targetDiv.html(appendString);
            targetDiv.show();
        } else {
            targetDiv.hide();
        }
    };

    const renderStandardItem = function(standardJsonItem) {
        const type = standardJsonItem.type;
        let element = '<div class="search-result-item ' + type + '">';
        element += '<h3 class="search-result-header"><a href="' + standardJsonItem.url + '">' + standardJsonItem.title + '</a><small> - ' + definition[type] +'</small></h3>';
        element += '<p class="search-result-url"><a href="' + standardJsonItem.url + '">' + standardJsonItem.url + '</a></p>';
        let s = standardJsonItem.content.trimLeft();
        if (s.startsWith("Introduction")) {
            s = s.replace("Introduction", '').trimLeft();
        }
        if (s.length > 150) {
            s = s.substring(0, 150) + '...';
        }
        element += '<p class="search-result-desc">' + s + '</p>';
        element += "</div>";
        return element;
    }

    const prepareSearch = function() {
        lunrObject = {
            "standard": lunr(function() {
                this.field('title', {
                    boost: 10,
                    wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
                });
                this.field('keywords', {
                    boost: 50,
                    wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
                });
                this.field('content');
                this.field('url');

                for (let key in searchData) { // Add the data to lunr
                    this.add({
                        'id': key,
                        'title': searchData[key].title,
                        'content': searchData[key].content,
                        'keywords': searchData[key].keywords,
                        'url': searchData[key].url
                    });
                }
            })
        };
        clearSearch();
    };

    return {
        open: function() {
            if (!this.isOpen()) {
                createSearchPanel();
                body.css("overflow-x", "hidden");
                body.css("overflow-y", "hidden");
                html.css("overflow-x", "hidden");
                html.css("overflow-y", "hidden");
                overlay.show();
                $('#search-box').trigger("focus");
            }
        },
        isOpen: function() {
            return overlay.is(":visible");
        },
        search: function(searchTerm) {
            open();
            startSearch(searchTerm);
        },
        close: function() {
            if (this.isOpen()) {
                overlay.hide();
                body.css("overflow-x", "");
                body.css("overflow-y", "");
                html.css("overflow-x", "");
                html.css("overflow-y", "");
            }
        }
    }

})();

$(document).on("keydown", function(e) {
    if (nucleusSearch.isOpen() && (e.key === "Escape" || e.key === "Esc")) {
        nucleusSearch.close();
        e.preventDefault();
    } else if (!nucleusSearch.isOpen() && e.key === "s") {
        nucleusSearch.open();
        e.preventDefault();
    }
});

$("a[data-search-activate]").on("click", function(event) {
    event.preventDefault();
    nucleusSearch.open();
});

$("#searchoverlay").on("click", function(event) {
    if (event.target === this) {
        event.preventDefault();
        nucleusSearch.close();
    }
});