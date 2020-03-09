<template>
    <div id = app>
        <h1> Add Item Page </h1>
        <form id = "f1">
            <label> Item Name </label>
            <input type = "text"/>
            <label> Item category </label>
            <input type = "text"/>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"Add Item"
        }
    }
    
}
</script>

<style scoped>
#app *{
    box-sizing: border-box;
}

#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content:center;
    color:blanchedalmond;
}

label{
    display:inline-block;
    margin:20px 0 10px;
    width:50%;
    align-content:left;
}

input[type="text"]{
    display: inline-block;
    padding: 8px;
    width: 50%;
}

</style>