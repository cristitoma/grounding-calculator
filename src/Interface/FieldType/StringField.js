import AbstractField from "~/Interface/FieldType/AbstractField";

class StringField extends AbstractField {
    defaultOptions = {
        defaultValue: '',
        minLength: null,
        maxLength: null,
        isRequired: false,
        isReadOnly: false,
        label: '',
        placeholder: '',
        tooltip: '',
        isHidden: false,
    };
    
    constructor(options = {}) {
        super();
        options = {...this.defaultOptions, ...options};
        this.defaultValue = options.defaultValue;
        this.minLength = options.minLength;
        this.maxLength = options.maxLength;
        this.isRequired = options.isRequired;
        this.isReadOnly = options.isReadOnly;
        this.label = options.label;
        this.placeholder = options.placeholder;
        this.tooltip = options.tooltip;
        this.isHidden = options.isHidden;
    }
}

export default StringField;
