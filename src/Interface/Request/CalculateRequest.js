import Calculate from "~/Application/Command/Calculate";
import NumericField from "~/Interface/FieldType/NumericField";
import SelectField from "~/Interface/FieldType/SelectField";

class CalculateRequest extends Calculate {
    isValid() {
        return true;
    }
    
    static getFieldsType() {
        return {
            projectId: new NumericField({
                isRequired: true,
                isHidden: true,
            }),
            verticalElectrodeDiameter: new NumericField({
                isRequired: true,
                label: 'Diametru electrod vertical',
                tooltip: 'In mod obisnuit piza orizontala este realizata cu bare cu sectiune rectangulara, cu latime...',
                unit: 'cm',
            }),
            verticalElectrodeLength: new NumericField({
                isRequired: true,
                label: 'Lungime electrod vertical, I',
                unit: 'cm',
            }),
            verticalElectrodeDepth: new NumericField({
                isRequired: true,
                label: 'Adancime ingropare electrod',
                unit: 'cm',
            }),
            soilType: new SelectField({
                isRequired: true,
                label: 'Natura solului',
                list: {
                    1: 'Pamant, huma, turba (foarte umede)',
                    2: 'Beton: o parte ciment si trei parti nisip',
                    3: 'Beton: o parte ciment si cinci parti pietris',
                    4: 'Pamant arabil',
                    5: 'Pamant argilos, argila',
                    6: 'Piatra si pamânt pietros',
                    7: 'Loess, pamant de padure,pamant cu pietris',
                    8: 'Argila cu nisip',
                    9: 'Pamant nisipos',
                    10: 'Nisip foarte umed',
                    11: 'Balast cu pamant',
                    12: 'Nisip, nisip cu pietris',
                    13: 'Roci, bazalturi',
                    14: 'Stânca compacta',
                }
            }),
            numberOfVerticalElectrodes: new NumericField({
                isRequired: true,
                label: 'Numar electrozi verticali',
            }),
            distanceBetweenVerticalElectrodesL: new SelectField({
                isRequired: true,
                label: 'Distanta dintre electrozi, e',
                list: {
                    1: 'e = l',
                    2: 'e = 2.l',
                    3: 'e = 3.l',
                }
            }),
            verticalElectrodesPlacement: new SelectField({
                isRequired: true,
                label: 'Asezare electrozi',
                list: {
                    1: 'liniar',
                    2: 'pe contur',
                }
            }),
            strapLength: new NumericField({
                isRequired: true,
                label: 'Lungime platbanda',
                unit: 'cm',
            }),
            strapWidth: new NumericField({
                isRequired: true,
                label: 'Latime platbanda',
                unit: 'cm',
            }),
            numberOfHorizontalGrounding: new NumericField({
                isRequired: true,
                label: 'Numar prize orizontale',
            }),
            groundDispersionResistance: new SelectField({
            isRequired: true,
                label: 'Valoarea maxima a rezistentei de dispersie',
                list: {
                    1: '1 - Priza comuna cu paratrasnetul',
                    4: '4 - Priza simpla',
                    10: '10 - Priza de paratrasnet',
                }
            }),
        }
    }
    
    static fromObject(object) {
        return new CalculateRequest(
            object.projectId,
            object.verticalElectrodeDiameter,
            object.verticalElectrodeLength,
            object.verticalElectrodeDepth,
            object.soilType,
            object.numberOfVerticalElectrodes,
            object.distanceBetweenVerticalElectrodesL,
            object.verticalElectrodesPlacement,
            object.strapLength,
            object.strapWidth,
            object.numberOfHorizontalGrounding,
            object.groundDispersionResistance,
        );
    }
}

export default CalculateRequest;
