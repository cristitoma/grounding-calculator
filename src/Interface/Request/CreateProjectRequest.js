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
                isRequired: true,
                label: 'Proiect Nr.',
            }),
            name: new TextField({
                isRequired: true,
                label: 'Denumire proiect',
            }),
            beneficiaryName: new StringField({
                isRequired: true,
                label: 'Beneficiar',
            }),
            beneficiaryAddress: new StringField({
                isRequired: true,
                label: 'Adresa',
            }),
            beneficiaryPhone: new PhoneField({
                isRequired: true,
                label: 'Telefon',
            }),
            beneficiaryEmail: new EmailField({
                isRequired: true,
                label: 'E-mail',
            }),
            drafterName: new StringField({
                isRequired: true,
                label: 'Proiectant',
            }),
            drafterAddress: new StringField({
                isRequired: true,
                label: 'Adresa',
            }),
            drafterPhone: new PhoneField({
                isRequired: true,
                label: 'Telefon',
            }),
            drafterEmail: new EmailField({
                isRequired: true,
                label: 'E-mail',
            }),
            createdAt: new DateField({
                isRequired: true,
                label: 'Intocmit',
            }),
        }
    }
}

export default CreateProjectRequest;
