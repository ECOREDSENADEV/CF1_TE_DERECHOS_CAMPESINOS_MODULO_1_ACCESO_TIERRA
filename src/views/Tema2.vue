<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Retos que enfrentan los campesinos: acceso a las tierras y su cultivo
    
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Actualmente, uno de los principales problemas que afectan al campesinado en Colombia, y que impacta directamente su economía, su cultura y su tejido social, es la concentración de la tierra rural. Este fenómeno ha profundizado la desigualdad en el campo y ha limitado las posibilidades de desarrollo para millones de familias campesinas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué es la concentración de la tierra rural?
    
    p.mb-5 La concentración de la tierra rural es el proceso mediante el cual grandes extensiones de tierra agrícola o rural quedan en manos de un número reducido de personas, familias o empresas. En otras palabras, pocas personas son dueñas de mucha tierra, mientras que la mayoría de la población campesina tiene muy poca o ninguna. Este problema es histórico en Colombia y responde a múltiples causas estructurales. A continuación se presentan las principales causas que han llevado a la concentración de la tierra en Colombia:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Herencia colonial desigual
              p Desde el periodo colonial, el sistema de encomienda favoreció la acumulación de tierras en pocas manos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Reformas agrarias fallidas
              p La redistribución justa de la tierra ha sido débil, mal implementada o detenida por intereses políticos y económicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conflicto armado y desplazamiento
              p Millones de campesinos fueron desplazados por la violencia, y muchas tierras fueron tomadas ilegalmente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acaparamiento por grandes empresas
              p Empresas agroindustriales, mineras o ganaderas han comprado extensas zonas rurales, aprovechando vacíos legales o la vulnerabilidad de pequeños propietarios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Debilidad institucional
              p La falta de catastros actualizados, ausencia de titulación formal y escasa vigilancia han facilitado acumulaciones irregulares de tierra.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Especulación de tierras
              p Algunas empresas o individuos compran tierras rurales solo como inversión, sin utilizarlas productivamente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desigual acceso a recursos
              p Sin acceso a crédito, asistencia técnica o mercados justos, muchos campesinos se ven obligados a vender sus tierras a bajo costo.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Consecuencias de la concentración de tierras
    
    p.mb-5 La concentración excesiva de tierras genera graves impactos económicos, sociales y ambientales:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Desigualdad social
                p.text-center Una minoría concentra la riqueza, mientras la mayoría campesina queda sin tierra o con parcelas insuficientes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Desplazamiento y pobreza rural
                p.text-center Muchas familias migran a las ciudades o trabajan en condiciones precarias.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Menor producción diversificada
                p.text-center Las grandes propiedades tienden a especializarse en monocultivos o ganadería extensiva, reduciendo la variedad de alimentos disponibles.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Riesgos para la seguridad alimentaria
                p.text-center Disminuye la producción local de alimentos diversos, aumentando la dependencia de productos externos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Deterioro ambiental
                p.text-center Los monocultivos y la ganadería extensiva degradan el suelo, intensifican el uso de agroquímicos y afectan negativamente los ecosistemas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Conflictos por el uso del territorio
                p.text-center Surgen tensiones y enfrentamientos entre comunidades campesinas y grandes propietarios.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/9.svg', alt='')

        .row.align-items-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-8.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema2/17.svg", style="max-width: 270px").mx-auto
                .col-lg
                  div.bg-white.tarjeta.p-4
                    h5 ¿Sabías que …?
                    p Según el informe del Instituto Geográfico Agustín Codazzi (IGAC, 2023):
                    p.mb-0 El 1% de los propietarios particulares de tierras rurales en Colombia (25.293 propietarios analizados) posee el 46,1% del total del área rural, equivalente a 17.125.287,8 hectáreas de las 37.121.574 hectáreas examinadas en el estudio.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Fragmentación de la tierra rural
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La fragmentación de la tierra rural es el proceso mediante el cual una propiedad agrícola o rural se divide en parcelas cada vez más pequeñas, generalmente a lo largo del tiempo y entre distintos propietarios o generaciones. En otras palabras, una finca grande termina convertida en muchas parcelas pequeñas, muchas veces tan reducidas que ya no permiten una producción agrícola rentable ni sostenible. Esta situación afecta gravemente la capacidad productiva del campo colombiano y es resultado de varios factores sociales, económicos e institucionales. Las causas de la fragmentación de la tierra rural en Colombia son:
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Herencia entre familiares").ms-5
            p.mb-0 Cuando una finca pasa de padres a hijos, suele dividirse en partes iguales. Con el tiempo, cada generación fragmenta aún más la propiedad, reduciendo el tamaño útil de cada parcela.
          div(titulo="Necesidades económicas").ms-5
            p.mb-0 Muchos campesinos venden parte de sus tierras para sobrevivir o enfrentar deudas, lo que genera más propietarios sobre una misma extensión de terreno originalmente unificada.
          div(titulo="Migración del campo a la ciudad").ms-5
            p.mb-0 Los jóvenes que migran dejan la tierra en manos de quienes se quedan, quienes tienden a dividirla para repartirla o venderla por partes.
          div(titulo="Falta de políticas agrarias claras").ms-5
            p.mb-0 La ausencia de leyes efectivas y control estatal permite que la tierra se siga dividiendo sin criterios técnicos ni límites productivos mínimos.
          div(titulo="Ausencia de títulos de propiedad claros").ms-5
            p.mb-0 Cuando no hay documentos que definan bien los límites de una propiedad, se generan divisiones informales que agravan la fragmentación.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Por qué es un problema la fragmentación de las tierras rurales?

    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        .row.align-items-center.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p La fragmentación de la tierra rural es un problema porque reduce la capacidad de producción, dificulta el uso de tecnologías, agota más rápido los recursos naturales y profundiza la pobreza y la inseguridad alimentaria en el campo
            .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema2/21.svg", style="max-width: 270px").mx-auto
                .col-lg
                  div.bg-white.tarjeta.p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fas.fa-leaf.bg-color-7
                        p.mb-0 Las parcelas pequeñas no permiten producir suficiente para sostener económicamente a una familia campesina.
                      li.mb-0.d-flex
                        i.fas.fa-leaf.bg-color-7
                        p.mb-0 Es difícil usar maquinaria o nuevas tecnologías en espacios tan reducidos, lo que limita la productividad.
                      li.mb-0.d-flex
                        i.fas.fa-leaf.bg-color-7
                        p.mb-0 Se agotan más rápido los recursos como el suelo y el agua, debido a la sobreexplotación en áreas pequeñas.
                      li.mb-0.d-flex
                        i.fas.fa-leaf.bg-color-7
                        p.mb-0 Aumenta la pobreza rural y la inseguridad alimentaria, ya que el rendimiento agrícola disminuye drásticamente.
            
            p.mb-0 La fragmentación también puede observarse a través de la clasificación de los predios rurales según su extensión:
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1
              span Clasificación de predios rurales según su tamaño
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th.p-3.bg-color-11 Tipo de predio
                    th.p-3.bg-color-11 Tamaño (hectáreas)
                tbody.bg-color-12
                  tr
                    th.p-3 Microfundio
                    td.p-3 0 a 3 ha
                  tr
                    th.p-3 Minifundio
                    td.p-3 Más de 3 hasta 10 ha
                  tr
                    th.p-3 Pequeña propiedad
                    td.p-3 Más de 10 hasta 20 ha
                  tr
                    th.p-3 Mediana propiedad
                    td.p-3 Más de 20 hasta 200 ha
                  tr
                    th.p-3 Latifundio
                    td.p-3 Más de 200 ha

    .row.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/23.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-8.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema2/24.png", style="max-width: 270px").mx-auto
                .col-lg
                  div.bg-white.tarjeta.p-4
                    h5 ¿Sabías que …?
                    p.mb-0 Según el informe del Instituto Geográfico Agustín Codazzi (IGAC, 2023), en departamentos como Antioquia, Cundinamarca y Boyacá, cerca del 80% de los predios rurales son microfundios. En cambio, en Vichada y Caquetá, alrededor del 80% de los predios corresponden a mediana propiedad o latifundios, lo que evidencia grandes contrastes en el uso y la distribución del suelo rural en Colombia.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Urbanización
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/25.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La urbanización es el crecimiento de las ciudades hacia las zonas rurales. Este proceso incluye la construcción de viviendas, carreteras, industrias, centros comerciales y otros servicios en territorios que anteriormente eran campos o zonas campesinas. A medida que las ciudades se expanden, las poblaciones rurales enfrentan profundas transformaciones en su forma de vida. A continuación, se presentan los principales efectos de la urbanización sobre las comunidades campesinas:
  
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 a)	Pérdida de tierras de cultivo
              p Muchas fincas y parcelas se venden o son expropiadas para construir infraestructura urbana. Esto reduce el espacio destinado a la agricultura y la ganadería, afectando la producción de alimentos. En algunos casos, las mejores tierras terminan cubiertas por asfalto, como ocurre en la sabana de Bogotá y municipios aledaños.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/26-1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 b)	Desplazamiento de comunidades
              p Los campesinos son forzados a abandonar sus tierras debido a la presión económica, grandes proyectos de infraestructura o el aumento del valor del suelo. Este fenómeno causa desarraigo y pérdida de sus formas tradicionales de vida. En los años 80 y 90, muchas ciudades crecieron de forma desordenada, provocando desplazamientos masivos. Actualmente, se intenta mitigar este efecto mediante los Planes y Esquemas de Ordenamiento Territorial, que imponen límites al crecimiento urbano.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 c)	Aumento del costo de vida
              p En las zonas donde antes había campo, los servicios públicos, alimentos, arriendos y transporte se encarecen. Las familias campesinas no pueden sostenerse con sus ingresos tradicionales, lo que las obliga a cambiar de trabajo o a desplazarse a zonas más económicas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/28.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 d)	Contaminación y daño ambiental
              p La expansión urbana genera contaminación del aire, el agua y el suelo, afectando la salud humana y reduciendo la calidad del entorno para la producción agrícola.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/29.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 e)	Pérdida de cultura campesina y tejido social
              p La llegada de la ciudad transforma las costumbres, el trabajo y la vida comunitaria. Las nuevas generaciones pierden el interés por el trabajo agrícola, provocando un quiebre en la transmisión del conocimiento rural.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/30.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 f)	Conflictos por el uso del territorio
              p Surgen enfrentamientos entre comunidades campesinas y actores como empresas constructoras, mineras o entidades estatales por el control del suelo y los recursos naturales, especialmente el agua. También hay tensiones por la contaminación y disposición de residuos generados por zonas urbanas.

    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Por qué la urbanización constituye un peligro para la población campesina?
        
        p.mb-5 La urbanización representa un riesgo significativo para las comunidades rurales porque transforma su entorno, debilita su economía y amenaza su forma de vida. Entre las principales consecuencias se encuentran:

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-13.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/31.svg', alt='Texto que describa la imagen')
              div.text-white.text-center
                h4 01
                p Aumenta la desigualdad entre el campo y la ciudad
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-13.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/32.svg', alt='Texto que describa la imagen')
              div.text-white.text-center
                h4 02
                p Debilita la seguridad alimentaria del país.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-13.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/33.svg', alt='Texto que describa la imagen')
              div.text-white.text-center
                h4 03
                p Empobrece al campesinado, al limitar sus fuentes de sustento.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-13.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/34.svg', alt='Texto que describa la imagen')
              div.text-white.text-center
                h4 04
                p Destruye la biodiversidad y afecta el equilibrio de los ecosistemas rurales.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Cambio climático

    .row.align-items-center.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/35.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            h5 El clima se define como el conjunto de condiciones atmosféricas como la temperatura, la humedad, el viento, la presión atmosférica y la precipitación, que caracterizan una región durante largos períodos de tiempo, generalmente de 30 años o más. Estas condiciones definen los ecosistemas y determinan las actividades humanas que pueden desarrollarse en cada territorio.
            p.mb-5 En las últimas décadas, sin embargo, se ha evidenciado una alteración significativa y duradera de estos patrones climáticos, tanto a nivel global como regional. A este fenómeno se le conoce como cambio climático, y su principal causa es la actividad humana, en particular la emisión de gases de efecto invernadero como el dióxido de carbono (CO₂), el metano y los óxidos de nitrógeno. Estos gases intensifican el calentamiento global, lo cual desencadena una serie de efectos adversos en el ambiente.
            .bg-color-1.tarjeta.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema2/36.png", style="max-width: 270px").mx-auto
                .col-lg
                  div.bg-white.tarjeta.p-4
                    p Entre los principales fenómenos asociados al cambio climático se encuentran:
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fas.fa-leaf.bg-color-7
                        p.mb-0 Cambios en los patrones de lluvia
                      li.mb-0.d-flex
                        i.fas.fa-leaf.bg-color-7
                        p.mb-0 Incremento de la temperatura promedio
                      li.mb-0.d-flex
                        i.fas.fa-leaf.bg-color-7
                        p.mb-0 Derretimiento de glaciares
                      li.mb-0.d-flex
                        i.fas.fa-leaf.bg-color-7
                        p.mb-0 Aumento del nivel del mar
                      li.mb-0.d-flex
                        i.fas.fa-leaf.bg-color-7
                        p.mb-0 Mayor frecuencia e intensidad de eventos extremos (sequías, inundaciones, tormentas, etc.)
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Cómo afecta el cambio climático a la población campesina?
    
    p.mb-5 La población campesina depende directamente del clima para su subsistencia, su producción agrícola y su vida comunitaria. Los cambios climáticos impactan múltiples dimensiones de su realidad cotidiana, como se presenta a continuación: 

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Económica" :icono="require('@/assets/componentes/2.svg')")
        .row.align-items-center.p-4
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Económica
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Pérdidas de cultivos debido a lluvias irregulares o sequías prolongadas (afectan café, maíz, papa, yuca, hortalizas, entre otros)
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Disminución de ingresos por menor producción
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Aumento en los costos de producción por la necesidad de riego, fertilizantes y tecnologías adaptativas
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Pérdida de ganado por calor extremo, escasez de agua e inundaciones
          .col-md-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/37.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Social" :icono="require('@/assets/componentes/3.svg')")
        .row.align-items-center.p-4
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Social
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Migración forzada hacia zonas urbanas debido a condiciones climáticas extremas
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Desintegración familiar y comunitaria a causa de la migración
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Conflictos por recursos escasos como el agua y las tierras fértiles o no inundables
          .col-md-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/38.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Cultural" :icono="require('@/assets/componentes/4.svg')")
        .row.align-items-center.p-4
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Cultural
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Pérdida de saberes ancestrales, al no poder continuar con prácticas tradicionales
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Desvalorización del campesinado, al verse afectada su productividad y su rol dentro de la sociedad
          .col-md-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/39.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Ambiental" :icono="require('@/assets/componentes/5.svg')")
        .row.align-items-center.p-4
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Ambiental
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Degradación del suelo por sobreexplotación para compensar pérdidas
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Pérdida de biodiversidad por alteraciones en temperatura, humedad y lluvias
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Mayor uso de agroquímicos para enfrentar nuevas plagas, lo que contamina suelos y fuentes hídricas
          .col-md-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/40.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Salud" :icono="require('@/assets/componentes/6.svg')")
        .row.align-items-center.p-4
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Salud
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Aumento de enfermedades transmitidas por vectores como el dengue o la malaria, debido a la expansión de mosquitos en zonas templadas y altas
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Malnutrición como consecuencia de la escasez o el encarecimiento de los alimentos
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Estrés y afectaciones en la salud mental por pérdidas económicas y la incertidumbre
          .col-md-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/41.png', alt='Texto que describa la imagen')  
    
    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Qué se puede hacer para mitigar los efectos del cambio climático en las comunidades campesinas?
        
        p.mb-5 La respuesta involucra acciones coordinadas entre el Estado, las comunidades rurales, la academia y la sociedad civil. Algunas estrategias clave incluyen:

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-13.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/42.svg', alt='Texto que describa la imagen')
              div.text-white.text-center
                h4 Políticas públicas adaptativas
                p Implementar seguros agrícolas, garantizar el acceso a tecnologías apropiadas e incentivar económicamente a los productores rurales.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-13.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/43.svg', alt='Texto que describa la imagen')
              div.text-white.text-center
                h4 Educación climática rural
                p Capacitar a las comunidades en prácticas agrícolas sostenibles y resilientes, es decir, que se adapten al entorno cambiante sin perder productividad.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-13.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/44.svg', alt='Texto que describa la imagen')
              div.text-white.text-center
                h4 Inversión en ciencia y tecnología agropecuaria
                p Desarrollar cultivos resistentes al cambio climático, modificar prácticas de riego, manejo del sombrío, nutrición del suelo y uso de material genético adaptado.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-13.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/45.svg', alt='Texto que describa la imagen')
              div.text-white.text-center
                h4 Fortalecer la organización campesina
                p Impulsar la participación en decisiones políticas, fortalecer sus redes de apoyo y garantizar la protección de sus derechos territoriales, culturales y sociales.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Dificultades para conseguir mercados y bajos precios
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/46.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los campesinos colombianos enfrentan múltiples obstáculos para vender sus productos agropecuarios. Aunque producen gran parte de los alimentos que abastecen a la población, no siempre logran obtener un precio justo ni acceder fácilmente a los mercados. Las condiciones económicas, logísticas y estructurales limitan seriamente su capacidad de competir en igualdad de condiciones. A continuación, se presentan las principales causas de esta problemática:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/47.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 a)	Problemas de transporte
              p Muchos campesinos viven en zonas rurales alejadas con vías en mal estado o inexistentes durante buena parte del año. Esto encarece y ralentiza el transporte de los productos hacia las ciudades. En muchos casos, los alimentos se dañan antes de llegar a su destino, provocando la pérdida de parte de la cosecha.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/48.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 b) Intermediarios con mayor ganancia
              p Debido a la imposibilidad de acceder directamente a los mercados, los campesinos deben vender a intermediarios o revendedores, quienes compran a precios muy bajos y revenden con altos márgenes en las ciudades. Esta cadena desigual deja al campesino con una mínima parte del valor del producto, muchas veces sin cubrir siquiera los costos de producción.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/49.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 c)	Precios bajos e inestables
              p La sobreproducción de cultivos como papa, cebolla y hortalizas puede hacer que los precios caigan drásticamente. Como los campesinos no tienen control sobre el mercado, pueden tener ganancias un día y pérdidas al siguiente. La falta de mecanismos estatales de regulación agrava esta situación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/50.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 d)	Falta de créditos y apoyo financiero
              p La mayoría de los pequeños productores no tienen acceso a créditos para invertir en herramientas, transporte, almacenamiento o mejoras en sus prácticas agrícolas. Esta falta de financiamiento limita sus posibilidades de crecimiento y competitividad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/51.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 e)	Competencia desleal con productos importados
              p En Colombia se importan alimentos como el maíz y otros insumos para alimentación animal a precios bajos. Estos precios no reflejan el verdadero costo de producción, ya que en sus países de origen reciben subsidios estatales. Esto deja al productor nacional en desventaja, con cosechas que no puede vender por ser más costosas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/52.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 f)	Contrabando de alimentos
              p A esto se suma el ingreso irregular de productos como papa y arroz, que entran de contrabando sin control sanitario ni legal. Esta sobreoferta ilegal genera una baja en los precios y perjudica gravemente a los agricultores nacionales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/53.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 g)	Falta de canales de venta directa
              p No existen suficientes ferias campesinas, mercados locales o programas de compras estatales que conecten directamente a los productores con los consumidores. Si estos canales fueran fortalecidos, el campesino ganaría más y el consumidor pagaría menos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué estrategias pueden solucionar esta problemática?
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/54.png", data-aos="zoom-in")
      .col-lg-8
        p Para transformar esta situación y garantizar una comercialización más justa para el campesinado, es necesario implementar políticas públicas y acciones colectivas. Algunas estrategias clave incluyen:
        .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
          div.bg-white.tarjeta.p-4
            ul.lista-ul--color
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Mejorar las vías y el transporte rural</b> para facilitar el acceso a los mercados.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Eliminar intermediarios</b>, creando canales directos entre campesino y consumidor.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Establecer precios mínimos garantizados</b> para productos básicos del campo.ñas.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Impulsar compras públicas</b> de alimentos campesinos para escuelas, hospitales, instituciones y programas sociales.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Facilitar créditos y asistencia técnica</b> a pequeños productores rurales.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Proteger al campesinado frente a las importaciones subsidiadas</b> y combatir el contrabando con controles eficaces.


</template>

<script>
export default {
  name: 'Tema2',
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
