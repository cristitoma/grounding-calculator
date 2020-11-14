import CalculatorService from "~/Application/Service/CalculatorService";
import CalculateResponse from "~/Interface/Response/CalculateResponse";

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
        const invalidFields = calculateRequest.isValid();
        if (Object.keys(invalidFields).length > 0) {
            return new CalculateResponse.error(400, {fields: invalidFields}, 'Please check invalid fields.');
        }
        
        try {
            const calculatorResultDto = this.calculatorService.calculate(calculateRequest);
            
            return new CalculateResponse.success(200, calculatorResultDto);
        } catch (e) {

            return new CalculateResponse.error(400, {}, e.message);
        }
    }
}

export default CalculatorController;
