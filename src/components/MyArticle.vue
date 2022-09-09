<template>
    <div class="item1">
        <h3 class="image">{{titre[0]}}</h3>
        <h3 class="titre">{{article.title}}</h3>
    </div>
    
    <div class="content">{{article.body}}</div>

    <h4>Commentaires</h4>
    
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
        padding-top: 1em;
        color: gray;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .content{
        margin: auto;
        max-width: 50%;
    }
    h4{
        text-decoration: underline;
    }
    .comment{
        margin: auto;
        max-width: 50%;
    }
    .item1{
        display: flex;
        background-color: floralwhite;
        margin-left: 20em;
        padding: 5px 0;
        cursor: pointer;
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