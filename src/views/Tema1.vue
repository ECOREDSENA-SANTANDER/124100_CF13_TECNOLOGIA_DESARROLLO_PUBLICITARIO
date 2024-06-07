<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Medición de audiencias
    
    .row.mb-5.bg6
      .col-lg-4
        img(src='@/assets/curso/temas/t1/imag01.png', alt='')
      .col-lg-8.bg1
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h3 Medición de audiencias
        p En el desarrollo de una campaña publicitaria o una estrategia de comunicación, el factor más importante es la audiencia, por ello lo invitamos a descargar la siguiente infografía que servirá para introducir un poco más el tema.
        a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1  Fuentes de medición de audiencias
    
    .row.mb-5
      .col-lg-8
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span a
            | #[b Estudio General de Medios (EGM)]
        p.mb-4 El EGM es un estudio poblacional que busca una representación adecuada del universo objetivo, a través de una muestra interrogada acerca de su comportamiento en relación al consumo de medios, entre otras cosas.
        p.mb-4 La representación de los lectores, oyentes o espectadores es más una consecuencia que una premisa.
        p El EGM es un estudio multimedia, es decir, que estudia para cada individuo su comportamiento respecto a los distintos medios. La realidad social es multimedia, como lo es también en su mayor parte la realidad publicitaria.
      .col-lg-4
        img(src='@/assets/curso/temas/t1/imag02.svg', alt='')
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.bg2.p-4.mb-4
          p El EGM proporciona dos grandes tipos de datos sobre la audiencia: ¿cuántos son? y ¿cómo son?, es decir, cuál es su perfil en lo referente a variables sociodemográficas, geográficas, de estilo de vida, consumo y equipamiento.     
        h4 Es importante tener presente dos aspectos del EGM:
        ul.lista-ul--color.mb-4
          li 
            i.lista-ul__vineta
            | Los datos que genera el EGM son estadísticos y probabilísticos. 
          li 
            i.lista-ul__vineta
            | La información que se otorga hace referencia al número de lectores, espectadores, oyentes o usuarios de un medio, canal o cuenta en particular. Esta información indica el número de personas potencialmente sujetas al impacto del mensaje publicitario, indicando la cantidad de personas que potencialmente pueden llegar a ser impactadas por un anuncio.
        .row.bg3 
          p Basado en los estudios del ACIM Colombia (2015).
    
    .row.mb-3
      ol.lista-ol--cuadro
        li
          .lista-ol--cuadro__vineta
            span b
          | #[em Rating]
    .row.justify-content-center.mb-5
      .col-lg-10 
        .bloque-texto-g.bg4.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/imag03.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El rating es el indicador que define la cantidad de personas o espectadores que tiene un programa de televisión o radio. Este determina la proyección y la posible efectividad de una campaña publicitaria o anuncio que se exponga en uno de estos medios. El rating se mide en puntos, donde cada uno equivale a 100 mil personas, entonces si se habla de 5 puntos de rating, eso significa que 500 mil personas están viendo un programa de televisión o escuchando uno de radio a una hora determinada.
        .cajon.bg2.p-4.mb-4
          p En Colombia se generan informes del #[em rating] de forma periódica, parte de esa información es de acceso público. La empresa Ibope es quien desarrolla dicha medición desde hace casi 30 años de la misma forma que lo hace en otros países de Latinoamérica.
        
        h4 Medición de #[em rating]
        p.mb-4 En la actualidad y gracias a la tecnología y a la conectividad de la televisión, el proceso es 100% digital, a través de un dispositivo llamado #[b People meter] que se instala directamente en los televisores de los hogares seleccionados para realizar dicha medición. El People meter permite saber con base en la muestra, el tiempo que una persona está conectada en un canal específico y los cambios de canales que realiza durante el tiempo que permanece frente a la pantalla. Adicionalmente, este dispositivo realiza un perfilamiento de los usuarios para saber quién específicamente está viendo determinado programa. La información pasa luego a una central de información donde acopian, tabulan y analizan todos los datos. De acuerdo con el tamaño de la población el máximo de rating que puede tener un programa en Colombia es de 40 puntos.
    
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarjeta1.svg' alt='AvatarTop')
          .tarjeta.bg4
            .p-4
              h2.text-center Medición de #[em rating] de radio
              p Para el caso de las audiencias de radio es diferente, aunque en la actualidad se puede determinar cuántas personas están conectadas a una cadena radial vía a internet, sin embargo, aún hay muchos radio-escuchas que sintonizan a través de las frecuencias AM y FM. Para estos casos se toman varios datos combinados; uno es el de las encuestas a una muestra representativa de la población y el otro se basa en la retroalimentación que hacen los oyentes por los diferentes medios: teléfono, redes sociales y correo electrónico. Para este, cada emisora y programa de radio se encarga de realizar la medición de su audiencia, con el fin de vender pauta publicitaria.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarjeta2.svg' alt='AvatarTop')
          .tarjeta.bg4
            .p-4
              h2.text-center Medición de prensa y revistas impresas
              p La audiencia de un medio impreso se mide utilizando dos datos básicos, el primero es el tiraje del medio, es decir, las impresiones que se hagan de un ejemplar. El segundo dato son los lectores, los cuales están determinados por ejemplar. Por ejemplo, un ejemplar de periódico comprado en una familia puede ser leído por varios miembros de ella. Por su parte, una revista por tener un tiempo de vida más prolongado, de una semana o un mes, puede ser leída por muchas personas dependiendo del lugar donde estén. Cada medio debe determinar un promedio de lectores de sus ejemplares, con el fin de determinar su audiencia total. Estas mediciones son llevadas a cabo por la Oficina de Justificación de la Difusión (OJD), para los medios que solicitan sus servicios.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarjeta3.svg' alt='AvatarTop')
          .tarjeta.bg4
            .p-4
              h2.text-center Medición prensa y revistas digitales
              p Los medios digitales también deben combinar varios datos para determinar su audiencia total, es importante aclarar que las revistas y periódicos digitales en su mayoría cuentan con un sitio web, por lo tanto, el primer dato está relacionado con las visitas a este. Otro dato importante son los suscriptores, ya sea que el medio sea pago o gratuito, siempre debe tener un sistema de suscripción para poder medir audiencias, generar bases de datos y fidelizar a los espectadores. Finalmente, estos medios pueden hacer análisis de audiencias a través de los sistemas de analítica web, sin embargo y a pesar de la precisión de estos sistemas de medición, muchos datos de bots no se pueden discriminar, ya que alteraría las estadísticas.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
