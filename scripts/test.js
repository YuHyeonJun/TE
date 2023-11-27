window.onload = function () {};

function fetchHTML(url) {
  fetch(url)
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((error) => console.error("Error:", error));
}
function fetchJSON(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

function fetchPOST(url) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      key: value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
