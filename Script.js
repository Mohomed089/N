function generateText() {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("outputText");
  output.textContent = input || "hello";
}

function downloadImage() {
  const captureElement = document.getElementById("capture");
  html2canvas(captureElement).then(canvas => {
    const link = document.createElement("a");
    link.download = "neon-text.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
