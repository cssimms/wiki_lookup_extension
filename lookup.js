function lookUpCallback(info, tab) {
  var item = info.selectionText;
  var newUrl = `http://wikipedia.org/wiki/${item}`;
  chrome.tabs.create({url: newUrl});
}

chrome.contextMenus.create({
  "title": "Lookup '%s' on Wikipedia",
  "contexts":["selection"],
  "onclick": lookUpCallback
});
