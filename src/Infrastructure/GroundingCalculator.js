import SessionStorage from "./Storage/SessionStorage";
import ProjectRepository from "./Repository/ProjectRepository";
import ProjectController from "../Interface/Controller/ProjectController";
import CalculatorController from "../Interface/Controller/CalculatorController";
import CalculatorRepository from "./Repository/CalculatorRepository";

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

export default GroundingCalculator;
