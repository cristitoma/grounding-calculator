<template>
    <div>
    <div v-for="(field, fieldName) in fields">
      <input type="number" :name="fieldName" v-if="field.constructor.name === 'NumericField'">
      <div v-else>
        {{ fieldName }}: {{ field.constructor.name }}
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "create-project-form",
        props: {
            fields: {},
        }
    }
</script>

<style>

</style>
