# Project_HTML_CSS

33 Богатыря



parcel-project-template

Developing

Prerequisites

На компьютере должен быть установлен Node.js.

Для корректной работы SASS-компилятора и других инструментов, необходимо один раз глобально поставить дополнительные пакеты, выполнив в терминале следующие команды. Пользователям MacOS ничего делать не нужно.

Пользователям Windows, в режиме администратора. Как запусттить Powershell в режиме администратора.

npm install --global windows-build-tools
Пользователям Linux.

sudo apt-get install gcc g++ make
Setting up Dev

Один раз на проект установить все зависимости.

npm install
И запустить режим разработки.

npm run dev
Во вкладке браузера перейти по адресу http://localhost:1234.

Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить следующую команду. В корне проекта появится папка build со всеми оптимизированными ресурсами.

npm run build
Deploying / Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote) репозитория. Для этого необходимо в файле package.json отредактировать поле homepage, заменив имя пользователя и репозитория на свои.

"homepage": "https://имя_пользователя.github.io/имя_репозитория"
Также необходимо отредактировать скрипт "predeploy".

"predeploy": "npm run build -- --public-url='/имя_репозитория/'"
После чего в терминале выполнить следующую команду.

npm run deploy
Если нет ошибок в коде и свойство homepage указано верно, запустится сборка проекта в продакшен, после чего содержимое папки build будет помещено в ветку gh-pages на удаленном (remote) репозитории. Через какое-то время живую страницу можно будет посмотреть по адресу указанному в отредактированном свойстве homepage.

Configuration

Все паршалы файлов стилей должны лежать в папке src/sass и импортироваться в src/sass/main.scss
Изображения добавляйте в папку src/images, заранее оптимизировав их. Сборщик просто копирует используемые изображения чтобы не нагружать вашу систему оптимизацией десятков картинок, так как на слабых компьютерах это повесит систему.