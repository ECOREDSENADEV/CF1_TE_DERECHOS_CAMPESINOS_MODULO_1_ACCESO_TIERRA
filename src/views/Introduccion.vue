<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-2.mb-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") El campesinado colombiano constituye una de las bases esenciales para la vida social, económica y cultural del país, dado que su existencia está directamente ligada a la tierra y los recursos naturales. Las actividades agrícolas, ganaderas y comunitarias que realizan no solo garantizan la subsistencia de millones de familias, sino que también sostienen la seguridad alimentaria nacional y la preservación de tradiciones que conforman la identidad rural. Por esta razón, comprender las dinámicas que afectan al campo resulta fundamental para analizar los retos y oportunidades que atraviesa el campesinado.

            .bg-color-1.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.order-2
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-xl.order-1.mb-3.mb-lg-0
                  .px-4.py-3
                    p.mb-0(data-aos="fade-up") A lo largo de la historia, las comunidades rurales han enfrentado dificultades como la concentración y fragmentación de tierras, la urbanización descontrolada, los efectos del cambio climático y las desventajas en el acceso a los mercados. Estos problemas han debilitado sus ingresos, la cohesión social y la permanencia en los territorios, generando exclusión y precariedad en sus condiciones de vida. Sin embargo, en medio de estos desafíos también se han impulsado reformas legales, políticas públicas y movimientos sociales que buscan garantizar el acceso equitativo a la tierra, la sostenibilidad productiva y la dignidad de quienes habitan en el campo.
        
        .bg-color-3
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En este contexto, el módulo aborda la relación entre campesinado, tierra y territorio, examinando los derechos que los respaldan y las normativas nacionales e internacionales que los protegen. Asimismo, se profundiza en las instituciones, mecanismos de participación y estrategias que permiten gestionar dichos derechos ante el Estado, promoviendo la equidad territorial, la soberanía alimentaria y el fortalecimiento comunitario. El propósito es brindar herramientas de análisis y acción que contribuyan a transformar el campo colombiano en un espacio más justo, sostenible e inclusivo.

</template>

<script>
export default {
  name: 'Introduccion',
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
