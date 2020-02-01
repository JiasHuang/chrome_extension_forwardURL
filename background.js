var tabId = false;
var tabURL = null;

function onTabCreateCallback(tab) {
    tabId = tab.id;
}

function onTabGetCallback() {
    if (chrome.runtime.lastError) {
        chrome.tabs.create({url: tabURL}, onTabCreateCallback);
    } else {
        chrome.tabs.update(tabId, {url: tabURL, active: true});
    }
}

function onForward () {
    var prefix = localStorage.getItem('prefix');
    if (prefix && prefix.length > 0) {
        chrome.tabs.getSelected(null, function(tab) {
            tabURL = prefix + tab.url;
            if (tabId === false) {
                chrome.tabs.create({url: tabURL}, onTabCreateCallback);
            } else {
                chrome.tabs.get(tabId, onTabGetCallback);
            }
        });
    }
}

chrome.browserAction.onClicked.addListener(onForward);
