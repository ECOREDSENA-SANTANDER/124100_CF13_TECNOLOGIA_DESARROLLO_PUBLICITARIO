export default {
  global: {
    Name: 'Plan de medios',
    Description:
      'El plan de medios es un derrotero que permite generar interacción entre una marca y su mercado objetivo. Además, tiene una estructura única para el desarrollo coherente de la campaña publicitaria, incluyendo variables como frecuencia, alcance e intensidad, indispensables para llevar el mensaje de la forma más eficiente al mercado objetivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Medición de audiencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fuentes de medición de audiencias',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de medios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elementos básicos de un plan de medios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Variables para el análisis de medios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Variables para el análisis de campañas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Variables para el análisis de medios digitales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Cronogramas de medios',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Presupuesto',
            hash: 't_2_6',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Merchandising</em> - Promoción en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Objetivos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de promociones de ventas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Técnicas de <em>merchandising</em>',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<em>Merchandising</em> y cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fases en el proceso de decisión de compra',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diseño de material P.O.P.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Póster de precios',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Hablador (sapito)',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Adhesivo de piso (<em>vinilo floor graphic</em>)',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF13_124100_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /*complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],*/
  glosario: [
    {
      termino: '<em>Bots</em>',
      significado:
        '<em>software</em> que genera tareas automáticas a través de internet.',
    },
    {
      termino: 'Cobertura',
      significado:
        'Término utilizado para medir la audiencia. Puede definirse a partir del porcentaje de personas alcanzadas por el mensaje publicitario a través de un medio de comunicación o media mix a partir de un número de consumidores seleccionados. También puede expresarse en términos absolutos.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Es a quien el <em>marketing</em> dirige sus acciones, sea una persona u organización, con el fin de orientar o incitar a la compra y, para ello, se debe estudiar el proceso de toma de decisiones de quien va a adquirir el producto o servicio.',
    },
    {
      termino: '<em>Cookies</em>',
      significado:
        'Archivo presente en cualquier sitio de internet y que almacena datos sobre las preferencias y pautas de navegación de los usuarios que acceden a páginas <em>web</em>, redes sociales, <em>blogs</em>, y cualquier sitio virtual integrado en la red.',
    },
    {
      termino: '<em>Displays</em>',
      significado:
        '“son objetos tridimensionales que permiten captar la atención del consumidor o cliente, aplicando a objetos bidimensionales atributos tridimensionales como el volumen, peso, entre otros” (Pranapublicist, 2020).',
    },
    {
      termino: '<em>E-mail marketing</em>',
      significado:
        'consiste en utilizar el correo electrónico para llevar a cabo acciones comerciales mediante el envío masivo de información.',
    },
    {
      termino: 'Expositores',
      significado:
        '“exhibidor en América Latina o mueble expositor, es un mueble en el que se exhiben productos destinados a la venta o material promocional como folletos, catálogos o pequeñas revistas disponibles para el cliente” (Educalingo, 2020).',
    },
    {
      termino: 'Impacto publicitario',
      significado:
        'influencia que ejerce un mensaje publicitario sobre el público objetivo, a partir de la suma de todas las exposiciones o contactos con el anuncio que ha tenido el grupo de consumidores al que va dirigido.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        '“conjunto de técnicas que se aplican en el punto de venta para motivar el acto de compra de la manera más rentable, tanto para el fabricante como para el distribuidor, satisfaciendo al mismo tiempo las necesidades del consumidor. Está totalmente comprobada la influencia que tiene en la venta que el producto esté colocado en uno u otro espacio. Si el producto no está colocado en el lugar correcto decrece notablemente su ratio de ventas” (Marketing XXI, 2020).',
    },
    {
      termino: 'Punto de venta',
      significado:
        '“por definición el Punto de Venta o POS (<em>Point of Sale</em>) es el punto de contacto del consumidor con las marcas o productos para su compra. Es el lugar idóneo donde las marcas pueden posicionarse, sin embargo por la relevancia que ha tomado, el PDV va más allá” (Informa BTL, 2015).',
    },
    {
      termino: 'Usuario',
      significado:
        'persona que utiliza de forma habitual internet para sus rutinas diarias. Para las marcas determinados perfiles de usuario se pueden convertir en su público objetivo.',
    },
  ],
  referencias: [
    {
      referencia: 'ACIM Colombia. (2020). Estudios ACIM',
      link: 'http://www.acimcolombia.com/estudios-acim/',
    },
    {
      referencia:
        'Alard, J. y Monford, A. (2017). Plan de comunicación on y off en la práctica. ESIC Editorial',
    },
    {
      referencia:
        'Ávila, B. y Llamazares, F. (2018). Medición de audiencias. TOM micro. Utilidades en la elaboración de un plan de medios. ESIC Editorial.',
    },
    {
      referencia:
        'Ayestarán, R., Rangel, C. y Sebastián, A. (2012). Planificación estratégica y gestión de la publicidad. ESIC Editorial.',
    },
    {
      referencia:
        'Blattberg, R., y Neslin, S. (1989). Sales promotion: The long and the short of it. Marketing Letters. (1), 81-97.',
    },
    {
      referencia: 'Educalingo. (2020). Expositor',
      link: 'https://educalingo.com/es/dic-es/expositor',
    },
    {
      referencia: 'Guridi, M. (2016). Distribución comercial. ITESM.',
    },
    {
      referencia:
        'Hervás, A. M., Campo, A. y Revilla, M. T. (2013). Animación del punto de venta. McGraw-Hill.',
    },
    {
      referencia: 'Informa BTL. (2015). ¿Qué es el punto de venta?',
      link:
        'https://www.informabtl.com/que-es-el-punto-de-venta/#:~:text=Por%20definici%C3%B3n%20el%20Punto%20de,el%20PDV%20va%20m%C3%A1s%20all%C3%A1',
    },
    {
      referencia:
        'Kotler, P. (2000). Dirección de marketing. Pearson Educación.',
    },
    {
      referencia:
        'Marketing XXI. (2020). Merchandising y publicidad en el lugar de venta',
      link: 'https://www.marketing-xxi.com/merchandising-y-plv-118.htm',
    },
    {
      referencia: 'Muñiz. M. (2012). Promociones en punto de venta. Pirámide.',
    },
    {
      referencia:
        'Sánchez, G. R. (2017). Las estrategias del trade marketing en el punto de venta y su relación con la compra por impulso de los clientes buyer del Hipermercado Plaza Vea del Distrito de Tacna 2017',
      link:
        'https://repositorio.upt.edu.pe/bitstream/handle/20.500.12969/320/Sanchez-Yufra-Gerson-Rodrigo.pdf',
    },
    {
      referencia:
        'Santesmases, M. (2007). Marketing: conceptos y estrategias. Pirámide.',
    },
    {
      referencia:
        'Soria, M. (2015). Plan de medios de comunicación e internet. Editorial CEP.',
    },
    {
      referencia:
        'Tellis, G. (2002). Estrategias de publicidad y promoción. Pearson Educación.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor – experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Quindío',
        },
        {
          nombre: 'Andrea Velásquez Torres',
          cargo: 'Apoyo experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Quindío',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Correctora de estilo',
          centro:
            'Centro para la Industria y la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julián Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastian Teran Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
