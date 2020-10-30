import AbstractField from "~/Interface/FieldType/AbstractField";

class BooleanField extends AbstractField {
    defaultOptions = {
        defaultValue: '',
        isRequired: false,
        isReadOnly: false,
        label: '',
        tooltip: '',
        isHidden: false,
    };

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

export default BooleanField;
