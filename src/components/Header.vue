<template>
<div class="headerStyle">
    <header>
        <h1>{{msg}}</h1>
        <nav>
        <ul>
        <li><router-link to="/" exact> List </router-link></li>
        <li><router-link to="/add" exact> Add Item </router-link></li>
        </ul>
        </nav>
    </header>    
</div>
</template>

<script>
export default {
    
    data(){
        return{
            msg: "Grocery List"
        }
    }
}
</script>

<style scoped>
header{
    background:rgb(122,63,10);
    padding:10px;
    border-style:solid;
    border-color:black;
    border-width:2px;
}

h1{
    align-content: center;
    font-size:20px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    text-align: center;
}
nav{
    background: rgb(122, 63, 10);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: ivory;
    color: #444;
}
ul{
    list-style-type: none;
    text-align: left;
    margin: 0;
}
li{
    
    display: inline-block;
    margin: 0 10px;
}

li a{
    font-size:18px;
    color:black;
}



</style>