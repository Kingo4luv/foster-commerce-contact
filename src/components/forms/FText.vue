<template>
    <div class="w-full">
        <ValidationProvider :rules="data.required ? 'required':''"  :name="data.label" v-slot="{ errors }">
            <label class="form-label" :for="data.handle">
            {{data.label}} {{data.required === true ? '*':''}} 
            </label>
            <input v-model="value"  @blur="$emit('validate', data.handle)"   @keyup="$emit('update:text', value)" class="form-control" :id="data.handle" :type="data.type">
            <span class="text-red-500 text-sm mt-1">{{ errors[0] }}</span>
        </ValidationProvider>
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