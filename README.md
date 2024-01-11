# special-2024

Special — прекрасное медиасообщество на темы программирования, техники и разработки. На
Special обсуждаются актуальные темы, раскрываются интересные статьи.

Медиасообщество Special открытое и бесплатное для каждого. В основе медиасообщества
лежат прекрасные статьи, которые могут быть написаны любым пользователем.

Быстрая работа медиасообщества, интересные и актуальные статьи,
тёмная тема, доступность для всех пользователей — всё это и есть медиасообщество Special.

## Технологии

В основе медиасообщества Special лежит сборщик пакетов Gulp. В корне проекта находятся настройки сборщика,
в файле `gulpfile.js`

### Задания Gulp

Сборщик пакетов имеет несколько заданий:

- `njk`
- `css`
- `js`
- `fonts`, `folder`
- `images`, `imagesPost`
- `sitemapCreate`, `feedXML`, `pagesJson`, `feedTurboXML`

### Статьи проекта pages.json

Все статьи проекта хранятся в файле `pages.json` в корне проекта. Данный файл находится вне папки сборки, но перемещается по конечному
пути `/js/pages.json`.

Данный JSON файл — массив объектов следующего вида:

```
{
    "id": "...",
    "title": "...",
    "class": "...",
    "link": "https://news.dybka.ru/...",
    "description": "...",
    "content": "...",
    "year_publish": "..."
}
```

- `id` — id-параметр, который применяется для фильтрации статей на странице темы
- `title` — название статьи
- `class` — класс статьи (Игры, Проекты, Техника...)
- `link` — полная ссылка статьи (в исходном коде страниц используется путь до ресурса)
- `description` — описание статьи
- `content` — полное содержимое статьи (только уникальный контент, здесь не содержится вспомогательный контент)
- `year_publish` — год публикации статьи.

### Страницы

Страницы проекта формируются на основе шаблонов в папке layouts. Шаблоны и страницы представляют собой
файлы Nunjucks с расширением HTML. Nunjucks — язык шаблонов для JavaScript, с их помощью можно использовать
шаблоны, подключать файлы, создавать переменные и многое другое. В итоге, страницы проекта будут представлять
собой собранные и сжатые файлы HTML.

### Папка app

Внутри папки app хранится техническая часть проекта: медиафайлы, CSS-стили, JS скрипты и различные другие файлы.
Содержимое папки app будет собрано в корне проекта.

### Сборка папки app

CSS стили в папке app/css будут собраны в 1 файл: `index.css` и сжаты, в папке `app/css/\_static` файлы будут только сжаты.
JS скрипты, шрифты никак не модифицируются. Картинки перемещаются в 2 задачи: перемещение из папки `app/img` и из папок страниц `posts/\*`.
Папка `app/more` содержит вспомогательные файлы проекта.

### Sitemap, feed, Яндекс Турбо

Такие файлы как `sitemap.xml`, `rss.xml` и `turbo.xml` формируются автоматически с помощью файла статей `pages.json` и npm модулей `gulp-sitemap`,
`@zadkiel/gulp-feed`, `turbo-rss`.

Sitemap формируется на основе папок проекта `pages`, `posts` и корня.

RSS-лента формируется на основе данных из файла `pages.json`.

## Установка

1. Скопируйте данный репозиторий, если нужно — форкните его к себе в профиль
2. Установите зависимости проекта: `npm i`, убедитесь, что все зависимости были установлены правильно
3. При первом запуске проекта может появиться ошибка об отсутствии нужного файла в директории dist,
   для того, чтобы исправить данную ошибку, в корне проекта создайте папку `dist/js/` и скопируйте туда
   файл `pages.json` из корня проекта
4. Используйте команду `gulp` для запуска проекта, если вам нужно использовать определенную задачу из файла
   `gulpfile.js`, после команды `gulp` напишите название определенной задачи: `gulp <название_задачи>`.

### Структура проекта

Проект содержит файлы корня (`gulpfile.js`, `LICENSE`, `package-lock.json`, `package.json`, `README.md`, `pages.json`) и
папку src. Из всех файлов корня нас интересует только `gulpfile.js` и `pages.json`.

В файле `gulpfile.js` описаны инструкции для сборки проекта. Если вы хотите модернизировать сборку проекта,
добавить новые задачи — вам следует описать новые инструкции в этом файле, и добавить условие их вызова.

После добавления новой статьи, следует добавить её в файл `pages.json`. При первой сборке данный файл автоматически
будет обновлен в папке продакшена.

Папка `src` — папка проекта, содержит описание сайта медиасообщества. Информация из данной папки используется для
формирования папки продакшена `dist`, именно данную папку следует использовать для выгрузки на сайт.

## Добавление статьи

Добавление статьи на сайте медиасообщества Special невероятно простое. Чтобы добавить статью на сайт, вы можете использовать
разные инструкции, основная инструкция описана на сайте: (https://news.dybka.ru/about/post/)[https://news.dybka.ru/about/post/].

Добавить статью вы можете 2-мя способами: самостоятельно и через администратора.

Сначала нужно подготовить проект статьи. После успешной подготовки проекта, отправьте (пулл-реквеста)[https://github.com/DanyaBooba/special-2024/pulls]
на данный репозиторий.

Второй вариант — отправить готовый проект статьи администратору. Связаться с администратором:

- (телеграм)[https://ddybka.t.me]
- (вконтакте)[https://vk.com/ddybka]
- (daniil@dybka.ru)[mailto:daniil@dybka.ru]

## Лицензии

Автор проекта: Даниил Дыбка.

Смотреть профиль GitHub: (открыть)[https://github.com/DanyaBooba]

Профили в других соцсетях:

- (телеграм)[https://ddybka.t.me]
- (вконтакте)[https://vk.com/ddybka]
- (daniil@dybka.ru)[mailto:daniil@dybka.ru]

Вы можете связаться со мной по почте или телеграму.
