(function () {
  var STORAGE_KEY = "gabuterstech-quiz-lang";
  var LETTERS = ["A", "B", "C", "D"];

  var UI = {
    en: {
      kicker: "Motorcycle",
      heroLead: "Throttle",
      heroAccent: "Quiz",
      lede: "Twenty-five questions on motorcycles: controls, engines, and how a bike stays honest on the road. Each answer comes with a short explanation.",
      factCount: "<strong>25</strong> questions",
      factTopic: "<strong>Bikes</strong> only",
      factOrder: "<strong>Fresh</strong> order each run",
      start: "Start the quiz",
      keyHint: "Keys 1–4 answer. Enter moves on.",
      next: "Next question",
      results: "See results",
      again: "Ride it again",
      eyebrowStart: "Practice lap",
      eyebrowResult: "Garage report",
      reviewTitle: "Worth another look",
      answerLabel: "Answer:",
      footer: "A practice quiz for motorcycle riders. It is not a riding course, a repair manual, or a substitute for the owner’s manual.",
      question: "Question",
      of: "of",
      correct: "Correct.",
      wrong: "Not quite. The answer is",
      langLabel: "Language",
      title: "GabutersTech Quiz — Motorcycle",
      description: "GabutersTech Quiz: 25 motorcycle questions in English or Indonesian.",
      scoreSay: "You scored",
      outOf: "out of",
      ranks: {
        perfect: {
          title: "Apex ace",
          line: "Clean lap. You know the bike and the words that describe it."
        },
        high: {
          title: "Shop lead",
          line: "Strong round. You could talk another rider through most of these."
        },
        mid: {
          title: "Canyon regular",
          line: "The basics are there. A few details are still worth a second look."
        },
        low: {
          title: "Learning the line",
          line: "A fair start. The notes under each miss will make the next run easier."
        },
        start: {
          title: "In the garage",
          line: "Everyone starts on the stand. Run it again and the terms will settle in."
        }
      }
    },
    id: {
      kicker: "Sepeda motor",
      heroLead: "Kuis",
      heroAccent: "Motor",
      lede: "Dua puluh lima soal tentang sepeda motor: tuas, mesin, dan cara motor tetap aman di jalan. Setiap jawaban disertai penjelasan singkat.",
      factCount: "<strong>25</strong> soal",
      factTopic: "<strong>Khusus</strong> motor",
      factOrder: "<strong>Urutan</strong> baru tiap main",
      start: "Mulai kuis",
      keyHint: "Tombol 1–4 untuk jawab. Enter untuk lanjut.",
      next: "Soal berikut",
      results: "Lihat hasil",
      again: "Main lagi",
      eyebrowStart: "Lap latihan",
      eyebrowResult: "Laporan garasi",
      reviewTitle: "Perlu dilihat lagi",
      answerLabel: "Jawaban:",
      footer: "Kuis latihan untuk pengendara motor. Ini bukan kursus mengemudi, bukan buku servis, dan bukan pengganti buku manual pemilik.",
      question: "Soal",
      of: "dari",
      correct: "Benar.",
      wrong: "Belum tepat. Jawabannya",
      langLabel: "Bahasa",
      title: "GabutersTech Quiz — Sepeda motor",
      description: "GabutersTech Quiz: 25 soal sepeda motor dalam bahasa Inggris atau Indonesia.",
      scoreSay: "Skor kamu",
      outOf: "dari",
      ranks: {
        perfect: {
          title: "Jawara lintasan",
          line: "Putaran bersih. Kamu paham motor dan kata-kata yang menjelaskannya."
        },
        high: {
          title: "Kepala bengkel",
          line: "Hasil kuat. Kamu bisa menjelaskan sebagian besar soal ini ke pengendara lain."
        },
        mid: {
          title: "Rutin di tikungan",
          line: "Dasarnya sudah ada. Beberapa detail masih perlu dilihat lagi."
        },
        low: {
          title: "Masih belajar jalur",
          line: "Awal yang cukup. Catatan pada soal yang keliru akan membantu putaran berikutnya."
        },
        start: {
          title: "Masih di garasi",
          line: "Semua orang mulai dari sini. Main lagi, istilahnya akan lebih melekat."
        }
      }
    }
  };

  var BANK = [
    {
      category: { en: "Controls", id: "Kontrol" },
      prompt: {
        en: "On a typical modern motorcycle, which control works the front brake?",
        id: "Pada sepeda motor modern pada umumnya, kontrol mana yang mengoperasikan rem depan?"
      },
      choices: [
        { en: "The right-hand lever", id: "Tuas di tangan kanan" },
        { en: "The left-hand lever", id: "Tuas di tangan kiri" },
        { en: "The left foot pedal", id: "Pedal di kaki kiri" },
        { en: "A switch on the dashboard", id: "Sakelar di dasbor" }
      ],
      answer: 0,
      explain: {
        en: "The front brake is the right-hand lever. The left hand works the clutch, and the right foot usually works the rear brake.",
        id: "Rem depan ada di tuas tangan kanan. Tangan kiri memegang kopling, dan kaki kanan biasanya menginjak rem belakang."
      }
    },
    {
      category: { en: "Controls", id: "Kontrol" },
      prompt: {
        en: "Which control operates the clutch on a typical motorcycle?",
        id: "Kontrol mana yang mengoperasikan kopling pada sepeda motor pada umumnya?"
      },
      choices: [
        { en: "The left-hand lever", id: "Tuas tangan kiri" },
        { en: "The right-hand lever", id: "Tuas tangan kanan" },
        { en: "The right foot pedal", id: "Pedal kaki kanan" },
        { en: "The starter button", id: "Tombol starter" }
      ],
      answer: 0,
      explain: {
        en: "The clutch lever sits on the left handlebar. Pulling it in lets the rider change gear or stop while a gear is still engaged.",
        id: "Tuas kopling ada di stang kiri. Menarik tuas itu memutus putaran mesin ke girboks, supaya pengendara bisa pindah gigi atau berhenti saat gigi masih masuk."
      }
    },
    {
      category: { en: "Controls", id: "Kontrol" },
      prompt: {
        en: "Where is the rear brake pedal on a typical motorcycle?",
        id: "Di mana pedal rem belakang pada sepeda motor pada umumnya?"
      },
      choices: [
        { en: "By the right foot", id: "Di kaki kanan" },
        { en: "By the left foot", id: "Di kaki kiri" },
        { en: "On the left handlebar", id: "Di stang kiri" },
        { en: "On the right handlebar", id: "Di stang kanan" }
      ],
      answer: 0,
      explain: {
        en: "The rear brake is normally a pedal for the right foot. The left foot shifts gears.",
        id: "Rem belakang biasanya berupa pedal untuk kaki kanan. Kaki kiri bertugas memindahkan gigi."
      }
    },
    {
      category: { en: "Controls", id: "Kontrol" },
      prompt: {
        en: "On a typical motorcycle, the gear shift lever is operated by the:",
        id: "Pada sepeda motor pada umumnya, tuas persneling dioperasikan oleh:"
      },
      choices: [
        { en: "Left foot", id: "Kaki kiri" },
        { en: "Right foot", id: "Kaki kanan" },
        { en: "Left hand", id: "Tangan kiri" },
        { en: "Right hand", id: "Tangan kanan" }
      ],
      answer: 0,
      explain: {
        en: "The shift lever is on the left. A common pattern is first gear down from neutral, then the higher gears up.",
        id: "Tuas gigi ada di kiri. Pola yang umum adalah gigi satu ke bawah dari netral, lalu gigi yang lebih tinggi ke atas."
      }
    },
    {
      category: { en: "Controls", id: "Kontrol" },
      prompt: {
        en: "On many motorcycles, where is neutral in the shift pattern?",
        id: "Pada banyak sepeda motor, di mana posisi netral pada pola perpindahan gigi?"
      },
      choices: [
        { en: "Between 1st and 2nd", id: "Di antara gigi 1 dan gigi 2" },
        { en: "Above the top gear", id: "Di atas gigi tertinggi" },
        { en: "Only below 1st, with no stop on the way up", id: "Hanya di bawah gigi 1, tanpa jeda saat tuas diangkat" },
        { en: "A button on the right handlebar", id: "Tombol di stang kanan" }
      ],
      answer: 0,
      explain: {
        en: "From first gear, a light lift halfway toward second finds neutral. The green N lamp confirms it. A few bikes use a different pattern.",
        id: "Dari gigi satu, angkat tuas pelan setengah jalan menuju gigi dua untuk menemukan netral. Lampu N hijau menandakan netral. Beberapa motor memakai pola yang berbeda."
      }
    },
    {
      category: { en: "Safety", id: "Keselamatan" },
      prompt: {
        en: "What does ABS do when a rider brakes hard?",
        id: "Apa yang dilakukan ABS saat pengendara mengerem keras?"
      },
      choices: [
        { en: "Eases the brakes so a wheel is less likely to lock", id: "Mengendurkan rem sebentar supaya roda tidak mudah terkunci" },
        { en: "Adds horsepower for a shorter stop", id: "Menambah tenaga kuda agar berhenti lebih pendek" },
        { en: "Locks every wheel on purpose", id: "Mengunci semua roda dengan sengaja" },
        { en: "Turns the engine off", id: "Mematikan mesin" }
      ],
      answer: 0,
      explain: {
        en: "ABS means anti-lock braking system. It releases brake pressure if a wheel is about to stop rotating, which helps the tire keep grip.",
        id: "ABS adalah sistem rem anti terkunci. Sistem ini mengurangi tekanan rem jika roda hampir berhenti berputar, supaya ban tetap menapak."
      }
    },
    {
      category: { en: "Engine", id: "Mesin" },
      prompt: {
        en: "What does the “cc” in a 150cc motorcycle engine describe?",
        id: "Apa arti “cc” pada mesin motor 150cc?"
      },
      choices: [
        { en: "The volume the pistons displace", id: "Volume yang disapu piston" },
        { en: "The number of cylinders", id: "Jumlah silinder" },
        { en: "The top speed in kilometers", id: "Kecepatan tertinggi dalam kilometer" },
        { en: "The horsepower rating", id: "Angka tenaga kuda" }
      ],
      answer: 0,
      explain: {
        en: "Cubic centimeters measure engine displacement: the space swept by the pistons. It is a size, not a horsepower figure.",
        id: "cc mengukur kapasitas mesin, yaitu ruang yang disapu piston. Itu ukuran mesin, bukan angka tenaga kuda."
      }
    },
    {
      category: { en: "Riding", id: "Berkendara" },
      prompt: {
        en: "At riding speed, countersteering is used to:",
        id: "Pada kecepatan jalan, countersteering dipakai untuk:"
      },
      choices: [
        { en: "Start a lean into a turn", id: "Memulai condong ke dalam tikungan" },
        { en: "Lock the handlebar straight", id: "Mengunci stang agar lurus" },
        { en: "Apply the rear brake", id: "Menekan rem belakang" },
        { en: "Find neutral", id: "Mencari netral" }
      ],
      answer: 0,
      explain: {
        en: "A brief press on the handlebar toward the side you want to turn helps the bike lean that way. Once it is leaned, you steer through the corner.",
        id: "Tekanan singkat pada stang ke arah tikungan membantu motor condong ke sisi itu. Setelah condong, stang diarahkan menyusuri tikungan."
      }
    },
    {
      category: { en: "Bikes", id: "Jenis motor" },
      prompt: {
        en: "A “naked” motorcycle is best described as a bike that:",
        id: "Motor “naked” paling tepat disebut motor yang:"
      },
      choices: [
        { en: "Has little or no full fairing", id: "Hampir tidak punya fairing penuh" },
        { en: "Has no engine", id: "Tidak punya mesin" },
        { en: "Is built only for dirt", id: "Dibuat hanya untuk off-road" },
        { en: "Uses pedals instead of a motor", id: "Pakai pedal, bukan mesin" }
      ],
      answer: 0,
      explain: {
        en: "Naked bikes leave the engine and frame more exposed. They skip the big front fairing used on sport bikes.",
        id: "Motor naked membiarkan mesin dan rangka lebih terlihat. Motor ini tidak memakai fairing depan besar seperti motor sport."
      }
    },
    {
      category: { en: "Maintenance", id: "Perawatan" },
      prompt: {
        en: "A chain final drive stays healthier when the rider:",
        id: "Penggerak akhir rantai lebih awet jika pengendara:"
      },
      choices: [
        { en: "Keeps it clean, correctly tensioned, and lubricated", id: "Menjaga rantai bersih, kekencangannya pas, dan terlumasi" },
        { en: "Soaks it in engine coolant", id: "Merendamnya dalam cairan pendingin" },
        { en: "Paints it before every ride", id: "Mengecatnya sebelum setiap perjalanan" },
        { en: "Leaves it dry so grit cannot stick", id: "Membiarkannya kering supaya kotoran tidak menempel" }
      ],
      answer: 0,
      explain: {
        en: "A dirty or dry chain wears the chain and sprockets. Too much slack, or a chain that is too tight, also damages the drivetrain.",
        id: "Rantai kotor atau kering mengikis rantai dan gir. Rantai yang terlalu kendor atau terlalu kencang juga merusak sistem penggerak."
      }
    },
    {
      category: { en: "Engine", id: "Mesin" },
      prompt: {
        en: "What does EFI mean on a motorcycle?",
        id: "Apa arti EFI pada sepeda motor?"
      },
      choices: [
        { en: "Electronic fuel injection", id: "Injeksi bahan bakar elektronik" },
        { en: "Engine force index", id: "Indeks tenaga mesin" },
        { en: "Exhaust flow intake", id: "Aliran gas buang yang masuk" },
        { en: "Electric front ignition", id: "Pengapian depan elektrik" }
      ],
      answer: 0,
      explain: {
        en: "Electronic fuel injection meters fuel with electronically controlled injectors, instead of a carburetor.",
        id: "Injeksi bahan bakar elektronik mengatur bensin lewat injektor yang dikendalikan secara elektronik, bukan lewat karburator."
      }
    },
    {
      category: { en: "Riding", id: "Berkendara" },
      prompt: {
        en: "Engine braking on a motorcycle happens when you:",
        id: "Engine brake pada motor terjadi ketika kamu:"
      },
      choices: [
        { en: "Close the throttle in gear so the engine’s resistance slows the bike", id: "Menutup gas saat gigi masuk, sehingga hambatan mesin memperlambat motor" },
        { en: "Hold the starter button", id: "Menahan tombol starter" },
        { en: "Shift to neutral at speed", id: "Pindah ke netral saat kecepatan tinggi" },
        { en: "Turn the engine stop switch off", id: "Mematikan tombol engine stop" }
      ],
      answer: 0,
      explain: {
        en: "With the throttle closed and a gear engaged, the engine resists the rear wheel and the bike slows. It supports the brakes. It does not replace them.",
        id: "Saat gas ditutup dan gigi masih masuk, mesin menahan roda belakang sehingga motor melambat. Ini membantu rem, tetapi tidak menggantikan rem."
      }
    },
    {
      category: { en: "Engine", id: "Mesin" },
      prompt: {
        en: "The redline on a motorcycle tachometer marks:",
        id: "Garis merah pada takometer motor menandai:"
      },
      choices: [
        { en: "The highest engine speed the maker recommends", id: "Putaran mesin tertinggi yang disarankan pabrik" },
        { en: "The best highway cruising speed", id: "Kecepatan jelajah terbaik di jalan tol" },
        { en: "An empty fuel tank", id: "Tangki bensin yang kosong" },
        { en: "The correct tire pressure", id: "Tekanan angin ban yang benar" }
      ],
      answer: 0,
      explain: {
        en: "RPM means revolutions per minute. The redline is the top of the safe operating range marked by the manufacturer.",
        id: "RPM artinya putaran per menit. Garis merah adalah batas atas putaran yang dianggap aman oleh pabrik."
      }
    },
    {
      category: { en: "Engine", id: "Mesin" },
      prompt: {
        en: "In a liquid-cooled motorcycle, the radiator:",
        id: "Pada motor berpendingin cairan, radiator berfungsi untuk:"
      },
      choices: [
        { en: "Gives heat from the coolant to the outside air", id: "Melepas panas dari cairan pendingin ke udara luar" },
        { en: "Stores the fuel", id: "Menyimpan bensin" },
        { en: "Charges the battery by itself", id: "Mengisi aki dengan sendirinya" },
        { en: "Mixes oil into the gasoline", id: "Mencampur oli ke dalam bensin" }
      ],
      answer: 0,
      explain: {
        en: "Coolant carries heat from the engine to the radiator. Air passing through the radiator then carries that heat away.",
        id: "Cairan pendingin membawa panas dari mesin ke radiator. Udara yang melewati radiator lalu membawa panas itu pergi."
      }
    },
    {
      category: { en: "Brakes", id: "Rem" },
      prompt: {
        en: "In a typical stop on a motorcycle, most of the braking force comes from:",
        id: "Pada pengereman biasa di sepeda motor, sebagian besar gaya rem berasal dari:"
      },
      choices: [
        { en: "The front brake", id: "Rem depan" },
        { en: "The rear brake alone", id: "Hanya rem belakang" },
        { en: "Engine braking alone", id: "Hanya engine brake" },
        { en: "The side stand", id: "Standar samping" }
      ],
      answer: 0,
      explain: {
        en: "Weight shifts onto the front tire under braking, so the front brake does most of the stopping. The rear brake still helps settle the bike.",
        id: "Saat mengerem, beban pindah ke ban depan, jadi rem depan mengerjakan sebagian besar penghentian. Rem belakang tetap membantu menstabilkan motor."
      }
    },
    {
      category: { en: "Maintenance", id: "Perawatan" },
      prompt: {
        en: "When should motorcycle tire pressure be set to the number in the manual?",
        id: "Kapan tekanan angin ban motor disetel sesuai angka di buku manual?"
      },
      choices: [
        { en: "When the tires are cold", id: "Saat ban masih dingin" },
        { en: "Right after a long highway run", id: "Tepat setelah perjalanan jauh di jalan tol" },
        { en: "Only at night, with the bike on the side stand", id: "Hanya pada malam hari, saat motor diparkir dengan standar samping" },
        { en: "After the tires look shiny", id: "Setelah ban terlihat mengilap" }
      ],
      answer: 0,
      explain: {
        en: "Riding heats the air inside the tire and raises the pressure. Check and set it when the tires are cold, before the ride, using the maker’s figures.",
        id: "Berkendara memanaskan udara di dalam ban dan menaikkan tekanannya. Cek dan setel tekanan saat ban dingin, sebelum jalan, sesuai angka pabrik."
      }
    },
    {
      category: { en: "Controls", id: "Kontrol" },
      prompt: {
        en: "What is the engine stop switch on the handlebar for?",
        id: "Untuk apa tombol engine stop di stang?"
      },
      choices: [
        { en: "Cutting the ignition quickly", id: "Memutus pengapian dengan cepat" },
        { en: "Shifting into neutral", id: "Masuk ke gigi netral" },
        { en: "Adding air to the tires", id: "Menambah angin pada ban" },
        { en: "Opening the fuel cap", id: "Membuka tutup tangki" }
      ],
      answer: 0,
      explain: {
        en: "The stop switch shuts the engine off without the key. It must be in the run position or the bike will not start.",
        id: "Tombol ini mematikan mesin tanpa memutar kunci. Posisinya harus Run, kalau tidak motor tidak mau hidup."
      }
    },
    {
      category: { en: "Clutch", id: "Kopling" },
      prompt: {
        en: "A slipper clutch on a motorcycle mainly helps by:",
        id: "Kopling slipper pada motor terutama membantu dengan cara:"
      },
      choices: [
        { en: "Reducing rear-wheel hop on hard downshifts", id: "Mengurangi loncatan roda belakang saat gigi diturunkan dengan kasar" },
        { en: "Raising the bike’s top speed", id: "Menaikkan kecepatan tertinggi motor" },
        { en: "Replacing the front brake", id: "Menggantikan rem depan" },
        { en: "Locking the steering", id: "Mengunci kemudi" }
      ],
      answer: 0,
      explain: {
        en: "When engine braking is strong, a slipper clutch slips slightly so the rear tire is less likely to chatter or hop.",
        id: "Saat engine brake kuat, kopling slipper sedikit selip supaya ban belakang tidak mudah bergetar atau meloncat."
      }
    },
    {
      category: { en: "Bikes", id: "Jenis motor" },
      prompt: {
        en: "A pillion on a motorcycle is:",
        id: "Pillion pada sepeda motor adalah:"
      },
      choices: [
        { en: "The passenger seat behind the rider", id: "Dudukan penumpang di belakang pengendara" },
        { en: "The front fender", id: "Spakbor depan" },
        { en: "The oil filter", id: "Filter oli" },
        { en: "The side stand", id: "Standar samping" }
      ],
      answer: 0,
      explain: {
        en: "The pillion is the passenger seat. Tires and pressure should suit the extra weight, and the passenger needs footpegs and something to hold.",
        id: "Pillion adalah tempat duduk penumpang. Ban dan tekanan angin perlu sesuai dengan beban tambahan, dan penumpang perlu pijakan kaki serta pegangan."
      }
    },
    {
      category: { en: "Chassis", id: "Rangka" },
      prompt: {
        en: "What does the swingarm do?",
        id: "Apa fungsi swing arm?"
      },
      choices: [
        { en: "Holds the rear wheel and lets it move up and down", id: "Menahan roda belakang dan membiarkannya bergerak naik-turun" },
        { en: "Steers the front tire", id: "Mengarahkan ban depan" },
        { en: "Stores the fuel", id: "Menyimpan bensin" },
        { en: "Charges the battery", id: "Mengisi aki" }
      ],
      answer: 0,
      explain: {
        en: "The swingarm pivots so the rear wheel can follow the road while staying connected to the frame.",
        id: "Swing arm bergerak pada porosnya supaya roda belakang mengikuti jalan, sambil tetap terhubung ke rangka."
      }
    },
    {
      category: { en: "Bikes", id: "Jenis motor" },
      prompt: {
        en: "A full fairing on a sport motorcycle mainly:",
        id: "Fairing penuh pada motor sport terutama berfungsi untuk:"
      },
      choices: [
        { en: "Smooths airflow and shields the rider from some of the wind", id: "Merapikan aliran udara dan menahan sebagian angin dari pengendara" },
        { en: "Replaces the engine", id: "Menggantikan mesin" },
        { en: "Holds oil for the chain", id: "Menampung oli untuk rantai" },
        { en: "Steers the bike by itself", id: "Mengemudikan motor sendiri" }
      ],
      answer: 0,
      explain: {
        en: "The bodywork guides air around the bike and can take some wind off the rider’s chest. It is not a substitute for protective gear.",
        id: "Bodi mengarahkan udara di sekeliling motor dan bisa mengurangi angin di dada pengendara. Fairing bukan pengganti perlengkapan keselamatan."
      }
    },
    {
      category: { en: "Clutch", id: "Kopling" },
      prompt: {
        en: "What is the clutch’s job in the drivetrain?",
        id: "Apa tugas kopling dalam sistem penggerak?"
      },
      choices: [
        { en: "Connect and disconnect the engine from the gearbox", id: "Menghubungkan dan memutus mesin dari girboks" },
        { en: "Cool the front tire", id: "Mendinginkan ban depan" },
        { en: "Measure the fuel level", id: "Mengukur sisa bensin" },
        { en: "Turn the headlight on", id: "Menyalakan lampu depan" }
      ],
      answer: 0,
      explain: {
        en: "With the lever pulled in, the engine can spin without driving the rear wheel through the gears. Let it out smoothly to take up drive.",
        id: "Saat tuas ditarik, mesin bisa berputar tanpa memutar roda belakang lewat gigi. Lepaskan kopling dengan halus untuk menyalurkan tenaga."
      }
    },
    {
      category: { en: "Chassis", id: "Rangka" },
      prompt: {
        en: "The front forks of a motorcycle:",
        id: "Garpu depan sepeda motor berfungsi untuk:"
      },
      choices: [
        { en: "Connect the front wheel to the frame and absorb bumps", id: "Menghubungkan roda depan ke rangka dan meredam guncangan" },
        { en: "Shift the gears", id: "Memindahkan gigi" },
        { en: "Pump fuel to the injectors", id: "Memompa bensin ke injektor" },
        { en: "Hold only the license plate", id: "Hanya menahan pelat nomor" }
      ],
      answer: 0,
      explain: {
        en: "The forks slide as the front wheel hits bumps, and they turn with the handlebar to steer the bike.",
        id: "Garpu bergeser saat roda depan melewati gundukan, dan ikut berbelok bersama stang untuk mengarahkan motor."
      }
    },
    {
      category: { en: "Riding", id: "Berkendara" },
      prompt: {
        en: "Trail braking means:",
        id: "Trail braking berarti:"
      },
      choices: [
        { en: "Easing off the brakes as you lean farther into a corner", id: "Mengurangi rem secara bertahap saat motor makin condong masuk tikungan" },
        { en: "Braking only after the corner is finished", id: "Mengerem hanya setelah tikungan selesai" },
        { en: "Covering the brake lamp for the whole ride", id: "Menutup lampu rem selama perjalanan" },
        { en: "Using the engine stop switch in a turn", id: "Memakai tombol engine stop di dalam tikungan" }
      ],
      answer: 0,
      explain: {
        en: "The rider is still lightly on the brakes at turn-in, then releases them as the bike takes more lean and the throttle comes back on.",
        id: "Pengendara masih mengerem ringan saat mulai menikung, lalu melepas rem saat motor makin condong dan gas mulai dibuka lagi."
      }
    },
    {
      category: { en: "Safety", id: "Keselamatan" },
      prompt: {
        en: "Before moving off, a rider’s helmet should be:",
        id: "Sebelum jalan, helm pengendara sebaiknya:"
      },
      choices: [
        { en: "Fastened snug with the chin strap", id: "Terpasang kencang dengan tali dagu" },
        { en: "Hung from the handlebar", id: "Digantung di stang" },
        { en: "Worn with the strap left open", id: "Dipakai dengan tali yang dibiarkan terbuka" },
        { en: "Held on by the wind only", id: "Hanya ditahan oleh angin" }
      ],
      answer: 0,
      explain: {
        en: "An unfastened helmet can come off in a crash. The strap should keep the helmet in place, and the helmet should meet the standard required where you ride.",
        id: "Helm yang talinya tidak dikencangkan bisa terlepas saat jatuh. Tali harus menahan helm di tempatnya, dan helm sebaiknya memenuhi standar yang berlaku di tempat kamu berkendara."
      }
    }
  ];

  var lang = loadLang();
  var deck = [];
  var index = 0;
  var score = 0;
  var locked = false;
  var pickedIndex = -1;
  var missed = [];

  var startScreen = document.getElementById("screen-start");
  var quizScreen = document.getElementById("screen-quiz");
  var resultScreen = document.getElementById("screen-result");
  var startBtn = document.getElementById("start-btn");
  var nextBtn = document.getElementById("next-btn");
  var againBtn = document.getElementById("again-btn");
  var categoryEl = document.getElementById("category");
  var countEl = document.getElementById("count");
  var barEl = document.getElementById("progress-bar");
  var promptEl = document.getElementById("prompt");
  var choicesEl = document.getElementById("choices");
  var feedbackEl = document.getElementById("feedback");
  var explainEl = document.getElementById("explain");
  var rankEl = document.getElementById("rank");
  var scoreEl = document.getElementById("score-line");
  var rankLineEl = document.getElementById("rank-line");
  var reviewWrap = document.getElementById("review-wrap");
  var reviewEl = document.getElementById("review");
  var liveEl = document.getElementById("live");
  var langEnBtn = document.getElementById("lang-en");
  var langIdBtn = document.getElementById("lang-id");

  function loadLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "id" || saved === "en") return saved;
    } catch (error) {
      return "en";
    }
    return "en";
  }

  function copy() {
    return UI[lang];
  }

  function t(value) {
    return value[lang];
  }

  function shuffle(list) {
    var arr = list.slice();
    for (var i = arr.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function say(text) {
    liveEl.textContent = text;
  }

  function applyStatic() {
    var strings = copy();
    document.documentElement.lang = lang === "id" ? "id" : "en";
    document.title = strings.title;
    document.getElementById("meta-description").setAttribute("content", strings.description);
    document.getElementById("lang-switch").setAttribute("aria-label", strings.langLabel);
    document.getElementById("brand-kicker").textContent = strings.kicker;
    document.getElementById("hero-lead").textContent = strings.heroLead;
    document.getElementById("hero-accent").textContent = strings.heroAccent;
    document.getElementById("lede").textContent = strings.lede;
    document.getElementById("fact-count").innerHTML = strings.factCount;
    document.getElementById("fact-topic").innerHTML = strings.factTopic;
    document.getElementById("fact-order").innerHTML = strings.factOrder;
    document.getElementById("eyebrow-start").textContent = strings.eyebrowStart;
    document.getElementById("eyebrow-result").textContent = strings.eyebrowResult;
    document.getElementById("review-title").textContent = strings.reviewTitle;
    document.getElementById("footer-note").textContent = strings.footer;
    document.getElementById("key-hint").textContent = strings.keyHint;
    startBtn.textContent = strings.start;
    againBtn.textContent = strings.again;
    langEnBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    langIdBtn.setAttribute("aria-pressed", lang === "id" ? "true" : "false");
  }

  function saveLang() {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      return;
    }
  }

  function show(screen) {
    startScreen.hidden = screen !== "start";
    quizScreen.hidden = screen !== "quiz";
    resultScreen.hidden = screen !== "result";
  }

  function prepareDeck() {
    return shuffle(BANK).map(function (question) {
      return {
        category: question.category,
        prompt: question.prompt,
        explain: question.explain,
        choices: shuffle(question.choices.map(function (choice, choiceIndex) {
          return { text: choice, correct: choiceIndex === question.answer };
        }))
      };
    });
  }

  function renderQuestion(moveFocus) {
    var question = deck[index];
    var strings = copy();
    categoryEl.textContent = t(question.category);
    countEl.textContent = strings.question + " " + (index + 1) + " " + strings.of + " " + deck.length;
    barEl.style.width = (index / deck.length) * 100 + "%";
    promptEl.textContent = t(question.prompt);
    choicesEl.innerHTML = "";

    question.choices.forEach(function (choice, choiceIndex) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "choice";

      var letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = LETTERS[choiceIndex];

      var label = document.createElement("span");
      label.textContent = t(choice.text);

      button.appendChild(letter);
      button.appendChild(label);
      button.addEventListener("click", function () {
        choose(choiceIndex);
      });
      choicesEl.appendChild(button);
    });

    if (locked) {
      applyAnswerVisuals();
      say(t(question.category) + ". " + t(question.prompt) + " " + t(question.explain));
      return;
    }

    feedbackEl.hidden = true;
    explainEl.textContent = "";
    say(t(question.category) + ". " + t(question.prompt));
    if (moveFocus) {
      var first = choicesEl.querySelector("button");
      if (first) first.focus();
    }
  }

  function applyAnswerVisuals() {
    var question = deck[index];
    var strings = copy();
    var buttons = choicesEl.querySelectorAll("button");
    buttons.forEach(function (button, buttonIndex) {
      button.disabled = true;
      if (question.choices[buttonIndex].correct) button.classList.add("is-correct");
      if (buttonIndex === pickedIndex && !question.choices[buttonIndex].correct) {
        button.classList.add("is-wrong");
      }
    });
    explainEl.textContent = t(question.explain);
    feedbackEl.hidden = false;
    nextBtn.textContent = index === deck.length - 1 ? strings.results : strings.next;
  }

  function choose(choiceIndex) {
    if (locked) return;
    var question = deck[index];
    var picked = question.choices[choiceIndex];
    if (!picked) return;
    locked = true;
    pickedIndex = choiceIndex;

    var correctText = "";
    question.choices.forEach(function (choice) {
      if (choice.correct) correctText = choice.text;
    });

    if (picked.correct) {
      score += 1;
      say(copy().correct + " " + t(question.explain));
    } else {
      missed.push({ prompt: question.prompt, answer: correctText });
      say(copy().wrong + " " + t(correctText) + ". " + t(question.explain));
    }

    applyAnswerVisuals();
    nextBtn.focus();
  }

  function rankFor(points, total) {
    var ranks = copy().ranks;
    var ratio = points / total;
    if (ratio === 1) return ranks.perfect;
    if (ratio >= 0.8) return ranks.high;
    if (ratio >= 0.6) return ranks.mid;
    if (ratio >= 0.4) return ranks.low;
    return ranks.start;
  }

  function renderResult() {
    var strings = copy();
    var result = rankFor(score, deck.length);
    rankEl.textContent = result.title;
    scoreEl.innerHTML = score + " <span>/ " + deck.length + "</span>";
    rankLineEl.textContent = result.line;
    reviewEl.innerHTML = "";

    if (missed.length === 0) {
      reviewWrap.hidden = true;
    } else {
      reviewWrap.hidden = false;
      missed.forEach(function (item) {
        var li = document.createElement("li");
        var question = document.createElement("p");
        question.className = "q";
        question.textContent = t(item.prompt);
        var answer = document.createElement("p");
        answer.className = "a";
        answer.textContent = strings.answerLabel + " " + t(item.answer);
        li.appendChild(question);
        li.appendChild(answer);
        reviewEl.appendChild(li);
      });
    }

    barEl.style.width = "100%";
    say(result.title + ". " + strings.scoreSay + " " + score + " " + strings.outOf + " " + deck.length + ".");
  }

  function startQuiz() {
    deck = prepareDeck();
    index = 0;
    score = 0;
    missed = [];
    locked = false;
    pickedIndex = -1;
    show("quiz");
    renderQuestion(true);
  }

  function next() {
    if (!locked) return;
    if (index === deck.length - 1) {
      show("result");
      renderResult();
      againBtn.focus();
      return;
    }
    index += 1;
    locked = false;
    pickedIndex = -1;
    renderQuestion(true);
  }

  function setLanguage(nextLang) {
    if (nextLang !== "en" && nextLang !== "id") return;
    lang = nextLang;
    saveLang();
    applyStatic();
    if (!quizScreen.hidden) renderQuestion(false);
    if (!resultScreen.hidden) renderResult();
  }

  startBtn.addEventListener("click", startQuiz);
  againBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", next);
  langEnBtn.addEventListener("click", function () { setLanguage("en"); });
  langIdBtn.addEventListener("click", function () { setLanguage("id"); });

  document.addEventListener("keydown", function (event) {
    if (quizScreen.hidden) return;
    if (!locked) {
      var number = Number(event.key);
      if (number >= 1 && number <= 4) {
        event.preventDefault();
        choose(number - 1);
      }
      return;
    }
    if (event.key === "Enter" && event.target !== nextBtn) {
      event.preventDefault();
      next();
    }
  });

  applyStatic();
})();
