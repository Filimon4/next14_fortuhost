import { IAboutItem, IInfoCard, ITariffsCard } from '../models/config';

export enum ESidebarButtons {
    "settings" = "settings",
    "tariff" = "tariff"
}

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
        {img: '/icons/dashboard/sidebar/house.svg', imgSize: 24, text: 'Мои проекты', hover: '/icons/dashboard/sidebar/house_light.svg', hoverSize: 24},
        {img: '/icons/dashboard/sidebar/panel.svg', imgSize: 24, text: 'Панель управления', hover: '/icons/dashboard/sidebar/panel_light.svg', hoverSize: 28},
        {img: '/icons/dashboard/sidebar/card.svg', imgSize: 24, text: 'Счет', hover: '/icons/dashboard/sidebar/card_light.svg', hoverSize: 32},
    ],
    settings: [
        {type: ESidebarButtons.settings, img: '/icons/dashboard/sidebar/settings.svg', imgSize: 24, text: 'Настройки', hover: '/icons/dashboard/sidebar/settings_light.svg', hoverSize: 32},
        {img: '/icons/dashboard/sidebar/chat.svg', imgSize: 24, text: 'Поддержка', hover: '/icons/dashboard/sidebar/chat_light.svg', hoverSize: 32},
        {img: '/icons/dashboard/sidebar/question.svg', imgSize: 24, text: 'FAQ', hover: '/icons/dashboard/sidebar/question_light.svg', hoverSize: 32},
    ]
}

export const ProjetCreateConfig = {
    field: [
        {type: "text", placeholder: 'Имя проекта', label: ''},
        {type: "range", min: 1, max: 32, label: 'RAM', prefix: 'Gb'},
        {type: "range", min: 1, max: 32, label: 'SSD', prefix: 'Gb'},
        {type: "range", min: 1, max: 32, label: 'Core'},
    ]
}

export enum EInstanceTypes {
    'setup',
    'github',
    'nginx',
    'docker',
    'mysql',
    'redis'
}

export const InstanceIcon = {
    [EInstanceTypes.mysql]: "/icons/instance/mysql_icon.svg",
    [EInstanceTypes.nginx]: "/nginx/instance/nginx_icon.svg",
    [EInstanceTypes.docker]: "/nginx/instance/docker_icon.svg",
    [EInstanceTypes.github]: "/nginx/instance/github_icon.svg",
    [EInstanceTypes.redis]: "/nginx/instance/redis_icon.svg",
}

export type IInstanceConfig = {
    [K in keyof typeof EInstanceTypes]: any;
};

export const InstancesSetupConfig = [
    {
        img: '/icons/instance/github_icon.svg',
        title: 'GitHub репозиторий',
        type: EInstanceTypes.github,
    },
    {
        img: '/icons/instance/nginx_icon.svg',
        title: 'Nginx сервер',
        type: EInstanceTypes.nginx,
    },
    {
        img: '/icons/instance/docker_icon.svg',
        title: 'Docker образ',
        type: EInstanceTypes.docker,
    },
    {
        img: '/icons/instance/mysql_icon.svg',
        title: 'MySQL база данных',
        type: EInstanceTypes.mysql,
    },
    {
        img: '/icons/instance/redis_icon.svg',
        title: 'Redis база данных',
        type: EInstanceTypes.redis,
    },
]

export const InstancesConfig = {
    [EInstanceTypes.docker]: [],
    [EInstanceTypes.mysql]: [
        {
            type: 'text',
            placeholder: 'Имя',
        },
        {
            type: 'text',
            placeholder: 'Логин',
        },
        {
            type: 'password',
            placeholder: 'Пароль',
        },
        {
            type: 'text',
            placeholder: 'Порт',
        },
        {
            type: 'select',
            options: [
                {
                    value: 'test',
                    text: 'text'
                },
            ],
        }
    ],
    [EInstanceTypes.github]: [],
    [EInstanceTypes.nginx]: [],
    [EInstanceTypes.redis]: [],
}



export const BASE_URL = 'http://62.183.54.247:8000/api'