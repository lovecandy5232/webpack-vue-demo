<template>
  <div id="app">
    <el-container>
      <el-header>winner</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    name: "my-project"
};
</script>
<style>
/* CSS */
#app{
     background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
}
.el-header{
  text-align: center;
}
</style>
