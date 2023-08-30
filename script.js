document.getElementById('convertBtn').addEventListener('click', function () {
  const lengthInput = parseFloat(document.getElementById('lengthInput').value);
  const selectedUnit = document.getElementById('unitSelect').value;
  let convertedLength = 0;

  if (selectedUnit === 'cm') {
    convertedLength = lengthInput * 100;
  } else if (selectedUnit === 'km') {
    convertedLength = lengthInput / 1000;
  } else if (selectedUnit === 'mm') {
    convertedLength = lengthInput * 1000;
  }

  document.getElementById('convertedLength').textContent = `${convertedLength.toFixed(2)} ${selectedUnit}`;
});
