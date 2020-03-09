<template>
  <div>
    <ul>
        <li v-for="item in itemsList" v-bind:key="item.name" >

            <h2 v-on:click="item.show = !item.show">{{item.name}}</h2>
            <img v-bind:src="item.image" v-show="item.show"/>
            <cBtn></cBtn>
                
                
            
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
    return{
        itemsList: [{name:'Eggs',image:require("../assets/images/eggs.jpg"),show:false},
                    {name:'Bread',image:require("../assets//images/bread.png"),show:false},
                    {name:'Jam',image:require('../assets/images/Jam.jpeg'),show:false},
                    {name:'CornFlakes',image:require('../assets/images/Cornflake.jpeg'),show:false},
                    {name:'Milk',image:require("../assets/images/Milk.jpeg"),show:false},
                    {name:'Juice',image:require("../assets/images/Juice.jpeg"),show:false}],
        counter:0
        }
    }
}
</script>

<style scoped>
#itemsList{
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}

ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li{
    flex-grow:1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;

}

img{
    width:100px;
    height:100px;
}

</style>