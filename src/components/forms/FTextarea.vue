<template>
    <div class="w-full">
        <ValidationProvider rules="required" :name="data.label" v-slot="{ errors }">
            <label class="form-label" :for="data.handle">
            {{data.label}} {{data.required === true ? '*':''}} 
            </label>
            <textarea v-model="value" @blur="$emit('validate', data.handle)" @keyup="$emit('update:text', value)" :id="data.handle" rows="5" class="w-full bg-transparent border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            <span class="text-red-500 text-sm mt-1">{{ errors[0] }}</span>
        </ValidationProvider>
    </div>
</template>

<script>
    export default {
        props:{
            /**
             * input data e.g label, required
             * 
             */
            data:{
                type: Object,
                required: true,
            },
        },
        data(){
            return{
                value:""
            }
        }
    }
</script>