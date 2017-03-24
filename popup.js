
function onInit () {
    var checkPageButton = document.getElementById('btn');
    checkPageButton.addEventListener('click', function() {
        var prefix = localStorage.getItem('prefix');
        if (prefix && prefix.length > 0) {
            chrome.tabs.getSelected(null, function(tab) {
                var tabURL = prefix + tab.url;
                chrome.tabs.create({ url: tabURL });
            });
        }
    }, false);

}

document.addEventListener('DOMContentLoaded', onInit, false);

