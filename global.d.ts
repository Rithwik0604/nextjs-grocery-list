export {};

declare global {
    type ListItem = {
        id?: number;
        name: string;
        quantity: string;
        replacement: string;
        category: string;
        got? : boolean;
        userID?: string;
    };

    type Profile = {
        iss: string;
        azp: string;
        aud: string;
        sub: string;
        email: string;
        email_verified: boolean;
        at_hash: string;
        name: string;
        picture: string;
        given_name: string;
        family_name: string;
        iat: number;
        exp: number;
    };

    type SortedList = {
        [category: string] : ListItem[];
    };

    type ItemFunctions = {
        changeGot: (id: number, got : boolean) => void;
        removeItem : (id : number) => void;
        editItem : (item : ListItem) => void;
        addItem : (user, item : ListItem) => void;
    }
}
