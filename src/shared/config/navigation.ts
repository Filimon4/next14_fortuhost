export enum RouteConfig {
    HOME = '/',
    CONTROL = '/control',
    DOCS = '/docs',
    HELP = '/help',
    LOGIN = '/signin',
    REGISTRATION = '/signup',
    DASHBOARD = '/dashboard'
}

export const AppRoute = {
    [RouteConfig.DASHBOARD]: 'Управление',
    [RouteConfig.DOCS]: 'Документация',
    [RouteConfig.HELP]: 'Поддержка',
    [RouteConfig.LOGIN]: 'Вход',
};
