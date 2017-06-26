<template>
  <div class="photoshow"> 
      <common-header> </common-header>
      <!-- <div class='big-img'>
        <img :src="'static/img/'+(parseInt($route.params.index)+1)+'.jpg'" alt="">
      </div> -->
      <v-touch @swipeleft="next" @swiperight="prev" class="photo-box" :style="bgStyle">
      <!--<img :src="$store.state.photoList[index].src" alt="">-->
    </v-touch>
      <common-footer></common-footer>  
  </div>
</template>

<script>
//https://www.npmjs.com/package/aplayer
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import Axios from 'axios'
export default {
  data() {
    return {
      index:this.$route.params.index,
    }
  },
  components:{
    CommonHeader,
    CommonFooter,

  },
  computed:{
    bgStyle(){
      return {
        background: "url('" + this.$store.state.photoList[this.index].src + "') no-repeat  center /contain skyblue"
      }
    }
  },
  methods:{
    next(){
      if(this.index==25){
        this.index=0;
      }
        this.index++;
      
    },
    prev(){
      if(this.index==-1){
        this.index=24;
      }
        this.index--;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .photo-box{
    position: absolute;
    top:1rem;
    bottom: 1rem;
    width: 100%;
  }

</style>