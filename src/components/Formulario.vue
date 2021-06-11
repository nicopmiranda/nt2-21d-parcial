<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
      <h2>Formulario</h2>
      <hr />
      <br />

      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
          <label class="mb-2" for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreLengthMin"
            :maxlength="nombreLengthMax"
            no-spaces
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
            </div>
            <div v-if="formData.nombre.length == nombreLengthMax"
              class="alert alert-warning mt-1">
              Este campo debe tener como máximo {{ nombreLengthMax }} caracteres
            </div>
            <div slot="no-spaces" class="alert alert-danger mt-1">
              <b>Este campo no permite espacios!!</b>
            </div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label class="mb-2" for="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.apellido"
            required
            :minlength="nombreLengthMin"
            :maxlength="nombreLengthMax"
            no-spaces
          />

          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
            </div>
            <div v-if="formData.apellido.length == nombreLengthMax"
              class="alert alert-warning mt-1">
              Este campo debe tener como máximo {{ nombreLengthMax }} caracteres
            </div>
            <div slot="no-spaces" class="alert alert-danger mt-1">
              <b>Este campo no permite espacios!!</b>
            </div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label class="mb-2" for="nota">Nota</label>
          <input
            type="number"
            id="nota"
            name="nota"
            class="form-control"
            autocomplete="off"
            v-model.number="formData.nota"
            required
            :min="notaMin"
            :max="notaMax"
          />

          <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La nota mínima es {{ notaMin }}
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La nota máxima es {{ notaMax }}
            </div>
          </field-messages>
        </validate>
        <br />

        <button class="btn btn-success my-3" :disabled="formState.$invalid"
          type="submit">Enviar</button>
      </vue-form>

      <div v-if="alumnos.length" class="table-responsive">
        <table class="table table-striped table-dark">
          <!-- Encabezado de la tabla -->
          <thead class="thead-dark">
            <tr>
              <th>
                Nombre y Apellido
              </th>
              <th>
                Nota
              </th>
            </tr>
          </thead>
          <!-- Filas con los datos -->
          <tbody>
            <tr v-for="(alumno, index) in alumnos" :key="index">
              <td >
                {{ alumno.nombre + ' ' + alumno.apellido }}
              </td>
              <td :style="{ color: colorNota(alumno.nota)}">
                {{ alumno.nota }}
              </td>
            </tr>
            <tr :style="{ color: colorNota(promedio)}">
              <td>
                <b>Promedio total:</b>
              </td>
              <td>
                <b>{{ calcularPromedio() }}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default {
    name: 'src-components-formulario',
    components: {},
    props: [],
    data () {
      return {
        formData : this.getInitialData(),
        formState : {},
        nombreLengthMin: 3,
        nombreLengthMax: 15,
        notaMin: 0,
        notaMax: 10,
        alumnos: [],
        promedio: null
      }
    },
    computed: {

    },
    mounted () {

    },
    methods: {
      getInitialData() {
        return {
          nombre: '',
          apellido: '',
          nota: ''
        }
      },
      agregarAlumno(alumno){
        this.alumnos.push(alumno);
      },
      getNombreCamposAlumnos(){
        return Object.keys(this.alumnos[0]);
      },
      calcularPromedio(){
        let totalNotas = 0;

        this.alumnos.forEach(alumno => {
          totalNotas+=alumno.nota;
        });
        this.promedio = totalNotas / this.alumnos.length;

        return this.promedio;
      },
      colorNota(nota){
        const notaBaja = 3;
        const notaMedia = 6;

        return nota <= notaBaja ? 'red' : nota <= notaMedia ? 'yellow' : 'green';
      },
      enviar() {
        this.agregarAlumno(this.formData);
        this.formData = this.getInitialData();
        this.formState._reset();
      }

    }
  }

</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron {
    background-color: salmon;
    color: white;
  }

  h2{
    color: turquoise;
  }
</style>
