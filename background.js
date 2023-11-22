chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Message received in background.js:", message);

  // 여기에서 필요한 작업을 수행하고, 필요에 따라 popup에 응답을 보낼 수 있습니다.
  var responseMessage = { data: "Hello from background.js!" };
  sendResponse(responseMessage);
});
