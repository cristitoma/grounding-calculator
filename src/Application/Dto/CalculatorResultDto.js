class CalculatorResultDto {
    constructor(
        calculatorId,
        soilResistivity,
        verticalElectrodeDispersionResistance,
        distanceBetweenVerticalElectrodesCM,
        verticalGroundingUF,
        verticalGroundingResistance,
        horizontalElectrodeDispersionResistance,
        horizontalGroundingUF,
        horizontalGroundingResistance,
        multipleGroundingResistance,
    ) {
        this.calculatorId = calculatorId;
        this.soilResistivity = soilResistivity;
        this.verticalElectrodeDispersionResistance = verticalElectrodeDispersionResistance;
        this.distanceBetweenVerticalElectrodesCM = distanceBetweenVerticalElectrodesCM;
        this.verticalGroundingUF = verticalGroundingUF;
        this.verticalGroundingResistance = verticalGroundingResistance;
        this.horizontalElectrodeDispersionResistance = horizontalElectrodeDispersionResistance;
        this.horizontalGroundingUF = horizontalGroundingUF;
        this.horizontalGroundingResistance = horizontalGroundingResistance;
        this.multipleGroundingResistance = multipleGroundingResistance;
    }
    
    static createFromObject(calculatorId, object) {
        return new CalculatorResultDto(
            calculatorId,
            object.soilResistivity,
            object.verticalElectrodeDispersionResistance,
            object.distanceBetweenVerticalElectrodesCM,
            object.verticalGroundingUF,
            object.verticalGroundingResistance,
            object.horizontalElectrodeDispersionResistance,
            object.horizontalGroundingUF,
            object.horizontalGroundingResistance,
            object.multipleGroundingResistance,
        );
    }
}

export default CalculatorResultDto;
