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
        this.verticalElectrodeDispersionResistance = verticalElectrodeDispersionResistance.toFixed(2);
        this.distanceBetweenVerticalElectrodesCM = distanceBetweenVerticalElectrodesCM;
        this.verticalGroundingUF = verticalGroundingUF.toFixed(2);
        this.verticalGroundingResistance = verticalGroundingResistance.toFixed(2);
        this.horizontalElectrodeDispersionResistance = horizontalElectrodeDispersionResistance.toFixed(2);
        this.horizontalGroundingUF = horizontalGroundingUF.toFixed(2);
        this.horizontalGroundingResistance = horizontalGroundingResistance.toFixed(2);
        this.multipleGroundingResistance = multipleGroundingResistance.toFixed(2);
    }
}

export default CalculatorResult;
