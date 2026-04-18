# Коротко о проекте:

## Ссылка на макет
- https://www.figma.com/design/W8Q5NDaVbxCl8o8yu6qjJe/Tech-Online-Store-Design--%D0%96%D0%B5%D0%BA%D0%B8---Copy-?m=auto&t=RkxSh8RqtQ1nZPU2-6

## Ссылка на сайт
- https://leska-ver.github.io/techno-store-Jeka/

## Шаблоны в кодепене
1. Таб без jQuery data-target + JS -> https://codepen.io/tmeebphp-the-sans/pen/bNwKLbQ
2. Таб без jQuery data-target + JS в Техно -> https://codepen.io/tmeebphp-the-sans/pen/QwKxmLN?editors=1100
3. Переключение между сеткой и списком + слайдер -> https://codepen.io/tmeebphp-the-sans/pen/YPGLRPb
4. Переключение между сеткой и списком + слайдер (4 блока) -> https://codepen.io/tmeebphp-the-sans/pen/WbGyGqP

## Генератор дерева
- https://yoksel.github.io/html-tree/

## Кодепен глючить, не всё стилить в Дропе(choices). 

# Карта страниц сайта (PNG → HTML)

## 1. index.html (home-1-desktop-1920.png)
**Кто это:** Главная страница

**Откуда пришёл:** Это первая страница, с которой всё начинается

**К кому привязан (куда ведёт):**
- → aboutUs.html (ссылка "About Us" в футере)
- → about.html (страница товара MSI Trident 3)
- → faq.html (ссылка "Terms" в футере)
- → contact.html (ссылка "Contact Us" в футере)
- → account.html (через "My Account" в хедере)
- → basket.html (через иконку корзины в шапке)

---

## 2. shop.html (catalog-1920.png)
**Кто это:** Сетка-Лист / Catalog - 1 (настоящая страница "Товары")

**Откуда пришёл:** Можно прийти с index.html (футер) или с faq.html

**К кому привязан:**
- → index.html (логотип)
- → about.html (страница товара MSI)
- → faq.html (ссылка "Terms")
- → contact.html (футер)
- → account.html (блок "Personal Account")
- → basket.html (иконка корзины)

---

## 3. aboutUs.html (aboutUs-desktop-1920.png)
**Кто это:** О нас / About Us (настоящая страница "О компании")

**Откуда пришёл:** Можно прийти с index.html (футер) или с faq.html

**К кому привязан:**
- → index.html (логотип)
- → about.html (страница товара MSI)
- → faq.html (ссылка "Terms")
- → contact.html (футер)
- → account.html (блок "Personal Account")
- → basket.html (иконка корзины)

---

## 4. about.html (about-desktop-1920.png)
**Кто это:** Страница товара (MSI MPG Trident 3)

**Откуда пришёл:** Можно прийти с index.html, aboutUs.html, shopping.html, details.html, specs.html

**К кому привязан:**
- → faq.html (ссылка "Product Support" → "FAQ")
- → basket.html (кнопка "Add to Cart")
- → checkout.html (кнопка "Buy now")
- → basket.html (иконка корзины)

---

## 5. account.html (account-desktop-1920.png)
**Кто это:** Аккаунт / Личный кабинет

**Откуда пришёл:** Можно прийти с index.html, aboutUs.html, faq.html, register.html

**К кому привязан:**
- → index.html (логотип)
- → basket.html (через "My Orders")
- → checkout.html (через "Address Book")
- → basket.html (иконка корзины)

---

## 6. checkout.html (checkout-desktop-1920.png)
**Кто это:** Оформление заказа

**Откуда пришёл:** Можно прийти с basket.html (корзины) через кнопку "Proceed to Checkout"

**К кому привязан:**
- → basket.html (кнопка "Back" / "Edit cart")
- → index.html (логотип)
- → account.html (ссылка "create an account after checkout")
- → basket.html (иконка корзины)

---

## 7. contact.html (contact-desktop-1920.png)
**Кто это:** Страница товара (MSI MPG Trident 3) — ещё одна

**Откуда пришёл:** Можно прийти с index.html, shopping.html, about.html, specs.html

**К кому привязан:**
- → faq.html (ссылка "Product Support" → "FAQ")
- → basket.html (кнопка "Add to Cart")
- → checkout.html (кнопка "Buy now")
- → basket.html (иконка корзины)

---

## 8. details.html (details-desktop-1920.png)
**Кто это:** Детали товара

**Откуда пришёл:** Можно прийти с shopping.html (категории)

**К кому привязан:**
- → specs.html (вкладка "Specifications")
- → about.html (через "Features")
- → contact.html (через "Features")
- → shopping.html (через "Add to Cart" → basket.html)
- → basket.html (иконка корзины)

---

## 9. faq.html (faq-desktop-1920.png)
**Кто это:** Terms & Conditions (Правила и условия магазина), НЕ FAQ

**Откуда пришёл:** Можно прийти с index.html (футер "Terms"), aboutUs.html, about.html, shopping.html

**К кому привязан:**
- → index.html (логотип)
- → aboutUs.html (футер "About Us")
- → contact.html (футер "Contact Us")
- → account.html (блок "Personal Account")
- → basket.html (иконка корзины)

---

## 10. shopping.html (shopping-1-desktop-1920.png)
**Кто это:** Витрина / Список товаров (категория/каталог)

