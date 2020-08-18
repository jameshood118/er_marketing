<template>
  <form name="contact" method="POST" netlify netlify-honeypot="bot-field">
    <input type="hidden" name="area" v-model="form.area" />
    <p class="hidden">
      <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
    </p>
    <div v-if="simple">
      <div v-show="errors.has('email')" class="notification is-danger">{{errors.first('email') }}</div>
      <div v-if="errorSubmit" class="notification is-info">A problem occured, please contact us directly at <a href='mailto:support@epicready.com'>support@epicready.com</a></div>
      <div class="columns is-multiline simpleContact">
        <div class="column is-half">
          <input name="email" v-model="form.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="email" placeholder="name@company.com">
        </div>
        <div class="column is-half">
          <p class="has-text-left">
            <a class="button is-large-tablet is-rounded is-link" @click="handleSubmit">
              Try For Free
            </a>
          </p>
        </div>
        <div class="column is-full">
          <p class="subtitle is-7">Already using EPIC Ready? <a href="https://app.epicready.com" target="_blank">
              Log In
            </a></p>
        </div>
      </div>
    </div>
    <div v-else class="columns is-multiline">
      <div class="column is-full">
        <span v-if="errorSubmit" class="help is-danger">A problem occured, please contact us directly at <a href='mailto:support@epicready.com'>support@epicready.com</a></span>
      </div>
      <div class="column is-6">
        <input name="name" v-model="form.name" class="input is-medium" type="text" placeholder="Enter your Name">
      </div>
      <div class="column is-6">
        <input name="email" v-model="form.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" class="input is-medium" type="email" placeholder="Enter your Email">
        <span v-show="errors.has('email')" class="help is-danger">{{errors.first('email') }}</span>
      </div>
      <div class="column is-12">
        <textarea name="message" v-model="form.message" class="textarea" rows="10" placeholder="Tell us a little about what you are looking for ..."></textarea>
      </div>
      <div class="column form-footer mt-10">
        <a class="button is-large is-link" @click="handleSubmit">
          Send Message
        </a>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  name: "contact-form",
  props: {
    simple: {
      type: Boolean,
      default: false
    },
    area: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      errorSubmit: false,
      form: {
        email: "",
        name: "",
        area: this.area,
        message: ""
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({ "form-name": "contact", ...this.form })
          })
            .then(response => {
              if (response.ok !== false) {
                this.$router.push({ path: "/thanks" });
                this.errorSubmit = false;
              } else {
                this.errorSubmit = true;
              }
            })
            .catch(error => alert(error));
          return;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.simpleContact {
  & .column {
    padding-top: 0;
  }
}
.hidden {
  visibility: hidden;
}
</style>
