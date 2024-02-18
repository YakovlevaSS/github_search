# Сайт для поиска пользователей на GitHub и просмотра информации о них" 
### Аттестационное задание

## Описание функционала проекта:
При загрузке приложения подгружается случайный список пользователей. При вводе данных в поисковую строку динамически подгружается список пользователей, логин которых соответствует введенным данным. По дефолту задана сортировка пользователе по убываню числа репозиториев. При клике на кнопку сортировка меняется (по возрастанию и обратно). Настроена пагинация страниц. На странице отбражается по 12 пользователей. При клике на карточку пользователя редирект на страницу с подробной информацией о нем.

## Используемые технологии:
- React
- Redux Toolkit
- RTK Query
- React Router DOM
- Styled Components
- Jest
- EsLint
- Prettier
- react-js-pagination
- moment


## Установка и запуск проекта:
1. Проверьте, установлен у вас Node.js, если нет, то установите согласно инструкции на сайте https://nodejs.org/en
2. Клонируйте репозиторий: git clone git@github.com:YakovlevaSS/github_search.git
3. Перейдите в директорию клонированного проекта: cd github_search
4. Установить заисимости: npm install
5. Создайте файл .env.local и запишите туда personal access tokens, полученный на GitHub, пример записи в файле .env.local.example. Если вы не получали token, то получите в соответствии с инструкцией в документации GitHub https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
6. Запустите приложение: npm run start.
Приложение будет запущено на http://localhost:3000.

## Запуск тестов:
1. Введите в терминале: npm run test




