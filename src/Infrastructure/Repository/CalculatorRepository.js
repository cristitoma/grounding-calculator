import AbstractProjectRepository from "~/Application/Repository/AbstractProjectRepository";

class CalculatorRepository extends AbstractProjectRepository {
    prefix = 'calculator_';
    
    /**
     * @type {AbstractStorage}
     */
    storage = null;

    /**
     * @type {Object}
     */
    soil = {
        1: {
            type: 'Pamant, huma, turba (foarte umede)',
            resistivity: 2000,
        },
        2: {
            type: 'Beton: o parte ciment si trei parti nisip',
            resistivity: 15000,
        },
        3: {
            type: 'Beton: o parte ciment si cinci parti pietris',
            resistivity: 40000,
        },
        4: {
            type: 'Pamant arabil',
            resistivity: 5000,
        },
        5: {
            type: 'Pamant argilos, argila',
            resistivity: 8000,
        },
        6: {
            type: 'Piatra si pamânt pietros',
            resistivity: 200000,
        },
        7: {
            type: 'Loess, pamant de padure,pamant cu pietris',
            resistivity: 20000,
        },
        8: {
            type: 'Argila cu nisip',
            resistivity: 20000,
        },
        9: {
            type: 'Pamant nisipos',
            resistivity: 30000,
        },
        10: {
            type: 'Nisip foarte umed',
            resistivity: 40000,
        },
        11: {
            type: 'Balast cu pamant',
            resistivity: 100000,
        },
        12: {
            type: 'Nisip, nisip cu pietris',
            resistivity: 100000,
        },
        13: {
            type: 'Roci, bazalturi',
            resistivity: 1000000,
        },
        14: {
            type: 'Stânca compacta',
            resistivity: 10000000,
        },
    };
    
    verticalGroundingUtilisationFactor = {
        1: {
            1: [0, 0, 0.85, 0.80, 0.75, 0.70, 0.65, 0.64, 0.63, 0.61, 0.60, 0.59, 0.58, 0.57, 0.56, 0.55, 0.54, 0.53, 0.52, 0.51, 0.50],
            2: [0, 0, 0, 0.75, 0.65, 0.62, 0.60, 0.59, 0.58, 0.56, 0.55, 0.55, 0.54, 0.54, 0.53, 0.53, 0.52, 0.52, 0.51, 0.51, 0.50, 0.50, 0.49, 0.49, 0.48, 0.48, 0.47, 0.47, 0.46, 0.46, 0.45, 0.45, 0.44, 0.44, 0.43, 0.43, 0.42, 0.42, 0.41, 0.41, 0.40, 0.40, 0.40, 0.40, 0.40, 0.39, 0.39, 0.39, 0.39, 0.39, 0.39, 0.39, 0.39, 0.39, 0.39, 0.38, 0.38, 0.38, 0.38, 0.38, 0.35],
        },
        2: {
            1: [0, 0, 0.90, 0.85, 0.82, 0.80, 0.78, 0.77, 0.77, 0.76, 0.75, 0.75, 0.74, 0.74, 0.73, 0.73, 0.72, 0.72, 0.71, 0.71, 0.70],
            2: [0, 0, 0, 0.80, 0.75, 0.72, 0.70, 0.69, 0.68, 0.67, 0.66, 0.66, 0.65, 0.65, 0.64, 0.64, 0.63, 0.63, 0.62, 0.62, 0.61, 0.61, 0.60, 0.60, 0.60, 0.60, 0.59, 0.59, 0.59, 0.58, 0.58, 0.58, 0.57, 0.57, 0.57, 0.57, 0.56, 0.56, 0.56, 0.55, 0.55, 0.55, 0.55, 0.55, 0.54, 0.54, 0.54, 0.54, 0.54, 0.54, 0.53, 0.53, 0.53, 0.53, 0.53, 0.53, 0.52, 0.52, 0.52, 0.52, 0.50],
        },
        3: {
            1: [0, 0, 0.95, 0.90, 0.88, 0.85, 0.82, 0.82, 0.81, 0.81, 0.80, 0.80, 0.79, 0.79, 0.78, 0.78, 0.77, 0.77, 0.76, 0.76, 0.75],
            2: [0, 0, 0, 0.90, 0.85, 0.82, 0.80, 0.79, 0.78, 0.76, 0.75, 0.75, 0.74, 0.74, 0.73, 0.73, 0.72, 0.72, 0.71, 0.71, 0.70, 0.70, 0.70, 0.69, 0.69, 0.69, 0.69, 0.68, 0.68, 0.68, 0.68, 0.67, 0.67, 0.67, 0.67, 0.66, 0.66, 0.66, 0.66, 0.65, 0.65, 0.65, 0.65, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63, 0.62, 0.62, 0.62, 0.62, 0.60],
        }
    };
    
