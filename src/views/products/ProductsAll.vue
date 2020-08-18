<template>
  <div>
    <section class="hero">
      <div class="hero-body splash">
        <div class="container has-text-centered">
          <div class="columns is-vcentered is-centered">
            <div class="column is-narrow">
              <figure class="image is-96x96"><img src="@/assets/logo.svg" alt="EPIC Ready"></figure>
            </div>
            <div class="column is-half">
              <p class="title">
                Plan your training and exercises, all in one integrated suite
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="productsLanding column is-8">
              <div class="columns">
                <div class="column">
                  <p class="title is-4">Design & Execute</p>
                  <article class="media">
                    <figure class="image media-left is-64x64">
                      <img src="@/assets/plan.svg" alt="Logo">
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="title is-5">Plan</p>
                        <p class="subtitle">
                          Enhance exercise planning and analysis to maximize the value of training.
                          Capture requirements, record performance, and build reports for a realistic assessment of readiness.</p>
                      </div>
                      <div class="field">
                        <p class="subtitle">
                          <router-link to="/products/plan"> Learn More <i class="fas fa-chevron-right"></i></router-link>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="title is-4">Dynamic Training Environments</p>
                  <article class="media">
                    <figure class="image media-left is-64x64">
                      <img src="@/assets/builder.svg" alt="Logo">
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="title is-5">Builder</p>
                        <p class="subtitle">
                          Develop, manage, and visualize 3D content of the Earth.
                          Support training simulations, intelligence, and operations with OGC CDB and GeoPackage.</p>
                      </div>
                      <div class="field">
                        <p class="subtitle">
                          <router-link to="/products/builder"> Learn More <i class="fas fa-chevron-right"></i></router-link>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article class="media">
                    <figure class="image media-left is-64x64">
                      <img src="@/assets/media.svg" alt="Logo">
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="title is-5">Media</p>
                        <p class="subtitle">
                          Build an online, social and published media world to meet training objectives.
                          Challenge analysts against key tasks by replicating the publicly available information (PAI) environment of defined areas.</p>
                      </div>
                      <div class="field">
                        <p class="subtitle">
                          <router-link to="/products/media"> Learn More <i class="fas fa-chevron-right"></i></router-link>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article class="media">
                    <figure class="image media-left is-64x64">
                      <img src="@/assets/web.svg" alt="Logo">
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="title is-5">Web</p>
                        <p class="subtitle">
                          Portal for your training audience to view published media content.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="title is-4">Common Operational Picture</p>
                  <article class="media">
                    <figure class="image media-left is-64x64">
                      <img src="@/assets/map.svg" alt="Logo">
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="title is-5">Map</p>
                        <p class="subtitle">
                          Visualize your training exercise on an interactive 3D map.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="title is-4">Collaborate</p>
                  <article class="media">
                    <figure class="image media-left is-64x64">
                      <img src="@/assets/note.svg" alt="Logo">
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="title is-5">Notebook</p>
                        <p class="subtitle">
                          Knowledge sharing in a collaborative environment.</p>
                      </div>
                    </div>
                  </article>
                  <article class="media">
                    <figure class="image media-left is-64x64">
                      <img src="@/assets/email.svg" alt="Logo">
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="title is-5">Email</p>
                        <p class="subtitle">
                          Protect conversations using a secure email service.</p>
                      </div>
                    </div>
                  </article>
                  <article class="media">
                    <figure class="image media-left is-64x64">
                      <img src="@/assets/chat.svg" alt="Logo">
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="title is-5">Chat</p>
                        <p class="subtitle">
                          Communicate securely with instant messaging and group channels.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body splash">
        <div class="container has-text-centered">
          <div class="columns is-vcentered is-centered is-multiline">
            <div class="column is-full">
              <p class="title">Want to learn more?</p>
            </div>
            <div class="column is-full">
              <p class="subtitle">
                Explore our <router-link to="/pricing">Pricing & Plans</router-link>, <router-link to="/resources">Resources</router-link>, or <router-link to="/contact">Contact Us</router-link> for more information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="section has-background-grey-light is-medium">
      <div class="container is-fluid has-text-centered">
        <div class="title-wrapper huge-pb">
          <h2 class="title">Let us know how we can help.</h2>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <Contact :area="'home'" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Contact from '@/components/contact.vue'
import ProductsHeader from '@/components/header.vue'
import ProductsFooter from '@/components/footer.vue'
export default {
  name: 'products-all',
  components: {
    Contact,
    ProductsHeader,
    ProductsFooter
  }
}
</script>
<style lang="scss" scoped>
.media + .media {
  border-top: 0;
}
.productsLanding {
  .columns:not(:last-child) {
    margin-bottom: 2.5rem;
  }
}
</style>
