<template>

  <section class="src-components-resultados-choice">
    <div class="jumbotron">
      <h2>Respuestas múltiple choice</h2>
      <hr />
      <div class="table-responsive">
        <table class="table table-striped table-dark">
          <thead class="thead-dark">
            <tr>
              <th>Número de pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pregunta, index) in preguntas" :key="index">
              <td>
                {{pregunta.num}}
              </td>
              <td>
                {{getStringRespuestas(pregunta.respuesta)}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-resultados-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          {num: 1, respuesta: ['c']},
          {num: 2, respuesta: ['c']},
          {num: 3, respuesta: ['b']}
        ]
      }
    },
    methods: {
      getStringRespuestas(respuesta){
        let todasRespuestas = respuesta[0];
        for(let i=1; i<respuesta.length; i++){
          todasRespuestas += ", " + respuesta[i];
        }

        return todasRespuestas;
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-resultados-choice {

  }

  .jumbotron{
    background-color: seagreen;
  }
  
  h2{
    color: blue;
  }
</style>
