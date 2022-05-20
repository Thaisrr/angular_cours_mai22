export type Filter = 'ALL' | 'MACHIN' | 'BIDULE';


export type Food = 'Burger 🍔' | 'Fries 🍟' | 'Pizza 🍕';
export type Size = 'small' | 'medium' | 'large';

export type FoodSize = `${Food}-${Size}`;


const order: FoodSize = "Fries 🍟-large";
