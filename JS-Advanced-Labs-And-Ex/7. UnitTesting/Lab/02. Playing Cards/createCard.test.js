function createCard(face, suit) { //75 PointsInJudge
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2665',
        'C': '\u2663'
    };
    if (faces.includes(face) == false || Object.keys(suits).includes(suit) == false) {
        throw new Error("Error");
    }

    toString()
    return face + suits[suit];
}
console.log(createCard('A', 'S'));
console.log(createCard('10', 'H'));
console.log(createCard('1', 'C'));

/*    class Card{ -> 50 PointsInJudge
    constructor(face, suit){
        this.face = face;
        this.suit = suit;
    }

    get face(){
        return this._face;
    }
    set face(newFace){
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        if(! validFaces.includes(newFace)){
            throw new Error("Invalid card face: " + newFace);
        }

        this._face = newFace;
    }

    get suit(){
        return this._suit;
    }
    set suit(newSuit){
        const validSuits = ['C', 'D', 'H', 'S'];
        if(! validSuits.includes(newSuit)){
            throw new Error("Invalid card suit: " + newSuit);
        }

        this._suit = newSuit;
    }

    toString(){
        let suitToChar = {
            'C': "\u2663",
            'D': "\u2666",
            'H': "\u2665",
            'S': "\u2660"
        };

        return this.face + suitToChar[this.suit];
    }
}
*/