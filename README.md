#Коротко о проекте:

```

1. Рейтинг звёзд без js, поэтому звёзды не кликабельные.
2. body { min-width: 366px; } Шапку ломала.
3. /* Условные ПК, ноуты и телевизоры */
/* 1050 из макета (контейнер + отступы) */
@media (max-width: 1050px) {
}
/* Условные планшеты */
@media (max-width: 991.98px) {
}
/* Условные мобилки */
@media (max-width: 767.98px) {
}

[class*="__container"] {
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 15px;
}

/* 2:10:27 */
@media (min-width: 479.98px) and (max-width: 767.98px) {
	.block__item {
		background-color: #77608d;
		padding: 20px;
	}
}

```

https://leska-ver.github.io/techno-store-Jeka/