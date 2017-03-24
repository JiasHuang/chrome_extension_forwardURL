
function onForward () {
    var prefix = localStorage.getItem('prefix');
    if (prefix && prefix.length > 0) {
        chrome.tabs.getSelected(null, function(tab) {
            var tabURL = prefix + tab.url;
            chrome.tabs.create({ url: tabURL });
        });
    }
}

chrome.browserAction.onClicked.addListener(onForward);
