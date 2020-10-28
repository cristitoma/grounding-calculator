import Calculate from "~/Application/Command/Calculate";
import NumericField from "~/Interface/FieldType/NumericField";
import SelectField from "~/Interface/FieldType/SelectField";

class CalculateRequest extends Calculate {
    isValid() {
        return true;
    }
    
    static getFieldsType() {
        return {
            projectId: new NumericField(),
            verticalElectrodeDiameter: new NumericField(),
            verticalElectrodeLength: new NumericField(),
            verticalElectrodeDepth: new NumericField(),
            soilType: new SelectField(),
            numberOfVerticalElectrodes: new NumericField(),
            distanceBetweenVerticalElectrodesL: new SelectField(),
            verticalElectrodesPlacement: new SelectField(),
            strapLength: new NumericField(),
            strapWidth: new NumericField(),
            numberOfHorizontalGrounding: new NumericField(),
            groundDispersionResistance: new SelectField(),
        }
    }
}

export default CalculateRequest;
