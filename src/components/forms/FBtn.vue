<template>
    <div :class="[data.position === 'left' ? 'justify-start':'justify-end']">
        <input :type="data.type" name="" id="" :value="loading === true ? 'Please wait...' : data.label" class="cursor-pointer md:w-52 w-full disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ring-offset-2 focus:shadow-outline">
    </div>
</template>

<script>
    export default {
        props:{
            data:{
                type: Object,
                required: true,
            },
            loading:{
                type: Boolean,
                required: false
            }
        }
    }
</script>