<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.color-sistema 3
      h1 #[em Merchandising] - Promoción en el punto de venta
    
    p.mb-4(data-aos="fade") En el siguiente video se expone con claridad el concepto de #[em merchandising] y su relación con la promoción en puntos de venta:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2HWT5IqEZds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. #[em Merchandising] - Promoción en el punto de venta
    

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1  Características
    
    SlyderF(columnas="col-lg-6 col-xl-4 t2-tarj-hover" data-aos="fade-down")
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-2.col-lg-4
            img(src='@/assets/curso/temas/t3/slyder1.svg' alt='')
        p.text-center Se engloba dentro de la variable comunicación de la empresa. 
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-2.col-lg-4
            img(src='@/assets/curso/temas/t3/slyder2.svg' alt='')
        p.text-center Puede tener un doble planteamiento: táctico y estratégico. 
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-2.col-lg-4
            img(src='@/assets/curso/temas/t3/slyder3.svg' alt='')
        p.text-center Debe limitarse en el espacio y en el tiempo.       
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-2.col-lg-4
            img(src='@/assets/curso/temas/t3/slyder4.svg' alt='')
        p.text-center Se dirige a públicos objetivos específicos.      
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-2.col-lg-4
            img(src='@/assets/curso/temas/t3/slyder5.svg' alt='')
        p.text-center Exige una participación activa del público objetivo al que va dirigida.      
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-2.col-lg-4
            img(src='@/assets/curso/temas/t3/slyder6.svg' alt='')
        p.text-center Sus resultados se pueden medir de forma precisa y directa.      
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-4.col-md-2.col-lg-4
            img(src='@/assets/curso/temas/t3/slyder7.svg' alt='')
        p.text-center Constituye un incentivo esporádico ajeno a las características intrínsecas del producto.
    

    Separador
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7(data-aos="fade-right")
        #t_3_2.titulo-segundo.color-acento-contenido
          h2 3.2  Objetivos
        p.mb-4 La determinación de los objetivos de las promociones de ventas ha sido un tema debatido y objeto de numerosas revisiones en los últimos años. Esto se debe, como se ha mencionado, a la confusión respecto a la definición de promoción de ventas y su alcance en el #[em marketing] mix de la empresa, por una parte; y por otra, al reconocimiento reciente de los efectos de las promociones de ventas en el largo plazo y su correspondiente papel en los objetivos estratégicos de #[em marketing].
        p Existe un amplio consenso en cuanto a los tres grandes objetivos generales reconocidos en la mayor parte de las definiciones del concepto de promoción de ventas, esto es: estimular la demanda del usuario final, mejorar el desempeño de #[em marketing] de intermediarios y vendedores y complementar las funciones de publicidad y venta personal. Sin embargo, en cuanto a los objetivos específicos de las promociones de ventas, existen diferentes clasificaciones atendiendo a distintos criterios, tales como su alcance temporal, los agentes que las utilizan y el público objetivo al que van dirigidas, que se resumen a continuación, de acuerdo a lo indicado por Sánchez (2017):
      .col-lg-5.col-md-6(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/imag01.png' alt='')

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-11
        ol.lista-ol--cuadro.color-secundario
          li
            .lista-ol--cuadro__vineta
              span.fw-bold a
            | #[b Objetivos de las promociones de ventas según su alcance temporal]
        p.ps-4 Debido a que las acciones promocionales pueden tener efectos tanto a corto como a largo plazo, es necesario diferenciar los objetivos de las promociones de ventas según su alcance temporal, esto es, según persigan efectos a corto o a largo plazo. Se puede clasificar, entonces, los objetivos de las promociones de ventas en: objetivos tácticos, estratégicos y finales, según afecten al corto, medio y largo plazo, respectivamente.
    
    .row.justify-content-evenly.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-3.col-md-5.col-7
        img(src='@/assets/curso/temas/t3/imag02.svg' alt='')
      .col-lg-6
        ul.lista-ul--color.lista-ul--separador.fa-ul
          li 
            i.fas.fa-check-circle
            | Combatir esfuerzos promocionales de los competidores o aumentar la cuota de mercado.
          li 
            i.fas.fa-check-circle
            | Retirar artículos dañados, obsoletos, poco demandados o con excesivas existencias.
    .row.justify-content-evenly.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-3.col-md-5.col-7
        img(src='@/assets/curso/temas/t3/imag03.svg' alt='')
      .col-lg-6
        ul.lista-ul--color.lista-ul--separador.fa-ul.color-secundario
          li 
            i.fas.fa-check-circle
            | Estimular a los consumidores a que cambien de la marca rival a la promocionada.
          li 
            i.fas.fa-check-circle
            | Aumentar el nivel de consumo de los clientes actuales del producto.
          li 
            i.fas.fa-check-circle
            | Trasladar los inventarios del producto al distribuidor, minorista o consumidor.
          li 
            i.fas.fa-check-circle
            | Incentivar la recompra y la lealtad hacia la marca.
          li 
            i.fas.fa-check-circle
            | Motivar a los distribuidores para que promuevan la marca entre los consumidores.
    .row.justify-content-evenly.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-3.col-md-5.col-7
        img(src='@/assets/curso/temas/t3/imag04.svg' alt='')
      .col-lg-6
        ul.lista-ul--color.lista-ul--separador.fa-ul.color-acento-botones
          li 
            i.fas.fa-check-circle
            | Aumentar las ventas.
          li 
            i.fas.fa-check-circle
            | Incrementar la cuota de mercado.
          li 
            i.fas.fa-check-circle
            | Aumentar los beneficios.
    
    .linea-separador.mb-5.pt-4

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-11
        ol.lista-ol--cuadro.color-secundario
          li
            .lista-ol--cuadro__vineta
              span.fw-bold b
            | #[b Objetivos de las promociones de ventas según el agente que las realiza]
        p.ps-4 Lógicamente, los objetivos perseguidos por comerciales, fabricantes y distribuidores son, en muchos casos, diferentes. Cabe, por tanto, una clasificación de los objetivos de las promociones de ventas según el agente que las realiza.
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        h3 Comercial 
      .col-lg-5  
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check-circle
            | Incrementar las compras actuales de los distribuidores existentes. 
          li 
            i.fas.fa-check-circle
            | Obtener de nuevos intermediarios, nuevas áreas geográficas y formatos de establecimiento.  
          li 
            i.fas.fa-check-circle
            span.mb-0 Ganar apoyo promocional en el punto de venta, incentivando las actividades de #[em merchandising.]
          li 
            i.fas.fa-check-circle
            | Incentivar la fuerza de ventas minorista. 
          li 
            i.fas.fa-check-circle
            | Motivar a los distribuidores para que adquieran la mercancía. 
          li 
            i.fas.fa-check-circle
            | Aumentar y mantener la presencia en el canal de distribución.
          li 
            i.fas.fa-check-circle
            | Fidelizar a los distribuidores actuales. 
      .col-lg-5
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check-circle
            | Controlar el precio de venta final, evitando reducciones drásticas y permanentes de precio. 
          li 
            i.fas.fa-check-circle
            | Favorecer la rotación y salida de stocks. 
          li 
            i.fas.fa-check-circle
            | Estabilizar las relaciones en el canal, favoreciendo la cooperación con los distribuidores. 
          li 
            i.fas.fa-check-circle
            | Expulsar del canal de distribución a los distribuidores. 
          li 
            i.fas.fa-check-circle
            | Incrementar la eficacia del trabajo realizado por los distribuidores. 
          li 
            i.fas.fa-check-circle
            | Favorecer la integración del producto en la red de comercialización.
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        h3 Fabricante
      .col-lg-5  
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check-circle
            | Conseguir la prueba del producto. 
          li 
            i.fas.fa-check-circle
            | Acercar el producto al consumidor.  
          li 
            i.fas.fa-check-circle
            | Favorecer la introducción de nuevos productos. 
          li 
            i.fas.fa-check-circle
            | Atraer a nuevos compradores. 
          li 
            i.fas.fa-check-circle
            | Crear y mantener el hábito de compra hacia el producto. 
          li 
            i.fas.fa-check-circle
            | Incrementar y mantener el consumo del producto entre los consumidores actuales. 
      .col-lg-5
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check-circle
            | Mejorar la cuota de mercado. 
          li 
            i.fas.fa-check-circle
            | Favorecer la acumulación del producto por parte del consumidor. 
          li 
            i.fas.fa-check-circle
            | Incentivar la compra de marcas de mayor prestigio y precio. 
          li 
            i.fas.fa-check-circle
            | Reforzar la publicidad e imagen de marca del producto. 
          li 
            i.fas.fa-check-circle
            | Neutralizar la publicidad o promociones de ventas de los competidores. 
          li 
            i.fas.fa-check-circle
            | Capitalizar ciertas zonas, temporadas o acontecimientos.
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        h3 Minorista
      .col-lg-5  
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check-circle
            | Incrementar las ventas de la categoría de producto. 
          li 
            i.fas.fa-check-circle
            | Aumentar el tráfico y número de clientes del establecimiento.  
          li 
            i.fas.fa-check-circle
            | Ganar y mantener la lealtad de los clientes.
          li 
            i.fas.fa-check-circle
            | Informar a los clientes acerca del surtido y servicios ofrecidos.  
          li 
            i.fas.fa-check-circle
            | Estimular la demanda del producto y aumentar las ventas.  
          li 
            i.fas.fa-check-circle
            | Diferenciarse de los competidores y crear imagen de competitividad en precios. 
      .col-lg-5
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check-circle
            | Disminuir los períodos de estacionalidad de las ventas. 
          li 
            i.fas.fa-check-circle
            | Trasladar inventario a los consumidores. 
          li 
            i.fas.fa-check-circle
            | Reforzar la imagen del establecimiento.
          li 
            i.fas.fa-check-circle
            | Aumentar la frecuencia de compra. 
          li 
            i.fas.fa-check-circle
            | Aumentar las ventas de marcas de la distribución. 
          li 
            i.fas.fa-check-circle
            | Apoyar otras técnicas de comunicación.
    
    .linea-separador.mb-5.pt-4

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-11
        ol.lista-ol--cuadro.color-secundario
          li
            .lista-ol--cuadro__vineta
              span.fw-bold c
            | #[b Objetivos de las promociones de ventas según el público objetivo al que van dirigidas]
        p.ps-4 Los objetivos específicos de las promociones de ventas varían en función del público objetivo al que vayan dirigidas, esto es, consumidores, detallistas o la fuerza de ventas. Algunos autores, como Kotler (2000) y Santesmases (2007), proponen una clasificación de los objetivos de las promociones atendiendo a este criterio.
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5
        h3 Consumidores
        ul.lista-ul--color.fa-ul.mb-4
          li 
            i.fas.fa-check-circle
            | Estimular las ventas. 
          li 
            i.fas.fa-check-circle
            | Aumentar las compras de los clientes actuales. 
          li 
            i.fas.fa-check-circle
            | Conseguir la prueba entre los no usuarios. 
          li 
            i.fas.fa-check-circle
            | Atraer a los consumidores de otras marcas (promover el cambio de marca).
        h3 Fuerza de ventas 
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check-circle
            | Apoyar un nuevo producto o modelo.  
          li 
            i.fas.fa-check-circle
            | Estimular una mayor prospección. 
          li 
            i.fas.fa-check-circle
            | Estimular para lograr ventas fuera de temporada.   
          li 
            i.fas.fa-check-circle
            | Aumentar el esfuerzo y mejorar el rendimiento.
      .col-lg-5
        h3 Detallistas 
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check-circle
            | Inducir a la adquisición de nuevos productos y mayores niveles de existencias.
          li 
            i.fas.fa-check-circle
            | Estimular la compra fuera de temporada. 
          li 
            i.fas.fa-check-circle
            | Estimular el almacenamiento de los productos. Estimular la fidelidad a la marca y a los detallistas. 
          li 
            i.fas.fa-check-circle
            | Fomentar un mayor esfuerzo por parte del detallista en la venta del producto. 
          li 
            i.fas.fa-check-circle
            | Compensar las promociones realizadas por los competidores. 
          li 
            i.fas.fa-check-circle
            | Conseguir más espacio para el producto.
          li 
            i.fas.fa-check-circle
            | Conseguir la entrada en nuevos tipos de establecimiento o puntos de venta.
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        h3 Técnicas
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check-circle
            span.mb-0 El #[em marketing] promocional dispone de un gran número de herramientas y técnicas para la consecución de los objetivos señalados en el apartado anterior. Ahora bien, las técnicas más eficaces en cada caso dependerán del objetivo perseguido y del público objetivo al que se dirijan.
        p.mb-4.ps-4 Existen numerosos criterios de clasificación de las distintas herramientas y técnicas promocionales, aunque muchos de ellos presentan características comunes y ciertos solapamientos. A continuación, se exponen los criterios de clasificación más utilizados; esto es, en función del público objetivo al que se dirigen y en función del incentivo promocional ofrecido al consumidor.
    
    .fondo-bloque2.p-4.p-md-5.p-lg-4.py-5.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-6
          h5 Según el público objetivo al que van dirigidas
          p Uno de los criterios más utilizados para clasificar las promociones de ventas es el sugerido por Blattberg y Neslin, atendiendo a si se trata de promociones del fabricante al distribuidor, del distribuidor al consumidor o directamente del fabricante al consumidor, conocida como estrategia #[em Push] y #[em Pull] la que ha sido seguida por autores como Kotler (2000), Tellis (2002) o Santesmases (2007), entre otros.
        .col-lg-4.col-md-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Estrategia #[em push and pull]
          img.mb-3(src='@/assets/curso/temas/t3/fig1.svg' alt='La figura presenta un diagrama circular que relaciona al fabricante con el consumidor a través de promociones al consumido; al fabricante con el distribuidor a través de la promociones del fabricante; y al distribuidor con el consumidor a través de promociones del distribuidor.')
          figcaption Fuente. SENA
    
    .row.justify-content-center(data-aos="fade")
      .col-lg-10
        p De acuerdo con esta clasificación, en la estrategia #[em Push] las promociones al consumidor comprenden todas aquellas acciones promocionales ofrecidas por los fabricantes directamente al consumidor final, cuyo objetivo principal será el de fomentar la compra de la marca promocionada. #[em Push]
        p Por su parte, en la estrategia #[em Pull] las promociones del distribuidor son también promociones dirigidas al consumidor, pero, en este caso, diseñadas por el propio detallista, y perseguirán atraer clientes al establecimiento y aumentar las ventas y la rentabilidad del surtido en su conjunto. En muchos casos existen conflictos de interés entre las promociones al consumidor diseñadas por los fabricantes y las promovidas por los distribuidores, por lo que cada vez adquieren mayor importancia el tercer tipo de promociones, esto es, aquellas dirigidas al distribuidor por el fabricante (Trade Deals), con el objetivo de que el detallista transfiera a los consumidores parte de este incentivo. 
    

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3  Tipos de promociones de ventas
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4 t2-tarj-hover")
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-3.col-lg-4
            img(src='@/assets/curso/temas/t3/imag06.svg' alt='')
        h4.tit-morado.mb-4 Promociones al consumidor
        ul.lista-ul--separador.text-center
          li 
            i
            | Cupones de fabricante y vales descuento. 
          li 
            i
            | Reembolsos. 
          li
            i
            | Mayor contenido a menor precio (packs temporales).
          li
            i
            | Productos complementarios gratis o a menor precio. 
          li
            i
            | Regalos. 
          li
            i
            | Promociones conjuntas con otras marcas. 
          li
            i
            | Sorteos de regalo.
          li
            i
            | Concursos y premios. 
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-3.col-lg-4
            img(src='@/assets/curso/temas/t3/imag07.svg' alt='')
        h4.tit-morado.mb-4 Promociones al consumidor
        ul.lista-ul--separador.text-center
          li 
            i
            | Reducción temporal del precio del producto. 
          li 
            i
            | Comisiones. 
          li
            i
            | Facilidades de financiación.
          li
            i
            | Contribuciones monetarias. 
          li
            i
            | Ayudas para expositores. 
          li
            i
            | Publicidad cooperativa. 
          li
            i
            | Sorteos y concursos. 
          li
            i
            | Ferias. 
          li
            i
            | Convenciones de minoristas. 
          li
            i
            | Concursos. 
          li
            i
            | Prueba, muestras y degustaciones.
          li
            i
            | Eventos especiales. 
          li
            i
            | Promociones de ambiente (aniversarios, días o semanas especiales, etc.).      
      .tarjeta.bg7.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-3.col-lg-4
            img(src='@/assets/curso/temas/t3/imag08.svg' alt='')
        h4.tit-morado.mb-4 Promociones del distribuidor
        ul.lista-ul--separador.text-center
          li 
            i
            | Rebajas y descuentos. 
          li 
            i
            | Regalos o productos gratuitos.
          li
            i
            | Cupones dobles (duplican el valor de los cupones del fabricante).
          li
            i
            | Cupones del distribuidor.
          li
            i
            | Expositores especiales. 
          li
            i
            | Folletos. 
          li
            i
            | Publicidad en el punto de venta. 
          li
            i
            | Sorteos. 
    
    .row.justify-content-between.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p En todos los casos, el destinatario de las promociones de ventas es el consumidor. Ahora bien, como ya se ha adelantado, la existencia de grupos de consumidores con actitudes y comportamientos muy diferentes ante las promociones de ventas, exige que las acciones promocionales sean definidas de acuerdo a las características y preferencias de los segmentos de mercado a las que vayan dirigidas. Así, las distintas técnicas promocionales señaladas, cuya utilización dependerá, entre otros factores, de los objetivos perseguidos en cada momento, serán más o menos eficaces según el tipo de consumidor al que vayan dirigidas.
        p Tradicionalmente, la caracterización de los consumidores propensos a las promociones se había realizado atendiendo a criterios sociodemográficos; sin embargo, resultaron insuficientes para explicar los diferentes comportamientos ante las promociones de ventas; por esta razón, recientemente se han realizado estudios que relacionan la respuesta ante las promociones de ventas con los hábitos de compra, los hábitos de consumo o rasgos psicográficos.
      .col-lg-4.col-md-6(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/imag09.svg' alt='')
    
    h4(data-aos="fade") Promociones de ventas según el incentivo ofrecido al consumidor
    p.mb-4(data-aos="fade") Además de en función del público objetivo al que van dirigidas, el criterio de clasificación de las promociones de ventas según el tipo de incentivo promocional ofrecido es uno de los más empleados. En este sentido, las promociones de ventas se pueden agrupar en diferentes clases atendiendo a las características del incentivo que se ofrece al consumidor, independientemente de que la promoción sea del fabricante, del distribuidor o resultado de una colaboración conjunta entre ambos. Existen cuatro criterios de clasificación de las promociones en función del tipo de incentivo ofrecido al consumidor: en función de la naturaleza del incentivo, en función del horizonte temporal, en función de la certeza del incentivo y, por último, en función del objetivo perseguido.
    p.mb-4(data-aos="fade") #[b Según la naturaleza del incentivo:] se diferencia entre promociones monetarias o promociones en precio y promociones no monetarias. 
    
    .row.fondo-completo.align-items-center.p-4.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .tarjeta.tarjeta--blanca.p-4.py-3(data-aos="fade-down")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-md-11  
                  h1.num 1
                .col-md-6
                  p Las promociones monetarias hacen referencia a todas aquellas acciones promocionales que permiten al consumidor adquirir un determinado bien a un precio inferior al habitual, tales como los descuentos inmediatos o diferidos, los vales y cupones de descuento o los reembolsos.
                  p Las promociones no monetarias agrupan todas aquellas acciones cuyo incentivo no consiste en una reducción directa del precio del producto. Así, son promociones no monetarias: los regalos directos o diferidos, las tarjetas de fidelización, la participación en sorteos y concursos, etc. Algunos estudios han puesto de manifiesto que los beneficios percibidos por el consumidor son diferentes según se trate de promociones monetarias o no monetarias y que sus efectos sobre el valor de marca en el largo plazo pueden variar significativamente.
                .col-md-5
                  img(src='@/assets/curso/temas/t3/imag10.svg' alt='')
              .row.justify-content-center.align-items-center
                .col-md-11  
                  h1.num 2
                .col-md-7  
                  p #[b En cuanto al horizonte temporal:] esto es, el tiempo transcurrido desde que se realiza la compra hasta que el consumidor recibe el incentivo y se puede diferenciar entre promociones inmediatas y promociones diferidas. 
                  p En las promociones inmediatas, el consumidor recibe el incentivo en el momento en el que realiza la compra, sin que se le exija ningún esfuerzo adicional por su parte: descuentos directos, paquetes especiales con mayor cantidad de producto, muestras y regalos directos que acompañan al producto, etc. 
                  p En las promociones diferidas el incentivo promocional no es inmediato y requiere una participación por parte del consumidor, al que se le exige cierto esfuerzo, como por ejemplo: recortar y guardar los cupones o vales promocionales, enviar los comprobantes de compra para obtener descuentos o regalos, completar formularios para participar en sorteos o concursos, etc. 
                .col-md-4
                  img(src='@/assets/curso/temas/t3/imag11.svg' alt='')
              .row.justify-content-center.align-items-center
                .col-md-11  
                  h1.num 3
                .col-md-6
                  p #[b Según la certeza del incentivo:] esto es, la seguridad en la obtención del mismo, distinguiéndose entre promociones sistemáticas y promociones selectivas.
                  p Las promociones sistemáticas ofrecen un incentivo real e idéntico a todos los compradores. Es decir, el comprador tiene absoluta certeza de que, con la compra del producto, recibirá un incentivo determinado.
                  p Por el contrario, en las promociones selectivas el hecho de adquirir el producto no garantiza la obtención del incentivo, como es el caso de los sorteos y los concursos, en los que solo algunos consumidores obtienen el premio o regalo de la promoción. 
                  .cajon.color-secundario.bg2.p-3.px-lg-5
                    p.mb-0 La mayor parte de los consumidores prefieren los incentivos sistemáticos y, por tanto, seguros, a los incentivos selectivos, aunque ofrezcan un mayor valor unitario.
                .col-md-5
                  img(src='@/assets/curso/temas/t3/imag12.svg' alt='')
              .row.justify-content-center.align-items-center
                .col-md-11  
                  h1.num 4
                .col-md-6
                  p #[b Según el objetivo perseguido por la empresa:] se pueden diferenciar entre promociones informativas e incentivadoras.
                  p Las promociones informativas incluyen los folletos, los expositores especiales, las degustaciones y, en general, aquellas actividades y herramientas destinadas a informar a los consumidores acerca de los productos.
                  p Las promociones incentivadoras persiguen hacer la compra más atractiva a través de incentivos monetarios o no monetarios.
                .col-md-5
                  img(src='@/assets/curso/temas/t3/imag13.svg' alt='')   
        
    
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4  Técnicas de #[em merchandising]
    
    .row.mb-4(data-aos="fade")
      .col-lg-1.col-md-2.col-3.mb-3
        img(src='@/assets/curso/temas/t3/icono.svg' alt='')
      .col-12  
        h4 #[em Merchandising] de presentación  
        p Se puede definir como la manera de presentar los artículos y el punto de venta, de modo que el acto de compra sea lo más agradable y sencillo posible para el cliente y lo más rentable posible para el establecimiento. En definitiva, pretende hacer atractivo y dinámico el punto de venta, con el fin de guiar al consumidor e influir en su comportamiento de compra.

    .row
      .col-lg-6.pe-lg-5.mb-4.mb-lg-0(data-aos="fade")
        .row.mb-3
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t3/icono2.svg' alt='')
        h4 #[em Merchandising] de seducción   
        p.mb-0 Consiste en la denominada “tienda espectáculo” y pasa por la concepción del mobiliario específico, la decoración, la información, etc., con el objetivo de dar un aspecto seductor al lineal y a la tienda para promover la imagen del propio distribuidor.

      .col-lg-6.bl-1.ps-lg-5(data-aos="fade")
        .row.mb-3
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t3/icono3.svg' alt='')
        h4 #[em Merchandising] de gestión   
        p.mb-0 Consiste, como su nombre indica, en gestionar el espacio expositivo y el surtido a efectos de maximizar la satisfacción del cliente y la rentabilidad del establecimiento.


</template>

<script>
export default {
  name: 'Tema3',
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
