<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <Cliente/>
  </div>
</template>

<script>
import Cliente from './components/Cliente'
export default {
  name: 'App',
  components: {
    Cliente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
