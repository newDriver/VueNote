<template>
	<div id="headercom">
		<div>
			{{headermsg}}
			
		</div>
		<span>子组件里{{title}}--- {{homemsg}}</span>
		<hr />
		<span @click="sunRun">{{msg}}</span>
		 <button @click="getParent()">获取父组件的数据和方法</button>
		 <button @click="getParentItem()">通过$parent主动获取父组件的数据和方法</button>
	</div>
</template>

<script>

	export default {
		name :'Header',
		data(){
			return{
				headermsg:'这是header的msg',
				msg:"111",
				testmsg : "q221"
				
			}
		},
		methods:{
			 getParent(){
            // alert(this.title)
            // alert(this.home.title)
	
	
	            this.home.run()
	
	        },
	        getParentItem:function(){
	        	alert(this.$parent.parentMsg)
	        }
		},
//		mounted : {
//		
//		},
		props:['title',"homemsg","sunRun",'home']
	}
</script>

<style>
</style>