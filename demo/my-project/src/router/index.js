import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/components/DemoEvent'
import RefDemo from '@/components/Ref'
import todolist from '@/components/todolist'
import home from '@/components/home'
import Header from '@/components/header'
import eventHome from '@/components/eventHome'
import newMain from '@/components/newMain'
import newItem from '@/components/newItem'
import newItemGet from '@/components/newItemGet'


//嵌套路由
import Home from '@/components/HomeHash';
import qiantaohome from '@/components/qiantaoHome';
import News from '@/components/News';

import Content from '@/components/Content';


import User from '@/components/User';

  import UserAdd from '@/components/User/UserAdd';
  import Userlist from '@/components/User/Userlist';
//vuex
import vuexHome from '@/components/vuexdemo/vuexHome';
import vuexHeader from '@/components/vuexdemo/vuexHeader';
import vuexFooter from '@/components/vuexdemo/vuexFooter';
Vue.use(Router)//实例化

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/1',
    	name:'Demo1',
    	component:Demo1
    },
    {
    	path:'/ref',
    	name:'Ref',
    	component:RefDemo
    },
    {
    	path:'/todolist',
    	name:'todolist',
    	component:todolist
    },
    {
    	path:'/home',
    	name :"home",
    	component:home
    },
    {
    	path:'/eventHome',
    	name:'eventHome',
    	component:eventHome
    },
    {
    	path:'/newMain',
    	name:'newMain',
    	component:newMain	
    },
    {
    	path:'/newItem/:aid',//动态路由
    	name:'newItem',
    	component:newItem	
    },
    {
    	path:'/newItemGet',//动态路由 get传值
    	name:'newItem',
    	component:newItem	
    },
    //编程式导航
     { path: '/hashhome', component: Home },
 		 { path: '/news', component: News,name:'news' },
		//嵌套路由
  	{   
  		path:"/qiantao",
  		component:qiantaohome,
			redirect:'/qiantao/user',
  		children:[{
  				path: 'user',
			    component: User,
		 		  children:[
		    			  { path: 'useradd', component: UserAdd },
		
		    			  { path: 'userlist', component: Userlist }
			
		   		 ]}
  		]
	    

		 },
		
		 { path: '/content/:aid', component: Content },   /*动态路由*/
		
		 { path: '*', redirect: '/home' },   /*默认跳转路由*/
		 {//vuex
		 	path: '/vuexHome',
		 	component: vuexHome
		 },
		 {
		 	path: '/vuexHeader',
		 	component: vuexHeader
		 },
			{
		 	path: '/vuexFooter',
		 	component: vuexFooter
		 },
  ]
})
