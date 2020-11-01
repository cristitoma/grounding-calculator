import NumericField from "~/Interface/FieldType/NumericField";

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
            result: {
                soilResistivity: {
                    value: calculatorResultDto.soilResistivity,
                    label: 'Rezistivitatea solului',
                    unit: 'ohmi.cm',
                },
                verticalElectrodeDispersionResistance: {
                    value: calculatorResultDto.verticalElectrodeDispersionResistance,
                    label: 'Rez. de dispersie a el. vertical',
                    unit: 'ohmi',
                },
                distanceBetweenVerticalElectrodesCM: {
                    value: calculatorResultDto.distanceBetweenVerticalElectrodesCM,
                    label: 'Distanta dintre electrozi',
                    unit: 'cm',
                },
                verticalGroundingUF: {
                    value: calculatorResultDto.verticalGroundingUF,
                    label: 'Factor utilizare priza verticala',
                    unit: '',
                },
                verticalGroundingResistance: {
                    value: calculatorResultDto.verticalGroundingResistance,
                    label: 'Rezistenta prizei verticale',
                    unit: 'ohmi',
                },
                horizontalElectrodeDispersionResistance: {
                    value: calculatorResultDto.horizontalElectrodeDispersionResistance,
                    label: 'Rez. de dispersie el. orizontal',
                    unit: 'ohmi',
                },
                horizontalGroundingUF: {
                    value: calculatorResultDto.horizontalGroundingUF,
                    label: 'Factor utiliz. priza orizontala',
                    unit: '',
                },
                horizontalGroundingResistance: {
                    value: calculatorResultDto.horizontalGroundingResistance,
                    label: 'Rezistenta prizei orizontale',
                    unit: 'ohmi',
                },
                multipleGroundingResistance: {
                    value: calculatorResultDto.multipleGroundingResistance,
                    label: 'Rezistenta prizei multiple',
                    unit: 'ohmi',
                },
            },
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
