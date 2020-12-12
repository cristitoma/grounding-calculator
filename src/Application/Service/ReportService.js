import Report from "~/Domain/Entity/Report";
import EmptyProject from "~/Domain/Entity/EmptyProject";
import Calculator from "~/Domain/Entity/Calculator";

class ReportService {
    /**
     * @param {AbstractProjectRepository} projectRepository
     * @param {AbstractCalculatorRepository} calculatorRepository
     * @param {AbstractReportRepository} reportRepository
     */
    constructor(projectRepository, calculatorRepository, reportRepository) {
        this.projectRepository = projectRepository;
        this.calculatorRepository = calculatorRepository;
        this.reportRepository = reportRepository;
    }
    
    create(calculatorId) {
        const calculator = this.calculatorRepository.getById(calculatorId);
        let project = this.projectRepository.getById(calculator.projectId);
        if (typeof project === 'undefined') {
            project = new EmptyProject();
        }

        const report = this.reportRepository.save(new Report(
            null,
            project,
            calculator,
            Calculator.DISTANCE_BETWEEN_VERTICAL_ELECTRODES[calculator.distanceBetweenVerticalElectrodesL],
            Calculator.VERTICAL_ELECTRODE_PLACEMENT[calculator.verticalElectrodesPlacement]
        ));
        
        return report.id;
    }
    
    getById(id) {
        return this.reportRepository.getById(id);
    }
}

export default ReportService;
