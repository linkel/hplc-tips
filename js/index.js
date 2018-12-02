function calculateVol() {
    var volume = 0;
    var length = 0;
    var intd = 0;
    // Alternate way to do it, but since by name returns an array have to use the [0] notation
    //length = document.getElementsByName('length')[0].value;
    //intd = document.getElementsByName('intd')[0].value;
    length = document.getElementById('length').value;
    intd = document.getElementById('intd').value;
    volume = parseFloat((3.14159 * length * (Math.pow(intd/2,2))*0.001)).toFixed(3);
    document.getElementById('result').innerHTML = " " + volume + " mL";

}

function calculateCap() {
  var unretained = 0;
  var retention = 0;
  var result = 0;
  unretained = document.getElementById('unretained').value;
  retention = document.getElementById('retained').value;
  result = parseFloat((retention - unretained) / unretained).toFixed(1);
  document.getElementById('capresult').innerHTML = " " + result;
}