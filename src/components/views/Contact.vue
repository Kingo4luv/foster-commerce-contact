<template>
  <div class="max-w-2xl mx-auto mt-12 px-4 pb-6">
   <header class="max-w-sm mx-auto">
      <h1 class="text-gray-800 text-center text-4xl font-bold">Contact Sales</h1>
      <p class="mt-4 text-gray-600 text-center leading-6">Our Sales team can help you find the right solution. Fill out the form and we’ll get in touch shortly.</p>
   </header>
    <Loader v-if="$apollo.loading" />
    <form id="freeForm" class="mt-12 space-y-6" v-else @submit.prevent="onSubmit">
      <Alert v-if="message !== '' " :message="message" />
      <template v-for="(rows, i) in getFormInputs" >
        <div v-if="rows.fields.length > 1" class="flex flex-col md:flex-row space-x-0 md:space-x-4" :key="i">
          <div class="w-full md:w-1/2 mb-6 md:mb-0" v-for="(inputs, j) in rows.fields" :key="j">
            <component :is="'f-'+inputs.type" :text.sync="formData[inputs.handle]" :data="inputs"/>
          </div>
        </div>
        <template v-else>
          <div class="w-full" :key="i">
            <component :is="'f-'+rows.fields[0].type" :loading="loading" :text.sync="formData[rows.fields[0].handle]" :data="rows.fields[0]" />
          </div>
        </template>
      </template>
    </form>
  </div>
</template>

<script>
import Loader from '../FLoader.vue'
import Alert from '../FAlert.vue'
import FREEFORM from '../../query/get-freeform.js'
export default {
  components:{
    Loader, Alert
  },
  data(){
    return{
      loading: false,
      message: "",
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
      try{
        const rawResponse = await fetch(`${process.env.VUE_APP_BASE_URL}actions/freeform/api/form`, {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        const response = await rawResponse.json()
        if(response.status === 200){
          this.message = "Form successfully submitted. Our sales team will contact you soon"
        }
        this.loading = false
      }catch(err){
        console.log(err);
        this.loading = false
      }
    }
  }
}
</script>