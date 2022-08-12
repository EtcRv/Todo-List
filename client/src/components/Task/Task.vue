<template>
    <div class="item">
        <input type="checkbox" :checked="checked">
        <label>{{data}}</label>
    </div>
</template>

<script>

export default {
    name: "Task",
    props: ["checked", "data"]
}
</script>

<style scoped>

</style>