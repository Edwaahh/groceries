<template>
    <div>
        {{count}}
        <p>
        <button v-on:click="countUp">Increment</button>
        <button v-on:click="countDown">Decrement</button></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        countUp(){
            this.count+=1
        },
        countDown(){
            this.count-=1
        }

    }
    
}
</script>

<style scoped>
button{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
    color:brown;
    background-color:cornsilk;
}

</style>