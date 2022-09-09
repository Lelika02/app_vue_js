<template>
    <div class="div">
        <h3 class="titre">{{article.title}}</h3>
    </div>
    <div class="content">{{article.body}}</div>

    <h3>Les commentaires</h3>
    
    <div class="commentaires" v-for="(comment, key) in comments" :key="key">
        <h5>{{comment.email}}</h5>
        <p class="comment">{{comment.body}}</p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        props: {
            id: Number,
            titre: String,
            content: String,
        },
        data: () => {
            return {
                comments: [],
                article: []
            }
        },
        mounted() {
          axios.get('https://jsonplaceholder.typicode.com/posts/'+this.id+'/comments').then(response => {
            this.comments = response.data
          }),
          axios.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(response => {
            this.article = response.data
          })
        },
        methods: {
            hideItem(){
                console.log('hide items');
                this.showItem = false;
            }
        }
    }
</script>

<style>
    .titre{
        color: gray;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .content{
        margin: auto;
        max-width: 50%;
    }
    .comment{
        margin: auto;
        max-width: 50%;
    }
    .div{
        display: flex;
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