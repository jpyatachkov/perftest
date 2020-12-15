# Пример для лекции по нагрузочному тестированию

Запуск Yandex.Tank в Docker

`docker run --rm -v $SSH_AUTH_SOCK:/ssh-agent -e SSH_AUTH_SOCK=/ssh-agent -v $(pwd):/var/loadtest -it direvius/yandex-tank`
