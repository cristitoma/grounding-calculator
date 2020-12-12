class CreateReportResponse {
    isSuccess = false;
    statusCode = 0;
    payload = {};
    message = '';

    /**
     * @param {int} statusCode
     * @param {int} reportId
     * 
     * @return {CreateReportResponse}
     */
    static success(statusCode, reportId) {
        const response = new CreateReportResponse();
        
        response.statusCode = statusCode;
        response.isSuccess = true;
        response.payload = {
            reportId: reportId,
        };
        
        return response;
    }
}

export default CreateReportResponse;
