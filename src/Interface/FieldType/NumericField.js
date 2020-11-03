import AbstractField from "~/Interface/FieldType/AbstractField";

class NumericField extends AbstractField {
    defaultOptions = {
        defaultValue: '',
        min: null,
        max: null,
        isRequired: false,
        isReadOnly: false,
        label: '',
        placeholder: '',
        tooltip: '',
        isHidden: false,
        unit: null,
    };
    
    constructor(options = {}) {
        super();
        options = {...this.defaultOptions, ...options};
        this.defaultValue = options.defaultValue;
        this.min = options.min;
        this.max = options.max;
        this.isRequired = options.isRequired;
        this.isReadOnly = options.isReadOnly;
        this.label = options.label;
        this.placeholder = options.placeholder;
        this.tooltip = options.tooltip;
        this.isHidden = options.isHidden;
        this.unit = options.unit;
    }
}

export default NumericField;
