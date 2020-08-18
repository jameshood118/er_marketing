<template>
  <div class="modal" :class="{'is-active': open}">
    <div class="modal-background" @click="cancel()"></div>
    <div class="modal-content wide-modal is-vcentered">
      <stepper v-model="stepIndex" @change="updateStep" @steps-completed="onStepsCompleted">
        <stepper-item v-for="(stepperItem, index) in stepperInfo" :key="index">
          <a @click="stepIndex++">
            <figure class="image center-image is-16by9">
              <img :src="stepperItem.image" alt="">
            </figure>
          </a>
        </stepper-item>
        <template slot="header" v-if="stepperInfo[stepIndex]">
          <p class="title has-text-white-ter has-text-centered is-size-4-touch is-size-2">
            {{stepperInfo[stepIndex].title}}
          </p>
          <p class="subtitle has-text-white-ter has-text-centered is-size-6-touch is-size-4">
            {{stepperInfo[stepIndex].text}}
          </p>
        </template>
        <template slot="completed">
          Try For Free
        </template>
      </stepper>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="cancel()"></button>
    <a @click="cancel()">
      <figure class="image modal-icon is-128x128">
        <img src="@/assets/epicreadywhite.svg" alt="Logo" />
      </figure>
    </a>
  </div>
</template>

<script>
import { Stepper, StepperItem } from '@/components/stepper'
import { stepList } from './stepsList.js'

export default {
  name: 'epic-tour',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Stepper,
    StepperItem
  },
  data() {
    return {
      stepIndex: parseInt(this.$route.query.tourStep) || 0,
      stepperInfo: stepList
    }
  },
  methods: {
    cancel() {
      this.stepIndex = 0
      this.$emit('close')

      // Do on next stick since updating stepIndex updates the router
      // and needs to be cleared after that update happens
      this.$nextTick(function() {
        this.$router.replace({ query: null })
      })
    },
    updateStep(value) {
      this.stepIndex = value
      this.$router.push({
        query: { showTour: true, tourStep: value }
      })
    },
    onStepsCompleted() {
      this.cancel()
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-background {
  background-color: #4a4a4a;
}
.wide-modal {
  min-width: 50vw;
  overflow: hidden;
}
.modal-icon {
  position: fixed;
  left: 32px;
  top: 30px;
}
</style>
