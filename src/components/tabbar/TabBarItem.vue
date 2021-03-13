<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon"></slot>
<!--    <slot name="item-icon-actived"></slot>-->
    <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String
    },
    data() {
      return {
        isActive: true,
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;

  }

</style>
