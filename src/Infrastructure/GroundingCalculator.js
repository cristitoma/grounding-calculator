import SessionStorage from "~/Infrastructure/Storage/SessionStorage";
import ProjectRepository from "~/Infrastructure/Repository/ProjectRepository";
import CalculatorRepository from "~/Infrastructure/Repository/CalculatorRepository";
import ProjectController from "~/Interface/Controller/ProjectController";
import CalculatorController from "~/Interface/Controller/CalculatorController";
import ReportController from "~/Interface/Controller/ReportController";
import ReportRepository from "~/Infrastructure/Repository/ReportRepository";

class GroundingCalculator {
    constructor() {
        this.sessionStorage = new SessionStorage();
        this.projectRepository = new ProjectRepository(this.sessionStorage);
        this.calculatorRepository = new CalculatorRepository(this.sessionStorage);
        this.reportRepository = new ReportRepository(this.sessionStorage);
    }
    
    getProjectController() {
        return new ProjectController(this.projectRepository);
    }
    
    getCalculatorController() {
        return new CalculatorController(this.calculatorRepository);
    }
    
    getReportController() {
        return new ReportController(this.projectRepository, this.calculatorRepository, this.reportRepository);
    }
}

export default new GroundingCalculator();
