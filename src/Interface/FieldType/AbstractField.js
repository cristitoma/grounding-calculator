class AbstractField {
    isRequired = false;
    isHidden = false;
    
    isValid(value) {
        let violations = [];
        if (this.isRequired && typeof(value) === 'undefined' || this.isEmpty(value)) {
            violations.push('This field is required');
        }
        
        return violations;
    };

    inputType = 'text';

    isEmpty(e) {
        switch (e) {
        case "":
        case 0:
        case "0":
        case null:
        case false:
        case typeof(e) === "undefined":
          return true;
        default:
          return false;
        }
    }
}

export default AbstractField;
