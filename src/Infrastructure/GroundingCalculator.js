import SessionStorage from "~/Infrastructure/Storage/SessionStorage";
import ProjectRepository from "~/Infrastructure/Repository/ProjectRepository";
import CalculatorRepository from "~/Infrastructure/Repository/CalculatorRepository";
import ProjectController from "~/Interface/Controller/ProjectController";
import CalculatorController from "~/Interface/Controller/CalculatorController";

class GroundingCalculator {
    constructor() {
        this.sessionStorage = new SessionStorage();
        this.projectRepository = new ProjectRepository(this.sessionStorage);
        this.calculatorRepository = new CalculatorRepository(this.sessionStorage);
    }
    
    getProjectController() {
        return new ProjectController(this.projectRepository);
    }
    
    getCalculatorController() {
        return new CalculatorController(this.calculatorRepository);
    }
}

export default new GroundingCalculator();
