import AbstractField from "~/Interface/FieldType/AbstractField";

class SelectField extends AbstractField {
    defaultOptions = {
        list: {},
        defaultValue: null,
        isRequired: false,
        isReadOnly: false,
        label: '', 
        placeholder: 'Select',
    };
    
    constructor(options = {}) {
        super();
        options = {...this.defaultOptions, ...options};
        this.list = options.list;
        this.defaultValue = options.defaultValue;
        this.isRequired = options.isRequired;
        this.isReadOnly = options.isReadOnly;
        this.label = options.label;
        this.placeholder = options.placeholder;
    }
}

export default SelectField;
