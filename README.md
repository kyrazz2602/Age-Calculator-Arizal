# 📅 Age Calculator

A precise and modern Age Calculator app built to solve the [Age Calculator project](https://roadmap.sh/projects/age-calculator) from roadmap.sh.

This application allows users to input their birthdate and calculates their exact age in years, months, and days. It features a sleek dark mode UI and utilizes modern JavaScript tooling.

## 🌟 Demo Preview
![Project Preview](./Project-image.png)

## ✨ Features

- **Precise Calculation:** Calculates age down to the exact number of years, months, and days using [Luxon](https://moment.github.io/luxon/).
- **Smart Date Picker:** Integrated [Flatpickr](https://flatpickr.js.org/) for an intuitive and consistent calendar interface across devices.
- **Dark Mode UI:** A modern, accessible dark theme with high-contrast text and neon accents.
- **Smart Grammar:** Automatically handles pluralization (e.g., displays "1 year" vs "2 years").
- **Validation:** Visual error feedback for empty inputs or invalid dates.
- **Keyboard Support:** Press `Enter` to calculate immediately.
- **Responsive Design:** Looks great on desktop and mobile.

## 🛠️ Tech Stack

- **Core:** HTML5, CSS3, JavaScript (ES6+)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Packages:**
  - `luxon` (Date manipulation)
  - `flatpickr` (Date picker UI)
- **Package Manager:** npm

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kyrazz2602/Age-Calculator-Arizal.git
   cd age-calculator
2. **Install dependencies**
   ```bash
   npm install
3. **Run the development server**
   ```bash
   npm run dev
4. **Open the app**
   Open your browser and navigate to `http://localhost:5173`
---

## 🧠 Apa yang Saya Pelajari

Membangun proyek ini membantu memperkuat beberapa konsep penting *frontend*:

*   **Manajemen Paket npm:** Belajar cara menginstal, mengimpor, dan menggunakan pustaka eksternal (luxon & flatpickr) daripada hanya mengandalkan *vanilla* JS.

*   **Manipulasi DOM:** Memisahkan logika dari UI dan memperbarui DOM secara dinamis.

*   **Logika Tanggal:** Memahami kompleksitas waktu (tahun kabisat, panjang bulan yang bervariasi) dan mengapa pustaka seperti Luxon sangat penting.

*   **Penataan CSS:** Menerapkan tema gelap yang kohesif menggunakan variabel CSS dan Flexbox.

## 🔗 Acknowledgments

Tantangan ini adalah bagian dari kurikulum Frontend Developer di [roadmap.sh](https://roadmap.sh).
Link Project: [https://roadmap.sh/projects/age-calculator](https://roadmap.sh/projects/age-calculator)

---
*Created by ❤️ Arizal Anshori*