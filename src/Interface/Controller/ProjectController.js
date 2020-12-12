import ProjectService from "~/Application/Service/ProjectService";
import CreateProjectResponse from "~/Interface/Response/CreateProjectResponse";

class ProjectController {

    /**
     * @param {AbstractProjectRepository} projectRepository
     */
    constructor(projectRepository) {
        this.projectService = new ProjectService(projectRepository);
    }

    /**
     * @param {CreateProjectRequest} createProjectRequest
     * 
     * @returns {object}
     */
    create(createProjectRequest) {
        createProjectRequest.isValid();
        
        const projectId = this.projectService.create(createProjectRequest);
        
        return new CreateProjectResponse.success(200, projectId);
    }

    getById(id) {
        return this.projectService.getById(id);
    }
}

export default ProjectController;
