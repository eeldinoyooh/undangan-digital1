# Konfigurasi Data Pernikahan

File `wedding.ts` berisi semua data konfigurasi untuk undangan pernikahan digital.

## Cara Mengubah Nama Pasangan

Buka file `src/config/wedding.ts` dan ubah nilai-nilai berikut:

```typescript
export const weddingConfig = {
  // Nama Pasangan (untuk tampilan utama)
  groomName: "Dino",        // Ganti dengan nama mempelai pria
  brideName: "Partner",     // Ganti dengan nama mempelai wanita
  
  // Nama Lengkap (untuk profil detail)
  groomFullName: "Dino Saurus",      // Ganti dengan nama lengkap mempelai pria
  brideFullName: "Partner Dino",    // Ganti dengan nama lengkap mempelai wanita
  
  // ... data lainnya
};
```

## Data yang Bisa Diubah

1. **Nama Pasangan** - `groomName` dan `brideName`
2. **Nama Lengkap** - `groomFullName` dan `brideFullName`
3. **Nama Orang Tua** - `groom.father`, `groom.mother`, `bride.father`, `bride.mother`
4. **Link Instagram** - `groomInstagram` dan `brideInstagram`
5. **Rekening Bank** - `bankAccounts` (array)
6. **Alamat Pengiriman Kado** - `giftAddress`
7. **Tanggal Pernikahan** - `weddingDate` dan `weddingDateDisplay`

Setelah mengubah data di file ini, semua komponen akan otomatis menggunakan data baru tanpa perlu mengubah file lain.

