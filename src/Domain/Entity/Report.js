class Report {
    constructor(id, project, calculator, distanceBetweenVerticalElectrodes, verticalElectrodesPlacement) {
        this.id = id;
        this.project  = project;
        this.calculator = calculator;
        this.distanceBetweenVerticalElectrodes = distanceBetweenVerticalElectrodes;
        this.verticalElectrodesPlacement = verticalElectrodesPlacement;
    }
}

export default Report;