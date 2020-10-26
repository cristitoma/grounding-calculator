import CalculatorResult from "../ValueObject/CalculatorResult";

class Calculator {
    constructor(
        id,
        projectId,
        verticalElectrodeDiameter,
        verticalElectrodeLength,
        verticalElectrodeDepth,
        soilType,
        numberOfVerticalElectrodes,
        distanceBetweenVerticalElectrodesL,
        verticalElectrodesPlacement,
        strapLength,
        strapWidth,
        numberOfHorizontalGrounding,
        groundDispersionResistance,
    ) {
        this.id = id;
        this.projectId = projectId;
        this.verticalElectrodeDiameter = verticalElectrodeDiameter;
        this.verticalElectrodeLength = verticalElectrodeLength;
        this.verticalElectrodeDepth = verticalElectrodeDepth;
        this.soilType = soilType;
        this.numberOfVerticalElectrodes = numberOfVerticalElectrodes;
        this.distanceBetweenVerticalElectrodesL = distanceBetweenVerticalElectrodesL;
        this.verticalElectrodesPlacement = verticalElectrodesPlacement;
        this.strapLength = strapLength;
        this.strapWidth = strapWidth;
        this.numberOfHorizontalGrounding = numberOfHorizontalGrounding;
        this.groundDispersionResistance = groundDispersionResistance;
    }
    
    calculate () {
        return new CalculatorResult(
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        );
    }
    
    getId() {
        return this.id;
    }
}

export default Calculator;
