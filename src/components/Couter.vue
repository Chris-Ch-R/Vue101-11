<template>
  
</template>

<script>
export default {
data(){
        return{                     //=== undefined ? 10 : this.initNumber
            number : this.initNumber || 10,
        }
    },
    props: ['initNumber'],
    methods: {
        increse(number){
            this.number += number
        }
    }
}
</script>

<style>

</style>