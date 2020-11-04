import AbstractField from "~/Interface/FieldType/AbstractField";

class DateField extends AbstractField {
    defaultOptions = {
        defaultValue: '',
        isRequired: false,
        isReadOnly: false,
        label: '',
        tooltip: '',
        isHidden: false,
    };

    inputType = 'date';
    
    constructor(options = {}) {
        super();
        options = {...this.defaultOptions, ...options};
        this.defaultValue = options.defaultValue;
        this.isRequired = options.isRequired;
        this.isReadOnly = options.isReadOnly;
        this.label = options.label;
        this.tooltip = options.tooltip;
        this.isHidden = options.isHidden;
    }
}

export default DateField;
