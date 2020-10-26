import AbstractProjectRepository from '../../Application/Repository/AbstractProjectRepository'

class CalculatorRepository extends AbstractProjectRepository {
    prefix = 'calculator_';
    
    /**
     * @type {AbstractStorage}
     */
    storage = null;

    /**
     * 
     * @param {AbstractStorage} storage
     */
    constructor(storage) {
        super();
        this.storage = storage;
    }

    /**
     * 
     * @param {Calculator} calculator
     * @returns {Calculator}
     */
    save(calculator) {
        calculator.id = 1;
        this.storage.save(this.prefix + calculator.id, calculator);
        
        return calculator;
    }
}

export default CalculatorRepository;
