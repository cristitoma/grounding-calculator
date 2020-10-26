class CalculatorResultDto {
    constructor(
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
    
    static createFromObject(object) {
        return new CalculatorResultDto(
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
