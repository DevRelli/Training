<template>
  <div id="app">
    <div class="container">
      <div class="columns is-vcentered">
          <figure class="pokeball">
          <img src="./assets/pokeball.png">
          </figure>
          <div class="title-with-addon m-5">
            <h2 class="is-size-2 has-text-centered">PokeDex</h2>
          </div>
          <span class="addon">by RelliDev</span>
      </div>
      <br>
      <input id="input-bar" type="text" placeholder="Buscar Pokemon" class="input is-rounded is-medium">
      <!-- <button class="button is-fullwidth is-primary is-dark" id="busca-btn" @click="buscar">Search</button> -->
      <br>
      <div class="columns is-multiline">
        <div v-for="(poke,index) in resultadoBusca" :key="poke.url" class="column">
          <PokemonComponent :name="poke.name" :url="poke.url" :num="index+1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonComponent from './components/PokemonComponent.vue'
export default {
  name: 'App',
  data(){
    return {
      pokemons: [],
      filteredPokemons: [],
      busca:''
    }
  },
  created: function(){
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(res => {
      console.log('Lista de pokemons coletada! 200 OK');
      this.pokemons = res.data.results;
      this.filteredPokemons = res.data.results;
    })
  },
  components:{
    PokemonComponent
  },
  methods:{
    buscar: function(){
      this.filteredPokemons = this.pokemons
        if(this.busca == '' || this.busca == ' '){
          this.filteredPokemons = this.pokemons;
        }else{
          this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name == this.busca)
        }
      }
  },
  computed:{
    resultadoBusca: function(){
      if(this.busca == '' || this.busca == ' '){
        return this.pokemons;
      }else{
        return this.pokemons.filter(pokemon => pokemon.name == this.busca)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
#busca-btn{
  margin-top: 2%;
}
#input-bar{
  margin-bottom: 2%;
}
.pokeball{
  max-width: 100px;
}
</style>
