<template>
	<div class="todolist">
		<input type='text' v-model='todo' @keydown='doAdd($event)' />
		<button @click='doAdd'>增加</button>
		</hr>
		<ul>
			待处理
			<li v-for="(item,key) in list"  v-if="!item.checked">
				<input type="checkbox"  v-model="item.checked" />{{item.title}} <button @click="removeData(key)">删除</button>
			</li>
			</br>
		</ul>
		<ul>
			已完成
			<li v-for="(item,key) in list" v-if="item.checked">
				<input type="checkbox"  v-model="item.checked"/>{{item.title}} <button @click="removeData(key)">删除</button>
			</li>
			
			</hr>
		</ul>
		
	</div>
</template>
<script>
import storage from "../model/storage.js";
console.log(storage)
export default{
	name:"todolist",
	data(){
		return {
			todo:'',
			list:[
			/*	{
					checked: true,
					title:'111'
				},
				{
					checked: false,
					title:'123'
				},
				{
					checked: true,
					title:'333'
				}
				*/
			],
		}
	},
	methods: {
		doAdd:function(e){
			//this.list.push(this.todo);
			console.log(e.keyCode)
			if(e.keyCode==13){
				this.list.push({
					title:this.todo,
					checked:false
				})
			}
			this.todo = '';
		},
		removeData:function(key){
			this.list.splice(key,1)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

