<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered is-multiline">
            <div class="content column is-6 has-text-left">
              <h1 class="title is-2 has-text-black">The one suite of applications to run your training exercise</h1>
              <p class="subtitle is-5 has-text-black">EPIC Ready is a suite of online collaborative apps to support planning and training for exercise scenarios. Design, track, and assess your training programs in a secure environment.
              </p>
              <div v-if="showContact">
                <div class="column is-two-thirds">
                  <Contact :simple="true" :area="'home'" />
                </div>
              </div>
              <div v-else>
                <div class="column is-two-thirds is-offset-3">
                  <p class="has-text-left">
                    <a class="button is-large is-rounded is-link" @click="toggleSignUp()">
                      Try For Free
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <div v-if="showVideo == false">
                <a @click="toggleVideo()">
                  <figure class="videoOver image center-image">
                    <div>
                      <i class="fas fa-play-circle fa-7x has-text-grey-dark"></i>
                    </div>
                    <img src="@/assets/launchermockup.svg" alt="EPIC Ready" />
                  </figure>
                </a>
              </div>
              <div v-else>
                <embed style="height:315px;width:100%" src="https://www.youtube.com/embed/zT0coM_E6lo?rel=0;&autoplay=1&mute=1">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="@/assets/waveimage.svg" alt="EPIC Ready">
      </div>
    </section>
    <section id="introduction" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-full">
              <p class="title is-4">
                EPIC Ready provides a one-stop shop for planning, executing, and assessing training exercises.
              </p>
              <p class="subtitle introSub">From full scale to tabletop exercises for military, public sector, or commercial business, EPIC Ready will support your needs.</p>
            </div>
            <div class="column is-half">
              <p class="title is-4">Prepare</p>
              <p class="subtitle">Design and plan your exercise quickly, or reuse previously planned exercises. Real-time collaboration ensures that your team can work together seamlessly.</p>
              <div class="products">
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/plan.svg" slot="trigger" alt="EPIC Plan" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Plan</p>
                      <p class="subtitle is-6">Plan your exercise foundation</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/note.svg" slot="trigger" alt="EPIC Note" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Notebook</p>
                      <p class="subtitle is-6">Keep your ideas organized</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/chat.svg" slot="trigger" alt="EPIC Chat" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Chat</p>
                      <p class="subtitle is-6">Collaborate securely</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/email.svg" slot="trigger" alt="EPIC Email" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Email</p>
                      <p class="subtitle is-6">Private email</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </div>
            </div>
            <div class="column is-half">
              <p class="title is-4">Train</p>
              <p class="subtitle">Distribute 3D geospatial models and synthetic terrain, train in complex environments, and monitor the execution of your exercise.</p>
              <div class="products">
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/plan.svg" slot="trigger" alt="EPIC Plan" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Plan</p>
                      <p class="subtitle is-6">Track your training audience</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/media.svg" slot="trigger" alt="EPIC Media" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Media</p>
                      <p class="subtitle is-6">Train in a synthetic internet environment</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/web.svg" slot="trigger" alt="EPIC Web" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Web</p>
                      <p class="subtitle is-6">Training audience portal</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/builder.svg" slot="trigger" alt="EPIC Builder" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Builder</p>
                      <p class="subtitle is-6">Distribute a 3D environment</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/chat.svg" slot="trigger" alt="EPIC Chat" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Chat</p>
                      <p class="subtitle is-6">Collaborate in real time</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/email.svg" slot="trigger" alt="EPIC Email" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Email</p>
                      <p class="subtitle is-6">Send and receive private emails</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </div>
            </div>
            <div class="column is-half">
              <p class="title is-4">Assess</p>
              <p class="subtitle">Create assessments and receive participant feedback throughout your exercise to assess performance and effectiveness.</p>
              <div class="products">
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/plan.svg" slot="trigger" alt="EPIC Plan" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Plan</p>
                      <p class="subtitle is-6">Assess participant feedback</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/map.svg" slot="trigger" alt="EPIC Map" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Map</p>
                      <p class="subtitle is-6">Monitor exercise status</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </div>
            </div>
            <div class="column is-half">
              <p class="title is-4">Report</p>
              <p class="subtitle">Rapidly create custom reports or generate After Action Report templates to qualify and quantify readiness.</p>
              <div class="products">
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/plan.svg" slot="trigger" alt="EPIC Plan" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Plan</p>
                      <p class="subtitle is-6">Create custom reports</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
                <span>
                  <b-dropdown hoverable>
                    <img src="@/assets/map.svg" slot="trigger" alt="EPIC Map" />
                    <b-dropdown-item custom>
                      <p class="title is-6">Map</p>
                      <p class="subtitle is-6">Visualize mission readiness</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="product" class="hero is-fullheight has-background-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-full">
              <p class="title is-4 has-text-centered">
                Replicate the operational environment, maximize training effectiveness and return on investment.
              </p>
            </div>
            <div class="column is-one-third">
              <router-link to="/products/media">
                <div class="card has-background-white">
                  <div class="card-image">
                    <figure class="image is-128x128">
                      <img src="@/assets/media.svg" alt="Logo">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <div class="has-text-centered">
                        <p class="title is-4">Media</p>
                      </div>
                      <div class="has-text-left">
                        <p>
                          <span class="icon-box-text">Build an online, social and published media world to meet training objectives.</span><br><br>
                          <span class="icon-box-text">Challenge analysts against key tasks by replicating the publicly available information (PAI) environment of defined areas.</span>
                        </p>
                      </div>
                      <div class="level-item has-text-centered has-text-weight-bold">
                        <div class="mt-10">
                          <router-link to="/products/media">Learn More ></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="column is-one-third">
              <router-link to="/products/plan">
                <div class="card has-background-white">
                  <div class="card-image">
                    <figure class="image is-128x128">
                      <img src="@/assets/plan.svg" alt="Logo">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <div class="has-text-centered">
                        <p class="title is-4">Plan</p>
                      </div>
                      <div class="has-text-left">
                        <p>
                          <span class="icon-box-text">Enhance exercise planning and analysis to maximize the value of training.</span><br><br>
                          <span class="icon-box-text">Capture requirements, record performance, and build reports for a realistic assessment of readiness.</span>
                        </p>
                      </div>
                      <div class="level-item has-text-centered has-text-weight-bold">
                        <div class="mt-10">
                          <router-link to="/products/plan">Learn More ></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="column is-one-third">
              <router-link to="/products/builder">
                <div class="card has-background-white">
                  <div class="card-image">
                    <figure class="image is-128x128">
                      <img src="@/assets/builder.svg" alt="Logo">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <div class="has-text-centered">
                        <p class="title is-4">Builder</p>
                      </div>
                      <div class="has-text-left">
                        <p>
                          <span class="icon-box-text">Develop, manage, and visualize 3D content of the Earth.</span><br><br>
                          <span class="icon-box-text">Support training simulations, intelligence, and operations with OGC CDB and GeoPackage.</span>
                        </p>
                      </div>
                      <div class="level-item has-text-centered has-text-weight-bold">
                        <div class="mt-10">
                          <router-link to="/products/builder">Learn More ></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="collaborate" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-vcentered is-centered is-variable">
            <div class="column is-three-quarters">
              <p class="title is-4 has-text-centered">
                More Ways To Collaborate
              </p>
              <article class="media icon-box">
                <figure class="image media-left is-64x64">
                  <img src="@/assets/web.svg" alt="EPIC Web">
                </figure>
                <div class="media-content ">
                  <div class="content is-vcentered">
                    <p class="title is-4 mt-10">
                      Web
                    </p>
                    <p class="subtitle is-5">
                      Portal for your training audience to view published media content.
                    </p>
                  </div>
                </div>
              </article>
              <article class="media icon-box">
                <figure class="image media-left is-64x64">
                  <img src="@/assets/note.svg" alt="EPIC Note">
                </figure>
                <div class="media-content">
                  <div class="content is-vcentered">
                    <p class="title is-4 mt-10">
                      Notebook
                    </p>
                    <p class="subtitle is-5">
                      Knowledge sharing in a collaborative environment.
                    </p>
                  </div>
                </div>
              </article>
              <article class="media icon-box">
                <figure class="image media-left is-64x64">
                  <img src="@/assets/map.svg" alt="EPIC Map">
                </figure>
                <div class="media-content">
                  <div class="content is-vcentered">
                    <p class="title is-4 mt-10">
                      Map
                    </p>
                    <p class="subtitle is-5">
                      Visualize your training exercise on an interactive 3D map.
                    </p>
                  </div>
                </div>
              </article>
              <article class="media icon-box">
                <figure class="image media-left is-64x64">
                  <img src="@/assets/email.svg" alt="EPIC Email">
                </figure>
                <div class="media-content">
                  <div class="content is-vcentered">
                    <p class="title is-4 mt-10">
                      Email
                    </p>
                    <p class="subtitle is-5">
                      Protect conversations using a secure email service.
                    </p>
                  </div>
                </div>
              </article>
              <article class="media icon-box">
                <figure class="image media-left is-64x64">
                  <img src="@/assets/chat.svg" alt="EPIC Chat">
                </figure>
                <div class="media-content">
                  <div class="content is-vcentered">
                    <p class="title is-4 mt-10">
                      Chat
                    </p>
                    <p class="subtitle is-5">
                      Communicate securely with instant messaging and group channels.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="features" class="hero is-fullheight has-background-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-vcentered is-centered is-variable">
            <div class="column is-full">
              <p class="title is-4 has-text-centered">
                Ready To Face Any Challenge
              </p>
            </div>
            <div class="column is-12">
              <div class="columns is-centered">
                <div class="column is-half">
                  <article class="media icon-box">
                    <figure class="image media-left is-128x128">
                      <img src="@/assets/private.svg" alt="EPIC Ready">
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="icon-box-title has-text-weight-bold">Private and Secure</p>
                        <p class="icon-box-text">EPIC Ready can operate on a secure cloud based environment, locally in a closed network, or in remote training areas, allowing you the ability to maintain security and privacy. </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <article class="media icon-box">
                <figure class="image media-left is-128x128">
                  <img src="@/assets/scalable.svg" alt="EPIC Ready">
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p class="icon-box-title has-text-weight-bold">Scalable</p>
                    <p class="icon-box-text">EPIC Ready scales to support as many users as you need in a complex information environment across different continents and time zones.
                    </p>
                  </div>
                </div>
              </article>
              <article class="media icon-box">
                <figure class="image media-left is-128x128">
                  <img src="@/assets/real_time_sync.svg" alt="EPIC Ready">
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p class="icon-box-title has-text-weight-bold">Flexible</p>
                    <p class="icon-box-text">Our web-based platform allows you to access EPIC Ready from anywhere on your computer, tablet or phone. On-site closed network appliance based platforms are also available. </p>
                  </div>
                </div>
              </article>
              <article class="media icon-box">
                <figure class="image media-left is-128x128">
                  <img src="@/assets/connectedworldblue.svg" alt="EPIC Ready">
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p class="icon-box-title has-text-weight-bold">One World 3D Synthetic Terrain</p>
                    <p class="icon-box-text">EPIC Builder efficiently translates a large variety of GIS data formats for use as the one world 3d terrain format CDB. </p>
                  </div>
                </div>
              </article>
            </div>
            <div class="column is-half">
              <article class="media icon-box">
                <figure class="image media-left is-128x128">
                  <img src="@/assets/synthetic.svg" alt="EPIC Ready">
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p class="icon-box-title has-text-weight-bold">Synthetic Internet Enviornment</p>
                    <p class="icon-box-text">EPIC Ready provides replicated websites as well as the ability to create custom social media, blog, news, or video sharing websites. Supported uploads include images, videos, and files.
                    </p>
                  </div>
                </div>
              </article>
              <article class="media icon-box">
                <figure class="image media-left is-128x128">
                  <img src="@/assets/connecting_teams.svg" alt="EPIC Ready">
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p class="icon-box-title has-text-weight-bold">User Roles</p>
                    <p class="icon-box-text">EPIC Ready supports various roles with different permissions and access based on the participant’s role in the exercise. </p>
                  </div>
                </div>
              </article>
              <article class="media icon-box">
                <figure class="image media-left is-128x128">
                  <img src="@/assets/developerApi.svg" alt="EPIC Ready">
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p class="icon-box-title has-text-weight-bold">Developer API</p>
                    <p class="icon-box-text">EPIC Ready API has already integrated with multiple collection and analysis tools, and is available to integrate with other applications or tools. </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero map has-background-grey-dark">
      <div class="hero-body">
        <div class="container is-fluid has-text-centered">
          <div class="columns is-vcentered is-centered">
            <div class="column is-half">
              <div class="container is-fluid">
                <figure class="image center-image">
                  <img src="@/assets/vatc_office_locations.png" alt="Logo" />
                </figure>
              </div>
            </div>
            <div class="column has-text-left">
              <p class="title is-4 has-text-white">You're in good company</p>
              <p class="subtitle is-5 has-text-white">EPIC Ready has been used in trainings across the world. From special operations forces and intelligence operations,
                to civil-military and public affairs training, EPIC Ready supports a variety of mission and training exercises.
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

