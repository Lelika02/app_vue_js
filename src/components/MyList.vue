<template>
    <div class="list">
        <MyItem v-for="(item, key) in items" :titre="item.title" :id="item.id" :key="key"/>
    </div>
</template>


<script>
    import MyItem from './MyItem.vue'
    import axios from 'axios';

    export default{
        components: {
            MyItem
        },
        data: () => {
            return {
                items: []
            }
        },
        mounted() {
          axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.items = response.data
          })
        }

    }
</script>


<style>
.list {
    max-width: 95%;
    margin: 0 auto;
    background-color: cadetblue;
    padding: 0.2em 0.3em;
}

</style>