# 🎬 Gallery Films  

**Gallery Films** — это веб-приложение для просмотра фильмов с использованием данных из **Kinopoisk API**. Проект создан на **React** с использованием **TypeScript**, **Zustand** для управления состоянием и **Tanstack Query** для работы с асинхронными данными.  

## 🛠 Стек технологий  
- **React** — библиотека для создания пользовательских интерфейсов  
- **TypeScript** — типизация и улучшенная поддержка разработки  
- **Zustand** — управление состоянием приложения  
- **Tanstack Query (React Query)** — управление запросами к API и кеширование данных  
- **Kinopoisk API** — источник данных о фильмах и сериалах  

## 📦 Установка и запуск  

1. **Склонируйте репозиторий:**  
   ```bash
   git clone https://github.com/MaxDon26/gallery-films.git
   cd gallery-films
   ```
2. **Установите зависимости:**  
   ```bash
   npm install
   ```
3. **Создайте `.env` файл:**  
   Добавьте ваш API ключ для **Kinopoisk API**:  
   ```
   VITE_API_KEY=ваш_ключ_API
   ```

4. **Запустите приложение:**  
   ```bash
   npm start
   ```

5. Приложение будет доступно по адресу: [http://localhost:5173](http://localhost:5173)

## 📁 Структура проекта  

```
/src
  ├── app        # Основные компоненты приложения
  ├── entities   # Компоненты и модули для работы с данными
  ├── features   # Реализация бизнес-логики и работа с API
  ├── shared     # Общие утилиты, константы и вспомогательные функции
  └── pages      # Страницы приложения
```

## 🔑 Основные возможности  
- Поиск фильмов и сериалов  
- Просмотр подробной информации о фильме  
- Кеширование запросов к API с помощью **Tanstack Query**  
- Управление состоянием через **Zustand**  


## 📌 Планы по доработке  
- Реализовать адаптив
- Реализовать пагинацию  
- Улучшить SEO и производительность  

## 🤝 Контакты  
Если у вас есть вопросы или предложения, напишите мне:  
- **GitHub:** [MaxDon26](https://github.com/MaxDon26)  

---

