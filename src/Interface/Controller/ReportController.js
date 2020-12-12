import CreateReportResponse from "~/Interface/Response/CreateReportResponse";
import ReportService from "~/Application/Service/ReportService";

class ReportController {

    /**
     * @param {AbstractProjectRepository} projectRepository
     * @param {AbstractCalculatorRepository} calculatorRepository
     * @param {AbstractReportRepository} reportRepository
     */
    constructor(projectRepository, calculatorRepository, reportRepository) {
        this.reportService = new ReportService(projectRepository, calculatorRepository, reportRepository);
    }

    /**
     * @returns {CreateReportResponse}
     */
    create(calculatorId) {
        const reportId = this.reportService.create(calculatorId);

        return new CreateReportResponse.success(200, reportId);
    }
    
    getById(id) {
        return this.reportService.getById(id);
    }
}

export default ReportController;
