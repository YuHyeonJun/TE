window.onload = function () {
  var key = localStorage.getItem("order");
  var test2 = document.getElementsByClassName("card-head");
  for (let index = 0; index < test2.length; index++) {
    var str = test2[index].innerHTML;

    if (str.indexOf(key) != -1) {
      test2[index].style.color = "green";
    }
  }
};
