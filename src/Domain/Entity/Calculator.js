import CalculatorResult from "~/Domain/ValueObject/CalculatorResult";
import CalculateException from "~/Domain/Exception/CalculateException";
import Calculate from "~/Application/Command/Calculate";

class Calculator {
    constructor(
        id,
        projectId,
        verticalElectrodeDiameter,
        verticalElectrodeLength,
        verticalElectrodeDepth,
        soilType,
        soilResistivity,
        numberOfVerticalElectrodes,
        distanceBetweenVerticalElectrodesL,
        verticalElectrodesPlacement,
        verticalGroundingUF,
        horizontalGroundingUF,
        strapLength,
        strapWidth,
        numberOfHorizontalGrounding,
        groundDispersionResistance,
    ) {
        this.id = id;
        this.projectId = projectId;
        this.verticalElectrodeDiameter = parseFloat(verticalElectrodeDiameter);
        this.verticalElectrodeLength = parseFloat(verticalElectrodeLength);
        this.verticalElectrodeDepth = parseFloat(verticalElectrodeDepth);
        this.soilType = soilType;
        this.soilResistivity = parseFloat(soilResistivity);
        this.numberOfVerticalElectrodes = parseInt(numberOfVerticalElectrodes);
        this.distanceBetweenVerticalElectrodesL = distanceBetweenVerticalElectrodesL;
        this.verticalElectrodesPlacement = verticalElectrodesPlacement;
        this.verticalGroundingUF = parseFloat(verticalGroundingUF);
        this.horizontalGroundingUF = parseFloat(horizontalGroundingUF);
        this.strapLength = parseFloat(strapLength);
        this.strapWidth = parseFloat(strapWidth);
        this.numberOfHorizontalGrounding = parseInt(numberOfHorizontalGrounding);
        this.groundDispersionResistance = parseFloat(groundDispersionResistance);
    }
    
    calculate () {
        this.result = new CalculatorResult(
            this.soilResistivity,
            this.calculateVerticalElectrodeDispersionResistance(),
            this.calculateDistanceBetweenVerticalElectrodesCM(),
            this.verticalGroundingUF,
            this.calculateVerticalGroundingResistance(),
            this.calculateHorizontalElectrodeDispersionResistance(),
            this.horizontalGroundingUF,
            this.calculateHorizontalGroundingResistance(),
            this.calculateMultipleGroundingResistance(),
        );
    }
    
    getResult() {
        return this.result;
    }
    
    calculateVerticalElectrodeDispersionResistance() {
        const h = this.verticalElectrodeDepth + (this.verticalElectrodeLength / 2);

        return (0.366
            * this.soilResistivity 
            * (Math.log(2 * this.verticalElectrodeLength / this.verticalElectrodeDiameter) / Math.log(10)
            + 0.5 * Math.log((4 * h + this.verticalElectrodeLength) / (4 * h - this.verticalElectrodeLength)) / Math.log(10)) 
            / this.verticalElectrodeLength)
            || 0
        ;
    }
    
    calculateDistanceBetweenVerticalElectrodesCM() {
        return (this.distanceBetweenVerticalElectrodesL * this.verticalElectrodeLength) || 0;
    }
    
    calculateVerticalGroundingResistance() {
        return (this.calculateVerticalElectrodeDispersionResistance() / (this.numberOfVerticalElectrodes * this.verticalGroundingUF)) || 0;
    }
    
    calculateHorizontalElectrodeDispersionResistance() {
        return (0.366 * this.soilResistivity * (Math.log(2 * Math.pow(this.strapLength, 2) / (this.strapWidth * this.verticalElectrodeDepth)) / Math.log(10)) / this.strapLength) || 0
    }
    
    calculateHorizontalGroundingResistance() {
        return (this.calculateHorizontalElectrodeDispersionResistance() / (this.numberOfHorizontalGrounding * this.horizontalGroundingUF)) || 0;
    }
    
    calculateMultipleGroundingResistance() {
        const multipleGroundingResistance = this.calculateVerticalGroundingResistance() * this.calculateHorizontalGroundingResistance() / (this.calculateVerticalGroundingResistance() + this.calculateHorizontalGroundingResistance());
        
        if (multipleGroundingResistance > this.groundDispersionResistance) {
            throw new CalculateException("Ai depasit valoarea maxima a rezistentei de dispersie a prizei de pamant Rp! Mareste numarul de electrozi verticali si/sau lungimea platbandei si, eventual, distanta dintre electrozi!");
        }
        
        return multipleGroundingResistance || 0;
    }
    
    getId() {
        return this.id;
    }
}

Calculator.DISTANCE_BETWEEN_VERTICAL_ELECTRODES = {
    1: 'e = l',
    2: 'e = 2.l',
    3: 'e = 3.l',
};

Calculator.VERTICAL_ELECTRODE_PLACEMENT = {
    1: 'liniar',
    2: 'pe contur',
};

export default Calculator;
