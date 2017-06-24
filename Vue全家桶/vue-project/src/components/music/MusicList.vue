<template>
  <div class="musiclist">
   
      <common-header> </common-header>
    <!--   <router-view></router-view> -->
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
       Axios.get('../../../static/musiclist.json').then((res)=>{ var arr=res.data.albums;
         console.log(arr);
      });

     // this.$store.dispatch('changeTitle',[arr[this].name,'rgb(0, 150, 136)','<']);

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
 

</style>