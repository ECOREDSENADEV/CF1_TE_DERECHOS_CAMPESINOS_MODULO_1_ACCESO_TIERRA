<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Reforma agraria en Colombia 
    
    .row.mb-5.justify-content-center
      .col-lg-6.col-xl-4.mb-3.mb-xl-0
        .bg-color-4.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La reforma agraria en Colombia ha sido uno de los procesos sociales y políticos más complejos de la historia del país. Desde la época colonial hasta la actualidad, la tierra ha estado en el centro de disputas, desigualdades y conflictos que han marcado profundamente la vida rural. La concentración en latifundios, la precariedad de los minifundios, el despojo violento y la falta de acceso de campesinos, indígenas y comunidades afrodescendientes han generado un escenario de exclusión que todavía se intenta superar.
      .col-lg-6.col-xl-4.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema1/1.png" data-aos="zoom-in")
      .col-lg-6.col-xl-4.mb-3.mb-xl-0
        .bg-color-5.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") A lo largo de los siglos XX y XXI, distintos gobiernos han planteado leyes, programas e instituciones para redistribuir, formalizar o restituir la tierra, con avances importantes pero también con retrocesos y limitaciones. La introducción de la función social de la propiedad, la creación del INCORA en los años sesenta, el freno que significó el Pacto de Chicoral en los setenta, la Constitución de 1991 con el reconocimiento del acceso progresivo a la tierra, la Ley de Víctimas y Restitución de Tierras de 2011 y, más recientemente, la Reforma Rural Integral del Acuerdo de Paz, son hitos que evidencian el carácter pendular de este proceso.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-6.tarjeta.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 190px").mx-auto
            .col-lg
              p.mb-0 Hoy, la reforma agraria se entiende no solo como la redistribución de predios, sino como una transformación integral que incluye acceso, formalización, justicia agraria, inversión en infraestructura, educación, salud, crédito y acompañamiento productivo. Este camino refleja la persistente búsqueda de saldar una deuda histórica con el campo colombiano y construir una base sólida para la paz y el desarrollo.
        p(data-aos="fade-left") A continuación, se presenta la línea de tiempo de la reforma agraria en Colombia, en la que se presentan  los principales periodos históricos, los contextos sociales y políticos, así como la normativa clave que ha marcado la evolución de este proceso:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        PasosB.color-acento-contenido.bg-color-white-1.p-4
          .row(titulo="Antecedentes <br> (siglo XIX - 1930)").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-md-0
              h4 Antecedentes (siglo XIX - 1930)
              p Se consolida la estructura bimodal de la tierra entre latifundio y minifundio. Persisten conflictos sociales y étnicos, mientras la economía cafetera impulsa nuevas colonizaciones. Las leyes de desamortización (1861) terminan concentrando tierras en terratenientes.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/4.svg', alt='Texto que describa la imagen')
          .row(titulo="1930 - 1946 <br> Primeros intentos").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-md-0
              h4 1930 - 1946 Primeros intentos
              p Tras la crisis de 1929, López Pumarejo impulsa “La Revolución en Marcha”. Se establece la función social de la propiedad y se habilita la expropiación de tierras improductivas. Normas clave: Ley 200 de 1936 y Ley 100 de 1944.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/5.svg', alt='Texto que describa la imagen')
          .row(titulo="1958 - 1972 <br> Reforma agraria desarrollista ").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-md-0
              h4 1958 - 1972 Reforma agraria desarrollista
              p Se crea el INCORA y se fomenta la colonización dirigida. La ANUC presiona por redistribución de tierras. El gobierno de Lleras Restrepo fortalece la reforma con infraestructura y crédito. Normativa: Ley 135 de 1961, Acto Legislativo de 1968 y Ley 1 de 1968.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/6.svg', alt='Texto que describa la imagen')
          .row(titulo="1972 - 1990 <br> Contrarreforma").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-md-0
              h4 1972 - 1990 Contrarreforma
              p El Pacto de Chicoral frena la redistribución y prioriza colonización de baldíos. El Programa DRI ofrece asistencia técnica y crédito, sin cambios estructurales. El narcotráfico y paramilitarismo provocan despojo violento y concentración de tierras. Normativa: Leyes 4 y 5 de 1973, Ley 6 de 1975 y Ley 30 de 1988.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/7.svg', alt='Texto que describa la imagen')
          .row(titulo="1991 - 2002 <br> Nuevo marco constitucional").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-md-0
              h4 1991 - 2002 Nuevo marco constitucional
              p La Constitución de 1991 reconoce la función social y ecológica de la propiedad y ordena acceso progresivo a la tierra. Se crean las Zonas de Reserva Campesina y se avanza en titulación colectiva para comunidades negras e indígenas. Normativa: Ley 70 de 1993, Ley 160 de 1994 y Decreto 1777 de 1996.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/8.svg', alt='Texto que describa la imagen')
          .row(titulo="2003 - 2010 <br> Reingeniería institucional").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-md-0
              h4 2003 - 2010 Reingeniería institucional
              p Se liquida el INCORA y se crea el INCODER. Se expide el Estatuto de Desarrollo Rural (Ley 1152 de 2007), pero es declarado inexequible en 2009 por falta de consulta previa.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/9.svg', alt='Texto que describa la imagen')
          .row(titulo="2011 - 2015 <br> Restitución de tierras y víctimas").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-md-0
              h4 2011 - 2015 Restitución de tierras y víctimas
              p Se prioriza la atención a víctimas del despojo. La Ley 1448 de 2011 establece jueces especializados y mecanismos de restitución administrativa o judicial. Decretos de 2011 complementan la reparación a comunidades étnicas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/10.svg', alt='Texto que describa la imagen')
          .row(titulo="2016 - presente <br> Reforma rural integral ").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-md-0
              h4 2016 - presente Reforma rural integral 
              p Con el Acuerdo de Paz (2016) se define la RRI: Fondo de Tierras, formalización, Catastro Multipropósito y PDETs. Normativa: Ley 1776 de 2016, Decreto Ley 902 de 2017, Decretos 893 y 896 de 2017, Ley 1955 de 2019, Ley 2078 de 2021, Acuerdo Gobierno–FEDEGÁN 2022, Ley 2294 de 2023 y Acto Legislativo 03 de 2023. Avances recientes incluyen la Jurisdicción Agraria, recuperación de baldíos, titulación colectiva y fortalecimiento del Catastro Multipropósito.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/11.svg', alt='Texto que describa la imagen')
    
    p.mb-5 A continuación, se explica con detalle la trayectoria de la reforma agraria en Colombia, resaltando los principales momentos históricos junto con los factores sociales y políticos que los acompañaron. También se incluyen las disposiciones normativas que influyeron en cada etapa, lo que permite comprender cómo se ha configurado el acceso y la distribución de la tierra en el país.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Antecedentes (Siglo XIX - 1930)").ms-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se consolida la estructura bimodal de la tierra: latifundio (grandes extensiones de tierra en manos de pocas familias, muchas veces improductivas) y minifundio (pequeñas parcelas insuficientes para la subsistencia).
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Persisten conflictos entre terratenientes, colonos, campesinos e indígenas.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 La economía cafetera impulsa la colonización de nuevas zonas, generando disputas por la propiedad.
            p.mb-0 <b>Norma clave</b>: leyes de desamortización de bienes de manos muertas (1861). Aunque buscaban liberar tierras de la Iglesia, terminaron concentradas en manos de terratenientes.
          div(titulo="1930 - 1946: Primeros intentos").ms-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 La crisis económica de 1929 aumenta la pobreza rural y la presión sobre la tierra.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 En el gobierno de Alfonso López Pumarejo surge la consigna “La Revolución en Marcha”, que busca modernizar el Estado y atender demandas sociales.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se introduce la función social de la propiedad: la tierra debe usarse productivamente, de lo contrario el Estado puede intervenir.
            p <b>Normativa</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 200 de 1936</b>: consagra la función social de la propiedad, habilita expropiación de tierras improductivas no explotadas por más de 10 años.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 100 de 1944</b>: ajustes en aparcería y arrendamiento rural, buscando proteger a colonos y arrendatarios.
          div(titulo="1958 - 1972: Reforma agraria desarrollista").ms-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Influenciada por la Alianza para el Progreso y el contexto de la Revolución Cubana.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se crea el INCORA (Instituto Colombiano de la Reforma Agraria) como brazo ejecutor de la política de tierras.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se impulsa la colonización dirigida, la adjudicación de baldíos y la expropiación con indemnización.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Surge la ANUC (Asociación Nacional de Usuarios Campesinos) que organiza invasiones y exige redistribución de tierras.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 El gobierno de Carlos Lleras Restrepo (1966–1970) da mayor fuerza a la reforma.
            p <b>Normativa</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 135 de 1961</b>: crea el INCORA, habilita adquisición y dotación de tierras a campesinos, construcción de infraestructura (riego, vías) y oferta de crédito. Se centra en expropiar tierras improductivas.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Acto legislativo de 1968</b>: refuerza la expropiación por vía administrativa con indemnización previa
            p.mb-0 <b>Ley 1 de 1968</b>: fortalece la ley anterior, protegiendo a arrendatarios y aparceros.
          div(titulo="1972 - 1990: Contrarreforma").ms-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Pacto de Chicoral (1972–1973): acuerdo político entre gobierno y gremios terratenientes que frena la redistribución y prioriza la colonización de baldíos.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se impulsa el Programa DRI (Desarrollo Rural Integrado), con énfasis en asistencia técnica y crédito, sin redistribución de tierras.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Auge del narcotráfico y paramilitarismo: se compran más de 6 millones de hectáreas como lavado de activos y mecanismo de control territorial, acompañado de despojo violento a campesinos.
            p <b>Normativa</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 4 de 1973</b> y Ley 5 de 1973: materializan el Pacto de Chicoral, elevan la indemnización y restringen causales de expropiación.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 6 de 1975</b>: consolida contrarreforma debilitando al INCORA.
            p.mb-0 <b>Ley 30 de 1988</b>: introduce la “Reforma Agraria de Mercado”, subsidios para que campesinos compren tierras en el mercado libre; su impacto fue limitado.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="1991 - 2002: Nuevo marco constitucional").ms-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 La Constitución de 1991 ordena al Estado promover el acceso progresivo a la propiedad de la tierra, reconoce la función social y ecológica de la propiedad y el apoyo al campesinado.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se avanza en la titulación colectiva a comunidades negras e indígenas y se crean las Zonas de Reserva Campesina (ZRC).
            p <b>Normativa</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Constitución de 1991:</b> arts. 58, 64–66.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 70 de 1993</b>: reconoce derechos territoriales a comunidades negras y establece la titulación colectiva.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 160 de 1994</b>: crea el Sistema Nacional de Reforma Agraria y Desarrollo Rural Campesino, liquida el INCORA y crea el INCODER, mantiene el modelo de subsidio para compra de tierras, e incorpora las ZRC.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Decreto 1777 de 1996</b>: reglamenta ZRC.
          div(titulo="2003 - 2010: Reingeniería institucional").ms-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se liquida el INCORA y se crea el INCODER (2003), reorganizando funciones de tierras y desarrollo rural.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se intenta unificar la normativa agraria con el Estatuto de Desarrollo Rural (Ley 1152 de 2007), pero es declarado inexequible en 2009 por falta de consulta previa.
            p <b>Normativa</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Decreto 1300 de 2003</b>: crea el INCODER.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 1152 de 2007 (EDR)</b>: declarada inexequible por Sentencia C-175 de 2009.
          div(titulo="2011 - 2015: Restitución de tierras y víctimas").ms-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 El despojo de tierras se convierte en estrategia de guerra y control territorial.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se reemplaza la agenda redistributiva por atención a víctimas.
            p <b>Normativa</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 1448 de 2011 (Ley de Víctimas y Restitución de Tierras)</b>: crea jueces especializados, invierte la carga de la prueba y permite la restitución administrativa o judicial de tierras despojadas.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Decretos 4633, 4634 y 4635 de 2011</b>: reparación y restitución a pueblos indígenas, ROM y comunidades negras.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Decreto 4800 de 2011</b>: reglamenta la implementación.

          div(titulo="2016 - Presente: Reforma Rural Integral (RRI)").ms-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Acuerdo de Paz con las FARC-EP (2016): punto 1 establece la Reforma Rural Integral, la más ambiciosa en 50 años.
            p <b>Pilares de la RRI</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Fondo de Tierras (3 millones de hectáreas para campesinos sin tierra).
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Formalización de 7 millones de hectáreas.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Catastro Multipropósito.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Programas de Desarrollo con Enfoque Territorial (PDET).
            p <b>Normativa y avances</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 1776 de 2016:</b> crea las ZIDRES.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Decreto Ley 902 de 2017</b>: principal herramienta de la RRI, crea la Agencia Nacional de Tierras (ANT) y la Agencia de Renovación del Territorio (ART).
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Decretos 893 y 896 de 2017</b>: PDETs y PNIS.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 1955 de 2019:</b> Plan Nacional de Desarrollo incluye Catastro.
            p <b>Multipropósito</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 2078 de 2021:</b> prórroga de la Ley de Víctimas hasta 2031.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Acuerdo Gobierno-FEDEGÁN (2022):</b> compra de hasta 3 millones de hectáreas a precio de mercado.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Ley 2294 de 2023 (PND 2022-2026)</b>: incorpora metas de la RRI.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 <b>Acto Legislativo 03 de 2023</b>: crea la Jurisdicción Agraria.
            p <b>Avances recientes (2024 - Actualmente)</b>: 
            ul.lista-ul--color.ms-3.pst
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Continuación de compras voluntarias de tierras por la ANT.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Uso de predios de la SAE y recuperación de baldíos.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Puesta en marcha de la Jurisdicción Agraria.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Aceleración del Catastro Multipropósito e interoperabilidad IGAC-SNR.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Impulso a ZRC y titulación colectiva étnica.
              li.mb-0.d-flex
                i.fas.fa-circle.fa-xs.bg-color-7
                p.mb-0 Enlace del acceso a la tierra con inversión productiva (extensión, crédito, vías).
   
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
