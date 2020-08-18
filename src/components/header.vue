<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="../assets/epic_logo.svg" alt="Logo">
          </a>
          <a role="button" class="navbar-burger burger has-text-dark is-large" :class="{'is-active': mobileMenu}" @click="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div class="navbar-menu" :class="{'is-active': mobileMenu}" @click="switchMenu(false)">
          <div class="navbar-start"></div>
          <div class="navbar-end">
            <a class="navbar-item" @click="toggleModal()">
              Tour
            </a>
            <div class="navbar-item has-dropdown is-hoverable" :class="{'is-active': mobileMenu}">
              <router-link class="navbar-link" to="/products">Products</router-link>
              <div class="navbar-dropdown">
                <router-link to="/products/media" class="navbar-item">EPIC Media</router-link>
                <router-link to="/products/plan" class="navbar-item">EPIC Plan</router-link>
                <router-link to="/products/builder" class="navbar-item">EPIC Builder</router-link>
              </div>
            </div>
            <router-link to="/pricing" class="navbar-item">
              Pricing
            </router-link>
            <router-link to="/contact" class="navbar-item">
              Contact
            </router-link>
            <a href="https://app.epicready.com" class="navbar-item">
              Log In
            </a>
            <div class="navbar-item">
              <router-link to="#contact" class="navbar-item">
                <a href="/#" class="button is-link is-rounded">Get Started</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <EpicTour :open="openModal" @close="toggleModal" />
  </div>
</template>

<script>
import EpicTour from '@/components/tour.vue'

export default {
  name: 'Header',
  data() {
    return {
      mobileMenu: false,
      openModal: this.$route.query.showTour
    }
  },
  components: {
    EpicTour
  },
  methods: {
    //Class methods
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu
    },
    switchMenu(display) {
      this.mobileMenu = display
    },
    toggleModal() {
      this.openModal = !this.openModal

      this.$router.push({
        query: { showTour: true, tourStep: 0 }
      })
    }
  },
  watch: {
    '$route.query.showTour'() {
      this.openModal = this.$route.query.showTour
    }
  }
}
</script>

<style lang="scss" scoped>
a.navbar-item,
.navbar-link {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #209cee;
  }
}
</style>
