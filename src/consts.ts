// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export interface NavigationLink {
    id: string;
    href: string;
    colorstyle: string;
    ionicon: string;
    text: string;
}
export const SITE_TITLE = 'Shounak Bhalerao';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const navigationInfo: Array<NavigationLink> = [
    {
        id: "home",
        href: "/",
        colorstyle: "#f44336",
        ionicon: "home-outline",
        text: "Home",
    },
    {
        id: "hobby",
        href: "/hobby/",
        colorstyle: "#ffa117",
        ionicon: "game-controller-outline",
        text: "Hobby",
    },
    {
        id: "skills",
        href: "/skills/",
        colorstyle: "#0fc70f",
        ionicon: "logo-tux",
        text: "Skills",
    },
    {
        id: "projects",
        href: "/projects/",
        colorstyle: "#2196f3",
        ionicon: "images-outline",
        text: "Projects",
    },
    {
        id: "experience",
        href: "/experience/",
        colorstyle: "#b145e9",
        ionicon: "sparkles-outline",
        text: "Experience",
    },
    {
        id: "contacts",
        href: "/contacts/",
        colorstyle: "#e91e63",
        ionicon: "call-outline",
        text: "Contacts",
    },
    {
        id: "blog",
        href: "/blog/",
        colorstyle: "#F2C83B",
        ionicon: "newspaper-outline",
        text: "My Blog",
    },
    {
        id: "about",
        href: "/about/",
        colorstyle: "#006994",
        ionicon: "information-circle-outline",
        text: "About",
    },
];