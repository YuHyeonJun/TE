window.onload = function () {
  //Storage에서 저장된값 가져오기
  var popupBarcodeValueId = "popupBarcodeValue";
  var popupTextareaValue = getLocalStorage("popupTextareaValue");
  if (popupTextareaValue) {
    document.getElementById(popupBarcodeValueId).value = popupTextareaValue;
  } else {
    setLocalStorage("popupTextareaValue", "");
  }

  //Storage에 저장
  document
    .getElementById(popupBarcodeValueId)
    .addEventListener("input", function () {
      popupTextareaValue = document.getElementById(popupBarcodeValueId).value;
      setLocalStorage("popupTextareaValue", popupTextareaValue);
    });

  //이력 모두 삭제 이벤트 리스너
  document.getElementById("clearBtn").addEventListener("click", function () {
    clearBarcodeHistory();
  });

  //네비게이터 class="section"의 이벤트 리스너 생성
  document.querySelectorAll(".section").forEach((value, index) => {
    value.addEventListener("click", function () {
      showSection("section" + [index + 1]);
    });
  });

  //바코드 생성기 이벤트 리스너
  document.getElementById("bardcodeBtn").addEventListener("click", function () {
    popupTextareaValue = document.getElementById(popupBarcodeValueId).value;
    openInNewTab(popupTextareaValue);

    var textareaContentArray = popupTextareaValue.trim().split(" ");
    createBarcodeHistory(textareaContentArray);
  });

  //바코드 생성 내역 호출
  getBarcodeHistory();
};

// 로컬스토리지 값 불러오기
function getLocalStorage(value) {
  let key = localStorage.getItem(value);
  return key;
}

// 로컬스토리지 값 저장
function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
// 로컬스토리지 값 삭제
function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

//id=barcodeValue의 값을 url로 내부 html인 barcode.html로 전송
function openInNewTab(popupTextareaValue) {
  var url = "../barcode.html?param=" + encodeURIComponent(popupTextareaValue);
  var barcodeTab = window.open(url);
  barcodeTab.focus();
}

function showSection(sectionId) {
  // 모든 섹션 숨기기
  document.querySelectorAll("section").forEach((section) => {
    section.classList.remove("active");
  });

  // 클릭한 섹션만 보이도록 설정
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add("active");
    return;
  }
}

//현재 시간 구하기
function getTime() {
  let now = new Date();

  let month = ("0" + (now.getMonth() + 1)).slice(-2);
  let day = ("0" + now.getDate()).slice(-2);
  let hour = ("0" + now.getHours()).slice(-2);
  let minute = ("0" + now.getMinutes()).slice(-2);
  let second = ("0" + now.getSeconds()).slice(-2);

  let nowTime = month + "-" + day + " " + hour + ":" + minute + ":" + second;

  return nowTime;
}

//바코드 생성내역
function getBarcodeHistory() {
  for (let index = 0; index < localStorage.length; index++) {
    // 키값 받기
    let createTime = localStorage.key(index);
    // 로컬스토리지는 저장 순서를 보장하지 않기에 textarea 값은 제외하기
    if (createTime != "popupTextareaValue") {
      let barcodeHistoryJSON = getLocalStorage(createTime);
      updateBarcodeHistory(createTime, barcodeHistoryJSON);
    }
  }
}

//생성 내역 저장
function createBarcodeHistory(textareaContentArray) {
  let createTime = getTime();
  let barcodeHistoryJSON = JSON.stringify(textareaContentArray);

  setLocalStorage(createTime, barcodeHistoryJSON);
  updateBarcodeHistory(createTime, barcodeHistoryJSON);
}

//생성 내역 읽기
function readBarcodeHistory(createTime) {
  var value = JSON.parse(getLocalStorage(createTime));
  var toString = value.join(" ");

  openInNewTab(toString);
}

//생성 내역 업데이트
function updateBarcodeHistory(createTime, barcodeHistoryJSON) {
  //[시간, 값]을 구분하기
  var createTime = createTime;
  var textareaContentArray = JSON.parse(barcodeHistoryJSON);

  //값을 넣을 컨테이너
  var historyContainer = document.getElementById("historyContainer");

  //컨테이너에 넣을 엘리먼트
  var barcodeHistory = document.createElement("li");
  var valueHistory = document.createElement("div");
  var readButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  //엘리먼트의 값 설정
  barcodeHistory.id = createTime;
  readButton.addEventListener("click", function () {
    readBarcodeHistory(createTime);
  });
  deleteButton.addEventListener("click", function () {
    deleteBarcodeHistory(createTime);
  });
  readButton.classList.add("readButton");
  deleteButton.classList.add("deleteButton");

  barcodeHistory.innerHTML = createTime;
  valueHistory.innerHTML = textareaContentArray[0];
  readButton.innerHTML = "검색";
  deleteButton.innerHTML = "삭제";

  //부모 엘리멘트에 자식으로 추가
  barcodeHistory.appendChild(valueHistory);
  barcodeHistory.appendChild(readButton);
  barcodeHistory.appendChild(deleteButton);
  historyContainer.appendChild(barcodeHistory);
}

//특정 내역 삭제
function deleteBarcodeHistory(createTime) {
  document.getElementById(createTime).innerHTML = "";
  removeLocalStorage(createTime);
}

//생성 내역 모두 삭제
function clearBarcodeHistory() {
  document.getElementById("popupBarcodeValue").value = "";
  document.getElementById("historyContainer").innerHTML = "";
  localStorage.clear();
  alert("모든 이력 제거");
}
