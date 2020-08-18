<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body splash">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-6 has-text-left">
              <br>
              <h1 class="title has-text-white-ter is-size-1">
                Design, track, and assess training exercises.
              </h1>
              <p class="subtitle has-text-white-ter">
                EPIC Plan provides training planners and participants with the ability to collaboratively plan, execute, and assess training exercises
              </p>
              <br>
              <Contact :simple="true" :area="'plan'" />
            </div>
            <div class="column">
              <img src="@/assets/planillustration.svg" alt="Logo">
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
                  <figure class="image is-96x96"><img src="@/assets/plan.svg" alt="EPIC Plan"></figure>
                </div>
                <div class="column is-narrow"> <span class="title is-1">
                    EPIC Plan
                  </span></div>
              </div>
              <h3 class="title is-4">Design, track, and assess training exercises.</h3>
              <p class="subtitle is-5">
                EPIC Plan is a collaborative, cloud-based application that allows you to determine and maximize the
                value of training and exercises. Users can fully plan, execute, and assess any training scenario
                with a clean, easy to use interface that changes the paradigm in how training and exercise planning
                can be accomplished. Users can also access, enter, and update data from anywhere, in real-time,
                and visualize their progress and performance with map based indicators to maximize training efficiency.
              </p>
            </div>
            <div class="column is-full">
              <figure class="image">
                <img src="@/assets/updated_report.jpg" />
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
                    <img src="@/assets/invite.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-left is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/invite.svg">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-size-5">Capture your data</p>
                      <p class="subtitle has-text-left">EPIC Plan supports the collection of training objective requirements and more throughout the planning phase. Having all required data in one location streamlines planning and ensures accountability for the required information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="card">
                <div class="card-image is-hidden-desktop">
                  <figure class="image">
                    <img src="@/assets/calendar.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-size-5">Track and create training events</p>
                      <p class="subtitle has-text-left">Create and track scenario-based training events and the Master Scenario Events List (MSEL) injects linked to participant training objectives to maximize priority training and value.</p>

                    </div>
                    <div class="media-right is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/calendar.svg">
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
                    <img src="@/assets/report.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-left is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/report.svg">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-size-5">Assess your training</p>
                      <p class="subtitle has-text-left">Capture daily assessments from Observer Controllers and Feedback from participants to update the dynamic flow of planned events, and output results to generate performance reports from correlated data. Visualizing the correlated data assists in determining the overall effectiveness and value of the training.</p>
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
          <Contact :area="'plan'" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Contact from '@/components/contact.vue'
export default {
  name: 'epic-plan',
  components: { Contact }
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
  background: #00af9a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #00af9a,
    #5bcbbe,
    #beeae5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #00af9a,
    #5bcbbe,
    #beeae5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
