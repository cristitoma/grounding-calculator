import Calculator from "../../Domain/Entity/Calculator";
import CalculatorResultDto from "../Dto/CalculatorResultDto";

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
            calculateCommand.soilType,
            calculateCommand.numberOfVerticalElectrodes,
            calculateCommand.distanceBetweenVerticalElectrodesL,
            calculateCommand.verticalElectrodesPlacement,
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
