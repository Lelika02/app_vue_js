<template>
    <h2>ARTICLE N°{{ id }}</h2>
    <MonArticle :id="this.id" :titre="this.titre"/>
</template>

<script>
    export default {
        props: {
            id: Number,
            titre: String
        }
    }
</script>