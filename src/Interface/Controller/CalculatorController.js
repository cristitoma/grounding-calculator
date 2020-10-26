import CalculatorService from "../../Application/Service/CalculatorService";
import CalculateResponse from "../Response/CalculateResponse";

class CalculatorController {
    /**
     * @param {AbstractCalculatorRepository} calculatorRepository
     */
    constructor (calculatorRepository) {
        this.calculatorService = new CalculatorService(calculatorRepository);
    }

    /**
     * @param {CalculateRequest} calculateRequest
     * @returns {CalculateResponse}
     */
    calculate(calculateRequest) {
        calculateRequest.isValid();
        
        const calculatorResultDto = this.calculatorService.calculate(calculateRequest);
        
        return new CalculateResponse.success(200, calculatorResultDto);
    }
}

export default CalculatorController;
