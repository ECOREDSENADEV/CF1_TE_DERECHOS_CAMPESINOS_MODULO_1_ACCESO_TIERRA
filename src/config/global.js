export default {
  global: {
    Name:
      'Derecho al acceso a la tierra y al uso de los recursos naturales de manera sustentable',
    Description:
      'El componente formativo analiza los derechos campesinos frente al acceso a la tierra y recursos naturales. Examina problemáticas como concentración, fragmentación, urbanización, cambio climático y precios bajos. Destaca la normativa colombiana e internacional que protege al campesinado, así como las entidades y mecanismos de participación para gestionar sus derechos, buscando equidad territorial, sostenibilidad ambiental y fortalecimiento comunitario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Reforma agraria en Colombia',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          '2.	Retos que enfrentan los campesinos: acceso a las tierras y su cultivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fragmentación de la tierra rural',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Urbanización',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cambio climático',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Dificultades para conseguir mercados y bajos precios',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Derechos de los campesinos: como un principio para mejorar sus condiciones de vida y de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Leyes que protegen al campesino en el acceso, uso y tenencia de la tierra',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Los campesinos y el uso y disfrute de los recursos naturales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Gestiones para que se reconozcan los derechos de los campesinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Defensoría del Pueblo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Personería',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              '¿Cómo participar y solicitar el reconocimiento de derechos?',
            hash: 't_4_3',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'Reforma agraria en Colombia',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2025, 28 de mayo). ¿Qué es la Reforma Agraria y por qué se necesita una en Colombia? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Kney3bEMvOY',
    },
    {
      tema:
        'Retos que enfrentan los campesinos: acceso a las tierras y su cultivo',
      referencia:
        'Naciones Unidas. (2013, 1 de febrero). Los campesinos bengalíes padecen ya los efectos del cambio climático [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GRpz6ThK30c',
    },
    {
      tema:
        'Retos que enfrentan los campesinos: acceso a las tierras y su cultivo ',
      referencia:
        'Canal U tv. (2025). Reconocimiento constitucional al campesinado: tierra, derechos y justicia rural.  [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/shorts/IpK3AST7PEs',
    },
    {
      tema: 'Fragmentación de la tierra rural',
      referencia:
        'Unidad de Planificación Rural Agropecuaria (UPRA). (2025, 27 de marzo). Las Áreas de Protección para la Producción de Alimentos nos permiten planificar con visión de future. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/shorts/tdSFLvvmTsw',
    },
    {
      tema: 'Fragmentación de la tierra rural',
      referencia:
        'Unidad de Planificación Rural Agropecuaria (UPRA). (2025, 8 de abril). Especial de las Áreas de Protección para la Producción de Alimentos, APPA [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JALJwmxhONA',
    },
    {
      tema:
        'Leyes que protegen al campesino en el acceso, uso y tenencia de la tierra',
      referencia:
        'Presidencia de la República. (2024, 5 de agosto). Decreto 1004 de 2024, por el cual se adiciona el Título 4, de la Parte 3, del Libro 2 del Decreto número 1066 de 2015, Único Reglamentario del Sector Administrativo del Interior, con el fin de reglamentar el artículo 358 de la Ley 2294 de 2023 “Por el cual se expide el Plan Nacional de Desarrollo 2022-2026 Colombia Potencia Mundial de la Vida” en lo relacionado con la composición y funcionamiento de la Comisión Mixta Nacional para Asuntos Campesinos. ',
      tipo: 'Página web',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30052942 ',
    },
    {
      tema:
        'Leyes que protegen al campesino en el acceso, uso y tenencia de la tierra',
      referencia:
        'El Popular TV (2024, 23 de noviembre). Campesinado colombiano avanza con la instalación de la Comisión Mixta Nacional. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cTF4N5cuHkc ',
    },
    {
      tema:
        'Leyes que protegen al campesino en el acceso, uso y tenencia de la tierra ',
      referencia:
        'Congreso de los pueblos (2024, 31 de agosto). Pare Oreja No. 11: Territorios Campesinos Agroalimentarios - TECAM [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cPOF1xKlc7g ',
    },
    {
      tema:
        'Leyes que protegen al campesino en el acceso, uso y tenencia de la tierra',
      referencia:
        'Presidencia de la República. (2024, 24 de junio). Decreto 780 de 2024, por el cual se adiciona el Título 26 a la Parte 14 del Libro 2 del Decreto número 1071 de 2015, Decreto Único Reglamentario del Sector Administrativo Agropecuario, Pesquero y de Desarrollo Rural y se establecen los ajustes normativos para simplificar y agilizar los procedimientos de constitución, reconocimiento y fortalecimiento de Territorios Campesinos Agroalimentarios (Tecam), en desarrollo del artículo 359 de la Ley 2294 de 2023. ',
      tipo: 'Página Web',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30051755',
    },
    {
      tema: 'Los campesinos y el uso y disfrute de los recursos naturales',
      referencia:
        'Fundación  INCOLDES. (2024, 19 de octubre). Programas de Desarrollo con Enfoque Territorial (PDET). [Video]. YouTube Shorts. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/shorts/P884OEHSbzc',
    },
    {
      tema: 'Los campesinos y el uso y disfrute de los recursos naturales',
      referencia:
        'Renovación Territorio. (2017, 24 de julio). Programas de Desarrollo con Enfoque Territorial (PDET) [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o5-jFyOGcy8',
    },
    {
      tema: 'Gestiones para que se reconozcan los derechos de los campesinos',
      referencia:
        'UPRAColombia. (2023, 1 de julio). Conoce de qué trata las Áreas de Protección para la Producción de Alimentos, APPA [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9E1Igpu3M9o',
    },
    {
      tema: 'Gestiones para que se reconozcan los derechos de los campesinos',
      referencia:
        'UPRAColombia. (2025, 13 de agosto). En Colombia, el hambre no es solo falta de alimentos, es una deuda histórica con el campo [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/shorts/wSH4QFIw-Zg',
    },
  ],
  glosario: [
    {
      termino: 'Agroecología',
      significado:
        'es una ciencia, un conjunto de prácticas y un movimiento social que busca transformar la agricultura y los sistemas alimentarios hacia la sostenibilidad y la justicia social. se basa en la aplicación de principios ecológicos al diseño y manejo de los sistemas agrícolas, buscando optimizar la producción de alimentos de manera que sea respetuosa con el medio ambiente y socialmente equitativa.',
    },
    {
      termino: 'Conectividad digital',
      significado:
        'es la capacidad de dispositivos, sistemas y redes para comunicarse e intercambiar información a través de medios digitales como internet, redes móviles y otras tecnologías.',
    },
    {
      termino: 'Diversidad biológica',
      significado:
        'también conocida como biodiversidad, se refiere a la amplia variedad de seres vivos que existen en la Tierra y a los patrones naturales que estos forman. incluye la diversidad de especies, la diversidad genética dentro de cada especie, y la diversidad de ecosistemas. es esencial para el funcionamiento de los ecosistemas y para el bienestar humano.',
    },
    {
      termino: 'Educación con pertinencia y calidad',
      significado:
        'es un enfoque educativo que considera las necesidades específicas de los estudiantes y su contexto social, cultural y económico, a la vez que asegura altos estándares de aprendizaje y desarrollo integral.',
    },
    {
      termino: 'Enfoque de género',
      significado:
        'es una perspectiva analítica y metodológica que busca comprender las dinámicas sociales y las relaciones entre hombres y mujeres, identificando las desigualdades y discriminaciones basadas en el género, con el objetivo de promover la igualdad y la justicia. implica reconocer que las diferencias entre hombres y mujeres no solo son biológicas, sino también construcciones sociales y culturales que influyen en sus roles, oportunidades y acceso a recursos.',
    },
    {
      termino: 'Enfoque etario',
      significado:
        'es una perspectiva que considera a las personas como individuos únicos dentro de un ciclo de vida, reconociendo que sus necesidades y experiencias varían según su edad. se centra en comprender cómo la edad influye en el desarrollo biológico, psicológico, emocional y social de las personas, y cómo esto afecta sus vulnerabilidades, oportunidades y expectativas.',
    },
    {
      termino: 'Enfoque intercultural',
      significado:
        'es una perspectiva que reconoce la diversidad cultural como un valor y un motor de desarrollo social, promoviendo la interacción, el diálogo y el respeto mutuo entre diferentes grupos culturales.',
    },
    {
      termino: 'Producción diversificada',
      significado:
        'es un enfoque agrícola que consiste en cultivar y/o criar una variedad de alimentos (como frutas, verduras, granos, legumbres, carnes, pescados, huevos, etc.) en lugar de enfocarse en un solo tipo de cultivo o producto (como ocurre en el monocultivo). uno de sus objetivos principales es mejorar la seguridad alimentaria y nutricional al producir diferentes tipos de alimentos, se garantiza una dieta más equilibrada y rica en nutrientes.',
    },
    {
      termino: 'Seguridad alimentaria',
      significado:
        'se refiere a la situación en la que todas las personas tienen acceso físico, económico y social a alimentos suficientes, seguros y nutritivos para satisfacer sus necesidades alimenticias y llevar una vida activa y saludable. implica la disponibilidad de alimentos, su acceso, su utilización biológica y su estabilidad a lo largo del tiempo.',
    },
    {
      termino: 'Soberanía alimentaria',
      significado:
        'es el derecho de los pueblos a definir sus propias políticas y estrategias de producción, distribución y consumo de alimentos, priorizando la producción local y sostenible para garantizar el acceso a alimentos nutritivos y culturalmente apropiados. implica un control democrático sobre los sistemas alimentarios, desde la producción hasta el consumo, poniendo énfasis en la justicia social, la sostenibilidad ambiental y el respeto a la diversidad cultural.',
    },
  ],
  referencias: [
    {
      referencia:
        'Defensoría del Pueblo, Delegada para Asuntos Agrarios y Tierras. (2015, noviembre). Derechos de los campesinos colombianos. Defensoría del Pueblo.',
      link: '',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi, Dirección de Investigación y Prospectiva. (2023, abril). Fragmentación y distribución de la propiedad rural en Colombia (1.ª ed.). Instituto Geográfico Agustín Codazzi.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Justicia y del Derecho. (s. f.). Sistema Único de Información Normativa (SUIN-Juriscol). ',
      link: '',
    },
    {
      referencia:
        'Van der Ploeg, J. D. (2024). Agricultura campesina: una promesa para el futuro [Artículo].',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
