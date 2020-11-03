import CreateProject from "~/Application/Command/CreateProject";
import NumericField from "~/Interface/FieldType/NumericField";
import StringField from "~/Interface/FieldType/StringField";
import PhoneField from "~/Interface/FieldType/PhoneField";
import EmailField from "~/Interface/FieldType/EmailField";
import DateField from "~/Interface/FieldType/DateField";
import TextField from "~/Interface/FieldType/TextField";

class CreateProjectRequest extends CreateProject {
    isValid() {
        return true;
    }
    
    static getFieldsType() {
        return {
            number: new NumericField({
                label: 'Proiect Nr.',
            }),
            name: new TextField({
                label: 'Denumire proiect',
            }),
            beneficiaryName: new StringField({
                label: 'Beneficiar',
            }),
            beneficiaryAddress: new StringField({
                label: 'Adresa',
            }),
            beneficiaryPhone: new PhoneField({
                label: 'Telefon',
            }),
            beneficiaryEmail: new EmailField({
                label: 'E-mail',
            }),
            drafterName: new StringField({
                label: 'Proiectant',
            }),
            drafterAddress: new StringField({
                label: 'Adresa',
            }),
            drafterPhone: new PhoneField({
                label: 'Telefon',
            }),
            drafterEmail: new EmailField({
                label: 'E-mail',
            }),
            createdAt: new DateField({
                label: 'Intocmit',
            }),
        }
    }
    
    static fromObject(object) {
        return new CreateProjectRequest(
            object.number,
            object.name,
            object.beneficiaryName,
            object.beneficiaryAddress,
            object.beneficiaryPhone,
            object.beneficiaryEmail,
            object.drafterName,
            object.drafterAddress,
            object.drafterPhone,
            object.drafterEmail,
            object.createdAt
        );
    }
}

export default CreateProjectRequest;
