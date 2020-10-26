import {expect} from "@jest/globals";
import Calculator from "~/Domain/Entity/Calculator";
import CalculatorResult from "~/Domain/ValueObject/CalculatorResult";

test('CalculatorResult', () => {
    const calculator = new Calculator();
    
    expect(calculator.calculate().constructor.name).toBe(CalculatorResult.name);
});
