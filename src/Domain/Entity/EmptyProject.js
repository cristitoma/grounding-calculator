import Beneficiary from "~/Domain/ValueObject/Beneficiary";
import Drafter from "~/Domain/ValueObject/Drafter";

class EmptyProject {
    constructor () {
        this.id = '';
        this.number = '';
        this.name = '';
        this.beneficiary = new Beneficiary('', '', '', '');
        this.drafter = new Drafter('', '', '', '');;
        this.createdAt = '';
    }
    
    getId() {
        return this.id;
    }
}

export default EmptyProject;
