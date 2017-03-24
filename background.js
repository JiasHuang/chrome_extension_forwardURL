var tabId = false;

function onTabCallback(tab) {
    tabId = tab.id;
}

function onForward () {
    var prefix = localStorage.getItem('prefix');
    if (prefix && prefix.length > 0) {
        chrome.tabs.getSelected(null, function(tab) {
            var tabURL = prefix + tab.url;
            if (tabId === false) {
                chrome.tabs.create({url: tabURL}, onTabCallback);
            } else {
                chrome.tabs.update(tabId, {url: tabURL});
            }
        });
    }
}

chrome.browserAction.onClicked.addListener(onForward);
