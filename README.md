# ТП-2-1

Приложение "Мессенджер Meschat"

# Описание проекта
Данный проект представляет собой мессенджер, позволяющий всем пользователям переписываться между собой. 
Веб-сайт был разработан, с оглядкой на конкурентов, так, мы разработали удобный, простой и интуитивно понятный интерфейс, который будет привычен пользователям других мессенджеров и соц сетей. Есть возможность написать любому пользователю на сайте, добавить его в избранное, чтобы он был выше в списке пользователей, дабы вам не пришлось листать далеко вниз, в поисках своего любимого собеседника. Но так же есть и поиск пользователей, ведь когда на сайт будет зарегестировано довольно большое количество людей, найти кого то вручную будет сложной задачей.

Веб-приложение разрабатывалось на основе архитектурного паттерна MVC. Код находится в текущей дирректории github.

# Веб-сайт
[Meschat](http://158.160.96.21:3000/)

[Meschat swagger](http://158.160.96.21:8000/swagger/)

# Наша команда:

[Нарек Антонян](https://github.com/AntonyanNarek) - Тимлид, backend разработчик

[Андрей Островерхов](https://github.com/ostrowerkhov) - Дизайнер и frontend разработчик

[Артём Рассман](https://github.com/Paccmanio) - Проектировщик бд, тестировщик 

# Инструкция по запуску веб-приложения для пользователя
Необходимо перейти по ссылке в [Meschat](http://158.160.96.21:3000/). Далее обязательно нужна регистрация, но мы преоставляем тестовый акаунт для входа.
При входе нужно заполнить о себе обязательную информацию и при желании (необязательно) можете загрузить аватарку (png, jpg). Не волнуйтесь если что то неправильно ввели, всегда можно обновить информацию профиля и его аватарку нажатием на кнопку настроек рядом с пользователем в верхнем левом углу экрана. При нажатии в левой панели на других пользователей, открывается чат в окне справа, в верхней панели чата есть две кнопки - для добавления пользователя в избранное, и для просмотра информации о пользователе. Так же для поиска пользователя по имени или фамилии вы можете ввести это в поле для поиска, находящееся в левой панели над списком пользователей

Учетные данные тестового аккаунта:
#### Login: test
#### Password: test

# Ссылки

[Trello](https://trello.com/b/iTJ6RSBX/untitled-board)

[Figma maket](https://www.figma.com/file/VyGW8ECnnXEXN4RI97NOZL/MesChat?node-id=1-18&t=rHojKdiQia62k1aC-0)

[Miro](https://miro.com/app/board/uXjVMbdqiiE=/)

# Документация

[Техническое задание](https://github.com/AntonyanNarek/MesChat/blob/master/documentation/TZ_TP-2-1_2.pdf)

[Диаграммы](https://vk.com/away.php?utf=1&to=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1AFmhSYDaAcNUoYBtvwD3YUATv9Ftnd_M%3Fusp%3Dshare_link)

[Курсовая](https://github.com/AntonyanNarek/MesChat/blob/master/documentation/kursa4.pdf)

[Презентация](https://github.com/AntonyanNarek/MesChat/blob/master/documentation/Prezentatsia_Meschat%20(1).pdf)

[Сопроводительное письмо](https://github.com/AntonyanNarek/MesChat/blob/master/documentation/Soprovoditelnoe_pismo.pdf)

# Видеофайлы

[Видео с backend](https://drive.google.com/file/d/1k4rR6CF1tUdNrfqLfhnie5L32KmqeHDd/view?usp=drive_link)

[Видео с frontend](https://drive.google.com/file/d/10a6hs56zvMgXwDpMiTQ5nDMiAw8PUHk4/view?usp=drive_link)

[Видео с развертыванием](https://drive.google.com/file/d/1LflaGEkjNXr3tGSNRMu7PmTAIqzLvWRB/view?usp=drive_link)

[Видеопрезентация](https://drive.google.com/file/d/18rb4N7w78XtNhCCbFEmZqezRJwF-iMxX/view?usp=drive_link)

# Инструкция по запуску веб-приложения для разработчиков 
## 1 способ (без docker): 
  

 Необходимо установить папку с серверной частью кода, открыть командную строку и прописать команды:
  
  #### -pip install -r requirements.txt // Установка библиотек
  
  #### -python migrate // Миграции в бд
  
  #### -python manage.py runserver

 Необходимо установить папку socket_server, открыть командную строки, дойти до расположения папки и прописать команды:
  
  #### -npm install //Установка библиотек из package.json
  
  #### -node index.js

 Необходимо устновить папку frontend, открыть командную строку, дойти до расположения папки и прописать следующие команды:
  
  #### -npm install //Установка библиотек из package.json
  
  #### -npm start

## 2 способ (через docker):

Необходимо создать образы серверной, клиентской части и сокет сервера:

 Сначала в корневой папке в консоли вписываем:
 
  #### -sudo docker build . -t django
 
 В папке frontend:
 
  #### -sudo docker build . -t react
 
 В папке socket_server:
 
  #### -sudo docker build . -t socket
 
Далее возвращаемся в корневую папку и запускаем команду: 

  #### -sudo docker compose up

Далее надо не забыть провести миграции django, так как после предыдущей команды создаётся новая база данных, вам надо вписать следующее:

  #### -sudo docker exec -it meschat_django
  
  #### -python manage.py migrate
  
Далее рекомендуется застопить и заново зпустить контейнеры, с помощью: sudo docker compose stop, а далее sudo docker compose start
