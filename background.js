function isValid(url){
  const urlObject = new URL(url);

  return urlObject.host.endsWith('shaparak.ir');
}

chrome.tabs.onUpdated.addListener(function(id, undefined, { url }) {
  chrome.pageAction.show(id);

  if(isValid(url)) {
    chrome.pageAction.setIcon({ path: "images/safe.png", tabId:id })
  } else {
    chrome.pageAction.setIcon({ path: "images/not_secure.png", tabId:id })
  }
});

chrome.tabs.onCreated.addListener(function({ id, pendingUrl: url }) {
  chrome.pageAction.show(id);

  if(isValid(url)) {
    chrome.pageAction.setIcon({ path: "images/safe.png", tabId: id })
  }else {
    chrome.pageAction.setIcon({ path: "images/not_secure.png", tabId:id })
  }
});