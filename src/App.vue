<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" >
        <img src="./assets/img/home.svg" alt="" slot="item-icon" >
        <img src="./assets/img/home_actived.svg" alt="" slot="item-icon-actived">
        <div name="item-icon" slot="item-text">Home</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="./assets/img/bag.svg" alt="" slot="item-icon">
        <img src="./assets/img/bag_actived.svg" alt="" slot="item-icon-actived">
        <div name="item-icon" slot="item-text">ShoppingCart</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/my.svg" alt="" slot="item-icon">
        <img src="./assets/img/my_actived.svg" alt="" slot="item-icon-actived">
        <div name="item-icon" slot="item-text">My</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
</style>
