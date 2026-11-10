# K-SAKI — Knowledge Sharing Alliance for Knowing Info

Aplikasi guide game **100% offline**. Semua data guide tersimpan di dalam aplikasi — tanpa internet, tanpa server. Update info (event, guide baru) hanya lewat update APK ke versi terbaru.

Game awal: **Wuthering Waves** dan **NIKKE: Goddess of Victory**. Tiap guide memakai logo gamenya. Desain UI mengikuti proyek KISA (font Outfit, token Nocturne, radius 12px, mode malam + siang).

## Demo web (tanpa build)

Buka `index.html` di browser — langsung jalan, tanpa server:

```text
index.html        ← buka file ini
data.js           ← semua data guide (offline)
assets/           ← logo K-SAKI, logo game, font Outfit
```

Tidak ada request jaringan sama sekali: tanpa Google Fonts, tanpa CDN, tanpa gambar eksternal.

## Build APK (via GitHub Actions, setelah repo dibuat)

1. Buat repo GitHub baru bernama **K-SAKI** (Public).
2. Upload seluruh isi folder ini ke repo (branch `main`).
3. Buka tab **Actions** → workflow **Build K-SAKI APK** → **Run workflow**.
4. Setelah selesai, unduh artifact **K-SAKI-apk-debug** → file `K-SAKI-debug.apk`.
5. Instal APK di HP Android (izinkan "instal dari sumber tidak dikenal" sekali saja).

APK ini WebView wrapper: memuat `index.html` lokal dari `assets/` — tetap 100% offline di HP.

> **Signing rilis:** APK debug di atas cukup untuk mencoba. Untuk APK rilis yang bisa di-update menimpa versi lama, butuh **keystore BARU** (jangan pakai keystore KISA) + secrets GitHub. Itu langkah berikutnya setelah demo disetujui.

## Struktur

```text
index.html                 Aplikasi web demo (beranda + 2 guide)
data.js                    Data guide WuWa + NIKKE (offline)
assets/                    Logo K-SAKI (SVG + PNG), logo game, font Outfit
app/android/               Proyek Android (WebView, package com.kisaki.ksaki)
.github/workflows/         Workflow build APK debug
```

## Konten

- **Wuthering Waves:** panduan pemula 7 langkah, 6 elemen, 20 Resonator unggulan (filter + pencarian), Tier List 58 Resonator (mengacu GameWith, 6 November 2026), 5 tipe senjata + 8 signature, sistem Echo 4-3-3-1-1, contoh tim, endgame, FAQ gacha/pity. Bukan situs resmi; Wuthering Waves adalah merek dagang Kuro Games.
- **NIKKE: Goddess of Victory:** panduan awal — role, Burst I/II/III, elemen, senjata, rarity, dasar tim, tips, rutinitas harian. Akan dilengkapi di update berikutnya. NIKKE adalah merek dagang Shift Up.

## Versi

- **0.1.0** — Demo pertama (10 November 2026).
