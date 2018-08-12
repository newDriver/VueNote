<template>
	<div class="eventFooter">
		非父子组件footer
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
		name : 'vuexFooter',
		data(){
			return{
				footermsg:'footer的msg',
				ftitle:''
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