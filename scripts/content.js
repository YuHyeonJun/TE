window.onload = function () {
  //값 설정
  var list = document.getElementsByClassName("col-sm-9");
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
      copyToClipboard(list[i]);
    });
  }
};

function copyToClipboard(textToCopy) {
  navigator.clipboard.writeText(textToCopy.innerText);
}