type a1 = number;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;
//nested conditional type
type d = a1 extends null
    ? null
    : a3 extends number
    ? number
    : a4 extends null
    ? null
    : never;


type Sheikh = {
    wife1: string;
    wife2: string;
}

type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;
type CheckProperty1 = CheckProperty<Sheikh, 'wife2'>


type Bandhubi = "Monika" | "Rachel" | "Pheobe";

type RemoveBadhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBadhubi<Bandhubi, "Rachel">;