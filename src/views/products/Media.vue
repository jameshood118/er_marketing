<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body splash">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-6 has-text-left">
              <br>
              <h1 class="title has-text-white-ter is-size-1">
                Secure social media response training.
              </h1>
              <p class="subtitle has-text-white-ter">
                EPIC Ready Media generates realistic training environments, preparing your team for any scenario
              </p>
              <br>
              <Contact :simple="true" :area="'media'" />
            </div>
            <div class="column">
              <img src="@/assets/socialstorm.svg" alt="Logo">
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
                  <figure class="image is-96x96"><img src="@/assets/media.svg" alt="EPIC Media"></figure>
                </div>
                <div class="column is-narrow"> <span class="title is-1">
                    EPIC Media
                  </span></div>
              </div>
              <h3 class="title is-4">Replicate an online media environment with personas, profiles, posts and noise.</h3>
              <p class="subtitle is-5">
                EPIC Media creates an online, social and published media world that you can
                tailor to meet training objectives. Create linked personas with social media
                profiles, and scripted posts. Challenge analysts against key tasks by replicating
                the publicly available information (PAI) environment of defined areas while controlling the pace and focus of posts.
              </p>
            </div>
            <div class="column is-full">
              <figure class="image">
                <img src="@/assets/media_profiles.jpg" />
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
                    <img src="@/assets/posts.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-left is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/posts.svg">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-size-5">Bring your Training Environment to Life.</p>
                      <p class="subtitle has-text-left">Tailor your team’s training experience by creating and publishing custom posts and profiles on any social media platform, designing real-world scenarios for your trainees. Track the viewing frequency of your team’s targeted posts to gauge their effectiveness in real-time with EPIC Ready’s analysis feature.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="card">
                <div class="card-image is-hidden-desktop">
                  <figure class="image">
                    <img src="@/assets/control_panel.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-size-5">Raise the Stakes by Producing Background Noise.</p>
                      <p class="subtitle has-text-left">EPIC Ready Media utilizes publicly available information (PAI) data sources to generate scalable noise on multiple social media platforms. This feature includes customizable options such as sentiment, location, and post frequency which empowers you to challenge the trainee’s exercise with background noise. </p>

                    </div>
                    <div class="media-right is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/control_panel.svg">
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
                    <img src="@/assets/pcsocial.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-left is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/pcsocial.svg">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-size-5">Synthetic Internet Environment</p>
                      <p class="subtitle has-text-left">EPIC Ready provides replicated websites including Twitter, Facebook, Youtube, VK Weibo, Telegram, as well as the ability to create custom social media, blog, news, or video sharing websites. Supported uploads include images, videos, and files.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="card">
                <div class="card-image is-hidden-desktop">
                  <figure class="image">
                    <img src="@/assets/mapillustration.svg">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-size-5">Schedule Posts with Time and Geographic Settings.</p>
                      <p class="subtitle has-text-left">EPIC Ready Media allows its users to schedule posts in any time zone or geographic location, enabling a multitude of posts to publish at once. This feature makes blending the target into the background noise effortless for the user, while making the exercise more challenging for trainees. </p>
                    </div>
                    <div class="media-right is-hidden-touch">
                      <figure class="image is-128x128">
                        <img src="@/assets/mapillustration.svg">
                      </figure>
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
          <Contact :area="'media'" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Contact from '@/components/contact.vue'
export default {
  name: 'epic-media',
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
