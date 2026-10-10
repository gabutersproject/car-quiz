# GabutersTech Quiz

A motorcycle quiz you can open in a browser. Each run asks **25 bike questions** in a new order. The page can switch between **English** and **Indonesian**. There is no build step: the site is `index.html`, `css/styles.css`, and `js/quiz.js`.

## Guide: make the site, then publish it

This is the path from the files on your computer to a public page on GitHub Pages.

### 1. Build the page as three files

Keep the site static so GitHub Pages can serve it as-is.

| File | Job |
| --- | --- |
| `index.html` | The page: header, start screen, question screen, results |
| `css/styles.css` | Layout and colors |
| `js/quiz.js` | The 25 questions, scoring, and the EN / ID switch |

Link the files with **relative** paths, for example `css/styles.css`, not `/css/styles.css`. A project site is served from a subpath (`/car-quiz/`). A leading slash would look for those files on the domain root and they would 404.

The language button stores the choice in `localStorage` under `gabuterstech-quiz-lang`. Questions live in the `BANK` array in `js/quiz.js`. Every question has `en` and `id` text for the prompt, the four choices, and the explanation.

### 2. Preview it on your computer

From the project folder:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

Click **EN** and **ID**, start a round, and answer one question. The counter should read question 1 of 25. You can also open `index.html` directly, but a local server matches the way Pages will host it.

### 3. Save the work with Git

```bash
git add .
git commit -m "Describe what you changed"
```

Commit when the page works locally. That snapshot is what you will publish.

### 4. Push the repository to GitHub

This project already lives at [gabutersproject/car-quiz](https://github.com/gabutersproject/car-quiz). After you commit on `master`:

```bash
git push origin master
```

If you work on another branch, open a pull request and merge it into `master`. The deploy workflow runs when `master` changes.

### 5. Turn on GitHub Pages

The repo includes GitHub Actions workflows that upload these files and deploy them:

- `.github/workflows/static.yml`
- `.github/workflows/pages.yml`

Both publish the same site when `master` is updated. One workflow is enough.

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** if it is not selected already.
3. Push to `master`, or run the workflow from the **Actions** tab.
4. Wait until the workflow finishes in green.
5. Open the site: https://gabutersproject.github.io/car-quiz/

The first successful deploy can take a minute. If the page is missing, confirm the workflow log uploaded `index.html` at the site root and that Pages is using GitHub Actions as the source.

### 6. Update the live quiz

1. Edit the question text in `js/quiz.js`, in both `en` and `id`.
2. Preview again on localhost.
3. Commit and push to `master`.

GitHub Actions deploys the new files. Reload the public URL to see them. Changing only CSS or HTML works the same way.

## Panduan: buat halaman, lalu terbitkan

Situs ini kuis sepeda motor. Satu putaran berisi **25 soal motor** dengan urutan baru. Tombol **EN** dan **ID** mengganti bahasa. Tidak ada proses build. Isinya `index.html`, `css/styles.css`, dan `js/quiz.js`.

### 1. Susun halaman jadi tiga berkas

| Berkas | Tugas |
| --- | --- |
| `index.html` | Halaman: kepala, layar mulai, soal, dan hasil |
| `css/styles.css` | Tata letak dan warna |
| `js/quiz.js` | 25 soal, skor, dan tombol bahasa |

Pakai jalur **relatif**, misalnya `css/styles.css`, bukan `/css/styles.css`. Situs proyek berada di jalur `/car-quiz/`. Garis miring di depan membuat peramban mencari berkas di akar domain, lalu berkas itu tidak ketemu.

Pilihan bahasa disimpan di `localStorage` dengan kunci `gabuterstech-quiz-lang`. Soal ada di array `BANK` pada `js/quiz.js`. Setiap soal punya teks `en` dan `id` untuk pertanyaan, empat pilihan, dan penjelasannya.

### 2. Lihat di komputer sendiri

Dari folder proyek:

```bash
python3 -m http.server 8080
```

Buka http://localhost:8080

Tekan **EN** dan **ID**, mulai kuis, lalu jawab satu soal. Penghitung harus menunjukkan soal 1 dari 25.

### 3. Simpan dengan Git

```bash
git add .
git commit -m "Jelaskan perubahanmu"
```

Commit saat halaman sudah benar di komputer. Itulah versi yang akan diterbitkan.

### 4. Dorong repositori ke GitHub

Proyek ini ada di [gabutersproject/car-quiz](https://github.com/gabutersproject/car-quiz). Setelah commit di cabang `master`:

```bash
git push origin master
```

Kalau kamu bekerja di cabang lain, buat pull request dan gabungkan ke `master`. Workflow terbit berjalan saat `master` berubah.

### 5. Nyalakan GitHub Pages

Repo ini sudah punya workflow GitHub Actions yang mengunggah berkas dan menerbitkannya:

- `.github/workflows/static.yml`
- `.github/workflows/pages.yml`

Keduanya menerbitkan situs yang sama saat `master` diperbarui. Satu workflow sudah cukup.

1. Di GitHub, buka **Settings → Pages**.
2. Pada **Build and deployment**, set **Source** ke **GitHub Actions** jika belum.
3. Push ke `master`, atau jalankan workflow dari tab **Actions**.
4. Tunggu sampai workflow selesai dan berwarna hijau.
5. Buka situs: https://gabutersproject.github.io/car-quiz/

Deploy pertama bisa butuh sekitar satu menit. Jika halaman tidak muncul, cek log workflow: `index.html` harus ada di akar situs, dan sumber Pages harus GitHub Actions.

### 6. Perbarui kuis yang sudah tayang

1. Ubah teks soal di `js/quiz.js`, baik bagian `en` maupun `id`.
2. Pratinjau lagi di localhost.
3. Commit, lalu push ke `master`.

GitHub Actions menerbitkan berkas yang baru. Muat ulang alamat publik untuk melihatnya. Perubahan CSS atau HTML caranya sama.
