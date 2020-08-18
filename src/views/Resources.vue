<template>
  <div>
    <section class="section is-resourceHeader">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered is-multiline is-centered">
            <div class="column is-6">
              <div class="columns is-multiline is-centered">
                <div class="column is-narrow">
                  <figure class="image is-64x64">
                    <img src="@/assets/logo.svg" alt="Logo">
                  </figure>
                </div>
                <div class="column is-narrow">
                  <span class="title is-3 has-text-black">EPIC Ready Resources</span>
                </div>
                <div class="column is-12">
                  <p class="subtitle is-5 has-text-black">Everything you need to know about the EPIC Ready suite of applications.
                  </p>
                </div>
                <div class="column is-12 has-text-centered">
                  <nav class="breadcrumb breadMenu" aria-label="breadcrumbs">
                    <ul class="">
                      <li>
                        <router-link to="#all">All</router-link>
                      </li>
                      <li>
                        <router-link to="#videos">Videos</router-link>
                      </li>
                      <li>
                        <router-link to="#documents">Documents</router-link>
                      </li>
                      <li>
                        <router-link to="#other">Other</router-link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="videos">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-full">
            <p class="title is-5 has-text-left">Videos</p>
          </div>
          <div class="column is-one-third" v-for="resource in resources.videos" v-bind:key="resource.title">
            <a :href="resource.link" target="_blank">
              <div class="card resourceCard">
                <div class="card-image" :class="resource.class">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-full has-text-centered">
                      <span class="icon is-large">
                        <i :class="resource.icon+' fa-3x has-text-white'" />
                      </span>
                      <span class="title is-3 has-text-white">{{resource.app}}</span>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="content">
                    <span class="title is-6">{{resource.title}}</span>
                    <p class="has-text-left">{{resource.description}}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="documents">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-full">
            <p class="title is-5 has-text-left">Documents</p>
          </div>
          <div class="column is-one-third" v-for="resource in resources.documents" v-bind:key="resource.title">
            <a :href="resource.link" target="_blank">
              <div class="card resourceCard">
                <div class="card-image" :class="resource.class">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-full has-text-centered">
                      <span class="icon is-large">
                        <i :class="resource.icon+' fa-3x has-text-white'" />
                      </span>
                      <span class="title is-3 has-text-white">{{resource.app}}</span>
                    </div>
                  </div>
                </div>
                <div class="card-content">

                  <div class="content">
                    <span class="title is-6">{{resource.title}}</span>
                    <p class="has-text-left">{{resource.description}}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="other">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-full">
            <p class="title is-5 has-text-left">Other</p>
          </div>
          <div class="column is-one-third" v-for="resource in resources.other" v-bind:key="resource.title">
            <a :href="resource.link" target="_blank">
              <div class="card resourceCard">
                <div class="card-image" :class="resource.class">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-full has-text-centered">
                      <span class="icon is-large">
                        <i :class="resource.icon+' fa-3x has-text-white'" />
                      </span>
                      <span class="title is-3 has-text-white">{{resource.app}}</span>
                    </div>
                  </div>
                </div>
                <div class="card-content">

                  <div class="content">
                    <span class="title is-6">{{resource.title}}</span>
                    <p class="has-text-left">{{resource.description}}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="section has-background-light is-medium">
      <div class="container is-fluid has-text-centered">
        <div class="title-wrapper huge-pb">
          <h2 class="title">Let us know how we can help.</h2>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <Contact :area="'resources'" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Contact from '@/components/contact.vue'
export default {
  name: 'resources',
  components: { Contact },
  data() {
    return {
      resources: {
        videos: [
          {
            app: 'EPIC Ready',
            class: 'has-background-epicready',
            title: 'EPIC Ready Video',
            description: '',
            icon: 'fas fa-file-video',
            link: 'https://youtu.be/zT0coM_E6lo'
          },
          {
            app: 'EPIC Builder',
            class: 'has-background-builder',
            title: 'Los Angeles CDB with EPIC Builder',
            description: '',
            icon: 'fas fa-file-video',
            link: 'https://youtu.be/schKOouJU6w'
          }
        ],
        documents: [
          {
            app: 'EPIC Ready',
            class: 'has-background-epicready',
            title: 'EPIC Ready Slick Sheet',
            description: '',
            icon: 'fas fa-file-pdf',
            link:
              'https://storage.googleapis.com/epicready/EPIC_Ready_Slick_Sheet.pdf'
          },
          {
            app: 'EPIC Plan',
            class: 'has-background-plan',
            title: 'EPIC Plan Datasheet',
            description: '',
            icon: 'fas fa-file-pdf',
            link:
              'https://storage.googleapis.com/epicready/EPIC_Plan_Datasheet_2018.pdf'
          },
          {
            app: 'EPIC Plan',
            class: 'has-background-plan',
            title: 'EPIC Plan Whitepaper',
            description: '',
            icon: 'fas fa-file-pdf',
            link:
              'https://storage.googleapis.com/epicready/EPIC_Plan_White_Paper.pdf'
          },
          {
            app: 'EPIC Media',
            class: 'has-background-media',
            title: 'EPIC Media Datasheet',
            description: '',
            icon: 'fas fa-file-pdf',
            link:
              'https://storage.googleapis.com/epicready/EPIC_Media_Datasheet_2018.pdf'
          },
          {
            app: 'EPIC Media',
            class: 'has-background-media',
            title: 'EPIC Media Whitepaper',
            description: '',
            icon: 'fas fa-file-pdf',
            link:
              'https://storage.googleapis.com/epicready/EPIC_Media_White_Paper.pdf'
          },
          {
            app: 'EPIC Builder',
            class: 'has-background-builder',
            title: 'EPIC Builder Datasheet',
            description: '',
            icon: 'fas fa-file-pdf',
            link:
              'https://storage.googleapis.com/epicready/EPIC_Builder_Datasheet_2018.pdf'
          },
          {
            app: 'EPIC Builder',
            class: 'has-background-builder',
            title: 'EPIC Builder Whitepaper',
            description: '',
            icon: 'fas fa-file-pdf',
            link:
              'https://storage.googleapis.com/epicready/EPIC_Builder_White_Paper.pdf'
          }
        ],
        other: [
          {
            app: 'EPIC Ready',
            class: 'has-background-epicready',
            title: 'Brand Pack',
            description: '',
            icon: 'fas fa-file-archive',
            link:
              'https://storage.googleapis.com/epicready/EPIC_Ready_Brand_Pack.zip'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.is-resourceHeader {
  .columns .is-narrow {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-body {
    padding: 5rem 1.5rem 0 1.5rem;
  }
  figure {
    display: inline-block;
  }
  .breadcrumb ul {
    justify-content: center;
    align-items: center;
  }
}
.resourceCard {
  .card-image {
    .columns {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      .column {
        display: flex;
        justify-content: center;
        align-items: center;
        .icon svg {
          height: inherit;
        }
      }
    }
  }
}
</style>
