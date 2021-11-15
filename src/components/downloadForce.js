function forceDownload(blob, filename) {
  var a = document.createElement("a");
  a.download = filename;
  a.href = blob;
  document.body.appendChild(a); // For Firefox
  a.click();
  a.remove();
}

export default forceDownload