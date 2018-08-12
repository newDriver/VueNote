<template>
	<div calss="refDemo">
		<div  ref='refDemo1' class='refDemoClass'>
		</div>
		<button @click="refDemoFn">
			ref属性绑定到元素上相当于dom的id 使用this.$refs.xxx即可获取该dom元素
		</button>
	</div>
</template>
<script>
export default{
	name:'RefDemo',
	data(){
		return {
			msg:1211
		}
		

	},
	methods:{
		refDemoFn: function(){
			console.log(this.$refs.refDemo1.className)
		}
	}
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
