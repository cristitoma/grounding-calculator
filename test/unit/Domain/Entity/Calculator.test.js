import {expect} from "@jest/globals";
import Calculator from "~/Domain/Entity/Calculator";
import CalculatorResult from "~/Domain/ValueObject/CalculatorResult";

test('CalculatorResult', () => {
    const calculator = new Calculator(
        null,
        1,
            10,
            50,
            20,
            5000,
            5,
            1,
            1,
            100,
            9,
            0.7,
            0.75,
            10,
            10,
    );
    calculator.calculate();
    
    expect(calculator.getResult().constructor.name).toBe(CalculatorResult.name);
});
