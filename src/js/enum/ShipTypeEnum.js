export const allShipTypes = [];
class ShipTypeEnum {

    size;
    name;
    maxAllowed;

    constructor(size, name, maxAllowed) {
        if (Object.isFrozen(ShipTypeEnum)) {
            throw new Error('The ShipTypeEnum cannot be constructed');
        }
        Object.assign(this, {size, name, maxAllowed});
        Object.freeze(this);
        allShipTypes.push(this);
    }

    toString() {
        return this.name;
    }
}
ShipTypeEnum.CORVETE = new ShipTypeEnum(2, 'Corvette', 1);
ShipTypeEnum.FRIGATE = new ShipTypeEnum(3, 'Frigate', 2);
ShipTypeEnum.DESTROYER = new ShipTypeEnum(4, 'Destroyer', 1);
ShipTypeEnum.CARRIER = new ShipTypeEnum(5, 'Carrier', 1);

Object.freeze(ShipTypeEnum);

export default ShipTypeEnum;
