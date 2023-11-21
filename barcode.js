window.onload = function () {
  //바코드 생성 버튼 리스너
  document
    .getElementById("barcodeGenerate")
    .addEventListener("click", function () {
      getBarcodeValue();
    });

  //URL로 입력받은 값 공백으로 구분하여 생성
  var paramArray = getParameterByName("param", window.location.href).split(" ");
  //바코드 생성기 호출
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
function getBarcodeValue() {
  //inputValues 입력받은 값 공백으로 구분하여 생성
  var inputArray = document.getElementById("inputValues").value.split(" ");
  //바코드 생성기 호출
  generateBarcodes(inputArray);
}

function generateBarcodes(barcodeArray) {
  // 바코드를 표시할 컨테이너
  var barcodeContainer = document.getElementById("barcode-container");
  // 기존의 내용 초기화
  barcodeContainer.innerHTML = "";

  barcodeArray.forEach((value, index) => {
    //svg 엘리먼트는 createEle 사용시 html obj로 반환되기 떄문에 svg는 NS를 사용
    let barcodeSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    //id에 index를 추가하여 구분
    barcodeSvg.id = "barcode " + index;
    //css 설정을 위한 class 추가
    barcodeSvg.classList.add("barcode");
    //부모 엘리멘트에 자식으로 추가
    barcodeContainer.appendChild(barcodeSvg);

    // JsBarcode를 사용하여 바코드 생성
    JsBarcode(barcodeSvg, value, {
      format: "CODE128", // Code 128 형식 사용
      displayValue: true, // 바코드 값 표시
      fontSize: 26, // 바코드 값 글자 크기
    });
  });
}