    horizontalGroundingUtilisationFactor = {
        1: {
            1: [0, 0, 0.80, 0.80, 0.77, 0.75, 0.60, 0.60, 0.60, 0.60, 0.60, 0.56, 0.52, 0.48, 0.44, 0.40, 0.36, 0.32, 0.28, 0.24, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20],
            2: [0, 0, 0, 0.50, 0.45, 0.42, 0.40, 0.38, 0.37, 0.35, 0.33, 0.32, 0.31, 0.31, 0.30, 0.29, 0.28, 0.27, 0.27, 0.26, 0.25, 0.25, 0.25, 0.24, 0.24, 0.24, 0.24, 0.23, 0.23, 0.23, 0.23, 0.22, 0.22, 0.22, 0.22, 0.21, 0.21, 0.21, 0.21, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.19],
        },
        2: {
            1: [0, 0, 0.90, 0.90, 0.88, 0.85, 0.80, 0.79, 0.78, 0.76, 0.75, 0.73, 0.71, 0.69, 0.67, 0.66, 0.64, 0.62, 0.60, 0.58, 0.56, 0.55, 0.54, 0.54, 0.53, 0.52, 0.51, 0.50, 0.50, 0.49, 0.48, 0.47, 0.46, 0.46, 0.45, 0.44, 0.43, 0.42, 0.42, 0.41, 0.40],
            2: [0, 0, 0, 0.60, 0.55, 0.52, 0.50, 0.49, 0.47, 0.46, 0.44, 0.43, 0.41, 0.40, 0.38, 0.37, 0.36, 0.34, 0.33, 0.31, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.29, 0.29, 0.29, 0.29, 0.29, 0.29, 0.29, 0.29, 0.29, 0.29, 0.29, 0.29, 0.29, 0.29, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.27, 0.27, 0.27, 0.27, 0.27, 0.24],
        },
        3: {
            1: [0, 0, 0.95, 0.90, 0.85, 0.82, 0.80, 0.79, 0.78, 0.76, 0.75, 0.74, 0.73, 0.73, 0.72, 0.71, 0.70, 0.69, 0.69, 0.68, 0.68, 0.67, 0.67, 0.66, 0.65, 0.65, 0.64, 0.63, 0.62, 0.62, 0.61, 0.60, 0.60, 0.59, 0.58, 0.58, 0.57, 0.56, 0.55, 0.55, 0.54],
            2: [0, 0, 0, 0.75, 0.70, 0.68, 0.65, 0.63, 0.61, 0.58, 0.56, 0.55, 0.54, 0.53, 0.52, 0.51, 0.49, 0.48, 0.47, 0.46, 0.45, 0.45, 0.44, 0.44, 0.44, 0.44, 0.43, 0.43, 0.43, 0.42, 0.42, 0.42, 0.41, 0.41, 0.41, 0.41, 0.40, 0.40, 0.40, 0.39, 0.39, 0.39, 0.39, 0.39, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.37, 0.37, 0.37, 0.37, 0.37, 0.37, 0.36, 0.36, 0.36, 0.36, 0.33],
        }
    };

    /**
     * 
     * @param {AbstractStorage} storage
     */
    constructor(storage) {
        super();
        this.storage = storage;
    }

    /**
     * 
     * @param {Calculator} calculator
     * @returns {Calculator}
     */
    save(calculator) {
        calculator.id = 1;
        this.storage.save(this.prefix + calculator.id, calculator);
        
        return calculator;
    }
    
    getSoilResistivityBySoilType(soilId) {
        return this.soil[soilId].resistivity;
    }
    
    getVerticalGroundingUtilisationFactor(distanceBetweenVerticalElectrodesL, verticalElectrodesPlacement, numberOfVerticalElectrodes) {
        return this.verticalGroundingUtilisationFactor[distanceBetweenVerticalElectrodesL][verticalElectrodesPlacement][numberOfVerticalElectrodes];
    }
    
    getHorizontalGroundingUtilisationFactor(distanceBetweenVerticalElectrodesL, verticalElectrodesPlacement, numberOfVerticalElectrodes) {
        return this.horizontalGroundingUtilisationFactor[distanceBetweenVerticalElectrodesL][verticalElectrodesPlacement][numberOfVerticalElectrodes];
    }
}

export default CalculatorRepository;
