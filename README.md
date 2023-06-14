# ТП-2-1

Приложение "Мессенджер Meschat"

# Описание проекта
Данный проект представляет собой мессенджер, позволяющий всем пользователям переписываться между собой. 
Веб-сайт был разработан, с оглядкой на конкурентов, так, мы разработали удобный, простой и интуитивно понятный интерфейс, который будет привычен пользователям других мессенджеров и соц сетей. Есть возможность написать любому пользователю на сайте, добавить его в избранное, чтобы он был выше в списке пользователей, дабы вам не пришлось листать далеко вниз, в поисках своего любимого собеседника. Но так же есть и поиск пользователей, ведь когда на сайт будет зарегестировано довольно большое количество людей, найти кого то вручную будет сложной задачей.

Веб-приложение разрабатывалось на основе архитектурного паттерна MVC. Код находится в текущей дирректории github.

# Наша команда:

[Нарек Антонян](https://github.com/AntonyanNarek) - Тимлид, backend разработчик

[Андрей Островерхов](https://github.com/ostrowerkhov) - Frontend разработчик

[Артём Рассман](https://github.com/Paccmanio) - Проектировщик бд, тестировщик 

# Инструкция по запуску веб-приложения
1 способ (без docker): 

Необходимо установить папку с серверной частью кода, открыть командную строку и прописать команду 'python manage.py runserver'.

Необходимо установить папку socket_server, открыть командную строки, дойти до расположения папки и прописать команду "node index.j"

Необходимо устновить папку frontend, открыть командную строку, дойти до расположения папки и прописать команду 'npm start'.

2 способ (через docker):

Необходимо создать образы серверной, клиентской части и сокет сервера:

 Сначала в корневой папке в консоли вписываем: sudo docker build . -t django
 
 В папке frontend: sudo docker build . -t react
 
 В папке socket_server: sudo docker build . -t socket
 
Далее возвращаемся в корневую папку и запускаем команду: sudo docker compose up

Далее надо не забыть провести миграции django, так как после предыдущей команды создаётся новая база данных, вам надо вписать следующее:

  sudo docker exec -it meschat_django
  
  python manage.py makemigrations
  
  python manage.py migrates
  
Далее рекомендуется застопить и заново зпустить контейнеры, с помощью: sudo docker compose stop, а далее sudo docker compose start

# Ссылки

[Trello](https://trello.com/b/iTJ6RSBX/untitled-board)

[Figma maket](https://www.figma.com/file/VyGW8ECnnXEXN4RI97NOZL/MesChat?node-id=1-18&t=rHojKdiQia62k1aC-0)

[Miro](https://miro.com/app/board/uXjVMbdqiiE=/)

# Документация

[Техническое задание](https://github.com/AntonyanNarek/MesChat/blob/master/documentation/%D0%A2%D0%97%20%D0%A2%D0%9F-2-1%20(2).pdf)

[Диаграммы](https://vk.com/away.php?utf=1&to=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1AFmhSYDaAcNUoYBtvwD3YUATv9Ftnd_M%3Fusp%3Dshare_link)

[Курсовая](https://github.com/AntonyanNarek/MesChat/blob/master/documentation/kursovaya_tp.pdf)

# Веб сайт
[Meschat](http://158.160.96.21:3000/)

[Meschat swagger](http://158.160.96.21:8000/swagger/)
