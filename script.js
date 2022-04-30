AOS.init({
  duration: 1000,
  delay: 200,
  once: true,
});

const scriptURLReservasi = "https://script.google.com/macros/s/AKfycbxIakiEtS-G9WHyUqfHp5TP2X7JC0o5svJ0Atrh4oH-Eq8Z0cFW5PCzyoXczMayVJrW6Q/exec";
const formReservasi = document.forms["reservasi"];
const btnKirimReservasi = document.querySelector(".btn-kirim-reservasi");
const btnLoadingReservasi = document.querySelector(".btn-loading-reservasi");
let alertTerimakasihReservasi = document.querySelector(".alert-terimakasih-reservasi");

formReservasi.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputNama = document.getElementById("name").value;
  let inputNohp = document.getElementById("nohp").value;
  let classAlert = document.getElementById("alertKosong");

  if (inputNama == "" || inputNohp == "") {
    classAlert.classList.replace("alert-success", "alert-danger");
    // classAlert.classList.remove("alert-success");
    // classAlert.classList.add("alert-danger");

    // let alertNama = document.getElementById("alertNoNameNoHp");
    alertTerimakasihReservasi.innerHTML = "<strong>Maaf!</strong> Nama atau No Handpone anda belum di isi.";

    alertTerimakasihReservasi.classList.replace("d-none", "d-block");
  } else {
    let alertAda = document.querySelector(".alert-terimakasih-reservasi");
    alertAda.classList.replace("alert-danger", "d-none");

    // alertAda.classList.remove("d-none");
    // alertAda.classList.remove("alert-danger");

    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoadingReservasi.classList.toggle("d-none");
    btnKirimReservasi.classList.toggle("d-none");

    fetch(scriptURLReservasi, { method: "POST", body: new FormData(formReservasi) })
      .then((response) => {
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoadingReservasi.classList.toggle("d-none");
        btnKirimReservasi.classList.toggle("d-none");

        // ubah isi alert
        alertTerimakasihReservasi.innerHTML = "<strong>Terimakasih!</strong> Pesan anda sudah kami terima.";

        // tampilkan alert
        alertTerimakasihReservasi.classList.replace("d-none", "alert-success");

        // reset formnya
        formReservasi.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  }
});

const scriptURLUcapan = "https://script.google.com/macros/s/AKfycbybCvxSoiYHoe0GVL4rUMaVjNOVEmInEkA2d9bOiao1hIj9wzMs4muyg7_EJQW_NDO9/exec";
const formUcapan = document.forms["ucapanTerbaikDickyNita"];
const btnKirimUcapan = document.querySelector(".btn-kirim-ucapan");
const btnLoadingUcapan = document.querySelector(".btn-loading-ucapan");
let alertUcapan = document.querySelector(".alert-ucapan");

formUcapan.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputNamaUcapan = document.getElementById("namaUcapan").value;
  let inputPesanUcapan = document.getElementById("pesanUcapan").value;

  if (inputNamaUcapan == "" || inputPesanUcapan == "") {
    alertUcapan.classList.replace("alert-success", "alert-danger");

    alertUcapan.innerHTML = "<strong>Maaf!</strong> Nama atau No Handpone anda belum di isi.";

    alertUcapan.classList.replace("d-none", "d-block");
  } else {
    let alertTampil = document.querySelector(".alert-ucapan");
    // console.log(alertTampil);
    alertTampil.classList.replace("d-block", "d-none");

    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoadingUcapan.classList.toggle("d-none");
    btnKirimUcapan.classList.toggle("d-none");

    fetch(scriptURLUcapan, { method: "POST", body: new FormData(formUcapan) })
      .then((response) => {
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoadingUcapan.classList.toggle("d-none");
        btnKirimUcapan.classList.toggle("d-none");

        // rubah isi alert
        alertUcapan.innerHTML = "<strong>Terimakasih!</strong> Pesan anda sudah kami terima.";

        // tampilkan alert
        alertUcapan.classList.replace("alert-danger", "alert-success");
        alertUcapan.classList.replace("d-none", "d-block");
        // reset formnya
        formUcapan.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  }
});
