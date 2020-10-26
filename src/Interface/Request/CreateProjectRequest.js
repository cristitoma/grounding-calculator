import CreateProject from '../../Application/Command/CreateProject';
import NumericField from "../FieldType/NumericField";
import StringField from "../FieldType/StringField";
import PhoneField from "../FieldType/PhoneField";
import EmailField from "../FieldType/EmailField";
import DateField from "../FieldType/DateField";

class CreateProjectRequest extends CreateProject {
    isValid() {
        return true;
    }
    
    static getFieldsType() {
        return {
            number: new NumericField(),
            name: new StringField(),
            beneficiaryName: new StringField(),
            beneficiaryAddress: new StringField(),
            beneficiaryPhone: new PhoneField(),
            beneficiaryEmail: new EmailField(),
            drafterName: new StringField(),
            drafterAddress: new StringField(),
            drafterPhone: new PhoneField(),
            drafterEmail: new EmailField(),
            createdAt: new DateField(),
        }
    }
}

export default CreateProjectRequest;
