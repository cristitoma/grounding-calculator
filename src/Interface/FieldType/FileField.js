import AbstractField from "~/Interface/FieldType/AbstractField";

class FileField extends AbstractField {
    defaultOptions = {
        defaultValue: '',
        isRequired: false,
        isReadOnly: false,
        label: '',
        placeholder: '',
        isHidden: false,
    };
    
    constructor(options = {}) {
        super();
        options = {...this.defaultOptions, ...options};
        this.defaultValue = options.defaultValue;
        this.isRequired = options.isRequired;
        this.isReadOnly = options.isReadOnly;
        this.label = options.label;
        this.placeholder = options.placeholder;
        this.isHidden = options.isHidden;
    }
}

export default FileField;
