<template>
  <div class="music">
    <common-header></common-header>
    <ul class='music-box'>
      <li v-for='obj in musiclist' @click="changeTitle(obj.name)"> 
        <router-link :to="'/music/music_list/'+obj.id"><img :src="obj.bg"  alt=""></router-link>
      </li>
    </ul>
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
      musiclist:[]
    }
  },
     components:{
    CommonHeader,
    CommonFooter,

  },
   methods:{
      changeTitle:function(name){
        // console.log(1111);
        this.$store.dispatch('changeTitle',[name,'rgb(0, 150, 136)','<']);
      }
  },
   mounted(){
   
        this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
        Axios.get('../../../static/musiclist.json').then((res)=>{  
          this.musiclist=res.data.albums;
        });
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .music-box{
    margin-top: 1rem;
  }
  .music-box li{
    width: 50%;
      /*height: 160px;*/
    float: left;
  }
  .music-box li img{
      width: 100%;
  }
  

</style>