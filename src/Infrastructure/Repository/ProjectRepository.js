import AbstractProjectRepository from '../../Application/Repository/AbstractProjectRepository'

class ProjectRepository extends AbstractProjectRepository {
    prefix = 'project_';
    
    /**
     * @type {AbstractStorage}
     */
    storage = null;

    /**
     * 
     * @param {AbstractStorage} storage
     */
    constructor(storage) {
        super();
        this.storage = storage;
    }

    /**
     * 
     * @param {Project} project
     * @returns {Project}
     */
    save(project) {
        project.id = 1;
        this.storage.save(this.prefix + project.id, project);
        
        return project;
    }
}

export default ProjectRepository;
