<template>
    <div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                <div v-for="(field, fieldName) in fields" class="form-group row" :key="fieldName">
                    <div class="col-12 col-sm-3 col-md-4 col-lg-4 col-xl-3 text-left pl-4 pl-sm-5">
                        <label :for="fieldName">
                            {{ field.label }}:
                        </label>
                    </div>
                    <div class="col-12 col-sm-8 col-md-7 col-lg-8 col-xl-8 pl-4 pr-4 pl-sm-1 pr-sm-1">
                        <input v-model="field.defaultValue"
                               :type="inputType(field.constructor.name)"
                               :name="fieldName"
                               :id="fieldName"
                               class="form-control"
                               :readonly="field.isReadOnly"
                               :aria-describedby="fieldName+'-help'"
                               :placeholder="field.placeholder"/>
                        <small :id="fieldName+'-help'" class="form-text text-muted text-left">
                            This field is mandatory.
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div class="row mb-5">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <button type="button" class="btn btn-primary" @click="groundingCalculatorResponse()">
                            <span class="text-uppercase">Calcul rezistenta de  dispersie</span> Rp
                        </button>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <button type="button" class="btn btn-info" @click="showRaport">
                            <span class="text-uppercase">Vizualizeaza raport</span>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pr-lg-5 pr-xl-5">
                        <div class="alert alert-danger" role="alert">
                            <span class="text-uppercase">
                                Atentie! Acest fisier contine macros. Pentru fucntionalitate se va opta pentru
                                'enable macros'
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Type from '../../../../Interface/Request/typeInputHelper'
    import GroundingCalculator from "../../../GroundingCalculator";
    import CreateProjectRequest from "../../../../Interface/Request/CreateProjectRequest";
    export default {
        name: "create-project-form",
        props: {
            fields: {},
        },
        methods: {
            inputType (type) {
                return Type.prototype.inputType(type)
            },

            groundingCalculatorResponse () {
                const createProjectResponse = new GroundingCalculator.getProjectController().create(
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
                console.log(createProjectResponse)
            },

            showRaport () {
                console.log('1')
            }
        }
    }
</script>

<style>

</style>
