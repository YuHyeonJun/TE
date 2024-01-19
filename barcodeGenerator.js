window.onload = function () {

  document
    .getElementById("popupBarcodeValue")
    .addEventListener("input", function () {
      getBarcodeValue();
    });

};

function getBarcodeValue() {
  //inputValues 입력받은 값 공백으로 구분하여 생성
  var inputArray = document
    .getElementById("popupBarcodeValue")
    .value.trim()
    .split(" ");
  //바코드 생성기 호출
  generateBarcodes(inputArray);
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
