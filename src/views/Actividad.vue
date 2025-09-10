<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Derechos campesinos y acceso al territorio en Colombia',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave sobre la reforma agraria, los derechos del campesinado, el acceso a la tierra y la sostenibilidad territorial en el contexto rural colombiano.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué institución fue creada en los años 60 como brazo ejecutor de la política de tierras en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'INCODER.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'INCORA.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'ANT.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'UPRA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál fue el principal efecto del Pacto de Chicoral en la política agraria colombiana?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentó la titulación de tierras colectivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Frenó la redistribución de tierras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Creó nuevas zonas de reserva campesina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disolvió la ANUC.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una de las principales consecuencias de la concentración de tierras en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desigualdad social y desplazamiento rural.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumento de la productividad agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción del monocultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución del precio de los alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de propiedad corresponde a predios de más de 200 hectáreas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mediana propiedad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Minifundio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pequeña propiedad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Latifundio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es uno de los efectos negativos de la urbanización en las zonas rurales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fortalecimiento de la cultura campesina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pérdida de tierras de cultivo y desplazamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento de la biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución de los precios de los productos agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué artículo de la Constitución reconoce al campesinado como sujeto de derechos y especial protección?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Artículo 65.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Artículo 58.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Artículo 64.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Artículo 1.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es uno de los pilares de la Reforma Rural Integral del Acuerdo de Paz de 2016?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento de monocultivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fondo de Tierras para campesinos sin tierra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Prohibición de importaciones agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Creación de la ley 101 de 1993.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué entidad lidera el reconocimiento de los Territorios Campesinos Agroalimentarios (TECAM)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio del Interior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Agencia Nacional de Tierras (ANT).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Defensoría del Pueblo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Consejo Nacional Agrario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una de las causas históricas de la fragmentación de la tierra en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Industrialización del campo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Herencia entre familiares.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Intervención de la banca internacional.',
              esCorrecta: false,
            },
            {
              id: 'e',
              texto: 'Prohibición de cultivos tradicionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué derecho protege el acceso a recursos como agua, aire, tierra y biodiversidad para los campesinos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Derecho a la vivienda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Derecho al territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Derecho a la movilidad.',
              esCorrecta: false,
            },
            {
              id: 'e',
              texto: 'Derecho a la educación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La Ley 160 de 1994 creó el INCORA para ejecutar la reforma agraria.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El Decreto 1004 de 2024 reglamenta la Comisión Mixta Nacional para Asuntos Campesinos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los Programas de Desarrollo con Enfoque Territorial (PDET) tienen una duración de 15 años.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La fragmentación de la tierra rural favorece la productividad del campo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El artículo 65 de la Constitución se refiere al derecho a la alimentación y a la protección de la producción campesina.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
