<template>
  <div>
    <section class="section is-fullheight has-background-light">
      <div class="container">
        <section class="section">
          <div class="columns is-centered">
            <div class="column is-half has-text-centered">
              <p class="title is-3">
                Contact Us
              </p>
              <p class="subtitle is-5">If you have any questions about our products please contact us using our contact form, email, or phone number.</p>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="columns is-multiline is-vcentered is-centered">
            <div class="column is-half">
              <div class="columns is-multiline">
                <div class="column">
                  <p class="title is-4">
                    Get in Touch
                  </p>
                  <div class="wrapper">
                    <span class="icon"><i class="fas fa-envelope"></i>
                    </span>
                    <span><a href="mailto:support@epicready.com">support@epicready.com</a></span>
                  </div>
                  <div class="wrapper">
                    <span class="icon"><i class="fas fa-phone"></i>
                    </span>
                    <span><a href="tel:1-813-279-6988">1-813-279-6988</a></span>
                  </div>
                  <div class="wrapper">
                    <span class="icon"><i class="fas fa-map-marker-alt"></i>
                    </span>
                    <span><a href="https://goo.gl/maps/4J1WaKgVNaE2" target="_blank">360 Central Ave, Ste 1490 St Petersburg, Fl 33701</a></span>
                  </div>
                </div>
                <div class="column is-12">
                  <div class="iframe-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1765.1339098573008!2d-82.63871894186045!3d27.77072086896273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e1834d3032bb%3A0x3fbca035eac666b6!2s360+Central+Ave+%231490%2C+St.+Petersburg%2C+FL+33701!5e0!3m2!1sen!2sus!4v1545321214663" frameborder="0" style="border:0" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div>
                <p class="title is-4">Let us know how we can help.</p>
              </div>
              <div>
                <Contact :area="'contact'" />
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="is-social">
            <p class="title has-text-centered has-text-primary">
              Connect
            </p>
            <p class="has-text-centered">
              <ul>
                <li>
                  <a href="https://twitter.com/epic_ready" target="_blank" rel="noreferrer">
                    <span class="icon is-large">
                      <i class="fab fa-twitter fa-2x"></i>
                    </span>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>

                  <a href="https://www.youtube.com/channel/UCHnybTx24WQ6I044FX3vBdQ" target="_blank" rel="noreferrer">
                    <span class="icon is-large">
                      <i class="fab fa-youtube fa-2x"></i>
                    </span>
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import Contact from '@/components/contact.vue'
export default {
  name: 'contact',
  components: { Contact }
}
</script>

<style lang="scss" scoped>
span.icon.is-large {
  margin-right: 10px;
}
div.contactHeader {
  margin-top: 25px;
}
div.wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  span.icon {
    margin-right: 5px;
  }
}
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
