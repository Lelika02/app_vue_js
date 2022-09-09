<template>
    <div class="item">
        <div class="image">{{titre[0]}}</div><br>
        <router-link class="lien" :to="{name: 'details', params: { id: this.id, titre: this.titre }}">{{titre}}</router-link>
    </div>
</template>

<script>
    export default {
        props: {
            id: Number,
            titre: String,
        },
        data: () => {
            return {
                showItem: true
            }
        },
        methods: {
            details(){
                console.log('détails');
            }
        }
    }
</script>

<style>
   .item{
        display: flex;
        background-color: floralwhite;
        margin-top: 10px;
        padding: 5px 0;
        cursor: pointer;
    }
    .lien{
        cursor: pointer;
        color: grey;
        text-decoration:none;
        padding-top: 1.3em;
        font-family: fantasy;
    }
    .lien:hover{
        color: #04AA6D;
    }
    .image{
        padding-top: 1em;
        color: white;
        margin-right: 2em;
        margin-left: 2em;
        width: 60px;
        height: 40px;
        border-radius: 50%;
        background: #81040C;
    }

</style>