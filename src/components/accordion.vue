<template>
  <div class="accordion">
    <div class="header" v-on:click="toggle">
      <span class="wrapper" v-bind:class="{ rotate: show }">
        <i class="fas fa-2x fa-angle-right header-icon"></i>
      </span>
      <slot name="header"></slot>
    </div>
    <transition name="accordion" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:before-leave="beforeLeave" v-on:leave="leave">
      <div class="body" v-show="show">
        <div class="body-inner">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      el.style.height = '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  margin-bottom: 20px;
}

.accordion .header {
  height: 40px;
  line-height: 40px;
  padding: 0 40px 0 8px;
  position: relative;
  color: #000;
  cursor: pointer;
  div {
    margin-left: 25px;
    display: inline;
  }
}

.accordion .header-icon {
  display: inline;
  position: relative;
  top: 5px;
  left: 8px;
  transform: rotate(0deg);
  transition-duration: 0.3s;
}

.accordion .body {
  overflow: hidden;
  background-color: #fff;
  border-top: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: 150ms ease-out;
}

.accordion .body-inner {
  margin-left: 45px;
  padding: 8px;
  overflow-wrap: break-word;
}

span.wrapper {
  transition: transform 200ms;
  display: inline-block;
}

.accordion .header .wrapper.rotate {
  transform: rotate(90deg);
  transition-duration: 0.3s;
}
</style>
