<template>
    <div class = "headerStyle">
        <footer>
            <p v-html="copyRtSymbol"></p>
        </footer>
    </div>

</template>

<script>
export default {
    data(){
        return{
            copyRtSymbol: "Copy Right BT3103 Edward"
        }
    }
    
}
</script>

<style scoped>
footer{
    background: rgb(122,63,100);
    padding:10px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    color: black;
    font-size: 5px;
    align-content: center;
}

p{
    align-content: center;
}

</style>