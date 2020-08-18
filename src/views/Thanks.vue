<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body splash">
        <div class="container is-fluid has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-6 is-offset-1 has-text-left">
              <br>
              <h1 class="title has-text-white-ter is-size-1">
                Thank you.
              </h1>
              <p class="subtitle has-text-white-ter">
                We will contact you shortly with more information.
              </p>
              <button class="button is-large is-rounded is-info" @click="$router.go(-1)">
                <span class="icon">
                  <i class="fas fa-angle-double-left"></i>
                </span>
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered">
          <h1 class="title">
            <a @click="$router.go(-1)" class="navbar-item">
              <div class="container">
                <span class="icon">
                  <i class="fas fa-angle-double-left has-text-grey"></i>
                </span>
                <span>Go Back</span>
              </div>
            </a>
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.splash {
  /* https://uigradients.com */
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #209cee,
    #6dd5fa,
    #6dd5fa
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #209cee,
    #6dd5fa,
    #6dd5fa
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
