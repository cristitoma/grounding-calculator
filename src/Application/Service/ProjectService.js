import Project from "~/Domain/Entity/Project";
import Beneficiary from "~/Domain/ValueObject/Beneficiary";
import Drafter from "~/Domain/ValueObject/Drafter";

class ProjectService {
    /**
     * @type {AbstractProjectRepository}
     */
    projectRepository = null;

    /**
     * @param {AbstractProjectRepository} projectRepository
     */
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }

    /**
     * @param {CreateProject} createProjectCommand
     * @returns {int}
     */
    create(createProjectCommand) {
        const project = this.projectRepository.save(
            new Project(
                null,
                createProjectCommand.number,
                createProjectCommand.name,
                new Beneficiary(
                    createProjectCommand.beneficiaryName,
                    createProjectCommand.beneficiaryAddress,
                    createProjectCommand.beneficiaryPhone,
                    createProjectCommand.beneficiaryEmail,
                ),
                new Drafter(
                    createProjectCommand.drafterName,
                    createProjectCommand.drafterAddress,
                    createProjectCommand.drafterPhone,
                    createProjectCommand.drafterEmail,
                ),
                createProjectCommand.createdAt,
            )
        );
        
        return project.getId();
    }
    
    getById(id) {
        return this.projectRepository.getById(id);
    }
}

export default ProjectService;
