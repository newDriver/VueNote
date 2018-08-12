<template>
	<div class="eventFooter">
		非父子组件footer
		<button @click="emitToHeader">emit数据到header</button>
		<div >{{ftitle}}</div>
	</div>
</template>

<script>
	import vueEvent from '../model/vueEvent.js'
	export default{
		name : 'eventFooter',
		data(){
			return{
				footermsg:'footer的msg',
				ftitle:''
			}
		},
		methods:{
			emitToHeader:function(){
				vueEvent.$emit("to-header",this.footermsg)
			}
		},
		mounted(){
			var that = this;
			vueEvent.$on("to-footer",function(data){
				console.log(data);
				that.ftitle = data
			})
		}
	}
</script>

<style>
</style>