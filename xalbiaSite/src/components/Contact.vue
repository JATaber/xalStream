<template>
  <div class="container">
    <h2 class="header">Contact</h2>

    <b-container fluid>
      <b-card-group columns>
        <b-card>
          <a href="http://twitch.tv/xalbia"><icon name="brands/twitch"></icon> twitch.tv/xalbia</a><br>
          <a href="http://twitter.com/xalbia1"><icon name="brands/twitter"></icon>twitter.com/xalbia1</a><br>
        </b-card>
        <b-card class="ml-auto">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show" novalidate>
            <b-form-group id="email"
                          horizontal
                          label="Email:"
                          label-for="emailInput"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="emailInput"
                            type="email"
                            v-model="form.email"
                            :state="!$v.form.email.$invalid"
                            placeholder="Enter Email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="name"
                          horizontal
                          label="Name:"
                          description="What should I call you?"
                          label-for="nameInput">
              <b-form-input id="nameInput"
                            type="text"
                            v-model="form.name"
                            :state="!$v.form.comment.$invalid"
                            placeholder="Enter Name">
              </b-form-input>
            </b-form-group>
            <b-form-group id="subject"
                          horizontal
                          label="Subject:"
                          description="What is your message about?"
                          label-for="nameInput">
              <b-form-input id="nameInput"
                            type="text"
                            v-model="form.subject"
                            :state="!$v.form.subject.$invalid"
                            placeholder="Enter Subject">
              </b-form-input>
            </b-form-group>
            <b-form-textarea id="textArea"
                             v-model="form.comment"
                             placeholder="Please type your comment or question here."
                             :state="!$v.form.comment.$invalid"
                             :rows="3"
                             :max-rows="12">
            </b-form-textarea>
            <b-button-group>
              <b-button type="submit" :disabled="$v.form.$invalid" variant="primary">Submit</b-button>
            </b-button-group>
            <b-button-group>
              <b-button type="reset" variant="primary">Reset</b-button>
            </b-button-group>
          </b-form>
        </b-card>
      </b-card-group>
    </b-container>
    <b-modal id="formSub" ref="formSub" hide-footer centered title="Thank You!">
      <div class="d-block text-center">
        <h3>I will get back to you as soon as I can!</h3>
      </div>
      <b-btn class="mt-3" variant="primary" block @click="hide">OK</b-btn>
    </b-modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'commentForm',
  data () {
    return {
      form: {
        email: '',
        name: '',
        comment: ''
      },
      show: true
    }
  },
  mixins: [
    validationMixin
  ],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      subject: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      comment: {
        required
      }
    }
  },
  methods: {
    onReset (evt) {
      this.form.email = ''
      this.form.name = ''
      this.form.subject = ''
      this.form.comment = ''
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    onSubmit (evt) {
      evt.preventDefault()
      window.emailjs.send(
        'gmail',
        'stream',
        {email: this.form.email, name: this.form.name, subject: this.form.subject, text: this.form.comment}
      )
      this.$refs.formSub.show()
    },
    hide () {
      this.$refs.formSub.hide()
      this.form.email = ''
      this.form.name = ''
      this.form.subject = ''
      this.form.comment = ''
    }
  }
}
</script>
