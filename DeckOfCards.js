class Card {
    constructor (suit, stringValue, numericalValue) {
        this._suit = suit;
        this._stringValue = stringValue;
        this._numericalValue = numericalValue;
    }

    showCard() {
        // console.log(`${this._suit}, ${this._stringValue}, ${this._numericalValue}`);
        return `Suit: ${this._suit}, String Value:  ${this._stringValue}, Numerical Value: ${this._numericalValue}`
    } 
}

// const newCard = new Card("Hearts", "Ace", 1);
// newCard.showCard();

var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
var stringValues = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];

class Deck extends Card {
    constructor() {
        super()
        this.cards = [];
        this.cardCount = 0;
        
    }

    generateCards() {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < stringValues.length; j++) {
                this.cards.push(new Card(suits[i], stringValues[j], j + 1));
            }
        }
        this.cardCount = this.cards.length;

        // console.log(`Deck: ${this.deck}`);
        // for (let newCard in this.deck) {
        //     console.log(this.deck[newCard]);
        // }
    }

    shuffle() {
        let times = this.cards.length; // 52

        while (times) {
            let random = Math.floor(Math.random() * times); // 0-51

            let cardSwap = this.cards[random];
            this.cards[random] = this.cards[times - 1];
            this.cards[times-1] = cardSwap;
            times--;
        }
    }

    reset() {
        this.cards = [];
        this.generateCards();
    }

    deal() {
        let times = this.cards.length;
        let random = Math.floor(Math.random() * times)

        let cardSwap = this.cards[random];
        this.cards[random] = this.cards[times - 1];
        this.cards.pop();
        this.cardCount = this.cards.length;
        
        return cardSwap;
    }
}

// const newDeck = new Deck();
// newDeck.generateCards();
// console.log("Finish Generating Cards: " , newDeck.cardCount, newDeck.cards); 
// newDeck.shuffle();
// console.log("Finish Shuffling Cards: " , newDeck.cardCount, newDeck.cards);
// newDeck.reset();
// console.log("Finish Resetting Cards: " , newDeck.cardCount, newDeck.cards);
// console.log("Dealt Card: " , newDeck.deal());
// console.log("Finish Dealing Cards: " , newDeck.cardCount, newDeck.cards);

class Player extends Deck {
    constructor(name) {
        super();
        this.name = name;
        this.hands = [];
        this.newDeck1 = new Deck();
        this.newDeck1.generateCards();
        this.newDeck1.shuffle();
        this.deckCount;
        this.cards;
    }

    takeCard() {
        this.hands.push(this.newDeck1.deal());    
        this.deckCount = this.newDeck1.cardCount;   
        this.cards = this.newDeck1.cards;
        
        for (let hand in this.hands) {
            console.log(this.hands[hand].showCard())
        } 

        console.log("Deck Left: ", newPlayer.deckCount, "Cards: ", newPlayer.cards)
    }

    discard() {
        this.hands.pop();
        for (let hand in this.hands) {
            console.log(this.hands[hand].showCard())
        }
    }
}

const newPlayer = new Player();
newPlayer.takeCard();
newPlayer.takeCard();
newPlayer.takeCard();
// console.log("Finish Taking Card: " , newPlayer.hands, "Deck Left: ", newPlayer.deckCount, "Cards: ", newPlayer.cards) ; 

newPlayer.discard();
newPlayer.discard();
newPlayer.discard();
// console.log("Finish Discarding Card: " , newPlayer.hands, "Deck Left: ", newPlayer.deckCount, "Cards: ", newPlayer.cards) ; 

