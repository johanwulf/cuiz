export type Quiz = {
    name: string;
    questions: Question[];
}

export type Question = {
    title: string;
    keys: string[];
}
