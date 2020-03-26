(function() {

    var titleToUpdate = "#pageheadertopname";
    var titleUpdater = "#title-message";

    (function() {
        document.addEventListener('DOMContentLoaded', function(event) {
            $(titleToUpdate).text($(titleUpdater).text());
        })
    })();
})();