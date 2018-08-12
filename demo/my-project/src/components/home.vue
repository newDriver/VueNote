<template>
	<div id="home">
		<div>
			home内容
		</div>
		<v-header :title="title" :homemsg="msg" :sunRun="run" :home="this" ref="headerRef"></v-header>
		<!--父组件内将子组件需要集成的数据进行绑定 子组件内props里进行继承
			前边是子组件调用的data名 后边如果是组件内data里的值的话必须是父组件的data内的值
		-->
		<hr />
		<button @click="getChildData">父组件通过ref 主动获取子组件数据和方法</button>
	</div>
</template>

<script>
	import Header from "./header.vue"
	
	export default {
		name : "home",
		data(){
			return{
				title:"父组件的title",
				msg:"父组件的msg",
				parentMsg :"$parent的Msg"
			}
		},
		methods : {
			run:function(){
				alert(this.msg)
			},
			 getChildData(){

                //父组件主动获取子组件的数据和方法：
                 alert(this.$refs.headerRef.headermsg);

               // this.$refs.headerRef.run();
            }
		},
		components:{
			'v-header': Header
		}
	}
</script>

<style>
</style>