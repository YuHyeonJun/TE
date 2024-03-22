window.onload = function () {

  // 생성할려는 값 입력시 호출
  document
    .getElementById("barcodeValue")
    .addEventListener("input", function () {
      generateBarcodes(getBarcodeValue());
    });

  //생성한 바코드 값을 새창으로 열기
  document.getElementById("barcodeNewtab")
    .addEventListener("click", function () {
      barcodeNewtab(getBarcodeValue());
    })

};
//입력한 값을 공백으로 구분된 형태로 출력
function getBarcodeValue() {

  var inputArray = document
    .getElementById("barcodeValue")
    .value.trim()
    .split(/ |\n/);

  return inputArray;
}

function generateBarcodes(barcodeArray) {
  // 바코드를 표시할 컨테이너
  var barcodeContainer = document.getElementById("barcodeContainer");
  // 기존의 내용 초기화
  barcodeContainer.innerHTML = "";

  barcodeArray.forEach((value, index) => {
    let barcodeImg = document.createElement("img")
    //id에 index를 추가하여 구분
    barcodeImg.id = "barcode " + index;
    //부모 엘리멘트에 자식으로 추가
    barcodeContainer.appendChild(barcodeImg);

    // JsBarcode를 사용하여 바코드 생성
    JsBarcode(barcodeImg, value, {
      format: "CODE128", // Code 128 형식 사용
      displayValue: true, // 바코드 값 표시
      fontSize: 22, // 바코드 값 글자 크기
      width: 1.6, // 바코드 넓이
      height: 60, // 바코드 높이
    });
  });
}

function barcodeNewtab(inputArray) {
  var url = "./barcode.html?param=" + encodeURIComponent(inputArray);
  window.open(url, "_blank");
}
