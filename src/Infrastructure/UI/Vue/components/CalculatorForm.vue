<template>
    <div class="card">
        <div class="card-header">
            Calculator
        </div>
        <div class="card-body">
            <div class="row justify-content-center mb-3">
                <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <div v-for="(field, fieldName) in fields" class="form-group row" :key="fieldName">
                        <div class="col-12 col-sm-3 col-md-4 col-lg-4 col-xl-4 text-left pl-4 pl-sm-5">
                            <label :for="fieldName" :hidden="field.isHidden">
                                {{ field.label }}<span v-if="field.unit"> ({{ field.unit }})</span><span v-if="field.isRequired" style="color:red;"> *</span>:
                                <span v-if="field.tooltip && !field.isHidden"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      :title="field.tooltip">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                            </span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-8 col-md-7 col-lg-7 col-xl-7 pl-4 pr-4 pl-sm-1 pr-sm-1">
                            <input v-if="field.constructor.name !== 'SelectField'"
                                   v-model="request[fieldName]"
                                   :type="field.inputType"
                                   :name="fieldName"
                                   :id="fieldName"
                                   class="form-control"
                                   :readonly="field.isReadOnly"
                                   :placeholder="field.placeholder"
                                   :hidden="field.isHidden"/>
                            <select v-model="request[fieldName]" v-if="field.constructor.name === 'SelectField'" class="form-control">
                                <option value=''>{{field.placeholder}}</option>
                                <option v-for="(option, key) in field.list" :key="key"
                                        :name="fieldName"
                                        :id="fieldName"
                                        :value="key"
                                        :readonly="field.isReadOnly"
                                        :placeholder="field.placeholder">
                                    {{option}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mb-3">
                <div class="col-12 col-sm-3 col-md-4 col-lg-4 col-xl-3 text-left pl-4 pl-sm-5">
                    <button type="button" class="btn btn-primary" @click="calculate()">
                        <span class="text-uppercase">Calculeaza</span>
                    </button>
                </div>
            </div>

            <div class="row justify-content-center mb-3" v-if="calculatorResponse !== null && calculatorResponse.isSuccess == true">
                <div class="col-8 text-left pl-4 pl-sm-5">
                    <hr class=""/>

                    <div v-for="(field, fieldName) in calculatorResponse.payload.result" class="" :key="fieldName">
                        <label>{{field.label}}:</label><span> {{field.value}}</span><span> {{field.unit}}</span>
                    </div>

                    <br>

                    <button type="button" class="btn btn-info">
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

    export default {
        name: "CalculatorForm",
        computed: {
            fields: () => {
                return CalculateRequest.getFieldsType();
            },
            request: () => {
                const request = {};
                const fields = CalculateRequest.getFieldsType();

                Object.keys(fields).forEach((fieldName) => {
                    request[fieldName] = fields[fieldName].defaultValue;
                });

                return request;
            }
        },
        data: () => ({
           calculatorResponse: null,
        }),
        methods: {
            calculate () {
                this.request.projectId = parseInt(window.sessionStorage.getItem('projectId'));
                this.calculatorResponse = GroundingCalculator.getCalculatorController().calculate(
                    CalculateRequest.fromObject(this.request)
                );
            }
        }
    }
</script>

<style scoped>
    hr {
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
</style>
