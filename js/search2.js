const nucleusSearch = (function () {

    let searchData;
    let commandData;
    let tokenData;
    let lunrObject;

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
        $("div[data-search-type]").hide();
    };

    // Create the search div
    const createSearchPanel = function() {
        // bind to the form
        $("form[data-search]").on("submit", function(event) {
            event.preventDefault();
            startSearch($("form[data-search] input[data-search]").val());
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
            let appendString = '<ul>';

            for (let i = 0; i < results.length; i++) {  // Iterate over the results
                const item = searchData[results[i].ref];
                appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
                appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
            }

            appendString += "</ul>"
            targetDiv.html(appendString);
            targetDiv.show();
        } else {
            targetDiv.hide();
        }
    }

    const prepareSearch = function() {
        lunrObject = {
            "standard": lunr(function() {
                this.field('title', {boost: 10});
                this.field('keywords', {boost: 50});
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
        }
    };

    return {
        init: function() {
            createSearchPanel();
        },
        open: function() {
            createSearchPanel();
        },
        search: function(searchTerm) {
            startSearch(searchTerm);
        },
        close: function() {

        }
    }

})();

nucleusSearch.init();