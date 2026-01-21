import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import flatpickr from "flatpickr";
import { DateTime } from "luxon";

const calculateBtn = document.getElementById("calculate-btn");
const resultText = document.getElementById("result");
const inputField = document.getElementById("birthdate");

// 1. Inisialisasi Flatpickr
const datePicker = flatpickr("#birthdate", {
  dateFormat: "d/m/Y",
  maxDate: "today",
  disableMobile: "true",

  // Custom styling agar sesuai dengan tema kartu kita
  onReady: function (selectedDates, dateStr, instance) {
    instance.calendarContainer.style.backgroundColor = "#1e1e1e";
    instance.calendarContainer.style.borderColor = "#333";
    instance.calendarContainer.style.color = "#fff";
  },

  // IMPROVEMENT 1: Hapus error begitu user memilih tanggal baru
  onChange: function (selectedDates, dateStr, instance) {
    clearError();
  },
});

// Helper: Fungsi untuk membersihkan tampilan error
function clearError() {
  inputField.classList.remove("error");
  resultText.style.color = "#e0e0e0";
  resultText.innerHTML = ""; // Bersihkan teks hasil lama jika mau, atau biarkan
}

// Helper: Fungsi untuk menentukan 'year' vs 'years' (Pluralization)
function formatUnit(value, unit) {
  // Jika nilai 1, gunakan kata dasar (year). Jika tidak, tambah 's' (years).
  return `${value} ${value === 1 ? unit : unit + "s"}`;
}

function calculateAge() {
  const selectedDates = datePicker.selectedDates;

  // Validasi: Cek apakah tanggal kosong
  if (selectedDates.length === 0) {
    resultText.innerHTML = "Please enter your birth date.";
    resultText.style.color = "#cf6679"; // Warna Merah Error
    inputField.classList.add("error");

    // Efek getar (perlu di-trigger ulang jika user klik berkali-kali)
    inputField.style.animation = "none";
    inputField.offsetHeight; /* trigger reflow */
    inputField.style.animation = null;
    return;
  }

  const birthDateJS = selectedDates[0];
  const birthDate = DateTime.fromJSDate(birthDateJS);
  const now = DateTime.now();

  // Hitung selisih
  const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

  // Math.floor untuk memastikan angka bulat
  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);
  const days = Math.floor(diff.days);

  // IMPROVEMENT 2: Gunakan helper grammar agar bahasa Inggrisnya benar
  // Contoh: "1 year" vs "2 years"
  const yearString = `<strong>${formatUnit(years, "year")}</strong>`;
  const monthString = `<strong>${formatUnit(months, "month")}</strong>`;
  const dayString = `<strong>${formatUnit(days, "day")}</strong>`;

  // Tampilkan Hasil
  resultText.innerHTML = `You are ${yearString}, ${monthString}, and ${dayString} old.`;
}

// Event Listeners
calculateBtn.addEventListener("click", calculateAge);

// IMPROVEMENT 3: Izinkan user menekan tombol ENTER di input
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Tutup kalender flatpickr jika terbuka
    datePicker.close();
    calculateAge();
  }
});
