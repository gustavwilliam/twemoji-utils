import forceDownload from "./downloadForce.js"

function downloadResource(url, filename) {
  if (!filename) filename = url.split("\\").pop().split("/").pop();
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: "cors",
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch((e) => console.error(e));
}

export default downloadResource;