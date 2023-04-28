<template>
 <div class="slidev-layout default">
    <slot />
    <div class="footer"/>
  </div>

</template>

<script lang="ts" setup>
</script>
<style lang="less" scoped>
.slidev-layout.default {
  padding-bottom: 0;
  padding-top: 20px;
  
  .footer{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 65px;
      text-align: center;
      line-height: 50px;
      background-image: url(/images/footer.png);
      background-repeat: no-repeat;
      background-size: 100%;
  }
}
</style>
<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.page-center{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}



</style>