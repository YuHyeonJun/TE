window.onload = function () {
  //해당 class에 클릭 이벤트 리스너
  var toteName = document.getElementsByClassName("col-sm-9");
  for (let i = 0; i < toteName.length; i++) {
    toteName[i].addEventListener("click", function () {
      copyToClipboard(toteName[i]);
    });
  }

  var tableParnet = document.querySelector("table").parentElement;
  var copybnt = document.createElement("button");
  copybnt.setAttribute('onclick', 'copyColumn(7)')
  copybnt.textContent = '복사하기'
  tableParnet.prepend(copybnt)

};

//열 복사
function copyColumn(columnIndex) {

  var table = document.querySelector("table");
  var rowResult = '';

  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    var rowinnerText = row.cells[columnIndex].innerHTML;
    rowResult += rowinnerText + " ";
  }
  alert(rowResult.trim())
}


//클립보드로 복사 ( 클립보드api는 사용자의 행위(클릭 등)가 있어야 허용됨 )
function copyToClipboard(textToCopy) {
  navigator.clipboard.writeText(textToCopy.innerText);
}
