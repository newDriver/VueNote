<template>
	<div class="eventHeader">
		非父子组件header
		<button @click="emitFooter()">emit(广播)数据到footer</button>
		{{htitle}}
	</div>
</template>

<script>
	import vueEvent from '../model/vueEvent.js'
	export default{
		name:'eventHeader',
		data(){
			return{
				hmsg:'header的msg',
			    htitle:"header的title"
			}	
		},
		methods:{
			emitFooter:function(){
				vueEvent.$emit("to-footer",this.hmsg)
			}
		},
		mounted(){
			var that = this;
			vueEvent.$on("to-header",function(data){
				console.log(data);
				that.htitle=data;
			})
		}
	}
</script>

<style>
</style>