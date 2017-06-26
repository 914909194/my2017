import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieTop250 from '@/components/movie/MovieTop250'
import MovieHot from '@/components/movie/MovieHot'
import MovieComming from '@/components/movie/MovieComming'
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import photoShow from '@/components/photo/PhotoShow'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/movie',
      redirect:'/movie/top250'
    },
    {
      path: '/movie',
      component: Movie,
      children: [
        { path: "/movie/top250", component: MovieTop250 },
        { path: "/movie/hot", component: MovieHot },
        { path: "/movie/comming", component: MovieComming }
      ]
    },
    {
      path: '/',
      redirect:'/movie/top250'
    },
    {
      path: '/music',
      component: Music,
    },
    {
    	path:'/music/music_list/:id',
    	component: MusicList,
    },
    {
      path: '/book',
      component: Book,
    }
    ,
    {
      path: '/photo',
      component: Photo, 
    },
    {
      path:'/photo/photo_show/:index',
      component: photoShow,
    },
  ]
})