<template>
    <div>
        Not Found
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        beforeCreate() {
            this.$router.push({name: 'CreateProjectForm'});
        }
    }
</script>

<style scoped>

</style>
