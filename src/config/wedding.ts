// Konfigurasi Data Pernikahan
// Ubah data di sini untuk mengubah nama pasangan di seluruh aplikasi

export const weddingConfig = {
  // Nama Pasangan (untuk tampilan utama)
  groomName: "ikbal",
  brideName: "ira",

  // Nama Lengkap (untuk profil detail)
  groomFullName: "ikbal",
  brideFullName: "Raudhatul Jannah",

  // Nama Orang Tua
  groom: {
    father: "Bpk. Nasrul",
    mother: "Ibu Nurlela",
    childOrder: "pertama" // anak ke berapa: "pertama", "kedua", "ketiga", dst
  },
  bride: {
    father: "Bpk. Erwandi",
    mother: "Ibu Yurnelis",
    childOrder: "Kedua" // anak ke berapa: "pertama", "kedua", "ketiga", dst
  },

  // Instagram (opsional)
  groomInstagram: "https://www.instagram.com/ik.b.al?igsh=MTdiNXZoaDl6dHlkeA==",
  brideInstagram: "https://www.instagram.com/raudhatul_jnnh_?igsh=MTVtY3dndHJ1cmV6Ng==",

  // Data Rekening Bank (untuk Gift)
  bankAccounts: [
    {
      bank: "BNI",
      number: "1385604393",
      name: "RAUDHATUL JANNAH",
      logoText: "BNI"
    },
  ],

  // Alamat Pengiriman Kado
  giftAddress: "JL Angkubasa rt/rw 01/01 Kelurahan Puhun Tembok Kota Bukittinggi",

  // Tanggal Pernikahan
  weddingDate: "2025-12-28T08:00:00",
  weddingDateDisplay: "Minggu, 28 Desember 2025",

  eventDetails: [
    {
      id: "akad",
      badge: "Sacred Moment",
      title: "Akad Nikah",
      date: "MINGGU, 28 DESEMBER 2025",
      time: "10:00 WIB - Selesai",
      timeNote: "Harap hadir tepat waktu",
      location: "Masjid Jami' Mandiangin",
      address: "Jl. H. Miskin, Campago Ipuh, Kec. Mandiangin Koto Selayan, Kota Bukittinggi, Sumatera Barat 26111",
      theme: "earth"
    },
    // {
    //   id: "resepsi",
    //   badge: "Celebration",
    //   title: "Resepsi",
    //   date: "Kamis, 01 Januari 2027",
    //   time: "11:00 WIB - Selesai",
    //   timeNote: "Harap hadir tepat waktu",
    //   location: "Ballroom Hotel Mewah",
    //   address: "Jl. Kenangan Indah No. 99, Jakarta Selatan",
    //   theme: "sage"
    // }
  ]
};

// Helper functions untuk format nama
export const getCoupleNames = () => `${weddingConfig.groomName} & ${weddingConfig.brideName}`;
export const getCoupleNamesFull = () => `${weddingConfig.groomFullName} & ${weddingConfig.brideFullName}`;
