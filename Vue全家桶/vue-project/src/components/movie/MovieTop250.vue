<template>
 <div class="top-250">
      <div class="movie-list clearfix" v-for="movie in movieList">
        <div class="movie-img">
          <img :src="movie.images.small" alt="">
        </div>
        <div class="movie-title">
          <span>{{movie.title}}</span>
          <p><span v-for="genre in movie.genres">
            {{genre}}
          </span>({{movie.year}})(平均{{movie.rating.average}}分)</p>
        </div>
      </div>
      <div class="loading" v-show="show">
        <span><img src="../../assets/img/loading.gif"></span>
      </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import $ from 'jquery'

export default {
  data() {
    return {
       movieList:[],
       show:false
    }
  },
    mounted:function() {
      this.loadData();
      var _this = this;
      $(window).scroll(function(){
          var windowHeight = $(this).height();
          var scrollTop = $(this).scrollTop();
          var height = $(document).height();
          if(windowHeight + scrollTop >= height){
            _this.show = true;
            _this.loadData();
          };
      });
  },
  methods:{
      loadData(){
        var length=this.movieList.length;
        Axios.get(API_PROXY+'https://api.douban.com/v2/movie/top250?count=10&start='+length)
          .then((res)=>{
          this.movieList = this.movieList.concat(res.data.subjects);
          this.show = false;
      });
      }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .top-250{
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .movie-list{
     border-bottom: 1px solid #ccc;
    padding: 0.4rem;
  }
   .movie-list .movie-img{
   
    width: 0.8rem;
    height: 0.8rem;
    float: left;
  }
   .movie-list .movie-img img{
    margin-top: 0.2rem;
    width: 100%;
    height: 100%;
  }
  .movie-list .movie-title{
    text-align: left;
    margin-top: 0.2rem;
    float: left;
    width: 4.0rem;
    height: 0.8rem;
    margin-left:0.6rem;
  }
  .clearfix::after{
    content: '';
    display: block;
    clear:both;
  }
  .loading{
    text-align: center;
  }

</style>