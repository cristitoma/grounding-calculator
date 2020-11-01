import CalculatorResultDto from "~/Application/Dto/CalculatorResultDto";
import Calculator from "~/Domain/Entity/Calculator";

class CalculatorService {
    /**
     * @type {AbstractCalculatorRepository}
     */
    calculatorRepository = null;

    /**
     * @param {AbstractCalculatorRepository} calculatorRepository
     */
    constructor(calculatorRepository) {
        this.calculatorRepository = calculatorRepository;
    }
    
    /**
     * @param {Calculate} calculateCommand
     * 
     * @return {CalculatorResultDto}
     */
    calculate(calculateCommand) {
        const calculator = new Calculator(
            null,
            calculateCommand.projectId,
            calculateCommand.verticalElectrodeDiameter,
            calculateCommand.verticalElectrodeLength,
            calculateCommand.verticalElectrodeDepth,
            this.calculatorRepository.getSoilResistivityBySoilType(calculateCommand.soilType),
            calculateCommand.numberOfVerticalElectrodes,
            calculateCommand.distanceBetweenVerticalElectrodesL,
            calculateCommand.verticalElectrodesPlacement,
            this.calculatorRepository.getVerticalGroundingUtilisationFactor(calculateCommand.distanceBetweenVerticalElectrodesL, calculateCommand.verticalElectrodesPlacement, calculateCommand.numberOfVerticalElectrodes),
            this.calculatorRepository.getHorizontalGroundingUtilisationFactor(calculateCommand.distanceBetweenVerticalElectrodesL, calculateCommand.verticalElectrodesPlacement, calculateCommand.numberOfVerticalElectrodes),
            calculateCommand.strapLength,
            calculateCommand.strapWidth,
            calculateCommand.numberOfHorizontalGrounding,
            calculateCommand.groundDispersionResistance,
        );
        
        
        const calculatorResult = calculator.calculate();
        
        this.calculatorRepository.save(calculator);

        return CalculatorResultDto.createFromObject(calculatorResult);
    }
}

export default CalculatorService;
