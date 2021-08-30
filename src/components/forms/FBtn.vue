<template>
    <div :class="[data.position === 'left' ? 'justify-start':'justify-end']">
        <button class="md:w-52 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded focus:outline-none focus:shadow-outline" type="submit">
          {{loading === true ? 'Please wait...' : data.label}}
        </button>
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