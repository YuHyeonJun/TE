function copyColumn(columnIndex) {

    var table = document.querySelector("table");
    var rowResult = '';

    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        var rowinnerText = row.cells[columnIndex].innerHTML;
        rowResult += rowinnerText + " ";
    }

    navigator.clipboard.writeText(rowResult.trim());
}

window.onload = function () {

    var tableParnet = document.querySelector("table").parentElement;
    var copybnt = document.createElement("button");
    copybnt.setAttribute('onclick', 'copyColumn(1)')
    copybnt.textContent = '복사하기'
    tableParnet.prepend(copybnt)

};