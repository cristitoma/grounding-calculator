class Project {
    constructor (
        id,
        number,
        name,
        beneficiary,
        drafter,
        createdAt
    ) {
        this.id = id;
        this.number = number;
        this.name = name;
        this.beneficiary = beneficiary;
        this.drafter = drafter;
        this.createdAt = createdAt;
    }
    
    getId() {
        return this.id;
    }
}

export default Project;
