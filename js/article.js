document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // 1. БАЗА ДАННЫХ ТОВАРОВ index.html(.products)
  // ============================================
  const products = [
    {
      id: "product-1",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "1-1920.png",
      sku: "D5515A1",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Мощный 15.6-дюймовый сенсорный моноблок MSI Pro 16 Flex. Идеален для работы и дома. Оснащен процессором Intel Celeron QC N3160, 4GB оперативной памяти и графикой Intel HD Graphics. Компактный дизайн и мультитач-экран для удобного управления. Отличное решение для повседневных задач.",
      colors: {
        abbey: { img: "1-1920.png", imgTablet: "1-1024.png", imgMobile: "1-545.png" },
        merino: { img: "1-merino.png", imgTablet: "1-merino-1024.png", imgMobile: "1-merino-545.png" },
        mischka: { img: "1-mischka.png", imgTablet: "1-mischka-1024.png", imgMobile: "1-mischka-545.png" }
      }
    },
    {
      id: "product-2",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",    
      img: "2-1920.png",
      sku: "S23-001",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Флагманский смартфон Samsung Galaxy S23 с мощной камерой 50 МП, процессором Snapdragon 8 Gen 2 и ярким 120-герцовым Dynamic AMOLED 2X дисплеем. Обеспечивает потрясающую производительность для игр, фотосъемки и работы. Компактный и стильный дизайн.",
      colors: {
        abbey: { img: "2-1920.png", imgTablet: "2-1024.png", imgMobile: "2-545.png" },
        merino: { img: "2-merino.png", imgTablet: "2-merino-1024.png", imgMobile: "2-merino-545.png" },
        mischka: { img: "2-mischka.png", imgTablet: "2-mischka-1024.png", imgMobile: "2-mischka-545.png" }
      }
    },
    {
      id: "product-3",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", 
      img: "3-1920.png",
      sku: "ASP-003",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Беспроводные наушники AirSound Pro с активным шумоподавлением (ANC). Погрузитесь в чистый звук без помех. До 30 часов работы на одном заряде, эргономичный дизайн для длительного ношения. Идеальны для путешествий и работы.",
      colors: {
        abbey: { img: "3-1920.png", imgTablet: "3-1024.png", imgMobile: "3-545.png" },
        merino: { img: "3-merino.png", imgTablet: "3-merino-1024.png", imgMobile: "3-merino-545.png" },
        mischka: { img: "3-mischka.png", imgTablet: "3-mischka-1024.png", imgMobile: "3-mischka-545.png" }
      }
    },
    {
      id: "product-4",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      img: "4-1920.png",
      sku: "MK-004",
      desc: "Игровая механическая клавиатура с механическими переключателями (Red/Blue). Характеризуется тактильной отдачей, долгим сроком службы и полной N-Key ролловером. Настраиваемая RGB-подсветка добавит стиля вашему рабочему месту.",
      colors: {
        abbey: { img: "4-1920.png", imgTablet: "4-1024.png", imgMobile: "4-545.png" },
        merino: { img: "4-merino.png", imgTablet: "4-merino-1024.png", imgMobile: "4-merino-545.png" },
        mischka: { img: "4-mischka.png", imgTablet: "4-mischka-1024.png", imgMobile: "4-mischka-545.png" }
      }
    },
    {
      id: "product-5",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      img: "5-1920.png",
      sku: "MON-005",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "27-дюймовый 4K UHD монитор с отличной цветопередачей (IPS матрица) и тонкими рамками. Поддерживает HDR400 и широкие углы обзора. Идеальный выбор для дизайнеров, видеомонтажеров и ценителей высокого качества изображения.",
      colors: {
        abbey: { img: "5-1920.png", imgTablet: "5-1024.png", imgMobile: "5-545.png" },
        merino: { img: "5-merino.png", imgTablet: "5-merino-1024.png", imgMobile: "5-merino-545.png" },
        mischka: { img: "5-mischka.png", imgTablet: "5-mischka-1024.png", imgMobile: "5-mischka-545.png" }
      }
    },
    {
      id: "product-6",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      img: "6-1920.png",
      sku: "MOU-006",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Эргономичная беспроводная мышь с тихими кликами и оптическим сенсором 1600 DPI. Работает до 12 месяцев от одной батарейки. Универсальный помощник для работы и дома.",
      colors: {
        abbey: { img: "6-1920.png", imgTablet: "6-1024.png", imgMobile: "6-545.png" },
        merino: { img: "6-merino.png", imgTablet: "6-merino-1024.png", imgMobile: "6-merino-545.png" },
        mischka: { img: "6-mischka.png", imgTablet: "6-mischka-1024.png", imgMobile: "6-mischka-545.png" }
      }
    },
    {
      id: "product-1",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      img: "1-1920.png",
      sku: "TAB-007",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Мощный планшет Tab Ultra с 11-дюймовым 2.5K дисплеем и стилусом в комплекте. Идеален для рисования, заметок и просмотра видео. Оснащен быстрым процессором и батареей на весь день.",
      colors: {
        abbey: { img: "1-1920.png", imgTablet: "1-1024.png", imgMobile: "1-545.png" },
        merino: { img: "1-merino.png", imgTablet: "1-merino-1024.png", imgMobile: "1-merino-545.png" },
        mischka: { img: "1-mischka.png", imgTablet: "1-mischka-1024.png", imgMobile: "1-mischka-545.png" }
      }
    },
    {
      id: "product-2",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      img: "2-1920.png",
      sku: "BND-008",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Умный фитнес-браслет Band 7 с 1.6-дюймовым AMOLED-экраном. Отслеживает шаги, пульс, сон и более 100 видов тренировок. Водонепроницаемый, с функцией уведомлений и зарядом до 14 дней.",
      colors: {
        abbey: { img: "2-1920.png", imgTablet: "2-1024.png", imgMobile: "2-545.png" },
        merino: { img: "2-merino.png", imgTablet: "2-merino-1024.png", imgMobile: "2-merino-545.png" },
        mischka: { img: "2-mischka.png", imgTablet: "2-mischka-1024.png", imgMobile: "2-mischka-545.png" }
      }
    },
    {
      id: "product-3",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      img: "3-1920.png",
      sku: "D5515A2",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Второй экземпляр MSI Pro 16 Flex. Такой же мощный 15.6-дюймовый сенсорный моноблок. Отличный вариант для организации рабочего места с минималистичным дизайном.",
      colors: {
        abbey: { img: "3-1920.png", imgTablet: "3-1024.png", imgMobile: "3-545.png" },
        merino: { img: "3-merino.png", imgTablet: "3-merino-1024.png", imgMobile: "3-merino-545.png" },
        mischka: { img: "3-mischka.png", imgTablet: "3-mischka-1024.png", imgMobile: "3-mischka-545.png" }
      }
    },
    {
      id: "product-4",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      img: "4-1920.png",
      sku: "D5515A3",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Третий экземпляр MSI Pro 16 Flex. Надежный моноблок для офисных задач и учебы. Сенсорный экран делает взаимодействие с программами более интуитивным.",
      colors: {
        abbey: { img: "4-1920.png", imgTablet: "4-1024.png", imgMobile: "4-545.png" },
        merino: { img: "4-merino.png", imgTablet: "4-merino-1024.png", imgMobile: "4-merino-545.png" },
        mischka: { img: "4-mischka.png", imgTablet: "4-mischka-1024.png", imgMobile: "4-mischka-545.png" }
      }
    }
  ];

  // ============================================
  // 2. БАЗА ДАННЫХ ТОВАРОВ index.html(.customer)
  // ============================================
  const customers = [
    {
      id: "customer-1",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "1.jpg",
      sku: "HP-BS-001",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Надёжный ноутбук для бизнеса HP с отличной производительностью и защитой данных.",
      colors: {
        abbey: { img: "1.jpg", imgTablet: "1-1024.jpg", imgMobile: "1-545.jpg" },
        merino: { img: "1-merino.jpg", imgTablet: "1-merino-1024.jpg", imgMobile: "1-merino-545.jpg" },
        mischka: { img: "1-mischka.jpg", imgTablet: "1-mischka-1024.jpg", imgMobile: "1-mischka-545.jpg" }
      }
    },
    {
      id: "customer-2",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "2.jpg",
      sku: "DELL-US-002",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "27-дюймовый монитор Dell UltraSharp с 4K разрешением и отличной цветопередачей.",
      colors: {
        abbey: { img: "2.jpg", imgTablet: "2-1024.jpg", imgMobile: "2-545.jpg" },
        merino: { img: "1-merino.jpg", imgTablet: "2-merino-1024.jpg", imgMobile: "2-merino-545.jpg" },
        mischka: { img: "2-mischka.jpg", imgTablet: "2-mischka-1024.jpg", imgMobile: "2-mischka-545.jpg" }
      }
    },
    {
      id: "customer-3",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "3.jpg",
      sku: "SNY-WH-003",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Лучшие беспроводные наушники с шумоподавлением. До 30 часов работы, превосходное качество звука.",
      colors: {
        abbey: { img: "3.jpg", imgTablet: "3-1024.jpg", imgMobile: "3-545.jpg" },
        merino: { img: "3-merino.jpg", imgTablet: "3-merino-1024.jpg", imgMobile: "3-merino-545.jpg" },
        mischka: { img: "3-mischka.jpg", imgTablet: "3-mischka-1024.jpg", imgMobile: "3-mischka-545.jpg" }
      }
    },
    {
      id: "customer-4",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "4.jpg",
      sku: "MK-CUS-004",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Игровая механическая клавиатура с механическими переключателями (Red/Blue). Характеризуется тактильной отдачей, долгим сроком службы и полной N-Key ролловером.",
      colors: {
        abbey: { img: "4.jpg", imgTablet: "4-1024.jpg", imgMobile: "4-545.jpg" },
        merino: { img: "4-merino.jpg", imgTablet: "4-merino-1024.jpg", imgMobile: "4-merino-545.jpg" },
        mischka: { img: "4-mischka.jpg", imgTablet: "4-mischka-1024.jpg", imgMobile: "4-mischka-545.jpg" }
      }
    },
    {
      id: "customer-5",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "5.jpg",
      sku: "MON-CUS-005",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "27-дюймовый 4K UHD монитор с отличной цветопередачей (IPS матрица) и тонкими рамками.",
      colors: {
        abbey: { img: "5.jpg", imgTablet: "5-1024.jpg", imgMobile: "5-545.jpg" },
        merino: { img: "5-merino.jpg", imgTablet: "5-merino-1024.jpg", imgMobile: "5-merino-545.jpg" },
        mischka: { img: "5-mischka.jpg", imgTablet: "5-mischka-1024.jpg", imgMobile: "5-mischka-545.jpg" }
      }
    }
  ];

  // ============================================
  // 3. БАЗА ДАННЫХ ТОВАРОВ index.html(.laptops)
  // ============================================
  const laptops = [
    {
      id: "laptops-1",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "1.png",
      sku: "MSI-GS-001",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Игровой ноутбук MSI GS Series с процессором Intel Core i7, RTX 4060, 16GB RAM, 1TB SSD.",
      colors: {
        abbey: { img: "1.png", imgTablet: "1-1024.png", imgMobile: "1-545.png" },
        merino: { img: "1-merino.png", imgTablet: "1-merino-1024.png", imgMobile: "1-merino-545.png" },
        mischka: { img: "1-mischka.png", imgTablet: "1-mischka-1024.png", imgMobile: "1-mischka-545.png" }
      }
    },
    {
      id: "laptops-2",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "2.png",
      sku: "MSI-GT-002",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Топовый игровой ноутбук MSI GT Series с RTX 4080, Intel Core i9, 32GB RAM.",
      colors: {
        abbey: { img: "2.png", imgTablet: "2-1024.png", imgMobile: "2-545.png" },
        merino: { img: "2-merino.png", imgTablet: "2-merino-1024.png", imgMobile: "2-merino-545.png" },
        mischka: { img: "2-mischka.png", imgTablet: "2-mischka-1024.png", imgMobile: "2-mischka-545.png" }
      }
    },
    {
      id: "laptops-3",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "3.png",
      sku: "MSI-GL-003",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Бюджетный игровой ноутбук MSI GL Series с RTX 3050, Intel Core i5, 8GB RAM.",
      colors: {
        abbey: { img: "3.png", imgTablet: "3-1024.png", imgMobile: "3-545.png" },
        merino: { img: "3-merino.png", imgTablet: "3-merino-1024.png", imgMobile: "3-merino-545.png" },
        mischka: { img: "3-mischka.png", imgTablet: "3-mischka-1024.png", imgMobile: "3-mischka-545.png" }
      }
    },
    {
      id: "laptops-4",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "4.png",
      sku: "MSI-GE-004",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Мощный игровой ноутбук MSI GE Series с RTX 4070, Intel Core i7, 16GB RAM.",
      colors: {
        abbey: { img: "4.png", imgTablet: "4-1024.png", imgMobile: "4-545.png" },
        merino: { img: "4-merino.png", imgTablet: "4-merino-1024.png", imgMobile: "4-merino-545.png" },
        mischka: { img: "4-mischka.png", imgTablet: "4-mischka-1024.png", imgMobile: "4-mischka-545.png" }
      }
    },
    {
      id: "laptops-5",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "5.png",
      sku: "MSI-PR-005",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Ультрабук MSI Prestige Series для работы и бизнеса, Intel Core i7, 16GB RAM, 512GB SSD.",
      colors: {
        abbey: { img: "5.png", imgTablet: "5-1024.png", imgMobile: "5-545.png" },
        merino: { img: "5-merino.png", imgTablet: "5-merino-1024.png", imgMobile: "5-merino-545.png" },
        mischka: { img: "5-mischka.png", imgTablet: "5-mischka-1024.png", imgMobile: "5-mischka-545.png" }
      }
    }    
  ];

  // ============================================
  // 4. БАЗА ДАННЫХ ТОВАРОВ index.html(.desktops)
  // ============================================
  const desktops = [
    {
      id: "desktops-1",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "1.png",
      sku: "MSI-TRI-001",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Игровой компактный ПК MSI MPG Trident 3...",
      colors: {
        abbey: { img: "1.png", imgTablet: "1-1024.png", imgMobile: "1-545.png" },
        merino: { img: "1-merino.png", imgTablet: "1-merino-1024.png", imgMobile: "1-merino-545.png" },
        mischka: { img: "1-mischka.png", imgTablet: "1-mischka-1024.png", imgMobile: "1-mischka-545.png" }
      }
    },
    {
      id: "desktops-2",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "2.png",
      sku: "MSI-TRX-002",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Топовый игровой десктоп MSI Trident X...",
      colors: {
        abbey: { img: "2.png", imgTablet: "2-1024.png", imgMobile: "2-545.png" },
        merino: { img: "2-merino.png", imgTablet: "2-merino-1024.png", imgMobile: "2-merino-545.png" },
        mischka: { img: "2-mischka.png", imgTablet: "2-mischka-1024.png", imgMobile: "2-mischka-545.png" }
      }
    },
    {
      id: "desktops-3",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "3.png",
      sku: "MSI-INF-003",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Компактный игровой ПК MSI Infinite S3...",
      colors: {
        abbey: { img: "3.png", imgTablet: "3-1024.png", imgMobile: "3-545.png" },
        merino: { img: "3-merino.png", imgTablet: "3-merino-1024.png", imgMobile: "3-merino-545.png" },
        mischka: { img: "3-mischka.png", imgTablet: "3-mischka-1024.png", imgMobile: "3-mischka-545.png" }
      }
    },
    {
      id: "desktops-4",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "4.png",
      sku: "MSI-CD-004",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Мощный игровой ПК MSI Codex X с RTX 4070...",
      colors: {
        abbey: { img: "4.png", imgTablet: "4-1024.png", imgMobile: "4-545.png" },
        merino: { img: "4-merino.png", imgTablet: "4-merino-1024.png", imgMobile: "4-merino-545.png" },
        mischka: { img: "4-mischka.png", imgTablet: "4-mischka-1024.png", imgMobile: "4-mischka-545.png" }
      }
    },
    {
      id: "desktops-5",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "5.png",
      sku: "MSI-AEG-005",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Игровой ПК MSI Aegis RS с водяным охлаждением...",
      colors: {
        abbey: { img: "5.png", imgTablet: "5-1024.png", imgMobile: "5-545.png" },
        merino: { img: "5-merino.png", imgTablet: "5-merino-1024.png", imgMobile: "5-merino-545.png" },
        mischka: { img: "5-mischka.png", imgTablet: "5-mischka-1024.png", imgMobile: "5-mischka-545.png" }
      }
    }
  ];

  // ============================================
  // 5. БАЗА ДАННЫХ ТОВАРОВ index.html(.monitors)
  // ============================================
  const monitors = [
    {
      id: "monitors-1",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "1.png",
      sku: "MSI-OPT-001",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "27-дюймовый игровой монитор MSI Optix с разрешением 2K, 165Hz, 1ms.",
      colors: {
        abbey: { img: "1.png", imgTablet: "1-1024.png", imgMobile: "1-545.png" },
        merino: { img: "1-merino.png", imgTablet: "1-merino-1024.png", imgMobile: "1-merino-545.png" },
        mischka: { img: "1-mischka.png", imgTablet: "1-mischka-1024.png", imgMobile: "1-mischka-545.png" }
      }
    },
    {
      id: "monitors-2",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "2.png",
      sku: "MSI-TRX-002",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Топовый игровой десктоп MSI Trident X...",
      colors: {
        abbey: { img: "2.png", imgTablet: "2-1024.png", imgMobile: "2-545.png" },
        merino: { img: "2-merino.png", imgTablet: "2-merino-1024.png", imgMobile: "2-merino-545.png" },
        mischka: { img: "2-mischka.png", imgTablet: "2-mischka-1024.png", imgMobile: "2-mischka-545.png" }
      }
    },
    {
      id: "monitors-3",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "3.png",
      sku: "MSI-INF-003",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Компактный игровой ПК MSI Infinite S3...",
      colors: {
        abbey: { img: "3.png", imgTablet: "3-1024.png", imgMobile: "3-545.png" },
        merino: { img: "3-merino.png", imgTablet: "3-merino-1024.png", imgMobile: "3-merino-545.png" },
        mischka: { img: "3-mischka.png", imgTablet: "3-mischka-1024.png", imgMobile: "3-mischka-545.png" }
      }
    },
    {
      id: "monitors-4",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "4.png",
      sku: "MSI-CD-004",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Мощный игровой ПК MSI Codex X с RTX 4070...",
      colors: {
        abbey: { img: "4.png", imgTablet: "4-1024.png", imgMobile: "4-545.png" },
        merino: { img: "4-merino.png", imgTablet: "4-merino-1024.png", imgMobile: "4-merino-545.png" },
        mischka: { img: "4-mischka.png", imgTablet: "4-mischka-1024.png", imgMobile: "4-mischka-545.png" }
      }
    },
    {
      id: "monitors-5",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      link: "Be the first to review this product",
      img: "5.png",
      sku: "MSI-AEG-005",
      questionText: "Have a Question?",
      contactText: "Contact Us",
      desc: "Игровой ПК MSI Aegis RS с водяным охлаждением...",
      colors: {
        abbey: { img: "5.png", imgTablet: "5-1024.png", imgMobile: "5-545.png" },
        merino: { img: "5-merino.png", imgTablet: "5-merino-1024.png", imgMobile: "5-merino-545.png" },
        mischka: { img: "5-mischka.png", imgTablet: "5-mischka-1024.png", imgMobile: "5-mischka-545.png" }
      }
    }
  ];

  // ============================================
  // ОБЪЕДИНЯЕМ ВСЕ ТОВАРЫ В ОДИН МАССИВ
  // ============================================
  const allGoods = [...products, ...customers, ...laptops, ...desktops, ...monitors];

  // ============================================
  // ОПРЕДЕЛЕНИЕ СЕКЦИИ И ХЛЕБНЫХ КРОШЕК
  // ============================================
  function getBreadcrumbs(product) {
    if (!product) return [];
    
    let parentUrl = '';
    let parentName = '';
    
    if (product.id.startsWith('product')) {
      parentUrl = 'index.html#products';
      parentName = 'Product';
    } 
    else if (product.id.startsWith('customer')) {
      parentUrl = 'index.html#customer';
      parentName = 'Customer';
    }
    else if (product.id.startsWith('laptops')) {
      parentUrl = 'index.html#laptops';
      parentName = 'Laptops';
    }
    else if (product.id.startsWith('desktops')) {
      parentUrl = 'index.html#desktops';
      parentName = 'Desktops';
    }
    else if (product.id.startsWith('monitors')) {
      parentUrl = 'index.html#monitors';
      parentName = 'Monitors';
    }
    
    return [
      { name: 'Home', url: 'index.html' },
      { name: parentName, url: parentUrl },
      { name: product.title, url: null }
    ];
  }

  function renderBreadcrumbs(breadcrumbs) {
    const breadcrumbsContainer = document.querySelector('.breadcrumbs__list');
    if (!breadcrumbsContainer) return;
    
    breadcrumbsContainer.innerHTML = '';
    
    breadcrumbs.forEach((crumb, index) => {
      const li = document.createElement('li');
      li.className = 'breadcrumbs__item';
      
      if (crumb.url && index < breadcrumbs.length - 1) {
        const a = document.createElement('a');
        a.className = 'breadcrumbs__link';
        a.href = crumb.url;
        a.textContent = crumb.name;
        li.appendChild(a);
      } else {
        const span = document.createElement('span');
        span.className = 'breadcrumbs__link';
        span.setAttribute('aria-current', 'location');
        span.textContent = crumb.name;
        li.appendChild(span);
      }
      
      breadcrumbsContainer.appendChild(li);
    });
  }

  // ============================================
  // КОРЗИНА (localStorage)
  // ============================================
  
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const product = allGoods.find(item => item.id == id);
  
  let localQuantity = 0;

  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.header__cart-count');
    if (cartCountElement) cartCountElement.textContent = totalCount;
  }

  function getCurrentQuantity() {
    if (!product) return 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === product.id);
    return item ? item.quantity : 0;
  }

  function updateLocalQuantityDisplay() {
    const qtySpan = document.getElementById('payPal-quantity');
    if (qtySpan) qtySpan.textContent = localQuantity;
  }

  function syncLocalQuantityWithCart() {
    localQuantity = getCurrentQuantity();
    updateLocalQuantityDisplay();
  }

  function applyToCart() {
    if (!product) return;
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (localQuantity === 0) {
      if (existingIndex !== -1) cart.splice(existingIndex, 1);
    } else {
      if (existingIndex !== -1) {
        cart[existingIndex].quantity = localQuantity;
      } else {
        cart.push({ id: product.id, title: product.title, price: product.price, quantity: localQuantity });
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function localAdd() { 
    localQuantity++; 
    updateLocalQuantityDisplay(); 
  }
  
  function localRemove() { 
    if (localQuantity > 0) { 
      localQuantity--; 
      updateLocalQuantityDisplay(); 
    } 
  }

  // ============================================
  // ОТОБРАЖЕНИЕ ДАННЫХ ТОВАРА НА СТРАНИЦЕ
  // ============================================  
  if (product) {
    // ХЛЕБНЫЕ КРОШКИ
    const breadcrumbs = getBreadcrumbs(product);
    renderBreadcrumbs(breadcrumbs);
    
    // КАРТИНКА
    let imgFolder;
    if (product.id.startsWith('product')) imgFolder = 'catalog/products';
    else if (product.id.startsWith('customer')) imgFolder = 'customer';
    else if (product.id.startsWith('laptops')) imgFolder = 'laptops';
    else if (product.id.startsWith('desktops')) imgFolder = 'desktops';
    else if (product.id.startsWith('monitors')) imgFolder = 'monitors';
    else imgFolder = 'catalog/products';
    
    const imgElement = document.getElementById('article-img');
    if (imgElement) {
      imgElement.src = `./img/${imgFolder}/${product.img}`;
    }
    
    // НАЗВАНИЕ
    const titleElement = document.getElementById('article-title');
    if (titleElement) titleElement.textContent = product.title;
    
    // ОПИСАНИЕ
    const descElement = document.getElementById('article-desc');
    if (descElement) descElement.textContent = product.desc;
    
    // ССЫЛКИ (статический текст, не из массива)
    const reviewLink = document.querySelector('.article__review-link');
    if (reviewLink) reviewLink.textContent = 'Be the first to review this product';

    // Текст ссылки
    const contactLinkElement = document.getElementById('article-contact-link');
    if (contactLinkElement && product.contactText) {
      contactLinkElement.textContent = product.contactText;
    }

    // Добавляем текст "Have a Question? " перед ссылкой
    const questionTextParagraph = document.querySelector('.article__question-text');
    if (questionTextParagraph && !questionTextParagraph.textContent.includes('Have a Question?')) {
    questionTextParagraph.insertAdjacentHTML('afterbegin', 'Have a Question? ');
  }
    
    // SKU (из массива)
    const skuElement = document.getElementById('article-sku');
    if (skuElement && product.sku) {
      skuElement.textContent = product.sku;
    }
    
    syncLocalQuantityWithCart();
  } else {
    const titleElement = document.getElementById('article-title');
    if (titleElement) titleElement.textContent = "Товар не найден";
  }

  // ============================================
  // НАВЕШИВАЕМ КНОПКИ
  // ============================================
  
  const addBtn = document.getElementById('payPal__to-cart');
  if (addBtn) addBtn.addEventListener('click', localAdd);
  
  const removeBtn = document.getElementById('payPal__qty');
  if (removeBtn) removeBtn.addEventListener('click', localRemove);
  
  const cartBtn = document.getElementById('payPal__btn');
  if (cartBtn) cartBtn.addEventListener('click', applyToCart);
  
  updateCartCount();



  // ============================================
  // 1. ТАБЫ ДЛЯ payPal 
  // ============================================ 
  function initPayPalTabs() {
    const tabs = document.querySelectorAll('[data-path]');
    const panels = document.querySelectorAll('[data-target]');
    
    // Скрыть все панели
    panels.forEach(panel => panel.classList.add('is-hidden'));
    
    // Показать активную
    const activeTab = document.querySelector('[data-path].active');
    if (activeTab) {
        const target = activeTab.dataset.path;
        const activePanel = document.querySelector(`[data-target="${target}"]`);
        if (activePanel) activePanel.classList.remove('is-hidden');
    } else {
        panels[0]?.classList.remove('is-hidden');
    }
    
    // Обработчики
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPath = this.dataset.path;
            
            tabs.forEach(t => {
                t.classList.remove('active', 'active-laptops');
            });
            this.classList.add('active', 'active-laptops');
            
            panels.forEach(panel => panel.classList.add('is-hidden'));
            
            const targetPanel = document.querySelector(`[data-target="${targetPath}"]`);
            if (targetPanel) targetPanel.classList.remove('is-hidden');
        });
    });
  }

  initPayPalTabs();


  // ============================================
  // 2. ТАБЫ ДЛЯ ЦВЕТОВ (Чёрный / Бежевый / Белый)
  // ============================================
  function initColorTabs() {
    const colorTabs = document.querySelectorAll('.color__tab');
    const colorPanels = document.querySelectorAll('[data-target-color]');
    
    if (colorTabs.length === 0) return;
    if (!product || !product.colors) return;  // если нет цветов — выходим
    
    function changeColorImage(color) {
      const colorData = product.colors[color];
      if (!colorData) return;
      
      const imgElement = document.getElementById('article-img');
      const imgMobile = document.getElementById('article-img-mobile');
      const imgTablet = document.getElementById('article-img-tablet');
      
      let imgFolder = 'catalog/products';
      if (product.id.startsWith('customer')) imgFolder = 'customer';
      else if (product.id.startsWith('laptops')) imgFolder = 'laptops';
      else if (product.id.startsWith('desktops')) imgFolder = 'desktops';
      else if (product.id.startsWith('monitors')) imgFolder = 'monitors';
      
      if (imgElement) imgElement.src = `./img/${imgFolder}/${colorData.img}`;
      if (imgMobile) imgMobile.srcset = `./img/${imgFolder}/${colorData.imgMobile}`;
      if (imgTablet) imgTablet.srcset = `./img/${imgFolder}/${colorData.imgTablet}`;
    }
    
    function hideAllColorPanels() {
      colorPanels.forEach(panel => panel.classList.add('is-hidden'));
    }
    
    function showColorPanel(color) {
      const targetPanel = document.querySelector(`[data-target-color="${color}"]`);
      if (targetPanel) targetPanel.classList.remove('is-hidden');
    }
    
    hideAllColorPanels();
    
    const activeColorTab = document.querySelector('.color__tab.active');
    if (activeColorTab) {
      const activeColor = activeColorTab.dataset.pathColor;
      changeColorImage(activeColor);
      showColorPanel(activeColor);
    } else {
      if (colorPanels.length > 0) {
        colorPanels[0].classList.remove('is-hidden');
        changeColorImage('abbey');
      }
    }
    
    colorTabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        const targetColor = this.dataset.pathColor;
        
        colorTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        changeColorImage(targetColor);
        hideAllColorPanels();
        showColorPanel(targetColor);
      });
    });
}
  
  
  
  // Запускаем цветные табы
  initColorTabs();
  
}); 