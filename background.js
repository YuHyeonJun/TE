// 메시지 리스너
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.actions == "set") {
    setLocalStorage("toteClass", request.value);
    sendResponse({ message: "저장 완료" });
  } else if (request.actions == "get") {
    var value = getLocalStorage("toteClass");
    sendResponse({ value: value });
  }
  return true;
});
// 로컬 스토리지에 값 저장하기
function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

// 로컬 스토리지에서 값 가져오기.
function getLocalStorage(key) {
  return localStorage.getItem(key);
}
