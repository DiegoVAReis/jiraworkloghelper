/* global chrome */
var popupWindow = window.open(
  chrome.runtime.getURL('popup.html'),
  'Jira Worklog Tool',
  'width=800,height=600'
)
popupWindow.focus()
window.close()
