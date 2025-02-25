<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 En el desarrollo de una campaña publicitaria el plan de medios representa la estructura para que la campaña sea coherente y alcance los objetivos deseados, pues en él se definen elementos como la frecuencia, el alcance y la intensidad. A continuación, se presenta un diagrama donde se enuncian los contenidos del componente formativo resaltando los conceptos y temas más importantes.  
    
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama presenta el contenido del componente formativo: medición de audiencia, merchandising, diseño de material P.O.P. y adicionalmente sus caracteristicas y elementos más importantes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
