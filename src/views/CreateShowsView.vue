<script setup>
    import { ref } from 'vue';
    import { useShowFormStore } from '@/stores/showform';

    const showForm = useShowFormStore();


    // const showID =defineModel("idModel")
    // const showName = defineModel("showModel")
    // const showImg = defineModel("imgModel")
    // const showWebsite= defineModel("webModel")
    // const showOverview = defineModel("overviewModel")
    // const showGenres = defineModel("genresModel")
    // const showPosterPath = defineModel("posterModel")
    // const visible = ref()
    const beCode = ref(null)

    


    function makeDog(){
        // showName.value = "dog"
        showForm.showName = "dog"
    }
    function submit() {
        console.warn(showForm.showName)
    }
    // async function findShowDetails() {
    //     const headers = { "Content-Type": "application/json" };
    //     const response = await fetch(`http://localhost:3000/api/v1/show_services/${showID.value}`, { headers })
    //     if (response.status == 201) {
    //         const data = await response.json()
    //         console.log(data)
    //         showName.value = data.name 
    //         showImg.value = data.img 
    //         showWebsite.value = data.website 
    //         showOverview.value = data.overview 
    //         showGenres.value = data.genres 
    //         showPosterPath.value = data.poster_path
    //         visible.value = data.visible 
    //         beCode.value = response.status
    //     } else if (response.status == 204){
    //         beCode.value = 204
    //     } else if (response.status == 304){
    //         beCode.value = 304
    //     } else {
    //         beCode.value = 9000
    //     }
    // }
</script>

<template>
    <p v-if= "beCode === 204">ID number not found</p>
    <p v-if= "beCode === 304">Already exists: please use another ID number</p>
    <p v-if= "beCode === 9000">Something went wrong</p>

    <p> ID: {{ showForm.showID }}</p>
    <form>
        <label>TMDB ID number:  </label>
        <input v-model="showForm.showID" placeholder="number from TMDB" />
        <button type="button" @click="findShowDetails()">Auto Fill Form</button>
        <p>Message is: {{ showForm.showName }}</p>
        <input v-model="showForm.showName" placeholder="edit me" /> <br>
        <label>Status: {{ beCode }}</label>
        <input v-model="beCode" placeholder="edit me" />
    </form>
    <button @click="makeDog()">Button</button>
    <button @click="submit()">Submit</button>
</template>


<style></style>