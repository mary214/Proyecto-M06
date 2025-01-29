<template>
  <div>
    <PHeader class="header" />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <PFooter />
  </div>
</template>

<script>
import PHeader from './components/PHeader.vue';
import PFooter from './components/PFooter.vue';

export default {
  name: 'App',
  components: {
    PHeader,
    PFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}

.header {
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>