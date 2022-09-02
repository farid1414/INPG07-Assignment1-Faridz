const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const btn = document.querySelectorAll(".btn-kontak")[0];
const modal = document.querySelectorAll(".form-port")[0];
const submit = document.querySelector("#submit");
const form = document.querySelector(".form-portofolio");
const btnReset = document.querySelector(".btn-reset");
const btnCancel = document.querySelector(".btn-cancel");

btn.addEventListener("click", function () {
  modal.style.display = "block";
});

// mengambil value di profil
const nama = document.querySelector(".nama-port");
const role = document.querySelector(".position-port");
const availability = document.querySelectorAll(".ket-port")[0];
const age = document.querySelectorAll(".ket-port")[1];
const lokasi = document.querySelectorAll(".ket-port")[2];
const pengalaman = document.querySelectorAll(".ket-port")[3];
const emailDeveloper = document.querySelectorAll(".ket-port")[4];

var nam;
if (localStorage.getItem("namaStor") == null) {
  nam = nama.innerHTML;
} else {
  nam = localStorage.getItem("namaStor");
}

var rol;
if (localStorage.getItem("roleStor") == null) {
  rol = role.innerHTML;
} else {
  rol = localStorage.getItem("roleStor");
}

var availab;
if (localStorage.getItem("availabStor") == null) {
  availab = availability.innerHTML;
} else {
  availab = localStorage.getItem("availabStor");
}

var umur;
if (localStorage.getItem("ageStor") == null) {
  umur = age.innerHTML;
} else {
  umur = localStorage.getItem("ageStor");
}

var tempat;
if (localStorage.getItem("lokasiStor") == null) {
  tempat = lokasi.innerHTML;
} else {
  tempat = localStorage.getItem("lokasiStor");
}

var experien;
if (localStorage.getItem("experienceStor") == null) {
  experien = pengalaman.innerHTML;
} else {
  experien = localStorage.getItem("experienceStor");
}

var emailDev;
if (localStorage.getItem("emailStor") == null) {
  emailDev = emailDeveloper.innerHTML;
} else {
  emailDev = localStorage.getItem("emailStor");
}

// mengisi value inputan sesuai di profil
const inputanNama = document.querySelector("#nama");
const inputanRole = document.querySelector("#role");
const inputanAvailability = document.querySelector("#availability");
const inputanAge = document.querySelector("#age");
const inputanLocation = document.querySelector("#location");
const inputanExperience = document.querySelector("#experience");
const inputanEmail = document.querySelector("#email");

// isi value inputan sesuai dengan profil
inputanNama.value = nam;
inputanRole.value = rol;
inputanAvailability.value = availab;
inputanAge.value = umur;
inputanLocation.value = tempat;
inputanExperience.value = experien;
inputanEmail.value = emailDev;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submit.addEventListener("click", (e) => {
  // deklarasi untuk variabel local storage
  if (
    inputanNama.value == "" ||
    inputanAge.value == "" ||
    inputanAvailability.value == "" ||
    inputanRole.value == "" ||
    inputanLocation.value == "" ||
    inputanExperience.value == "" ||
    inputanEmail.value == ""
  ) {
    alert("Form tidak boleh kosong");
    return;
  }
  const hasil = confirm("Apakah anda mau melakukan perubahan");
  if (hasil) {
    var hasilNama = form.nama.value;
    var hasilRole = form.role.value;
    var hasilAvailab = form.availability.value;
    var hasilumur = form.age.value;
    var hasilLokasi = form.location.value;
    var hasilPengalaman = form.experience.value;
    var hasilEamil = form.email.value;

    // set local storage
    localStorage.setItem("namaStor", hasilNama);
    localStorage.setItem("roleStor", hasilRole);
    localStorage.setItem("availabStor", hasilAvailab);
    localStorage.setItem("ageStor", hasilumur);
    localStorage.setItem("lokasiStor", hasilLokasi);
    localStorage.setItem("experienceStor", hasilPengalaman);
    localStorage.setItem("emailStor", hasilEamil);
    nama.innerHTML = localStorage.getItem("nama");

    // const lop = alert("selamat");
    // console.log("ini alert", lop);
    modal.style.display = "none";
    setTimeout(function () {
      location.reload();
    }, 10);
  } else {
    return;
  }
});

if (
  localStorage.getItem("namaStor") != null ||
  localStorage.getItem("roleStor") != null ||
  localStorage.getItem("availabStor") != null ||
  localStorage.getItem("ageStor") != null ||
  localStorage.getItem("llokasiStor") != null ||
  localStorage.getItem("experienceStor") != null ||
  localStorage.getItem("emailStor") != null
) {
  nama.innerHTML = localStorage.getItem("namaStor");
  role.innerHTML = localStorage.getItem("roleStor");
  availability.innerHTML = localStorage.getItem("availabStor");
  age.innerHTML = localStorage.getItem("ageStor");
  lokasi.innerHTML = localStorage.getItem("lokasiStor");
  pengalaman.innerHTML = localStorage.getItem("experienceStor");
  emailDeveloper.innerHTML = localStorage.getItem("emailStor");
}
// if (localStorage.getItem("roleStor") != null) {
//   role.innerHTML = localStorage.getItem("roleStor");
// }

btnReset.addEventListener("click", function () {
  const formReset = confirm(
    "Apakah anda ingin mengembalikan data seperti semula?"
  );
  if (formReset) {
    localStorage.clear();
    setTimeout(function () {
      location.reload();
    }, 10);
  } else {
    return;
  }
});

// ketika button cancel di klik akan menutup modal
btnCancel.addEventListener("click", function () {
  modal.style.display = "none";
});
