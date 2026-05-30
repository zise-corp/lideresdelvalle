/* Contenido de Líderes del Valle — fuente única de datos */
const data = {
  contact: {
    city: "Cochabamba — Bolivia",
    email: "lideresdelvalle.cbba@gmail.com",
    phones: ["+591 60364971", "+591 75488258"],
    directors: [
      { name: "Lic. Sergio Oswaldo Molina Quiroga", role: "Director General", cel: "75488258" },
      { name: "Lic. Andrés Ignacio Blanco Aranibar", role: "Dir. de Asuntos Administrativos y RR.EE.", cel: "60364971" },
    ],
  },

  stats: [
    { n: "340+", l: "Jóvenes participantes" },
    { n: "48", l: "Proyectos sociales" },
    { n: "120", l: "Voluntarios activos" },
    { n: "18", l: "Comunidades impactadas" },
  ],

  pillars: [
    { n: "01", t: "Liderazgo", d: "Desarrollamos habilidades de liderazgo transformacional a través de talleres, mentorías y proyectos reales de alto impacto." },
    { n: "02", t: "Democracia", d: "Fomentamos la participación ciudadana activa, el pensamiento crítico y los valores democráticos en jóvenes bolivianos." },
    { n: "03", t: "Voluntariado", d: "Conectamos a jóvenes líderes con causas sociales que transforman comunidades en Cochabamba y toda Bolivia." },
    { n: "04", t: "Impacto Social", d: "Medimos el cambio real: proyectos comunitarios, políticas públicas y redes de líderes que persisten en el tiempo." },
  ],

  modules: [
    {
      n: 1,
      title: "Democracia y ciudadanía crítica",
      desc: "Conceptos fundamentales, derechos y pensamiento crítico.",
      units: [
        { u: "Conceptos fundamentales de democracia", date: "04, 06 y 08 de mayo", time: "Lunes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Derechos, deberes y ciudadanía responsable", date: "11, 13 y 15 de mayo", time: "Lunes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Pensamiento crítico y análisis de casos", date: "18, 20 y 22 de mayo", time: "Lunes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Estrategia de participación y acción ciudadana", date: "25, 26 y 29 de mayo", time: "Lunes y martes · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Conversatorio", date: "31 de mayo", time: "Domingo · 19:30–21:00", mode: "Virtual" },
      ],
    },
    {
      n: 2,
      title: "Participación ciudadana y compromiso comunitario",
      desc: "Mecanismos de participación en Bolivia y diagnósticos prácticos.",
      units: [
        { u: "Mecanismos de participación en Bolivia", date: "02, 03 y 05 de junio", time: "Martes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Virtual" },
        { u: "Diagnóstico comunitario", date: "09, 10 y 12 de junio", time: "Martes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Mapa de actores", date: "15, 17 y 19 de junio", time: "Lunes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Propuestas de incidencia ciudadana", date: "23, 24 y 26 de junio", time: "Martes y miércoles · 18:00–20:00 · (22 jun. feriado)", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Conversatorio", date: "28 de junio", time: "Domingo · 19:30–21:00", mode: "Virtual" },
      ],
    },
    {
      n: 3,
      title: "Liderazgo y gestión de proyectos",
      desc: "Liderazgo ético, oratoria y diseño de microproyectos aplicables.",
      units: [
        { u: "Liderazgo ético", date: "29 de junio, 01 y 03 de julio", time: "Lunes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Habilidades blandas y oratoria", date: "06, 08 y 10 de julio", time: "Lunes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Gestión de actividades", date: "13, 15 y 17 de julio", time: "Lunes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Formulación de microproyectos", date: "20, 22 y 24 de julio", time: "Lunes y miércoles · 18:00–20:00", mode: "Presencial" },
        { u: "Prácticas", date: "—", time: "Viernes · 18:00–20:00", mode: "Presencial" },
        { u: "Cierre de módulos — Presentación final de microproyecto", date: "27 de julio", time: "Lunes · 18:00–20:00", mode: "Presencial" },
      ],
    },
  ],

  benefits: [
    { t: "Formación de alto nivel", d: "Docentes y expositores expertos en ciencias políticas, derecho y gestión de proyectos." },
    { t: "Material digital", d: "Contenido complementario disponible en plataforma durante todo el programa." },
    { t: "Metodología vivencial", d: "Participa en debates, simulaciones y diagnósticos reales en la comunidad." },
    { t: "Certificación institucional", d: "Al cumplir con la evaluación continua de los tres módulos." },
    { t: "Networking", d: "Acceso a una red de jóvenes líderes y mentores profesionales." },
  ],

  evaluation: [
    { l: "Asistencia y participación activa", r: "20–30%" },
    { l: "Elaboración de documentos y microproyectos", r: "35–45%" },
    { l: "Evaluación final de cada módulo", r: "30–40%" },
  ],

  steps: [
    { n: "01", t: "Completa el formulario", d: "Llena la inscripción en línea con tus datos y motivación." },
    { n: "02", t: "Entrevista personal", d: "Los candidatos seleccionados serán contactados para una entrevista." },
    { n: "03", t: "Carta de admisión", d: "Recibe tu carta oficial e inicia tu camino como líder del Valle." },
  ],

  team: [
    { name: "Sergio Molina", role: "Director General", bio: "Abogado comprometido con la innovación social y el desarrollo integral. Cree que el cambio real exige estructuras técnicas sólidas para consolidar un legado de excelencia académica y responsabilidad civil.", glyph: "SM", image: "/integrantes/sergio.png" },
    { name: "Andrés Blanco", role: "Asuntos Adm. y RR.EE.", bio: "Abogado comprometido con su sociedad y su juventud. Convencido de que el cambio nace de lo colectivo, mediante la formación de liderazgos y espacios de transformación en la realidad boliviana.", glyph: "AB", image: "/integrantes/andres.png" },
    { name: "Faviana Méndez", role: "Directora Académica", bio: "Egresada de Cs. de la Educación con mención en psicopedagogía. Terapeuta psicopedagógica y maestra en educación integral. Comprometida con una educación integral y personalizada para los jóvenes.", glyph: "FM", image: "/integrantes/faviana.png" },
    { name: "André Pérez", role: "Director de Marketing", bio: "Experto en Marketing Digital y Relaciones Públicas, con experiencia nacional e internacional en proyectos comunicacionales de alto impacto educativo. Profesor de oratoria y comunicación efectiva.", glyph: "AP", quote: "Ningún miedo es más grande que un sueño.", image: "/integrantes/andre.png" },
    { name: "Pedro Arce", role: "Comunicación y Vocería", bio: "Experto en liderazgo basado en colaboración comunitaria, oratoria y acción social. Con el entusiasmo de dar cara y voz a este tipo de proyectos que fortalecen a la juventud ciudadana.", glyph: "PA", image: "/integrantes/pedro.png" },
  ],

  graduates: [
    { name: "María López", gen: "2023", role: "Activista Municipal", glyph: "ML", impact: "Lideró proyecto de reciclaje comunitario en zona sur de Cochabamba." },
    { name: "Carlos Rodríguez", gen: "2022", role: "Representante UMSS", glyph: "CR", impact: "Elegido representante estudiantil en la universidad mayor." },
    { name: "Sofía Zambrana", gen: "2024", role: "Emprendedora Social", glyph: "SZ", impact: "Fundó ONG de educación rural para niños en Sacaba." },
    { name: "Diego Vargas", gen: "2023", role: "Promotor Cultural", glyph: "DV", impact: "Gestiona espacios culturales juveniles en Quillacollo." },
    { name: "Gabriela Montaño", gen: "2024", role: "Investigadora Cívica", glyph: "GM", impact: "Publica sobre participación política juvenil en Bolivia." },
    { name: "Martín Peña", gen: "2022", role: "Líder Comunitario", glyph: "MP", impact: "Coordina red de 60 voluntarios en la zona norte." },
  ],

  testimonials: [
    { text: "Líderes del Valle me enseñó que el cambio empieza cuando te comprometes con tu comunidad. Salí con herramientas reales y una red de amigos que también quieren transformar Bolivia.", name: "Ana García", role: "Generación 2023" },
    { text: "El programa cambió completamente mi perspectiva. Antes creía que la política no era para mí. Ahora entiendo que la participación ciudadana es responsabilidad de todos.", name: "Luis Mendoza", role: "Generación 2022" },
    { text: "Los docentes no solo enseñan, también inspiran. Cada módulo fue una experiencia que me desafió a crecer como persona y como ciudadano boliviano.", name: "Patricia Soria", role: "Generación 2024" },
    { text: "Gracias a este programa hoy dirijo un grupo juvenil en mi barrio. La formación me dio la confianza y las herramientas para liderar con responsabilidad.", name: "Roberto Aranda", role: "Generación 2023" },
  ],
};

export default data;
