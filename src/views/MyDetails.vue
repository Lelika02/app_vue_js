<template>
    <h2>ARTICLE N°{{ id }}</h2>
    <MonArticle :id="this.id"/>
</template>

<script>
    export default {
        props: {
            id: Number
        }
    }
</script>