<template>
  <div class="header" :style='{background:$store.state.bgColor}'>
     <!-- <slot> -->
      <button @click="aa">{{$store.state.nav}}</button>
    <!-- </slot> -->
    <h2>{{$store.state.title}}</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      

    }
  },
  methods:{
      aa:function(){
        history.go(-1);
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .header{
    display: flex;
    height: 1rem;
    color: #fff;
    /*background: #000;*/
    /*background: rgb(33, 150, 243);*/
  }
  .header button{
    outline: none;
     border:none;
    background-color:transparent;
   
    width: 1rem;
    height: 1rem;
    color: #fff;
  }
  .header h2{
    flex: 1;
    text-align: center;
    text-indent: -1rem;
    line-height: 1rem;
  }
   .header{
      position: fixed;
      top:0;
      width: 100%;
    }
</style>
