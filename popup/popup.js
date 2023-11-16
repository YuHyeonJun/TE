indow.onload = function () {
  //로컬스토리지에 "toteClass"로 저장된 값 가져오기
  // var toteClass = getLocalToteClass("toteClass");
  // //저장된 값 표시
  // setToteClassDisplay(toteClass);
  // //popup.html의 toteClassSave에 이벤트 리스너 삽입
  // var toteClassSave = document.getElementById("toteClassSave");
  // toteClassSave.addEventListener("click", function () {
  //   //popup.html의 id=toteClass의 값 받기
  //   toteClass = document.getElementById("toteClass").value;
  //   //로컬스토리지에 "toteClass"로 값 저장하기
  //   setLocalToteClass("toteClass", toteClass);
  //   //popup.html의 toteClassDisplay에 값 표시
  //   setToteClassDisplay(toteClass);
  // });
  document
    .getElementById("generateBarcodes")
    .addEventListener("click", function () {
      alert("버튼");
      generateBarcode();
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

function generateBarcode() {
  alert("생성");
  var inputValues = document.getElementById("inputValues").value.split(",");

  // 바코드 생성
  var barcodeContainer = document.getElementById("barcodeContainer");
  barcodeContainer.innerHTML = ""; // 이전에 생성된 바코드를 지우기

  inputValues.forEach(function (inputValue) {
    // 바코드를 담을 div 생성
    var barcodeDiv = document.createElement("div");

    // 바코드를 그릴 SVG 생성
    var barcodeSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    barcodeSvg.setAttribute("id", "barcode-" + inputValue);
    barcodeDiv.appendChild(barcodeSvg);

    // 입력값을 바코드로 변환하여 그리기
    JsBarcode("#barcode-" + inputValue, inputValue, {
      format: "CODE128", // 바코드 형식
      displayValue: true, // 바코드 아래에 값 표시
      fontSize: 12,
      height: 50,
    });

    // 입력값을 바코드 아래에 표시
    var textElement = document.createElement("p");
    textElement.textContent = "입력값: " + inputValue;
    barcodeDiv.appendChild(textElement);

    // 바코드를 웹페이지에 추가
    barcodeContainer.appendChild(barcodeDiv);
  });
}
