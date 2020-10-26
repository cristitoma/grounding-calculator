class CalculatorResult {
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
}

export default CalculatorResult;
