<template>
    <div class="headerStyle">
        <header>
            <h1>{{msg}}</h1>
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
}

</style>