<template>
    <div class="card">
        <div class="card-header">
            Create project
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div v-for="(field, fieldName) in fields" class="form-group row" :key="fieldName">
                        <div class="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-left pl-4">
                            <label :for="fieldName" :hidden="field.isHidden">
                                {{ field.label }} <span v-if="field.isRequired" style="color:red;"> * </span> :
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
                        <div class="col-12 col-sm-8 col-md-9 col-lg-9 col-xl-9 pl-4 pr-4">
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
            <div class="row mb-4">
                <div class="col-12 pl-4">
                    <button type="button" class="btn btn-primary float-left" @click="groundingCalculatorResponse()">
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
