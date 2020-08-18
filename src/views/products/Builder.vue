<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body splash">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-6 has-text-left">
              <br>
              <h1 class="title has-text-white-ter is-size-1">
                Build and export a 3D virtual environment.
              </h1>
              <p class="subtitle has-text-white-ter">
                EPIC Builder is a 3D geospatial model creation tool for managing and
                deploying 3D geographic information using the OGC CDB and GeoPackage standards.
              </p>
              <br>
              <Contact :simple="true" :area="'builder'" />
            </div>
            <div class="column">

              <div v-if="showVideo == false">
                <a @click="toggleVideo()">
                  <figure class="videoOver image center-image">
                    <div>
                      <i class="fas fa-play-circle fa-7x has-text-grey-dark"></i>
                    </div>
                    <img src="@/assets/cdb_houses.svg" alt="Logo">
                  </figure>
                </a>
              </div>
              <div v-else>
                <embed style="height:315px;width:100%" src="https://www.youtube.com/embed/schKOouJU6w?rel=0;&autoplay=1&mute=1">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot has-text-centered">
        <h1 class="title">
          <router-link to="#features" class="navbar-item">
            <div class="container">
              <span class="icon">
                <i class="fas fa-angle-double-down has-text-grey"></i>
              </span>
            </div>
          </router-link>
        </h1>
      </div>
    </section>
    <section id="features" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered is-multiline">
            <div class="column is-full huge-pb has-text-centered">
              <div class="columns is-centered is-vcentered logo">
                <div class="column is-narrow">
                  <figure class="image is-96x96"><img src="@/assets/builder.svg" alt="EPIC Builder"></figure>
                </div>
                <div class="column is-narrow"> <span class="title is-1">
                    EPIC Builder
                  </span></div>
              </div>
              <h3 class="title is-4">Build and export a 3D virtual environment.</h3>
              <p class="subtitle is-5">
                Develop, manage, and visualize 3D content of the Earth with EPIC Builder. Builder is specifically
                designed to produce CDB terrains faster and easier than legacy database generation products.
                EPIC Builder is used in training simulations, intelligence, and operations as OGC Common Database (CDB)
                and GeoPackage datastores, which can be used in mission planning and distributed for mission rehearsals.
              </p>
            </div>
            <div class="column is-full">
              <figure class="image">
                <img src="@/assets/cdb_image.jpg" />
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section id="features" class="hero is-fullheight has-background-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-12">
              <div class="card">
                <div class="card-image is-hidden-desktop">
                  <figure class="image">
                    <img src="@/assets/connectedworldyellow.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-size-5">One World 3D Synthetic Terrain</p>
                      <p class="subtitle has-text-left">EPIC Builder efficiently translates a large variety of GIS data formats for use as the one world 3d terrain format CDB.
                      </p>
                    </div>
                    <div class="media-right is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/connectedworldyellow.svg">
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="card">
                <div class="card-image is-hidden-desktop">
                  <figure class="image">
                    <img src="@/assets/cdb_construct.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-left is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/cdb_construct.svg">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-size-5">What you see is what you get.</p>
                      <p class="subtitle has-text-left">EPIC Builder is a “What You See is What You Get” approach
                        to the construction of 3D Content and utilizes several open source software capabilities
                        to create and visualize the CDB data store. Builder provides interactive preview capabilities
                        allowing the user to visualize the effect of inserting new data into the simulation environment
                        prior to its deployment in training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="card">
                <div class="card-image is-hidden-desktop">
                  <figure class="image">
                    <img src="@/assets/cdb_minimap.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-size-5">Manage and deploy with ease.</p>
                      <p class="subtitle has-text-left">EPIC Builder fills a critical gap in management and deployment of
                        3D geographic information through the use of Open Geospatial Consortium (OGC) Standards.
                        Providing data interoperability using OGC Common Database (CDB) standard supports the training
                        simulations community. EPIC Builder efficiently translates a large variety of commonly used open,
                        commercial, and proprietary data formats into CDB format for use in a single simulator or across a
                        network of simulators.
                      </p>
                    </div>
                    <div class="media-right is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/cdb_minimap.svg">
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="card">
                <div class="card-image is-hidden-desktop">
                  <figure class="image">
                    <img src="@/assets/cdb_mobilemap.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-left is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/cdb_mobilemap.svg">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-size-5">Runtime Support</p>
                      <p class="subtitle">
                        <ul class="cdb-list">
                          <li>Simulations - EPIC Builder CDB output is ready to be used in any Image Generator (IG) that supports OGC CDB Standards.</li><br>
                          <li>Android devices - The EPIC Builder Android application allows viewing of elevation, imagery, vector, and 3D models from the CDB on compatible android devices.</li><br>
                          <li>Unity - Import of a very large CDB database into the Unity game engine. With the SimBlocks.io CDB Importer, geospatial content can be consumed quickly and rendered in realtime in Unity.</li><br>
                          <li>GeoPackage - EPIC Builder supports export to the OGC Standard GeoPackage format allowing data to be viewed in any compliant GIS data viewing application.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
          <Contact :area="'builder'" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Contact from '@/components/contact.vue'
export default {
  name: 'epic-builder',
  components: { Contact },
  data() {
    return {
      showVideo: false
    }
  },
  methods: {
    toggleVideo() {
      this.showVideo = !this.showVideo
    }
  }
}
</script>
<style lang="scss" scoped>
#features {
  .logo {
    figure {
      display: inline-block;
    }
  }
  .card {
    background: transparent;
    box-shadow: none;
    box-shadow: initial;
    .media-content {
      overflow: hidden;
    }
    .card-image {
      text-align: center;
      .image {
        display: inline-block;
      }
    }
  }
}
.splash {
  /* https://uigradients.com */
  background: #ffa400; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffa400,
    #ffd486,
    #ffe7c1
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffa400,
    #ffd486,
    #ffe7c1
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
ul.cdb-list {
  list-style: disc;
  margin-left: 2em;
}
</style>
