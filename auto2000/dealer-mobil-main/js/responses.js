function getBotResponse(input) {
    input = input.toLowerCase();

    if (input == "halo") {
        return "Halo AutoFamily. Terima kasih telah menghubungi Auto2000 Digiroom.";
    } else if (input == "informasi produk") {
        return "Model mobil apa yang Auto Family cari?";
    } else if (input == "cek promo"){
        return "Promo Auto2000 yang sedang berlaku saat ini bisa Auto Family lihat di https://auto2000.co.id/promo-diskon/ ";
    } else if (input == "cek servis dan perawatan"){
        return "Silahkan pilih jenis booking yang di inginkan ?";
    } else if (input == "terima kasih"){
        return "Sama-sama Auto Family 😉";
    } else if (input == "ya"){
        return "Silakan klik DISINI untuk langsung terhubung dengan CS Support";
    }else {
        return "Mohon maaf untuk saat ini, info yang Auto Family butuhkan dapat dibantu oleh teman Tasia. Apakah Auto Family mau dihubungkan ke teman Tasia?";
    }
}