class CreateProjectResponse {
    isSuccess = false;
    statusCode = 0;
    payload = {};
    message = '';

    /**
     * @param {int} statusCode
     * @param {int} projectId
     * 
     * @return {CreateProjectResponse}
     */
    static success(statusCode, projectId) {
        const response = new CreateProjectResponse();
        
        response.statusCode = statusCode;
        response.isSuccess = true;
        response.payload = {
            projectId: projectId,
        };
        
        return response;
    }
}

export default CreateProjectResponse;
