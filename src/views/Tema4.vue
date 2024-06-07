<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.color-sistema 4
      h1 Merchandising y cliente 
    
    bloque-texto-a.color-acento-contenid.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/t4/imag01.png' alt='AvatarTop')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Los que acuden a los establecimientos a realizar sus compras y quienes toman la decisión de comprar los artículos o no, son los clientes. Por este motivo, el marketing se preocupa por conocerlos y estudiar cómo toman sus decisiones y sin duda, aplicar las técnicas de merchandising sin un conocimiento previo de los consumidores no tendría sentido, ya que, si no se logra la adaptación a sus necesidades, gustos, deseos y preferencias, los esfuerzos no servirían de nada. #[b En función de la actuación de los clientes, se pueden distinguir dos tipos:]
    
    .row.mb-4.bg4
      .col-lg-6
        img(src='@/assets/curso/temas/t4/icono.svg' alt='AvatarTop')
        p #[b El cliente shopper:] es aquel que necesita una serie de argumentos para acudir a un establecimiento y no a otro. Quiere saber dónde hay que comprar y no qué comprar.
      .col-lg-6
        img(src='@/assets/curso/temas/t4/icono2.svg' alt='AvatarTop')
        p #[b El cliente buyer:] es el que ya está dentro del punto de venta. Basará su decisión de compra en los precios, la calidad de los productos, las distintas ofertas, las promociones, la gama de productos y el trato recibido.
    
    p.mb-4 La tendencia actual es la comodidad y muchos comercios excelentes por dentro descuidan lo referente a la atracción requerida en los aspectos shopper, tales como la señalización adecuada para que el cliente sepa cómo ir al local o la numeración de las plazas de aparcamiento, por citar algunos. Por el contrario, otros comercios han reforzado los aspectos shopper, pero han descuidado la cortesía y atención al cliente.
    p Conocer el comportamiento del consumidor exige hacerse una serie de preguntas:

    .row.mb-4
      .col-lg-6
        .cajon.bg4.p-4.mb-4
          p.mb-0 #[b ¿Dónde compra? ¿Por qué compra? ¿Quién compra?]
          p #[b ¿Cómo compra? ¿Qué compra? ¿Quién consume?]
      .col-lg-6
        p * En el caso de que el comprador lo haga para más de una persona (familia, etc.).
        p Para obtener las respuestas a estas preguntas, se debe estudiar al consumidor.
    
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1  Fases en el proceso de decisión de compra
    
    .row.mb-4
      .col-lg-7
        p Cualquier compra sigue siempre una serie de fases que duran más o menos tiempo dependiendo de la importancia de la compra para el cliente y de acuerdo a lo descrito por Guridi (2016) estas fases son:
        h5 Reconocimiento de la necesidad
        p Es la fase en la que descubrimos que tenemos una necesidad que queremos satisfacer. Por ejemplo, si se nos estropea la plancha, y necesitamos planchar la ropa, podemos: llevarla a arreglar o bien comprar una nueva.
      .col-lg-5
        img(src='@/assets/curso/temas/t4/imag02.svg' alt='AvatarTop')
    
    .row.mb-4 
      .col-lg-5
        img(src='@/assets/curso/temas/t4/imag03.svg' alt='AvatarTop')
      .col-lg-7
        h5 Búsqueda de información
        p.mb-3 Una vez que sabemos que tenemos una necesidad, pasamos a la segunda fase, esto es: buscamos las vías para poder satisfacerla. ¿Cómo? Por lo general, buscaremos información que nos ayude y, en este sentido, hay dos posibles fuentes de información:
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | #[b Interna:] información que se basa en nuestros propios conocimientos y experiencias.
          li 
            i.lista-ul__vineta
            | #[b Externa:] información que, si no tenemos experiencia, buscaremos en fuentes externas: opiniones de amigos, familiares, medios de comunicación, etc.
        p Por ejemplo, si cuando se nos averió la plancha hemos decidido comprar una nueva, pensaremos en primer lugar en la experiencia positiva o negativa del uso; además de nuestra propia experiencia, podemos preguntar a otras personas sobre la plancha que tienen y si su funcionamiento es satisfactorio.

    .row.mb-4
      .col-lg-7
        h5 Evaluación de la información
        p A la hora de evaluar la información obtenida tenemos en cuenta una serie de criterios que ayudan a tomar la decisión, y que sabemos cuáles son gracias a los es estudios realizados sobre el tema. Los criterios que el cliente tiene en cuenta a la hora de comprar son:
        .row
          .col-lg-6 
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | La imagen.
              li 
                i.lista-ul__vineta
                | El precio.
              li 
                i.lista-ul__vineta
                | La calidad.
              li 
                i.lista-ul__vineta
                | La relación calidad-precio.
          .col-lg-6
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | La vida del producto.
              li 
                i.lista-ul__vineta
                | La ubicación del establecimiento.
              li 
                i.lista-ul__vineta
                | El servicio postventa.
      .col-lg-5  
        img(src='@/assets/curso/temas/t4/imag04.svg' alt='AvatarTop')
    
    p.mb-5 Así, por ejemplo, si hemos decidido comprar una plancha nueva, tendremos en cuenta el dinero que nos vamos a gastar, si nos interesa que sea de alta gama o por el contrario preferimos una gama baja porque no la usamos mucho. Dependiendo de las alternativas que haya y de la decisión adoptada, compraremos finalmente una plancha determinada.
    
    h5 Decisión y acto de compra
    p.mb-4 Una vez que hemos valorado las posibilidades a nuestro alcance, decidimos que producto comprar y lo hacemos. En el acto de compra pueden intervenir varias personas (aunque también pueden ser una misma persona). Así, existen diferentes roles:
    
    TabsA.color-secundario.mb-5
      .tarjeta.bg3.p-4(titulo="El iniciador")
        p #[b El iniciador:] es la persona que sugiere realizar una compra al descubrir que tiene una necesidad no satisfecha. 
        p Por ejemplo: un hijo que quiere comprar el último juego editado de una consola.
      .tarjeta.bg3.p-4(titulo="El influenciador")
        p #[b El influenciador:] es quien orienta o influye en la decisión de compra.
        p Por ejemplo: un amigo que ya tiene el juego o el vendedor, en la tienda.
      .tarjeta.bg3.p-4(titulo="El decisor")
        p #[b El decisor:] es la persona que decide sobre uno o todos los aspectos de la compra o resuelve comprar o no el producto 
        p Por ejemplo: los padres, que deciden comprar.
      .tarjeta.bg3.p-4(titulo="El comprador")
        p #[b El comprador:] es quien compra el producto. 
        p Por ejemplo: los padres acuden a la tienda y compran el juego para su hijo.
      .tarjeta.bg3.p-4(titulo="El usuario o consumidor")
        p #[b El usuario o consumidor:] es el que usa o consume el producto. . 
        p Por ejemplo: el hijo que quería el juego.
    
    .row.mb-4
      .col-lg-6
        h5 Consumo y valoración postcompra
        p.mb-4 Finalmente, una vez que se ha comprado el producto, hay que consumirlo y evaluar si la compra ha sido un acierto o un error; es decir, si se está satisfecho o decepcionado después de la compra y el consumo. Es la última fase.
        p.mb-4 Si ha sido un acierto, se habrá logrado fidelizar al cliente y la próxima vez que necesite comprar este producto es muy posible que repita la experiencia y vuelva a comprar. Es más, es posible incluso que, si la experiencia ha sido muy positiva, lo comparta con amigos y familiares.
        p En el caso de que la experiencia haya sido negativa, el cliente puede reaccionar de diversas maneras:
      .col-lg-6
        img(src='@/assets/curso/temas/t4/imag05.svg' alt='')
    
    .row.mb-4
      .col-lg-6
        .cajon.bg4.p-4.mb-4
          p #[b Activa:] en este caso, además de no volver a realizar la compra, comunica a familiares y amigos su descontento o escribe una reclamación al establecimiento, fabricante y ante organismos de defensa del consumidor.
      .col-lg-6
        .cajon.bg4.p-4.mb-4
          p #[b Pasiva:] en este caso, sencillamente no vuelve a realizar la compra.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        h5 También, se puede diferenciar entre las compras de complejidad baja y alta:
      
      .row.mb-5
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg4.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t4/imag06.svg' alt='')
            p Las compras de complejidad baja son aquellas que realizamos habitualmente y cuyo esfuerzo económico es bajo. 
            p Por ejemplo: una barra de pan.       
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg4.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t4/imag07.svg' alt='')
            p Las compras de complejidad alta son aquellas que requieren reflexión y cuyo esfuerzo económico es alto. 
            p Por ejemplo: un coche.
    
    .row.mb-4.bg4
      .col-lg-6
        h5 En todo caso, la complicación será menor cuando:
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | La compra sea rutinaria o habitual.
          li 
            i.lista-ul__vineta
            | El riesgo de equivocarse sea pequeño.
          li 
            i.lista-ul__vineta
            | Tengamos una experiencia previa y conozcamos el producto.
          li 
            i.lista-ul__vineta
            | Mayor sea el conocimiento de las marcas.
      .col-lg-6
        img(src='@/assets/curso/temas/t4/imag08.svg' alt='')
    
    p.mb-4 El proceso de decisión de compra responde a determinadas fórmulas de venta, de entre las cuales destaca la fórmula AIDA:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t4/slyder.svg' alt='AvatarTop')
        h5.text-center Atención
        p consiste en presentar el producto de una manera atractiva; es decir, llamar la atención del cliente mediante la presentación y las características del producto. Para ello, se utilizan varias herramientas: el precio, el envase, degustaciones.
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t4/slyder2.svg' alt='AvatarTop')
        h5.text-center Interés 
        p consiste en que el cliente coja un producto y no otro. Para ello, se trata de llamar su atención: que se acerque al lineal, mire el producto, lo coja y, si quiere, observe sus propiedades. En los establecimientos de libre servicio es fundamental que sea el propio producto el que despierte el interés del cliente porque no hay vendedores que puedan mostrártelo.
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t4/slyder3.svg' alt='AvatarTop')
        h5.text-center Deseo
        p consiste en despertar expectativas y deseo. Así, una vez que el cliente cuenta con información sobre el producto, obtenida gracias al propio producto o bien al asesoramiento del vendedor, este decida que desea comprarlo.
      .tarjeta.bg4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t4/slyder4.svg' alt='AvatarTop')
        h5.text-center Acción
        p consiste en actuar; es decir, proceder a la compra del producto, una vez que se ha tomado la decisión.
      

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
