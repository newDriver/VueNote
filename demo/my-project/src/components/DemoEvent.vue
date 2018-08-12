<template>
  <div class="vEventDemo">
    
    <button data-aid="123" @click="fn1(msg)">console.log(fn(val)) 参数可以是data内的数据</button>  

    <button data-aid="123" @click="eventFn($event)">eventFn($event)</button>  
  </div>
</template>

<script>
export default {
  name: 'Demo1',
  data () {
    return {
      msg : 111
    }
  },
  methods:{
    fn1 : function(val){
        console.log(val)
    },
    eventFn:function(e){
      console.log(e.srcElement,e.srcElement.dataset.aid)
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
