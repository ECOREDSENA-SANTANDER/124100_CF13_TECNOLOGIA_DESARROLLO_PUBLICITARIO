<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
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
