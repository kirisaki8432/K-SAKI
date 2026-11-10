// K-SAKI — data guide offline (semua data ada di dalam aplikasi, tanpa internet)
// Versi data: 0.1.0 (10 November 2026)
// Konten Wuthering Waves disadur dari panduan pengguna (Wuthering Waves Guide, Bahasa Indonesia).
// Tier List mengacu GameWith, diperbarui 6 November 2026 — data dapat berubah tiap patch game.
window.KSAKI_DATA = {
  version: "0.1.0",
  updated: "10 November 2026",
  games: [
    {
      id: "wuwa",
      name: "Wuthering Waves",
      short: "WuWa",
      logo: "assets/wuwa-logo.png",
      logoAlt: "Logo Wuthering Waves",
      desc: "Action RPG open-world dari Kuro Games. Bangun Resonator-mu, taklukkan Tacet Discord di Solaris-3.",
      guides: 8,
      tag: "Kuro Games"
    },
    {
      id: "nikke",
      name: "NIKKE: Goddess of Victory",
      short: "NIKKE",
      logo: "assets/nikke-logo.png",
      logoAlt: "Logo NIKKE Goddess of Victory",
      desc: "RPG shooter dari Shift Up. Pimpin para NIKKE sebagai Commander melawan Rapture.",
      guides: 6,
      tag: "Shift Up"
    }
  ],

  wuwa: {
    title: "Wuthering Waves",
    subtitle: "Panduan Resonator Solaris-3",
    hero: "Bangun Resonator-mu, taklukkan Tacet Discord",
    meta: ["6 Elemen", "5 Tipe Senjata", "3 Resonator per Tim", "4-3-3-1-1 Susunan Echo"],
    about: "Wuthering Waves adalah action RPG open-world gratis dari Kuro Games. Kamu bermain sebagai Rover yang terbangun tanpa ingatan di Solaris-3 setelah bencana Lament, dan melawan musuh bernama Tacet Discord. Istilah penting: Convene = gacha/banner, Astrite = mata uang premium, Waveplate = stamina harian, Union Level = level akun, Echo = sisa frekuensi musuh yang bisa ditangkap.",
    steps: [
      { n: 1, t: "Selesaikan cerita utama dulu", d: "Cerita membuka fitur, area, dan hadiah penting. Jangan terburu-buru farming sebelum cerita selesai." },
      { n: 2, t: "Pilih 1 DPS utama, fokus ke dia", d: "Naikkan level, senjata, Forte, dan Echo satu DPS dulu sampai jadi — jangan sebar resource ke banyak karakter sekaligus." },
      { n: 3, t: "Pakai banner pemula & selector dengan bijak", d: "Verina dan Encore adalah pilihan paling aman dari selector pemula." },
      { n: 4, t: "Jangan pull banner senjata standar sembarangan", d: "Simpan Astrite untuk banner Resonator terbatas yang kamu inginkan." },
      { n: 5, t: "Habiskan Waveplate setiap hari", d: "Prioritas: material ascension/Forte, lalu Tacet Field, lalu Simulation Zone." },
      { n: 6, t: "Tangkap semua Echo, naikkan Data Bank", d: "Semakin tinggi Data Bank, semakin bagus kualitas Echo yang bisa kamu dapatkan." },
      { n: 7, t: "Latih dodge & parry", d: "Timing dodge dan parry yang baik menghemat banyak potion dan mempercepat pertarungan." }
    ],
    elements: [
      { name: "Fusion", set: "Molten Rift", chars: "Encore, Changli, Brant, Lupa", color: "#E07840" },
      { name: "Glacio", set: "Freezing Frost", chars: "Lingyang, Carlotta, Zhezhi", color: "#7FC4E8" },
      { name: "Electro", set: "Void Thunder", chars: "Calcharo, Yinlin, Xiangli Yao", color: "#B78CFF" },
      { name: "Aero", set: "Sierra Gale", chars: "Jiyan, Cartethyia", color: "#6FD3A7" },
      { name: "Spectro", set: "Celestial Light", chars: "Jinhsi, Zani, Phoebe", color: "#F2D54B" },
      { name: "Havoc", set: "Sun-sinking Eclipse", chars: "Camellya, Rover Havoc, Phrolova", color: "#D96A8B" }
    ],
    chars: [
      { name: "Jinhsi", elem: "Spectro", weapon: "Broadblade", role: "DPS Utama", star: 5, desc: "DPS Spectro dengan Forte Circuit Incandescence — makin banyak stack, makin sakit damage-nya." },
      { name: "Jiyan", elem: "Aero", weapon: "Broadblade", role: "DPS Utama", star: 5, desc: "DPS Aero dengan serangan area luas, kuat untuk melawan banyak musuh sekaligus." },
      { name: "Changli", elem: "Fusion", weapon: "Broadblade", role: "DPS Utama", star: 5, desc: "DPS Fusion quickswap yang fleksibel, cocok dipasangkan dengan Encore." },
      { name: "Camellya", elem: "Havoc", weapon: "Sword", role: "DPS Utama", star: 5, desc: "DPS Havoc dengan Forte Circuit Blossom — gaya main agresif dan cepat." },
      { name: "Carlotta", elem: "Glacio", weapon: "Pistols", role: "DPS Utama", star: 5, desc: "DPS Glacio jarak jauh dengan burst damage besar sekali tembak." },
      { name: "Calcharo", elem: "Electro", weapon: "Broadblade", role: "DPS Utama", star: 5, desc: "DPS Electro dengan serangan beruntun cepat, kuat di single-target." },
      { name: "Encore", elem: "Fusion", weapon: "Rectifier", role: "DPS Utama", star: 5, desc: "DPS Fusion yang aman untuk pemula — mudah dimainkan dan konsisten." },
      { name: "Zani", elem: "Spectro", weapon: "Gauntlets", role: "DPS Utama", star: 5, desc: "DPS Spectro jarak dekat dengan gaya bertarung cepat." },
      { name: "Cartethyia", elem: "Aero", weapon: "Sword", role: "DPS Utama", star: 5, desc: "DPS Aero dengan mobilitas tinggi dan damage area yang luas." },
      { name: "Yinlin", elem: "Electro", weapon: "Rectifier", role: "Sub-DPS", star: 5, desc: "Sub-DPS Electro dengan mark yang memperkuat damage tim — pasangan ideal banyak DPS." },
      { name: "Zhezhi", elem: "Glacio", weapon: "Rectifier", role: "Sub-DPS", star: 5, desc: "Sub-DPS Glacio yang memperkuat DPS Glacio dan Spectro lewat koordinasi serangan." },
      { name: "Phoebe", elem: "Spectro", weapon: "Rectifier", role: "Sub-DPS", star: 5, desc: "Sub-DPS Spectro yang kuat dalam tim Spectro, terutama bersama Jinhsi." },
      { name: "Shorekeeper", elem: "Spectro", weapon: "Rectifier", role: "Support", star: 5, desc: "Support paling serbaguna — heal, buff CRIT, dan memperkuat seluruh tim." },
      { name: "Verina", elem: "Spectro", weapon: "Rectifier", role: "Support", star: 5, desc: "Support healer yang aman untuk pemula, tersedia dari selector — buff dan heal sekaligus." },
      { name: "Rover (Spectro)", elem: "Spectro", weapon: "Sword", role: "DPS Utama", star: 5, desc: "Karakter utama gratis — paket lengkap untuk pemula, bisa ganti elemen." },
      { name: "Sanhua", elem: "Glacio", weapon: "Sword", role: "Sub-DPS", star: 4, desc: "Sub-DPS 4★ serbaguna — buff Basic Attack untuk DPS utama tim." },
      { name: "Mortefi", elem: "Fusion", weapon: "Pistols", role: "Sub-DPS", star: 4, desc: "Sub-DPS 4★ yang memperkuat Heavy Attack — pasangan klasik Jiyan." },
      { name: "Baizhi", elem: "Glacio", weapon: "Rectifier", role: "Healer", star: 4, desc: "Healer 4★ yang mudah didapat — pilihan aman kalau belum punya Verina." },
      { name: "Danjin", elem: "Havoc", weapon: "Sword", role: "DPS Utama", star: 4, desc: "DPS Havoc 4★ dengan damage tinggi tapi mengorbankan HP sendiri — gaya main berisiko." },
      { name: "Chixia", elem: "Fusion", weapon: "Pistols", role: "DPS Utama", star: 4, desc: "DPS Fusion 4★ jarak jauh yang mudah dimainkan untuk pemain baru." }
    ],
    tiers: [
      { name: "Shin", tier: "SS" }, { name: "Jinran", tier: "SS" }, { name: "Seishou", tier: "SS" },
      { name: "Suisui", tier: "SS" }, { name: "Yangyang · Xuanling", tier: "SS" }, { name: "Hiyuki", tier: "SS" },
      { name: "Shorekeeper", tier: "SS" }, { name: "Lynae", tier: "SS" }, { name: "Chisa", tier: "SS" },
      { name: "Mornye", tier: "SS" },
      { name: "Verina", tier: "S+" }, { name: "Lupa", tier: "S+" }, { name: "Phrolova", tier: "S+" },
      { name: "Iuno", tier: "S+" }, { name: "Qiuyuan", tier: "S+" }, { name: "Aemeath", tier: "S+" },
      { name: "Luc Herssen", tier: "S+" }, { name: "Sigrika", tier: "S+" }, { name: "Danya", tier: "S+" },
      { name: "Lucilla", tier: "S+" }, { name: "Suimei", tier: "S+" },
      { name: "Ciaccona", tier: "S" }, { name: "Cartethyia", tier: "S" }, { name: "Augusta", tier: "S" },
      { name: "Galbrena", tier: "S" }, { name: "Buling", tier: "S" }, { name: "Lucy", tier: "S" },
      { name: "Sanhua", tier: "A+" }, { name: "Mortefi", tier: "A+" }, { name: "Jinhsi", tier: "A+" },
      { name: "Carlotta", tier: "A+" }, { name: "Phoebe", tier: "A+" }, { name: "Brant", tier: "A+" },
      { name: "Cantarella", tier: "A+" }, { name: "Rover Aero", tier: "A+" }, { name: "Zani", tier: "A+" },
      { name: "Rover Electro", tier: "A+" },
      { name: "Jiyan", tier: "A" }, { name: "Zhezhi", tier: "A" }, { name: "Xiangli Yao", tier: "A" },
      { name: "Camellya", tier: "A" }, { name: "Roccia", tier: "A" },
      { name: "Rover Spectro", tier: "B" }, { name: "Lingyang", tier: "B" }, { name: "Calcharo", tier: "B" },
      { name: "Yinlin", tier: "B" }, { name: "Encore", tier: "B" }, { name: "Danjin", tier: "B" },
      { name: "Baizhi", tier: "B" }, { name: "Rover Havoc", tier: "B" },
      { name: "Jianxin", tier: "C" }, { name: "Yuanwu", tier: "C" }, { name: "Taoqi", tier: "C" },
      { name: "Aalto", tier: "C" }, { name: "Yangyang", tier: "C" }, { name: "Chixia", tier: "C" },
      { name: "Youhu", tier: "C" }, { name: "Lumi", tier: "C" }
    ],
    tierNote: "Penempatan tier mengacu GameWith (diperbarui 6 November 2026). Pickup terbaru: Suimei (Electro, Sub-DPS, S+) — buff Electro DMG + Resonance Skill DMG. Kriteria: DPS 5★, fleksibilitas tim 4★, keunikan 3★, performa S0 3★, kemudahan dimainkan 2★.",
    topRoles: {
      "DPS Utama": ["Aemeath", "Hiyuki", "Shin", "Jinran", "Phrolova", "Seishou", "Yangyang · Xuanling", "Sigrika", "Luc Herssen", "Cartethyia"],
      "Sub-DPS": ["Lynae", "Lupa", "Iuno", "Qiuyuan", "Suimei", "Danya", "Lucilla", "Ciaccona", "Sanhua", "Mortefi"],
      "Support": ["Shorekeeper", "Mornye", "Suisui", "Chisa", "Verina", "Buling", "Rover Aero", "Brant", "Cantarella", "Baizhi"]
    },
    weapons: [
      { type: "Broadblade", chars: "Jiyan, Jinhsi, Changli, Calcharo, Lupa", example: "Lustrous Razor" },
      { type: "Sword", chars: "Camellya, Sanhua, Danjin, Brant, Cartethyia, Rover", example: "Lunar Cutter" },
      { type: "Pistols", chars: "Carlotta, Chixia, Mortefi, Aalto", example: "Static Mist" },
      { type: "Gauntlets", chars: "Lingyang, Xiangli Yao, Zani, Roccia", example: "Abyss Surges" },
      { type: "Rectifier", chars: "Encore, Yinlin, Verina, Shorekeeper, Cantarella, Phrolova", example: "Cosmic Ripples" }
    ],
    signatures: [
      { name: "Verdant Summit", owner: "Jiyan" }, { name: "Ages of Harvest", owner: "Jinhsi" },
      { name: "Blazing Brilliance", owner: "Changli" }, { name: "Stringmaster", owner: "Yinlin" },
      { name: "Red Spring", owner: "Camellya" }, { name: "The Last Dance", owner: "Carlotta" },
      { name: "Stellar Symphony", owner: "Shorekeeper" }, { name: "Emerald of Genesis", owner: "Senjata standar umum" }
    ],
    weaponAlt: "Alternatif 4★: Broadblade of Night, Dauntless Evernight, Overture, seri Battle Pass, dan senjata event.",
    echo: {
      cost: "Total Cost maksimal 12 — susunan standar 4-3-3-1-1.",
      slots: [
        { cost: "Cost 4 (slot utama)", desc: "Echo dengan skill aktif. Main stat: CRIT Rate / CRIT DMG. Contoh: Mourning Aix, Fallacy of No Return, Nightmare: Inferno Rider." },
        { cost: "Cost 3 (×2)", desc: "Main stat: DMG Bonus elemen atau ATK%." },
        { cost: "Cost 1 (×2)", desc: "Main stat: ATK%." }
      ],
      sonata: "Set Sonata populer: Moonlit Clouds, Rejuvenating Glow, set per elemen (Void Thunder / Molten Rift / Freezing Frost / Sierra Gale / Celestial Light / Sun-sinking Eclipse — 2-pc memberi +10% DMG elemen), serta Empyrean Anthem.",
      target: "Target stat DPS: CRIT Rate 65–75%+, CRIT DMG 250%+ (rasio sekitar 1:2), Energy Regen 120–140% (support 200%+), ATK total 2.000+ di level 90."
    },
    teams: [
      { name: "Spectro Premium", members: ["Jinhsi", "Zhezhi", "Verina"], note: "Tim Spectro terkuat — Jinhsi sebagai DPS utama." },
      { name: "Aero", members: ["Jiyan", "Mortefi", "Verina"], note: "Jiyan menyapu area luas, Mortefi memperkuat Heavy Attack." },
      { name: "Fusion Quickswap", members: ["Changli", "Encore", "Shorekeeper"], note: "Rotasi cepat Changli + Encore dengan buff Shorekeeper." },
      { name: "Ramah Pemula", members: ["Rover Spectro", "Sanhua", "Baizhi"], note: "Semua mudah didapat — cocok untuk pemain baru." },
      { name: "Electro Premium", members: ["Aemeath", "Lynae", "Mornye"], note: "Tim Electro dari tier atas." },
      { name: "Glacio", members: ["Hiyuki", "Lucilla", "Chisa"], note: "Tim Glacio dari tier atas." }
    ],
    teamFormula: "Formula dasar tim: DPS + Sub-DPS + Support. Rotasi: Support → Outro → Sub-DPS → Outro → DPS.",
    combat: [
      { t: "Intro & Outro Skill", d: "Saat Concerto Energy penuh, ganti karakter untuk memicu Intro Skill karakter yang masuk dan Outro Skill karakter yang keluar." },
      { t: "Forte Circuit", d: "Mekanik khas tiap Resonator — contoh: Incandescence (Jinhsi) dan Blossom (Camellya)." },
      { t: "Dodge, Parry & Counter", d: "Dodge tepat waktu menghindari damage; parry mematahkan serangan musuh dan menurunkan Vibration Strength (poise) mereka." },
      { t: "Tower of Adversity", d: "Endgame utama: 3 zona dengan sistem Vigor, butuh sampai 3 tim, memberi Astrite tiap reset." },
      { t: "Whimpering Wastes & Tactical Hologram", d: "Konten endgame lain — Whimpering Wastes menilai damage area dan crowd control." },
      { t: "Illusive Realm & Event", d: "Mode roguelite dan event berkala yang memberi hadiah Astrite dan material." }
    ],
    daily: "Rutinitas harian sekitar 15 menit: selesaikan Activity sampai 100 poin (60 Astrite), habiskan Waveplate, klaim Guidebook. Mingguan: 3× Weekly Boss. Tiap patch: cek banner, event, dan kode redeem terbaru.",
    faq: [
      { q: "Apakah harus reroll?", a: "Tidak wajib. Banner pemula menjamin 1 karakter 5★, dan Rover gratis sudah cukup kuat untuk awal permainan." },
      { q: "Sebagai F2P, pull siapa dulu?", a: "Urutan umum: 1 DPS terbatas dulu, lalu support serbaguna (Shorekeeper / Verina), lalu Sub-DPS pasangan DPS-mu. Senjata signature belakangan." },
      { q: "Kapan mulai farming Echo serius?", a: "Saat Data Bank sudah tinggi (sekitar Union Level 40+), karena kualitas Echo yang didapat jadi jauh lebih baik." },
      { q: "Elemen Rover mana yang terbaik?", a: "Spectro adalah paket paling lengkap untuk pemula; Havoc punya burst besar; Aero didapat dari cerita Rinascita." },
      { q: "Bagaimana sistem pity gacha?", a: "Banner Resonator terbatas: 5★ dijamin maksimal 80 pull. Kalau kalah 50/50, 5★ berikutnya pasti karakter banner. Banner senjata terbatas: maksimal 80 pull, selalu senjata yang dipilih — tanpa 50/50." }
    ],
    source: "Panduan penggemar berbahasa Indonesia, bukan situs resmi. Wuthering Waves adalah merek dagang Kuro Games. Tier List mengacu GameWith (diperbarui 6 November 2026). Data dapat berubah tiap patch game — update aplikasi untuk data terbaru."
  },

  nikke: {
    title: "NIKKE: Goddess of Victory",
    subtitle: "Panduan Awal — akan dilengkapi",
    hero: "Pimpin para NIKKE, rebut kembali permukaan bumi",
    meta: ["5 NIKKE per Tim", "Burst I / II / III", "5 Elemen", "6 Jenis Senjata"],
    about: "NIKKE: Goddess of Victory adalah RPG shooter dari Shift Up. Kamu berperan sebagai Commander yang memimpin para NIKKE — android pejuang — melawan musuh bernama Rapture di dunia pasca-apokaliptik. Pertarungan memakai sistem cover shooter: NIKKE menembak dari balik perlindungan, lalu memakai Burst Skill secara berurutan untuk Full Burst.",
    roles: [
      { name: "Attacker", desc: "Penyerang utama tim — damage terbesar, biasanya jadi sumber DPS." },
      { name: "Defender", desc: "Penahan damage — menarik perhatian musuh dan melindungi tim." },
      { name: "Supporter", desc: "Pendukung — heal, buff, dan memperkuat tim dengan berbagai cara." }
    ],
    bursts: [
      { name: "Burst I", desc: "Tahap pertama rantai Burst. Burst I biasanya memberi buff atau efek pembuka." },
      { name: "Burst II", desc: "Tahap kedua. Diaktifkan setelah Burst I, memperkuat serangan tim." },
      { name: "Burst III — Full Burst", desc: "Tahap pamungkas. Saat I → II → III berurutan, tim masuk mode Full Burst dengan damage besar." }
    ],
    burstNote: "Kunci tim NIKKE: pastikan tim punya Burst I, Burst II, dan Burst III agar rantai Full Burst selalu bisa jalan.",
    elements: [
      { name: "Fire", color: "#E07840" },
      { name: "Water", color: "#5FA8D3" },
      { name: "Electric", color: "#B78CFF" },
      { name: "Wind", color: "#6FD3A7" },
      { name: "Iron", color: "#C0C6CE" }
    ],
    elementNote: "Setiap NIKKE punya satu elemen. Elemen memengaruhi damage terhadap jenis musuh tertentu — perhatikan elemen saat menghadapi bos.",
    weapons: [
      { type: "AR (Assault Rifle)", desc: "Serbaguna — seimbang antara damage dan kecepatan tembak." },
      { type: "SMG (Submachine Gun)", desc: "Tembakan cepat, damage per peluru lebih kecil." },
      { type: "RL (Rocket Launcher)", desc: "Damage area besar — kuat melawan banyak musuh." },
      { type: "SR (Sniper Rifle)", desc: "Damage besar per tembakan, kecepatan rendah — kuat di single-target." },
      { type: "SG (Shotgun)", desc: "Damage besar jarak dekat." },
      { type: "MG (Machine Gun)", desc: "Tembakan terus-menerus dengan kapasitas besar." }
    ],
    rarity: [
      { name: "SSR", desc: "Rarity tertinggi — rate sekitar 4% di recruit. Fokus bangun SSR untuk tim utama." },
      { name: "SR", desc: "Rarity menengah — berguna di awal, beberapa tetap kuat di tim tertentu." },
      { name: "R", desc: "Rarity dasar — cocok untuk awal permainan, ganti dengan SR/SSR seiring waktu." }
    ],
    team: "Satu tim berisi 5 NIKKE. Komposisi umum: 1–2 Attacker, 1 Defender atau Supporter, dan pastikan ada Burst I, II, dan III. Seimbangkan role agar tim bisa bertahan dan memberi damage.",
    tips: [
      { n: 1, t: "Fokus ke 5 NIKKE utama", d: "Naikkan 5 NIKKE saja sampai tinggi. Level NIKKE lain bisa disamakan lewat Synchro Device — jangan sebar resource." },
      { n: 2, t: "Selesaikan campaign dulu", d: "Campaign membuka fitur, mode, dan hadiah penting. Progres campaign juga menaikkan level Outpost." },
      { n: 3, t: "Simpan gems untuk banner yang diinginkan", d: "Jangan recruit sembarangan — tunggu banner karakter yang kamu butuhkan untuk tim." },
      { n: 4, t: "Gunakan Mileage Ticket dengan bijak", d: "Setelah 200 pull, Mileage Ticket bisa ditukar dengan SSR pilihan — pakai untuk karakter kunci yang belum kamu punya." },
      { n: 5, t: "Jangan lewatkan Interception harian", d: "Bos Interception memberi material penting untuk meningkatkan equipment." }
    ],
    daily: "Rutinitas harian: kirim Dispatch di Outpost, selesaikan misi harian, mainkan Simulation Room, Arena, Interception (bos harian), Tribe Tower, dan Lost Sector. Klaim hadiah idle Outpost secara berkala.",
    faq: [
      { q: "Berapa rate SSR di recruit?", a: "Sekitar 4% per pull. Setelah 200 pull, Mileage Ticket bisa ditukar dengan SSR pilihan." },
      { q: "Apakah NIKKE harus dimainkan setiap hari?", a: "Tidak harus lama — rutinitas harian bisa selesai dalam waktu singkat, dan hadiah idle Outpost tetap terkumpul walau tidak main." },
      { q: "Apa itu Synchro Device?", a: "Fitur yang menyamakan level NIKKE lain dengan 5 NIKKE level tertinggi-mu — jadi kamu tidak perlu menaikkan level semua NIKKE satu per satu." }
    ],
    source: "Panduan awal — akan dilengkapi di update berikutnya. NIKKE: Goddess of Victory adalah merek dagang Shift Up. Panduan ini bukan situs resmi."
  }
};
