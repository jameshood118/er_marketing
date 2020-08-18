<template>
  <footer class="footer">
    <div class="container">

      <div class="content">
        <div class="columns is-mobile is-multiline">
          <div class="column is-5-desktop is-12-mobile">
            <figure class="image logo">
              <a href="/"><img src="../assets/epic_logo.svg" alt="Logo" /></a>
            </figure>
          </div>
          <div class="column is-half-mobile">
            <p class="title is-5">Apps</p>
            <ul class="is-social">
              <li>
                <router-link :to="{query: { showTour: true, tourStep: 0 }}">
                  Product Tour
                </router-link>
              </li>
              <li>
                <router-link to="/products/media">Media</router-link>
              </li>
              <li>
                <router-link to="/products/plan">Plan</router-link>
              </li>
              <li>
                <router-link to="/products/builder">Builder</router-link>
              </li>
            </ul>
          </div>
          <div class="column is-half-mobile">
            <p class="title is-5">Product</p>
            <ul class="is-social">
              <li>
                <a href="https://app.epicready.com">
                  Log In
                </a>
              </li>
              <li>
                <router-link to="/pricing">Pricing</router-link>
              </li>
              <li>
                <a href="https://status.epicready.com">Status</a>
              </li>
              <li>
                <router-link to="/legal#top">
                  Legal
                </router-link>
              </li>
            </ul>
          </div>
          <div class="column is-half-mobile">
            <p class="title is-5">Company</p>
            <ul class="is-social">
              <li>
                <router-link to="/contact">Contact Us</router-link>
              </li>
              <li>
                <router-link to="/resources">Resources</router-link>
              </li>
              <li style="display:none;">About Us</li>
            </ul>
          </div>
          <div class="column is-half-mobile">
            <p class="title is-5">Connect</p>
            <ul class="is-social">
              <li>
                <a href="https://twitter.com/epic_ready" target="_blank" rel="noreferrer">
                  <span class="icon  is-medium">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>Twitter</span>
                </a>
              </li>
              <li>

                <a href="https://www.youtube.com/channel/UCHnybTx24WQ6I044FX3vBdQ" target="_blank" rel="noreferrer">
                  <span class="icon  is-medium">
                    <i class="fab fa-youtube"></i>
                  </span>
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
</style>
<style scoped lang="scss">
.logo {
  & a {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #2c3e50;
    font-size: 1.25rem;
  }
  & a img {
    height: 25px;
    width: initial;
  }
}
footer ul {
  list-style: none;
  margin: 0;
}
</style>
