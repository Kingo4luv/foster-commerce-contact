<template>
  <div class="max-w-2xl mx-auto mt-12 px-4 pb-6">
   <header class="max-w-sm mx-auto">
      <h1 class="text-gray-800 text-center text-4xl font-bold">Contact Sales</h1>
      <p class="mt-4 text-gray-600 text-center leading-6">Our Sales team can help you find the right solution. Fill out the form and we’ll get in touch shortly.</p>
   </header>
    <Loader v-if="$apollo.loading" />
    <form id="freeForm" class="mt-12 space-y-4 md:space-y-6" v-else @submit.prevent="onSubmit">
      <Alert v-if="alert !== null " :data="alert" @removeAlert="removeAlert" />
      <template v-for="(rows, i) in getFormInputs" >
        <div  :class="[rows.fields.length > 1 ? 'flex flex-col md:flex-row space-x-0 md:space-x-4':'w-full']" :key="i">
          <div :class="[rows.fields.length > 1 ? 'w-full md:w-1/2 mb-3 md:mb-0':'w-full']" v-for="(inputs, j) in rows.fields" :key="j">
            <component :is="'f-'+inputs.type" :loading="loading" :text.sync="formData[inputs.handle]" :data="inputs"/>
          </div>
        </div>
      </template>
    </form>
  </div>
</template>

<script>
import Loader from '../components/FLoader.vue'
import Alert from '../components/FAlert.vue'
import FREEFORM from '../query/get-freeform.js'
import {submitForm} from '../actions/api.js'
export default {
  components:{
    Loader, Alert
  },
  data(){
    return{
      loading: false,
      alert: null,
      errors: {},
      formData: {}
    }
  },
  apollo: {
    freeform: FREEFORM
  },
  computed:{
    /**
     * Gets a short version of inputs
     */
    getFormInputs(){
      return this.freeform.form.pages[0].rows;
    },
  },
  methods:{ 
    /**
     * Gets called when the user submits the contact form
     */
    async onSubmit(){
      this.loading = true
      const payload = {...this.formData, formID: this.freeform.form.id, formHash: this.freeform.form.hash }
      const response = await submitForm(payload);
      if(response.status === true){
        this.alert = {
              message: response.message,
              type: "success"
          }
      }else{
        this.alert = {
            message: response.message,
            type: "error"
          }
      }
      this.loading = false
    },

    /**
     * Gets called when the user clicks on the close alert icon
     */
    removeAlert(){
      this.alert = null
    }
  }
}
</script>