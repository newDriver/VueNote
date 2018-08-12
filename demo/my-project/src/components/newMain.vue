<template>
	<div class="newMain">
			<ul>
				<li v-for="(item,key) in list">
					<router-link :to="'/newItem/'+item">{{item}}+{{key}} 通过params获取</router-link>
				</li>
			</ul>
			<ul>
				<li v-for="(item,key) in list">
					<router-link :to="'/newItemGet?id='+item">{{item}}+{{key}}通过query获取</router-link>
				</li>
			</ul>
	</div>
</template>

<script>
	export default{
		name :'newMain',
		data(){
			return{
				msg:'',
				list:["111",'222','333']
			}
		}
	}
</script>

<style>
</style>