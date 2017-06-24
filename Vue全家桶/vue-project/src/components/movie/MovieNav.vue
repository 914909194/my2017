<template>
  <div class="nav">
    <ul>
      <li><router-link to="/movie/top250">top250</router-link></li>
      <li><router-link to="/movie/hot">正在热映</router-link></li>
      <li><router-link to="/movie/comming">即将上映</router-link></li>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .nav{
    border-top:1px solid #ccc;
    height: 1rem;
    color: #fff;
    background: rgb(33, 150, 243);
    /*background: #000;*/
  }
  .nav ul{
    display: flex;
  }
  .nav ul li{
    flex: 1;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
  }
  .nav ul li a{
    outline: none;
    color: #ccc;
  }
  .nav ul li a.router-link-active{
    color: #fff;
  }
  .nav{
     position: fixed;
      top:1rem;
      width: 100%;
  }

</style>