class Type {
     inputType(value) {
        let type = '';
        switch (value) {
            case 'NumericField':
                type = 'number';
                break;
            case 'TextField':
                type = 'text';
                break;
            case 'StringField':
                type = 'text';
                break;
            case 'PhoneField':
                type = 'number';
                break;
            case 'EmailField':
                type = 'email';
                break;
            case 'DateField':
                type = 'date';
                break;
            default:
                type = 'text';
        }
        return type;
    }
}

export default Type;
