<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="Copyright">Copyright ©
			
			2019
			中泽医药 Inc. 保留所有权利。</div>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, sans-serif;
  .Copyright{
    color:#888;
    text-align: center;
    font-size: 12px;
    padding: 10px 20px;
  }
}
img{
  width:100%;
}

a{
  text-decoration:none;
  color:#000;
}
@media screen and (min-width:900px) {
  #app{
    width:700px;
    margin: 0 auto;
  }
    
}
</style>
