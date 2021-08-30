<template>
    <div class="w-full">
        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" :for="data.handle">
        {{data.label}} {{data.required === true ? '*':''}} 
        </label>
        <div class="relative">
          <select v-model="value" @change="$emit('update:text', value)" class="block appearance-none w-full bg-transparent border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :id="data.handle" :required="data.required">
            <option value="">Select subject</option>
            <option :selected="option.checked" v-for="(option, i) in data.options" :key="i" :value="option.value">{{option.label}}</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            /**
             * input data e.g label, required, options 
             * 
             */
            data:{
                type: Object,
                required: true,
            }
        },
        data(){
            return{
                value:""
            }
        }
    }
</script>