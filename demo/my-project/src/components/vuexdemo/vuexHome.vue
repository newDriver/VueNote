<template>
	<div id="home">
		<div>
			home内容
			
			<hr />
			vuex.state的count为{{this.$store.state.count}}--- ----{{this.$store.getters.computedCount}}

			<button @click="incCount()">点击改变Vuex中store里的数据</button>
		</div>
	</div>
</template>

<script>
	//1引入
	import store from "../../vuex/store.js"
	//2注册
	export default {
		
		name : "vuexHome",
		data(){
			return{
				value:"父组件的value",
				msg:"父组件的msg",
			}
		},
		store,
		methods : {
			incCount(){//改变Vuex中store里的数据
				//store.commit('incCount')//触发state里免得数据
				this.$store.commit('incCount');//触发state里免得数据
				
                this.$store.dispatch('incMutationsCount');   /*触发 actions里面的方法   */
			}
		},
		components:{
			
		}
	}
</script>

<style>
</style>