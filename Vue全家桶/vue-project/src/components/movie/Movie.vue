<template>
  <div class="movie">
    <common-header> </common-header>
    <movie-nav></movie-nav>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>

  import CommonHeader from '../common/CommonHeader'
  import MovieNav from './MovieNav'
  import CommonFooter from '../common/CommonFooter'
  import MovieTop250 from './MovieTop250'

export default {
  data() {
    return {
    }
  },
  components:{
    CommonHeader,
    MovieNav,
    CommonFooter,
    MovieTop250
  },

  mounted(){
   
        this.$store.dispatch('changeTitle',['movie','rgb(33, 150, 243)','首页'],);
        // this.$store.dispatch('changeBgColor',color);
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";


</style>
