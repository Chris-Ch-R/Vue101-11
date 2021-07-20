<template>
  <div>
      <pokemon-create-form></pokemon-create-form>
      <pokemon-table></pokemon-table>
      
  </div>
</template>

<script>
import PokemonCreateForm from '@/components/PokemonCreateForm';
import PokemonTable from '@/components/PokemonTable';
// import PokemonCreateForm from '../components/PokemonCreateForm.vue';
// import PokemonTable from '../components/PokemonTable.vue';
export default {
    components:{
        PokemonCreateForm,
        PokemonTable
    }

}
</script>

<style>

</style>