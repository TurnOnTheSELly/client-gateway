<script setup>
    const showName = defineModel()
    function makeDog(){
        showName.value = "dog"
    }
    function submit() {
        console.warn(showName.value)
    }
</script>

<template>
    <p>Hello</p>
    <form>
        <p>Message is: {{ showName }}</p>
        <input v-model="showName" placeholder="edit me" />
        <MultiSelectComboBox
        label="test"
        > </MultiSelectComboBox>
    </form>
    <button @click="makeDog()">Button</button>
    <button @click="submit()">Submit</button>
</template>


<style></style>