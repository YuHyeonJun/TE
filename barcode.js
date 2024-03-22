window.onload = function () {
  var paramArray = getParameterByName("param", window.location.href)
    .replaceAll(",", " ")
    .split(" ");
  generateBarcodes(paramArray);
};

// URL에서 매개변수 가져오기
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
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
