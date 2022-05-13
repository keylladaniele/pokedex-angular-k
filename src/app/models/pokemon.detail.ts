export class PokemonDetail {
    id: number;
    order: number = 0;
    name: string = '';
    height: number = 0;
    abilities: Ability[] = [];
    spices: Species[] = [];
    types: Type[] = [];
    weight: number = 0;
    sprites: Sprite[] = [];
    stats: Stat[] = [];

    constructor() {
        
    }
}

class Ability  {
    ability: {
        name: string;
    }

    constructor() {

    }
}

class Species {
    url: string = '';
}

class Type {
    slot: number;
    type: {
        name: string;
    }
}

class Sprite {
    front_default: string;
}

class Stat {
    base_stat: number;
    stat: {
        name: string;
    }
}
