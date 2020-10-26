import GroundingCalculator from "~/Infrastructure/GroundingCalculator";
import CreateProjectRequest from "~/Interface/Request/CreateProjectRequest";
import CreateProjectResponse from "~/Interface/Response/CreateProjectResponse";
import CalculateRequest from "~/Interface/Request/CalculateRequest";
import CalculateResponse from "~/Interface/Response/CalculateResponse";
import {expect} from "@jest/globals";

const app = new GroundingCalculator();

test('Create Project', () => {
    const createProjectResponse = app.getProjectController().create(
        new CreateProjectRequest(
            1,
            'Project Name',
            'Beneficiary Name',
            'Beneficiary Address',
            'Beneficiary Phone',
            'Beneficiary Email',
            'Drafter Name',
            'Drafter Address',
            'Drafter Phone',
            'Drafter Email',
            '2020-10-23',
        )
    );
    
    console.log(createProjectResponse);
    
    expect(createProjectResponse.constructor.name).toBe(CreateProjectResponse.name);
});

test('Calculate', () => {
    const calculatorResponse = app.getCalculatorController().calculate(
        new CalculateRequest(
            1,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
        )
    );
    console.log(calculatorResponse);
    
    expect(calculatorResponse.constructor.name).toBe(CalculateResponse.name);
});
