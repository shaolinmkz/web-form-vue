<template>
  <div @click.shift="handleSwitch">
    <SignupForm v-if="active" />
    <Landing v-if="!active" />
  </div>
</template>

<script>
import SignupForm from "./components/SignupForm.vue";
import Landing from "./components/Landing.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "App",
  components: {
    SignupForm,
    Landing,
  },
  setup() {
    const active = ref(false);

    const handleSwitch = () => {
      active.value = !active.value;
    };

    return {
      handleSwitch,
      active
    };
  },
};
</script>


<style>
*,
*::before,
*::after {
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
}
</style>
