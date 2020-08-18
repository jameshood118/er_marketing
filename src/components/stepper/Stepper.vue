<template>
  <div>
    <div class="content header-content">
      <slot name="header"></slot>
    </div>
    <div class="steps">
      <div v-if="(stepperItems.length-1) == activeStep" class="columns is-centered">
        <div class="column is-full has-text-centered">
          <a data-nav="next" class="button is-large is-rounded is-link" @click="stepsCompleted()">
            <slot name="completed"></slot>
          </a>
        </div>
      </div>
      <div v-else v-for="(stepperItem, index) in stepperItems" :key="index" v-show="stepperItem.visible" :class="['step-item', {'is-active': activeStep === index}, stepperItem.classList ]">
        <a @click="stepClick(index)">
          <template>
            <div class="step-marker">

            </div>
            <div class="step-details">
              <p class="step-title">{{ stepperItem.label }}</p>
            </div>
          </template>
        </a>
      </div>

      <div class="columns steps-actions">
        <div class="column is-narrow steps-action is-hidden-mobile">
          <div class="has-text-centered has-text-vcentered">
            <a data-nav="previous" v-if="activeStep != 0" @click="changeStep(activeStep-1)">
              <span class="icon is-large has-text-white-ter is-size-1">
                <i class="fas fa-chevron-left" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="column is-paddingless steps-content">
          <div class="columns is-paddingless">
            <div class="column">
              <slot />
            </div>
          </div>
        </div>

        <div class="column is-narrow steps-action is-hidden-mobile">
          <div class="has-text-centered has-text-vcentered">
            <a data-nav="next" v-if="(stepperItems.length-1) != activeStep" @click="changeStep(activeStep+1)" key="next">
              <span class="icon is-large has-text-white-ter is-size-1">
                <i class="fas fa-chevron-right" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    value: [String, Number],
    expanded: Boolean,
    type: String,
    position: String,
    animated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeStep: this.value || 0,
      stepperItems: [],
      contentHeight: 0,
      isStepper: true // Used internally by StepperItem
    }
  },
  computed: {
    navClasses() {
      return [
        this.type,
        this.position,
        {
          'is-fullwidth': this.expanded,
          'is-toggle-rounded is-toggle': this.type === 'is-toggle-rounded'
        }
      ]
    }
  },
  watch: {
    /**
     * When v-model is changed set the new active step.
     */
    value(value) {
      this.changeStep(value)
    },

    /**
     * When step-items are updated, set active one.
     */
    stepperItems() {
      if (this.stepperItems.length) {
        this.stepperItems[this.activeStep].isActive = true
      }
    }
  },
  methods: {
    /**
     * Change the active step and emit change event.
     */
    changeStep(newIndex) {
      if (newIndex >= this.stepperItems.length) {
        this.stepsCompleted()
      } else if (this.activeStep != newIndex) {
        // Added this to track last active step
        this.$emit('previousStep', this.activeStep)
        this.stepperItems[this.activeStep].deactivate(this.activeStep, newIndex)
        this.stepperItems[newIndex].activate(this.activeStep, newIndex)
        this.activeStep = newIndex
        this.$emit('change', newIndex)
      }
    },

    /**
     * Step click listener, emit input event and change active step.
     */
    stepClick(value) {
      this.$emit('input', value)
      this.changeStep(value)
    },

    /**
     * Step complete listener, emit input event at the end of all steps.
     */
    stepsCompleted() {
      this.stepClick(0)
      this.$emit('steps-completed')
    }
  },
  mounted() {
    if (this.stepperItems.length) {
      this.stepperItems[this.activeStep].isActive = true
    }
  }
}
</script>

<style lang="scss" scoped>
.header-content {
  min-height: 12em;
}
.steps-actions {
  & .column {
    min-width: 5vw;
  }
}
.steps-action {
  cursor: pointer;
}
.steps {
  justify-content: center;
}
</style>
