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

export const OAuthTypes = {
    list: [
        {img: '/auth/yandex.svg', label: 'yandex'},
        {img: '/auth/google.svg', label: 'google'},
        {img: '/auth/github.svg', label: 'github'},
        {img: '/auth/vk.svg', label: 'vk'},
    ]
}

export const SignInConfig = {
    field: [
        {type: 'public', label: 'Email', placeholder: 'Anymail@mail.com'},
        {type: 'private', label: 'Password', placeholder: ''}
    ]
}

export const SignUpConfig = {
    field: [
        {type: 'public', label: 'Email', placeholder: 'Anymail@mail.com'},
        {type: 'private', label: 'Password', placeholder: ''},
        {type: 'private', label: 'Repeat Password', placeholder: ''}
    ]
}

export const SidebarConfig = {
    panel: [
        {img: '/icons/dashboard/sidebar/house.svg', text: 'Мои проекты', hover: '/icons/dashboard/sidebar/house_light.svg'},
        {img: '/icons/dashboard/sidebar/panel.svg', text: 'Панель управления', hover: '/icons/dashboard/sidebar/panel_light.svg'},
        {img: '/icons/dashboard/sidebar/card.svg', text: 'Счет', hover: '/icons/dashboard/sidebar/card_light.svg'},
    ],
    settings: [
        {img: '/icons/dashboard/sidebar/settings.svg', text: 'Настройки'},
        {img: '/icons/dashboard/sidebar/chat.svg', text: 'Поддержка'},
        {img: '/icons/dashboard/sidebar/question.svg', text: 'FAQ'},
    ]
}

export const BASE_URL = 'http://62.183.54.247:8000'