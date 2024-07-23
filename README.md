# FoodForward 🌐

## Deskripsi 📋

Memanfaatkan Teknologi Digital untuk Menjembatani Kesenjangan Antara Surplus Pangan dan Kerawanan Pangan. Sebuah aplikasi web yang menghubungkan penyumbang makanan dengan penerima yang membutuhkan.

> 🎥 Pitch Deck : [SEFEST24WEBDEV_Templar](https://www.canva.com/design/DAGLkjJjqGQ/_1Zr0wttNhEHbM_LoGMy0g/edit?utm_content=DAGLkjJjqGQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

> ▶️ Deployment : [Templar FeedForward](templarfeedforward.vercel.app)

## Dependensi 📦

- @prisma/client: Client untuk Prisma ORM yang memfasilitasi interaksi dengan database.
- bcrypt: Untuk hashing password secara aman.
- class-variance-authority: Mengelola varian class CSS secara dinamis.
- clsx: Utility untuk menggabungkan className secara kondisional.
- dotenv: Untuk mengelola variabel lingkungan dari file .env.
- next: Framework React untuk aplikasi web dengan rendering sisi server.
- next-auth: Solusi autentikasi lengkap untuk aplikasi Next.js.
- nextjs-toploader: Menyediakan toploader (indikator loading di bagian atas halaman) untuk aplikasi Next.js.
- react: Library JavaScript untuk membangun user interface.
- react-data-table-component: Komponen tabel data untuk React.
- react-dom: Menyediakan metode khusus untuk berinteraksi dengan DOM.
- react-icons: Paket icon yang mudah digunakan untuk React.
- react-select: Komponen select/dropdown yang fleksibel dan bisa dikustomisasi untuk React.
- sonner: Komponen notifikasi untuk React.
- tailwind-merge: Utility untuk menggabungkan class Tailwind CSS secara kondisional.

## Fitur-Fitur 🛠️

- Registrasi User ✨
- Pengolahan Data Suply Makanan 📦
- Distributor Penerima Suply Makanan 🚚
- Database Realtime 📊
- User dan Admin Panel 🌐
- NextAuth dan OAuth Google (v2.0) 🔐

## Cara Menjalankan Aplikasi 🚀

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