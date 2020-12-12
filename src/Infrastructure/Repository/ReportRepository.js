import AbstractReportRepository from "~/Application/Repository/AbstractProjectRepository";

class ReportRepository extends AbstractReportRepository {
    prefix = 'report_';
    
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
     * @param {Report} report
     * @returns {Report}
     */
    save(report) {
        report.id = 1;
        this.storage.save(this.prefix + report.id, report);
        
        return report;
    }
    
    getById(id) {
        return this.storage.get(this.prefix + id);
    }
}

export default ReportRepository;
