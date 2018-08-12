<template>
	<div class="eventHeader">
		非父子组件header
		<br />
			vuex.state的count为{{this.$store.state.count}}
			<button @click="incCount()">点击改变Vuex中store里的数据</button>
	</div>
</template>

<script>
	//1引入
	import store from "../../vuex/store.js"
	//2注册
	export default{
		name:'vuexHeader',
		data(){
			return{
				hmsg:'header的msg',
			    htitle:"header的title"
			}	
		},
		store,
		methods : {
			incCount(){//改变Vuex中store里的数据
				//store.commit('incCount')//触发state里免得数据
				this.$store.commit('incCount');//触发state里免得数据
			}
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>