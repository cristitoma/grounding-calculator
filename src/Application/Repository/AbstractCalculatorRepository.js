class AbstractCalculatorRepository {
    save(calculator) {}
    getSoilResistivityBySoilType(soilType) {}
    getVerticalGroundingUtilisationFactor(distanceBetweenVerticalElectrodesL, verticalElectrodesPlacement, numberOfVerticalElectrodes) {}
    getHorizontalGroundingUtilisationFactor(distanceBetweenVerticalElectrodesL, verticalElectrodesPlacement, numberOfVerticalElectrodes) {}
}

export default AbstractCalculatorRepository;