export default {
  name: 'Home',
  components: { Contact },
  data() {
    return {
      showVideo: false,
      showContact: false,
      openModal: false
    }
  },
  methods: {
    toggleVideo() {
      this.showVideo = !this.showVideo
    },
    toggleSignUp() {
      this.showContact = !this.showContact
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 1.5rem;
}

.card {
  box-shadow: initial;
  padding-top: 20px;
  border-radius: 30px;
  .card-content .content {
    min-height: 15rem;
    max-height: 20rem;
  }
  .card-image {
    text-align: center;
    .image {
      display: inline-block;
    }
  }
}
#introduction {
  min-height: auto;
  .title:not(.is-spaced) + .subtitle.introSub {
    margin-bottom: 2rem;
  }
  .hero-body {
    align-items: flex-start;
    margin-bottom: 25px;
    span {
      margin: 0 10px;
      img {
        height: 45px;
      }
    }
    .products {
      .closeDrop {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}
#collaborate {
  .media + .media {
    border-top: 0;
    margin-top: 1rem;
    padding-top: 1rem;
  }
}

#features {
  .media + .media {
    border-top: 0;
    margin-top: 0;
  }
  .column.is-half {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
  article.media {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

#collaborate,
#features {
  .column {
    padding: 0.75rem;
  }
  .logo {
    figure {
      display: inline-block;
    }
  }
  .card {
    background: transparent;
    box-shadow: initial;
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
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #209cee,
    #79c3f4,
    #d2ebfb
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #209cee,
    #79c3f4,
    #d2ebfb
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
