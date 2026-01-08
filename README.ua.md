# REACT-PHONE_CATALOG
- [DEMO LINK](https://olegmysko.github.io/react-phone-catalog/)
- [FIGMA DESIGN](https://www.figma.com/design/xMK2Dy0mfBbJJSNctmOuLW/Phone-catalog--V2--Rounded-Style-1?node-id=0-1&p=f)

# Product Catalog App

Сучасний **Product Catalog** застосунок, створений з використанням **React, TypeScript та Redux**.
Проєкт демонструє роботу з глобальним станом, маршрутизацією, асинхронними запитами та масштабованою архітектурою.

##  Технології
- React
- TypeScript
- Redux / Redux Toolkit
- React Router
- SCSS Modules
- LocalStorage

##  Основні можливості
- Каталог товарів (Phones / Tablets / Accessories)
- Сортування та пагінація збережені в URL
- Детальна сторінка продукту
- Кошик з підрахунком кількості та суми
- Обране (Favorites)
- Збереження стану в localStorage
- Loader, обробка помилок, empty states
- NotFoundPage для невідомих маршрутів

##  Архітектура
- Feature-based структура (`modules`)
- Ізольовані компоненти з CSS Modules
- Глобальний стан через Redux
- Логіка, UI та сторінки розділені

##  Redux використовується для
- Кошика (cart)
- Обраних товарів (favorites)
- Даних продуктів, loading та error станів

##  UI / UX
- header з лічильниками
- Плавні hover-ефекти
- Масштабування зображень при наведенні
- Smooth scroll “Back to top”
- UI реалізований згідно UI Kit

##  Запуск проєкту
```bash
npm install
npm start

