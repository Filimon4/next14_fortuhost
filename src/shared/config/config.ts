import { IAboutItem, IInfoCard, ITariffsCard } from '../models/config';

export const AboutConfig = {
    list: [
        {
            image: 'time.svg',
            title: 'Быстрая интеграция',
            description: 'Проект будет автоматически интегрирован на сервер в несколько кликов',
        },
        {
            image: 'feather.svg',
            title: 'Легко использовать',
            description: 'Ничего не нужно изучать, консоль интуитивно понятна',
        },
        {
            image: 'pig.svg',
            title: 'Оплата по счетчику',
            description: 'Оплачивайте только использованные ресурсы, до 50мб беплатно',
        },
    ] as IAboutItem[],
};

export const StartConfig = {
    list: [
        {
            image: 'hub.svg',
            title: 'Выберите удобный способ интеграции: файл, github или dockerhub',
        },
        {
            image: 'pencil.svg',
            title: 'Укажите только название вашего приложения, остальные поля опциональны',
        },
        {
            image: 'controll.svg',
            title: 'Полный контроль над проектом через панель администратора',
        },
        {
            image: 'time.svg',
            title: 'Подождите пока сервис автоматически развернёт проект',
        },
    ] as IInfoCard[],
};

export const TariffsConfig = {
    list: [
        {
            title: 'Тестер',
            ram: '100Mb',
            ssd: '248Mb',
            price: '100 руб./мес.',
            image: 'test.svg',
        },
        {
            title: 'Разработчик',
            ram: '512Mb',
            ssd: '512Mb',
            price: '200 руб./мес.',
            image: 'develop.svg',
        },
        {
            title: 'Команда',
            ram: '512Mb',
            ssd: '512Mb',
            price: '300 руб./мес.',
            image: 'team.svg',
        },
    ] as ITariffsCard[],
};

export const RegisterConfig = {
    list: [
        { label: 'yandex', link: 'yandex.ru' },
        { label: 'google', link: 'google.com' },
        { label: 'github', link: 'github.com' },
    ],
};

export const BASE_URL = 'http://62.183.54.247:8000'