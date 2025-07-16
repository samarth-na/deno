export type int = number;
export type num = number;

export type message = {
    role: string;
    content: string;
};

export type messages = message[];

export type chat = {
    name: string;
    id: number;
    messages: messages;
};

export type prompt = string;
export type response = string;

export type model = {
    name: string;
    id: string;
};
export type models = model[];
