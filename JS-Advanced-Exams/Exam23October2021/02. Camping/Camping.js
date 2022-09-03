class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        money = Number(money);
        condition = condition.toLocaleLowerCase()
        if (!this.priceForTheCamp[condition]) {
            //if (this.priceForTheCamp.hasOwnProperty(condition) === false) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        let indexName = this.listOfParticipants.findIndex(a => a.name == name);
        if (indexName > -1) {
            return `The ${name} is already registered at the camp.`;
        }
        /*	If the submitted money is less than the price for the stay in the camp 
        (the price is determined by the priceForTheCamp object, 
            depending on the condition
             of the participant), return the following message:
                  `The money is not enough to pay the stay at the camp.`*/

        if (money < this.priceForTheCamp[condition]) {
            return "The money is not enough to pay the stay at the camp.";
        }
        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        };
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant(name) {
        let participantIndex = this.listOfParticipants.findIndex(a => a.name == name);
        if (participantIndex == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(participantIndex, 1);
        return `The ${name} removed successfully.`

    }
    timeToPlay(typeOfGame, participant1, participant2) {

        let firstParticipant = this.listOfParticipants.find(x => x.name === participant1);
        let secondParticipant = this.listOfParticipants.find(x => x.name === participant2);

        if (typeOfGame === 'Battleship') {

            if (firstParticipant === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            firstParticipant.power += 20
            return `The ${firstParticipant.name} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame === 'WaterBalloonFights') {
            if (firstParticipant === undefined || secondParticipant === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (firstParticipant.condition !== secondParticipant.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            let firstParticipantPower = firstParticipant.power;
            let secondParticipantPower = secondParticipant.power;

            if (firstParticipantPower > secondParticipantPower) {
                firstParticipant.wins += 1;
                return `The ${firstParticipant.name} is winner in the game ${typeOfGame}.`;

            } else if (secondParticipantPower > firstParticipantPower) {

                secondParticipant.wins += 1;
                return `The ${secondParticipant.name} is winner in the game ${typeOfGame}.`;

            } else {
                return `There is no winner.`;
            }
        }
    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants.sort((a, b) => b.wins - a.wins).forEach(participant => {
            result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`)
        });
        return result.join('\n');
    }
}class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        money = Number(money);
        condition = condition.toLocaleLowerCase()
        if (!this.priceForTheCamp[condition]) {
            //if (this.priceForTheCamp.hasOwnProperty(condition) === false) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        let indexName = this.listOfParticipants.findIndex(a => a.name == name);
        if (indexName > -1) {
            return `The ${name} is already registered at the camp.`;
        }
        /*	If the submitted money is less than the price for the stay in the camp 
        (the price is determined by the priceForTheCamp object, 
            depending on the condition
             of the participant), return the following message:
                  `The money is not enough to pay the stay at the camp.`*/

        if (money < this.priceForTheCamp[condition]) {
            return "The money is not enough to pay the stay at the camp.";
        }
        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        };
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant(name) {
        let participantIndex = this.listOfParticipants.findIndex(a => a.name == name);
        if (participantIndex == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(participantIndex, 1);
        return `The ${name} removed successfully.`

    }
    timeToPlay(typeOfGame, participant1, participant2) {

        let firstParticipant = this.listOfParticipants.find(x => x.name === participant1);
        let secondParticipant = this.listOfParticipants.find(x => x.name === participant2);

        if (typeOfGame === 'Battleship') {

            if (firstParticipant === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            firstParticipant.power += 20
            return `The ${firstParticipant.name} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame === 'WaterBalloonFights') {
            if (firstParticipant === undefined || secondParticipant === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (firstParticipant.condition !== secondParticipant.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            let firstParticipantPower = firstParticipant.power;
            let secondParticipantPower = secondParticipant.power;

            if (firstParticipantPower > secondParticipantPower) {
                firstParticipant.wins += 1;
                return `The ${firstParticipant.name} is winner in the game ${typeOfGame}.`;

            } else if (secondParticipantPower > firstParticipantPower) {

                secondParticipant.wins += 1;
                return `The ${secondParticipant.name} is winner in the game ${typeOfGame}.`;

            } else {
                return `There is no winner.`;
            }
        }
    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants.sort((a, b) => b.wins - a.wins).forEach(participant => {
            result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`)
        });
        return result.join('\n');
    }
}