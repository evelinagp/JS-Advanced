function carFactory(object) {
    const result = {};
    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500 };
        }
    }
    const properWheelSize = object.wheelsize % 2 == 0 ? object.wheelsize - 1 : object.wheelsize;
    result.model = object.model;
    result.engine = getEngine(object.power);
    result.carriage = { type: object.carriage, color: object.color };
    result.wheels = new Array(4).fill(properWheelSize, 0, 4);

    return result;
}