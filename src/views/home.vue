<template>
  <div id="Home">
    <navHeader></navHeader>
    <router-view />
    <navFooter></navFooter>
  </div>
</template>

<script>
import navHeader from "../components/navHeader";
import navFooter from "../components/navFooter";
export default {
  name: "Home",
  components: { navHeader, navFooter },
  data() {
    return {};
  },
};
</script>

<style>
</style>