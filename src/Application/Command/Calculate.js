class Calculate
{
    constructor(
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
}

export default Calculate;
