<template>
    <div class="card">
        <div class="card-header">
            Create project
        </div>
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <div v-for="(field, fieldName) in fields" class="form-group row" :key="fieldName">
                        <div class="col-12 col-sm-3 col-md-4 col-lg-4 col-xl-3 text-left pl-4 pl-sm-5">
                            <label :for="fieldName">
                                {{ field.label }}:
                            </label>
                        </div>
                        <div class="col-12 col-sm-8 col-md-7 col-lg-8 col-xl-8 pl-4 pr-4 pl-sm-1 pr-sm-1">
                            <input v-model="request[fieldName]"
                                   :type="field.inputType"
                                   :name="fieldName"
                                   :id="fieldName"
                                   class="form-control"
                                   :readonly="field.isReadOnly"
                                   :placeholder="field.placeholder"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mb-5">
                <div class="col-12 pl-4 pl-sm-5">
                    <button type="button" class="btn btn-primary" @click="groundingCalculatorResponse()">
                        <span class="text-uppercase">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CreateProjectRequest from "../../../../Interface/Request/CreateProjectRequest";
    import GroundingCalculator from "../../../GroundingCalculator";

    export default {
        name: "CreateProjectForm",
        computed: {
            fields: () => {
                return CreateProjectRequest.getFieldsType();
            },
            request: () => {
                const request = {};
                const fields = CreateProjectRequest.getFieldsType();

                Object.keys(fields).forEach((fieldName) => {
                    request[fieldName] = fields[fieldName].defaultValue;
                });

                return request;
            }
        },
        methods: {
            groundingCalculatorResponse () {
                const createProjectResponse = GroundingCalculator.getProjectController().create(
                    CreateProjectRequest.fromObject(this.request)
                );
                if (createProjectResponse.isSuccess) {
                    this.$router.push({name: 'CalculatorForm'});
                    window.sessionStorage.setItem('projectId', createProjectResponse.payload.projectId);
                }
            },
        }
    }
</script>

<style>

</style>
