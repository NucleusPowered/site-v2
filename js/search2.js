const nucleusSearch = (function () {

    let search = [];

    const startSearch = function(input) {
        if (input.length > 2) {
            search.forEach(x => x(input));
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
            console.log("submit " + $("form[data-search] input[data-search]").val())
            startSearch($("form[data-search] input[data-search]").val());
        });
        $.getJSON("/search.json").done(prepareSearch);
    };

    const prepareSearch = function(data) {

        const standardType = function(d, target) {
            const searchData = d[target];
            const type = target;
            const lunrObject = lunr(function () {
                this.field('title', {boost: 10});
                this.field('content');
                this.field('url');

                for (let key in searchData) { // Add the data to lunr
                    this.add({
                        'id': key,
                        'title': searchData[key].title,
                        'content': searchData[key].content,
                        'url': searchData[key].url
                    });
                }
            });

            return function(input) {
                const results = lunrObject.search(input);
                const targetDiv = $("div[data-search-type=" + type +"] div.search-results");
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
            };
        };

        /*
        const customType = function(lunrObject, target) {
            return { "lunr": lunrObject, "render": target};
        }*/

        search.push(
            standardType(data, "general"),
            standardType(data, "tutorial"),
            standardType(data, "howto"),
            standardType(data, "module")
        );
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