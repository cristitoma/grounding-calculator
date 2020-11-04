<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <div v-for="(field, fieldName) in calculatorFields" class="form-group row" :key="fieldName">
                        <div class="col-12 col-sm-3 col-md-4 col-lg-4 col-xl-4 text-left pl-4 pl-sm-5">
                            <label :for="fieldName" :hidden="field.isHidden">
                                {{ field.label }}
                                <span v-if="field.isRequired">*</span>
                                <span v-if="field.tooltip"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      :title="field.tooltip">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                </span>
                                    :
                            </label>
                        </div>
                        <div class="col-12 col-sm-8 col-md-7 col-lg-7 col-xl-7 pl-4 pr-4 pl-sm-1 pr-sm-1">
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
                        </div>
                        <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                            {{ field.unit }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between mb-5">
                <!--   <div class="col-6 pl-4 pl-sm-5">
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
                   </div>-->
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <button type="button" class="btn btn-lg btn-primary" @click="calculate">
                        <span class="text-uppercase">Calcul</span>
                    </button>
                </div>
                <div v-if="showRaport" class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <button type="button" class="btn btn-lg btn-info">
                        <span class="text-uppercase">Vizualizare raport</span>
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
        data: () => ({
           showRaport: false
        }),
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
                if (calculatorResponse.isSuccess) this.showRaport = true;
            }
        }
    }
</script>

<style scoped>

</style>
