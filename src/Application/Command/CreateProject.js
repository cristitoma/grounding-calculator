class CreateProject {
    constructor(
        number,
        name,
        beneficiaryName,
        beneficiaryAddress,
        beneficiaryPhone,
        beneficiaryEmail,
        drafterName,
        drafterAddress,
        drafterPhone,
        drafterEmail,
        createdAt
    ) {
        this.number = number;
        this.name = name;
        this.beneficiaryName = beneficiaryName;
        this.beneficiaryAddress = beneficiaryAddress;
        this.beneficiaryPhone = beneficiaryPhone;
        this.beneficiaryEmail = beneficiaryEmail;
        this.drafterName = drafterName;
        this.drafterAddress = drafterAddress;
        this.drafterPhone = drafterPhone;
        this.drafterEmail = drafterEmail;
        this.createdAt = createdAt;
    }
}

export default CreateProject;
