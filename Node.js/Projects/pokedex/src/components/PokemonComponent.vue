<template>
    <div id="pokemon">
        <div class="card custom-card">
        <div class="card-image">
            <figure>
            <img :src="currentImg" alt="Placeholder image"/>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-5">{{ num }}. {{ upperCase(name) }}</p>
                <p class="subtitle is-6">Type: {{ pokemon.type }}</p>
            </div>
            </div>
            <div class="content">
                <div class="buttons are-small">
                    <button class="button is-primary is-dark" @click="mudarSprite">Mudar Sprite</button>
                    <button class="button is-info is-dark" @click="normal">Normal</button>
                    <button class="button is-warning is-dark" @click="shinyEvo">Shiny</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created: function(){
        axios.get(this.url).then(res => {
            this.pokemon.type = res.data.types[0].type.name;
            this.pokemon.front_normal = res.data.sprites.front_default;
            this.pokemon.back_normal = res.data.sprites.back_default;
            this.pokemon.front_shiny = res.data.sprites.front_shiny;
            this.pokemon.back_shiny = res.data.sprites.back_shiny;
            this.currentImg = this.pokemon.front_normal
            console.log(this.pokemon)
        })
    },
    data(){
        return{
            isNormal: true,
            isFront: false,
            currentImg: '',
            isShiny: '',
            pokemon: {
                type: '',
                front: '',
                back: '',
                shiny: '',
            }
        }
    },
    props: {
        num: Number,
        name: String,
        url: String
    },
    methods:{
        upperCase(value){
            var newName = value[0].toUpperCase() + value.slice(1);
            return newName;
        },
        mudarSprite: function(){
            if(this.isNormal == true){
                if(this.isFront){
                    this.currentImg = this.pokemon.front_normal
                    this.isFront = false
                }else{
                    this.currentImg = this.pokemon.back_normal
                    this.isFront = true
                }
            }else{
                if(this.isFront){
                    this.currentImg = this.pokemon.front_shiny
                    this.isFront = false
                }else{
                    this.currentImg = this.pokemon.back_shiny
                    this.isFront = true
                }
            }
        },
        normal: function(){
            this.currentImg = this.pokemon.front_normal
            this.isNormal = true
        },
        shinyEvo: function(){
            this.currentImg = this.pokemon.front_shiny
            this.isNormal = false
        }
    }
}
</script>

<style>
 #pokemon{
    margin-top: 2%;
}
.custom-card{
    width: 300px; /* largura desejada */
    height: 275px; /* altura desejada */
    padding: 5px; /* preenchimento interno do card */
}
</style>