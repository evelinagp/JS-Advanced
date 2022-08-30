function printDeckOfCards(cards) {
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
    // TODO
}