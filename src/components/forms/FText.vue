<template>
    <div class="w-full">
        <label class="block text-gray-700 text-sm font-bold mb-2 leading-4" :for="data.handle">
        {{data.label}} {{data.required === true ? '*':''}} 
        </label>
        <input v-model="value" @keyup="$emit('update:text', value)" class="block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" :id="data.handle" :type="data.type" :required="data.required">
    </div>
</template>

<script>
    export default {
        props:{
            /**
             * input data e.g label, required and type
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