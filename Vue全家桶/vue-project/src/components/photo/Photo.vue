<template>
  <div class="photo">
    <common-header></common-header>
      <div class="img-box">
          <ul>
            <li v-for="(img,index) in $store.state.photoList">
              <router-link :to="'/photo/photo_show/'+index"><img :src="img.src" alt=""></router-link>
            </li>
          </ul>
      </div> 
    <common-footer></common-footer>
  </div>
</template>

<script>

  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Axios from 'axios'
export default {
  data() {
    return {
      
    }
  },
  components:{
    CommonHeader,
    CommonFooter,
  },
  mounted(){
     this.$store.dispatch('changeTitle',['photo','rgb(0, 150, 136)','<']);
     Axios.get('static/photo-data.json').then((res)=>{
      this.$store.dispatch('photoList',res.data.photoData);
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
    .img-box{
      margin-top: 1rem;
      margin-bottom: 1rem;
      overflow: hidden;
    }
    .img-box li{
      width: 50%;
      
      float: left;
      
    }
    .img-box li img{
      display: block;
      width: 100%;
      height: 100%;
    }

</style>
