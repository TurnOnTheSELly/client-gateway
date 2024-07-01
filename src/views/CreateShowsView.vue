<script setup>
    import { ref } from 'vue';

    // new_data[:name] = all_data[0][:original_name]
    //     new_data[:img] = all_data[0][:backdrop_path]
    //     new_data[:website] = all_data[0][:homepage]
    //     new_data[:overview] = all_data[0][:overview]
    //     new_data[:genres] = all_data[0][:genres]
    //     new_data[:poster_path] = all_data[0][:poster_path]
    //     new_data[:visible] = true
    const showID =defineModel("idModel")
    const showName = defineModel("showModel")
    const showImg = defineModel("imgModel")
    const showWebsite= defineModel("webModel")
    const showOverview = defineModel("overviewModel")
    const showGenres = defineModel("genresModel")
    const showPosterPath = defineModel("posterModel")
    const visible = ref()
    const beCode = ref(null)

    


    function makeDog(){
        showName.value = "dog"
    }
    function submit() {
        console.warn(showName.value)
    }
    async function findShowDetails() {
        const headers = { "Content-Type": "application/json" };
        const response = await fetch(`http://localhost:3000/api/v1/show_services/${showID.value}`, { headers })
        if (response.status == 201) {
            const data = await response.json()
            console.log(data)
            showName.value = data.name 
            showImg.value = data.img 
            showWebsite.value = data.website 
            showOverview.value = data.overview 
            showGenres.value = data.genres 
            showPosterPath.value = data.poster_path
            visible.value = data.visible 
            beCode.value = response.status
        } else if (response.status == 204){
            beCode.value = 204
        } else if (response.status == 304){
            beCode.value = 304
        } else {
            beCode.value = 9000
        }

            // .then(response => console.log(response.status))
            // .then(data => (console.log(data)));
    }
</script>

<template>
    <p v-if= "beCode === 204">ID number not found</p>
    <p v-if= "beCode === 304">Already exists: please use another ID number</p>

    <p> ID: {{ showID }}</p>
    <form>
        <label>TMDB ID number:  </label>
        <input v-model="showID" placeholder="number from TMDB" />
        <button type="button" @click="findShowDetails()">Auto Fill Form</button>
        <p>Message is: {{ showName }}</p>
        <input v-model="showName" placeholder="edit me" />
    </form>
    <button @click="makeDog()">Button</button>
    <button @click="submit()">Submit</button>
</template>


<style></style>