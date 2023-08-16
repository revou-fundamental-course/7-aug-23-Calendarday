function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var luas = 0.5 * alas * tinggi;
    document.getElementById("hasilLuas").innerHTML = "Luas: " + luas.toFixed(2);
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);
    var keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("hasilKeliling").innerHTML = "Keliling: " + keliling.toFixed(2);
}


console.log("helloworld")
