window.onload = function () {};
function data(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return alert(response.json());
    })
    .then((data) => {
      alert(data);
      //document.getElementById("result").innerHTML = "서버로부터 받은 데이터: " + data;
    })
    .catch((error) => alert("Error: " + error));
}
