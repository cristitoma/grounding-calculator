class AbstractCalculatorRepository {
    save(calculator) {}
    getById(id) {}
    getSoilType(soilType) {}
    getSoilResistivityBySoilType(soilType) {}
    getVerticalGroundingUtilisationFactor(distanceBetweenVerticalElectrodesL, verticalElectrodesPlacement, numberOfVerticalElectrodes) {}
    getHorizontalGroundingUtilisationFactor(distanceBetweenVerticalElectrodesL, verticalElectrodesPlacement, numberOfVerticalElectrodes) {}
    getVerticalElectrodesPlacement(electrodePlacementId);
}

export default AbstractCalculatorRepository;
