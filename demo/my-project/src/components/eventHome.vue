<template>
	<div class="eventHome">
		eventHome
		<button></button>
		<v-eventHeader>	</v-eventHeader>
		<v-eventFooter>	</v-eventFooter>
	</div>
</template>

<script>
	import eventHeader from './eventHeader'
	import eventFooter from './eventFooter'
	export default{
		name:'eventHome',
		data(){
			return{
				msg:"home页的msg",
				title:'home页的title'
			}
		},
		methods:{
			
		},
		components:{
			"v-eventHeader":eventHeader,
			'v-eventFooter':eventFooter
		}
	}
</script>

<style>
</style>