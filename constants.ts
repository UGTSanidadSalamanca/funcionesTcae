import type { SectionData } from './types';
import { BookOpenIcon } from './components/icons/BookOpenIcon';
import { SparklesIcon } from './components/icons/SparklesIcon';
import { BriefcaseIcon } from './components/icons/BriefcaseIcon';
import { XCircleIcon } from './components/icons/XCircleIcon';
import { ScaleIcon } from './components/icons/ScaleIcon';
import { ArrowTrendingUpIcon } from './components/icons/ArrowTrendingUpIcon';
import { HeartIcon } from './components/icons/HeartIcon';
import { BeakerIcon } from './components/icons/BeakerIcon';
import { LifebuoyIcon } from './components/icons/LifebuoyIcon';
import { DocumentTextIcon } from './components/icons/DocumentTextIcon';
import { BuildingStorefrontIcon } from './components/icons/BuildingStorefrontIcon';


export const SECTIONS: SectionData[] = [
  {
    id: 'que-es',
    title: '¿Qué es un TCAE?',
    icon: BookOpenIcon,
    content: [
      {
        type: 'paragraph',
        title: 'Definición y Rol Fundamental',
        text: 'El Técnico en Cuidados Auxiliares de Enfermería (TCAE) es un profesional sanitario con una titulación oficial de Formación Profesional de Grado Medio (1.400 horas). Son una pieza clave en los equipos de enfermería, dedicados a proporcionar cuidados auxiliares al paciente y a mantener las condiciones sanitarias de su entorno.'
      },
      {
        type: 'paragraph',
        title: 'Ubicación y Supervisión',
        text: 'Actúan de forma autónoma en los cuidados básicos, pero siempre bajo la supervisión y dependencia técnica del Diplomado Universitario en Enfermería (DUE). Su labor se rige por normativas profesionales, un profundo sentido de la responsabilidad y el compromiso con la salud y el bienestar del ciudadano.'
      }
    ]
  },
  {
    id: 'competencias',
    title: 'Competencias Generales',
    icon: SparklesIcon,
    content: [
      {
        type: 'list',
        title: 'Habilidades Clave del TCAE',
        items: [
          'Comunicación y Apoyo Psicológico: Promueven la humanización de la asistencia sanitaria, ofreciendo apoyo y educación.',
          'Colaboración en Equipo: Trabajan activamente con otros profesionales, asegurando un flujo de información eficiente.',
          'Adaptabilidad: Se adaptan a nuevas situaciones laborales derivadas de innovaciones tecnológicas y organizativas.',
          'Actuación en Emergencias: Capaces de transmitir alertas y aplicar protocolos de seguridad en situaciones críticas.',
          'Visión Integral: Comprenden el sistema sanitario en su totalidad (organización, función, aspectos sociales y administrativos).',
          'Formación Continua: Mantienen sus conocimientos y aptitudes actualizados constantemente.'
        ]
      }
    ]
  },
  {
    id: 'funciones',
    title: 'Funciones Específicas',
    icon: BriefcaseIcon,
    content: [
      {
        type: 'accordion',
        items: [
          {
            title: 'Cuidado Directo al Paciente',
            icon: HeartIcon,
            content: [
              'Higiene y aseo personal (total/parcial, bucal, capilar).',
              'Movilización, traslados y ayuda a la deambulación.',
              'Apoyo en la alimentación (oral, asistida, sonda nasogástrica).',
              'Toma de constantes vitales y recogida de muestras/excretas.',
              'Administración de medicación por vía oral, rectal y tópica (bajo supervisión).',
              'Cuidados post-mortem (preparación del cuerpo).'
            ]
          },
          {
            title: 'Higiene del Entorno y Material',
            icon: BeakerIcon,
            content: [
              'Limpieza, desinfección y esterilización de instrumental y material no desechable.',
              'Mantenimiento del orden y la limpieza en la habitación del paciente.',
              'Control de infecciones nosocomiales mediante técnicas de aislamiento.',
              'Gestión y eliminación segura de residuos sanitarios.'
            ]
          },
          {
            title: 'Apoyo y Educación para la Salud',
            icon: LifebuoyIcon,
            content: [
              'Detección de necesidades psicológicas básicas y registro de observaciones.',
              'Prestación de apoyo psicológico básico para mejorar la autoestima y comunicación.',
              'Promoción de hábitos de autocuidado y vida saludable.',
              'Información adaptada a pacientes, familiares y colectivos.'
            ]
          },
          {
            title: 'Tareas Administrativas',
            icon: DocumentTextIcon,
            content: [
              'Gestión de citas, recepción y registro de datos de pacientes.',
              'Control y administración de existencias de material.',
              'Organización de archivos clínicos y codificación de datos.',
              'Uso de software para gestión de consultas y almacén.'
            ]
          },
          {
            title: 'Funciones Especializadas por Servicio',
            icon: BuildingStorefrontIcon,
            content: [
              'Quirófano: Preparación de material, reposición de batas, limpieza de instrumental.',
              'Tocología: Asistencia a embarazadas y recién nacidos, limpieza y preparación de material.',
              'Odontología: Preparación de materiales dentales, instrumentación, revelado de radiografías.',
              'Urgencias: Aplicación de primeros auxilios como RCP básica, manejo de hemorragias, etc.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'prohibiciones',
    title: 'Prohibiciones Específicas',
    icon: XCircleIcon,
    content: [
      {
        type: 'list',
        title: 'Límites de Actuación Profesional',
        text: 'Para no invadir competencias de personal titulado superior, un TCAE NO puede realizar las siguientes acciones:',
        items: [
          'Administración de medicamentos por vía parenteral (intravenosa, intramuscular, etc.).',
          'Realización de punciones, escarificaciones o cualquier otra técnica diagnóstica invasiva.',
          'Aplicación de tratamientos curativos que no sean de carácter medicamentoso simple.',
          'Administración de sustancias que requieran instrumental o maniobras cuidadosas.',
          'Ayudar directamente al personal médico en intervenciones quirúrgicas.'
        ]
      },
      {
        type: 'quiz',
        title: '¡Pon a prueba tus conocimientos!',
        questions: [
          {
            question: '¿Puede un TCAE administrar una inyección intramuscular?',
            options: ['Sí, si se lo pide un médico', 'No, está fuera de sus competencias', 'Sí, si el paciente está de acuerdo'],
            correctAnswer: 'No, está fuera de sus competencias',
            explanation: 'La administración de medicación por vía parenteral es una competencia del personal de enfermería (DUE), no del TCAE.'
          },
          {
            question: '¿Cuál de estas tareas SÍ es una función del TCAE?',
            options: ['Realizar una sutura simple', 'Ayudar en el aseo diario de un paciente', 'Diagnosticar una enfermedad leve'],
            correctAnswer: 'Ayudar en el aseo diario de un paciente',
            explanation: 'La higiene y el aseo personal del paciente es una de las funciones fundamentales y más importantes del TCAE.'
          }
        ]
      }
    ]
  },
  {
    id: 'marco-legal',
    title: 'Marco Legal y Ético',
    icon: ScaleIcon,
    content: [
      {
        type: 'list',
        title: 'La "Lex Artis" como Guía',
        text: 'El ejercicio del TCAE se rige por la "Lex Artis", un estándar de buena práctica profesional que implica:',
        items: [
          'Actuación diligente, prudente y razonable.',
          'Respeto a la autonomía del paciente, consentimiento informado y confidencialidad.',
          'Uso de la evidencia científica y los protocolos establecidos.',
          'Deber de formación continua para mantener la competencia profesional.'
        ]
      },
       {
        type: 'list',
        title: 'Derechos y Deberes',
        text: 'Como personal estatutario, los TCAE tienen derechos (estabilidad, formación, respeto) y deberes (lealtad, eficacia, actualización de conocimientos, respeto a la dignidad del usuario).',
        items: []
      }
    ]
  },
  {
    id: 'evolucion',
    title: 'Evolución del Rol',
    icon: ArrowTrendingUpIcon,
    content: [
      {
        type: 'list',
        title: 'Tendencias Futuras y Nuevas Necesidades',
        text: 'La profesión está en constante cambio. Las tendencias futuras incluyen:',
        items: [
          'Mayor participación en atención primaria y domiciliaria.',
          'Mayor integración en equipos multidisciplinares.',
          'Mayor flexibilidad e intercambiabilidad entre puestos.',
          'Necesidad de formación en técnicas psicosociales, informática y educación sanitaria avanzada.'
        ]
      }
    ]
  }
];
