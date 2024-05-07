import "../app/globals.css";
import "../app/icons.css";

export const Icons = {
    switch_user: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users-round"
        >
            <path d="M18 21a8 8 0 0 0-16 0" />
            <circle cx="10" cy="8" r="5" />
            <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
        </svg>
    ),
    login: <span className="material-symbols-outlined">login</span>,
    logout: <span className="material-symbols-outlined">logout</span>,
    grocery: <span className="material-symbols-outlined ">grocery</span>,
    person: <span className="material-symbols-outlined">person</span>,
    dark_mode: <span className="material-symbols-outlined">dark_mode</span>,
    light_mode: <span className="material-symbols-outlined">light_mode</span>,
    edit: <span className="material-symbols-outlined">edit</span>,
    delete: (
        <span className="material-symbols-outlined text-red-500">remove</span>
    ),
    item: <span className="material-symbols-outlined">nutrition</span>,
    quantity: <span className="material-symbols-outlined">numbers</span>,
    replacement: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-replace"
        >
            <path d="M14 4c0-1.1.9-2 2-2" />
            <path d="M20 2c1.1 0 2 .9 2 2" />
            <path d="M22 8c0 1.1-.9 2-2 2" />
            <path d="M16 10c-1.1 0-2-.9-2-2" />
            <path d="m3 7 3 3 3-3" />
            <path d="M6 10V5c0-1.7 1.3-3 3-3h1" />
            <rect width="8" height="8" x="2" y="14" rx="2" />
        </svg>
    ),
    category: <span className="material-symbols-outlined">category</span>,
    google: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
    ),
    connection: <span className="material-symbols-outlined">share</span>,
    email: <span className="material-symbols-outlined">mail</span>,
    actions: <span className="material-symbols-outlined">more_horiz</span>,
    close: <span className="material-symbols-outlined">close</span>,
    show: <span className="material-symbols-outlined">expand_more</span>,
    dont_show: <span className="material-symbols-outlined">expand_less</span>,
};
