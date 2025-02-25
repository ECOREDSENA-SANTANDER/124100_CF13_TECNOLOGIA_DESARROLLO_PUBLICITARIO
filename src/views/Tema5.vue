<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.color-sistema 5
      h1 Diseño de Material P.O.P
    
    p.mb-4 A continuación, se presentan una serie de videos explicativos acerca de la creación de material POP (#[em Point Of Purchase Display]), con lo cual se ejemplifican algunas estrategias para potenciar las ventas de una marca.


    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Póster de precios 
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Z6P6oIGaZ9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Póster de precios  


    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Hablador (sapito)
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_OAf7mz_UMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Hablador (sapito)
    
    
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Adhesivo de piso (vinilo floor graphic)
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uygUPftZmwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Adhesivo de piso 


</template>

<script>
export default {
  name: 'Tema5',
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
