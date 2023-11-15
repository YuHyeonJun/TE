window.onload = function () {
  //로컬스토리지에 "toteClass"로 저장된 값 가져오기
  var toteClass = getLocalToteClass("toteClass");
  //저장된 값 표시
  setToteClassDisplay(toteClass);
  //popup.html의 toteClassSave에 이벤트 리스너 삽입
  var toteClassSave = document.getElementById("toteClassSave");
  toteClassSave.addEventListener("click", function () {
    //popup.html의 id=toteClass의 값 받기
    toteClass = document.getElementById("toteClass").value;
    //로컬스토리지에 "toteClass"로 값 저장하기
    setLocalToteClass("toteClass", toteClass);
    //popup.html의 toteClassDisplay에 값 표시
    setToteClassDisplay(toteClass);
  });
};

// 로컬스토리지에 값 저장
function setLocalToteClass(key, value) {
  localStorage.setItem(key, value);
}

// 로컬스토리지의 값 불러오기
function getLocalToteClass(key) {
  return localStorage.getItem(key);
}

// 현재 로컬스토리지의 값 표시
function setToteClassDisplay(toteClass) {
  if (toteClass !== null) {
    document.getElementById("toteClassDisplay").textContent = toteClass;
  } else {
    document.getElementById("toteClassDisplay").textContent = "";
  }
}
