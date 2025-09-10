<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestiones para que se reconozcan los derechos de los campesinos
    
    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        .bg-color-14.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/1.png', alt='')
            .col-lg
              .p-4.text-white
                p.mb-0(data-aos="fade-up") La Defensoría del Pueblo es la entidad del Estado colombiano encargada de defender, promocionar, proteger y divulgar los derechos humanos, las garantías y libertades de los habitantes del país y de los colombianos residentes en el exterior. Actúa frente a actos ilegales, injustos, irrazonables, negligentes o arbitrarios, tanto de autoridades como de particulares.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Misión
        
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") Impulsar la efectividad de los derechos humanos en el marco del Estado Social de Derecho, mediante:
            .bg-color-9.tarjeta.p-4.mb-5(data-aos="fade-left")
              div.bg-white.tarjeta.p-4
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 La promoción, ejercicio y divulgación de los derechos humanos.
                  li.mb-2.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 La protección y defensa de dichos derechos y la prevención de sus violaciones.
                  li.mb-2.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 El fomento del cumplimiento del derecho internacional humanitario.
                  li.mb-2.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 La orientación y asesoría a la ciudadanía en el ejercicio de sus derechos.
                  li.mb-2.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 El acceso a la justicia en los casos determinados por la ley.
        
            .titulo-con-imagen.mb-3(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
                h3.titulo-con-imagen__texto Visión
            
            p.mb-5 Para el año 2028, la Defensoría del Pueblo se proyecta como una <b>voz líder, legítima e independiente</b>, que actúa con enfoque territorial, construye confianza y transforma los derechos en realidades.
          
            .titulo-con-imagen.mb-3(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
                h3.titulo-con-imagen__texto Funciones principales
            
            p.mb-5 A continuación, se presentan las funciones que le han sido asignadas por la ley:


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Orientación y educación
                p.text-center Orientar a la ciudadanía en la defensa de sus derechos y divulgar los derechos humanos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Acciones legales
                p.text-center Invocar el <em>Habeas Corpus</em>, interponer tutelas y acciones populares, y demandar normas ante la Corte Constitucional.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Defensoría pública
                p.text-center Organizar, dirigir y coordinar el Sistema Nacional de Defensoría Pública.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Propuestas legislativas
                p.text-center Presentar proyectos de ley y rendir informes al Congreso sobre su labor.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Promoción de derechos
                p.text-center Diseñar políticas con la Procuraduría para la promoción y divulgación de los derechos humanos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Recomendaciones e informes
                p.text-center Emitir recomendaciones ante violaciones o amenazas, y reportarlas al Congreso si es necesario.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Diagnósticos sociales
                p.text-center Impartir lineamientos para estudios sobre aspectos que impactan los derechos humanos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Vigilancia a privados
                p.text-center Establecer directrices para exhortar a organizaciones privadas a respetar los derechos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Educación constitucional
                p.text-center Difundir el conocimiento de la Constitución y los derechos fundamentales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Protección a poblaciones vulnerables
                p.text-center Formular estrategias para garantizar derechos de sujetos de especial protección constitucional.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Acciones judiciales
                p.text-center Defender la Constitución y el interés general ante cualquier jurisdicción.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mediación
                p.text-center Actuar como mediador entre ciudadanos y autoridades, o entre usuarios y empresas de servicios públicos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Trámite de peticiones
                p.text-center Establecer directrices para atender quejas por violaciones o amenazas de derechos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Registro de acciones legales
                p.text-center Administrar el Registro Público de Acciones Populares y de Grupo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Protocolos humanitarios
                p.text-center Adoptar protocolos para los servidores y contratistas de la Defensoría.
    
          .col-lg-3.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/3.png', alt='')

        separador
        
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.2 Personería  

        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/19.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-6.tarjeta.p-4.mb-3(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema4/20.png", style="max-width: 190px").mx-auto
                .col-lg
                  p.mb-0 La Personería es una entidad del Ministerio Público que actúa en el nivel local. Entre sus funciones más relevantes está la de ofrecer asesoría y orientación legal a la ciudadanía, con el fin de garantizar la protección de sus derechos fundamentales, así como velar por la correcta gestión administrativa en el ámbito municipal o distrital.
            p(data-aos="fade-left") Además, interviene en la defensa del interés público, promueve el respeto por los derechos humanos y actúa como vigilante del comportamiento de los servidores públicos.
    
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema4/21.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Ministerio de Agricultura, Agencia Nacional de Tierras
              p.text-small Se invita a leer el documento Ministerio de Agricultura, Agencia Nacional de Tierras, donde se aborda la estructura y funciones de la Agencia Nacional de Tierras como máxima autoridad en materia de tierras rurales en Colombia. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 ¿Cómo participar y solicitar el reconocimiento de derechos?
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/22.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Para reclamar y hacer efectivos los derechos en Colombia, especialmente los derechos campesinos, existen mecanismos legales y de participación ciudadana, tanto a nivel nacional como internacional. Estos recursos permiten a las personas defender sus derechos frente a actos de las autoridades o particulares, y participar activamente en el control social.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Derecho de petición
              p Permite a cualquier persona solicitar información, formular peticiones o exigir respuesta por parte de las autoridades, de manera respetuosa y escrita.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acción de tutela
              p Procedimiento judicial para proteger derechos fundamentales que hayan sido vulnerados o amenazados. Tiene carácter preferente y urgente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acciones populares
              p Mecanismo para proteger derechos e intereses colectivos, como el medio ambiente, el patrimonio público o la moral administrativa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Veedurías ciudadanas
              p Instrumentos de control social mediante los cuales los ciudadanos vigilan la gestión pública y la ejecución de proyectos o políticas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acción de cumplimiento
              p Busca que las autoridades o los particulares cumplan normas legales o actos administrativos que estén siendo ignorados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/28.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acción de grupo
              p Permite a varias personas (mínimo veinte) reclamar conjuntamente por daños ocasionados a derechos colectivos o fundamentales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/29.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conciliación
              p Mecanismo alternativo de resolución de conflictos en el cual un tercero imparcial ayuda a las partes a llegar a un acuerdo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/30.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Recursos ante la jurisdicción contencioso-administrativa
              p Procedimientos judiciales para impugnar decisiones administrativas que puedan vulnerar derechos o causar perjuicios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/31.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Instancias internacionales
              p Si se agotan los mecanismos internos, se puede acudir a la Comisión y la Corte Interamericana de Derechos Humanos, órganos del Sistema Interamericano de protección.

        

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
