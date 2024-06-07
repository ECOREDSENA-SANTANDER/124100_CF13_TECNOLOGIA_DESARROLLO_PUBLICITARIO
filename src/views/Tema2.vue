<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.color-sistema 2
      h1 Plan de medios
    
    .row.justify-content-center.mb-5.bg5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/imag01.png' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              p El plan de medios es un derrotero que permite #[b generar interacción entre una marca y su mercado objetivo.] El plan de medios tiene una estructura única para el desarrollo coherente de la campaña publicitaria. 
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1  Elementos básicos de un plan de medios
    
    p.mb-3  En el siguiente video, se exponen claramente los elementos básicos de un plan de medio y sus características principales: 
    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Elementos básicos de un plan de medios
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2  Variables para el análisis de medios
    
    p.mb-4 Por otro lado, la planeación de medios implica conocer a fondo los canales por medio de los cuales se va llevar el mensaje al público objetivo, logrando que este llegue de la forma más eficiente posible y logre el cumplimiento de las metas planteadas para la campaña. Para conocer los medios y tener un criterio bien estructurado que permite tomar las decisiones más acertadas en cuanto a selección, jerarquización y peso de los medios para la campaña se requieren las siguientes variables:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder1.svg' alt='AvatarTop')
        h2.text-center Audiencia total
        p.text-center Es el promedio de personas que están en contacto con un medio en un periodo de tiempo establecido. En los medios digitales este dato se conoce como los visitantes o usuarios.

      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder2.svg' alt='AvatarTop')
        h2.text-center Penetración o consumo
        p.text-center Este dato está relacionado con un mercado objetivo específico, es la cifra promedio que un medio puede impactar de un target en particular.
      
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder3.svg' alt='AvatarTop')
        h2.text-center Share de audiencia
        p.text-center Esta variable indica el porcentaje de participación de un medio en relación con el total de la audiencia.
      
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder4.svg' alt='AvatarTop')
        h2.text-center Perfil de la audiencia
        p.text-center Cada medio, programa o sitio web tiene un público definido, esta variable indica el arquetipo de consumidor que un medio atrae, este debe caracterizarse desde el enfoque demográfico y psicográfico, con el fin que quienes compren un espacio comercial tengan claro a quién dirigen sus estrategias de comunicación.
      
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder5.svg' alt='AvatarTop')
        h2.text-center Coeficiente de afinidad
        p.text-center Esta variable indica el porcentaje de un determinado target al que el medio impacta del total de su audiencia.
      
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder6.svg' alt='AvatarTop')
        h2.text-center Audiencia útil
        p.text-center Es el promedio de personas que tienen contacto con un medio en un periodo en particular.
      
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/slyder7.svg' alt='AvatarTop')
        h2.text-center Ratint point
        p.text-center Corresponde al porcentaje de audiencia útil que tiene un medio del total de su audiencia.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Variables para el análisis de campañas
    
    p.mb-4 Otro grupo de variables que se revisten de gran importancia en el desarrollo de la campaña, son los indicadores numéricos que permiten determinar la eficiencia en cuanto a la inversión que la empresa va a realizar para el desarrollo de la campaña, estos cálculos son útiles para conocer de cada medio el promedio de alcance y el impacto que puede llegar a tener la campaña.

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarjeta1.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5.text-center Impactos: 
              p Se refiere al número de veces que el mensaje publicitario impacta al target.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarjeta2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5.text-center Gross Rating Points (GRP): 
              p Corresponden a la sumatoria de los porcentajes de la audiencia útil, la fórmula es la siguiente:
              img(src='@/assets/curso/temas/t2/formula.svg' alt='AvatarTop')

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarjeta3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5.text-center Costo Por Mil (CPM): 
              p El CPM indica la inversión que requiere una campaña para impactar mil veces al mercado objetivo. Este se calcula con la siguiente fórmula:
              img(src='@/assets/curso/temas/t2/formula2.svg' alt='AvatarTop')
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4  Variables para análisis de medios digitales
    
    p.mb-4 Los medios digitales tienen unas variables propias y muy específicas en el análisis de las cifras, la efectividad y la eficiencia de las campañas, estos datos permiten identificar el mix más oportuno para realizar las estrategias de comunicación y exponer el mensaje al mercado objetivo.
    
    .row.mb-4
      .col-lg-6
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | #[b Visitantes o usuarios:] corresponde al número total de usuarios que ingresan a un sitio web en un lapso en particular: en un día, semana o mes.
          li 
            i.fas.fa-feather
            | #[b Páginas vistas:] corresponden al número de páginas vistas de un sitio web en un periodo en particular y sirven para conocer la actividad de un sitio web.
          li 
            i.fas.fa-feather
            | #[b Impactos:] corresponde al número de veces que un usuario es impactado por un anuncio publicitario.
      .col-lg-6
        ul.lista-ul--color
          li 
            i.fas.fa-brain
            | #[b CPM (Costo Por Mil):] similar a los demás medios, es el costo de mil impactos o visualizaciones de un anuncio publicitario.
          li 
            i.fas.fa-brain
            | #[b CPC (Costo Por Clic):] es el costo por cada clic que realicen los usuarios en un anuncio en particular.
          li 
            i.fas.fa-brain
            | #[b Tasa de rebote:] corresponde a la cantidad de usuarios que ingresan a una landing page y no interactúan con ella.
    
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5  Cronogramas de medios
    
    p.mb-4 Con el fin que los mensajes sean divulgados y entregados de la forma más adecuada y eficiente posible, es necesario que la planificación de la pauta sea clara, tanto para los estrategas y los responsables de la empresa anunciante, como para los medios o para quienes realizan la compra en el caso de las redes sociales. #[b Se deben tener en cuenta los siguientes:]
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Cronograma para redes sociales / internet")
        .col-lg-12
          table.table.table-striped.m-0
            tbody
              tr
                td.table1 Red / plataforma
                td.table1 Tipo de campaña
                td.table1 Costo campaña
                td.table1 CPC
                td.table1 CPM
                td.table1 Fecha
                td.table1 Hora
              tr
                td.table2 Facebook
                td.table2 Grupo de anuncios
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
              tr
                td.table3 Instagram
                td.table3 Retargueting
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
              tr
                td.table2 Twitter
                td.table2 Video promocional
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
              tr
                td.table3 LinkedIn
                td.table3 Aumento Leads
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
              tr
                td.table2 Google Ads
                td.table2 Anuncio
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
              tr
                td.table3 YouTube
                td.table3 Texto
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
      
      .row(titulo="Cronograma para radio")
        .col-12
          table.table.table-striped.m-0
            tbody
              tr
                td.table1 Emisora
                td.table1 Programa
                td.table1 Duración cuña
                td.table1 Costo cuña
                td.table1 CPM
                td.table1 Fecha
                td.table1 Hora
              tr
                td.table2 W Radio
                td.table2 Sigue la w
                td.table2 15’’
                td.table2 3.000.000
                td.table2 120.000
                td.table2
                td.table2
              tr
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
              tr
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
              tr
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
      
      .row(titulo="Cronograma para revistas")
        .col-lg-12
          table.table.table-striped.m-0
            tbody
              tr
                td.table1 Revista
                td.table1 Ubicación
                td.table1 Tamaño anuncio
                td.table1 Costo anuncio
                td.table1 CPM
                td.table1 Fecha publicación
              tr
                td.table2 Semana
                td.table2 Derecha – columnas opinión
                td.table2 ½ Página horizontal
                td.table2 17.000.000
                td.table2 100.000
                td.table2
              tr
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
              tr
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
                td.table2
              tr
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3
                td.table3     

    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6  Presupuesto
    
    .row.mb-4
      .col-lg-7
        p Determinar el presupuesto de una campaña es tal vez la terea más difícil del proceso, pues es incierto saber o determinar el monto adecuado para tener los resultados esperados y la publicidad no es una ciencia exacta; aunque las plataformas de publicidad de redes sociales han logrado un acercamiento a un presupuesto bien definido, puesto que de ante mano se sabe a cuántas personas se puede impactar y cuánto costará llegar a ellas; sin embargo, no se puede saber aún cuántos de esos usuarios van a responder positivamente a la campaña y solo se puede hablar de estimados. Hay varios métodos para definir un presupuesto publicitario:
      .col-lg-5
        img(src='@/assets/curso/temas/t2/imag02.svg' alt='')
    
    PasosA.color-secundario.mb-5(tipo="l")
      div
        h3 Histórico de ventas: 
        p si la empresa tiene un recorrido importante en el mercado se puede hacer un estimado del mercado objetivo total, a partir del histórico de ventas, esto permite a la empresa saber que tan grande es el mercado y quiénes son los compradores.

      div
        h3 Utilidades brutas: 
        p en este caso el presupuesto de ventas se plantea con base en un porcentaje sobre las ventas. Es el método más recomendado, puesto que son los clientes los que deberían pagar por la información que reciben acerca del producto.

      div
        h3 Pronóstico
        p es un método incierto puesto que se destina el presupuesto sobre suposiciones o pronósticos que realiza la empresa estimando un potencial de mercado y de ventas.

      div
        h3 Histórico de campañas: 
        p es otro método recomendado, el cual se basa en lo invertido en campañas realizadas anteriormente por la empresa, esto permite determinar si lo invertido fue lo adecuado o si debe ajustarse el presupuesto para el logro de los objetivos.



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
