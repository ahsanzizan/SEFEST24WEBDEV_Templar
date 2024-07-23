# FoodForward 🌐

## Deskripsi

Memanfaatkan Teknologi Digital untuk Menjembatani Kesenjangan Antara Surplus Pangan dan Kerawanan Pangan. Sebuah aplikasi web yang menghubungkan penyumbang makanan dengan penerima yang membutuhkan.

> Pitch Deck : [SEFEST24WEBDEV_Templar](https://www.canva.com/design/DAGLkjJjqGQ/_1Zr0wttNhEHbM_LoGMy0g/edit?utm_content=DAGLkjJjqGQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Fitur

- Registrasi User ✨
- Pengolahan Data Suply Makanan ✨
- Distributor Penerima Suply Makanan ✨
- Database Realtime 📊
- User dan Admin Panel 🌐
- NextAuth dan OAuth Google (v2.0) 🔐

## Cara Menjalankan Aplikasi

### Langkah 1:

Pastikan sudah memperbarui `.env.example` menjadi `.env.local` :

```env
{
  DATABASE_URL=
  NEXTAUTH_SECRET=
  NEXTAUTH_URL=
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=
}
```

### Langkah 2:

Setelah itu lakukan instalasi dependensi, jalankan perintah ini  :

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Langkah 3

Untuk melihat tampilan preview saat development, jalankan perintah ini :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```