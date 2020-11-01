import CalculatorResult from "~/Domain/ValueObject/CalculatorResult";
import CalculateException from "~/Domain/Exception/CalculateException";

class Calculator {
    constructor(
        id,
        projectId,
        verticalElectrodeDiameter,
        verticalElectrodeLength,
        verticalElectrodeDepth,
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
        this.verticalElectrodeDiameter = verticalElectrodeDiameter;
        this.verticalElectrodeLength = verticalElectrodeLength;
        this.verticalElectrodeDepth = verticalElectrodeDepth;
        this.soilResistivity = soilResistivity;
        this.numberOfVerticalElectrodes = numberOfVerticalElectrodes;
        this.distanceBetweenVerticalElectrodesL = distanceBetweenVerticalElectrodesL;
        this.verticalElectrodesPlacement = verticalElectrodesPlacement;
        this.verticalGroundingUF = verticalGroundingUF;
        this.horizontalGroundingUF = horizontalGroundingUF;
        this.strapLength = strapLength;
        this.strapWidth = strapWidth;
        this.numberOfHorizontalGrounding = numberOfHorizontalGrounding;
        this.groundDispersionResistance = groundDispersionResistance;
    }
    
    calculate () {
        return new CalculatorResult(
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
    
    calculateVerticalElectrodeDispersionResistance() {
        const h = this.verticalElectrodeDepth + this.verticalElectrodeLength / 2;

        return 0.366
            * this.soilResistivity 
            * (Math.log(2 * this.verticalElectrodeLength / this.verticalElectrodeDiameter) / Math.log(10)
            + 0.5 * Math.log((4 * h + this.verticalElectrodeLength) / (4 * h - this.verticalElectrodeLength)) / Math.log(10)) 
            / this.verticalElectrodeLength
        ;
    }
    
    calculateDistanceBetweenVerticalElectrodesCM() {
        return this.distanceBetweenVerticalElectrodesL * this.verticalElectrodeLength;
    }
    
    calculateVerticalGroundingResistance() {
        return this.calculateVerticalElectrodeDispersionResistance() / (this.numberOfVerticalElectrodes * this.verticalGroundingUF);
    }
    
    calculateHorizontalElectrodeDispersionResistance() {
        return 0.366 * this.soilResistivity * (Math.log(2 * Math.pow(this.strapLength, 2) / (this.strapWidth * this.verticalElectrodeDepth)) / Math.log(10)) / this.strapLength
    }
    
    calculateHorizontalGroundingResistance() {
        return this.calculateHorizontalElectrodeDispersionResistance() / (this.numberOfHorizontalGrounding * this.horizontalGroundingUF);
    }
    
    calculateMultipleGroundingResistance() {
        const multipleGroundingResistance = this.calculateVerticalGroundingResistance() * this.calculateHorizontalGroundingResistance() / (this.calculateVerticalGroundingResistance() + this.calculateHorizontalGroundingResistance());
        
        if (multipleGroundingResistance > this.groundDispersionResistance) {
            throw new CalculateException("Ai depasit valoarea maxima a rezistentei de dispersie a prizei de pamant Rp! Mareste numarul de electrozi verticali si/sau lungimea platbandei si, eventual, distanta dintre electrozi!");
        }
        
        return multipleGroundingResistance;
    }
    
    getId() {
        return this.id;
    }
}

export default Calculator;