**Откуда пришёл:** Можно прийти с index.html (через раздел "Desktop PCs") или с basket.html (кнопка "Continue Shopping")

**К кому привязан:**
- → details.html (клик по товару)
- → about.html (клик по товару MSI)
- → contact.html (клик по другому товару)
- → basket.html (кнопка "Add to Cart")
- → faq.html (ссылка "Product Support" → "FAQ")
- → basket.html (иконка корзины)

---

## 11. basket.html (shopping-2-desktop-1920.png)
**Кто это:** Корзина

**Откуда пришёл:** Можно прийти с ЛЮБОЙ страницы через иконку корзины в шапке. А также с shopping.html (Add to Cart), с about.html, с contact.html, с details.html

**К кому привязан:**
- → checkout.html (кнопка "Proceed to Checkout")
- → shopping.html (кнопка "Continue Shopping")
- → index.html (логотип)

---

## 12. specs.html (specs-desktop-1920.png)
**Кто это:** Характеристики товара

**Откуда пришёл:** Можно прийти с details.html (вкладка "Specifications")

**К кому привязан:**
- → details.html (вкладка "Features" / "Overview")
- → about.html (ссылка "Have a Question? Contact Us")
- → contact.html (ссылка "Have a Question? Contact Us")
- → basket.html (иконка корзины)

---

## 13. register.html (register-desktop-1920.png)
**Кто это:** Регистрация

**Откуда пришёл:** Можно прийти с checkout.html (ссылка "create an account") или с index.html

**К кому привязан:**
- → account.html (после регистрации)
- → index.html (логотип)
- → basket.html (иконка корзины)

---

## Схема "кто откуда пришёл" (главные переходы)

| Страница | Откуда можно прийти |
|----------|---------------------|
| index.html | Стартовая, ниоткуда (или с любой по логотипу) |
| shop.html | MSI Prestige Series |  
| aboutUs.html | index.html, faq.html |
| about.html | index.html, aboutUs.html, shopping.html, details.html, specs.html |
| account.html | index.html, register.html, faq.html |
| checkout.html | basket.html |
| contact.html | index.html, shopping.html, about.html, specs.html |
| details.html | shopping.html |
| faq.html | index.html, aboutUs.html, about.html, shopping.html |
| shopping.html | index.html, basket.html |
| basket.html | ЛЮБАЯ страница (иконка корзины), shopping.html, about.html, contact.html |
| specs.html | details.html |
| register.html | index.html, checkout.html |

---

## Всего страниц: 13

## Названия страниц для title (по-русски)

| HTML файл | Title (название вкладки по-русски) | Название в Figma |
|-----------|-----------------------------------|-----------------------------------|
| `index.html` | Главная | Home Page - 1 | 
| `shop.html` | Товары | Catalog - 1 | 
| `aboutUs.html` | О нас | About Us - 1 |
| `about.html` | Товар MSI Trident 3 | Product - About Product - 1 |
| `account.html` | Личный кабинет | User Account - 1 |
| `checkout.html` | Оформление заказа | Checkout - 1 |
| `contact.html` | Товар MSI Trident 3 | Contact Us - 1 |
| `details.html` | Детали товара | Product - Details - 1 |
| `faq.html` | Правила и условия | FAQ - 1 |
| `shopping.html` | Каталог товаров | Shopping Cart - 1 |
| `basket.html` | Корзина | Shopping Cart - 2 |
| `specs.html` | Характеристики | Product - Specs - 1 |
| `register.html` | Регистрация | Register - 1 |


## Состояние
```text
. {
  -webkit-transition: all var(--transition-duration);
  -ms-transition: all var(--transition-duration);
  -moz-transition: all var(--transition-duration);
  -o-transition: all var(--transition-duration);
  transition: all var(--transition-duration);
  outline: none;
}

.:focus  {
  border: 1px solid var(--color-blueRibbon);
}

.:hover {
  border: 1px solid var(--color-selectiveYellow);
}

.:active {
  border: 1px solid var(--color-doveGray);
}
```

## Красота и безопасность ✅
```text
<!-- 
  rel="noopener noreferrer" при ссылке с target="_blank":
    🔒 Запрещает новой вкладке управлять твоей страницей
    🕵️ Скрывает от неё, откуда пришёл пользователь
-->
<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
  <svg>...</svg>
</a>
```

## SWIPER в JS
```text
dynamicBullets: true, Уменьшает шарики
```

## Шапку, Шаблоны(review, portal) и Подвал ⛔
```text
Не трогаем! 
```

## Названия страниц для шаблона toolbar

| HTML файл | Страница (H1) | Кому надо  `← Back` | Кому надо `Forward →` | Родня | Заголовок <h1> |
|-----------|---------------|------------------|---------------------|-------|----------------|
| `index.html` | Главная | ❌ нет | `laptops.html` | Прапрадед | Home |
| `laptops.html` | Ноутбуки | `index.html` | `everyday-notebooks.html` | Прадед | Laptops |
| `everyday-notebooks.html` | Everyday Use Notebooks | `laptops.html` | `msi-prestige.html` | Дед | Everyday Use Notebooks |
| `msi-prestige.html` | MSI Prestige Series | `everyday-notebooks.html` | `shop.html` | Отец | MSI Prestige Series |
| `shop.html` | MSI WS Series | `msi-prestige.html` | ❌ нет | Сын (конечная страница) | Товары (Catalog - 1) |










