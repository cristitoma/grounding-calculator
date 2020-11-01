class CalculateResponse {
    isSuccess = false;
    statusCode = 0;
    payload = {};
    message = '';

    /**
     * @param {int} statusCode
     * @param {CalculatorResultDto} calculatorResultDto
     * 
     * @return {CalculateResponse}
     */
    static success(statusCode, calculatorResultDto) {
        const response = new CalculateResponse();
        
        response.statusCode = statusCode;
        response.isSuccess = true;
        response.payload = {
            result: JSON.parse(JSON.stringify(calculatorResultDto)),
        };
        
        return response;
    }

    /**
     * @param {int} statusCode
     * @param {Object} payload
     * @param {string} message
     * @returns {CalculateResponse}
     */
    static error(statusCode, payload, message) {
        const response = new CalculateResponse();
        
        response.statusCode = statusCode;
        response.isSuccess = false;
        response.payload = payload;
        response.message = message;
        
        return response;
    }
}

export default CalculateResponse;
