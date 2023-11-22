window.onload = function () {
  //Storage에서 저장된값 가져오기
  var popupTextareaValue = localStorage.getItem("localTextareaValue");
  if (popupTextareaValue) {
    document.getElementById("popupBarcodeValue").value = popupTextareaValue;
  }

  //textarea에 값을 입력받으면 Storage에 저장
  document
    .getElementById("popupBarcodeValue")
    .addEventListener("input", function () {
      var localTextareaValue =
        document.getElementById("popupBarcodeValue").value;
      localStorage.setItem("localTextareaValue", localTextareaValue);
    });

  //네비게이터 class="section"의 이벤트 리스너 생성
  var list = document.getElementsByClassName("section");
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
      showSection("section" + [i + 1]);
    });
  }

  //바코드 생성기 이벤트 리스너
  document.getElementById("bardcodeBtn").addEventListener("click", function () {
    openInNewTab();
  });
};

//id=barcodeValue의 값을 url로 내부 html인 barcode.html로 전송
function openInNewTab() {
  var textareaContent = document.getElementById("popupBarcodeValue").value;
  var url = "../barcode.html?param=" + encodeURIComponent(textareaContent);
  var barcodeTab = window.open(url);
  barcodeTab.focus();
}

function showSection(sectionId) {
  // 모든 섹션 숨기기
  var sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    section.classList.remove("active");
  });

  // 클릭한 섹션만 보이도록 설정
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add("active");
    return;
  }
}
