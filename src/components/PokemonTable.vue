<template>
    <div>
    <table>
            <thead>
                <tr>
                    <th>#</th> 
                    <th>Name (EN)</th>
                    <th>Name (JP)</th>
                    <th>Type</th>
                    
                </tr>
                <th>#</th>
            </thead>
            <tbody>
                <tr v-for="(poke, index) in pokemons" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{poke.name.english}}</td>
                    <td>{{poke.name.japanese}}</td>
                    <td>{{poke.type}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import PokemonStore from '@/store/Pokemon'
export default {
    data(){
        return{
            pokemons: []
        }
    },
    created() {
        this.fetchPokemon()
    },
    methods: {
        fetchPokemon(){
            // เรียก action ใน store ใช้ dispatch
            PokemonStore.dispatch('fetchPokemon')
            this.pokemons = PokemonStore.getters.pokemons
        }
    }

}
</script>

<style>

</style>