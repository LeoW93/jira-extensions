
const jiraFocusedCommentIdRegex = /\?focusedCommentId=/

chrome.tabs.onUpdated.addListener(
  function (tabIndex, changeInfo) {
    if (changeInfo.url) {
      if (jiraFocusedCommentIdRegex.test(changeInfo.url)) {
        const newUrl = changeInfo.url.split(jiraFocusedCommentIdRegex)[0]
        chrome.tabs.update(tabIndex, {
          url: newUrl,
        })
      }
    }
  }
);