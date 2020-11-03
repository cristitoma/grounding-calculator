<template>
    <div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                <div v-for="(field, fieldName) in calculatorFields" class="form-group row" :key="fieldName">
                    <div class="col-12 col-sm-3 col-md-4 col-lg-4 col-xl-3 text-left pl-4 pl-sm-5">
                        <label :for="fieldName">
                            {{ field.label }}:
                        </label>
                    </div>
                    <div class="col-12 col-sm-8 col-md-7 col-lg-7 col-xl-8 pl-4 pr-4 pl-sm-1 pr-sm-1">
                        <input v-if="field.constructor.name !== 'SelectField'"
                               v-model="field.defaultValue"
                               :type="inputType(field.constructor.name)"
                               :name="fieldName"
                               :id="fieldName"
                               class="form-control"
                               :readonly="field.isReadOnly"
                               :aria-describedby="fieldName+'-help'"
                               :placeholder="field.placeholder"
                               :hidden="field.isHidden"/>
                        <select v-if="field.constructor.name === 'SelectField'" class="form-control">
                            <option v-for="(option, key) in field.list" :key="key"
                                    v-model="field.defaultValue"
                                    :name="fieldName"
                                    :id="fieldName"
                                    :readonly="field.isReadOnly"
                                    :aria-describedby="fieldName+'-help'"
                                    :placeholder="field.placeholder">
                                {{option}}
                            </option>
                        </select>
                        <small :id="fieldName+'-help'"
                               class="form-text text-muted text-left"
                               :hidden="field.isHidden">
                            This field is mandatory.
                        </small>
                    </div>
                    <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                        {{ field.unit }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 pl-4 pl-sm-5">
                <div class="alert alert-warning" role="alert">
                    <p class="text-uppercase text-danger text-left">Atentie!</p>
                    <p class="text-uppercase text-danger text-left">Se vor completa ca date de intrare numai rubricile galbene apoi se apasa butonul
                        "Calcul".
                    </p>
                    <p class="text-uppercase text-danger text-left">***Info!</p>
                    <p class="text-uppercase text-danger text-left">In mod obisnuit priza orizontala este realizate cu bare cu sectiune rectangulara,
                        cu latimea (b) de 30...40cm si grosimea (c) de 4...5 mm. In caz, valoarea
                        <span class="bg-primary px-2 text-white">efectiva a diametrului echivalent "d" poate fi</span>
                        calculata din relatia: d = (2*b) / &pi;
                    </p>
                </div>
            </div>
            <div class="flex flex-column row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <button type="button" class="btn btn-lg btn-primary" @click="calculate">
                        <span class="text-uppercase">Calcul</span>
                    </button>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <button type="button" class="btn btn-lg btn-warning">
                        <span class="text-uppercase">Exit</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CalculateRequest from "../../../../Interface/Request/CalculateRequest";
    import GroundingCalculator from "../../../GroundingCalculator";
    import Type from '../../../../Interface/Request/typeInputHelper'
    export default {
        name: "CalculatorForm",
        props: {
            calculatorFields: {},
        },
        methods: {
            inputType (type) {
                return Type.prototype.inputType(type)
            },

            calculate () {
                const app = new GroundingCalculator();
                const calculatorResponse = app.getCalculatorController().calculate(
                    new CalculateRequest(
                        1,
                        10,
                        50,
                        20,
                        4,
                        5,
                        1,
                        1,
                        100,
                        9,
                        10,
                        10,
                    )
                );
                console.log(calculatorResponse);
            }
        }
    }
</script>

<style scoped>

</style>
