window.onload = function () {
  //해당 class에 클릭 이벤트 리스너
  var toteName = document.getElementsByClassName("col-sm-9");
  for (let i = 0; i < toteName.length; i++) {
    toteName[i].addEventListener("click", function () {
      copyToClipboard(toteName[i]);
    });
  }

  //출고번호 테스트
  var test1 = document.getElementsByClassName("badge badge");
  for (let index = 0; index < test1.length; index++) {
    let order = test1[index].innerHTML;
    test1[index].addEventListener("click", function () {
      localStorage.setItem("order", order);
    });
  }

  // 30초마다 리프레시
  setTimeout(() => {
    location.reload();
  }, 30000);
};

//클립보드로 복사 ( 클립보드api는 사용자의 행위(클릭 등)가 있어야 허용됨 )
function copyToClipboard(textToCopy) {
  navigator.clipboard.writeText(textToCopy.innerText);
}
