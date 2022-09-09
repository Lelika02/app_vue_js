
<template>
    <ul>
        <li><a class="active">MON SITE VUE JS</a></li>
        <li><a href="/">ACCUEIL</a></li>
    </ul>
</template>

<script>
    export default {
    }
</script>

<style>
    body{
        margin-top: -3.8em;
        margin-left: -0.1px;
        margin-right: -0.1px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        font-weight: bold;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    li:hover{
        color: green;
    }
    li{
        display: inline;
        float: left;
        border-right: 1px solid #bbb;
    }
    li a{
        display: block;
        color: white;
        text-align: center;
        padding: 20px 54px;
        text-decoration: none;
    }
    li a:hover {
        background-color: #111;
    }
    .active {
        background-color: #04AA6D;
    }
</style>