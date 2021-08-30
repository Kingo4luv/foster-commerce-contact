<template>
    <div class="w-full">
        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" :for="data.handle">
        {{data.label}} {{data.required === true ? '*':''}} 
        </label>
        <textarea v-model="value" @keyup="$emit('update:text', value)" :id="data.handle" rows="5" class="w-full bg-transparent border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :required="data.required"/>
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