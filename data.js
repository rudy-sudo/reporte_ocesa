const DASHBOARD_DATA = {
  "meta": {
    "course": "Alquimistas de IA — Curso OCESA",
    "subtitle": "Cohorte Febrero 2026",
    "total_enrolled": 89,
    "total_with_activity": 55,
    "total_evaluated": 52,
    "total_evaluations": 101,
    "generated_date": "2026-03-17",
    "sprints": [
      {
        "id": "sprint_1",
        "name": "Sprint 1: El Despertar del Alquimista",
        "emoji": "🧪",
        "theme": "Ingeniería de Prompting"
      },
      {
        "id": "sprint_2",
        "name": "Sprint 2: Ingeniería de Precisión",
        "emoji": "🛡️",
        "theme": "Técnicas Avanzadas y Anti-Slop"
      },
      {
        "id": "sprint_3",
        "name": "Sprint 3: Flujos Cognitivos",
        "emoji": "🧩",
        "theme": "Sistemas Supervisor-Worker y SOPs"
      },
      {
        "id": "sprint_4",
        "name": "Sprint 4: Orquestación Cognitiva",
        "emoji": "🔮",
        "theme": "Artifacts y Selección de Modelo"
      }
    ]
  },
  "overview": {
    "avg_score": 3.12,
    "sprint_averages": {
      "sprint_1": 3.12,
      "sprint_2": 3.2,
      "sprint_3": 3.19,
      "sprint_4": 3.46
    },
    "sprint_participation": {
      "sprint_1": 49,
      "sprint_2": 30,
      "sprint_3": 17,
      "sprint_4": 5
    },
    "classifications": {
      "🔮 Alquimista Destacado": 5,
      "⚗️ Alquimista en Formación": 20,
      "🧪 Aprendiz Activo": 27,
      "⚠️ Participación Insuficiente": 0
    },
    "level_distribution": {
      "Destacado": 43,
      "Competente": 40,
      "En Desarrollo": 15,
      "Emergente": 3
    },
    "score_histogram": {
      "4.0": 9,
      "3.8": 3,
      "3.7": 2,
      "3.6": 1,
      "3.5": 4,
      "3.4": 4,
      "3.3": 2,
      "3.2": 6,
      "3.0": 7,
      "2.8": 1,
      "2.7": 2,
      "2.4": 2,
      "2.2": 1,
      "2.0": 5,
      "1.7": 1,
      "1.3": 1,
      "1.0": 1
    },
    "inactive_students": 34,
    "maturity_distribution": {
      "Alquimista Destacado": 10,
      "Alquimista en Práctica": 23,
      "Aprendiz Activo": 19
    },
    "application_areas": {
      "Ventas y Propuestas": 8,
      "Marketing y Contenido": 20,
      "Producción de Eventos": 5,
      "Otro": 2,
      "Recursos Humanos": 1,
      "Tecnología y Desarrollo": 1,
      "Análisis de Datos": 6,
      "Gestión de Proyectos": 7,
      "Operaciones": 1,
      "Educación y Capacitación": 1
    },
    "sprint_maturity": {
      "sprint_1": {
        "Alquimista en Práctica": 18,
        "Aprendiz Activo": 30,
        "Alquimista Destacado": 1
      },
      "sprint_2": {
        "Alquimista en Práctica": 15,
        "Aprendiz Activo": 12,
        "Alquimista Destacado": 3
      },
      "sprint_3": {
        "Alquimista Destacado": 6,
        "Alquimista en Práctica": 10,
        "Aprendiz Activo": 1
      },
      "sprint_4": {
        "Alquimista en Práctica": 3,
        "Aprendiz Activo": 1,
        "Alquimista Destacado": 1
      }
    },
    "level_up_summary": {
      "Aprendiz Activo": {
        "count": 19,
        "next_level": "Alquimista en Práctica",
        "general_advice": "Necesitan identificar un problema recurrente en su trabajo diario y construir una solución de IA específica para resolverlo. El salto clave es pasar de usar IA como herramienta genérica a tener un caso de uso real y medible."
      },
      "Alquimista en Práctica": {
        "count": 23,
        "next_level": "Alquimista Destacado",
        "general_advice": "Ya tienen casos de uso reales. El siguiente paso es construir soluciones reutilizables: GPTs personalizados, flujos automatizados, o sistemas que otros compañeros puedan usar sin necesidad de saber de IA."
      },
      "Alquimista Destacado": {
        "count": 10,
        "next_level": "Multiplicador",
        "general_advice": "Están construyendo herramientas escalables. Su siguiente impacto es documentar y socializar sus soluciones para que otros equipos las adopten, convirtiéndose en referentes de IA dentro de la organización."
      }
    }
  },
  "students": [
    {
      "id": "100386131815307003617",
      "name": "Merving Pastor Giron Zarate",
      "is_named": true,
      "avg_score": 3.83,
      "sprints_count": 4,
      "total_sprints_with_work": 4,
      "alchemist_class": "🔮 Alquimista Destacado",
      "progression": -0.7,
      "scores": [
        4.0,
        4.0,
        4.0,
        3.3
      ],
      "levels": [
        "Destacado",
        "Destacado",
        "Destacado",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "Las restricciones negativas explícitas son la firma de un ingeniero de prompts: el estudiante entendió que el modelo tiende a 'expandirse' y construyó barreras precisas contra ese comportamiento.",
            "La instrucción de documentar supuestos y riesgos cuando algo no está definido es una cláusula anti-alucinación integrada de forma natural al flujo del prompt."
          ],
          "recommendations": [
            "Agregar un ejemplo de propuesta bien formateada (Few-Shot) para anclar mejor el tono ejecutivo y no técnico deseado.",
            "Considerar añadir una sección de 'Criterios de calidad del output' donde el modelo auto-evalúe antes de entregar si cumple con la condición de ser entendible para personas no técnicas."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Usó restricciones negativas sistemáticas como mecanismo de control de calidad, una técnica avanzada que demuestra comprensión real de cómo funciona el modelo."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Estructura completa y sofisticada: Rol (consultor en soluciones digitales), Contexto (proyecto informativo en Laravel), Tarea (propuesta técnica ejecutiva), y Formato de salida con 7 secciones numeradas. Las 'Condiciones clave' son restricciones anti-alucinación integradas al prompt."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt resuelve un problema real y específico de su trabajo: propuestas técnicas sin ambigüedad contractual para clientes no técnicos. Los detalles (Laravel 5.6, perfiles específicos, exclusión explícita de creación de contenidos) demuestran un caso real con consecuencias reales."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Las restricciones negativas ('No inventes roles', 'No incluyas creación de contenidos', 'No plantees por fases') son un mecanismo anti-expansión creativa sofisticado. Demuestra comprensión de los modos de fallo del modelo y los mitiga preventivamente."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado para generar propuestas técnicas ejecutivas de desarrollo web, diseñado para traducir requerimientos técnicos a lenguaje comprensible para tomadores de decisiones no técnicos. El prompt incluye restricciones de alcance, estructura de entrega y gestión de supuestos/riesgos, lo que lo convierte en una herramienta replicable para el área de ventas o desarrollo de proyectos digitales.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Generación de propuestas técnicas ejecutivas para proyectos de desarrollo web, con claridad de alcance, esfuerzo por perfil y gestión de expectativas con clientes.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema real y recurrente en contextos de consultoría o desarrollo: traducir requerimientos técnicos a documentos ejecutivos sin ambigüedades. La estructura detallada con restricciones explícitas, supuestos, riesgos y formato de entrega muestra aplicación profesional directa, no solo experimentación básica.",
          "level_up_suggestion": "Para alcanzar el nivel Alquimista Destacado, convierte este prompt en un GPT personalizado donde otros colegas solo ingresen el contexto del cliente y obtengan la propuesta lista, eliminando la necesidad de conocer la anatomía del prompt. Agrega un paso de validación automática que compare el alcance con una plantilla maestra de exclusiones comunes en OCESA."
        },
        "sprint_2": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "La documentación antes/después es ejemplar: identifica fallos específicos del modelo, aplica mecánicas de control precisas, y cuantifica mejoras concretas. Es la mejor práctica de ingeniería de prompts documentada.",
            "El concepto de 'gobernanza estricta de QA' con límites de rol no cruzables (UX no valida base de datos, Back End no valida diseño) es una solución arquitectónica sofisticada a un problema real."
          ],
          "recommendations": [
            "El prompt final se corta en la sección de DevOps; completar esa sección para tener el artefacto íntegro.",
            "Agregar un paso de verificación explícita al final: que el modelo confirme que cumplió las 3 mecánicas de control antes de entregar la propuesta."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Convirtió un fallo del modelo en un diagnóstico técnico preciso y lo resolvió con arquitectura de control, no con corrección superficial del texto."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Domina Chain-of-Thought (análisis previo obligatorio antes de redactar) y combina con restricciones negativas y gobernanza de roles como mecanismos de control. Nombra y aplica las técnicas con precisión técnica real."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "El prompt final incluye 'ANÁLISIS OBLIGATORIO PREVIO', 'Restricción tecnológica obligatoria (anti-alucinación)' y 'Distribución correcta de QA sin cruces'. Cada sección tiene reglas explícitas. La narrativa antes/después del resultado demuestra criterio de calidad consciente."
            },
            "Iteración y Refinamiento": {
              "score": 4,
              "justification": "Documenta el proceso con precisión: lista los 5 fallos del modelo anterior, nombra las 3 palancas de mejora que activó, y describe el resultado transformado con 6 mejoras específicas. Es un caso de estudio completo de iteración."
            }
          },
          "work_synthesis": "Desarrolló un sistema de prompting de alta precisión para generar propuestas técnicas ejecutivas sin ambigüedades de alcance, aplicado directamente a proyectos reales en Laravel 5.6. El sistema usa razonamiento forzado previo, restricciones negativas explícitas y gobernanza de roles para eliminar supuestos tecnológicos no autorizados y sobrealcance contractual.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Generación de propuestas técnicas ejecutivas para proyectos de desarrollo web, con control de alcance y separación de responsabilidades por perfil.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Resuelve un problema recurrente y real de su trabajo (desalineación técnica en propuestas), con una solución estructural documentada y reproducible. Aunque el prompt es sofisticado, aún no construye un artefacto reutilizable por otros (GPT, flujo automatizado o plantilla compartida).",
          "level_up_suggestion": "Empaqueta este prompt como un GPT personalizado o plantilla estructurada que cualquier colega pueda usar sin conocer la ingeniería detrás, y agrégale un paso de validación automática del output contra un checklist de alcance definido."
        },
        "sprint_3": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "La frase 'Un prompt aislado solo genera. El sistema Supervisor-Worker genera y audita' es la articulación más precisa y técnica de la diferencia arquitectónica vista en este sprint.",
            "La visión de reutilización como 'estándar interno de cotización' que puede usar el equipo demuestra pensamiento de productización, no solo de uso personal."
          ],
          "recommendations": [
            "Describir brevemente qué instrucciones tiene el Supervisor: ¿cómo detecta scope creep exactamente? ¿Qué criterios usa para rechazar un output del Worker?",
            "Agregar un caso de ejemplo de uso del GPT para que otros puedan entender el flujo completo de entrada y salida."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Piensa en productización y estandarización para el equipo, no solo en uso individual. Entiende la IA como infraestructura institucional."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 4,
              "justification": "Articula claramente la arquitectura Supervisor-Worker: el Supervisor actúa como filtro de calidad que detecta scope creep, cruces de perfiles y supuestos implícitos. El sistema tiene link funcional a un GPT construido."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El problema de propuestas bien redactadas pero con riesgo contractual es genuinamente real y crítico para una empresa de desarrollo web. Las consecuencias de error (sobrealcance, pérdida de rentabilidad) están articuladas con precisión."
            },
            "Justificación Técnica": {
              "score": 4,
              "justification": "Justificación técnica excelente: 'Un prompt aislado solo genera. El sistema Supervisor–Worker genera y audita.' Es una distinción precisa, técnica y clara que demuestra comprensión real de la diferencia arquitectónica."
            },
            "Calidad de la Evidencia": {
              "score": 4,
              "justification": "Proporciona link funcional al GPT 'Arquitecto de Cotizaciones' en ChatGPT, lo que constituye evidencia de implementación real, no solo diseño teórico."
            }
          },
          "work_synthesis": "El estudiante construyó un GPT llamado 'Arquitecto de Cotizaciones' que implementa una arquitectura Supervisor-Worker para generar y auditar propuestas técnicas, detectando scope creep, cruces de perfiles y supuestos implícitos antes de que lleguen al cliente. El sistema convierte un proceso manual y riesgoso en un flujo controlado que protege la rentabilidad y el blindaje contractual de la empresa.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Generación y auditoría automatizada de cotizaciones técnicas con control de alcance y consistencia contractual",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "Construyó y publicó un GPT funcional con arquitectura multi-capa (Supervisor-Worker) que otros miembros del equipo pueden reutilizar como estándar interno, superando el nivel de uso personal para convertirse en una solución institucionalizable con lógica de calidad incorporada.",
          "level_up_suggestion": "Integrar el GPT con herramientas como HubSpot o Notion vía API para que las cotizaciones aprobadas se registren automáticamente, y añadir un módulo que aprenda de propuestas ganadoras/perdidas para refinar los criterios del Supervisor con datos reales."
        },
        "sprint_4": {
          "score": 3.3,
          "level": "Competente",
          "strengths": [
            "El artefacto es el más completo y ejecutable de su sprint: 7 fases, tabla rol/horas, radar de riesgos, reglas de comportamiento. Es un activo de trabajo real.",
            "La inclusión de 'Requiere validación' para requerimientos ambiguos es una cláusula anti-alucinación que demuestra madurez técnica."
          ],
          "recommendations": [
            "Agregar el criterio de selección de modelo: ¿por qué esta herramienta específica para este tipo de estimaciones? ¿Probó diferentes modelos?",
            "La explicación de por qué es mejor que un prompt aislado podría ser más profunda: mencionar la consistencia cross-proyecto y la memoria del contexto acumulado como ventajas sistémicas."
          ],
          "alchemist_signals": [
            "El artefacto muestra el nivel de madurez más alto del grupo en estructura y ejecutabilidad; el área de crecimiento es articular mejor la capa de orquestación y selección estratégica de herramientas."
          ],
          "criteria": {
            "Orquestación y Selección": {
              "score": 3,
              "justification": "El artefacto tiene criterio de selección implícito (arquitecto de soluciones senior para proyectos web) y estructura para múltiples roles. Sin embargo, no menciona criterio explícito de selección de modelo/herramienta ni combina múltiples herramientas."
            },
            "Artefacto Cognitivo": {
              "score": 4,
              "justification": "El artefacto es excepcionalmente bien estructurado: Input/Output definidos, 7 fases del proyecto, tabla de estimación por rol, radar de riesgos, y reglas de comportamiento explícitas. Es un activo reutilizable de producción inmediata."
            },
            "Visión de Workflow Profesional": {
              "score": 3,
              "justification": "Conecta claramente con su práctica (transformar requerimientos en propuestas técnicas con estimaciones) y tiene visión de evolución (tablas de horas base por complejidad). Sin embargo, la explicación de por qué es mejor que un prompt aislado es breve ('estructura fija y reglas')."
            }
          },
          "work_synthesis": "El estudiante construyó un artefacto cognitivo que actúa como arquitecto de soluciones senior para transformar requerimientos de clientes en propuestas técnicas estructuradas con fases, roles y estimación de horas. El sistema incluye reglas de manejo de ambigüedad, radar de riesgos y formato ejecutivo, funcionando como una plantilla reutilizable para generar consistencia en todas las propuestas comerciales de proyectos web.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Generación de propuestas técnicas con desglose de fases, roles y estimación de horas para proyectos digitales dirigidos a clientes o stakeholders.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El artefacto resuelve un problema real y recurrente de su trabajo (cotización y propuesta de proyectos), con estructura fija, reglas de comportamiento explícitas y salidas estandarizadas que van más allá de un prompt aislado. Sin embargo, aún no construye un GPT o flujo automatizado que otros puedan usar sin su intervención directa.",
          "level_up_suggestion": "Convertir este artefacto en un GPT personalizado con tablas de horas base precargadas por nivel de complejidad, para que otros miembros del equipo de ventas o tecnología puedan generar propuestas sin necesitar al experto en el loop."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Ventas y Propuestas",
      "level_up_suggestion": "Convertir este artefacto en un GPT personalizado con tablas de horas base precargadas por nivel de complejidad, para que otros miembros del equipo de ventas o tecnología puedan generar propuestas sin necesitar al experto en el loop."
    },
    {
      "id": "108184187733625290881",
      "name": "Martha Martinez",
      "is_named": true,
      "avg_score": 3.35,
      "sprints_count": 4,
      "total_sprints_with_work": 4,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 1.7,
      "scores": [
        2.3,
        3.3,
        3.8,
        4.0
      ],
      "levels": [
        "En Desarrollo",
        "Competente",
        "Destacado",
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.3,
          "level": "En Desarrollo",
          "strengths": [
            "El correo generado demuestra que obtuvo resultados de alta calidad con la IA: tono apropiado, estructura clara, y mensaje ejecutivo efectivo para su equipo.",
            "El caso de uso (ventas no registradas en forecast) es genuinamente relevante para su rol de Financial Controller."
          ],
          "recommendations": [
            "La instrucción pedía compartir el prompt construido, no el output. Revisar esta distinción es clave: el prompt es el instrumento que diseñas, el output es lo que produce.",
            "Reconstruir el prompt que generó este correo aplicando la estructura: Rol (Financial Controller que necesita un correo), Contexto (ventas sin registrar, equipo comercial), Tarea (redactar comunicación motivacional), Formato (correo profesional con plantilla de datos)."
          ],
          "alchemist_signals": [
            "El output de calidad demuestra intuición para obtener buenos resultados, pero aún falta el paso de codificar ese conocimiento en un prompt estructurado y reutilizable."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 2,
              "justification": "La respuesta comparte el output generado por la IA (un correo) en lugar del prompt que lo generó. No se puede evaluar la estructura Rol/Contexto/Tarea/Formato porque no está presente."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El output sí refleja un caso real de su trabajo (forecast de ventas, equipo comercial), con detalles específicos de su industria y rol como Financial Controller. La intención de aplicación es clara aunque no se muestre el prompt."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "No se evidencia el proceso de diseño del prompt ni iteración. Compartir el output en lugar del prompt sugiere que aún no distingue entre el instrumento (prompt) y el producto (output)."
            }
          },
          "work_synthesis": "Martha construyó un prompt para generar un correo formal dirigido a su equipo comercial, solicitando el registro completo de ventas para integrarlas al forecast oficial. El output resuelve un problema de comunicación interna real: motivar al equipo a completar datos de ventas incompletas sin que su esfuerzo quede fuera de las proyecciones.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Comunicación interna para cierre y registro de ventas en sistema de forecast comercial",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "Martha demuestra habilidad para usar IA en generación de comunicaciones profesionales con tono y estructura adecuados, pero el trabajo muestra solo el output (el correo), no el prompt estructurado que lo generó, lo que impide evaluar la ingeniería detrás. No hay evidencia de un caso de uso recurrente ni de integración a un flujo de trabajo sistematizado.",
          "level_up_suggestion": "Comparte el prompt exacto que usaste (con contexto, instrucción, tono, restricciones) para evidenciar tu habilidad de ingeniería; luego crea una plantilla reutilizable que tu equipo pueda usar cada semana para solicitar actualizaciones de CRM o forecast, convirtiendo este ejercicio en un proceso recurrente real."
        },
        "sprint_2": {
          "score": 3.3,
          "level": "Competente",
          "strengths": [
            "El output financiero es de nivel profesional real: metodología auditable, diagnósticos basados en reglas, manejo correcto de datos insuficientes. Demuestra que sabe estructurar análisis complejos con la IA.",
            "La densidad informativa del resultado (fórmulas, porcentajes, interpretación ejecutiva) demuestra dominio de Anti-Slop en la práctica, aunque no se nombre la técnica."
          ],
          "recommendations": [
            "Compartir el prompt final que generó este análisis. El output es excelente pero sin el prompt no se puede evaluar la ingeniería que lo produjo.",
            "Nombrar explícitamente la técnica usada (probablemente CoT con contexto estructurado) y describir qué cambios se hicieron en el proceso iterativo para llegar a este resultado."
          ],
          "alchemist_signals": [
            "El nivel de sofisticación del análisis financiero sugiere una profesional con capacidad para trasladar su expertise al diseño de prompts complejos; el siguiente paso es documentar ese proceso."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "La respuesta muestra el output de un análisis financiero sofisticado con metodología explícita (mapeos, cálculos, diagnósticos por reglas). Si bien el output es excelente, la técnica aplicada (CoT, Few-Shot, Step-Back) no se nombra explícitamente aunque el razonamiento paso a paso del modelo es evidente."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "El output es excepcionalmente denso: fórmulas específicas, porcentajes exactos, diagnósticos categorizados por reglas, manejo explícito de datos insuficientes (N/A). Cero relleno, máxima precisión financiera."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "Se evidencia que hubo construcción progresiva del prompt (la IA nombra la instrucción del usuario 'Senior Financial Controller – Sponsorship Division'), aunque no se muestra el proceso iterativo explícito ni el prompt final que se usó."
            }
          },
          "work_synthesis": "Martha construyó un reporte automatizado de variaciones financieras (Actual vs Forecast) para la división de patrocinios, con cálculos de margen, diagnósticos por categoría y formato listo para Excel. La solución transforma datos crudos de contratos en inteligencia accionable para tomar decisiones sobre rentabilidad de patrocinadores por evento.",
          "application_area": "Análisis de Datos",
          "application_detail": "Control financiero de patrocinios: comparación Actual vs Forecast con diagnósticos automáticos de desviación por ingreso o costo de activación.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Martha aplicó la IA a un problema real y recurrente de su trabajo como Senior Financial Controller, definiendo reglas de negocio específicas (diagnósticos, mapeo de columnas, normalización de signos) y obteniendo un output directamente utilizable en su flujo de trabajo. Sin embargo, la solución aún depende de su operación manual y no está empaquetada para que otros la reusen.",
          "level_up_suggestion": "Construye un GPT personalizado o una plantilla de prompt documentada que cualquier analista de la división pueda usar con sus propios datos, añadiendo una capa de visualización automática (ej. formato condicional sugerido o gráfico de waterfall) para escalar el impacto más allá de tu propio uso."
        },
        "sprint_3": {
          "score": 3.8,
          "level": "Destacado",
          "strengths": [
            "El System Prompt incluye lógica de negocio real de OCESA (SAP, Ticketmaster, SSM) con fórmulas financieras específicas, lo que lo convierte en un activo productivo real, no un ejercicio académico.",
            "La regla de auditoría del 5% de diferencia entre fuentes demuestra criterio profesional de conciliación contable integrado directamente en el sistema."
          ],
          "recommendations": [
            "Articular más claramente la arquitectura Supervisor-Worker: ¿quién actúa como supervisor que valida la calidad antes de entregar el output? Actualmente es un sistema robusto pero sin capa de supervisión explícita.",
            "Documentar cómo se reutilizaría mensualmente y qué tan difícil es actualizar el 'Maestro_Mapeo_Eventos' cuando cambian los eventos."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Codificó reglas de negocio financiero reales (fórmulas de margen, umbrales de conciliación) en un sistema de IA, creando un activo institucional de alto valor."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 4,
              "justification": "El System Prompt tiene arquitectura clara: rol definido (Senior Financial Process Engineer), objetivo explícito, algoritmo de procesamiento en pasos numerados con lógica de negocio (regla del 90%, fórmulas, auditoría del 5%), y formato de output estructurado."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El problema de consolidar SAP + Ticketmaster + SSM para calcular márgenes de contribución es un pain point real y específico de su rol en OCESA. Requiere genuinamente un sistema por la complejidad y recurrencia del proceso."
            },
            "Justificación Técnica": {
              "score": 3,
              "justification": "Justifica con ejemplos concretos ('no repites instrucciones, tiene memoria', 'cruce de datos en segundos') pero la explicación es más práctica que técnica; no articula formalmente la ventaja de un sistema sobre un prompt aislado."
            },
            "Calidad de la Evidencia": {
              "score": 4,
              "justification": "Incluye System Prompt completo con nivel de detalle técnico-financiero excepcional: fórmulas reales (Ingreso Total, Margen), reglas de negocio específicas (90% coincidencia), alertas de conciliación. Es un activo usable de inmediato."
            }
          },
          "work_synthesis": "Martha diseñó un sistema de inteligencia financiera que automatiza la consolidación de tres fuentes de datos (SSM, Ticketmaster y SAP) para calcular el margen de contribución por cliente y evento, eliminando el trabajo manual de cruce en Excel. El sistema incluye lógica de normalización con tolerancia al error, auditoría automática de discrepancias mayores al 5%, y genera un ranking de clientes por rentabilidad listo para toma de decisiones.",
          "application_area": "Análisis de Datos",
          "application_detail": "Conciliación financiera multi-fuente para cálculo de margen de contribución por evento/cliente en OCESA",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El system prompt resuelve un problema real, recurrente y específico de su operación diaria —el cruce doloroso entre SAP, SSM y Ticketmaster— con lógica de negocio propia (umbral del 90% para matching, alerta del 5% de discrepancia), lo que va claramente más allá de prompting básico y demuestra aplicación directa al trabajo.",
          "level_up_suggestion": "Para dar el salto a Alquimista Destacado, Martha debería convertir este system prompt en un GPT compartible con el equipo de finanzas, o bien encadenarlo en un flujo automatizado (ej. con Make o Zapier) que tome los archivos directamente desde una carpeta compartida y entregue el reporte sin intervención manual."
        },
        "sprint_4": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El concepto de artefacto como 'consultor de ventas senior' que elimina el sesgo humano y garantiza consistencia entre el análisis del lunes y del viernes es una articulación de valor ejecutivo muy clara.",
            "La visión de mejora futura (base de datos vectorial, comparación Q1 histórico, patrones estacionales) demuestra pensamiento de sistemas, no solo de herramientas."
          ],
          "recommendations": [
            "Compartir el System Prompt real del SDA. La descripción conceptual es excelente pero falta ver la implementación técnica para completar la evaluación del artefacto.",
            "Especificar qué herramienta/modelo eligió para el SDA y por qué (¿Claude por su capacidad analítica? ¿ChatGPT por la integración con Salesforce?). El criterio de selección de modelo es parte del aprendizaje del Sprint 4."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Conceptualizó un artefacto con bucle de retroalimentación y memoria histórica, pensando en evolución del sistema, no solo en la solución inmediata."
          ],
          "criteria": {
            "Orquestación y Selección": {
              "score": 4,
              "justification": "Demuestra criterio claro: nombra Salesforce como fuente, identifica KPIs específicos (CAC, valor promedio de contrato, ciclo de cierre), y articula por qué un artefacto supera a un prompt aislado (automatización, consistencia, reducción de sesgo). Menciona integración futura con base de datos vectorial."
            },
            "Artefacto Cognitivo": {
              "score": 4,
              "justification": "El SDA está estructurado en tres capas explícitas (Input, Motor de Análisis, Output), tiene nombre propio, propósito definido, y descripción de cada componente. Es un marco de trabajo bien conceptualizado y reutilizable."
            },
            "Visión de Workflow Profesional": {
              "score": 4,
              "justification": "Conecta directamente con la realidad de su trabajo: datos muertos en CRM, fatiga de análisis, variación de Win Rate entre ejecutivos. El plan de mejora (bucle de retroalimentación, memoria histórica, detección de patrones estacionales) muestra visión a largo plazo."
            }
          },
          "work_synthesis": "Martha construyó un marco de análisis estructurado llamado 'Sponsorship Deal Analyzer' que transforma datos brutos de Salesforce en reportes ejecutivos con decisiones comerciales claras. El artefacto actúa como un consultor de ventas senior automatizado, identificando cuellos de botella en el pipeline, variaciones en win rate entre ejecutivos y patrones de pérdida en negociaciones de patrocinios. Va más allá de un prompt simple al incorporar capas de contexto de CRM, lógica de análisis y generación de insights reutilizables.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Análisis automatizado de pipeline de patrocinios en Salesforce para equipos comerciales de OCESA",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Martha demuestra aplicación a un problema real y recurrente de su trabajo diario (análisis de CRM de patrocinios), con estructura de tres capas y KPIs específicos del negocio; sin embargo, el artefacto parece diseñado para uso propio y no hay evidencia concreta de que otros equipos puedan reutilizarlo de forma autónoma, lo que la mantiene en el nivel Practicante.",
          "level_up_suggestion": "Para dar el salto a Alquimista Destacado, Martha debería publicar el SDA como un GPT personalizado o un flujo en Make/Zapier conectado directamente a Salesforce, de modo que cualquier ejecutivo de ventas de OCESA pueda usarlo sin necesidad de conocer los prompts subyacentes."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Ventas y Propuestas",
      "level_up_suggestion": "Para dar el salto a Alquimista Destacado, Martha debería publicar el SDA como un GPT personalizado o un flujo en Make/Zapier conectado directamente a Salesforce, de modo que cualquier ejecutivo de ventas de OCESA pueda usarlo sin necesidad de conocer los prompts subyacentes."
    },
    {
      "id": "103108319800993678716",
      "name": "Luis Francisco Zúñiga Mendoza",
      "is_named": true,
      "avg_score": 3.2,
      "sprints_count": 4,
      "total_sprints_with_work": 4,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": -2.0,
      "scores": [
        4.0,
        4.0,
        2.8,
        2.0
      ],
      "levels": [
        "Destacado",
        "Destacado",
        "Competente",
        "En Desarrollo"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "Diseñó un sistema de auditoría con flujo lógico y separación clara de capas (técnica, identidad, estratégica), lo que demuestra pensamiento de arquitecto de prompts.",
            "El formato de salida 'Reporte Zero Errors' es altamente específico y ejecutable, con criterios de calidad propios de su industria."
          ],
          "recommendations": [
            "Agregar un ejemplo Few-Shot de auditoría para que el modelo entienda mejor el tono esperado en los 'Hallazgos Críticos'.",
            "Incluir una instrucción de manejo de casos límite (¿qué hacer si el manual de marca no tiene criterio para cierto elemento?)."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Creó un sistema de control de calidad propio con vocabulario propietario ('Zero Errors', 'Score de Alineación'), no solo aplicó una plantilla del sprint."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt presenta una estructura muy clara y profesional con SYSTEM ROLE, INPUTS numerados, WORKFLOW DE EJECUCIÓN en pasos y FORMATO DE SALIDA detallado. Va más allá de Rol/Contexto/Tarea/Formato con secciones bien diferenciadas."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt está directamente aplicado al rol de Brand Keeper de su agencia Gnius, con terminología específica (Brand Keeper, Score de Alineación, 'Reporte Zero Errors') que evidencia conocimiento profundo de su industria."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Muestra diseño arquitectónico consciente al separar la auditoría en tres pasos lógicos (Técnica, Identidad, Estratégica) y define un formato de salida estructurado. El uso de '[Insertar...]' como placeholders revela comprensión de cómo el modelo necesita inputs definidos."
            }
          },
          "work_synthesis": "Luis construyó un sistema de prompt estructurado que simula una Directora de QA para auditar entregables de comunicación contra un manual de marca y un brief estratégico. El sistema genera reportes estandarizados con hallazgos, score de alineación y recomendaciones, funcionando como un revisor de marca automatizable para una agencia.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Auditoría de entregables de comunicación y control de calidad de marca en agencia Gnius",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Va más allá del prompting básico: construyó un workflow de ejecución de 3 pasos con inputs modulares y formato de salida estandarizado (reporte ZERO ERRORS), lo que indica aplicación a un proceso de trabajo real y recurrente en su agencia, no solo experimentación.",
          "level_up_suggestion": "Para dar el salto a Alquimista Destacado, convierte este prompt en un GPT publicable que otros miembros de Gnius puedan usar sin conocer la ingeniería detrás, e integra la variable del Manual de Marca como documento cargable para eliminar el paso manual de inserción."
        },
        "sprint_2": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El ejemplo Few-Shot es de nivel producción: tiene formato exacto, handles reales, estructura verificable, y funciona como contrato con el modelo.",
            "El 'Protocolo Anti-Error' demuestra comprensión profunda de los modos de fallo del modelo y los mitiga de forma explícita y sistemática."
          ],
          "recommendations": [
            "Podría agregar un segundo ejemplo Few-Shot negativo (qué NO debe hacer) para reforzar aún más el molde.",
            "Documentar explícitamente cómo maneja el caso en que el episodio tenga más de 3 recomendaciones por host."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Identificó un fallo sistémico (alucinación por sobrecarga de tareas) y resolvió con arquitectura (separación de herramientas), no solo con corrección del prompt."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Aplica Few-Shot de forma sofisticada y correcta: proporciona un ejemplo de oro completo con formato exacto que actúa como molde para el modelo. La técnica está bien justificada en contexto (separar entregas para evitar alucinaciones)."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "El prompt tiene 'Protocolo Anti-Error' explícito con reglas concretas anti-alucinación ('No inventes', 'Si el contenido es ambiguo, señálalo') y estilo editorial directo ('Sin Relleno'). Densidad informativa muy alta."
            },
            "Iteración y Refinamiento": {
              "score": 4,
              "justification": "Narra claramente la evolución: de un asistente editorial general con alucinaciones a uno especializado por tipo de entregable. Explica la decisión de separar herramientas y el razonamiento detrás del uso de Few-Shot."
            }
          },
          "work_synthesis": "Luis Francisco construyó un asistente editorial especializado para extraer y formatear las recomendaciones semanales del podcast 'Mundo Futuro', separando responsabilidades que antes causaban errores en un prompt general. El sistema usa Few-Shot con un ejemplo de 'estándar de oro' para garantizar consistencia de formato, reglas anti-alucinación y manejo de múltiples formatos de entrada (PDF, texto, adjuntos). Resuelve un problema recurrente real de producción de contenido con una herramienta reutilizable semana a semana.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Curación y formateo automatizado de recomendaciones para publicación en redes sociales del podcast Mundo Futuro (OCESA/entretenimiento).",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Evidencia clara de aplicación a un flujo de trabajo real y recurrente: identifica un problema concreto (alucinaciones por sobrecarga en prompt general), lo diagnostica correctamente y construye una solución especializada con Few-Shot, protocolo anti-error y manejo de entradas variables. Va más allá del prompting básico al diseñar arquitectura de herramientas separadas por entregable.",
          "level_up_suggestion": "Para alcanzar Alquimista Destacado, empaqueta este asistente como un GPT publicado o instrucción de sistema en una herramienta compartida (Notion AI, Make, etc.) para que el equipo editorial lo use sin depender de él. Agrega un paso de verificación automática que compare los handles detectados contra la lista fija y alerte si hay discrepancias antes de publicar."
        },
        "sprint_3": {
          "score": 2.8,
          "level": "Competente",
          "strengths": [
            "El mecanismo de 'preguntar antes de generar' es una decisión de diseño sofisticada que mitiga alucinaciones en casos de ambigüedad, mostrando pensamiento de ingeniería real.",
            "El contexto de agencia es claro y el problema (minutas fieles vs. inventadas) tiene consecuencias reales con clientes."
          ],
          "recommendations": [
            "Articular mejor la diferencia arquitectónica: explicar que el sistema tiene memoria del protocolo de minutas cargado en Knowledge, lo cual es la ventaja real sobre un prompt aislado.",
            "Agregar criterios de calidad explícitos: ¿cómo sabe el sistema si una minuta es 'accionable'? Definir qué constituye un 'punto crítico' que amerita preguntar."
          ],
          "alchemist_signals": [
            "Señal positiva: La regla de 'preguntar antes de actuar cuando hay ambigüedad' es una decisión de diseño que muestra comprensión de los límites del modelo."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 3,
              "justification": "El system prompt define rol específico ('Brand Keeper & Project Manager'), flujo de validación antes de generar (pregunta primero si hay ambigüedades) y acceso a conocimiento externo (Project Knowledge). Es un sistema funcional aunque no muestra la arquitectura Supervisor-Worker explícitamente."
            },
            "Relevancia del Problema": {
              "score": 3,
              "justification": "El problema de minutas inexactas es real y recurrente en agencias. El contexto de 'transcripciones de juntas' es genuino y el riesgo de inventar información es un problema real identificado."
            },
            "Justificación Técnica": {
              "score": 2,
              "justification": "La justificación de por qué es mejor que un prompt aislado es superficial: 'ayuda a revisar cualquier transcripción y detenerse en el momento necesario'. No articula claramente la ventaja arquitectónica del sistema vs. un prompt único."
            },
            "Calidad de la Evidencia": {
              "score": 3,
              "justification": "Incluye el System Prompt completo y funcional con reglas claras de comportamiento. No hay link al GPT pero el System Prompt mostrado es de calidad suficiente para evaluar el sistema."
            }
          },
          "work_synthesis": "Luis diseñó un asistente especializado en generación de minutas que opera bajo un protocolo definido ('Brand Keeper & Project Manager Assistant'), conectado a un Knowledge Base de su agencia. El sistema prioriza la verificación de ambigüedades antes de redactar, garantizando que cada minuta sea accionable y fiel a lo acordado en junta.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Procesamiento de transcripciones de reuniones de agencia para generación de minutas verificadas y accionables para clientes.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Va más allá de un prompt básico al implementar lógica condicional (preguntar antes de redactar si hay ambigüedades) y anclar el sistema a un protocolo documentado en Project Knowledge, aplicado a un problema real y recurrente de su flujo de trabajo en agencia.",
          "level_up_suggestion": "Para escalar a Alquimista Destacado, conecta este GPT a un flujo automatizado (ej. Zapier/Make) que capture la transcripción desde Meet/Zoom y distribuya la minuta final por correo o Slack, haciendo el sistema reutilizable por todo tu equipo sin intervención manual."
        },
        "sprint_4": {
          "score": 2.0,
          "level": "En Desarrollo",
          "strengths": [
            "Muestra honestidad y metacognición al reconocer que el artefacto actual 'es muy descriptivo' y necesita refinamiento hacia lo ejecutivo.",
            "El problema identificado (transformar juntas en briefs ejecutivos) es real y de alto valor para su rol en agencia."
          ],
          "recommendations": [
            "Compartir el artefacto cognitivo real: incluir el System Prompt o la estructura del artefacto que se creó, no solo la descripción del problema que resuelve.",
            "Articular el criterio de selección de modelo o herramienta: ¿por qué Claude/ChatGPT para este caso? ¿Qué herramienta eligió y por qué?"
          ],
          "alchemist_signals": [
            "La autocrítica sobre el artefacto actual ('habría que refinarlo para hacerlo más ejecutivo') sugiere madurez reflexiva, pero faltó mostrar el trabajo concreto."
          ],
          "criteria": {
            "Orquestación y Selección": {
              "score": 2,
              "justification": "La respuesta menciona el problema pero no muestra criterio explícito de selección de herramientas ni combina herramientas estratégicamente. No hay evidencia de orquestación multi-herramienta."
            },
            "Artefacto Cognitivo": {
              "score": 2,
              "justification": "No se comparte el artefacto como tal. La respuesta describe el problema y reconoce que el artefacto actual 'es muy descriptivo (para mal)' pero no presenta la estructura del artefacto ni su contenido."
            },
            "Visión de Workflow Profesional": {
              "score": 2,
              "justification": "Hay consciencia del problema (convertir minutas en briefs ejecutivos) y autocrítica sobre el estado actual del artefacto, pero la conexión con la práctica profesional es superficial y no articula un workflow completo."
            }
          },
          "work_synthesis": "Luis Francisco creó un artefacto cognitivo orientado a transformar notas de juntas en briefs ejecutables para el equipo creativo. El sistema busca estructurar visualmente los puntos clave de las reuniones y derivarlos en acciones concretas, aunque en su estado actual el estudiante reconoce que el output es demasiado descriptivo y poco ejecutivo.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Procesamiento de juntas y generación de briefs creativos accionables para equipos de producción/contenido en OCESA.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "Identifica un problema real de trabajo (convertir juntas en briefs), pero el artefacto permanece en nivel conceptual-descriptivo sin evidencia de un flujo estructurado, prompts encadenados o lógica reutilizable por otros. El propio estudiante admite que aún no logra hacerlo ejecutivo.",
          "level_up_suggestion": "Diseña un artefacto de dos pasos: primero un prompt que extraiga decisiones, responsables y fechas de las notas de junta en formato tabla; luego un segundo prompt que convierta esa tabla en un brief con secciones fijas (objetivo, entregables, fechas límite, owner). Documenta ambos pasos para que cualquier colega del equipo creativo pueda usarlo sin ayuda."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Diseña un artefacto de dos pasos: primero un prompt que extraiga decisiones, responsables y fechas de las notas de junta en formato tabla; luego un segundo prompt que convierta esa tabla en un brief con secciones fijas (objetivo, entregables, fechas límite, owner). Documenta ambos pasos para que cualquier colega del equipo creativo pueda usarlo sin ayuda."
    },
    {
      "id": "112513403353463085294",
      "name": "Ligia Lupercio",
      "is_named": true,
      "avg_score": 3.83,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "🔮 Alquimista Destacado",
      "progression": 0.0,
      "scores": [
        4.0,
        3.5,
        4.0
      ],
      "levels": [
        "Destacado",
        "Destacado",
        "Destacado"
      ],
      "sprints": {
        "sprint_2": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "La 'Biblia de Ejecución Sensorial' como producto del artefacto es un concepto creativo sofisticado: documenta criterios sensoriales concretos (materiales, temperatura de color, frecuencia rítmica) que van más allá de los briefs convencionales.",
            "El Anti-Slop aplicado al dominio creativo visual (prohibir términos vacíos con justificación de por qué son vacíos en este contexto) demuestra comprensión profunda del problema de la generalidad en comunicación creativa."
          ],
          "recommendations": [
            "Agregar un Few-Shot con un ejemplo de elemento visual bien descrito (antes y después del Anti-Slop) para anclar el estándar de 'densidad sensorial' que el prompt busca.",
            "Documentar si este prompt fue aplicado a un proyecto real de OCESA o fue un caso inventado. Si fue real, las consecuencias concretas fortalecerían la evidencia del aprendizaje."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Inventó el concepto 'Biblia de Ejecución Sensorial' como producto del artefacto, un entregable de diseño que no existía antes en el programa y que codifica criterios estéticos en formato IA."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Aplica Anti-Slop con sofisticación excepcional: 'Densidad de Prueba Mecanismo → Efecto' como principio propio, lista de palabras prohibidas específicas del mundo creativo ('disruptivo', 'immersivo', 'storytelling'), y criterios de calidad visuales detallados."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "El prompt tiene la sección Anti-Slop más completa del grupo: palabras prohibidas con justificación, criterios de densidad visual por elemento, escala de intensidad emocional, y check de calidad final. Es un sistema Anti-Slop de producción."
            },
            "Iteración y Refinamiento": {
              "score": 4,
              "justification": "Documenta el contexto creativo (Biblia de Ejecución Sensorial), el riesgo identificado (caer en Slop publicitario), las restricciones aplicadas, y el prompt resultante. El proceso de refinamiento es claro y el resultado es de alta calidad demostrable."
            }
          },
          "work_synthesis": "El estudiante construyó una 'Biblia de Ejecución Sensorial' usando prompt engineering avanzado para definir el lenguaje visual, sonoro y narrativo de piezas audiovisuales, combinando referencias cinematográficas de autor con restricciones explícitas de vocabulario para eliminar jerga de marketing vacía. El entregable sirve como hoja de ruta técnica y creativa que un equipo de producción puede ejecutar directamente, traduciendo intención estética en especificaciones concretas de encuadre, paleta, sonido y ritmo.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Dirección creativa y producción audiovisual de campañas de alto impacto para OCESA o clientes del sector entretenimiento.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "Demuestra dominio técnico sofisticado del prompting (Archetype Anchoring, Negative Prompting, densidad de datos) con resultados cualitativos claros, pero el caso de uso es una campaña inventada, no un problema real y recurrente de su trabajo diario, lo que lo mantiene en la etapa de experimentador avanzado.",
          "level_up_suggestion": "Aplica exactamente esta misma ingeniería de prompt a una campaña real actual de OCESA (un concierto, un festival) y documenta cómo el output impactó decisiones concretas de producción o cliente; eso lo mueve inmediatamente a Alquimista en Práctica con evidencia de impacto real."
        },
        "sprint_3": {
          "score": 3.5,
          "level": "Destacado",
          "strengths": [
            "Pensamiento conceptual excepcional: el concepto de 'Traductor de Densidad' y 'Auditor Anti-Slop' muestra sofisticación real en la arquitectura de sistemas de IA.",
            "Aplicación genuina al dominio audiovisual con referencias técnicas concretas (Python, métricas de render, estética sensorial estilo Martel/Del Toro)."
          ],
          "recommendations": [
            "Incluir el System Prompt completo o el link al GPT como evidencia verificable para que el evaluador pueda confirmar la implementación real.",
            "Detallar el flujo de interacción entre Supervisor y Worker con ejemplos concretos de inputs y outputs esperados."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: la densidad conceptual y el vocabulario técnico propio (nota tónica, Traductor de Densidad) sugieren un pensamiento creativo-técnico excepcional que ya está produciendo artefactos de alto valor."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 4,
              "justification": "El estudiante diseñó un sistema Supervisor-Worker claramente articulado como 'Traductor de Densidad' con un rol definido, criterios de calidad estética y un flujo lógico coherente que va desde la pre-producción hasta la ejecución técnica. Los conceptos de Auditor Anti-Slop y nota tónica demuestran una arquitectura genuinamente sofisticada."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El problema de fragmentación entre visión creativa y ejecución técnica en producción audiovisual es altamente relevante y específico de su industria real. La necesidad de mantener coherencia estética a través de decisiones técnicas (Python, edición, render) requiere genuinamente un sistema, no un simple prompt."
            },
            "Justificación Técnica": {
              "score": 4,
              "justification": "Articula con precisión por qué el sistema supera a un prompt aislado: memoria persistente, consistencia estética, y la función de Auditor Anti-Slop con criterios de métricas técnicas (Hz, ISO, mm). La justificación va más allá de lo básico y muestra pensamiento de ingeniero de sistemas."
            },
            "Calidad de la Evidencia": {
              "score": 2,
              "justification": "No se incluye link funcional ni se cita un System Prompt textual concreto; la descripción es rica pero la evidencia directa brilla por su ausencia. Sin poder verificar el artefacto real, la calidad de evidencia es parcial."
            }
          },
          "work_synthesis": "Diseñó un sistema Supervisor-Worker que actúa como 'traductor de densidad creativa' para producción audiovisual, asegurando que las decisiones técnicas (scripts, edición, organización de archivos) mantengan coherencia con la visión artística original definida en pre-producción. El sistema funciona como auditor estético persistente que rechaza soluciones genéricas y exige métricas técnicas concretas, preservando el ADN visual y sonoro del proyecto a lo largo de todo el flujo de trabajo.",
          "application_area": "Producción de Eventos",
          "application_detail": "Consistencia creativa entre dirección artística y ejecución técnica en producciones audiovisuales de OCESA",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Describe un caso de uso real y específico de su trabajo diario (producción audiovisual), con lógica de sistema multi-capa que resuelve un problema recurrente concreto —la pérdida del tono creativo en la ejecución técnica. Sin embargo, no presenta evidencia tangible del GPT o system prompt construido (el campo de evidencia no muestra link funcional), lo que impide confirmar si es reutilizable por otros.",
          "level_up_suggestion": "Publica el system prompt completo o el GPT compartible con un caso de uso documentado paso a paso, de modo que otro miembro de tu equipo pueda usarlo sin tu intervención; eso es lo que separa a un Alquimista Destacado: que la solución vive sin ti."
        },
        "sprint_4": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El artefacto 'Checheme Sensorial 1.0' demuestra dominio completo del concepto de artefacto cognitivo: tiene identidad, reglas, memoria y propósito operativo claro.",
            "La visión de mejora futura (integración API para generación de scripts Python) revela pensamiento de ingeniería de sistemas avanzado."
          ],
          "recommendations": [
            "Compartir el System Prompt completo del artefacto para que el equipo pueda validar su robustez técnica y aprender de él.",
            "Documentar al menos un caso de uso real donde el Checheme Sensorial ya fue aplicado, con input y output concretos."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: este estudiante ya opera a nivel de productización de IA, no solo de uso; su artefacto tiene nombre, versión y roadmap de evolución."
          ],
          "criteria": {
            "Orquestación y Selección": {
              "score": 4,
              "justification": "El estudiante demuestra criterio sofisticado al combinar un sistema Supervisor-Worker con memoria persistente en GPT/Proyecto y capacidad de rechazo activo de respuestas genéricas. La mención de integración futura con API de automatización evidencia visión estratégica de orquestación."
            },
            "Artefacto Cognitivo": {
              "score": 4,
              "justification": "El 'Checheme Sensorial 1.0' es un artefacto bien nombrado, con reglas claras de comportamiento (no complaciente, métricas físicas obligatorias, filtro Anti-Slop), memoria persistente de referencias estéticas y un estándar operativo definido. Es reutilizable y tiene identidad propia."
            },
            "Visión de Workflow Profesional": {
              "score": 4,
              "justification": "Conecta directamente con su práctica en producciones de alto impacto, define un estándar operativo para validación técnica y estética de rodajes, e imagina una evolución hacia generación automática de scripts Python. La visión de workflow es concreta, ambiciosa y profesionalmente anclada."
            }
          },
          "work_synthesis": "Construyó un sistema GPT con arquitectura Supervisor-Worker llamado 'Checheme Sensorial 1.0' que actúa como filtro de calidad creativo-técnico para producciones audiovisuales: el Supervisor rechaza automáticamente propuestas genéricas y exige parámetros medibles (Hz, ISO, mm, f-stop) mientras mantiene memoria persistente de las referencias estéticas del director. Su propósito es garantizar que cada entregable de IA preserve la densidad sensorial y el rigor técnico de producciones de alto impacto, eliminando el 'slop' generativo.",
          "application_area": "Producción de Eventos",
          "application_detail": "Control de calidad creativo-técnico para preproducción audiovisual: auditoría de guiones, validación estética y generación de parámetros de rodaje bajo un estándar reutilizable por el equipo.",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "Va más allá del uso personal: diseñó un GPT con roles diferenciados (Supervisor/Worker), memoria persistente y filtros activos que su equipo puede reutilizar como estándar operativo. La visión de integrar una API para generación automática de scripts Python confirma pensamiento sistémico y arquitectura multi-paso.",
          "level_up_suggestion": "Documenta el flujo completo como un SOP (Standard Operating Procedure) con ejemplos de inputs/outputs reales para que cualquier miembro del equipo pueda operarlo sin depender de ti. Como siguiente sprint técnico, prioriza la integración de la API de automatización para cerrar el ciclo entre auditoría de guion y organización de media en producción."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Producción de Eventos",
      "level_up_suggestion": "Documenta el flujo completo como un SOP (Standard Operating Procedure) con ejemplos de inputs/outputs reales para que cualquier miembro del equipo pueda operarlo sin depender de ti. Como siguiente sprint técnico, prioriza la integración de la API de automatización para cerrar el ciclo entre auditoría de guion y organización de media en producción."
    },
    {
      "id": "103325120233395822923",
      "name": "Axel Trujillo",
      "is_named": true,
      "avg_score": 3.77,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "🔮 Alquimista Destacado",
      "progression": -0.7,
      "scores": [
        4.0,
        4.0,
        3.3
      ],
      "levels": [
        "Destacado",
        "Destacado",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El sistema de prioridad por severidad (Alto/Medio/Bajo) integrado en la tabla de output es una solución elegante para gestión de errores que permite al cliente priorizar correcciones.",
            "Las 'Reglas de Fidelidad' con ejemplos concretos (no reescritas creativas, no agregar contenido) son restricciones precisas que previenen el modo de fallo más común de la IA en corrección de estilo."
          ],
          "recommendations": [
            "Agregar criterios específicos de lo que constituye cada nivel de severidad: ¿un error ortográfico es siempre Alto? ¿Un galicismo no detectado es Medio o Alto?",
            "Considerar un Few-Shot de tabla de errores bien formateada para que el modelo ancle el formato exacto de salida desde la primera iteración."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: El diseño defensivo del prompt (reglas de fidelidad, manejo de ilegibilidad, priorización por severidad) muestra pensamiento de ingeniería de calidad institucional."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene estructura completa y bien etiquetada: ROL, OBJETIVO, PROCESO (en fases numeradas), FORMATO DE SALIDA, y RESTRICCIONES. Cada sección está claramente delimitada y tiene contenido específico."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt resuelve un problema real de agencia de marketing: corrección de estilo multimodal (imágenes, PDFs, videos) para entregables a clientes. Los formatos de input/output y las reglas de fidelidad al material original son específicos del trabajo."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "El prompt tiene reglas de fidelidad explícitas ('No reescritas creativas, solo correcciones técnicas'), manejo de incertidumbre ('Si no puedes leer una sección, indica que está ilegible'), y criterio de priorización por severidad. Muestra diseño defensivo avanzado."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de sistema para un corrector de estilo automatizado en español mexicano, orientado a agencias de marketing. La herramienta revisa contenido multimedia (imágenes, PDFs, videos) detectando errores ortográficos, gramaticales y de estilo, con capacidad de personalización por cliente mediante diccionarios de términos prohibidos y aprobados.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Revisión y control de calidad de materiales visuales y documentales para agencias de marketing digital en México.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt va más allá del uso básico: define un sistema estructurado con roles, actividades jerarquizadas, reglas de operación y configuración personalizable por usuario, lo que indica aplicación a un problema de trabajo real y recurrente en su industria. Sin embargo, no hay evidencia de que la solución sea reutilizable por otros usuarios de forma autónoma (GPT publicado, flujo automatizado o documentación para equipo).",
          "level_up_suggestion": "Empaqueta este prompt como un GPT personalizado con instrucciones de sistema y compártelo con tu equipo o clientes para que lo usen sin necesidad de copiar el prompt manualmente. Agrega un paso de entrada estructurado donde el usuario cargue su lista de términos prohibidos al inicio de cada sesión."
        },
        "sprint_2": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "Los '7 Criterios de Calidad Narrativa' son un framework propio desarrollado para evaluar presentaciones de C-Level, que muestra apropiación del concepto Anti-Slop aplicado a su industria específica.",
            "El proceso de revisión en 3 etapas (Estructura → Densidad → Tono Final) integrado al prompt convierte la IA en un revisor sistemático de presentaciones, no solo en un generador."
          ],
          "recommendations": [
            "Agregar una sección de Few-Shot con un ejemplo de slide 'antes' y 'después' del Anti-Slop para anclar el estándar de calidad narrativa esperado.",
            "Considerar agregar una 'Escala de Madurez Ejecutiva' que el modelo use para auto-calificar el output antes de entregarlo (similar a los niveles Emergente-Destacado del programa)."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Construyó un framework propio de 7 criterios narrativos para C-Level, convirtiendo el Anti-Slop en un estándar de calidad institucional para su agencia."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Aplica Anti-Slop con criterio sofisticado: 'criterios cualitativos de calidad narrativa' con lista de métricas de narración empresarial. La técnica está bien aplicada y nombrada correctamente en contexto de presentación para C-Level."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "El prompt incluye 'Criterios de Calidad Narrativa' explícitos con 7 métricas de evaluación (Densidad de Argumentos, Gancho Ejecutivo, Escalabilidad Visual, etc.), una lista de verbos prohibidos, y un proceso de revisión por etapas. Es el sistema Anti-Slop más completo del grupo."
            },
            "Iteración y Refinamiento": {
              "score": 4,
              "justification": "Documenta el problema inicial (storytelling vs. ejecutivo), la técnica aplicada (Anti-Slop con criterios cualitativos), la evolución del prompt, y el proceso de revisión por etapas. El resultado final tiene evidencia clara de múltiples ciclos de refinamiento."
            }
          },
          "work_synthesis": "El estudiante aplicó la técnica Anti-Slop para auditar y optimizar una propuesta comercial real dirigida a Scotiabank (nivel C-Level), identificando contenido genérico slide por slide y reescribiéndolo con evidencia transferible y densidad narrativa. El resultado es una propuesta más precisa que convierte casos de referencia en pruebas estratégicas aplicables al contexto del cliente.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Revisión y optimización de propuestas comerciales para clientes corporativos de alto nivel en el sector bancario/entretenimiento.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Hay un caso de uso real, recurrente y de alto impacto comercial: una propuesta activa para un banco. El prompt está diseñado con rol específico, restricciones de contexto y reglas de no-invención, mostrando ingeniería deliberada más allá del uso básico.",
          "level_up_suggestion": "Construir un GPT o prompt reutilizable de 'Auditor Anti-Slop para Propuestas OCESA' que otros equipos puedan usar en futuras propuestas comerciales, estandarizando las leyes de densidad narrativa como checklist interno."
        },
        "sprint_3": {
          "score": 3.3,
          "level": "Competente",
          "strengths": [
            "La descripción del proceso (capturar estructura, identificar puntos de valor, simplificar a narrativa ejecutiva, mantener coherencia visual) es un SOP cognitivo real para su flujo de trabajo.",
            "La integración mencionada con Copilot y Gamma demuestra pensamiento de ecosistema de herramientas, no de herramienta única."
          ],
          "recommendations": [
            "Agregar la capa Supervisor-Worker: el sistema actual genera, pero ¿quién valida que la síntesis mantiene el rigor técnico sin perder detalles críticos? Un Supervisor explícito elevaría la arquitectura.",
            "Dado el nivel demostrado en Sprint 1 y 2 (framework de 7 criterios narrativos), este System Prompt podría incorporar esos criterios de calidad directamente para ser consistente con el estándar propio desarrollado."
          ],
          "alchemist_signals": [
            "La referencia a integración con Copilot y Gamma demuestra visión de ecosistema de herramientas que anticipa el aprendizaje de Sprint 4 sobre orquestación."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 3,
              "justification": "El sistema tiene contexto definido (2-3 presentaciones diarias, tipos: caso de negocio, plan operativo, visibilidad estratégica), rol de asistente, y proceso de síntesis. Sin embargo, no hay arquitectura Supervisor-Worker explícita ni criterios de validación de calidad."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El problema (2-3 presentaciones diarias que requieren síntesis ejecutiva) es genuinamente recurrente y de alto volumen. El sistema tiene ROI claro: horas ahorradas en un proceso de alta frecuencia."
            },
            "Justificación Técnica": {
              "score": 3,
              "justification": "La justificación es práctica y específica (integración con Copilot y Gamma, síntesis ejecutiva como reto) aunque no articula formalmente la ventaja arquitectónica del sistema sobre un prompt aislado."
            },
            "Calidad de la Evidencia": {
              "score": 3,
              "justification": "Comparte System Prompt con contexto de marca, proceso definido, y restricciones claras. Sin embargo, no hay link al GPT y el prompt podría ser más profundo dado el nivel demostrado en los sprints anteriores."
            }
          },
          "work_synthesis": "El estudiante construyó un GPT configurado como asistente especializado en estructurar presentaciones ejecutivas (casos de negocio, planes operativos, visibilidad estratégica), diseñado para sintetizar información compleja en narrativas de alto impacto. El sistema actúa como supervisor cognitivo que valida que el contenido presentado sea realmente el de mayor valor, resolviendo un problema recurrente de 2-3 presentaciones diarias con un flujo estandarizado y escalable para su equipo.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Estructuración y síntesis de presentaciones ejecutivas de alto volumen en operaciones corporativas",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "Construyó y publicó un GPT funcional con instrucciones configuradas y memoria persistente (evidenciado por el link), y explícitamente planea compartirlo con su equipo como flujo de trabajo escalable, lo cual representa construcción de soluciones reusables por otros — criterio definitorio del nivel Experto.",
          "level_up_suggestion": "Documenta un SOP formal que acompañe el GPT con instrucciones de uso para tu equipo, e integra el output del asistente directamente con Gamma o Copilot mediante un flujo automatizado (ej. Make/Zapier) para eliminar el paso manual de copiar la estructura generada."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Documenta un SOP formal que acompañe el GPT con instrucciones de uso para tu equipo, e integra el output del asistente directamente con Gamma o Copilot mediante un flujo automatizado (ej. Make/Zapier) para eliminar el paso manual de copiar la estructura generada."
    },
    {
      "id": "113430405422314852108",
      "name": "Sandra Maciel Blancas Moncada",
      "is_named": true,
      "avg_score": 3.63,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "🔮 Alquimista Destacado",
      "progression": -0.8,
      "scores": [
        4.0,
        3.7,
        3.2
      ],
      "levels": [
        "Destacado",
        "Destacado",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El prompt es un modelo ejemplar de estructura Rol-Contexto-Tarea-Formato aplicado a un caso estratégico real de alto impacto.",
            "Las 4 columnas de la Tabla de Tensión Estratégica están diseñadas para detonar debate ejecutivo, no solo para obtener información: eso es pensamiento de facilitador avanzado."
          ],
          "recommendations": [
            "Agregar un paso de verificación (tipo ARV) donde el modelo confirme si tiene suficiente contexto antes de generar la tabla, para evitar alucinaciones sobre datos específicos de Banco BASE.",
            "Experimentar con few-shot: incluir un ejemplo de una fila de la tabla con la calidad deseada para calibrar el nivel de densidad del output."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: este prompt ya está operando a nivel de consultoría estratégica; el estudiante usa la IA como co-facilitador de talleres ejecutivos, no solo como asistente de texto."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene todas las secciones explícitas: Rol (CSO con Design Thinking), Contexto (brecha de percepción Banco BASE 40 años), Tarea (Tabla de Tensión Estratégica con 4 columnas definidas) y restricciones de Formato (tono ejecutivo, estilo bullet, output específico). Es un ejemplo de prompt maestro bien construido."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt resuelve un problema de negocio real y específico: la brecha de percepción de Banco BASE como 'especialistas' vs 'banco integral' para un taller de diagnóstico del 40 aniversario. Los detalles son tan específicos que solo alguien en ese contexto podría haberlo escrito."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Define restricciones de output claras (solo tabla + párrafo final), columnas específicas con nombres descriptivos, y un tono calibrado (ejecutivo, desafiante, constructivo). El diseño consciente del formato evidencia comprensión de cómo el modelo produce outputs de mayor valor con instrucciones precisas."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de alta ingeniería para generar una Tabla de Tensión Estratégica orientada a un taller directivo de diagnóstico de marca para el 40 aniversario de Banco BASE. El entregable es un insumo ejecutivo listo para facilitar debate entre líderes sobre la brecha de percepción entre 'especialistas' vs 'banco integral', con preguntas disruptivas y oportunidades concretas de posicionamiento.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Diagnóstico estratégico de marca y posicionamiento bancario para taller directivo de aniversario institucional.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema real, específico y recurrente de su trabajo: preparar insumos estratégicos para talleres directivos. La definición de rol, contexto, estructura de output y restricciones de tono demuestra uso aplicado, no experimental.",
          "level_up_suggestion": "Para avanzar a Alquimista Destacado, convierte este prompt en un GPT o plantilla reutilizable que cualquier colega de Marketing pueda usar para preparar talleres estratégicos, parametrizando variables como 'nombre de marca', 'brecha de percepción' y 'hito institucional'."
        },
        "sprint_2": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "La sección AUTO-AUDITORÍA DE VERACIDAD es una innovación técnica avanzada que convierte al modelo en su propio auditor de veracidad.",
            "La distinción explícita entre Dato Textual y Deducción Analítica demuestra comprensión profunda de cómo mitigar alucinaciones en investigaciones de alto riesgo."
          ],
          "recommendations": [
            "Documentar la versión anterior del prompt y qué outputs genéricos produjo, para evidenciar el proceso de iteración y aprendizaje.",
            "Agregar alcance geográfico como variable de filtro en el protocolo de extracción para obtener datos más accionables para el mercado mexicano."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: la AUTO-AUDITORÍA DE VERACIDAD es un patrón de diseño que otros estudiantes deberían conocer; este estudiante está generando metodología propia."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Aplica múltiples técnicas avanzadas de forma integrada: triangulación de fuentes (Edelman, Deloitte, Forrester), diferenciación explícita entre Dato Textual y Deducción Analítica, identificación de conflictos entre fuentes, y una cláusula Anti-Drift que pide declarar inferencias propias. Es una aplicación madura y consciente."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "La sección 'AUTO-AUDITORÍA DE VERACIDAD' es una implementación brillante del Anti-Slop: obliga al modelo a declarar qué es inferencia, qué fue aproximado y qué no encontró evidencia directa. Transforma el control de calidad en parte del protocolo del prompt mismo."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "El estudiante menciona el contexto del problema y la técnica (2C con cláusula anti-drift) pero no comparte versiones anteriores del prompt ni describe explícitamente qué cambió entre iteraciones. La evidencia de proceso de refinamiento es implícita."
            }
          },
          "work_synthesis": "El estudiante construyó un sistema de investigación de inteligencia cultural con controles de calidad epistémica integrados, diseñado para extraer y auditar hallazgos sobre comportamiento de la Gen Z frente a marcas. El prompt actúa como un protocolo de análisis reutilizable que fuerza la distinción entre dato verificable e inferencia, útil para informar estrategias de marca y comunicación corporativa en OCESA.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Investigación de audiencias Gen Z para decisiones de estrategia de marca, posicionamiento y comunicación en entretenimiento.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El estudiante va más allá del prompting básico al construir un protocolo estructurado con capas de validación (triangulación de fuentes, diferenciación dato/deducción, auto-auditoría de veracidad), demostrando aplicación a un problema de trabajo real y recurrente. Sin embargo, el sistema aún no es un activo reutilizable por otros (GPT, flujo automatizado) que lo proyecte al nivel Experto.",
          "level_up_suggestion": "Empaqueta este protocolo como un GPT o plantilla compartida que cualquier colega de marketing pueda usar para investigar audiencias sin conocimiento técnico de prompting. Agregar un paso de output estructurado (tabla comparativa fuentes vs. deducciones) haría el entregable directamente accionable para presentaciones ejecutivas."
        },
        "sprint_3": {
          "score": 3.2,
          "level": "Competente",
          "strengths": [
            "El caso NIDO es excepcionalmente rico y demuestra pensamiento estratégico de marketing de alto nivel integrado con arquitectura de IA.",
            "La idea de un SOP que 'audita el valor' antes de generar outputs es una contribución conceptual valiosa al campo del prompting estratégico."
          ],
          "recommendations": [
            "Incluir el System Prompt completo o el link al GPT/Proyecto Claude para validar la implementación.",
            "Articular explícitamente la comparación sistema vs prompt aislado: qué pasa cuando se usa solo un prompt y cómo el SOP lo supera."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Avanzado: este estudiante aplica arquitectura de IA a casos de marketing estratégico reales con complejidad de negocio genuina; el potencial es muy alto si incorpora más evidencia técnica."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 4,
              "justification": "El SOP Cognitivo para diagnóstico de NIDO tiene roles definidos, criterios de auditoría de valor de marca, y un flujo que va de datos dispersos a un diagnóstico accionable. La idea de que el sistema 'obliga' a la IA a trabajar bajo restricciones de valor de marca antes de generar contenido es arquitectura sofisticada."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El problema de NIDO (marca líder en categoría en caída con mandato de Sell-out y audiencia Gen Z) es un caso de negocio real, complejo y de alta densidad informativa que genuinamente requiere un sistema de diagnóstico estructurado, no un prompt aislado."
            },
            "Justificación Técnica": {
              "score": 3,
              "justification": "La justificación de por qué es mejor que un prompt aislado está implícita en la descripción del problema pero no articulada de forma técnica y explícita en la respuesta. Falta conectar explícitamente las limitaciones del prompt aislado con las ventajas del SOP."
            },
            "Calidad de la Evidencia": {
              "score": 2,
              "justification": "No se incluye link ni System Prompt completo; hay una descripción del sistema pero sin la evidencia artefactual que permita verificar su implementación real."
            }
          },
          "work_synthesis": "Diseñó un SOP Cognitivo que funciona como consultor senior de estrategia de marca, aplicado a un caso real: el diagnóstico de NIDO ante una categoría en declive y una audiencia Gen Z difícil de conquistar. El sistema obliga al estratega a confrontar el brief corporativo contra la realidad del mercado a través de tres tensiones cognitivas estructuradas (categoría, relevancia y conversión), convirtiendo ambigüedad estratégica en hipótesis accionables de negocio.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Auditoría estratégica de marca y pre-diagnóstico de planning para cuentas con pérdida de relevancia o sell-out débil.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Hay un caso de uso real y recurrente (brief de cliente con problema de negocio concreto), y construyó un sistema con rol definido, filtros cognitivos explícitos y reglas de operación que van más allá de un prompt aislado. Sin embargo, no se evidencia un GPT publicado, automatización reutilizable por otros ni documentación de flujo multi-agente que lo lleve al nivel Experto.",
          "level_up_suggestion": "Publica este SOP como un GPT compartible para que otros estrategas del equipo lo usen sin necesidad de copiar el prompt manualmente. Como siguiente capa, diseña un flujo Supervisor-Worker donde este CSO delegue tareas específicas a agentes secundarios (uno para análisis de competencia, otro para generación de mensajes clave por tensión) y documenta el output esperado de cada nodo."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Publica este SOP como un GPT compartible para que otros estrategas del equipo lo usen sin necesidad de copiar el prompt manualmente. Como siguiente capa, diseña un flujo Supervisor-Worker donde este CSO delegue tareas específicas a agentes secundarios (uno para análisis de competencia, otro para generación de mensajes clave por tensión) y documenta el output esperado de cada nodo."
    },
    {
      "id": "107646318512708736570",
      "name": "Mariana Ampudia del Castillo",
      "is_named": true,
      "avg_score": 3.5,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "🔮 Alquimista Destacado",
      "progression": 1.3,
      "scores": [
        2.7,
        3.8,
        4.0
      ],
      "levels": [
        "Competente",
        "Destacado",
        "Destacado"
      ],
      "sprints": {
        "sprint_2": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "La identificación precisa del modo de fallo ('texto coherente pero con alto riesgo de alucinación por falta de restricciones de fuente') demuestra comprensión técnica del problema.",
            "La solución de delimitar explícitamente las fuentes al documento proporcionado es un mecanismo de control efectivo y bien aplicado."
          ],
          "recommendations": [
            "Compartir el prompt completo final. La respuesta es demasiado breve para evaluar la calidad completa del artefacto producido.",
            "Documentar el caso concreto: ¿qué tipo de texto? ¿Cuál era la alucinación específica que se quería evitar? El contexto real hace la evaluación más justa y el aprendizaje más profundo."
          ],
          "alchemist_signals": [
            "La consciencia de que el problema no es la redacción sino la falta de restricciones epistemológicas es una señal de madurez técnica que no todos los estudiantes demuestran."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "Identifica correctamente el problema de alucinación por falta de restricciones, y el prompt resultante usa 'señalar explícitamente cuando no haya datos suficientes' como mecanismo de verificación. La técnica aplicada es coherente aunque no se nombra formalmente."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "El prompt final tiene restricciones de fuente ('Solo usa información del documento proporcionado'), manejo de incertidumbre ('señala explícitamente'), y estructura de análisis en etapas. La densidad informativa es correcta."
            },
            "Iteración y Refinamiento": {
              "score": 2,
              "justification": "La respuesta describe el problema inicial y el enfoque de solución, pero la presentación es muy breve. No se muestra el proceso iterativo completo ni el prompt final íntegro."
            }
          },
          "work_synthesis": "El estudiante exploró técnicas de verificación y control de alucinaciones en prompts, buscando restringir que la IA invente información cuando no cuenta con datos suficientes. El trabajo muestra comprensión conceptual del problema, pero no lo ancla a un caso de uso específico de su rol en OCESA ni demuestra aplicación práctica en tareas reales.",
          "application_area": "Otro",
          "application_detail": "Experimentación técnica con control de calidad de outputs de IA, sin contexto laboral definido",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El estudiante describe el problema de las alucinaciones con precisión conceptual y menciona técnicas avanzadas, pero no presenta un prompt final concreto ni un caso de uso real de su trabajo diario en OCESA, lo que lo mantiene en nivel experimentador.",
          "level_up_suggestion": "Toma este mismo problema de alucinaciones y aplícalo a una tarea real y recurrente de tu trabajo, por ejemplo, redactar fichas técnicas de artistas, generar reportes de asistencia o responder solicitudes de patrocinadores. Comparte el prompt completo con el resultado antes/después para evidenciar impacto real."
        },
        "sprint_3": {
          "score": 3.8,
          "level": "Destacado",
          "strengths": [
            "El concepto de 'Briefing Slop' como problema a resolver es una aplicación brillante del lenguaje del programa al dominio específico de OCESA, demostrando apropiación conceptual profunda.",
            "La descripción del Módulo de Validación que rechaza 'activaciones genéricas o técnicamente inviables' antes de que lleguen a la agencia es la función de Supervisor más bien articulada del sprint."
          ],
          "recommendations": [
            "Incluir el System Prompt completo del sistema como evidencia directa del artefacto.",
            "Definir criterios específicos del Módulo de Validación: ¿qué hace que una activación sea 'técnicamente inviable' para el Foro Sol? Codificar esos criterios de venue en el sistema."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Nombró un problema de la industria ('Briefing Slop') con el vocabulario del programa, mostrando transferencia conceptual que va más allá de la aplicación mecánica."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 4,
              "justification": "El sistema tiene arquitectura explícita: un Supervisor que transforma 'Sponsorship Deals' en 'Briefing Técnico' para agencias, con tres capas (Input comercial → Módulo de Validación → Output ejecutable) y criterios de rechazo explícitos."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El 'Briefing Slop' (instrucciones vagas a agencias que resultan en activaciones genéricas) es un problema real y costoso en la industria de patrocinios de OCESA, específicamente para venues como Foro Sol y Curva 4."
            },
            "Justificación Técnica": {
              "score": 4,
              "justification": "La justificación técnica es excelente: 'transforma un acuerdo comercial en una hoja de ruta técnica y creativa ejecutable, eliminando idas y vueltas por falta de información'. Articula el valor con precisión ejecutiva."
            },
            "Calidad de la Evidencia": {
              "score": 3,
              "justification": "Describe la arquitectura en detalle y menciona el link al GPT, pero el System Prompt completo no está transcrito en la respuesta. La descripción es de alta calidad aunque falta el artefacto directo."
            }
          },
          "work_synthesis": "Diseñó un sistema cognitivo basado en Claude Projects que transforma contratos de patrocinio en briefs técnico-creativos ejecutables para agencias, incorporando contexto permanente sobre venues (Foro Sol, Curva 4), manuales de marca y KPIs. El sistema estandariza la calidad de entregables del equipo de patrocinios, eliminando ambigüedades que generan retrabajos costosos.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Generación automatizada de briefs de activación para marcas patrocinadoras a partir de contratos comerciales",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "Construyó un activo departamental reutilizable con SOP Cognitivo y memoria de contexto persistente (Claude Projects), diseñado explícitamente para que cualquier miembro del equipo lo opere con resultados consistentes, lo que trasciende el uso personal hacia una solución institucional escalable.",
          "level_up_suggestion": "Conecta el sistema a un flujo automatizado (vía Make o Zapier) que se dispare al recibir un contrato en PDF por correo o Drive, generando el brief sin intervención manual y notificando al equipo, convirtiendo el activo en un proceso autónomo de principio a fin."
        },
        "sprint_4": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El uso de 'metaprompting' como concepto estructurante del SAO (memoria de rol + sistema de semáforo) demuestra comprensión avanzada de cómo diseñar artefactos cognitivos que van más allá de prompts reactivos.",
            "La articulación del problema ('parálisis por análisis', 'desconexión entre datos técnicos y toma de decisiones ejecutiva') es precisa y demuestra comprensión del pain point real de la organización."
          ],
          "recommendations": [
            "Compartir el System Prompt completo del SAO para evidenciar la implementación del metaprompting descrito.",
            "Especificar el criterio de selección de modelo: el SAO para análisis de datos ejecutivos podría funcionar mejor en Claude (razonamiento) vs. ChatGPT (integración con Excel). ¿Cuál eligió y por qué?"
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: El concepto de 'metaprompting con memoria de rol' demuestra que el estudiante está pensando en capas de diseño de IA que van más allá de los fundamentos del programa."
          ],
          "criteria": {
            "Orquestación y Selección": {
              "score": 4,
              "justification": "El SAO usa 'metaprompting' explícito: memoria de rol, sistema de semáforo para urgencia, y memoria de contexto previo. Demuestra criterio de selección implícito (herramienta analítica que convierte datos en decisiones) y combina capas estratégicamente."
            },
            "Artefacto Cognitivo": {
              "score": 4,
              "justification": "El SAO tiene nombre propio, tres pilares explícitos (Contexto, Riesgo, Acción Prioritaria), estructura de metaprompting documentada, y lógica de output (semáforo de urgencia). Es un artefacto bien definido y reutilizable."
            },
            "Visión de Workflow Profesional": {
              "score": 4,
              "justification": "Conecta directamente con el problema de 'parálisis por análisis' en dashboards de KPIs, articulando el valor de negocio: 'Convierte filas de Excel en tres pilares: Contexto, Riesgo y Acción Prioritaria'. Es una visión de workflow profesional completa."
            }
          },
          "work_synthesis": "El estudiante construyó un artefacto cognitivo llamado SAO (Sistema de Análisis Operativo) que transforma datos crudos de KPIs en decisiones ejecutivas estructuradas bajo tres pilares: Contexto, Riesgo y Acción Prioritaria. Actúa como un COO virtual con metaprompting, validación lógica por pasos y variables modulares de negocio, eliminando la parálisis por análisis en cierres de mes.",
          "application_area": "Análisis de Datos",
          "application_detail": "Interpretación de dashboards y reportes de KPIs para traducir métricas operativas en recomendaciones ejecutivas accionables por departamento.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Demuestra un caso de uso real y recurrente (cierre de mes) con una arquitectura de prompt superior al básico: metaprompting, asignación de rol y validación por pasos. Sin embargo, aún no hay evidencia de que otros equipos lo estén reutilizando ni de automatización o flujo multi-sistema.",
          "level_up_suggestion": "Empaqueta el SAO como un GPT personalizado o plantilla compartida en Notion/Drive para que cualquier gerente de departamento lo use sin depender de ti; agregar la fase 'Abogado del Diablo' que ya mencionas como mejora lo acercaría a una solución que otros pueden operar de forma autónoma."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Otro",
      "level_up_suggestion": "Empaqueta el SAO como un GPT personalizado o plantilla compartida en Notion/Drive para que cualquier gerente de departamento lo use sin depender de ti; agregar la fase 'Abogado del Diablo' que ya mencionas como mejora lo acercaría a una solución que otros pueden operar de forma autónoma."
    },
    {
      "id": "103542481943595887185",
      "name": "Magdalena Carolina Lara Velazquez",
      "is_named": true,
      "avg_score": 3.4,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": -0.2,
      "scores": [
        3.7,
        3.0,
        3.5
      ],
      "levels": [
        "Destacado",
        "Competente",
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "El prompt traduce un proceso de mediación profesional real (Servant Leadership, resolución de conflictos) en un guion accionable con fases numeradas que guían al modelo de forma precisa.",
            "La instrucción de generar preguntas de diagnóstico antes del plan de acción refleja un diseño de razonamiento encadenado (CoT implícito) de alta calidad."
          ],
          "recommendations": [
            "Agregar el contexto de la empresa/industria: los conflictos en una empresa de entretenimiento (presiones de deadline para shows, equipos remotos de producción) tienen dinámicas específicas que enriquecerían el output.",
            "Agregar restricciones: ¿qué tonos o enfoques NO debe usar el mediador? Por ejemplo, 'evitar lenguaje técnico de HR que el developer pueda percibir como corporativo'."
          ],
          "alchemist_signals": [
            "La aplicación del prompt a gestión de personas (no solo tareas técnicas) muestra que el estudiante entiende que la IA puede ser un coach de liderazgo, ampliando el alcance del programa."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene Rol, Tarea y Contexto muy bien definidos, con un Formato de salida detallado: guion con Apertura, Diagnóstico, Plan de Acción, Cierre, y Seguimiento. Está correctamente etiquetado y es altamente específico."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El caso (mediación 1:1 entre PM y desarrollador Front-end con conflicto de carga laboral) es plausiblemente real para alguien en gestión de proyectos. El contexto es específico aunque no se puede verificar si es de OCESA directamente."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "El diseño del formato de salida con guion estructurado para mediación (apertura sin acusaciones, diagnóstico de causas raíz, cierre con compromisos) muestra comprensión de cómo el modelo debe razonar sobre un problema de psicología organizacional."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado para generar un guion de mediación 1:1 entre un PM y un desarrollador en conflicto por sobrecarga de tareas fuera de su rol. La herramienta sirve para que líderes de proyecto conduzcan conversaciones difíciles con un marco empático y técnicas de comunicación no violenta, reduciendo el riesgo de escalamiento de conflictos.",
          "application_area": "Recursos Humanos",
          "application_detail": "Mediación de conflictos de carga laboral y redistribución de tareas en equipos de tecnología/proyectos.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt está muy bien construido técnicamente —rol, contexto, restricciones y formato de salida claramente definidos— pero no hay evidencia de que resuelva un problema recurrente y real del trabajo cotidiano del estudiante en OCESA; parece un ejercicio de construcción de prompt sobre un escenario plausible, no un caso aplicado a su función actual.",
          "level_up_suggestion": "Identifica un conflicto o conversación difícil recurrente en tu equipo real de OCESA (ej. redistribución de tareas en producción de eventos) y aplica este guion en una reunión real, luego documenta qué ajustaste. Eso lo convierte en un caso de uso de Alquimista en Práctica."
        },
        "sprint_2": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El cambio de 'apps de música' a 'Funcionalidades con mayor tasa de retención en apps de festivales de música' es un ejemplo excelente de cómo la especificidad del contexto transforma la calidad del resultado.",
            "La triangulación entre perspectiva tech, usuario y negocios es una aplicación metodológicamente correcta que produce outputs más equilibrados."
          ],
          "recommendations": [
            "Compartir el prompt final completo que implementa la triangulación y el contexto quirúrgico, no solo la descripción del proceso.",
            "Agregar criterios Anti-Slop explícitos para el contexto de apps de festivales: ¿qué tipo de respuestas genéricas se deben evitar? Definir el estándar de calidad del resultado."
          ],
          "alchemist_signals": [
            "La aplicación a apps de festivales de música (vs. música general) demuestra conocimiento del negocio de OCESA y transferencia al contexto específico de la empresa."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "Aplica Triangulación de Perspectivas correctamente: perspectiva tech (desarrolladores), perspectiva usuario, y perspectiva de negocios/engagement. La distinción entre 'apps de música' y 'apps de festivales de música' como ajuste de contexto quirúrgico es una aplicación sólida."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "El resultado mostrado tiene densidad aceptable: perspectivas diferenciadas, datos específicos por tipo de fuente. Sin embargo, no hay criterios explícitos de Anti-Slop ni lista de palabras/frases prohibidas."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "Documenta el contexto inicial, los ajustes de refinamiento (contexto quirúrgico, triangulación, especificidad de plataformas), y el resultado. Es un proceso de iteración bien documentado aunque conciso."
            }
          },
          "work_synthesis": "El estudiante diseñó un prompt de investigación UX avanzado para identificar fricciones específicas en apps de festivales de música, utilizando triangulación de fuentes (desarrolladores vs. usuarios reales) y enfoque en tasas de abandono. El resultado es una herramienta de inteligencia competitiva que podría informar decisiones de producto o partnerships tecnológicos en OCESA.",
          "application_area": "Tecnología y Desarrollo",
          "application_detail": "Auditoría de UX para apps de festivales de música, comparando perspectiva técnica vs. experiencia real del usuario.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El estudiante demuestra dominio técnico sólido de ingeniería de prompts (contexto quirúrgico, triangulación, anti-slop) y formula preguntas inteligentes, pero el ejercicio queda en un caso hipotético de investigación sin evidencia de aplicación a un problema real y recurrente de su trabajo en OCESA.",
          "level_up_suggestion": "Conecta este prompt a un proyecto concreto de OCESA, por ejemplo, auditando la app de un festival específico como Corona Capital o Vive Latino, y comparte los hallazgos con el equipo de producto o tecnología para validar decisiones reales."
        },
        "sprint_3": {
          "score": 3.5,
          "level": "Destacado",
          "strengths": [
            "La analogía del 'Control de Tráfico Aéreo' para el Supervisor es la articulación más clara y precisa del rol del Supervisor en la arquitectura Worker-Supervisor de todo el sprint.",
            "La lógica de rechazo del Supervisor antes de usar la información (no solo revisión post-generación) es un diseño correcto que previene errores antes de que lleguen al usuario."
          ],
          "recommendations": [
            "Compartir el System Prompt completo para evidenciar la arquitectura total, no solo fragmentos.",
            "Agregar criterios específicos de rechazo del Supervisor: ¿qué condiciones activan el rechazo? ¿Cómo se retroalimenta el Worker con la razón del rechazo?"
          ],
          "alchemist_signals": [
            "La comprensión del Supervisor como 'filtro de calidad antes de usar la información' es una señal de arquitectura de sistemas madura que va más allá de la descripción superficial del sprint."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 4,
              "justification": "El sistema tiene arquitectura Supervisor-Worker explícita con analogía de 'Control de Tráfico Aéreo': el Supervisor rechaza outputs del Worker si detecta errores, alucinaciones o formatos rotos. La arquitectura está bien articulada y es técnicamente precisa."
            },
            "Relevancia del Problema": {
              "score": 3,
              "justification": "El problema (carga mensual de funciones de un evento de familiares) es real aunque la descripción inicial es un poco vaga. Se aclara con el System Prompt: catálogo de productos con promociones actualizadas mensualmente."
            },
            "Justificación Técnica": {
              "score": 4,
              "justification": "La justificación del Supervisor-Worker es técnicamente precisa: 'El Supervisor no genera datos; su función es actuar como Control de Tráfico Aéreo. Su trabajo es rechazar el trabajo del Worker si detecta errores antes de usar la información'. Es la mejor articulación técnica del Sprint 3."
            },
            "Calidad de la Evidencia": {
              "score": 3,
              "justification": "Comparte fragmentos del System Prompt pero no el documento completo. La evidencia es parcial aunque lo compartido tiene calidad técnica real."
            }
          },
          "work_synthesis": "El estudiante diseñó un SOP cognitivo con arquitectura Supervisor-Worker para automatizar la transformación de archivos de funciones con promociones en bloques XML listos para cargar en el sitio del Rey León. El sistema filtra solo las funciones con descuento, extrae datos clave y genera código estructurado según un 'Golden Output' de referencia, eliminando errores manuales en un proceso que se repite mensualmente.",
          "application_area": "Producción de Eventos",
          "application_detail": "Carga técnica de funciones con promociones en cartelera digital de espectáculos en vivo",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El estudiante resolvió un problema real, recurrente y específico de su trabajo (carga mensual de funciones con promo para el sitio del Rey León), con un SOP estructurado en pasos de escaneo, extracción, filtrado y generación XML con Golden Output. Falta evidencia de que otros puedan reutilizarlo independientemente (GPT publicado o documentación para terceros), lo que lo mantiene en Practicante y no en Experto.",
          "level_up_suggestion": "Publica este SOP como un GPT personalizado al que Lara o cualquier miembro del equipo pueda acceder directamente, sin necesitar copiar el prompt cada vez. Agrega validación automática del output XML contra un checklist de errores comunes para fortalecer la capa de Control de Calidad del Supervisor."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Recursos Humanos",
      "level_up_suggestion": "Publica este SOP como un GPT personalizado al que Lara o cualquier miembro del equipo pueda acceder directamente, sin necesitar copiar el prompt cada vez. Agrega validación automática del output XML contra un checklist de errores comunes para fortalecer la capa de Control de Calidad del Supervisor."
    },
    {
      "id": "112450398914974608080",
      "name": "Erik Mora",
      "is_named": true,
      "avg_score": 3.37,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 0.8,
      "scores": [
        3.0,
        3.3,
        3.8
      ],
      "levels": [
        "Competente",
        "Competente",
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "Las restricciones de comportamiento ('Solo trabajas con textos', 'No generalices a menos que se te pida') delimitan el rol de forma efectiva y previenen la tendencia del modelo a expandirse.",
            "El foco en 'tono con la personalidad de marca' como criterio principal de calidad es correcto para el contexto de publicidad de entretenimiento."
          ],
          "recommendations": [
            "Agregar un Formato de salida explícito: ¿el storyline incluye narrador en off, diálogos, duración estimada? Definir la estructura del entregable mejora la consistencia.",
            "Agregar contexto de industria: mencionar que es para marcas de entretenimiento/conciertos en OCESA enriquece el rol y orienta mejor las referencias culturales del modelo."
          ],
          "alchemist_signals": [
            "El enfoque en 'personalidad de marca' como eje del prompt refleja comprensión de que la IA necesita un criterio de calidad subjetivo explícito para producir outputs de calidad creativa."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol claro (asistente creativo para textos publicitarios de videos), restricciones de comportamiento ('Solo trabajas con textos de alto impacto'), y formato de output implícito. Le falta sección de Contexto y Formato de salida más explícito."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El caso es específico (redacción de storylines para videos publicitarios de marcas) y evidencia conocimiento de la industria audiovisual/publicitaria. Sin embargo, falta más contexto del tipo de proyectos de OCESA."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "Las restricciones de comportamiento ('No diseñas, redactas', 'Solo textos de alto impacto', 'No generalices') muestran pensamiento de ingeniería para delimitar el rol. Sin embargo, no hay evidencia clara de iteración ni de un sistema más complejo."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de sistema para un asistente especializado en copywriting audiovisual, diseñado para generar textos creativos para comerciales, spots y videos de marca. El prompt establece un flujo de recopilación de información (tono, objetivo, audiencia) antes de generar 3-6 opciones de copy en distintos registros, con mecanismo de iteración incorporado.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación de copies creativos para producción audiovisual y campañas de marca en el contexto de entretenimiento y eventos.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt está bien estructurado con roles, restricciones y formatos definidos, lo que demuestra comprensión sólida de ingeniería de prompting. Sin embargo, no evidencia aplicación a un proyecto real o recurrente de trabajo en OCESA; parece un ejercicio de construcción de prompt sin contexto operativo documentado.",
          "level_up_suggestion": "Aplica este asistente a un brief real de una campaña o evento de OCESA (por ejemplo, un aftermovie de Festival Corona o un spot de Ticketmaster), documenta el output generado y cómo lo usaste o modificaste en el proceso creativo real; eso lo convierte en un caso de uso de trabajo."
        },
        "sprint_2": {
          "score": 3.3,
          "level": "Competente",
          "strengths": [
            "La justificación del CoT es la más clara y articulada del grupo: explica exactamente qué etapas de razonamiento forzó y por qué cada una es necesaria antes de la siguiente.",
            "La instrucción de razonar a través de objetivo + emoción + concepto creativo antes de generar el guion es un CoT bien diseñado para el contexto de producción audiovisual."
          ],
          "recommendations": [
            "Agregar criterios Anti-Slop al prompt: para guiones de video publicitario, ¿qué frases genéricas deben evitarse? Hacer explícito el estándar de calidad creativa esperado.",
            "Incluir instrucciones de formato de salida: ¿el guion tiene timecodes, descripciones de escena, indicaciones de música? Definir la estructura del entregable."
          ],
          "alchemist_signals": [
            "La aplicación de CoT a producción audiovisual creativa (no solo análisis técnico) demuestra comprensión de que el pensamiento paso a paso mejora cualquier tipo de output, incluido el creativo."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Aplica Chain-of-Thought explícitamente y lo justifica bien: 'estructuré el prompt para que la IA razonara paso a paso antes de generar el guion final, pasando por objetivo, emoción, concepto creativo y estructura narrativa'. La técnica está correctamente nombrada y aplicada."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "El prompt tiene densidad razonable con estructura de pasos de razonamiento, restricciones de tono ('No describas acciones físicas'), y criterio de relevancia cultural. Sin embargo, no hay lista de palabras prohibidas ni CHECK de calidad explícito."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "Documenta la técnica usada y el prompt resultante. El proceso de razonamiento del modelo (objetivo → emoción → concepto → estructura) muestra iteración de diseño aunque no se describe explícitamente el proceso previo al prompt final."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado con Chain-of-Thought para generar ideas creativas y guiones de video corto para anunciar conciertos en redes sociales (Reels, TikTok, Shorts). El sistema guía a la IA a razonar secuencialmente por objetivo, audiencia, emoción, concepto y estructura narrativa antes de producir el guion final, siendo aplicable a campañas digitales reales de OCESA.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación de guiones y conceptos creativos para videos de anuncio de conciertos en redes sociales verticales.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema recurrente y específico de su área (producción de contenido de conciertos) con una cadena de razonamiento estructurada que va más allá del prompting básico. Sin embargo, el resultado es un entregable de uso personal y no una solución reutilizable por otros, lo que lo mantiene en Practicante.",
          "level_up_suggestion": "Convierte este prompt en un GPT o plantilla parametrizable donde cualquier colega del equipo de marketing pueda ingresar el nombre del artista, fecha y plataforma, y obtenga automáticamente el guion adaptado; eso lo elevaría a Alquimista Destacado."
        },
        "sprint_3": {
          "score": 3.8,
          "level": "Destacado",
          "strengths": [
            "Los 14 campos de datos de evento definidos en el System Prompt (nombre, fecha, venue, artista, género, etc.) convierten el sistema en un estándar de datos para el área, no solo una herramienta individual.",
            "La lógica de actualización mensual integrada al sistema muestra pensamiento de ciclo de vida del artefacto, no solo de uso puntual."
          ],
          "recommendations": [
            "Agregar la capa Supervisor-Worker: ¿hay un paso de validación que verifique la completitud de los datos antes de integrarlos al sistema? Un Supervisor que exija campos obligatorios elevaría la arquitectura.",
            "Articular la justificación técnica de forma más formal: la ventaja real es la memoria persistente de todos los eventos anteriores y la consistencia de criterios, que un prompt aislado no puede mantener."
          ],
          "alchemist_signals": [
            "La estandarización de 14 campos de datos de evento como esquema del sistema convierte el artefacto en infraestructura de datos del área, señal de pensamiento institucional."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 4,
              "justification": "El sistema tiene arquitectura completa: rol definido (Event Data Manager), estructura de datos de entrada (eventos con 14 campos), reglas de procesamiento, formato de salida estructurado, y un sistema de actualización mensual. Es un sistema real con flujo lógico completo."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "La gestión de datos de eventos (fechas, artistas, anuncios) es el flujo central del trabajo del área en OCESA. La omisión de información de un evento tiene impacto real en todo el flujo de trabajo del área."
            },
            "Justificación Técnica": {
              "score": 3,
              "justification": "La justificación es correcta ('un prompt aislado daría soluciones básicas y habría que entrenarlo demasiado') y práctica, aunque podría ser más técnica: mencionar la memoria persistente del sistema y la consistencia de criterios como ventajas formales."
            },
            "Calidad de la Evidencia": {
              "score": 4,
              "justification": "Comparte System Prompt completo con estructura de datos (14 campos de evento), reglas de procesamiento, formato de output, y actualización mensual. Es el System Prompt más detallado y ejecutable del sprint en términos de gestión de datos."
            }
          },
          "work_synthesis": "Diseñó un sistema Supervisor-Worker con arquitectura de doble fase (extracción + auditoría de calidad) para procesar datos de eventos de entretenimiento y estructurarlos automáticamente en formato Excel-ready. El sistema valida coherencia temporal, asignación de responsables y geografía mediante un scorecard interno, y genera notificaciones listas para WhatsApp/Slack, eliminando errores logísticos y correos de aclaración en el flujo de producción de eventos.",
          "application_area": "Producción de Eventos",
          "application_detail": "Gestión y validación de datos operativos de eventos (fechas, venues, responsables) para la base de datos del área de producción en OCESA.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El estudiante construyó un sistema multi-fase con lógica de auditoría interna aplicado a un problema real y recurrente de su área de trabajo (gestión de datos de eventos), y reconoce que era su único recurso hasta ahora. Aunque no tiene GPT publicado por falta de plan pagado, el system prompt evidencia comprensión funcional de arquitectura Supervisor-Worker con casos de uso concretos.",
          "level_up_suggestion": "Al contratar ChatGPT Plus, publica este sistema como GPT compartido para que tu equipo lo use sin necesidad de copiar el prompt cada vez. El siguiente paso es conectarlo a Zapier o Make para que los datos validados se escriban directamente en la hoja de Excel sin intervención manual."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Al contratar ChatGPT Plus, publica este sistema como GPT compartido para que tu equipo lo use sin necesidad de copiar el prompt cada vez. El siguiente paso es conectarlo a Zapier o Make para que los datos validados se escriban directamente en la hoja de Excel sin intervención manual."
    },
    {
      "id": "101516039533786932106",
      "name": "Edgar Giron",
      "is_named": true,
      "avg_score": 3.33,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": -1.0,
      "scores": [
        4.0,
        3.0,
        3.0
      ],
      "levels": [
        "Destacado",
        "Competente",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "La instrucción 'Solo incluye productos del catálogo real confirmado con URL específica' es una de las restricciones anti-alucinación más precisas y efectivas del grupo.",
            "El diseño de salida en múltiples secciones (tabla por región, análisis comparativo, hallazgos estratégicos) convierte el prompt en un sistema de análisis de portafolio completo."
          ],
          "recommendations": [
            "Agregar un mecanismo de manejo de incertidumbre: ¿qué hace el modelo si encuentra un producto en el catálogo sin información suficiente para todas las regiones? Definir comportamiento explícito.",
            "Considerar Few-Shot con un ejemplo de fila de la tabla para anclar el formato exacto y evitar varianza en la presentación de los datos."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Construyó un sistema de análisis de portafolio con fuente verificable explícita, convirtiendo el prompt en un instrumento de investigación de mercado riguroso."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene arquitectura de máxima calidad: Rol explícito, Objetivo definido, Regiones obligatorias especificadas, restricciones anti-alucinación ('Solo incluye productos del catálogo real confirmado'), flujo por etapas, y formato de salida detallado (tabla, sección por región, hallazgos)."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt está construido para un cliente real (Mabe), con URL específica del catálogo, regiones geográficas reales de operación, y un objetivo de negocio concreto (matriz técnica-comercial regional). Es un activo de trabajo real."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Las restricciones anti-alucinación son sofisticadas: pide solo productos del catálogo real, exige URL específica, prohíbe productos no confirmados. El flujo en etapas (mapeo, análisis, hallazgos) muestra arquitectura de razonamiento forzado."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de ingeniería avanzada para generar matrices técnico-comerciales de portafolio de producto por región para la empresa Mabe, cubriendo 5 categorías y 5 regiones con localización de modismos, cruces legales y restricciones de veracidad de datos. El artefacto es reutilizable y parametrizable, diseñado para alimentar directamente procesos de marketing regional y gestión de catálogo.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación de matrices de posicionamiento de producto por región para marca de electrodomésticos, con enfoque en diferenciación local y cumplimiento normativo.",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "El prompt incluye variables parametrizables ([CATEGORÍA AQUÍ]), lógica condicional por categoría, reglas de validación de datos ('No inventes modelos'), localización regional y output estructurado listo para Excel, lo que lo convierte en una plantilla reutilizable por otros equipos sin conocimiento previo de prompting.",
          "level_up_suggestion": "El siguiente paso natural es convertir este prompt en un GPT personalizado o un flujo en Make/n8n que consuma el portafolio de mabeglobal.com automáticamente y genere la tabla sin intervención manual, eliminando el riesgo de datos desactualizados."
        },
        "sprint_2": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "La estrategia de verificación en dos pasos (extraer dato + pedir fuente exacta) es una aplicación práctica y efectiva del método ARV que protege contra alucinaciones de datos específicos.",
            "La identificación del tipo de dato como 'riesgoso' (afluencia en tienda por horas y tiempo de estadía) muestra criterio profesional: sabe qué datos son difíciles de verificar."
          ],
          "recommendations": [
            "Compartir el prompt completo y final, no solo fragmentos. La respuesta muestra los pasos pero no el artefacto completo que los integra.",
            "Documentar el caso completo: ¿cuál era la investigación? ¿Qué encontró? ¿El modelo logró verificar la fuente o admitió que no podía? Mostrar el ciclo completo ARV."
          ],
          "alchemist_signals": [
            "La consciencia de que ciertos tipos de datos son 'riesgosos' para extraer de la IA es una señal de madurez crítica que va más allá de simplemente aplicar técnicas."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "Aplica verificación forzada de fuentes (pedir nombre del reporte, institución, link/año) como mecanismo anti-alucinación. La técnica es correcta aunque no está nombrada formalmente como ARV o Triangulación en la respuesta."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "Los prompts de verificación ('Dame el nombre exacto del reporte, la institución y el link') son densos en criterios de calidad. La identificación del dato específico como 'riesgoso' para verificar demuestra criterio editorial."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "Documenta el proceso: investigación riesgosa, verificación forzada de fuente, validación del dato. Sin embargo, la respuesta es concisa y no muestra el prompt completo final ni la evolución detallada."
            }
          },
          "work_synthesis": "El estudiante construyó un protocolo de verificación de datos que fuerza a ChatGPT a revelar sus fuentes y detectar alucinaciones en información de retail. El sistema utiliza un prompt estructurado tipo 'Auditor de Datos Senior' que asigna un score de confianza y distingue entre datos verificados y datos no anclados, aplicable a cualquier investigación que requiera validar cifras antes de usarlas en decisiones de negocio.",
          "application_area": "Análisis de Datos",
          "application_detail": "Verificación de datos de comportamiento de consumidores en retail (afluencia, tiempo de estadía) para evitar usar información falsa en reportes o estrategias de OCESA.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El estudiante no solo experimentó con la técnica, sino que construyó un prompt reutilizable con estructura definida (roles, pasos, regla de oro) y lo aplicó a un problema real: validar datos de investigación antes de tomar decisiones. La evidencia del resultado —donde ChatGPT admitió no encontrar la fuente y redirigió a una real— demuestra uso práctico con impacto tangible.",
          "level_up_suggestion": "Para escalar a Alquimista Destacado, empaqueta este prompt como un GPT personalizado llamado 'Auditor de Datos OCESA' con variables configurables (industria, país, tipo de dato) que cualquier colega pueda usar sin necesidad de construir el prompt desde cero."
        },
        "sprint_3": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El System Prompt tiene sección de 'Métricas de Éxito Esperadas' integrada, lo que convierte la IA en un sistema que auto-evalúa sus outputs contra criterios definidos.",
            "El abordaje de variaciones por región (jerga, temporalidades) como el principal eje de personalización demuestra comprensión real del problema de contenido multi-mercado."
          ],
          "recommendations": [
            "Hacer explícita la arquitectura Supervisor-Worker: ¿hay una capa que valida la consistencia de la parrilla antes de entregarla? ¿O el sistema genera y ya?",
            "Agregar un mecanismo de actualización regional: ¿cómo se indica la región en cada uso? ¿Hay un input variable de 'región activa' que adapta el tono y la jerga?"
          ],
          "alchemist_signals": [
            "La inclusión de métricas de éxito en el System Prompt es una señal de pensamiento orientado a resultados medibles, no solo a producir contenido."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 3,
              "justification": "El sistema tiene un SOP cognitivo con contexto de marca, rol definido, personalidad, y guías específicas de contenido. Incluye métricas de éxito y restricciones de formato. No es explícitamente Supervisor-Worker pero es un sistema con coherencia interna."
            },
            "Relevancia del Problema": {
              "score": 3,
              "justification": "El problema (parrilla de contenido recurrente para una marca con variaciones mínimas por región) es genuinamente un caso de sistema: la repetición y la variación regional justifican la arquitectura."
            },
            "Justificación Técnica": {
              "score": 3,
              "justification": "Justifica correctamente que el proceso recurrente con contexto acumulado es más eficiente que un prompt aislado, y que el sistema ya 'conoce' la marca. La justificación es práctica y coherente."
            },
            "Calidad de la Evidencia": {
              "score": 3,
              "justification": "Comparte System Prompt con estructura completa: rol, contexto de marca, personalidad, guías de contenido, formato de salida, y restricciones. Es evidencia sólida aunque el prompt no incluye variables regionales explícitas."
            }
          },
          "work_synthesis": "Diseñó un sistema de copywriting dual (Worker + Supervisor) para generar parrillas de contenido mensual en redes sociales para una marca de electrodomésticos con restricciones legales complejas (FIFA/COFEPRIS) y variaciones regionales. El sistema incluye blacklists, estructura narrativa de 5 momentos, protocolo de auditoría con scorecard y separación de copies por formato, resolviendo un proceso recurrente de producción de contenido con memoria de contexto entre ciclos.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación mensual de copies para redes sociales con validación legal, adaptación regional y anti-repetición de contenido previo.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Tiene un caso de uso real, recurrente y ya en producción ('lo están poniendo a prueba mes con mes'). El system prompt evidencia arquitectura Supervisor-Worker con reglas operativas concretas, blacklists, estructura narrativa y protocolo de entrega estandarizado, lo cual va más allá de un prompt básico.",
          "level_up_suggestion": "Para escalar a Alquimista Destacado, publica esto como un GPT compartido con el equipo de marketing o empaquétalo con instrucciones de onboarding para que otros diseñadores de contenido puedan usarlo sin tu intervención. Agrega una sección de memoria explícita donde el sistema registre los copies ya publicados por mes y región para fortalecer el anti-repetición."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Para escalar a Alquimista Destacado, publica esto como un GPT compartido con el equipo de marketing o empaquétalo con instrucciones de onboarding para que otros diseñadores de contenido puedan usarlo sin tu intervención. Agrega una sección de memoria explícita donde el sistema registre los copies ya publicados por mes y región para fortalecer el anti-repetición."
    },
    {
      "id": "112612489529176441100",
      "name": "Casandra Rojas",
      "is_named": true,
      "avg_score": 3.3,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 0.0,
      "scores": [
        3.3,
        3.3,
        3.3
      ],
      "levels": [
        "Competente",
        "Competente",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.3,
          "level": "Competente",
          "strengths": [
            "El concepto de 'Factor Wow' diferenciador para cada propuesta de diseño es una instrucción creativa específica de la industria de eventos que demuestra conocimiento del trabajo real.",
            "El primer prompt tiene una estructura de outputs muy específica (3 conceptos + Moodboard + Material + Justificación) que guía el modelo hacia entregables concretos."
          ],
          "recommendations": [
            "Elegir el mejor de los dos prompts (el primero es claramente superior) y profundizarlo: agregar restricciones presupuestarias, tiempos de montaje, o criterios de evaluación del diseño.",
            "Agregar un mecanismo anti-alucinación: si el Brief Creativo no especifica materiales disponibles, ¿qué debe hacer el modelo? Definir comportamiento ante inputs incompletos."
          ],
          "alchemist_signals": [
            "El vocabulario específico del prompt (Factor Wow, Moodboard Visual, Brief Creativo) evidencia que codificó su proceso de trabajo real en un prompt, no copió una plantilla genérica."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "Comparte dos prompts bien estructurados: el primero con Rol/Tarea/Contexto/Formato claro, el segundo más conversacional. Ambos tienen elementos estructurales reconocibles aunque el segundo es menos preciso."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "Los prompts son específicos para diseño de experiencias en eventos: Diseñador Industrial Senior en Escenografía, 'Factor Wow' diferenciador, restricciones de espacio del recinto. Detalles como 'Moodboard Visual' y 'Detalle de Materiales' muestran conocimiento real de la industria."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "El primer prompt muestra diseño consciente con outputs múltiples justificados (3 conceptos con Factor Wow distinto). El segundo prompt es más básico. Hay evidencia de iterar entre prompts pero no se documenta el proceso."
            }
          },
          "work_synthesis": "Casandra construyó un pipeline de 3 prompts encadenados para el proceso de diseño y producción de escenografías de eventos: desde la generación de conceptos creativos, pasando por la validación estructural de ingeniería, hasta la optimización logística de montaje. El sistema busca sistematizar el flujo completo de trabajo de una diseñadora/productora de eventos efímeros.",
          "application_area": "Producción de Eventos",
          "application_detail": "Diseño y producción de escenografías, activaciones y photo opps para festivales y eventos en vivo.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Casandra ya superó el prompting básico al construir una cadena de 3 prompts con roles especializados (diseñador, ingeniero, director de producción) que replica un flujo de trabajo real y secuencial de su industria. Sin embargo, los prompts aún usan variables placeholder en corchetes sin mostrar evidencia de ejecución real con casos concretos, lo que impide clasificarla como Alquimista Destacado.",
          "level_up_suggestion": "Ejecuta los 3 prompts con un brief real de un cliente o proyecto reciente y documenta los outputs; luego empaquétalos en un GPT personalizado que cualquier colega de producción pueda usar sin necesidad de entender prompting."
        },
        "sprint_2": {
          "score": 3.3,
          "level": "Competente",
          "strengths": [
            "Las restricciones explícitas de palabras prohibidas ('vanguardista', 'sostenible', 'innovador') aplicadas al design brief son Anti-Slop de alto nivel aplicado a la industria creativa.",
            "La especificidad técnica del prompt (Truss oculto con bastidores de madera, tela tensada, copete perimetral) demuestra que traduce conocimiento experto de producción en instrucciones precisas."
          ],
          "recommendations": [
            "Mostrar el prompt previo a la aplicación de Anti-Slop para evidenciar la transformación y el impacto de la técnica.",
            "Agregar un Few-Shot con un ejemplo de concepto 'retro-energético' bien ejecutado para anclar aún más el output esperado y reducir la varianza del modelo."
          ],
          "alchemist_signals": [
            "La creación del concepto 'Densidad de Prueba: Mecanismo → Efecto' como criterio propio de Anti-Slop aplicado al diseño creativo muestra apropiación del framework más allá de la plantilla."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "Aplica Anti-Slop conscientemente con el concepto 'Densidad de Prueba: Mecanismo → Efecto', que es una aplicación directa y correcta del criterio Anti-Slop. El prompt resultante muestra comprensión de la técnica."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "El prompt final tiene densidad informativa alta: especificaciones de materiales (plásticos reciclados traslúcidos, neones vintage), efectos concretos ('glow retro-energético'), y restricciones de output ('no palabras como vanguardista o sostenible'). Criterio de calidad explícito y preciso."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "Documenta el contexto, la técnica aplicada y el resultado. Sin embargo, no muestra el proceso de iteración de forma explícita: cuál era el prompt antes de aplicar Anti-Slop y qué cambió específicamente."
            }
          },
          "work_synthesis": "Casandra construyó un prompt estructurado para el diseño de activaciones físicas en festivales, integrando análisis estructural de seguridad (herrería, truss, lastre) y concepto creativo detallado (neón, materiales, formas) en una sola instrucción reutilizable. El prompt usa variables parametrizables ([Medidas], [Marca], [Festival]) que lo convierten en una plantilla funcional para distintos proyectos de producción de eventos.",
          "application_area": "Producción de Eventos",
          "application_detail": "Diseño de stands y activaciones de marca en festivales de entretenimiento, con criterios de seguridad estructural y estética 'social-ready'.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema real y recurrente de su trabajo (conceptualizar activaciones para festivales) con variables parametrizables que sugieren uso repetido en distintos clientes. La integración de análisis estructural técnico (calibres, puntos de lastre, alertas de seguridad) junto al concepto creativo evidencia aplicación profesional directa, no solo experimentación básica.",
          "level_up_suggestion": "Para alcanzar nivel Experto, convierte este prompt en un GPT personalizado o flujo encadenado donde el primer paso genere el análisis estructural y el segundo, el concepto creativo con moodboard textual, permitiendo que otros en producción lo usen sin necesidad de conocer ingeniería de prompts."
        },
        "sprint_3": {
          "score": 3.3,
          "level": "Competente",
          "strengths": [
            "La conexión de los tres momentos del evento (Plenaria, Activación, Photo Opp) como un sistema coherente es una aplicación real del diseño de experiencias integradas que diferencia a OCESA de eventos genéricos.",
            "La etapa de revisión crítica antes de presentar al cliente es un mecanismo de control de calidad integrado al flujo que refleja comprensión real del sistema Supervisor-Worker."
          ],
          "recommendations": [
            "Hacer explícita la arquitectura Supervisor-Worker: nombrar quién es el Worker (generador de ideas sensoriales) y quién es el Supervisor (revisor crítico que valida coherencia entre momentos).",
            "Agregar criterios de calidad específicos para la revisión: ¿qué hace que una idea sea 'superficial' vs. 'profunda'? Definir umbrales concretos para que el sistema pueda auto-evaluar."
          ],
          "alchemist_signals": [
            "La visión de conectar tres momentos del evento en un sistema coherente demuestra pensamiento de experiencia total, no solo de activaciones aisladas. Es una señal de madurez en diseño de sistemas."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 3,
              "justification": "Describe un sistema de dos etapas (generación sensorial → revisión crítica) que conecta tres momentos del evento (Plenaria, Activación, Photo Opp). Es una arquitectura coherente aunque no llega al nivel Supervisor-Worker explícito del sprint."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El problema (conceptos creativos superficiales o genéricos en diseño de experiencias) es central a su trabajo y genuinamente requiere un sistema con memoria de la propuesta completa para conectar los tres momentos del evento."
            },
            "Justificación Técnica": {
              "score": 3,
              "justification": "Justifica con argumentos concretos (consistencia entre momentos del evento, revisión crítica antes de presentar) aunque no articula formalmente la ventaja sobre un prompt aislado en términos de arquitectura del sistema."
            },
            "Calidad de la Evidencia": {
              "score": 3,
              "justification": "Incluye System Prompt completo y link al GPT (aunque el link no era completamente claro en la respuesta). El System Prompt tiene estructura de roles y flujo lógico definido."
            }
          },
          "work_synthesis": "Casandra diseñó un sistema de dirección creativa multi-paso (Supervisor-Worker) que convierte un brief de evento en una propuesta completa con coherencia narrativa entre tres momentos del evento (Plenaria, Activación y Photo Opp). El sistema no solo genera conceptos, sino que los somete a revisión crítica de viabilidad de producción, simulando el flujo real de una agencia. El resultado es un Custom GPT reutilizable que acelera el punto de partida creativo antes de llegar a renders y moodboards.",
          "application_area": "Producción de Eventos",
          "application_detail": "Diseño de experiencias y conceptos creativos para eventos corporativos y de entretenimiento con filtro de producción integrado",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Casandra construyó un Custom GPT con flujo multi-paso aplicado directamente a su trabajo real de dirección creativa en eventos, resolviendo un problema recurrente (conceptos superficiales sin coherencia narrativa ni viabilidad de producción). Sin embargo, no hay evidencia de que el sistema esté diseñado para ser reutilizado por otros colegas o que incluya documentación/SOPs que lo eleven a solución compartida.",
          "level_up_suggestion": "Para dar el salto a Alquimista Destacado, documenta el sistema como un SOP cognitivo compartible y preséntalo a tu equipo de producción o dirección creativa para que otros puedan usarlo con cualquier brief, agregando una sección de inputs estandarizados (tipo brief template) que reduzca la fricción de entrada para nuevos usuarios."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Producción de Eventos",
      "level_up_suggestion": "Para dar el salto a Alquimista Destacado, documenta el sistema como un SOP cognitivo compartible y preséntalo a tu equipo de producción o dirección creativa para que otros puedan usarlo con cualquier brief, agregando una sección de inputs estandarizados (tipo brief template) que reduzca la fricción de entrada para nuevos usuarios."
    },
    {
      "id": "103454950493181799489",
      "name": "Daniela Casas Herrera",
      "is_named": true,
      "avg_score": 3.23,
      "sprints_count": 3,
      "total_sprints_with_work": 4,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": -1.0,
      "scores": [
        4.0,
        2.7,
        3.0
      ],
      "levels": [
        "Destacado",
        "Competente",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "Aplicó Step-Back en Sprint 1, una técnica que se enseña en Sprint 2, lo que indica exploración autónoma y aprendizaje acelerado.",
            "La Matriz de Beneficios con niveles Oro/Plata/Bronce y 'valor para la comunidad' demuestra comprensión del negocio de patrocinios de OCESA con profundidad real."
          ],
          "recommendations": [
            "Agregar un formato de salida más específico: definir la extensión del Pitch de Cierre, el número de filas en la Matriz, o el formato de las activaciones para evitar outputs variables.",
            "Incluir restricciones sobre fuentes de datos: '¿De dónde tomas la información cultural sobre el fan de Corridos Tumbados? Si no tienes datos, indícalo explícitamente'."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Aplicó técnicas del Sprint 2 en el Sprint 1 de forma orgánica. Demuestra exploración autónoma y aprendizaje que va más allá del programa."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Estructura en dos fases explícitas (Step-Back y Workflow de Ejecución) con sub-tareas claramente definidas dentro de cada fase. El uso de FASE 1 para análisis previo antes de generar propuesta es arquitectura avanzada de prompt."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El caso es específico al negocio de OCESA: concierto de Corridos Tumbados, marca de bebida como patrocinador, activaciones en eventos masivos. Los detalles del ADN cultural del fan de Corridos Tumbados muestran conocimiento profundo de la industria."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "La integración del Step-Back en el Sprint 1 (antes de que se enseñara formalmente en Sprint 2) demuestra dominio adelantado. El diseño de una Fase 1 de análisis antes de la Fase 2 de ejecución es una decisión arquitectónica consciente y sofisticada."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de ingeniería de experiencias para patrocinios en conciertos de Corridos Tumbados, estructurado en dos fases: un análisis cultural profundo (step-back) seguido de un workflow de ejecución que genera análisis de fit, activaciones, matriz de beneficios y pitch de cierre. Sirve como plantilla reutilizable para desarrollar propuestas de patrocinio que conecten marcas de bebidas con audiencias específicas de manera auténtica.",
          "application_area": "Producción de Eventos",
          "application_detail": "Desarrollo de propuestas de patrocinio y activaciones de marca para eventos musicales masivos en OCESA.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt evidencia aplicación a un caso de uso real y recurrente en el negocio de OCESA (patrocinios en conciertos), con estructura multi-fase, uso de técnica step-back y variables reemplazables como [MARCA DE BEBIDA] que sugieren intención de reutilización contextualizada. Va más allá del prompting básico al diseñar un flujo de pensamiento orientado a un entregable de negocio concreto.",
          "level_up_suggestion": "Para alcanzar Alquimista Destacado, convierte este prompt en un GPT personalizado o flujo en ChatGPT donde otros colegas de patrocinios puedan ingresar variables (género musical, marca, tipo de evento) y obtener propuestas estructuradas sin necesidad de conocer ingeniería de prompting."
        },
        "sprint_2": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "El concepto de 'Triangulación de Perspectivas' (fuentes oficiales, prensa especializada, evidencia operativa) está bien articulado y es metodológicamente sólido para análisis de patrocinios.",
            "El resultado mostrado tiene densidad informativa y criterio estratégico real: distingue entre presencia táctica y masiva de marca."
          ],
          "recommendations": [
            "Compartir el prompt final que implementa la triangulación. La respuesta describe el resultado pero no la herramienta que lo produjo.",
            "Documentar el proceso de iteración: ¿Cuál era el prompt inicial? ¿Qué falló? ¿Qué se cambió para obtener el resultado con triangulación verificada?"
          ],
          "alchemist_signals": [
            "El uso del concepto 'Drift' para describir desviaciones de datos de ediciones pasadas muestra vocabulario técnico propio que va más allá del programa."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "Aplica Triangulación de Perspectivas de forma consciente y la nombra correctamente. Sin embargo, la descripción del contexto es escasa ('un prompt como analista de patrocinios') y no se muestra el prompt que lo implementa."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "El resultado mostrado (párrafo sobre Red Bull en Corona Capital) es denso y específico, con referencia a 'Experience Marketing táctico' vs. presencia masiva. El concepto de 'auditar para eliminar Drift de ediciones pasadas' es sofisticado."
            },
            "Iteración y Refinamiento": {
              "score": 2,
              "justification": "El proceso iterativo no está documentado. Se menciona qué técnica se usó y el resultado, pero no se explica cómo evolucionó el prompt ni qué cambios se hicieron. Falta el prompt final que implementa la triangulación."
            }
          },
          "work_synthesis": "El estudiante aplicó una técnica de triangulación de perspectivas para validar datos sobre la presencia de Red Bull en el Corona Capital, contrastando fuentes oficiales, prensa especializada y evidencia operativa. El resultado es un párrafo de análisis de patrocinios que garantiza certeza en la información antes de presentarla como base para decisiones estratégicas de cuenta.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Análisis y validación de datos de patrocinadores para propuestas comerciales en eventos OCESA",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El estudiante describe la técnica correctamente y produce un párrafo de output, pero el trabajo presentado es más una explicación conceptual del método que evidencia de un caso de uso recurrente y aplicado a su flujo real de trabajo. No se comparte el prompt final ni se demuestra integración sistemática en tareas diarias.",
          "level_up_suggestion": "Construye y comparte el prompt completo que usaste para triangular los datos de Red Bull, incluyendo las instrucciones específicas para cada perspectiva. Luego documenta cómo lo usarías de forma recurrente en el análisis de otros patrocinadores, mostrando que resuelve un problema real y repetible en tu trabajo."
        },
        "sprint_3": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El sistema está realmente implementado y en uso (link funcional), lo que lo distingue de quienes describen sistemas teóricos.",
            "La Scorecard de validación de 1 a 5 con umbral de 4.5 para aceptar una propuesta es un mecanismo de control de calidad integrado al sistema."
          ],
          "recommendations": [
            "Compartir el System Prompt del proyecto para evidenciar la arquitectura. Un link sin el prompt subyacente no permite evaluar la calidad del diseño.",
            "Articular la justificación técnica: ¿por qué este sistema es mejor? Podría mencionar la memoria persistente del Inventario Maestro, la consistencia de criterios, y la eliminación de rework."
          ],
          "alchemist_signals": [
            "La Scorecard de calidad integrada al sistema demuestra pensamiento de control de calidad autónomo, convirtiendo la IA en un juez objetivo de sus propias propuestas."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 3,
              "justification": "Hay evidencia de un sistema real (link funcional al proyecto, inventario maestro configurado, reglas de calidad establecidas). Sin embargo, la arquitectura no está documentada: no se muestran los roles del sistema ni el flujo lógico."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El problema (crear propuestas de patrocinio que matcheen evento-marca con datos de audiencia) es central para su rol en OCESA y genuinamente requiere un sistema con knowledge base persistente."
            },
            "Justificación Técnica": {
              "score": 2,
              "justification": "La justificación se presenta como guía de uso ('Entra al link, pide tu propuesta, carga marcas extra') en lugar de explicar por qué el sistema es arquitectónicamente superior a un prompt aislado."
            },
            "Calidad de la Evidencia": {
              "score": 3,
              "justification": "Incluye link funcional al proyecto en ChatGPT y describe cómo usarlo. El link es evidencia de implementación real. Sin embargo, no se comparte el System Prompt que define el comportamiento del sistema."
            }
          },
          "work_synthesis": "Construyó un GPT especializado en generación de propuestas comerciales de patrocinio, configurado con un Inventario Maestro de activos y reglas de calidad mediante scorecard. El sistema permite a cualquier miembro del equipo comercial generar propuestas de patrocinio para marcas y eventos de forma estandarizada, validando la calidad del output antes de presentarlo al cliente.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Automatización de propuestas de patrocinio para eventos OCESA, con validación de calidad integrada y capacidad de incorporar datos de marcas externas.",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "Construyó un GPT reutilizable con contexto preconfigurado (Inventario Maestro, reglas de calidad, scorecard de validación) que otros miembros del equipo pueden usar sin conocimiento técnico de prompting. Supera el prompt aislado al encapsular datos, criterios y flujo de mejora iterativa en un solo activo digital compartible.",
          "level_up_suggestion": "Conecta el GPT a un CRM o hoja de seguimiento vía Zapier/Make para que cada propuesta generada quede registrada automáticamente con la marca, evento y puntaje de scorecard, creando un pipeline de patrocinios auditable. Documenta 3-5 casos de uso exitosos con métricas de tiempo ahorrado para demostrar ROI al equipo directivo."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Ventas y Propuestas",
      "level_up_suggestion": "Conecta el GPT a un CRM o hoja de seguimiento vía Zapier/Make para que cada propuesta generada quede registrada automáticamente con la marca, evento y puntaje de scorecard, creando un pipeline de patrocinios auditable. Documenta 3-5 casos de uso exitosos con métricas de tiempo ahorrado para demostrar ROI al equipo directivo."
    },
    {
      "id": "118007543304428522295",
      "name": "Pamela Rojas",
      "is_named": true,
      "avg_score": 3.23,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 0.0,
      "scores": [
        3.0,
        3.7,
        3.0
      ],
      "levels": [
        "Competente",
        "Destacado",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "Identificó un pain point real y específico de su trabajo (clientas imprecisas) y diseñó una solución concreta para abordarlo.",
            "El enfoque de 'historias en lugar de ventas' como framework del formulario es una decisión de diseño inteligente que diferencia el output esperado."
          ],
          "recommendations": [
            "Agregar restricciones de formato más específicas: número máximo de preguntas por sección, tipo de respuesta esperada (selección múltiple, texto libre), y tono del formulario.",
            "Incorporar el componente de verificación: cómo el modelo debe confirmar que el briefing resultante es accionable antes de entregarlo."
          ],
          "alchemist_signals": [
            "Señal positiva: hay pensamiento de producto detrás del prompt (resolver un problema recurrente de clientas) que apunta hacia desarrollo de activos digitales reutilizables."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol definido (Diseñadora de Procesos Creativos), Contexto claro (clientas imprecisas que cambian objetivos), Tarea específica (Formulario de Briefing con estructura de historias) y una guía de estructura de output. Aunque no es un prompt maestro de máxima densidad, cumple con los elementos esenciales."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El prompt resuelve un problema real y específico de su trabajo: la imprecisión de clientes que piden 'más storytelling' sin saber definirlo. El contexto de sus clientas y el funnel de decisión como estructura son detalles de su industria real."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "La decisión de usar 'historias' como framework de briefing en lugar de la lógica de ventas estándar muestra comprensión de cómo guiar el output del modelo hacia un resultado diferenciado. Hay evidencia de decisión de diseño consciente."
            }
          },
          "work_synthesis": "La estudiante construyó un prompt para generar un formulario de briefing creativo orientado a clientes de marketing, transformando terminología técnica de funnel en lenguaje narrativo accesible. La herramienta busca resolver el problema recurrente de clientes imprecisas que solicitan 'storytelling' sin poder definirlo, guiándolas a través de estructuras narrativas (inicio-nudo-desenlace) y herramientas visuales como el Semáforo Creativo.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Formulario de briefing para clientes de servicios creativos/marketing que traduce conceptos de funnel y storytelling a lenguaje no técnico",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt está bien estructurado con rol, tarea, contexto y formato claros, lo que evidencia comprensión sólida de ingeniería de prompts. Sin embargo, el trabajo queda en la generación del artefacto (el formulario) sin evidencia de que ya lo esté usando con clientas reales ni de que haya un flujo integrado en su proceso de trabajo diario.",
          "level_up_suggestion": "Usa el formulario generado con al menos una clienta real y documenta cómo cambió el proceso de briefing; luego convierte el prompt en un GPT personalizado que tú y otras diseñadoras puedan usar directamente con sus propias clientas sin necesidad de reescribir el prompt cada vez."
        },
        "sprint_2": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "Aplicó técnicas de prompting de texto a un dominio no textual (generación de imágenes), identificó sus límites y los adaptó creativamente.",
            "El proceso de iteración está documentado con claridad: qué no funcionó, por qué, y cómo se corrigió."
          ],
          "recommendations": [
            "Documentar el prompt final de Midjourney de forma estructurada para que pueda reutilizarse como plantilla en futuros proyectos de imagen.",
            "Explorar cómo el framework ARV podría aplicarse a la generación de imágenes (Ask al modelo qué referencias visuales necesita, Refine con especificaciones técnicas, Verify con criterios de calidad medibles)."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Avanzada: transferir frameworks de prompting de texto a imagen y adaptarlos con criterio técnico es un nivel de sofisticación que pocos estudiantes alcanzan."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "La estudiante aplicó Step-Back Prompting para prompts de imagen en Midjourney, descubrió sus limitaciones específicas en ese dominio (demasiado concepto reduce calidad), y adaptó la estrategia hacia prompts más concisos y técnicos. Este nivel de meta-análisis de una técnica en un contexto no textual es excepcional."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "El resultado final muestra mejora en calidad de imagen al reducir el ruido conceptual, lo cual es una forma de Anti-Slop visual. Sin embargo, no articula explícitamente criterios de calidad del output final ni cómo los midió."
            },
            "Iteración y Refinamiento": {
              "score": 4,
              "justification": "Documenta claramente el proceso: comenzó con Step-Back, descubrió que el exceso de concepto perjudicaba prompts de imagen, y ajustó la estrategia hacia concisión técnica. Es uno de los mejores ejemplos de iteración consciente y documentada en el grupo."
            }
          },
          "work_synthesis": "El estudiante desarrolló una metodología de prompting para generación de imágenes en Midjourney, combinando Step-Back, estructuración por capas y ponderación de elementos (weights ::3::2::1) para resolver el problema recurrente de distorsión de rostros. El resultado es un sistema de construcción de prompts visuales jerárquico que mejora la calidad fotorrealista en contenido de lifestyle para marketing.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación de imágenes de alta calidad para campañas de lifestyle y contenido digital en OCESA",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "Demuestra comprensión técnica sólida al combinar múltiples técnicas (Step-Back, layers, weights) y articula el aprendizaje conceptual sobre cómo los modelos de imagen procesan información de forma lineal, pero el caso sigue siendo un ejercicio exploratorio de generación de imagen sin anclaje a un flujo de trabajo productivo recurrente o problema de negocio específico documentado.",
          "level_up_suggestion": "Para subir a Alquimista en Práctica, aplica esta metodología de prompting a una necesidad real y recurrente de tu equipo (ej. generación consistente de assets para una campaña específica de OCESA) y documenta el antes/después en tiempo o calidad. Crear una biblioteca de prompts base reutilizables por el equipo de marketing sería el siguiente paso natural."
        },
        "sprint_3": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El problema de estandarizar la traducción estratégica a ejecución es genuinamente relevante y de alto impacto en producción de contenidos a escala.",
            "La descripción del flujo muestra comprensión real de cómo un sistema Supervisor-Worker distribuye trabajo manteniendo coherencia."
          ],
          "recommendations": [
            "Incluir el System Prompt del Supervisor con los criterios de coherencia que cada Worker debe cumplir para que sea un activo reutilizable real.",
            "Agregar una sección de validación donde el Supervisor evalúa cada pieza generada antes de aprobarla para entrega."
          ],
          "alchemist_signals": [
            "Señal positiva: la estudiante está creando infraestructura de producción de contenido, no solo optimizando prompts individuales; ese es el salto conceptual del sprint."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 3,
              "justification": "El sistema tiene una lógica clara de Supervisor-Worker donde el supervisor mantiene coherencia estratégica mientras los workers generan piezas específicas (parrilla 360, guiones, journeys). El flujo de estrategia → ejecución con estándar de coherencia está bien articulado."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El problema de pérdida de coherencia entre piezas durante la ejecución bajo presión de tiempo es genuinamente real en producción de contenidos. La necesidad de estandarizar la traducción estratégica → ejecución requiere un sistema, no un prompt."
            },
            "Justificación Técnica": {
              "score": 3,
              "justification": "Menciona que el sistema resuelve la falta de estandarización y mantiene coherencia entre piezas, lo cual es una justificación sólida aunque no técnicamente detallada en términos de diferencias arquitectónicas con un prompt aislado."
            },
            "Calidad de la Evidencia": {
              "score": 2,
              "justification": "La respuesta describe el sistema pero no incluye System Prompt completo ni link verificable. La evidencia es descriptiva, no artefactual."
            }
          },
          "work_synthesis": "Diseñó un sistema Supervisor-Worker en formato GPT que toma una propuesta creativa aprobada y la traduce automáticamente en entregables de campaña 360 (parrilla, guiones y journeys de email), con un mecanismo de scoring que valida coherencia entre piezas antes de entregarlas al cliente. El sistema estandariza la brecha entre estrategia y ejecución, reduciendo retrabajo y pérdida de posicionamiento de marca bajo presión de tiempo.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Producción de entregables de campaña 360 para marcas de entretenimiento/OCESA: parrilla de contenido, guiones base y journeys de email con validación de coherencia estratégica.",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "Construyó y publicó un GPT funcional (evidencia con link verificable) que implementa arquitectura Supervisor-Worker con lógica de validación por score, lo que lo convierte en una herramienta reutilizable por otros miembros del equipo en cada ciclo de campaña, no solo un prompt de uso personal.",
          "level_up_suggestion": "Para consolidar el nivel, documenta el SOP de inputs requeridos (qué datos estratégicos alimentar al sistema) y agrega un paso de output estructurado que exporte los entregables en formato listo para presentación a cliente, reduciendo aún más la fricción operativa."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Para consolidar el nivel, documenta el SOP de inputs requeridos (qué datos estratégicos alimentar al sistema) y agrega un paso de output estructurado que exporte los entregables en formato listo para presentación a cliente, reduciendo aún más la fricción operativa."
    },
    {
      "id": "100618581398728411983",
      "name": "Milton Barboza",
      "is_named": true,
      "avg_score": 3.2,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": -1.0,
      "scores": [
        3.3,
        4.0,
        2.3
      ],
      "levels": [
        "Competente",
        "Destacado",
        "En Desarrollo"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.3,
          "level": "Competente",
          "strengths": [
            "El reencuadre estratégico ('no vender, sino justificar la inversión') es una decisión de diseño sofisticada que demuestra comprensión del problema real, no solo del formato del prompt.",
            "Los detalles de segmentación (psicografías, fan hardcore vs. aspiracional) muestran conocimiento del mercado de conciertos de alto nivel en México."
          ],
          "recommendations": [
            "Definir el formato de salida explícitamente: ¿los 5 mensajes en qué formato? ¿Hay una tabla con mensaje/canal/tono? La especificidad del output mejora la usabilidad del prompt.",
            "Agregar restricciones: ¿qué palabras o enfoques NO debe usar? Por ejemplo, 'no mencionar el precio directamente en los primeros mensajes' o 'evitar comparaciones con otros artistas'."
          ],
          "alchemist_signals": [
            "El reencuadre de 'venta a inversión' es pensamiento estratégico real aplicado al prompt, no solo estructura. Muestra que entiende el problema de negocio, no solo la mecánica del prompt."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol claro (Senior Creative Strategist en industria musical), Contexto específico (resistencia por precio, estrategia de justificar inversión), y Tarea definida (5 mensajes clave + canales). El Formato de salida es implícito pero presente."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El caso es genuinamente de OCESA: vender boletos de artista de alto nivel con resistencia por precio. La estrategia de 'justificar inversión' en lugar de 'vender' demuestra conocimiento real del mercado de entretenimiento en México."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "El prompt muestra decisiones de diseño conscientes (cambiar el encuadre de 'venta' a 'justificación de inversión'), aunque no muestra evidencia explícita de iteración ni mecanismos de control de calidad."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado con rol, contexto e inputs variables para generar estrategias de marketing de conciertos, específicamente orientado a superar la resistencia por precio mediante el posicionamiento de exclusividad y experiencia. Sirve como plantilla reutilizable para campañas de diferentes artistas en plataformas sociales como TikTok e Instagram.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Estrategia de contenido y copywriting para venta de boletos de conciertos de alto nivel en redes sociales",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt está bien estructurado y usa variables intercambiables, lo que muestra comprensión técnica de la ingeniería de prompting; sin embargo, no hay evidencia de que este prompt esté siendo aplicado a un caso real y recurrente de su trabajo diario en OCESA, quedándose en ejercicio teórico.",
          "level_up_suggestion": "Toma este prompt y aplícalo a un artista REAL con el que estés trabajando actualmente en OCESA, documenta los outputs que generó y cómo los usaste en una campaña concreta; ese paso lo convierte de ejercicio a caso de uso de trabajo real y lo lleva al siguiente nivel."
        },
        "sprint_2": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El 'CHECK DE CALIDAD' integrado al final del prompt (auto-evaluación del modelo antes de entregar) es una innovación de diseño que convierte el prompt en un sistema de control autónomo.",
            "La lista de 'PALABRAS PROHIBIDAS' con justificación contextual ('estas palabras mueren en un festival de trap') es Anti-Slop aplicado con criterio editorial real, no solo técnico."
          ],
          "recommendations": [
            "Agregar un Few-Shot con ejemplo de copy de excelente calidad para el género musical específico, para anclar el estándar de 'Vibe & Punch' con un referente concreto.",
            "Explorar si el template funciona igual para diferentes géneros (rock, electrónica) o si necesita adaptación: documentar las variables que cambian entre géneros."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: El CHECK DE CALIDAD auto-integrado al final del prompt es una solución arquitectónica original: convirtió el prompt en un sistema que se auto-audita antes de entregar."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Aplica Anti-Slop de forma muy sofisticada con lista explícita de palabras prohibidas, ejemplos de frases genéricas vs. específicas, y criterios de densidad por sección. Además integra Chain-of-Thought implícitamente en el flujo de análisis del género musical."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "El prompt tiene sección 'PALABRAS PROHIBIDAS' explícita, 'CHECK DE CALIDAD' integrado, y criterios de densidad específicos ('No más de 3 oraciones para contexto'). Es el Anti-Slop más sistemático y completo del grupo."
            },
            "Iteración y Refinamiento": {
              "score": 4,
              "justification": "Documenta el proceso: parte de un festival de música urbana, identifica el problema del slop genérico, aplica Anti-Slop progresivamente. El template final tiene evidencia clara de múltiples iteraciones de refinamiento."
            }
          },
          "work_synthesis": "El estudiante construyó una plantilla reutilizable de generación de copys estratégicos para festivales de música urbana, integrando técnicas Anti-Slop, Chain-of-Thought y un checklist de calidad editorial. El sistema está diseñado para producir contenido auténtico y culturalmente relevante, eliminando genéricos y exigiendo especificidad verificable en boletines y materiales de comunicación de eventos OCESA.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación y auditoría de copys para festivales de música urbana, adaptados a géneros, artistas y cultura local mexicana.",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "El estudiante no solo resolvió un problema propio, sino que construyó una plantilla estructurada con roles, restricciones, cadena de pensamiento y un checklist de calidad que cualquier colega del equipo de marketing podría reutilizar para distintos festivales. La arquitectura multi-capa (generador + auditor) evidencia pensamiento sistémico más allá del uso personal.",
          "level_up_suggestion": "Para consolidar el nivel Alquimista Destacado, convierte esta plantilla en un GPT personalizado con campos de entrada dinámicos (género, tono, canciones) para que el equipo lo use sin necesidad de editar el prompt manualmente. Complementa con 3-5 ejemplos Few-Shot de copys aprobados para anclar el estándar de calidad deseado."
        },
        "sprint_3": {
          "score": 2.3,
          "level": "En Desarrollo",
          "strengths": [
            "El caso de uso de traducir boletines a guiones de reels/TikToks para múltiples artistas es una solución de alto valor para el área de contenido de OCESA.",
            "La mención de tendencias actuales de plataformas y viralización demuestra comprensión del contexto del contenido digital."
          ],
          "recommendations": [
            "Compartir el System Prompt o link al GPT: sin evidencia, no es posible evaluar la calidad del sistema diseñado.",
            "Explicar la arquitectura: ¿el sistema tiene un paso de análisis del boletín antes de generar el guion? ¿Hay un supervisor que valida el formato antes de entregar? Describir el flujo completo."
          ],
          "alchemist_signals": [
            "La aplicación a múltiples artistas como caso de reutilización es la señal correcta de pensamiento sistémico; faltó documentar la arquitectura que lo hace posible."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 2,
              "justification": "La respuesta describe brevemente que tiene un sistema para traducir boletines en guiones de reels/TikToks, pero no muestra la arquitectura: no hay roles definidos, flujo lógico, ni sistema Supervisor-Worker visible."
            },
            "Relevancia del Problema": {
              "score": 3,
              "justification": "El problema (convertir contenido editorial de boletines en formatos para redes sociales) es real y recurrente para su área en OCESA. La reutilización para múltiples artistas es una necesidad genuina."
            },
            "Justificación Técnica": {
              "score": 2,
              "justification": "La justificación es muy breve y no técnica: 'lo tengo ya programado para poderlo usar con todos los artistas'. No articula por qué un sistema es superior a un prompt aislado en términos arquitectónicos."
            },
            "Calidad de la Evidencia": {
              "score": 2,
              "justification": "No se comparte el System Prompt ni el link al GPT. La respuesta describe el caso de uso pero no proporciona la evidencia requerida por la instrucción del sprint."
            }
          },
          "work_synthesis": "El estudiante diseñó un sistema de conversión de boletines de prensa en guiones para Reels y TikToks, estructurado como flujo reutilizable por artista. El activo está programado para aplicarse de manera recurrente a distintos artistas del roster, convirtiendo contenido existente en formatos virales para redes sociales.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación automatizada de guiones para redes sociales (Reels/TikToks) a partir de boletines de prensa de artistas OCESA",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Hay evidencia de un caso de uso real y recurrente aplicado a su trabajo diario (boletines → guiones por artista), y menciona que el sistema está 'programado' para reutilizarse con múltiples artistas, lo que indica estructura de flujo y no solo prompts aislados. Sin embargo, la descripción es vaga y no se provee link al GPT o System Prompt, lo que impide confirmar si hay arquitectura real o simplemente un prompt guardado.",
          "level_up_suggestion": "Comparte el System Prompt o GPT configurado con ejemplos de inputs/outputs reales para validar la arquitectura; además, documenta el flujo supervisor-worker (ej. un agente que recibe el boletín y otro que adapta el tono por plataforma) para escalar de practicante a experto y que otros del equipo puedan usar el sistema sin depender de ti."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Comparte el System Prompt o GPT configurado con ejemplos de inputs/outputs reales para validar la arquitectura; además, documenta el flujo supervisor-worker (ej. un agente que recibe el boletín y otro que adapta el tono por plataforma) para escalar de practicante a experto y que otros del equipo puedan usar el sistema sin depender de ti."
    },
    {
      "id": "113067069449122491348",
      "name": "Javier Magallanes Galan",
      "is_named": true,
      "avg_score": 2.8,
      "sprints_count": 3,
      "total_sprints_with_work": 3,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 1.3,
      "scores": [
        1.7,
        3.7,
        3.0
      ],
      "levels": [
        "En Desarrollo",
        "Destacado",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 1.7,
          "level": "En Desarrollo",
          "strengths": [
            "El prompt tiene claridad en el objetivo deseado (página visual con etapas diferenciadas por color).",
            "Hay al menos un criterio de formato implícito (limpia y profesional para presentación a cliente)."
          ],
          "recommendations": [
            "Incorporar explícitamente las secciones Rol, Contexto, Tarea y Formato para estructurar el prompt según lo aprendido en el sprint.",
            "Añadir detalles de su contexto real de trabajo: empresa, industria, herramienta destino (PPT, web, Canva) y público específico."
          ],
          "alchemist_signals": [
            "Vacío detectado: el estudiante tiene claridad en lo que quiere lograr pero aún no ha incorporado los frameworks del sprint; con estructura adecuada, este prompt tiene potencial real."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 2,
              "justification": "El prompt es muy breve y carece de las secciones explícitas de Rol, Contexto, Tarea y Formato definidas en el sprint. Solo expresa una tarea de forma directa con algo de contexto implícito sobre presentación a cliente."
            },
            "Aplicación a Caso Real": {
              "score": 2,
              "justification": "Si bien menciona una presentación a cliente y un funnel de marketing, el prompt es genérico y no refleja ningún contexto específico de su trabajo real en OCESA ni de su industria particular."
            },
            "Pensamiento de Ingeniero": {
              "score": 1,
              "justification": "No hay evidencia de comprensión de cómo funciona el modelo, ni iteración, ni decisiones de diseño conscientes. El prompt es conversacional y directo, sin estructura de ingeniería."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt para generar una página visual que explica un funnel de marketing digital con tres etapas diferenciadas por color. El resultado es un recurso de presentación para clientes, orientado a comunicar conceptos de marketing de forma visual y profesional.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Visualización de funnel de marketing digital para presentaciones a clientes",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt tiene estructura básica y un objetivo claro, pero es una solicitud genérica de contenido visual sin anclaje a un problema real y recurrente de su trabajo en OCESA. No hay evidencia de aplicación a un caso específico del negocio ni de iteración o refinamiento del prompt.",
          "level_up_suggestion": "Conecta este prompt a un caso real de tu área: por ejemplo, crea el funnel de una campaña específica de OCESA (un concierto o evento próximo) con datos y mensajes reales. Agrega contexto de audiencia, objetivos de negocio y restricciones de marca para que el output sea directamente usable en tu trabajo diario."
        },
        "sprint_2": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "Creó un System Prompt de auditor técnico con métricas propias de calidad ('Densidad de Lógica') y un protocolo de dos niveles de solución.",
            "La restricción de citación de fuentes técnicas de autoridad es una medida Anti-Slop avanzada que demuestra comprensión profunda del tema."
          ],
          "recommendations": [
            "Documentar el proceso de iteración: qué versión del prompt produjo outputs genéricos y qué cambio específico eliminó el slop.",
            "Incluir ejemplos concretos (few-shot) de código con 'alta' y 'baja' densidad de lógica para calibrar mejor al auditor."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: este estudiante está creando herramientas de control de calidad de IA para su propio flujo de trabajo técnico, lo cual es un nivel de meta-uso excepcional."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "El estudiante aplica correctamente el Framework ARV (Ask, Refine, Verify) integrado en el System Prompt, y construye un protocolo de auditoría con criterios de detección, triangulación de soluciones y restricción de citación de fuentes técnicas. El dominio es genuino y sofisticado."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "El prompt introduce el concepto de 'Densidad de Lógica' como métrica explícita, diferencia entre Quick-fix y Architectural solution, y obliga a citar fuentes de autoridad (Martin Fowler, Gergely Orosz). El Anti-Slop está operacionalizado como criterio del sistema, no solo mencionado."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "Aunque el prompt final es de alta calidad, el estudiante no documenta explícitamente el proceso de iteración ni comparte versiones previas o lo que cambió. La evidencia de refinamiento es implícita en la sofisticación del resultado."
            }
          },
          "work_synthesis": "El estudiante diseñó un GPT especializado que actúa como Auditor Senior de Arquitectura Backend, capaz de detectar deuda técnica generada por IA ('AI-generated technical debt') y evaluar la calidad del código más allá de su funcionalidad. El sistema aplica un framework propio (ARV) con criterios Anti-Slop, ofrece soluciones comparativas (Quick-fix vs. Architectural) y cita fuentes técnicas de referencia, siendo reutilizable por cualquier desarrollador del equipo.",
          "application_area": "Tecnología y Desarrollo",
          "application_detail": "Auditoría automatizada de calidad de código backend para prevenir deuda técnica generada por herramientas de IA como Copilot.",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "El estudiante no solo usa IA para resolver una tarea propia, sino que construyó una herramienta (GPT configurado con rol, protocolo y restricciones) que otros desarrolladores pueden reutilizar; la integración de framework ARV, criterio Anti-Slop, triangulación de soluciones y exigencia de fuentes demuestra diseño sistemático de múltiples capas.",
          "level_up_suggestion": "Para consolidar el nivel, conecta este GPT a un flujo automatizado (ej. GitHub Action o webhook) que dispare la auditoría automáticamente en cada Pull Request, convirtiendo la herramienta en un sistema integrado al ciclo de desarrollo real de OCESA."
        },
        "sprint_3": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "Incluye link funcional al GPT, lo que demuestra que el sistema fue efectivamente implementado y no solo descrito.",
            "La coherencia entre sus entregas de sprint 2 y sprint 3 muestra un hilo conductor de desarrollo de producto real."
          ],
          "recommendations": [
            "Explorar cómo el sistema puede escalar más allá de revisión individual para cubrir PRs en equipo o pipelines de CI/CD.",
            "Añadir casos de ejemplo concretos en el System Prompt (few-shot de código con alta vs baja densidad lógica) para mejorar la calibración del auditor."
          ],
          "alchemist_signals": [
            "Señal positiva: este estudiante está construyendo un ecosistema coherente de herramientas, no solo ejercicios aislados; eso es pensamiento de producto."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 3,
              "justification": "El GPT tiene roles definidos (Supervisor con Framework ARV), criterios claros (Quick Fix vs Architectural Solution) y un flujo lógico de auditoría. Aunque es una extensión directa del prompt del sprint anterior, la arquitectura del sistema está bien articulada."
            },
            "Relevancia del Problema": {
              "score": 3,
              "justification": "El problema de detectar AI-generated technical debt es genuinamente relevante en su trabajo con proyectos de software y LLMs. Requiere un sistema persistente, no solo un prompt aislado."
            },
            "Justificación Técnica": {
              "score": 3,
              "justification": "Justifica correctamente por qué el sistema es superior: criterios consistentes de revisión, detección sistemática y dos niveles de solución. La justificación es sólida aunque no particularmente creativa."
            },
            "Calidad de la Evidencia": {
              "score": 3,
              "justification": "Incluye un link a ChatGPT Share, lo que constituye evidencia verificable del GPT construido. El link funcional eleva la calidad de la evidencia sobre los demás estudiantes sin link."
            }
          },
          "work_synthesis": "El estudiante construyó un GPT especializado como Auditor Senior de Arquitectura Backend que detecta deuda técnica generada por IA en código, aplicando un framework propio (ARV) para diferenciar entre soluciones superficiales y soluciones de arquitectura real. Está diseñado para integrarse en el flujo de revisión de código (PRs) y ser usado por equipos de desarrollo antes de que código deficiente llegue a producción.",
          "application_area": "Tecnología y Desarrollo",
          "application_detail": "Revisión automatizada de código generado por IA para detectar antipatrones, lógica hardcodeada y malas decisiones de arquitectura backend.",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "El estudiante no solo resuelve un problema propio, sino que construye una herramienta reutilizable por todo el equipo con un framework de auditoría estructurado (ARV) que genera dos niveles de solución diferenciados; esto evidencia pensamiento sistémico y capacidad de crear activos que otros pueden adoptar.",
          "level_up_suggestion": "Para consolidar el nivel experto, integra este GPT en un flujo automatizado real (por ejemplo, un webhook en GitHub/GitLab que dispare la auditoría en cada PR) y documenta métricas de impacto como tiempo ahorrado en revisiones o porcentaje de deuda técnica detectada antes de producción."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Tecnología y Desarrollo",
      "level_up_suggestion": "Para consolidar el nivel experto, integra este GPT en un flujo automatizado real (por ejemplo, un webhook en GitHub/GitLab que dispare la auditoría en cada PR) y documenta métricas de impacto como tiempo ahorrado en revisiones o porcentaje de deuda técnica detectada antes de producción."
    },
    {
      "id": "116079253329523330287",
      "name": "Carlos Contreras",
      "is_named": true,
      "avg_score": 2.43,
      "sprints_count": 3,
      "total_sprints_with_work": 4,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0.7,
      "scores": [
        2.3,
        2.0,
        3.0
      ],
      "levels": [
        "En Desarrollo",
        "En Desarrollo",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.3,
          "level": "En Desarrollo",
          "strengths": [
            "El caso de uso es genuinamente de su trabajo: conocimiento específico de producción BTL (descarga, pesajes, Photo Opp) demuestra que no copió un ejemplo genérico.",
            "La estructura de prioridades numeradas guía al modelo de forma efectiva para un cronograma operativo."
          ],
          "recommendations": [
            "Agregar contexto operativo: número de personas en equipo, tipo de activación/evento, restricciones de espacio. El modelo genera mejores cronogramas con más contexto.",
            "Definir mejor el formato de salida: ¿cuántas columnas en la tabla? ¿Qué significa 'Estado Crítico' exactamente? Un ejemplo o descripción más específica mejora la consistencia del output."
          ],
          "alchemist_signals": [
            "El conocimiento operativo de producción BTL es una fortaleza real; el siguiente paso es aprender a codificar ese conocimiento en un prompt con la profundidad que merece."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 2,
              "justification": "El prompt tiene rol (Director de Producción BTL) y tarea (cronograma), pero le falta contexto operativo y el formato es básico (solo menciona 'tabla'). La estructura es funcional pero no optimizada."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El caso es completamente real y específico: montaje BTL con tiempos reales, prioridades operativas de producción (descarga, estructura, eléctricos, acabados), y objetivo concreto (entrega al 100% a las 14:00). Hay conocimiento genuino de la industria."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "El prompt es directo y funcional pero no muestra evidencia de diseño consciente o iteración. Es un prompt de primera versión bien orientado al problema, pero sin mecanismos de control ni consideración de casos borde."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado para generar cronogramas de montaje BTL con parámetros específicos de tiempo, prioridades operativas y formato tabular. Sirve como herramienta de planificación rápida para producción de eventos, reduciendo el tiempo de elaboración manual de timelines de montaje.",
          "application_area": "Producción de Eventos",
          "application_detail": "Generación de cronogramas de montaje BTL con bloques de tiempo, responsables y estados críticos para eventos OCESA.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema real y recurrente de su trabajo diario (planificación de montajes), incorpora variables operativas concretas como tiempos específicos, prioridades de área y formato de entrega estructurado, lo que evidencia aplicación directa al contexto laboral.",
          "level_up_suggestion": "Agrega variables dinámicas al prompt (número de proveedores, metros cuadrados del espacio, tipo de evento) para que el mismo template sirva para cualquier montaje. Como siguiente paso, considera construir un GPT reutilizable que tus colegas de producción puedan usar sin necesidad de reescribir el prompt cada vez."
        },
        "sprint_2": {
          "score": 2.0,
          "level": "En Desarrollo",
          "strengths": [
            "El ejemplo before/after es ilustrativo: demuestra cómo dar más contexto al modelo (urgencia de entrega, restricción de salir del inmueble) transforma radicalmente el output.",
            "El caso es completamente real (My Chemical Romance, HSBC, catering), lo que demuestra que aplica la IA a situaciones concretas de su trabajo."
          ],
          "recommendations": [
            "Practicar nombrar las técnicas que está usando intuitivamente: lo que hizo (agregar contexto de urgencia) tiene nombre técnico en el programa. Vincular la práctica con el marco teórico.",
            "Explorar una técnica formal del sprint con este mismo caso: por ejemplo, aplicar CoT para que el modelo piense primero en el tono apropiado antes de redactar el correo."
          ],
          "alchemist_signals": [
            "La comprensión intuitiva de que más contexto = mejor output es un buen punto de partida; el siguiente paso es formalizar esa intuición en técnicas replicables."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 2,
              "justification": "La respuesta muestra comprensión intuitiva de mejorar un prompt con más contexto, pero no nombra ni aplica formalmente ninguna técnica del sprint (CoT, Few-Shot, Step-Back, ARV, Anti-Slop). El refinamiento es contextual, no técnico."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 2,
              "justification": "El correo final es más profesional que el original, pero la mejora viene de agregar contexto operativo, no de aplicar criterios explícitos de calidad Anti-Slop. No hay evidencia de auditoría de densidad informativa."
            },
            "Iteración y Refinamiento": {
              "score": 2,
              "justification": "Muestra claramente el antes y después (texto informal → correo profesional con coordinación de catering) y la acción de refinamiento (agregar contexto de urgencia). Es una iteración real aunque no use terminología técnica del sprint."
            }
          },
          "work_synthesis": "El estudiante usó IA para mejorar la redacción de una solicitud de catering para un evento real de OCESA (activación HSBC en My Chemical Romance), enriqueciendo el contexto original con información adicional para obtener una comunicación más profesional y justificada. El resultado es un correo operativo más completo que explica el porqué de la solicitud y facilita la aprobación.",
          "application_area": "Producción de Eventos",
          "application_detail": "Redacción de solicitud de catering para equipo de producción en evento de alto perfil con cliente corporativo.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "Aunque el caso de uso es real y laboral, la técnica aplicada es básica: agregar contexto conversacional para mejorar un texto. No se evidencia uso de técnicas avanzadas del sprint (Few-Shot, Chain-of-Thought, etc.) ni un proceso estructurado o replicable.",
          "level_up_suggestion": "Para subir de nivel, construye un prompt plantilla con Few-Shot que incluya 2-3 ejemplos de solicitudes de catering bien redactadas, de modo que cualquier coordinador del equipo pueda generar comunicaciones profesionales similares de forma autónoma y consistente."
        },
        "sprint_3": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El System Prompt de la activación contiene conocimiento técnico real de producción de eventos (Truss de 12\"/20\", copete perimetral, 100 pax/hora) que va más allá de lo genérico.",
            "La reflexión de que el sistema ayuda a 'encontrar puntos no considerados' refleja uso real y valor concreto en su práctica profesional."
          ],
          "recommendations": [
            "Explicar la arquitectura completa: ¿hay un supervisor que valida la activación antes de presentarla al cliente? ¿Cómo fluye la información entre etapas?",
            "Desarrollar la justificación técnica: el sistema tiene memoria de los requerimientos de producción de OCESA (capacidades del Foro Sol, restricciones del venue) que un prompt aislado perdería entre conversaciones."
          ],
          "alchemist_signals": [
            "El nivel de detalle técnico en el System Prompt (especificaciones de Truss, flujo de pax) demuestra que está codificando conocimiento experto de producción en el sistema."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 3,
              "justification": "El sistema mostrado tiene estructura de producción real con pasos técnicos específicos (CoT de viabilidad de flujo, requerimientos de estructura Truss, secciones de diseño), aunque la presentación muestra solo la parte del prompt sin describir la arquitectura del sistema completo."
            },
            "Relevancia del Problema": {
              "score": 4,
              "justification": "El problema (diseñar activaciones para marcas en festivales) es central a su trabajo, y el ejemplo de HSBC en festivales de música es un caso real específico. La utilidad del sistema para encontrar puntos no considerados es genuinamente valiosa."
            },
            "Justificación Técnica": {
              "score": 2,
              "justification": "La justificación de por qué es mejor que un prompt aislado ('mejoró el orden y me hizo ver partes en las que el ser más específico ayuda') es básica y descriptiva. No articula la ventaja arquitectónica del sistema."
            },
            "Calidad de la Evidencia": {
              "score": 3,
              "justification": "Comparte el System Prompt completo de la activación (con pasos CoT, requerimientos técnicos de Truss, capas de diseño), lo que evidencia implementación real con detalle técnico de producción."
            }
          },
          "work_synthesis": "El estudiante diseñó un sistema de prompting estructurado para la conceptualización de activaciones de marca en festivales de música, aplicado a un cliente real (HSBC). Evolucionó de un prompt genérico a uno con pasos secuenciales (CoT) que incluye requerimientos técnicos, capacidad de flujo de personas, estilo visual y referencias específicas, logrando resultados más precisos y accionables para su trabajo diario.",
          "application_area": "Producción de Eventos",
          "application_detail": "Diseño y conceptualización de activaciones de marca para clientes en festivales de música",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Aplica IA a un problema real y recurrente de su trabajo (diseño de activaciones para clientes como HSBC) y demuestra comprensión de cómo estructurar prompts con pasos, restricciones técnicas y referencias. Sin embargo, no presenta un GPT construido ni un sistema reutilizable formalizado para su equipo, solo la intención de compartirlo.",
          "level_up_suggestion": "Convierte este prompt estructurado en un GPT o plantilla documentada con campos variables (nombre del cliente, tipo de evento, presupuesto, aforo) para que cualquier miembro de su equipo pueda generar propuestas de activación sin depender de él como intermediario."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Producción de Eventos",
      "level_up_suggestion": "Convierte este prompt estructurado en un GPT o plantilla documentada con campos variables (nombre del cliente, tipo de evento, presupuesto, aforo) para que cualquier miembro de su equipo pueda generar propuestas de activación sin depender de él como intermediario."
    },
    {
      "id": "103035128104374350950",
      "name": "Omar Cuauhtemoc Morfín López",
      "is_named": true,
      "avg_score": 4.0,
      "sprints_count": 2,
      "total_sprints_with_work": 3,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 0.0,
      "scores": [
        4.0,
        4.0
      ],
      "levels": [
        "Destacado",
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El workflow multi-paso con instrucciones de Arte y Verificación de Tono demuestra un nivel de ingeniería de prompting excepcional para el Sprint 1.",
            "La restricción de tono ('no burlarse, sí validar') con una pregunta de verificación interna es una técnica avanzada de control de calidad aplicada intuitivamente."
          ],
          "recommendations": [
            "Documentar el output que generó este prompt y compartirlo como caso de estudio para el grupo.",
            "Explorar el uso de few-shot con ejemplos de posts reales de Purina que hayan funcionado bien, para calibrar el tono con mayor precisión."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado desde el Sprint 1: Omar opera con pensamiento de workflow y control de calidad integrado desde el primer sprint, lo que sugiere adopción acelerada y potencial de liderazgo en el programa."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene Rol explícito (Director Creativo Senior en real-time marketing), Contexto rico (fenómeno therian, postura de Purina), Objetivo con restricciones claras (humor elegante, no burla), e instrucciones de Workflow numeradas con múltiples pasos. Es un prompt maestro de alta densidad estructural."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El caso es específico de su industria (marketing de mascota de marca real: Purina), trabaja un fenómeno cultural real (therian) con una estrategia de contenido de marca real-time. Solo alguien en ese contexto profesional podría construir este prompt."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Diseña un workflow multi-paso (Concepto → Copywriting → Directrices de Arte → Verificación de Tono), incluye una restricción de verificación interna del modelo ('¿Se ríe con ellos o de ellos?') y demuestra comprensión de que el modelo necesita un checklist de salida para no producir contenido que dañe la marca."
            }
          },
          "work_synthesis": "Omar construyó un prompt estructurado de múltiples capas para generar una pieza de real-time marketing reactiva para Purina, aprovechando el fenómeno cultural therian. El prompt integra rol, contexto, objetivo y flujo de trabajo en pasos discretos (concepto, copy, dirección de arte), funcionando como un brief creativo automatizado que podría producir un entregable casi listo para presentación.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación de contenido reactivo de marca para campañas de real-time marketing en redes sociales, aplicable a la lógica de contenido cultural de OCESA y sus patrocinadores.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt es técnicamente sólido y demuestra dominio de estructura (rol + contexto + workflow + reglas), pero el ejercicio es un caso hipotético para un cliente externo (Purina), no una solución aplicada a un problema real y recurrente de su trabajo diario en OCESA. No hay evidencia de que este flujo esté siendo usado operacionalmente.",
          "level_up_suggestion": "Replantea este mismo framework de 'brief creativo automatizado' hacia un caso concreto de tu trabajo en OCESA: por ejemplo, generar contenido reactivo para un artista o festival específico ante un trending topic. Si lo conviertes en un GPT o plantilla reutilizable para tu equipo, das el salto a Alquimista en Práctica."
        },
        "sprint_2": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El diagnóstico de 'alucinaciones de sesgo positivo' en temas sensibles es una contribución conceptual avanzada que va más allá de lo visto en clase.",
            "El proceso de razonamiento (por qué este tema produce slop → qué técnica lo contrarresta → cómo se implementó) es un modelo de pensamiento de ingeniero de prompting."
          ],
          "recommendations": [
            "Compartir el prompt completo de la Misión 2C para que sirva como referencia técnica para el grupo.",
            "Explorar cómo este protocolo Anti-Slop para investigación sensible podría sistematizarse en un GPT o SOP reutilizable."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado: Omar tiene capacidad de diagnóstico técnico antes de diseñar soluciones, lo que lo distingue como pensador sistémico de alto nivel en el grupo."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Aplica Misión 2C con una sofisticación excepcional: entiende por qué la IA produce 'Slop de Sesgo Positivo' en temas sensibles, y diseña contra-medidas específicas (Verificación Extrema, triangulación de conflicto entre fuentes). El diagnóstico técnico del problema antes de aplicar la técnica es análisis de primer nivel."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "Identifica un tipo específico de Slop (alucinaciones de sesgo positivo en temas sociales sensibles) y diseña un protocolo para contrarrestarlo. La distinción entre 'qué encontraron las fuentes' y 'qué quiere escuchar el usuario' es una aplicación de Anti-Slop de máxima madurez."
            },
            "Iteración y Refinamiento": {
              "score": 4,
              "justification": "El análisis del problema (por qué la IA tiende al Slop en este tema), la técnica seleccionada y el resultado están articulados como un proceso de ingeniería completo con razonamiento visible de cada decisión."
            }
          },
          "work_synthesis": "Omar construyó un framework de investigación con verificación forzada que combina restricción de fuentes de autoridad (INEGI, CONEVAL, OIT), auditoría de confianza declarada y protocolo anti-slop para extraer datos duros sobre realidad social en México. El resultado es un prompt reutilizable que transforma consultas genéricas en hallazgos verificados con nivel de certeza explícito, útil para fundamentar decisiones estratégicas o proyectos de impacto social.",
          "application_area": "Análisis de Datos",
          "application_detail": "Investigación de contexto social y político en México para proyectos de responsabilidad social, alianzas institucionales o inteligencia de audiencias jóvenes en OCESA.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Omar no solo experimentó con técnicas avanzadas, sino que las combinó en un protocolo estructurado con caso de uso real (investigación de vulnerabilidad juvenil) y obtuvo un output concreto y verificable con datos específicos. Sin embargo, el prompt está diseñado para su propio uso personal, sin evidencia de que otros miembros del equipo lo estén usando o de que esté integrado a un flujo automatizado.",
          "level_up_suggestion": "Convierte este prompt maestro en un GPT personalizado o template compartido en Notion/Drive para que el equipo de comunicación o RSE de OCESA lo use sin necesidad de conocer la ingeniería detrás. Añade una instrucción de output que genere el reporte en formato ejecutivo listo para presentar a directivos."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Convierte este prompt maestro en un GPT personalizado o template compartido en Notion/Drive para que el equipo de comunicación o RSE de OCESA lo use sin necesidad de conocer la ingeniería detrás. Añade una instrucción de output que genere el reporte en formato ejecutivo listo para presentar a directivos."
    },
    {
      "id": "105068241516045024966",
      "name": "Paulina Albarran",
      "is_named": true,
      "avg_score": 3.5,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 1.0,
      "scores": [
        3.0,
        4.0
      ],
      "levels": [
        "Competente",
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El prompt captura bien la esencia de las experiencias de marca inmersivas, diferenciándose de activaciones funcionales con lenguaje específico del dominio.",
            "La mención de 'recorrido físico y sensorial' como entregable es un formato de output implícito bien calibrado para su caso de uso."
          ],
          "recommendations": [
            "Especificar el cliente o tipo de marca para anclar el prompt a un caso real y evitar conceptos excesivamente genéricos.",
            "Agregar restricciones de formato: ¿concepto en una página?, ¿blueprint de experiencia?, ¿mood board verbal?, para obtener un output más accionable."
          ],
          "alchemist_signals": [
            "Señal positiva: el dominio de experiencias inmersivas es un caso de uso de alto potencial para IA generativa que pocas personas del grupo tienen; hay una oportunidad de diferenciación."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol (Directora Creativa en Experiencias Inmersivas), Contexto (la marca quiere conexión emocional, no solo activación funcional), Tarea (diseñar experiencia con elementos sensoriales específicos: espacio, luz, interacción, narrativa). La estructura es sólida aunque el Formato de output no está explícitamente definido."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El prompt aplica al trabajo real de diseño de experiencias de marca con énfasis en conexión emocional, que es claramente su dominio profesional. Sin embargo, al no nombrar una marca o cliente específico, pierde algo de especificidad de caso real."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "La decisión de especificar los elementos sensoriales (espacio, luz, interacción, narrativa) como variables del diseño muestra comprensión de que el modelo necesita parámetros concretos para no producir conceptos genéricos. Hay evidencia de diseño intencional."
            }
          },
          "work_synthesis": "Paulina construyó un prompt estructurado para generar propuestas de experiencias de marca inmersivas, cubriendo desde concepto rector hasta lenguaje sensorial y restricciones creativas. Sirve como plantilla reutilizable para desarrollar pitches creativos de activaciones experienciales con profundidad estratégica y narrativa.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación de propuestas creativas para experiencias de marca inmersivas y activaciones experienciales en el contexto de entretenimiento y eventos.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt está muy bien estructurado técnicamente y demuestra dominio de la anatomía del prompt (rol, tarea, contexto, formato, restricciones), pero no hay evidencia de que esté resolviendo un problema real y recurrente de su trabajo en OCESA; se presenta como un ejercicio de diseño de prompt sin ancla a un proyecto o necesidad laboral específica.",
          "level_up_suggestion": "Para subir al siguiente nivel, toma este prompt y aplícalo a una marca o cliente real actual de OCESA, documentando cómo el output generado aceleró o mejoró una propuesta real; eso transformaría el ejercicio en un caso de uso concreto de trabajo diario."
        },
        "sprint_2": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "Documentó el ciclo completo: prompt roto → diagnóstico → técnica → resultado, lo que es un modelo a seguir para el grupo.",
            "La aplicación de CoT a diseño de estructuras físicas de eventos es una transferencia creativa del framework a un dominio no convencional."
          ],
          "recommendations": [
            "Formalizar el proceso CoT para diseño de experiencias como una plantilla reutilizable en futuros proyectos de activación.",
            "Explorar cómo integrar verificación de factibilidad técnica (materiales disponibles, costo estimado) en el flujo de razonamiento."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacada: Paulina ha encontrado una aplicación de alto valor diferencial para su industria (diseño de experiencias físicas con IA) y la está ejecutando con rigor técnico."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Paulina aplica Chain-of-Thought de forma ejemplar: descompone el problema de diseño de una estructura Photo Opportunity en pasos secuenciales (briefing estético → referencias visuales → materiales → dimensiones → iluminación → render final), forzando al modelo a razonar antes de producir el output visual."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "Identifica específicamente el problema del output anterior (genérico, sin jerarquía en composición, materiales poco definidos) y diseña el nuevo prompt para corregirlo con parámetros técnicos de diseño. El Anti-Slop está operacionalizado como corrección de defectos específicos."
            },
            "Iteración y Refinamiento": {
              "score": 4,
              "justification": "Documenta claramente el prompt roto inicial, el diagnóstico del problema (slop visual), la técnica elegida (CoT), y cómo la cadena de razonamiento resolvió la falta de jerarquía y especificidad de materiales. Es un ejemplo completo del ciclo de refinamiento."
            }
          },
          "work_synthesis": "Paulina desarrolló una metodología de dirección de arte asistida por IA para la creación de Photo Opportunities navideños de gran formato (4x4m), aplicando Chain-of-Thought para descomponer la escena en capas estructurales y eliminar resultados genéricos. El sistema le permite generar visualizaciones hiperrealistas con especificaciones técnicas precisas (materiales, iluminación, composición) que comunican el nivel de producción que OCESA requiere para experiencias de marca.",
          "application_area": "Producción de Eventos",
          "application_detail": "Generación de renders y dirección de arte para activaciones y experiencias físicas en eventos de entretenimiento",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Resuelve un problema real y recurrente de su trabajo (visualización de producción de eventos) con una técnica aplicada conscientemente, pasando de resultados genéricos a dirección de arte técnica. Sin embargo, el output es un prompt personal no sistematizado para que otros lo reusen, lo que aún no lo lleva al nivel Experto.",
          "level_up_suggestion": "Empaqueta este prompt como una plantilla o GPT personalizado que cualquier diseñador o productor de OCESA pueda usar para distintos tipos de activaciones (no solo navideñas), parametrizando variables como dimensiones, paleta de color y estilo de evento para escalar el impacto más allá de tu uso individual."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Empaqueta este prompt como una plantilla o GPT personalizado que cualquier diseñador o productor de OCESA pueda usar para distintos tipos de activaciones (no solo navideñas), parametrizando variables como dimensiones, paleta de color y estilo de evento para escalar el impacto más allá de tu uso individual."
    },
    {
      "id": "110196614206290248442",
      "name": "Gerardo Pulido",
      "is_named": true,
      "avg_score": 3.5,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": -1.0,
      "scores": [
        4.0,
        3.0
      ],
      "levels": [
        "Destacado",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El diseño de proceso en 3 pasos (Extrae → Valida → Presenta) es un ejemplo excelente de Chain-of-Thought aplicado desde el Sprint 1.",
            "El caso de centralizar instrucciones caóticas de múltiples canales es un problema real de alta frecuencia que este prompt resuelve de forma inmediata y reutilizable."
          ],
          "recommendations": [
            "Agregar criterios de validación explícitos en el Paso 2: ¿qué constituye una instrucción 'lógica' vs una 'inconsistente'?",
            "Explorar cómo convertir este prompt en un Custom GPT que el equipo pueda usar directamente para procesar mensajes de cambio de campaña."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado desde Sprint 1: este estudiante ya diseña workflows de 3 pasos en su primer sprint, lo que sugiere pensamiento de producto maduro y potencial de liderazgo técnico en el grupo."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene todas las secciones bien definidas: Rol (experto en Ingeniería de Prompting y tráfico digital), Contexto específico (problema de comunicación por múltiples canales en su equipo), Tarea en 3 pasos explícitos (Extrae → Valida → Presenta), y un formato de proceso estructurado. Es un prompt maestro completo."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El problema de instrucciones caóticas por múltiples canales (WhatsApp, Slack, Teams, Correo) es genuinamente real y de alta frecuencia en organizaciones de marketing. El contexto de campañas de marketing con riesgo de errores y fricciones sociales ancla el prompt en su trabajo diario."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "El diseño del prompt como un procesador de 3 pasos secuenciales (Extrae datos estructurados → Valida lógica → Presenta confirmación) muestra comprensión de cómo el modelo necesita instrucciones de flujo para no saltar directamente a conclusiones. Es ingeniería de workflow aplicada."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado de 3 pasos para centralizar y procesar instrucciones caóticas de cambios en campañas de marketing que llegan por múltiples canales (WhatsApp, Slack, Teams, Email). El sistema extrae datos clave, valida la lógica de la instrucción y genera un mensaje claro para el equipo ejecutor, actuando como filtro de ruido operativo.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Procesamiento y normalización de instrucciones dispersas para cambios en campañas digitales, evitando errores de ejecución por comunicación fragmentada.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema real, recurrente y específico de su operación diaria: el caos de instrucciones multicanel en campañas. La estructura de 3 pasos con datos a extraer definidos y restricciones de validación demuestra pensamiento de proceso, no solo experimentación con IA.",
          "level_up_suggestion": "Convierte este prompt en un GPT reutilizable o automatización en Make/Zapier donde cualquier miembro del equipo pegue el mensaje caótico y reciba automáticamente el resumen estructurado, eliminando su intervención manual y escalando el impacto a todo el equipo."
        },
        "sprint_2": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El copy de Disney on Ice con detalles sensoriales ('1 metro de tu asiento', 'aire frío cuando pase Ansiedad') es un ejemplo efectivo de cómo los datos técnicos específicos eliminan el slop.",
            "El caso real de vender un show con meses de anticipación es un desafío de marketing legítimo que el estudiante resolvió con IA de forma creativa."
          ],
          "recommendations": [
            "Compartir el prompt completo que generó este copy para poder evaluar la técnica aplicada y su arquitectura.",
            "Explorar cómo este proceso de 'copy out anti-slop' podría sistematizarse para otros shows del portafolio de OCESA."
          ],
          "alchemist_signals": [
            "Señal de aplicación comercial directa: el copy generado es potencialmente utilizable en campañas reales, lo que demuestra que el estudiante está produciendo valor inmediato con IA."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "El estudiante aplica técnicas Anti-Slop para generar copy de Disney on Ice con elementos técnicos concretos (distancia física de 1 metro, sensación de frío, adrenalina de Zootopia) que diferencian el texto de descripciones genéricas de shows familiares."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "El copy resultante tiene densidad experiencial real: 'a solo 1 metro de tu asiento', 'sentir el aire frío cuando pase Ansiedad'. Hay criterio de calidad visible en la especificidad sensorial del output."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "El estudiante documenta el problema (slop genérico para Disney on Ice), la técnica (generar 'copy out' anti-slop), y el resultado con ejemplos concretos. El proceso está documentado aunque de forma narrativa."
            }
          },
          "work_synthesis": "El estudiante aplicó la técnica Anti-Slop para generar copy de ventas diferenciado para Disney on Ice, eliminando frases genéricas y sustituyéndolas por lenguaje sensorial y argumentos de urgencia específicos al contexto del evento. El resultado es un texto publicitario que aborda la barrera real de vender con meses de anticipación, usando proximidad física y escasez como palancas persuasivas.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Copy de ventas para Disney on Ice con técnica Anti-Slop, orientado a superar objeciones de compra anticipada",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El estudiante resolvió un problema real y recurrente de su trabajo (vender shows con meses de anticipación) aplicando una técnica específica con criterio estratégico; el output no es un ejercicio genérico sino copy directamente utilizable para una campaña de OCESA.",
          "level_up_suggestion": "Construye un prompt reutilizable con variables (nombre del show, fecha, tipo de asiento) que cualquier persona del equipo de marketing pueda usar para generar copy Anti-Slop para futuros eventos, documentando los criterios de qué palabras evitar y por qué."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Construye un prompt reutilizable con variables (nombre del show, fecha, tipo de asiento) que cualquier persona del equipo de marketing pueda usar para generar copy Anti-Slop para futuros eventos, documentando los criterios de qué palabras evitar y por qué."
    },
    {
      "id": "112535211651425914416",
      "name": "Iliana Gallardo",
      "is_named": true,
      "avg_score": 3.5,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": -1.0,
      "scores": [
        4.0,
        3.0
      ],
      "levels": [
        "Destacado",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El prompt diseña un workflow completo de automatización de reportes que va de datos crudos (PDF) a presentación ejecutiva (PPTX), lo cual es un caso de uso de IA de alto impacto.",
            "La especificación del destinatario (Director de Contenido) como criterio de calibración del tono y nivel de detalle demuestra pensamiento de audiencia avanzado."
          ],
          "recommendations": [
            "Agregar criterios de calidad del output: ¿cuántas diapositivas máximo?, ¿qué visualizaciones incluir?, ¿formato de los insights (bullets, narrativa, comparativa)?",
            "Incluir una instrucción de verificación donde el modelo confirme los datos extraídos antes de generar el análisis."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Destacado desde Sprint 1: el diseño de un workflow de automatización de reportes con múltiples pasos y output específico en Sprint 1 es excepcional y sugiere potencial de productización acelerada."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene Rol especializado (Data Scientist & BI Specialist en automatización de reportes), Objetivo claro (extraer datos de PDF y generar PPTX para Director de Contenido), y un flujo de instrucciones estructurado en pasos (Análisis → Cálculo de Insights → Generación de Presentación). La estructura es de alta densidad y funcionalidad."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El caso de extraer métricas de contenido (Engagement, Alcance, Shares) de un PDF y generar una presentación para un Director de Contenido es genuinamente específico de su trabajo real. Los detalles de dominio (métricas de contenido, directivo destinatario, PDF como fuente) confirman aplicación real."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "El diseño como workflow multi-paso (Análisis de datos → Cálculo de Insights → Generación de output final en PPTX) con un destinatario específico (Director de Contenido) demuestra comprensión de cómo el modelo necesita instrucciones secuenciales para producir outputs complejos. Es ingeniería de workflow avanzada para Sprint 1."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de alta especificidad que automatiza la generación de reportes mensuales de contenido digital: toma un PDF con métricas de rendimiento y produce directamente un archivo PowerPoint (.pptx) estructurado en 7 slides listos para presentación ejecutiva. El sistema incluye cálculo de variaciones, detección de anomalías y formato directivo, eliminando horas de trabajo manual de reporte.",
          "application_area": "Análisis de Datos",
          "application_detail": "Automatización del reporte mensual de performance de contenidos digitales para Director de Contenido, con métricas por plataforma social y generación de archivo .pptx ejecutivo.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema real, recurrente y específico de su rol (reporte mensual de contenidos), con instrucciones de flujo multi-paso, estructura de slides predefinida y restricciones de calidad de datos. Sin embargo, no hay evidencia de que sea una solución reutilizable por otros (GPT empaquetado, automatización vía n8n/Make, o plantilla compartida con el equipo).",
          "level_up_suggestion": "Empaqueta este flujo como un GPT personalizado con instrucciones del sistema precargadas y una plantilla de PDF estándar, de modo que cualquier miembro del equipo de contenido pueda generar su reporte mensual sin necesidad de conocer el prompt. Agrega un paso de validación que compare automáticamente contra KPIs objetivo almacenados en un Google Sheet conectado."
        },
        "sprint_2": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "La transformación de texto genérico de Instagram a estrategias con benchmarks concretos de 2026 es un ejemplo claro del valor de la verificación con datos.",
            "El proceso de iteración está bien documentado: problema inicial → técnica aplicada → resultado mejorado con evidencia del output."
          ],
          "recommendations": [
            "Agregar el prompt completo con la instrucción de verificación para poder evaluar la arquitectura técnica de la solicitud de benchmarks.",
            "Explorar cómo sistematizar este proceso de verificación con datos en un SOP Cognitivo para generación consistente de estrategias de Instagram con respaldo numérico."
          ],
          "alchemist_signals": [
            "Señal de evolución consistente: de automatización de reportes en Sprint 1 a verificación con benchmarks en Sprint 2, este estudiante está construyendo un flujo de trabajo de BI/Contenido con IA de forma coherente."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "El estudiante aplica verificación (ARV) al solicitar benchmarks que respalden las recomendaciones con datos numéricos, transformando un texto de best practices genérico en un output con métricas concretas. La técnica de verificación con datos es correcta y efectiva."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "El resultado muestra transformación efectiva de texto impreciso a estrategias con métricas específicas (datos de 2026, señales de valor, benchmarks). El output tiene densidad informativa claramente superior al input."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "El estudiante documenta claramente el problema (texto sin métricas y sin sustento numérico), la técnica (solicitar benchmarks), y el resultado mejorado. El proceso de refinamiento está bien documentado aunque de forma narrativa."
            }
          },
          "work_synthesis": "El estudiante tomó un texto genérico de mejores prácticas para Instagram y lo enriqueció usando IA para incorporar benchmarks numéricos concretos (tasas de engagement, incrementos porcentuales de alcance, métricas de retención). El resultado es una guía táctica de Instagram con datos cuantitativos que puede usarse como base para estrategia de contenido digital.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Optimización de estrategia orgánica en Instagram para marca en sector servicios financieros/crédito, con métricas de referencia para 2026.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El estudiante usa IA para mejorar un documento existente añadiendo benchmarks, lo cual muestra comprensión de cómo extraer valor de la herramienta; sin embargo, no hay evidencia de que este output resuelva un problema recurrente y específico de su trabajo diario ni de que esté integrado a un flujo real de trabajo en OCESA.",
          "level_up_suggestion": "Para avanzar a Alquimista en Práctica, aplica esta misma técnica a un brief o reporte real de tu área: toma un documento de trabajo tuyo (plan de contenidos, propuesta de campaña) y documenta cómo la IA mejoró una decisión concreta que tomaste o presentaste a tu equipo."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Análisis de Datos",
      "level_up_suggestion": "Para avanzar a Alquimista en Práctica, aplica esta misma técnica a un brief o reporte real de tu área: toma un documento de trabajo tuyo (plan de contenidos, propuesta de campaña) y documenta cómo la IA mejoró una decisión concreta que tomaste o presentaste a tu equipo."
    },
    {
      "id": "109113403661754840853",
      "name": "Rodrigo Topete",
      "is_named": true,
      "avg_score": 3.35,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": -0.7,
      "scores": [
        3.7,
        3.0
      ],
      "levels": [
        "Destacado",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "El rol de 'Arquitecto de Experiencias' es excepcionalmente específico y calibrado para el dominio de eventos corporativos de alto nivel.",
            "La combinación de diseño biofílico + diseño emocional como marco conceptual es una restricción creativa que diferencia el output de respuestas genéricas."
          ],
          "recommendations": [
            "Agregar un Formato de output explícito: ¿brief creativo en una página?, ¿moodboard conceptual verbal?, ¿lista de elementos sensoriales por área del evento?",
            "Incluir restricciones de presupuesto estimado o escala del evento para anclar las propuestas a factibilidad real."
          ],
          "alchemist_signals": [
            "Señal positiva: Rodrigo tiene acceso a casos de uso de alto perfil (eventos Fortune 500) que pueden beneficiarse enormemente de IA si continúa desarrollando sus prompts con mayor especificidad técnica."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene Rol específico (Arquitecto de Experiencias y Director Creativo para eventos Fortune 500), Contexto detallado (valores familiares, sostenibilidad, Convención Anual Global), Tarea clara (concepto de Ambiente y Atmósfera) y restricciones implícitas de dominio (diseño biofílico, diseño emocional). La estructura es sólida y el rol altamente especializado."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt es específico de su trabajo en eventos corporativos globales: la combinación de valores familiares con presencia mundial, la sostenibilidad como visión principal, y el contexto de Convención Anual de Colaboradores son marcadores claros de un caso real de alto impacto."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "La integración de diseño biofílico y emocional como parámetros del rol demuestra comprensión de que el modelo necesita marcos de referencia estéticos específicos para producir conceptos diferenciados. Sin embargo, no hay formato de output definido ni instrucciones de verificación."
            }
          },
          "work_synthesis": "Rodrigo construyó un prompt estructurado con múltiples capas (rol, tarea, contexto, restricciones y formato de salida) para generar conceptos de diseño de ambiente y atmósfera para una convención corporativa global. El prompt está orientado a producir propuestas creativas listas para presentar a clientes, combinando storytelling, sostenibilidad y zonificación de espacios.",
          "application_area": "Producción de Eventos",
          "application_detail": "Diseño conceptual de ambientes para convenciones corporativas de alto nivel en OCESA",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "Rodrigo demuestra dominio sólido de arquitectura de prompts (rol + tarea + contexto + restricciones + formato), pero el trabajo presentado es el prompt en sí mismo y no evidencia que este output se esté usando de forma recurrente en un flujo real de trabajo con clientes o producciones activas. No hay caso de uso aplicado con resultado concreto, solo la construcción técnica.",
          "level_up_suggestion": "Aplica este prompt a una convención real o propuesta activa en OCESA y documenta cómo el output de IA aceleró o mejoró el proceso de pitch al cliente. Ir un paso más allá: convierte este prompt en una plantilla reutilizable para tu equipo donde solo cambien variables como 'nombre de marca' y 'valores clave', reduciendo el tiempo de ideación en cada nuevo proyecto."
        },
        "sprint_2": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "La identificación de que los datos técnicos del medicamento son el antídoto específico contra el slop genérico es un insight metodológico correcto y bien aplicado.",
            "El contexto del evento de lanzamiento de medicamento es un caso de uso de alta complejidad que combina datos técnicos farmacéuticos con diseño de experiencias."
          ],
          "recommendations": [
            "Documentar el prompt final completo para poder evaluar la implementación técnica completa de la técnica.",
            "Estructurar el proceso de iteración de forma más formal: versión 1 (output genérico) → cambio aplicado → versión 2 (output mejorado)."
          ],
          "alchemist_signals": [
            "Señal positiva: la combinación de diseño de eventos con datos técnicos farmacéuticos es un nicho de aplicación altamente especializado donde la IA puede generar valor diferencial significativo."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "Rodrigo aplica 2B correctamente usando datos técnicos del medicamento, espacios físicos y parámetros del evento (lugar, área, presupuesto, asistentes) para eliminar el slop. La técnica de 'inyección de datos técnicos como filtro Anti-Slop' está correctamente identificada y aplicada."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "Identifica que los datos técnicos específicos del medicamento y del espacio físico son los que matan el slop, lo cual es correcto. Sin embargo, no documenta criterios formales de calidad ni un protocolo de verificación del output."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "Describe el caso, la técnica y el cambio clave (datos técnicos específicos eliminaron el slop genérico), aunque de forma narrativa y no estructurada. Hay evidencia de proceso de refinamiento aunque no documentado formalmente."
            }
          },
          "work_synthesis": "Rodrigo utilizó técnicas de Anti-Slop y datos técnicos del medicamento (mecanismo GLP-1, reducción metabólica) para generar un concepto experiencial de evento médico con traducción física del funcionamiento del fármaco en el cuerpo humano. El resultado es un brief de producción detallado con especificaciones técnicas de iluminación, materiales y narrativa espacial que puede presentarse directamente a proveedores de producción.",
          "application_area": "Producción de Eventos",
          "application_detail": "Conceptualización y briefing técnico para evento de lanzamiento farmacéutico con elementos de diseño experiencial basados en datos científicos del producto.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Rodrigo aplicó la técnica Anti-Slop con datos técnicos reales (mecanismo GLP-1, métricas de reducción metabólica, dimensiones del espacio) para resolver un problema específico y recurrente de su trabajo: traducir un concepto científico en experiencia de evento. El output generado —incluyendo la imagen— es directamente utilizable en su flujo laboral real.",
          "level_up_suggestion": "Para saltar a Alquimista Destacado, construye una plantilla o GPT que otros productores de OCESA puedan usar para cualquier lanzamiento farmacéutico: un flujo que ingeste datos técnicos del producto, perfil de audiencia médica y parámetros del venue, y genere automáticamente el concepto experiencial + brief de producción reutilizable."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Producción de Eventos",
      "level_up_suggestion": "Para saltar a Alquimista Destacado, construye una plantilla o GPT que otros productores de OCESA puedan usar para cualquier lanzamiento farmacéutico: un flujo que ingeste datos técnicos del producto, perfil de audiencia médica y parámetros del venue, y genere automáticamente el concepto experiencial + brief de producción reutilizable."
    },
    {
      "id": "110461156876964275771",
      "name": "Edson Jared García Cárdenas",
      "is_named": true,
      "avg_score": 3.2,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": -1.0,
      "scores": [
        3.7,
        2.7
      ],
      "levels": [
        "Destacado",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "El prompt demuestra dominio de su sector: la especialización en análisis de sentimiento bancario es exactamente lo que diferencia un prompt genérico de uno maestro.",
            "La estructura de análisis de conversaciones en múltiples plataformas simultáneas es una aplicación práctica de alto valor."
          ],
          "recommendations": [
            "Agregar instrucciones de Formato explícitas: ¿tabla de pain points por plataforma?, ¿ranking de fricciones por frecuencia?, ¿formato ejecutivo o analítico?",
            "Incluir una restricción de verificación donde el modelo declare la fuente de cada insight antes de reportarlo, para evitar alucinaciones en datos de sentimiento."
          ],
          "alchemist_signals": [
            "Señal positiva: Edson aplica prompting a análisis de datos reales de campañas, que es un caso de uso de alto impacto para su organización."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene Rol explícito y especializado (Senior Social Media Auditor & Business Intelligence Analyst en sector bancario), objetivo de análisis claramente definido, y estructura de deliverables implícita (pain points, sentiment, fricciones). La especificidad del rol y el dominio sectorial demuestran construcción consciente."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt aplica directamente a su trabajo en análisis de campañas bancarias en múltiples plataformas (Facebook, Instagram, TikTok). El foco en 'pain points' del sector bancario específico y la mención de análisis de sentimiento profundo son marcadores claros de contexto real."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "El rol especializado y la cadena de análisis (conversación → pain points → fricciones → intereses) muestran pensamiento de workflow. Sin embargo, no hay un formato de output explícito ni restricciones de verificación que evidencien comprensión técnica de cómo el modelo necesita recibir instrucciones de formato."
            }
          },
          "work_synthesis": "Edson construyó un prompt estructurado de auditoría de redes sociales para análisis de sentimiento en campañas bancarias, capaz de clasificar comentarios por plataforma (Facebook, Instagram, TikTok), detectar fricciones ocultas y generar entregables accionables para equipos de marketing y CX. El prompt tiene aplicación directa en la lectura estratégica de conversaciones digitales post-campaña.",
          "application_area": "Análisis de Datos",
          "application_detail": "Análisis de sentimiento y extracción de pain points en comentarios de campañas financieras en redes sociales, con salidas diferenciadas por plataforma y recomendaciones estratégicas.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt está muy bien estructurado —con rol, contexto, instrucciones de clasificación, detección de sentimiento oculto y formato de salida definido— lo que demuestra dominio sólido de ingeniería de prompting. Sin embargo, no hay evidencia de que este análisis se esté ejecutando sobre datos reales de su trabajo en OCESA ni de que resuelva un problema recurrente propio; el caso de uso presentado es de un banco genérico, no de su entorno laboral.",
          "level_up_suggestion": "Aplica este mismo prompt a una campaña real de OCESA (concierto, festival, preventa) usando comentarios reales de sus redes sociales, y documenta cómo los insights cambiaron una decisión de contenido o atención al cliente; eso lo movería directamente a Alquimista en Práctica."
        },
        "sprint_2": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "El prompt está bien contextualizado en el sector bancario con especificidad de canales (Meta) y temas (educación financiera, créditos).",
            "La aplicación de CoT a estrategia de canales no utilizados es un caso de uso concreto y de valor inmediato para su trabajo."
          ],
          "recommendations": [
            "Documentar el proceso de refinamiento: qué respuesta genérica produjo la versión anterior y cómo CoT la mejoró.",
            "Agregar restricciones de output (número de estrategias, formato de presentación, métricas de éxito esperadas) para obtener resultados más accionables."
          ],
          "alchemist_signals": [
            "Señal de aplicación práctica consistente: Edson aplica los frameworks a casos reales de su trabajo bancario en ambos sprints, lo cual indica adopción genuina."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "Aplica Chain-of-Thought correctamente para estructurar una estrategia de canales de difusión bancaria. El prompt tiene secciones diferenciadas (Rol, Contexto, Temas clave) que muestran comprensión de la técnica, aunque no se documenta el razonamiento paso a paso explícito que caracteriza CoT puro."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "El contexto específico (institución bancaria, canales Meta, educación financiera, créditos) actúa como filtro Anti-Slop implícito al restringir el dominio de respuestas posibles. Sin embargo, no hay criterios explícitos de calidad del output ni protocolo de verificación."
            },
            "Iteración y Refinamiento": {
              "score": 2,
              "justification": "El estudiante menciona que quería un prompt más específico y usó CoT, pero no documenta versiones anteriores ni explica qué aspectos concretos mejoró en la iteración."
            }
          },
          "work_synthesis": "Edson construyó un prompt estructurado con Chain-of-Thought para generar una estrategia de canales de difusión en Meta (Instagram/Facebook) para una institución bancaria, orientada al segmento C/C+ en México. El prompt define rol, contexto, instrucciones secuenciales y reglas de control para producir una propuesta con líneas editoriales, KPIs y formatos de contenido financiero.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Estrategia de contenido para canales de difusión de institución bancaria en Meta, enfocada en educación financiera y productos para NSE C/C+.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El estudiante demuestra dominio técnico del prompting (Chain-of-Thought, control de slop, estructuración por secciones), pero no hay evidencia de que esta estrategia haya sido aplicada a un proyecto real dentro de OCESA ni de que el output generado haya resuelto un problema laboral concreto y recurrente; parece un ejercicio bien construido sin caso de uso validado en su trabajo diario.",
          "level_up_suggestion": "Aplica este mismo framework de prompt a un proyecto real de OCESA, como la estrategia de difusión de un evento específico (concierto, festival), y documenta el resultado obtenido vs. el proceso manual anterior. Eso convierte el ejercicio en un caso de uso real que lo llevaría al nivel Practicante."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Análisis de Datos",
      "level_up_suggestion": "Aplica este mismo framework de prompt a un proyecto real de OCESA, como la estrategia de difusión de un evento específico (concierto, festival), y documenta el resultado obtenido vs. el proceso manual anterior. Eso convierte el ejercicio en un caso de uso real que lo llevaría al nivel Practicante."
    },
    {
      "id": "108344609292556991096",
      "name": "Alberto Garcia",
      "is_named": true,
      "avg_score": 3.2,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 1.0,
      "scores": [
        2.7,
        3.7
      ],
      "levels": [
        "Competente",
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "El rol definido tiene alta densidad y especificidad: 'background de investigación, síntesis de fuentes, marcos teóricos, evaluación bajo incertidumbre' es una calibración precisa del tipo de análisis esperado.",
            "La restricción 'no seas ambiguo, respalda con data' es un criterio Anti-Slop efectivo integrado en el rol."
          ],
          "recommendations": [
            "Anclar el prompt a un problema específico de su trabajo real para demostrar la aplicación del Sprint 1 en contexto concreto.",
            "Agregar un formato de output explícito: ¿análisis en estructura estándar?, ¿resumen ejecutivo?, ¿árbol de hipótesis?"
          ],
          "alchemist_signals": [
            "Señal de pensamiento analítico avanzado: el rol definido refleja un modelo mental sofisticado del tipo de análisis de calidad que el estudiante valora; falta conectarlo a un caso de negocio específico."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene un Rol excepcionalmente bien definido (analista estratégico de élite con background de investigación, síntesis de fuentes, marcos teóricos y evaluación bajo incertidumbre) y un objetivo claro (mejorar radicalmente cualquier idea, documento o problema). Aunque no tiene formato de output explícito, la densidad del rol es alta."
            },
            "Aplicación a Caso Real": {
              "score": 2,
              "justification": "El prompt está diseñado como una herramienta genérica de análisis estratégico sin contexto específico de un problema real de su trabajo. Tiene potencial para múltiples aplicaciones pero no evidencia un caso de uso particular."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "La instrucción 'No seas ambiguo, respalda lo que dices con data' y la definición de capacidades específicas del rol (detectar fallas conceptuales, aplicar marcos teóricos, evaluar bajo incertidumbre) demuestran comprensión de cómo calibrar el comportamiento del modelo con restricciones explícitas."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de sistema que define un rol de analista estratégico de élite con capacidades de investigación avanzada y pensamiento crítico. Sirve como instrucción base para elevar la calidad de respuestas de IA en análisis de documentos, ideas o problemas complejos.",
          "application_area": "Análisis de Datos",
          "application_detail": "Prompt genérico para análisis estratégico y evaluación crítica de ideas o documentos",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt muestra dominio de técnicas de role-playing y tono directivo, pero es completamente genérico y no está anclado a ningún caso de uso real de OCESA ni a un problema laboral concreto y recurrente. No hay evidencia de aplicación en su trabajo diario.",
          "level_up_suggestion": "Toma este mismo prompt base y rediseñalo para un problema específico de tu área en OCESA, por ejemplo: 'analiza propuestas de artistas para eventos masivos considerando estos criterios: presupuesto, perfil de audiencia y riesgo operativo'. La especificidad del contexto laboral es el salto que te lleva al siguiente nivel."
        },
        "sprint_2": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "La aplicación de CoT para resolver una tensión conceptual estratégica (transacción vs cultura) antes de proponer tácticas es una técnica de nivel avanzado aplicada con elegancia.",
            "El resultado (reposicionamiento de Heineken de proveedor a Enabler cultural) es un output de alto valor estratégico para una marca real."
          ],
          "recommendations": [
            "Compartir el prompt completo para que el grupo pueda aprender de la estructura específica que produjo el insight del Enabler cultural.",
            "Documentar las iteraciones intermedias para mostrar cómo evolucionó el pensamiento del modelo desde la activación genérica hasta el rol de facilitador."
          ],
          "alchemist_signals": [
            "Señal de Alquimista Avanzado: el uso de CoT para resolver tensiones conceptuales estratégicas antes de proponer tácticas es una aplicación sofisticada que pocos estudiantes del grupo dominan."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "Aplica Chain-of-Thought de forma excepcional: fuerza a la IA a analizar la tensión 'transacción vs cultura' antes de proponer tácticas, lo que transforma a Heineken de proveedor logístico a actor cultural. Esta aplicación muestra comprensión profunda de cómo CoT cambia el marco conceptual del output."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "Identifica el problema con precisión (slop genérico que no diferencia a la marca) y usa CoT para forzar al modelo a resolver la tensión conceptual antes de actuar. El resultado (rol de Enabler vs activaciones genéricas) es evidencia de Anti-Slop exitoso."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "Documenta el problema inicial (outputs genéricos), la técnica (CoT), y el resultado transformado (Heineken como Enabler cultural). Sin embargo, no se comparte el prompt final completo ni se detallan las iteraciones intermedias."
            }
          },
          "work_synthesis": "El estudiante aplicó Chain-of-Thought para reencuadrar estratégicamente el rol de Heineken en patrocinios de entretenimiento, forzando a la IA a razonar sobre la tensión 'transacción vs. cultura' antes de generar tácticas. El resultado es un marco conceptual que posiciona a la marca como facilitador cultural en lugar de proveedor logístico, con aplicación directa a propuestas de patrocinio para eventos OCESA.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Estrategia de patrocinios y posicionamiento de marca en eventos de entretenimiento en vivo (conciertos, festivales).",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El estudiante usó la técnica para resolver un problema real y recurrente —diferenciación de marca en propuestas de patrocinio— y produjo un marco estratégico aplicable, no solo un ejercicio de prompting. La síntesis sobre 'memoria post-evento' como métrica de valor demuestra pensamiento crítico aplicado al negocio.",
          "level_up_suggestion": "Para subir a Alquimista Destacado, convierte este marco en un GPT o plantilla reutilizable que otros equipos de ventas/marketing puedan usar para generar propuestas de patrocinio diferenciadas para distintas marcas y géneros musicales, con ejemplos few-shot incluidos."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Análisis de Datos",
      "level_up_suggestion": "Para subir a Alquimista Destacado, convierte este marco en un GPT o plantilla reutilizable que otros equipos de ventas/marketing puedan usar para generar propuestas de patrocinio diferenciadas para distintas marcas y géneros musicales, con ejemplos few-shot incluidos."
    },
    {
      "id": "113816981317648187944",
      "name": "Joanna jimenez",
      "is_named": true,
      "avg_score": 3.0,
      "sprints_count": 2,
      "total_sprints_with_work": 3,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 1.4,
      "scores": [
        2.3,
        3.7
      ],
      "levels": [
        "En Desarrollo",
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.3,
          "level": "En Desarrollo",
          "strengths": [
            "El caso de negocio es extraordinariamente específico y rico en datos (métricas reales de sentiment, volumen, acciones tomadas), lo que es una base excelente para un prompt maestro.",
            "La proactividad de capitalizar comentarios negativos vía DM muestra pensamiento estratégico que puede amplificarse con IA."
          ],
          "recommendations": [
            "Transformar este contexto tan rico en un prompt estructurado con Rol (analista de sentiment), Contexto (datos de Vicky Tajín), Tarea específica y Formato de output deseado.",
            "Usar el caso real de los 254 comentarios como few-shot data para que el modelo aprenda el patrón de respuesta que funcionó en los 32 casos capitalizados."
          ],
          "alchemist_signals": [
            "Señal de alto potencial: este estudiante tiene datos reales excepcionales de su trabajo que, bien estructurados en un prompt maestro, podrían producir resultados de alto valor. El gap está en la ingeniería, no en el caso de uso."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 2,
              "justification": "La respuesta es una descripción narrativa de un problema y un contexto de trabajo real (sentiment negativo de Vicky Tajín), pero no está formulada como un prompt con estructura Rol-Contexto-Tarea-Formato. Es más un briefing de contexto que un prompt de IA."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El caso es genuinamente real y específico: 254 comentarios negativos de Vicky Tajín, 61% sentiment negativo, 32 comentarios capitalizados vía DM. Este nivel de detalle solo viene de trabajo real con datos reales."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "Hay comprensión del problema que quiere resolver con IA (análisis de opiniones negativas) pero no se evidencia diseño intencional del prompt ni comprensión de cómo el modelo necesita recibir esta información para procesarla bien."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt para analizar sentimiento negativo de usuarios sobre un producto (Vicky Tajín) a partir de datos reales de DMs capitalizados, con el objetivo de generar un one-pager ejecutivo que incluya termómetro de satisfacción, análisis de sabor, datos de ingredientes y learnings de conversación no capitalizable. La herramienta sirve para convertir datos cualitativos de crisis de reputación en un reporte accionable para la marca.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Análisis de sentimiento negativo en redes sociales sobre producto de marca para generar reporte ejecutivo con insights accionables.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt está anclado en un caso de uso real y específico de su trabajo diario (61% sentimiento negativo, 254 comentarios, 32 DMs capitalizados, datos reales de enero 2026), con estructura de entregable definida y contexto de negocio claro. Sin embargo, la construcción del prompt aún mezcla instrucciones con contexto sin separación estructurada, lo que limita su reutilización por otros.",
          "level_up_suggestion": "Estructurar el prompt con secciones explícitas (Contexto / Tarea / Formato / Restricciones) para que cualquier compañero pueda reutilizarlo solo cambiando el producto o los datos. Como siguiente paso, conectar el análisis con una plantilla de one-pager en Google Slides vía IA generativa para automatizar la entrega."
        },
        "sprint_2": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "El System Prompt crea una identidad de IA corporativa específica para OCESA/BNN con restricciones de comportamiento bien calibradas.",
            "El anclaje a 'pilares extraídos del contexto operativo' es una técnica avanzada de inyección de contexto institucional que produce consistencia de outputs."
          ],
          "recommendations": [
            "Documentar qué respuestas genéricas produjo un prompt anterior y mostrar cómo este System Prompt las elimina.",
            "Agregar ejemplos de interacciones esperadas (few-shot) al System Prompt para calibrar el tono 'retador' sin que el modelo se vuelva confrontacional."
          ],
          "alchemist_signals": [
            "Señal de salto evolutivo notable: entre Sprint 1 (descripción de contexto sin prompt) y Sprint 2 (System Prompt de consultor corporativo), este estudiante dio un salto técnico significativo."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 4,
              "justification": "El System Prompt presentado integra múltiples técnicas avanzadas: definición de identidad con restricciones de comportamiento ('desafía la intuición'), anclaje a pilares de razonamiento específicos del contexto operativo de OCESA/BNN, y un framework de tono calibrado. La técnica de roleplay con restricciones operativas es una aplicación sofisticada."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 4,
              "justification": "El System Prompt explícitamente instruye al modelo a 'transformar eficiencia operativa real' en lugar de 'dar respuestas', y ancla el razonamiento a 'pilares específicos' internos, evitando respuestas genéricas. El Anti-Slop está operacionalizado como regla de comportamiento del sistema."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "El prompt final muestra alta sofisticación, pero el estudiante no documenta el proceso de iteración que lo llevó a este resultado ni compara versiones anteriores. La evidencia de refinamiento es implícita en la calidad del output."
            }
          },
          "work_synthesis": "El estudiante construyó un GPT de consultoría estratégica en IA para OCESA/BNN que actúa como un arquitecto de procesos interno, guiando a colaboradores a través de fases estructuradas de indagación, diagnóstico y propuesta de soluciones. El sistema incorpora matrices de evaluación bimodal, restricciones de estilo (Anti-Slop) y un protocolo Chain-of-Thought que impide respuestas superficiales, garantizando recomendaciones accionables con KPIs medibles.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Consultor IA interno que diagnostica y prioriza iniciativas de adopción de IA en áreas operativas de OCESA y BNN, con diferenciación entre quick wins y cambios estructurales.",
          "maturity_level": "Alquimista Destacado",
          "maturity_justification": "Construyó un sistema reutilizable con identidad de rol, protocolo de interacción en múltiples fases, matrices de evaluación embebidas y restricciones de calidad Anti-Slop, todo diseñado para que otros colaboradores lo usen como herramienta de consultoría. Va más allá de resolver su propio problema: crea infraestructura que otros pueden operar.",
          "level_up_suggestion": "Completar los placeholders abiertos (principios de Slide 2, ejes de matrices) con datos reales de OCESA para que el GPT pueda tomar decisiones contextualizadas sin depender de que el usuario los inserte. Como siguiente paso, documentar 2-3 casos de uso piloto con resultados reales para validar que el sistema efectivamente acorta el ciclo de diagnóstico-propuesta en el equipo."
        }
      },
      "maturity_level": "Alquimista Destacado",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Completar los placeholders abiertos (principios de Slide 2, ejes de matrices) con datos reales de OCESA para que el GPT pueda tomar decisiones contextualizadas sin depender de que el usuario los inserte. Como siguiente paso, documentar 2-3 casos de uso piloto con resultados reales para validar que el sistema efectivamente acorta el ciclo de diagnóstico-propuesta en el equipo."
    },
    {
      "id": "106470414928816113338",
      "name": "Alina Mendez",
      "is_named": true,
      "avg_score": 3.0,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 0.0,
      "scores": [
        3.0,
        3.0
      ],
      "levels": [
        "Competente",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El prompt está diseñado como una herramienta de productividad del equipo, no solo como consulta individual, lo que demuestra visión de producto.",
            "La tarea de estructurar requerimientos técnicos a partir de peticiones desordenadas es un caso de uso de alto valor inmediato en organizaciones digitales."
          ],
          "recommendations": [
            "Agregar un Rol explícito al prompt (ej: 'Actúa como Arquitecto de Requerimientos Digitales Sénior') para calibrar el nivel de análisis esperado.",
            "Definir el formato exacto del Listado de Requerimientos: ¿qué secciones debe incluir?, ¿qué nivel de detalle técnico se espera?"
          ],
          "alchemist_signals": [
            "Señal positiva: este estudiante está pensando en herramientas de equipo, no solo en usos personales de IA, lo que indica visión de impacto organizacional."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Tarea clara (transformar solicitudes desordenadas en requerimientos técnicos), Contexto específico (peticiones incompletas del equipo de []  para productos digitales), y un Output definido ('Listado de Requerimientos Técnicos' profesional y accionable). El Rol no está explícito, lo cual es una debilidad menor."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El problema de transformar peticiones desordenadas del equipo en requerimientos estructurados es genuinamente real y de alto valor. El corchete vacío en [equipo] reduce la especificidad pero el contexto general es claramente de su trabajo."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "El diseño del prompt como un transformador de inputs desordenados en outputs estructurados muestra comprensión de cómo el modelo puede actuar como un traductor de lenguaje informal a especificaciones técnicas. Es pensamiento de herramienta, no solo de consulta."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado para transformar solicitudes desordenadas de equipo en listados de requerimientos técnicos profesionales. Funciona como un intérprete entre comunicación informal y documentación técnica accionable para iniciar proyectos digitales.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Estructuración de requerimientos técnicos a partir de peticiones informales del equipo",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "Demuestra comprensión de estructura de prompts con TAREA y CONTEXTO definidos, pero el trabajo presentado es un template incompleto (con corchetes vacíos '[  ]') y no hay evidencia de que esté siendo usado en un flujo de trabajo real con casos concretos de OCESA.",
          "level_up_suggestion": "Completa el prompt con el área específica de OCESA (ej. producción de eventos, merch digital) y documenta 2-3 ejemplos reales de solicitudes desordenadas que hayas procesado con él, mostrando el input caótico y el output estructurado resultante."
        },
        "sprint_2": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El brief resultante de Trivia para Tradable Bits es un output técnico concreto y verificable que demuestra la efectividad de la técnica.",
            "La identificación de que las 'preguntas amplias evitan respuestas definitivas genéricas' es un insight metodológico correcto sobre cómo funciona el modelo."
          ],
          "recommendations": [
            "Incluir el prompt completo que generó el brief para poder evaluar la arquitectura técnica completa.",
            "Explorar cómo sistematizar este proceso de briefing en un GPT reutilizable para todo el equipo."
          ],
          "alchemist_signals": [
            "Señal de evolución consistente: el estudiante muestra un arco de aprendizaje claro de Sprint 1 a Sprint 2, pasando de plantilla incompleta a brief técnico accionable."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "El estudiante identifica que las preguntas amplias (en lugar de respuestas definitivas) son la técnica que elimina el slop, lo cual es una aplicación intuitiva del método ARV (Ask primero). El brief generado demuestra que la técnica funcionó correctamente."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "El brief de Trivia (Tradable Bits) es un output de alta densidad técnica: especifica mecánica, criterios de calificación, integración técnica y parámetros de engagement. Hay evidencia clara de que el slop fue eliminado y el output es accionable."
            },
            "Iteración y Refinamiento": {
              "score": 3,
              "justification": "El estudiante describe el problema original (peticiones incompletas → slop y back and forth), la solución (preguntas más amplias) y el brief resultante. El proceso de iteración está documentado aunque de forma narrativa, no con versiones comparadas."
            }
          },
          "work_synthesis": "El estudiante desarrolló un sistema de prompts con técnica Anti-Slop para resolver solicitudes incompletas en la creación de activadores digitales, generando un brief estructurado que estandariza los requerimientos técnicos y legales para lanzar trivias en plataformas de engagement. La solución reduce ciclos de back-and-forth con clientes o equipos internos al anticipar las preguntas críticas desde el inicio del proceso.",
          "application_area": "Producción de Eventos",
          "application_detail": "Creación de activaciones digitales (trivias, dinámicas de audiencia) en plataformas como Tradable Bits para eventos de entretenimiento en OCESA.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Aplica la técnica Anti-Slop a un problema real y recurrente de su trabajo —peticiones incompletas que generan retrasos— y produce un output funcional (brief estructurado) que resuelve un dolor operativo concreto. Hay evidencia de aplicación al trabajo diario, no solo experimentación con prompts.",
          "level_up_suggestion": "Para subir a Alquimista Destacado, convierte este brief en un GPT o plantilla reutilizable que cualquier colega del equipo de activaciones pueda usar de forma autónoma, añadiendo validaciones automáticas por tipo de evento o sponsor."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Gestión de Proyectos",
      "level_up_suggestion": "Para subir a Alquimista Destacado, convierte este brief en un GPT o plantilla reutilizable que cualquier colega del equipo de activaciones pueda usar de forma autónoma, añadiendo validaciones automáticas por tipo de evento o sponsor."
    },
    {
      "id": "104211778387333554478",
      "name": "Lilia Selene Herrera Soto",
      "is_named": true,
      "avg_score": 2.7,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "⚗️ Alquimista en Formación",
      "progression": 0.0,
      "scores": [
        2.7,
        2.7
      ],
      "levels": [
        "Competente",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "La restricción de 'sin adornos comerciales, solo lógica pura' es un criterio Anti-Slop efectivo y bien calibrado para el tipo de análisis requerido.",
            "El diseño de la tarea como cruce de dos fuentes (tendencias + catálogo) es un workflow de análisis bien estructurado."
          ],
          "recommendations": [
            "Completar los campos en corchetes con la industria y contexto real para que el prompt sea funcional.",
            "Agregar una instrucción de verificación donde el modelo declare la fuente de cada punto de dolor identificado."
          ],
          "alchemist_signals": [
            "Prompt con estructura de plantilla que puede escalar: si se completan los parámetros, este prompt puede convertirse en un activo de inteligencia de mercado reutilizable para múltiples industrias."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol (Analista de Inteligencia de Mercado), Tarea clara (cruzar reporte de tendencias con catálogo de productos para identificar 3 problemas críticos), y Formato definido (resumen ejecutivo de Puntos de Dolor vs Solución sin adornos). La estructura es funcional aunque el Contexto específico está en corchetes sin completar."
            },
            "Aplicación a Caso Real": {
              "score": 2,
              "justification": "El prompt tiene la estructura de un caso real pero los datos clave están en corchetes ([Industria], [Industria]). No queda claro cuál es la industria real de Selene ni qué catálogo específico se está usando."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "La instrucción de 'sin adornos comerciales, solo lógica pura' como criterio de output es pensamiento Anti-Slop implícito. El diseño de la tarea como cruce de dos fuentes de datos es un workflow estructurado que evidencia comprensión de cómo el modelo procesa información compleja."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado con rol, tarea, contexto y formato de salida para análisis de inteligencia de mercado competitiva. Sirve para identificar rápidamente qué problemas críticos de la industria puede resolver el catálogo de productos de OCESA, entregando un análisis sin retórica comercial.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Análisis de oportunidades de mercado para alinear oferta de productos con necesidades reales de clientes potenciales.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt demuestra buen dominio de la anatomía básica (rol, tarea, contexto, output), pero usa variables genéricas en corchetes ([Industria], [Catálogo]) sin evidencia de haberlo aplicado a un caso real y específico de su trabajo en OCESA. No hay señal de que este prompt resuelva un problema recurrente concreto.",
          "level_up_suggestion": "Reemplaza [Industria] con una industria real que Selene atiende hoy (ej. festivales de música, patrocinios corporativos) y adjunta un caso donde este análisis cambió una propuesta real. Eso convierte el ejercicio en un caso de uso de trabajo aplicado."
        },
        "sprint_2": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "La instrucción de analizar restricciones legales del dark market (Nicotina) antes de proponer estrategias es una aplicación inteligente de Step-Back a un dominio altamente regulado.",
            "El caso de activaciones en puntos físicos para dark markets es un uso de IA de alta especialización con restricciones legales reales."
          ],
          "recommendations": [
            "Documentar el prompt anterior y qué propuestas genéricas o legalmente inviables produjo, para evidenciar la mejora.",
            "Agregar un paso de verificación legal explícito al final del prompt para que el modelo confirme que sus propuestas cumplen con la NOM aplicable."
          ],
          "alchemist_signals": [
            "Señal de especialización de nicho: la aplicación de IA a estrategias de dark market con restricciones regulatorias es un caso de uso diferenciado de alto valor en su industria."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "El prompt integra Step-Back (analizar restricciones legales antes de actuar) con Chain-of-Thought implícito al estructurar la respuesta en pasos lógicos (perfil de consumidor → barrera de entrada → servicio personalizado). La técnica de 'investiga primero las restricciones del dark market' es una aplicación sofisticada de Step-Back a un dominio regulado."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "La instrucción inicial de analizar limitaciones legales actúa como filtro Anti-Slop al restringir las propuestas a lo legalmente viable en México. Los pasos numerados con objetivos específicos también limitan las respuestas genéricas."
            },
            "Iteración y Refinamiento": {
              "score": 2,
              "justification": "El prompt está bien construido pero el estudiante no documenta el proceso de iteración ni muestra versiones anteriores. La evidencia de refinamiento es implícita en la calidad del resultado."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt especializado para generar una estrategia de activaciones en dark markets de nicotina en México, incorporando análisis legal previo y un framework estructurado de tres pilares (Adquisición, Conversión y Advocacy). El resultado sirve como brief ejecutivo para guiar activaciones físicas en canales alternativos dirigidos a mayores de edad, donde la publicidad convencional está restringida.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Estrategia de activaciones y comunicación directa para marcas de nicotina en puntos de venta físicos bajo restricciones legales de publicidad en México.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El estudiante demuestra habilidad para estructurar un prompt complejo con rol, contexto legal y entregable ejecutivo definido, lo que va más allá del uso básico. Sin embargo, no evidencia aplicación a un caso real de su trabajo cotidiano en OCESA ni construye un sistema reutilizable; el ejercicio parece conceptual o para un cliente externo sin ancla clara a su rol actual.",
          "level_up_suggestion": "Conecta esta técnica a un proyecto real de OCESA: por ejemplo, usa el mismo framework de tres pilares (Adquisición, Conversión, Advocacy) para diseñar la estrategia de activación de una marca patrocinadora en un evento específico que estés trabajando, documentando el prompt y el resultado como plantilla reutilizable para tu equipo."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Ventas y Propuestas",
      "level_up_suggestion": "Conecta esta técnica a un proyecto real de OCESA: por ejemplo, usa el mismo framework de tres pilares (Adquisición, Conversión, Advocacy) para diseñar la estrategia de activación de una marca patrocinadora en un evento específico que estés trabajando, documentando el prompt y el resultado como plantilla reutilizable para tu equipo."
    },
    {
      "id": "106711327636840994139",
      "name": "Ana LiliaOrtiz",
      "is_named": true,
      "avg_score": 2.35,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": -0.7,
      "scores": [
        2.7,
        2.0
      ],
      "levels": [
        "Competente",
        "En Desarrollo"
      ],
      "sprints": {
        "sprint_2": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "El caso del Grouper de Cuentas en BNN con los tres objetivos del dashboard es un caso de negocio real y bien definido de alta utilidad inmediata.",
            "La solicitud de comparar dos metodologías antes de recomendar es una aplicación correcta del pensamiento Step-Back."
          ],
          "recommendations": [
            "Documentar el proceso de refinamiento: qué outputs genéricos produjo el prompt sin Step-Back y cómo la comparación de metodologías mejoró la recomendación.",
            "Agregar criterios de evaluación explícitos para la comparación (ej: costo de implementación, curva de aprendizaje del equipo, compatibilidad con Monday.com)."
          ],
          "alchemist_signals": [
            "Señal práctica: el dashboard de Monday.com para gestión de cuentas es un activo de alto impacto organizacional que puede beneficiarse enormemente de un SOP Cognitivo en el Sprint 3."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "El prompt aplica Step-Back al inicio (comparar dos metodologías de gestión antes de recomendar) y Chain-of-Thought al estructurar la respuesta en criterios específicos (Balanced Scorecard vs OKR para el caso del Grouper de Cuentas). La selección de técnicas es adecuada y conscientemente aplicada."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "Los objetivos específicos del dashboard (Visibilidad Ejecutiva de 10+ marcas, Pipeline de Upsell, Cultura y Growth) actúan como filtros Anti-Slop al restringir la comparación de metodologías a criterios funcionales concretos. El output esperado tiene densidad de información."
            },
            "Iteración y Refinamiento": {
              "score": 2,
              "justification": "El prompt final está bien construido pero el estudiante no documenta el proceso de iteración ni compara con versiones anteriores. Tampoco se evidencia claramente la técnica específica del sprint que fue aplicada."
            }
          },
          "work_synthesis": "El estudiante diseñó un prompt estructurado para construir un Dashboard ejecutivo en Monday.com orientado a la gestión de múltiples cuentas de agencia, comparando metodologías Balanced Scorecard vs. RAG Status. El output busca estandarizar la visibilidad de salud de marcas, pipeline de upsell y KPIs de equipo con campos objetivos y verificables, evitando criterios subjetivos.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Dashboard de monitoreo de cuentas para Grouper de Agencia Digital en OCESA/BNN, con seguimiento de salud de marcas, oportunidades de crecimiento y desempeño de equipo.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El estudiante aplica técnicas avanzadas como Anti-Alucinación y rol de experto (Arquitecto de Operaciones), pero el entregable es un prompt de investigación/comparación metodológica, no una solución implementada o reutilizable en su flujo real de trabajo; no hay evidencia de que el dashboard exista o se use operativamente.",
          "level_up_suggestion": "Lleva el prompt al siguiente nivel construyendo la plantilla real en Monday.com con las columnas específicas que la IA te recomendó, y documenta cómo el equipo la usa semanalmente; eso convertiría este ejercicio en un caso de uso real y repetible que califica como Alquimista en Práctica."
        },
        "sprint_3": {
          "score": 2.0,
          "level": "En Desarrollo",
          "strengths": [
            "El caso de uso (análisis de metas de ventas compartido por el equipo) es genuinamente valioso y tiene potencial de ser un activo digital de alto impacto.",
            "La visión de que el sistema sea utilizable por todo el equipo muestra pensamiento de producto escalable."
          ],
          "recommendations": [
            "Incluir el System Prompt completo con el contexto de ventas, los criterios de análisis y el formato de output esperado para materializar el sistema.",
            "Articular la diferencia técnica entre usar un prompt aislado y tener un Proyecto/GPT con memoria de los datos históricos de metas."
          ],
          "alchemist_signals": [
            "Vacío de implementación: la idea es sólida pero la entrega está muy por debajo de su potencial; el estudiante necesita pasar de la descripción a la construcción del artefacto."
          ],
          "criteria": {
            "Arquitectura del Sistema": {
              "score": 2,
              "justification": "La respuesta describe brevemente un sistema de análisis de metas de ventas pero no articula roles, criterios de calidad, flujo lógico ni estructura Supervisor-Worker. La descripción es demasiado superficial para confirmar que hay un sistema real diseñado."
            },
            "Relevancia del Problema": {
              "score": 3,
              "justification": "El análisis de gap de metas de ventas semanales para un equipo es un problema genuinamente relevante y real de su trabajo. El beneficio de que el equipo comparta el mismo espacio informativo también lo ancla en una necesidad organizacional real."
            },
            "Justificación Técnica": {
              "score": 2,
              "justification": "La justificación de que el sistema es mejor que un prompt aislado ('no tengo que repetir la información, me da más perspectiva y ahorro tiempo') es correcta en concepto pero superficial. No explica los mecanismos técnicos que hacen superior al sistema."
            },
            "Calidad de la Evidencia": {
              "score": 1,
              "justification": "No se incluye System Prompt, link ni ningún artefacto verificable. La respuesta es exclusivamente descriptiva y muy breve."
            }
          },
          "work_synthesis": "El estudiante diseñó un sistema para el análisis de brechas (gap) entre metas y resultados de ventas, con el objetivo de evitar la captura manual repetitiva de contexto y obtener perspectivas más consistentes. La propuesta incluye la intención de compartir el sistema con su equipo para estandarizar el análisis semanal.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Análisis de gap semanal de metas de ventas para el equipo comercial de OCESA.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "Aunque el caso de uso es relevante y está conectado a su trabajo real, la descripción carece de evidencia concreta: no presenta el system prompt, el GPT construido, ni la lógica del flujo Supervisor-Worker. Las justificaciones son genéricas ('ahorro tiempo', 'más perspectiva') sin demostrar arquitectura cognitiva real.",
          "level_up_suggestion": "Construye y comparte el system prompt real con instrucciones específicas: qué datos de ventas recibe, qué análisis ejecuta paso a paso y qué formato entrega al equipo. Si logras que tu equipo lo use semanalmente sin tu intervención, habrás cruzado al nivel Alquimista en Práctica."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Gestión de Proyectos",
      "level_up_suggestion": "Construye y comparte el system prompt real con instrucciones específicas: qué datos de ventas recibe, qué análisis ejecuta paso a paso y qué formato entrega al equipo. Si logras que tu equipo lo use semanalmente sin tu intervención, habrás cruzado al nivel Alquimista en Práctica."
    },
    {
      "id": "101197406476118350521",
      "name": "Daniela Maria Fernanda Sanchez Garcia",
      "is_named": true,
      "avg_score": 2.2,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": -1.0,
      "scores": [
        2.7,
        1.7
      ],
      "levels": [
        "Competente",
        "En Desarrollo"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "El uso de corchetes como variables de la plantilla muestra un pensamiento de reusabilidad y modularidad que es la base de prompts maestros.",
            "El contexto de gaming y esports con evento real (Indie Games Supernova) ancla el prompt en un dominio muy específico."
          ],
          "recommendations": [
            "Completar todos los parámetros en corchetes con datos reales del evento para que el prompt sea funcional y evaluable.",
            "Agregar un componente de formato de output explícito: ¿plan en semanas?, ¿por canal?, ¿formato ejecutivo para presentar al sponsor?"
          ],
          "alchemist_signals": [
            "Potencial de plantilla reutilizable: si este prompt se completa y refina, tiene el potencial de convertirse en un activo digital para múltiples sponsors de eventos de gaming."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol (Director de Estrategia y Comunicación en gaming y esports), Contexto (evento Indie Games Supernova), Tarea (plan integral de comunicación para Main Sponsor) y parámetros en corchetes que sugieren diseño modular. Sin embargo, los corchetes vacíos indican que el prompt es una plantilla sin completar."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El evento Indie Games Supernova y el contexto de gaming y esports son específicos de su área de trabajo. Sin embargo, los parámetros clave (tipo de evento, tamaño, público) están sin completar en corchetes, lo que limita la confirmación de aplicación real."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "Los corchetes para completar variables demuestran un enfoque de prompt como plantilla reutilizable, lo cual es pensamiento de ingeniero en embrión. Sin embargo, al no estar completados, el prompt no puede evaluarse como implementación funcional."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt avanzado que asigna un rol de Director de Estrategia a la IA para generar planes integrales de comunicación para patrocinadores de eventos de gaming indie. El prompt tiene estructura profesional con 10 secciones definidas y variables parametrizables, funcionando como plantilla reutilizable para propuestas de sponsorship.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Generación de planes de comunicación para patrocinadores de eventos de videojuegos indie (Indie Games Supernova), cubriendo estrategia, activaciones, contenido y KPIs.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt demuestra dominio técnico sólido de ingeniería de prompting —rol, contexto, estructura de salida detallada— pero los campos clave están en blanco con placeholders sin resolver, lo que indica que aún no fue ejecutado contra un caso real con datos concretos de un patrocinador específico de OCESA.",
          "level_up_suggestion": "Rellena los placeholders con un sponsor real que estés gestionando o prospectando en OCESA, ejecuta el prompt completo y comparte el output: eso lo convierte en un entregable de trabajo real. Si además lo conviertes en un GPT interno que cualquier ejecutivo de cuentas pueda usar para generar propuestas rápidas, saltas directo a Alquimista Destacado."
        },
        "sprint_2": {
          "score": 1.7,
          "level": "En Desarrollo",
          "strengths": [
            "Identifica correctamente dos técnicas relevantes para el caso (Step-Back y Chain-of-Thought).",
            "El caso de BANAMEX como Main Sponsor de un evento de gaming es un caso de negocio real de alta complejidad."
          ],
          "recommendations": [
            "Completar la respuesta con el proceso completo: prompt inicial → problema detectado → técnica aplicada → prompt final con evidencia del cambio.",
            "Incluir el prompt final completo y un ejemplo del output mejorado para demostrar el impacto de las técnicas aplicadas."
          ],
          "alchemist_signals": [
            "Vacío de documentación: el potencial del caso de uso es alto pero la evidencia de aprendizaje técnico está ausente; se recomienda revisitar la entrega con mayor profundidad."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 2,
              "justification": "El estudiante menciona Step-Back y Chain-of-Thought pero el 'Prompt final' que comparte es una variante del Sprint 1 sin evidencia visible de cómo estas técnicas fueron aplicadas específicamente. La respuesta es muy breve para evaluar dominio real de las técnicas."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 2,
              "justification": "No hay evidencia de criterios Anti-Slop explícitos ni de mejora de calidad del output. El prompt final mostrado no incorpora restricciones de calidad visibles."
            },
            "Iteración y Refinamiento": {
              "score": 1,
              "justification": "La respuesta es extremadamente breve y no documenta ningún proceso de iteración, ni qué cambió, ni por qué. Solo nombra las técnicas sin mostrar cómo se aplicaron."
            }
          },
          "work_synthesis": "El estudiante aplicó técnicas de Step-Back Prompting combinadas con Chain-of-Thought para generar un plan de patrocinio para BANAMEX como main sponsor de un evento de gaming indie. El ejercicio es conceptual y orientado a explorar la técnica, sin evidencia de aplicación directa a un problema real de su trabajo en OCESA.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Propuesta de patrocinio para evento de gaming con marca financiera",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El trabajo muestra conocimiento de las técnicas (Step-Back + Chain-of-Thought) pero se aplican en un escenario hipotético sin anclar a un reto real y recurrente de su rol en OCESA; la calificación baja (1.7/4) refuerza que la ejecución de las técnicas fue superficial.",
          "level_up_suggestion": "Toma un briefing real de patrocinio que estés trabajando actualmente en OCESA y aplica Step-Back para definir el principio estratégico antes de redactar, luego usa Chain-of-Thought para desglosar la propuesta paso a paso; compartir el output comparativo (sin técnica vs. con técnica) demostrará impacto concreto."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Ventas y Propuestas",
      "level_up_suggestion": "Toma un briefing real de patrocinio que estés trabajando actualmente en OCESA y aplica Step-Back para definir el principio estratégico antes de redactar, luego usa Chain-of-Thought para desglosar la propuesta paso a paso; compartir el output comparativo (sin técnica vs. con técnica) demostrará impacto concreto."
    },
    {
      "id": "103075432501673709372",
      "name": "Sandra Valenzuela Ripoll",
      "is_named": true,
      "avg_score": 2.0,
      "sprints_count": 2,
      "total_sprints_with_work": 3,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 1.4,
      "scores": [
        1.3,
        2.7
      ],
      "levels": [
        "Emergente",
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 1.3,
          "level": "Emergente",
          "strengths": [
            "La tarea tiene un objetivo funcional claro (comparar dos tablas y generar una tercera).",
            "La intención de estructurar información en formato tabla sugiere pensamiento orientado a outputs concretos."
          ],
          "recommendations": [
            "Aplicar la estructura Rol-Contexto-Tarea-Formato: ¿Quién soy? ¿Qué industria? ¿Qué deben contener esas tablas? ¿Qué formato debe tener la Tabla 3?",
            "Revisar los ejemplos del Sprint 1 y reconstruir este prompt con al menos 3 de los 4 componentes estructurales."
          ],
          "alchemist_signals": [
            "Vacío crítico: el estudiante no ha incorporado los frameworks del sprint aún; es fundamental revisar los materiales de Sprint 1 antes de avanzar al Sprint 2."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 1,
              "justification": "El prompt es una instrucción conversacional de una línea sin Rol, Contexto, Tarea estructurada ni Formato definido. No aplica ninguno de los frameworks aprendidos en el sprint."
            },
            "Aplicación a Caso Real": {
              "score": 2,
              "justification": "Aunque la tarea de comparar tablas puede ser real en su trabajo, el prompt no incluye ningún contexto de su industria, rol o caso específico. Es demasiado genérico para confirmar aplicación real."
            },
            "Pensamiento de Ingeniero": {
              "score": 1,
              "justification": "No hay evidencia de comprensión de cómo funciona el modelo, ni iteración, ni decisiones de diseño. El prompt es equivalente a una instrucción verbal informal."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt básico para comparar dos tablas de datos y consolidar las diferencias en una tercera tabla. La utilidad es limitada ya que el prompt carece de contexto, estructura y especificidad sobre el tipo de datos o el propósito del análisis.",
          "application_area": "Análisis de Datos",
          "application_detail": "Comparación de tablas sin contexto definido de negocio",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt es conversacional y extremadamente básico, sin elementos de ingeniería de prompting como contexto, rol, formato esperado o criterios de comparación. No hay evidencia de aplicación a un caso de uso real de trabajo en OCESA.",
          "level_up_suggestion": "Reconstruye el prompt especificando: qué tipo de datos contienen las tablas (ej. presupuestos de eventos, listas de proveedores), qué diferencias son relevantes para una decisión de negocio, y en qué formato necesitas la Tabla 3. Ejemplo: 'Actúa como analista de operaciones de eventos. Compara estas dos tablas de costos de producción e identifica discrepancias mayores al 10%, mostrándolas en una tabla con columnas: Rubro | Valor T1 | Valor T2 | Diferencia | % Variación'."
        },
        "sprint_2": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "La separación entre fidelidad de datos y estilo editorial como dos capas del problema es una aplicación inteligente de pensamiento estructurado.",
            "El ejemplo de transformación ('derecho a logo' → 'Presencia de marca') demuestra comprensión del valor de la densidad semántica en comunicación B2B."
          ],
          "recommendations": [
            "Documentar la versión anterior del prompt y el resultado que produjo para mostrar la evolución del refinamiento.",
            "Agregar una sección de verificación donde el modelo confirme que todos los datos de la Tabla A fueron preservados antes de entregar el output."
          ],
          "alchemist_signals": [
            "Señal de progreso: hay un salto notable de Sprint 1 (prompt de una línea) a Sprint 2 (aplicación técnica con criterios). El estudiante está acelerando su aprendizaje."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 3,
              "justification": "Aplica Chain-of-Thought correctamente al separar el problema de fidelidad de datos (nombres reales de inmuebles) del problema de estilo editorial. La distinción entre datos que NO cambiar y estilo que SÍ transformar es una aplicación inteligente de CoT en edición de contenido."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 3,
              "justification": "La instrucción de transformar 'derecho a logo' en 'Presencia de marca' y usar lenguaje de 'Socio Estratégico' es un criterio Anti-Slop explícito orientado a densidad de valor. Hay criterio de calidad visible aunque no articulado como protocolo formal."
            },
            "Iteración y Refinamiento": {
              "score": 2,
              "justification": "El estudiante menciona el contexto (replicar estilo para una sábana base) y la técnica (CoT 2A) pero no documenta qué salió mal antes ni qué cambió en la iteración. La evidencia de proceso de refinamiento es mínima."
            }
          },
          "work_synthesis": "El estudiante diseñó un prompt con Chain-of-Thought para que la IA transforme datos crudos de contratos de patrocinio en propuestas comerciales con lenguaje editorial de alto valor ('Socio Estratégico'). El sistema toma una tabla de datos (inmuebles, marcas, montos, vigencias) y la convierte en una sábana base estructurada por secciones, preservando fidelidad de datos mientras eleva el tono comunicativo.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Generación de propuestas de patrocinio para activos de OCESA (estadios, eventos) con lenguaje comercial premium.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "Hay un caso de uso real y recurrente: transformar fichas de patrocinio en documentos comerciales. El prompt muestra instrucciones concretas sobre fidelidad de datos, estilo editorial y estructura de salida, lo que indica aplicación directa a su flujo de trabajo.",
          "level_up_suggestion": "Construir un GPT personalizado que reciba la Tabla A como input estructurado y genere la sábana base automáticamente, eliminando el copy-paste manual y permitiendo que otros del equipo de ventas lo usen sin conocer prompting."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Análisis de Datos",
      "level_up_suggestion": "Construir un GPT personalizado que reciba la Tabla A como input estructurado y genere la sábana base automáticamente, eliminando el copy-paste manual y permitiendo que otros del equipo de ventas lo usen sin conocer prompting."
    },
    {
      "id": "107301154782480560977",
      "name": "Claudia Ibarra",
      "is_named": true,
      "avg_score": 2.0,
      "sprints_count": 2,
      "total_sprints_with_work": 2,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": -0.6,
      "scores": [
        2.3,
        1.7
      ],
      "levels": [
        "En Desarrollo",
        "En Desarrollo"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.3,
          "level": "En Desarrollo",
          "strengths": [
            "El prompt visual tiene especificidad técnica para generación de imagen: estilo, composición, mood y restricciones están bien calibrados.",
            "El dominio de festivales de música con identidad cultural latinoamericana es un caso de aplicación real y diferenciado."
          ],
          "recommendations": [
            "Entregar también un prompt de texto (con Rol-Contexto-Tarea-Formato) para el mismo caso, ya que el sprint evaluaba prompts de texto generativo.",
            "Explorar cómo usar un prompt de texto previo para generar el brief creativo que luego se convierte en el prompt de imagen."
          ],
          "alchemist_signals": [
            "Señal de dominio de imagen generativa: el estudiante tiene habilidades de prompt engineering visual que son complementarias y valiosas en el contexto de marketing de eventos."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 2,
              "justification": "El prompt está orientado a generación de imagen (Midjourney o similar) y tiene elementos visuales específicos (estilo editorial, crowd silhouettes, dark background). Sin embargo, no aplica la estructura Rol-Contexto-Tarea-Formato de prompting de texto aprendida en el sprint, ya que es un prompt de imagen con una lógica diferente."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El contexto de festival de música con herencia de rock latino es claramente específico de su industria real. Los elementos visuales (crowd silhouettes, comunidad, identidad cultural) están bien calibrados para el dominio de eventos musicales."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "Hay cierto pensamiento de ingeniero en la especificación de elementos visuales técnicos (bold editorial, dark background, clean grid system, modern typography) pero falta comprensión de cómo el modelo de texto funciona diferente a un modelo de imagen."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de generación de imágenes para crear el fondo visual de una infografía de estrategia para un festival de música con estética editorial latina. El artefacto sirve como material visual de apoyo para presentaciones o comunicaciones internas de estrategia.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación de assets visuales para estrategia de festival de música con identidad cultural latina.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt muestra conocimiento de técnicas de prompting visual (mood, estilo, restricciones negativas), pero se queda incompleto al indicar 'This is the information that you have to use' sin incluir el contenido real. No evidencia un caso de uso recurrente ni impacto medible en su trabajo diario.",
          "level_up_suggestion": "Completa el prompt con el contenido estratégico real y documenta cómo este visual resolvió un problema concreto de tu rol; luego construye una plantilla reutilizable que cualquier colega de marketing pueda adaptar para otros festivales de OCESA."
        },
        "sprint_2": {
          "score": 1.7,
          "level": "En Desarrollo",
          "strengths": [
            "La mención de usar el motor Python para cálculos matemáticos y generar CSV de salida demuestra conocimiento de restricciones técnicas importantes para evitar errores.",
            "La estructura de 4 componentes (ROL, INSUMO, MISIÓN, RESTRICCIONES) muestra incorporación de los frameworks del programa."
          ],
          "recommendations": [
            "Completar el prompt con el contenido real de cada sección y compartir el output generado para demostrar el impacto de las técnicas.",
            "Documentar el proceso de iteración: qué problema tenía el prompt original y cómo las restricciones técnicas (Python, CSV) lo resolvieron."
          ],
          "alchemist_signals": [
            "Vacío de implementación: el estudiante conoce la estructura pero no ha completado el artefacto; se necesita pasar de esquema a ejecución."
          ],
          "criteria": {
            "Dominio de Técnicas Avanzadas": {
              "score": 2,
              "justification": "El estudiante presenta un esquema de prompt con los componentes (ROL, INSUMO, MISIÓN, RESTRICCIONES) pero no muestra el prompt completo ni el resultado obtenido. La estructura está en borrador y faltan los contenidos reales de cada sección."
            },
            "Control de Calidad (Anti-Slop)": {
              "score": 2,
              "justification": "Menciona restricciones importantes (usar motor Python para cálculos, generar CSV de salida para evitar errores de contexto) que son técnicas Anti-Slop relevantes, pero sin el prompt completo y el output resultante no se puede evaluar la efectividad real."
            },
            "Iteración y Refinamiento": {
              "score": 1,
              "justification": "No hay evidencia de iteración, proceso de refinamiento ni comparación de versiones. El esquema presentado parece un plan de prompt, no el resultado de un proceso de refinamiento."
            }
          },
          "work_synthesis": "El estudiante esbozó la estructura de un prompt con rol de auditor, insumo de archivo y salida en CSV, pero no completó el ejercicio con un caso de uso concreto ni mostró el prompt final ejecutado. El trabajo presentado es un esqueleto incompleto sin evidencia de resultado real ni técnica avanzada aplicada.",
          "application_area": "Análisis de Datos",
          "application_detail": "Intento de auditoría de datos con salida estructurada en CSV, sin contexto de negocio definido.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El estudiante conoce elementos básicos de prompt engineering (rol, insumo, restricciones) pero no ejecutó ni compartió un resultado real; la baja calificación (1.7/4) confirma que el trabajo quedó incompleto y sin aplicación demostrada a su trabajo diario.",
          "level_up_suggestion": "Completa el prompt con un problema real de tu área (por ejemplo, auditar una base de asistentes a un evento o ventas de boletos) y comparte el resultado obtenido, incluyendo el CSV generado y qué decisión de negocio habilitó ese análisis."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Completa el prompt con un problema real de tu área (por ejemplo, auditar una base de asistentes a un evento o ventas de boletos) y comparte el resultado obtenido, incluyendo el CSV generado y qué decisión de negocio habilitó ese análisis."
    },
    {
      "id": "106910608619500189439",
      "name": "Paulina Rodriguez",
      "is_named": true,
      "avg_score": 4.0,
      "sprints_count": 1,
      "total_sprints_with_work": 2,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        4.0
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "Integra datos cuantitativos reales de OCESA (600 eventos, umbrales de venta del 30% y 40%) que hacen el prompt altamente ejecutable en un entorno profesional real.",
            "El pensamiento de edge cases (múltiples preventas el mismo día para un usuario) demuestra dominio de la ingeniería de prompts: anticipa escenarios complejos y pide al modelo que los resuelva de forma lógica."
          ],
          "recommendations": [
            "Considerar añadir un paso de validación donde el modelo confirme su comprensión del esquema antes de generar el output, para prompts tan complejos.",
            "Explorar la adición de ejemplos concretos (few-shot) de una campaña exitosa para anclar mejor el output del modelo hacia el estilo deseado."
          ],
          "alchemist_signals": [
            "Este prompt es de nivel profesional senior: diseña un sistema completo de automatización de marketing con lógica de negocio real, no solo un ejercicio académico. El estudiante ya piensa en pipelines de IA, no en prompts aislados."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Estructura ejemplar con Rol muy específico (Arquitecto de Soluciones CRM Senior en SFMC), Contexto con datos cuantitativos reales (600 eventos/año, proceso manual), Tarea desglosada en 3 objetivos numerados y Formato de salida explícito (tabla de flujo lógico + recomendaciones). Va más allá al añadir una sección de 'Prioridad de Negocio' que muestra diseño iterativo."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt está completamente enraizado en la realidad operativa de OCESA: 600 eventos anuales, Salesforce Marketing Cloud, reglas de negocio reales (Sold Out = cero campañas), triggers de crisis con porcentajes concretos y la Regla de Patrocinio Bancaria como disparador #1. Es altamente específico y operacionalizable."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Demuestra pensamiento sistémico avanzado: diseña lógica de priorización para evitar saturación de usuarios, propone 'Hierarchy of Send', anticipa edge cases (fan de 3 géneros recibiendo 3 mails el mismo día) y plantea consolidación de campañas. La 'Regla de Coexistencia' añadida evidencia iteración consciente y refinamiento del prompt."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de arquitectura estratégica para optimizar campañas en Salesforce Marketing Cloud, diseñado para reducir la carga manual en la gestión de más de 600 eventos anuales. El framework incluye lógica de triggers automatizados, consolidación de campañas, jerarquía de envíos y reglas de negocio críticas como la prioridad de preventa bancaria, lo cual tiene aplicación directa en la operación de marketing de OCESA.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Optimización y automatización de campañas de email marketing en Salesforce Marketing Cloud para eventos masivos, incluyendo segmentación, anti-fatiga y lógica de priorización de envíos.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt está anclado a un problema real, recurrente y específico de su trabajo (600 eventos, procesos manuales, saturación de base de datos), con reglas de negocio propias de OCESA como la Preventa Bancaria y triggers de venta. Sin embargo, aún no construye una solución reutilizable por otros (GPT, flujo automatizado o sistema multi-paso desplegado), lo que lo mantiene en el nivel de practicante sólido.",
          "level_up_suggestion": "El siguiente paso es materializar este framework como un GPT personalizado o un flujo en SFMC que otros equipos de marketing de OCESA puedan operar sin necesitar construir el prompt desde cero; documenta los parámetros variables (nombre de artista, fechas, % de aforo) como inputs estandarizados para escalar la solución."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "El siguiente paso es materializar este framework como un GPT personalizado o un flujo en SFMC que otros equipos de marketing de OCESA puedan operar sin necesitar construir el prompt desde cero; documenta los parámetros variables (nombre de artista, fechas, % de aforo) como inputs estandarizados para escalar la solución."
    },
    {
      "id": "100303443825812603046",
      "name": "Yesenia Martinez Cruz",
      "is_named": true,
      "avg_score": 4.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        4.0
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "La inclusión de nombres reales, fechas concretas y estimaciones de horas convierte este prompt en un instrumento de trabajo real, no en un ejercicio teórico.",
            "El criterio de priorización por 'entregas que bloquean a otros departamentos' muestra sofisticación gerencial traducida directamente al diseño del prompt."
          ],
          "recommendations": [
            "Añadir una restricción explícita sobre qué hacer si la carga total supera la capacidad del equipo (ej. ¿qué tareas eliminar o renegociar con el cliente?).",
            "Incluir el formato de la tabla de cronograma esperada con columnas ejemplo para que el output sea más consistente entre usos."
          ],
          "alchemist_signals": [
            "El estudiante usa la IA como un verdadero copiloto de gestión de proyectos: alimenta el modelo con los datos operativos reales de su equipo y le pide un output ejecutable. Es exactamente el uso de IA que transforma la productividad profesional."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Usa etiquetado explícito [ROL], [CONTEXTO], [TAREAS], [FORMATO DE SALIDA] e [INPUTS ACTUALES] con gran claridad. Las tareas están numeradas con verbos de acción, los insumos están clasificados por prioridad, y el formato de salida especifica tanto el entregable como el destinatario (Yess), lo cual es sofisticado."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "Menciona nombres reales de colaboradores (Mauricio, Luis, Andrés), capacidades específicas (8 horas cada uno), fechas concretas de entrega (24 feb, 12 marzo), y entregables reales de OCESA (Guiones Alta Producción, Vive Latino). El nivel de especificidad es excepcional y demuestra aplicación directa al trabajo diario."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Estima tiempos por tipo de entregable (Guiones: 4-6h, Conceptos: 3-4h, Copies: 1-2h) como inputs explícitos para que el modelo razone con datos reales. Solicita análisis de riesgos y tiene lógica de priorización por bloqueo de dependencias, lo que demuestra comprensión de cómo guiar al modelo hacia razonamiento estructurado."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado para gestionar la distribución de trabajo de un equipo de tres redactores creativos, con priorización por fecha de entrega y capacidad por persona. El sistema permite generar cronogramas semanales y análisis de riesgos para un evento real (Vive Latino), resolviendo un problema operativo concreto de su rol como PM.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Planificación y distribución de carga de trabajo para equipo de contenido creativo en producción de eventos masivos.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt está anclado a un problema real y recurrente de su trabajo diario: gestionar capacidad de equipo con fechas críticas reales (24 feb, 12 marzo). Incluye nombres de personas reales, estimaciones de horas por tipo de entregable y prioridades bloqueantes, lo que evidencia aplicación genuina al trabajo, no un ejercicio académico.",
          "level_up_suggestion": "Para subir a Alquimista Destacado, convierte este prompt en un GPT reutilizable donde cualquier PM de su equipo pueda ingresar la lista de entregables y capacidad del equipo y obtener el cronograma automáticamente, eliminando la necesidad de personalizar el prompt cada semana."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Gestión de Proyectos",
      "level_up_suggestion": "Para subir a Alquimista Destacado, convierte este prompt en un GPT reutilizable donde cualquier PM de su equipo pueda ingresar la lista de entregables y capacidad del equipo y obtener el cronograma automáticamente, eliminando la necesidad de personalizar el prompt cada semana."
    },
    {
      "id": "105654336832879521757",
      "name": "Heidy Paola Fuentes Torres",
      "is_named": true,
      "avg_score": 4.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        4.0
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "La identificación de KPIs específicos de la industria FMCG (penetración, trial, frecuencia de compra) como parámetros de evaluación demuestra dominio del contexto de negocio y diseño de prompts de alta precisión.",
            "El dual output (guía de workshop + talking points) convierte un prompt en una herramienta de trabajo completa, demostrando visión de producto en la ingeniería de prompts."
          ],
          "recommendations": [
            "Agregar ejemplos de los beneficios actuales de la sábana de OCESA como pocos ejemplos de referencia para que el modelo calibre el nivel de detalle esperado.",
            "Incluir una restricción sobre la longitud del output para asegurar que sea accionable en una sesión de trabajo real."
          ],
          "alchemist_signals": [
            "El estudiante diseña herramientas de trabajo, no consultas aisladas. El prompt está pensado para reproducirse en múltiples sesiones estratégicas con diferentes marcas FMCG, lo cual es pensar en IA como infraestructura profesional."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Rol muy específico (Senior Manager de Patrocinios en OCESA con 15 años y expertise en FMCG), Contexto con problema de negocio claro (priorizar sábana de beneficios), Tarea con doble objetivo (workshop + talking points), y restricciones de tono y lenguaje explícitas. La estructura está completamente desarrollada."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "Menciona la 'sábana de beneficios' de OCESA como artefacto real, los KPIs específicos de FMCG (awareness, penetración, trial, frecuencia de compra, distribución) y la distinción entre beneficios de 'venta vs. brand awareness' y 'aspiracionales vs. transaccionales'. Es un prompt completamente operativo para el trabajo real."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Solicita dos formatos de output simultáneos (guía de workshop + talking points para presentación), establece un tono consultivo y analítico específico, y el prompt está diseñado para ser reutilizado en diferentes sesiones estratégicas. Demuestra pensamiento sistémico sobre cómo el output se integrará en flujos de trabajo reales."
            }
          },
          "work_synthesis": "La estudiante construyó un prompt de alta especificidad para generar un framework estratégico de análisis de beneficios de patrocinio dirigido a marcas FMCG de alimentos, incluyendo guía de workshop y talking points ejecutivos. El prompt está diseñado para resolver un problema real del área de patrocinios: priorizar qué beneficios de la oferta comercial de OCESA generan mayor retorno para una industria específica, diferenciando entre valor aspiracional y transaccional.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Análisis estratégico de propuesta de valor de patrocinios para industria FMCG, orientado a priorización comercial y preparación de presentaciones internas.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema de negocio real y recurrente en su trabajo (priorización de sábana de beneficios para cliente FMCG), con contexto específico, tarea concreta y entregables definidos (framework + talking points). Supera el nivel básico de experimentación al estar anclado en una necesidad comercial tangible de su área.",
          "level_up_suggestion": "Para avanzar al nivel Alquimista Destacado, convierta este prompt en un GPT personalizado o plantilla reutilizable que cualquier ejecutivo de patrocinios pueda usar ingresando la industria objetivo (FMCG, automotriz, telco, etc.) y obtenga automáticamente el análisis estratégico adaptado, democratizando la herramienta en todo el equipo comercial."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Ventas y Propuestas",
      "level_up_suggestion": "Para avanzar al nivel Alquimista Destacado, convierta este prompt en un GPT personalizado o plantilla reutilizable que cualquier ejecutivo de patrocinios pueda usar ingresando la industria objetivo (FMCG, automotriz, telco, etc.) y obtenga automáticamente el análisis estratégico adaptado, democratizando la herramienta en todo el equipo comercial."
    },
    {
      "id": "108527896667514209095",
      "name": "Jose Valdez",
      "is_named": true,
      "avg_score": 4.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        4.0
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "La 'Matriz de Barreras' como herramienta de discriminación entre ruido de redes sociales y problemas reales de conversión es una innovación estratégica dentro del diseño del prompt que agrega valor analítico real.",
            "El destinatario específico del output (Subdirección de Marketing) y el formato ejecutivo (Quick Wins) convierten el prompt en una herramienta lista para usar en reuniones reales de estrategia."
          ],
          "recommendations": [
            "Agregar un ejemplo de dato de entrada (una crítica de red social y un resultado de encuesta) para que el modelo calibre el nivel de análisis esperado.",
            "Considerar añadir una cuarta sección al formato de salida: 'Métricas de Seguimiento' para cada Quick Win, completando el ciclo de acción-medición."
          ],
          "alchemist_signals": [
            "Este prompt está diseñado para ser usado en ciclos de mejora continua de ventas en OCESA. La estructura es reproducible para cada show, lo que convierte a la IA en un analista permanente del equipo, no en un asistente de uso puntual."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Estructura impecable con headers # ROL, # CONTEXTO, # TAREA, # DATOS y # FORMATO DE SALIDA bien diferenciados. El formato de salida detalla tres secciones específicas (Síntesis, Matriz de Barreras, Roadmap) con definiciones de lo que contiene cada una. La claridad estructural es ejemplar."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt está construido para un problema real y recurrente en OCESA: analizar datos mixtos post-show (redes + encuestas) para mejorar la venta del siguiente evento. La distinción 'Ruido de redes vs. Problemas reales de conversión' y el destinatario específico (Subdirección de Marketing) lo anclan completamente en el entorno profesional."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Solicita un 'Quick Wins Roadmap' para el equipo de pauta y operaciones, demostrando que diseñó el output para ser accionable, no solo informativo. La distinción entre barreras de compra reales vs. ruido en redes muestra comprensión del problema de signal vs. noise en análisis de datos, una decisión de diseño muy madura."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado de análisis de inteligencia del consumidor que convierte datos mixtos (redes sociales + encuestas post-venta) en un reporte ejecutivo accionable para Subdirección de Marketing. El sistema identifica barreras de compra reales vs. ruido digital y genera un roadmap de quick wins para optimizar la conversión en futuros eventos de OCESA.",
          "application_area": "Análisis de Datos",
          "application_detail": "Análisis de fricción en embudo de ventas y percepción del fan para informar estrategia de marketing de eventos en vivo.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt demuestra aplicación real y recurrente a su trabajo diario en OCESA: tiene contexto específico del negocio, datos reales de entrada (comentarios RRSS + encuestas), y un formato de salida calibrado para un tomador de decisiones real (Subdirector). La distinción entre 'ruido de redes' vs 'problemas reales de conversión' evidencia pensamiento analítico aplicado, no solo experimentación básica.",
          "level_up_suggestion": "Para escalar a Alquimista Destacado, convierte este prompt en un GPT reutilizable que tu equipo pueda usar de forma autónoma tras cada evento, incorporando un template estandarizado de captura de datos (RRSS + encuesta) y un sistema de scoring automático de severidad por barrera identificada."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Análisis de Datos",
      "level_up_suggestion": "Para escalar a Alquimista Destacado, convierte este prompt en un GPT reutilizable que tu equipo pueda usar de forma autónoma tras cada evento, incorporando un template estandarizado de captura de datos (RRSS + encuesta) y un sistema de scoring automático de severidad por barrera identificada."
    },
    {
      "id": "114103931418907515524",
      "name": "Pamela Morales",
      "is_named": true,
      "avg_score": 4.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        4.0
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El mecanismo de validación ('Información no disponible en manuales oficiales. Consultar con Pame') es una solución elegante al problema de alucinaciones: el modelo admite sus límites en lugar de inventar.",
            "El diseño de un 'Next Step inmediato' como cierre obligatorio convierte cada respuesta del modelo en una instrucción accionable para el equipo operativo, maximizando el valor práctico."
          ],
          "recommendations": [
            "Agregar instrucciones sobre cómo proporcionar la documentación al modelo (formato, estructura del input) para completar el workflow de uso.",
            "Considerar una variante del prompt para el modo 'onboarding de nuevos colaboradores' que adapte el nivel de detalle de las respuestas según la experiencia del usuario."
          ],
          "alchemist_signals": [
            "Este prompt es un sistema de soporte técnico construido sobre IA: está diseñado para ser escalable, consistente y seguro (sin alucinaciones). El estudiante piensa en prompts como infraestructura operativa, no como consultas individuales."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "El prompt tiene un Rol ultra-específico ('Asistente Técnico de Operaciones de Pame'), un Protocolo de Respuesta estructurado con 4 pasos nombrados (Contexto, Instrucción Directa, Validación, Cierre) y una Restricción explícita. El diseño de un protocolo de respuesta dentro del prompt es una técnica avanzada."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt está diseñado para resolver el problema real de un equipo que necesita respuestas rápidas y consistentes basadas en documentación oficial. Los tres contextos operativos (Venta, Auditoría, Evento) y la referencia a 'Pame' como persona real muestran una aplicación completamente personalizada al entorno laboral."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "La restricción de 'usar exclusivamente la documentación proporcionada' y el mecanismo de 'Información no disponible en manuales oficiales. Consultar con Pame' son guardas explícitas contra alucinaciones, demostrando comprensión sofisticada de las limitaciones del modelo. El diseño de pasos numerados ($1, 2, 3$) muestra control del formato de output."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado que simula un asistente técnico especializado en operaciones, diseñado para responder preguntas del equipo basándose exclusivamente en documentación oficial. El sistema incluye protocolos de validación, restricciones de respuesta y un mecanismo de escalación cuando la información no está disponible, lo que sugiere una aplicación real dentro de un proceso operativo definido.",
          "application_area": "Operaciones",
          "application_detail": "Asistente técnico para resolución de dudas del equipo en fases de Venta, Auditoría y Evento, usando documentación oficial como base de conocimiento.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt está claramente orientado a un contexto laboral real (operaciones de una persona llamada 'Pame', con fases específicas de proceso), resuelve un problema recurrente y concreto del equipo, e incorpora restricciones operativas y lógica de escalación que revelan entendimiento del flujo de trabajo.",
          "level_up_suggestion": "Para avanzar a Alquimista Destacado, convierte este prompt en un GPT personalizado con la documentación oficial cargada como knowledge base, de modo que cualquier persona del equipo pueda usarlo de forma autónoma sin necesidad de copiar y pegar el prompt manualmente."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Operaciones",
      "level_up_suggestion": "Para avanzar a Alquimista Destacado, convierte este prompt en un GPT personalizado con la documentación oficial cargada como knowledge base, de modo que cualquier persona del equipo pueda usarlo de forma autónoma sin necesidad de copiar y pegar el prompt manualmente."
    },
    {
      "id": "116333425705445925015",
      "name": "Axel Arredondo",
      "is_named": true,
      "avg_score": 4.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        4.0
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "El chain-of-thought implícito (Para Qué → Hallazgo → Visualización → Storytelling) guía al modelo a través de un proceso de análisis de datos completo y reproducible, demostrando dominio avanzado de la técnica.",
            "La restricción de lenguaje específica ('Prohibido usar el desempeño fue positivo') muestra que el estudiante ya diseña prompts para combatir el lenguaje genérico del modelo, buscando outputs de alta precisión."
          ],
          "recommendations": [
            "Agregar un ejemplo de dato de entrada (una métrica de social media) y su interpretación esperada para calibrar al modelo con few-shot prompting.",
            "Especificar el cliente de referencia en el Formato (¿qué tipo de marca o industria es 'Modelo'?) para obtener recomendaciones más específicas en cada uso."
          ],
          "alchemist_signals": [
            "Este prompt convierte a la IA en un mentor de equipo: está diseñado no solo para generar contenido, sino para desarrollar las capacidades analíticas del equipo de Social Media. Es una aplicación transformacional de la ingeniería de prompts."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Estructura completamente desarrollada con Rol (Chief Data Officer + Storytelling), Contexto (equipo de Social Media que pasa de ejecutivo a consultor), Tarea (guía de interpretación de datos), sección de Razonamiento con 4 pasos numerados, Restricciones explícitas y Formato de salida con 5 diapositivas definidas. Es uno de los prompts más completos del grupo."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt está diseñado para transformar un equipo real de Social Media de 'tomadores de pedidos' a 'consultores estratégicos'. La referencia a 'reporte mensual de Modelo' y las instrucciones anti-frases vacías ('Prohibido: el desempeño fue positivo') muestran aplicación a un entregable real y recurrente del trabajo."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "La sección de 'Instrucciones de Razonamiento' (con el símbolo ()) que guía al modelo paso a paso (Para Qué → Hallazgo → Visualización → Storytelling) es técnica de chain-of-thought aplicada de forma consciente. La restricción de 'Recomendación Accionable al final de cada interpretación' es una decisión de diseño que maximiza el valor del output."
            }
          },
          "work_synthesis": "Construyó un prompt estructurado que convierte a la IA en un mentor de reporting estratégico para su equipo de Social Media, generando una guía de 5 diapositivas que transforma métricas en narrativas accionables para clientes. El sistema está diseñado para elevar al equipo de ejecutores operativos a consultores estratégicos, con instrucciones de razonamiento explícitas sobre insight, visualización y storytelling.",
          "application_area": "Análisis de Datos",
          "application_detail": "Guía de interpretación de datos para reportes mensuales de Social Media orientada a clientes del portafolio (caso: Modelo)",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema real, recurrente y específico de su trabajo: equipos que reportan datos sin interpretarlos estratégicamente. La arquitectura del prompt (rol + contexto organizacional + instrucciones de razonamiento encadenadas + restricciones lingüísticas) demuestra dominio técnico aplicado a un flujo de trabajo concreto, no solo experimentación.",
          "level_up_suggestion": "Para escalar a Alquimista Destacado, convierte esta guía en un GPT personalizado que tu equipo pueda usar de forma autónoma cada mes, alimentándolo con los datos reales del reporte y generando automáticamente los titulares de impacto y recomendaciones accionables sin necesidad de re-promptear."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Análisis de Datos",
      "level_up_suggestion": "Para escalar a Alquimista Destacado, convierte esta guía en un GPT personalizado que tu equipo pueda usar de forma autónoma cada mes, alimentándolo con los datos reales del reporte y generando automáticamente los titulares de impacto y recomendaciones accionables sin necesidad de re-promptear."
    },
    {
      "id": "116428279246995737033",
      "name": "Paulina Teja",
      "is_named": true,
      "avg_score": 4.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        4.0
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "Los Lineamientos de Innovación con ejemplos concretos (ej. LED para momentos de antojo) funcionan como few-shot prompting implícito: le muestran al modelo el tipo de creatividad esperada sin decírselo explícitamente.",
            "El concepto de paquetes de 'Costo Cero con utilidad superior al 90%' es un constraint de negocio sofisticado que hace el output directamente presentable a un cliente real."
          ],
          "recommendations": [
            "Añadir una restricción sobre el presupuesto máximo de implementación para la marca patrocinadora, completando el modelo de negocio.",
            "Considerar una versión del prompt parametrizable por tipo de marca (botanas, bebidas, tecnología) para reutilizarlo con diferentes clientes."
          ],
          "alchemist_signals": [
            "El estudiante construyó una herramienta de ventas real con este prompt: los outputs son directamente presentables como propuesta comercial a marcas. Esto es prompting como generador de valor de negocio, no como experimento académico."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Estructura completa con Rol ultra-específico (Estratega Senior de Patrocinios en Inmuebles Deportivos), Tarea concreta (10 beneficios innovadores para Marca de Botanas), Contexto detallado con activos disponibles numerados, Lineamientos de Innovación y Formato de salida con tabla de 5 columnas con nombres exactos. La precisión es ejemplar."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt está construido sobre activos reales de un estadio (LED Ribbon 360°, Barras de Alimentos, pantallas gigantes) y resuelve un problema comercial real: diseñar paquetes de patrocinio de costo cero para el estadio. La especificidad del cliente (Marca de Botanas) y la restricción de 'costo CERO para el estadio' refleja lógica de negocio real."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Los 'Lineamientos de Innovación' con casos de uso específicos (LED Ribbon para 'Momentos de Antojo' tras un gol) son ejemplos few-shot integrados en el prompt que anclan el modelo hacia el tipo de creatividad esperada. El Precio Sugerido en USD como columna del output demuestra pensamiento de producto aplicado al output."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado de alta especificidad para generar estrategias de patrocinio deportivo aplicadas a un estadio real, con restricciones operativas concretas (costo cero, activos existentes) y formato de salida definido. La herramienta sirve para acelerar la creación de propuestas comerciales de valor para marcas patrocinadoras en el contexto de OCESA/entretenimiento en vivo.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Generación de beneficios e inventario de patrocinios para marcas en estadios, con pricing y restricciones operativas incluidas.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un problema de negocio real y recurrente (venta de patrocinios con activos existentes), incluye contexto operativo específico del estadio, restricciones de margen y un formato de salida accionable que puede usarse directamente en una propuesta comercial. No es un ejercicio genérico: refleja conocimiento profundo del dominio.",
          "level_up_suggestion": "Para escalar a Alquimista Destacado, convierte este prompt en un GPT reutilizable donde cualquier colega ingrese la marca, los activos disponibles y el objetivo de margen, y obtenga automáticamente la propuesta de patrocinio lista para presentar. Agregar un segundo paso que genere el deck ejecutivo en PowerPoint elevaría aún más el impacto."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Ventas y Propuestas",
      "level_up_suggestion": "Para escalar a Alquimista Destacado, convierte este prompt en un GPT reutilizable donde cualquier colega ingrese la marca, los activos disponibles y el objetivo de margen, y obtenga automáticamente la propuesta de patrocinio lista para presentar. Agregar un segundo paso que genere el deck ejecutivo en PowerPoint elevaría aún más el impacto."
    },
    {
      "id": "117460584845700163992",
      "name": "Daniela Ibarra",
      "is_named": true,
      "avg_score": 4.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        4.0
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 4.0,
          "level": "Destacado",
          "strengths": [
            "Los datos cuantitativos del Contexto (60% de venta, estadio de 20k, 3 semanas, presupuesto bajo) crean un escenario de alta especificidad que obliga al modelo a generar soluciones creativas bajo restricciones reales.",
            "La distribución de ideas por área (PR, Digital, BTL) es un formato de output inteligente que hace el resultado directamente accionable por diferentes equipos dentro de OCESA."
          ],
          "recommendations": [
            "Agregar datos del headliner (nombre del artista o referencias de estilo) para que el modelo genere ideas de guerrilla marketing más específicas al universo del fan.",
            "Considerar un paso de iteración donde el modelo evalúe el impacto estimado de cada idea antes de presentarla en la tabla, añadiendo criterio de priorización."
          ],
          "alchemist_signals": [
            "El prompt 'Headliner' está diseñado para situaciones de crisis de ventas reales, un escenario que OCESA enfrenta regularmente. El estudiante ya usa la IA como herramienta de aceleración en momentos de alta presión, que es exactamente el caso de uso de mayor valor."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Estructura perfectamente etiquetada con (Rol), (Contexto), (Tarea), (Restricciones) y (Formato). Cada sección es densa y específica: el Contexto incluye datos numéricos (estadio 20k personas, 60% de venta, 3 semanas), la Tarea especifica 3 ideas con destinatario por área, y el Formato define tabla con columnas exactas."
            },
            "Aplicación a Caso Real": {
              "score": 4,
              "justification": "El prompt aborda un escenario real y urgente de ventas de eventos (concierto estancado al 60% a 3 semanas), que es el corazón del negocio de OCESA. Las tres áreas de trabajo (PR, Digital, BTL) y la restricción de no usar descuentos reflejan lógica real de marketing de eventos masivos."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "La restricción explícita de 'No sugieras descuentos directos de precio (2x1)' es una decisión de diseño sofisticada que protege la propuesta de valor del evento. El foco en FOMO y urgencia como palancas psicológicas muestra comprensión de la psicología del consumidor integrada en el diseño del prompt."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt altamente estructurado con cinco componentes explícitos (Rol, Contexto, Tarea, Restricciones y Formato) para generar estrategias de Guerrilla Marketing orientadas a reactivar ventas de un concierto estancado al 60%. El prompt demuestra dominio técnico de la anatomía del prompt y está directamente alineado con un escenario real del negocio de entretenimiento en vivo.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación de estrategias de marketing disruptivo para reactivación de ventas de eventos masivos con presupuesto limitado.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt es técnicamente impecable y usa un caso de negocio verosímil, pero no hay evidencia de que haya sido ejecutado en un evento real ni de que las ideas generadas hayan sido implementadas en su flujo de trabajo diario; el ejercicio permanece como construcción de prompt, no como solución aplicada.",
          "level_up_suggestion": "Toma el output que generó este prompt en un evento real próximo (por ejemplo, una gira actual de OCESA con venta estancada), documenta cuál de las 3 ideas se implementó y qué resultado tuvo; eso lo convierte en caso de uso real y lo mueve a Alquimista en Práctica."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Toma el output que generó este prompt en un evento real próximo (por ejemplo, una gira actual de OCESA con venta estancada), documenta cuál de las 3 ideas se implementó y qué resultado tuvo; eso lo convierte en caso de uso real y lo mueve a Alquimista en Práctica."
    },
    {
      "id": "100844961474697007897",
      "name": "Miguel Gomez",
      "is_named": true,
      "avg_score": 3.7,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        3.7
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "El principio de 'Validación Crítica' integrado en el prompt (qué preguntas hacerse para cuestionar el output de la IA) es un meta-diseño maduro que pocos estudiantes incorporan.",
            "La consideración de la brecha generacional como restricción de diseño (lenguaje accesible a todas las edades) muestra aplicación contextual sofisticada al entorno real de OCESA."
          ],
          "recommendations": [
            "Completar los placeholders con al menos un caso concreto (ej. área de Prensa y proceso de redacción de notas) para que el prompt sea ejecutable inmediatamente.",
            "Añadir ejemplos concretos del tipo de 'Dinámica de 15 minutos' para anclar mejor el formato de salida esperado."
          ],
          "alchemist_signals": [
            "El estudiante está pensando en la IA como un agente de cambio organizacional, no solo como una herramienta. La restricción de que 'la decisión final depende del humano' refleja una postura ética madura sobre la co-inteligencia."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Estructura clara con Rol (Arquitecto de Innovación), Tarea específica (propuesta de piloto), Contexto rico (brecha generacional, líder de innovación, objetivo de co-inteligencia) y Formato de salida detallado con 4 secciones nombradas. Las 'Restricciones de Co-Inteligencia' como sección separada muestran diseño consciente y avanzado."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El prompt aborda un problema real de adopción de IA en una organización con brecha generacional (Gen Z a Baby Boomers), que es un desafío genuino en OCESA. Sin embargo, el uso de placeholders como [Insertar Área] y [Describir proceso] indica que está parcialmente construido, sin anclar completamente a un caso específico."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "La inclusión del paso obligatorio de 'Validación Crítica' y las restricciones sobre el rol del humano vs la IA demuestran pensamiento meta-cognitivo sobre el uso responsable del modelo. El nombre 'Motor de Co-Inteligencia' y el flujo 'Proceso Actual vs. Proceso Co-Inteligente' revelan una visión sistémica sofisticada."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt maestro tipo plantilla para diseñar propuestas de proyectos piloto de adopción de IA en distintas áreas de marketing, enmarcando a la IA como 'compañero de pensamiento' en lugar de automatización. El prompt incluye estructura de roles, restricciones éticas de co-inteligencia y un formato de salida estandarizado, funcionando como un kit de facilitación para líderes de cambio organizacional.",
          "application_area": "Educación y Capacitación",
          "application_detail": "Diseñado para facilitar la adopción de IA en equipos de marketing con brecha generacional, generando propuestas de pilotos reutilizables por área.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt está muy bien construido estructuralmente y muestra pensamiento estratégico sofisticado, pero es una plantilla genérica con variables sin rellenar (corchetes '[Insertar Área]') que no evidencia aplicación a un proceso de trabajo real y recurrente del estudiante. No hay caso de uso concreto resuelto, sino un artefacto de diseño.",
          "level_up_suggestion": "Aplica este prompt a UN proceso real tuyo —por ejemplo, el onboarding de IA en tu equipo específico— y documenta los resultados obtenidos con evidencia de uso. Eso transformaría la plantilla en un caso de uso vivo y te posicionaría como Alquimista en Práctica."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Educación y Capacitación",
      "level_up_suggestion": "Aplica este prompt a UN proceso real tuyo —por ejemplo, el onboarding de IA en tu equipo específico— y documenta los resultados obtenidos con evidencia de uso. Eso transformaría la plantilla en un caso de uso vivo y te posicionaría como Alquimista en Práctica."
    },
    {
      "id": "108102483717301766206",
      "name": "Jose Luis Salazar",
      "is_named": true,
      "avg_score": 3.7,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        3.7
      ],
      "levels": [
        "Destacado"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.7,
          "level": "Destacado",
          "strengths": [
            "Las restricciones técnicas de consistencia facial demuestran comprensión de las limitaciones de los modelos de generación de imagen, aplicando ingeniería de prompts para mitigar el problema de variación de personaje.",
            "La especificidad de la vestimenta (color rojo, ribete amarillo, logotipo OXXO bordado en blanco y rojo) es un ejemplo de descripción visual de alta precisión que maximiza la fidelidad del output."
          ],
          "recommendations": [
            "Conectar este caso de uso de generación de imágenes más explícitamente a un flujo de trabajo profesional en OCESA (ej. creación de personajes para campañas o contenido de redes sociales).",
            "Explorar cómo este prompt podría evolucionar a un workflow multi-paso: generación del personaje → variaciones de expresión → integración en escenas de evento."
          ],
          "alchemist_signals": [
            "El estudiante aplica ingeniería de prompts a generación de imagen con sofisticación técnica real: entiende el problema de consistencia en AI art y diseña restricciones explícitas para resolverlo. Es pensamiento de producto aplicado a prompting visual."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 4,
              "justification": "Estructura perfectamente etiquetada con [ROL], [TAREA], [CONTEXTO], [RESTRICCIONES] y [FORMATO]. El formato de salida especifica tres planos de imagen (close-up, medium shot, cowboy shot) con escenarios concretos para cada uno. Es uno de los prompts más técnicamente completos del grupo."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El prompt resuelve un caso real de generación de assets visuales consistentes (character sheet) para un personaje de uso recurrente. La especificidad de rasgos físicos, vestimenta OXXO y restricciones de consistencia refleja necesidades reales de producción de contenido visual, aunque el caso es de uso personal/creativo más que directamente de OCESA."
            },
            "Pensamiento de Ingeniero": {
              "score": 4,
              "justification": "Las restricciones de consistencia del rostro (idéntico en todas las tomas, sin vello facial, iluminación de set) demuestran comprensión del problema de inconsistencia en modelos de imagen generativa. La división en 3 planos en una sola imagen es una decisión de diseño sofisticada para maximizar eficiencia del output."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt detallado de ingeniería visual para generar una hoja de referencia de personaje (Character Sheet) con especificaciones técnicas de cine/animación, definiendo rasgos físicos fijos, vestimenta corporativa con identidad de marca y tres encuadres cinematográficos específicos. El activo sirve como referencia visual consistente para un personaje recurrente, útil en producción de contenido, campañas o storytelling de marca.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Generación de personajes visuales consistentes para contenido de marca o campañas con identidad corporativa definida (ej. OXXO).",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt demuestra dominio técnico sólido en estructuración (ROL, TAREA, CONTEXTO, RESTRICCIONES, FORMATO) y especificidad visual cinematográfica, pero el ejercicio es una exploración creativa sin evidencia de aplicación a un problema real y recurrente de su trabajo en OCESA.",
          "level_up_suggestion": "Conecta esta habilidad a un caso de uso real de OCESA: por ejemplo, crea un Character Sheet de un 'host tipo' o mascota para una campaña de evento específico, documentando cómo este activo visual ahorra tiempo en briefings con agencias o proveedores de producción."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Conecta esta habilidad a un caso de uso real de OCESA: por ejemplo, crea un Character Sheet de un 'host tipo' o mascota para una campaña de evento específico, documentando cómo este activo visual ahorra tiempo en briefings con agencias o proveedores de producción."
    },
    {
      "id": "103387490168955358425",
      "name": "Jesus Manuel Romo Ortega",
      "is_named": true,
      "avg_score": 3.0,
      "sprints_count": 1,
      "total_sprints_with_work": 2,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        3.0
      ],
      "levels": [
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "La granularidad de los datos solicitados (precio spot, variación diaria y semanal, comparativa XAU/XAG, precios de Libertad en el mercado mexicano) demuestra conocimiento experto del dominio.",
            "El focus en el mercado mexicano con referencias específicas (Banorte, casas de moneda, premium sobre spot) ancla el prompt en un contexto de uso real y diferenciado."
          ],
          "recommendations": [
            "Agregar una instrucción de verificación de fuentes: que el modelo declare de dónde obtuvo los precios (cotización en tiempo real vs memoria paramétrica) para evitar alucinaciones en datos financieros.",
            "Incluir un Contexto explícito del uso de esta información (¿decisión de compra?, ¿reporte para cliente?, ¿gestión de portafolio?) para calibrar el nivel de detalle y el formato del output."
          ],
          "alchemist_signals": [
            "Señal de especialización de nicho: el dominio de metales preciosos con enfoque en el mercado mexicano es un caso de uso de IA con valor diferencial alto en asesoría de inversión o trading."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene un Rol claro (analista de metales preciosos actualizado al día), una Tarea estructurada en 5 puntos numerados con especificaciones concretas (XAU, XAG, variación diaria/semanal, moneda Libertad, diferencia spot). Es un prompt bien estructurado aunque sin sección de Contexto personal explícita."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El análisis de metales preciosos con foco en el mercado mexicano (moneda Libertad, Banorte, casas de moneda) es específico de su trabajo o interés real. La granularidad de los datos solicitados (premium sobre spot, precios de compra/venta) indica conocimiento del dominio."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "La estructura en 5 puntos con especificaciones técnicas precisas (XAU, XAG, premium típico, diferencia entre spot y precio de moneda) demuestra comprensión de que el modelo necesita instrucciones granulares para producir datos específicos del mercado. Hay diseño consciente del output deseado."
            }
          },
          "work_synthesis": "Jesús construyó un prompt estructurado para obtener análisis completo de precios de metales preciosos (oro y plata) en tiempo real, incluyendo comparativa spot vs. mercado físico mexicano y contexto macroeconómico. El prompt tiene utilidad para seguimiento de inversiones personales o consultoría financiera básica.",
          "application_area": "Otro",
          "application_detail": "Análisis de inversiones en metales preciosos (oro/plata), específicamente monedas Libertad mexicanas — no vinculado directamente al negocio de entretenimiento/eventos de OCESA.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt está bien estructurado con múltiples dimensiones de análisis y demuestra conocimiento técnico del dominio (onza troy, XAU/XAG, premium sobre spot), pero corresponde a un interés personal/financiero sin conexión con su rol en OCESA ni con un problema recurrente de trabajo real.",
          "level_up_suggestion": "Aplica esta misma capacidad de estructurar prompts detallados a un problema real de tu área en OCESA — por ejemplo, análisis de costos de producción, comparativa de proveedores o seguimiento de métricas de eventos — para demostrar valor directo en tu trabajo diario."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Otro",
      "level_up_suggestion": "Aplica esta misma capacidad de estructurar prompts detallados a un problema real de tu área en OCESA — por ejemplo, análisis de costos de producción, comparativa de proveedores o seguimiento de métricas de eventos — para demostrar valor directo en tu trabajo diario."
    },
    {
      "id": "102214830195407912747",
      "name": "Roberto Saldana",
      "is_named": true,
      "avg_score": 3.0,
      "sprints_count": 1,
      "total_sprints_with_work": 2,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        3.0
      ],
      "levels": [
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "Incluye instrucciones explícitas de veracidad que demuestran comprensión de las limitaciones del modelo de lenguaje.",
            "El formato de salida con estatus semáforo (rojo/amarillo/verde) es una solución práctica y profesional para su contexto laboral."
          ],
          "recommendations": [
            "Definir el Rol de forma explícita al inicio del prompt para maximizar el contexto que el modelo recibe desde el primer token.",
            "Agregar más detalles específicos de la industria de entretenimiento/producción de OCESA para evitar que el placeholder quede muy genérico y lograr un nivel Destacado."
          ],
          "alchemist_signals": [
            "Las instrucciones de veracidad y solicitud de claridad muestran que el estudiante ya piensa como un ingeniero de prompts: diseña guardas contra las alucinaciones del modelo."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol implícito (evaluador de proyectos), Contexto claro (empresa con costos operativos altos), Tarea bien definida (evaluar bajo 4 pilares) y Formato de salida estructurado con esquema de estatus/evaluación/feedback. Falta definir el rol de forma explícita al inicio, pero la estructura general es sólida."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El prompt aborda un problema real de evaluación de propuestas de diseño y materiales en producción, con criterios específicos como 'Eficiencia en Materiales' y 'Calidad de Renders'. El placeholder '[PÚBLICO OBJETIVO]' y '[PEGAR AQUÍ LOS DETALLES]' indica que el prompt está listo para uso iterativo en su trabajo."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "Demuestra comprensión del modelo al incluir instrucciones explícitas de veracidad ('No inventes datos', 'Solicitud de Claridad'), lo que evidencia conciencia de las limitaciones del modelo. El diseño en 4 pilares con formato de salida estandarizado refleja pensamiento sistemático."
            }
          },
          "work_synthesis": "Roberto construyó un prompt estructurado para evaluar propuestas de diseño de producción bajo cuatro pilares técnicos (cumplimiento, estética, eficiencia en materiales y calidad de renders), con salidas estandarizadas por semáforo y feedback directo al diseñador. El prompt está diseñado para apoyar decisiones de inversión en materiales dentro de un contexto de costos operativos altos, funcionando como un evaluador sistemático de briefs de diseño.",
          "application_area": "Producción de Eventos",
          "application_detail": "Evaluación de propuestas de diseño y materiales para producción de eventos, optimizando el ROI visual por dólar invertido.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt tiene buena estructura técnica con instrucciones de veracidad y formato de salida definido, pero el placeholder '[PEGAR AQUÍ LOS DETALLES DEL PROYECTO]' indica que aún no está aplicado a un caso de trabajo real y recurrente; es un template bien construido sin evidencia de uso operativo concreto.",
          "level_up_suggestion": "Aplica este prompt a una propuesta de diseño real que ya hayas recibido esta semana, documenta el resultado y compara si la evaluación de la IA coincidió con tu criterio experto; eso lo convierte en un caso de uso validado. Como segundo paso, considera crear un GPT o flujo donde el diseñador mismo pueda pegar su brief y recibir la evaluación sin que tú tengas que intermediar."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Producción de Eventos",
      "level_up_suggestion": "Aplica este prompt a una propuesta de diseño real que ya hayas recibido esta semana, documenta el resultado y compara si la evaluación de la IA coincidió con tu criterio experto; eso lo convierte en un caso de uso validado. Como segundo paso, considera crear un GPT o flujo donde el diseñador mismo pueda pegar su brief y recibir la evaluación sin que tú tengas que intermediar."
    },
    {
      "id": "102542173536207744885",
      "name": "Rodrigo Tellez Cabrera",
      "is_named": true,
      "avg_score": 3.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        3.0
      ],
      "levels": [
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "La instrucción de reencuadre conceptual ('estilo de vida vs. logos') es una técnica de prompting avanzada que guía al modelo hacia un pensamiento estratégico, no descriptivo.",
            "El prompt es conciso pero efectivo, demostrando capacidad de síntesis para el caso de ventas de patrocinios en festivales reales de OCESA."
          ],
          "recommendations": [
            "Expandir el Contexto con datos específicos del público del Corona Capital (edad, comportamiento de compra, afinidad de marcas) para enriquecer el análisis psicológico.",
            "Agregar una segunda tarea de iteración donde el modelo refine el párrafo narrativo según feedback, construyendo un workflow de dos pasos."
          ],
          "alchemist_signals": [
            "El uso de reencuadre ('no logos, sino conexión con estilo de vida') muestra que el estudiante entiende cómo orientar el modelo hacia outputs de alto valor estratégico en negociaciones comerciales."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol (Senior Strategic Planner de OCESA), Tarea (definir 3 razones psicológicas), un Enfoque diferenciador y Formato de salida (párrafo narrativo). Los elementos están presentes pero comprimidos; el Contexto podría ser más rico y las instrucciones más granulares."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "Menciona Corona Capital y la industria automotriz, que son actores reales del ecosistema OCESA. El enfoque en psicología del consumidor y 'conectar con estilo de vida' en lugar de 'logos' refleja conocimiento real del mundo de patrocinios. Los placeholders indican adaptabilidad para múltiples festivales."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "La instrucción de reencuadre ('No hables de logos, habla de conectar con el estilo de vida') es una decisión de diseño consciente que dirige al modelo hacia un output diferenciado y de mayor valor comercial. Muestra comprensión de que el framing importa para el resultado."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado para generar argumentos de venta estratégicos que justifiquen inversión de patrocinio en festivales de OCESA, dirigido a tomadores de decisiones de industrias específicas. El prompt es reutilizable como plantilla comercial para el equipo de ventas de patrocinios.",
          "application_area": "Ventas y Propuestas",
          "application_detail": "Generación de argumentos estratégicos de patrocinio para presentaciones a marcas potenciales en festivales como Corona Capital.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt tiene buena estructura y variables reemplazables [CORONA CAPITAL], [AUTOMOTRIZ], lo que muestra comprensión de ingeniería de prompting. Sin embargo, no hay evidencia de que este prompt se haya usado en un caso de trabajo real ni de que produzca un output concreto integrado a un flujo de ventas existente.",
          "level_up_suggestion": "Aplica este prompt a una propuesta de patrocinio real que estés preparando en OCESA y documenta el output generado. Como siguiente paso, encadena este prompt con uno que genere el deck ejecutivo completo o el correo de seguimiento, creando un mini-flujo de ventas reutilizable por tu equipo."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Ventas y Propuestas",
      "level_up_suggestion": "Aplica este prompt a una propuesta de patrocinio real que estés preparando en OCESA y documenta el output generado. Como siguiente paso, encadena este prompt con uno que genere el deck ejecutivo completo o el correo de seguimiento, creando un mini-flujo de ventas reutilizable por tu equipo."
    },
    {
      "id": "108863553751009295415",
      "name": "Fernando Dominguez",
      "is_named": true,
      "avg_score": 3.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        3.0
      ],
      "levels": [
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El workflow de 4 pasos (Analizar, Conectar, Humanizar, Proyectar) es una cadena de razonamiento bien diseñada que guía al modelo a través de un proceso de análisis progresivo.",
            "La restricción de identificar a Fernando como líder y el tono 'que empodere, no que juzgue' muestra personalización del output al contexto organizacional específico del estudiante."
          ],
          "recommendations": [
            "Separar más claramente el CONTEXT (situación) del GOAL (objetivo) para que el modelo diferencie qué información es input y qué es el resultado esperado.",
            "Agregar el formato de la 'Tabla de Hitos' con columnas de ejemplo para que el output sea consistente entre usos mensuales del prompt."
          ],
          "alchemist_signals": [
            "El paso de 'Humanizar' (traducir logros numéricos en impacto para la comunidad) es una instrucción sofisticada que demuestra que el estudiante entiende el poder de la narrativa en reportes estratégicos, más allá de solo los datos."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "Usa headers # ROLE, # CONTEXT, # GOAL con claridad y el workflow está numerado con pasos accionables. El formato de salida especifica 4 secciones nombradas. Sin embargo, la Tarea y el Objetivo están fusionados sin distinguirse completamente, y las restricciones están algo dispersas."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El prompt aborda la generación de informes mensuales integrados de Pauta, Alianzas y RRSS, que es un entregable real de un área de marketing. La mención de 'Fernando como líder de estrategia' y el 'Enfoque Filantrópico' sugieren personalización a un cliente o contexto organizacional específico."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "El workflow de 4 pasos (Analizar → Conectar → Humanizar → Proyectar) muestra pensamiento de diseño de proceso. La restricción de tratar datos faltantes con 'nota constructiva' demuestra conciencia de que el modelo puede alucinar al no tener datos. Es sólido pero sin el nivel de sofisticación técnica de los prompts Destacado."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado tipo sistema para automatizar la generación de informes mensuales integrados que cruzan datos de Pauta, Alianzas y Redes Sociales en una narrativa ejecutiva con recomendaciones tácticas. El prompt define un workflow de 4 pasos (analizar, conectar, humanizar, proyectar) con formato de salida específico, restricciones de tono y manejo de datos faltantes, lo que lo convierte en una plantilla reutilizable para reporteo estratégico.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Reportes mensuales integrados de pauta publicitaria, alianzas estratégicas y redes sociales con análisis cruzado y recomendaciones tácticas.",
          "maturity_level": "Alquimista en Práctica",
          "maturity_justification": "El prompt resuelve un caso de uso real y recurrente (informe mensual de su área) con estructura de workflow multi-paso, formato de salida definido y manejo de casos edge (datos faltantes). Va más allá del prompting básico al incorporar lógica condicional y un rol contextualizado con nombre real del líder, evidenciando aplicación directa al trabajo diario.",
          "level_up_suggestion": "Para escalar a Alquimista Destacado, convierte este prompt en un GPT personalizado que otros miembros del equipo puedan usar directamente pegando sus propios datos, sin necesidad de copiar y configurar el prompt cada vez. Agrega instrucciones de cómo estructurar el input de datos para que el sistema sea completamente autónomo."
        }
      },
      "maturity_level": "Alquimista en Práctica",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Para escalar a Alquimista Destacado, convierte este prompt en un GPT personalizado que otros miembros del equipo puedan usar directamente pegando sus propios datos, sin necesidad de copiar y configurar el prompt cada vez. Agrega instrucciones de cómo estructurar el input de datos para que el sistema sea completamente autónomo."
    },
    {
      "id": "117171587541111185611",
      "name": "Fernanda Ximena Gomez Gomez",
      "is_named": true,
      "avg_score": 3.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        3.0
      ],
      "levels": [
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 3.0,
          "level": "Competente",
          "strengths": [
            "El prompt funciona como una herramienta de negociación: genera ammunition analítica para cuestionar propuestas de proveedores, lo cual tiene valor comercial directo en el trabajo.",
            "La tabla comparativa con 4 columnas es un formato de output elegante y ejecutable que puede usarse directamente en reuniones de auditoría."
          ],
          "recommendations": [
            "Añadir Contexto con el tipo de servicios específicos que se auditarán (producción de eventos, servicios de marketing, tecnología) para que el modelo calibre los benchmarks de mercado correctamente.",
            "Considerar agregar una sección de 'Alternativas Recomendadas' como quinta columna en la tabla para que el output no solo critique sino que proponga soluciones."
          ],
          "alchemist_signals": [
            "El concepto del 'Filtro de Justicia' como nombre del prompt muestra que el estudiante está construyendo un arsenal de herramientas con nombres y funciones claras, lo cual es pensamiento de diseño de sistemas de IA."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol (Auditor de Proyectos Senior), Tarea (comparar propuesta vs benchmarks, identificar 3 costos inflados) y Formato de salida (tabla comparativa de 4 columnas). Falta un Contexto más desarrollado sobre la industria o el tipo de propuestas que maneja, y el prompt es relativamente corto."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El prompt resuelve un problema real de auditoría de propuestas de agencias, que es un desafío frecuente en OCESA al contratar servicios. Los 15 años de experiencia del Rol y la detección de 'servicios ambiguos' sugieren un uso frecuente y profesional, aunque sin datos específicos de OCESA."
            },
            "Pensamiento de Ingeniero": {
              "score": 3,
              "justification": "La especificación de '3 puntos de costos inflados' como output delimitado es una decisión de diseño consciente que evita outputs excesivos o vagos. El formato tabla con columnas específicas (Concepto, Costo Propuesto, Costo Estimado, Observación) demuestra comprensión de cómo estructurar outputs útiles."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado que simula un auditor senior para comparar propuestas de agencias contra benchmarks de mercado, identificando costos inflados o descripciones ambiguas. Su utilidad práctica es servir como 'filtro de negociación' antes de aprobar presupuestos con proveedores externos.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Auditoría y validación de propuestas de agencias y proveedores para detectar sobrecostos antes de aprobar presupuestos.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt tiene buena estructura (rol, tarea, output específico con tabla) y evidencia comprensión de ingeniería de prompting, pero usa variables en corchetes como marcadores vacíos sin mostrar que lo aplicó a un caso real de su trabajo en OCESA con datos concretos.",
          "level_up_suggestion": "Aplica este prompt a una propuesta real de proveedor que hayas recibido recientemente en OCESA, incluyendo los datos reales de la propuesta y benchmarks históricos internos, y documenta si el output cambió alguna decisión de compra o negociación."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Gestión de Proyectos",
      "level_up_suggestion": "Aplica este prompt a una propuesta real de proveedor que hayas recibido recientemente en OCESA, incluyendo los datos reales de la propuesta y benchmarks históricos internos, y documenta si el output cambió alguna decisión de compra o negociación."
    },
    {
      "id": "112880746027068223653",
      "name": "Miranda Ramirez Camacho",
      "is_named": true,
      "avg_score": 2.7,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        2.7
      ],
      "levels": [
        "Competente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.7,
          "level": "Competente",
          "strengths": [
            "El contexto del target ('instagrammable pero con profundidad narrativa', 'diferenciación por exclusividad y misterio') es una descripción psicográfica sofisticada que guía al modelo hacia comunicación de alto valor.",
            "Mencionar el nombre real del proyecto ('Lexus') y la ciudad (CDMX) ancla el prompt en una realidad operativa concreta."
          ],
          "recommendations": [
            "Eliminar la instrucción de 'buscar casos de éxito en la web' y reemplazarla por descripción del estilo de comunicación deseado o ejemplos de referencia concretos proporcionados en el prompt.",
            "Agregar Formato de salida explícito especificando el canal (ads vs. mailing), la extensión esperada de cada ángulo y el tono para cada uno."
          ],
          "alchemist_signals": [
            "El estudiante ya diseña prompts orientados a lanzamientos reales con segmentación psicográfica. Cuando incorpore comprensión de la memoria paramétrica del modelo, sus prompts darán el salto a nivel Destacado."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 3,
              "justification": "El prompt tiene Rol (Senior Growth Strategist), Contexto con datos del target (profesionales 25-35, mercado saturado, diferenciación por exclusividad y misterio) y Tarea (secuencia de 3 ángulos de comunicación). Falta un Formato de salida explícito, y la instrucción de 'puedes basarte en históricos de casos de éxito de la web' añade ambigüedad innecesaria."
            },
            "Aplicación a Caso Real": {
              "score": 3,
              "justification": "El prompt aborda el lanzamiento de 'Lexus', una experiencia de teatro inmersivo real en CDMX, con un desafío concreto (agotar preventa). El segmento de público está bien definido y el problema de diferenciación en mercado saturado es auténtico. Es aplicación real aunque podría tener más datos operativos."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "La instrucción de 'no sentirse como venta forzada' muestra conciencia del tono, pero la petición de 'basarse en casos de éxito de la web' revela que el estudiante no comprende aún que el modelo trabaja con memoria paramétrica, no busca en internet en tiempo real. Esto reduce el puntaje de comprensión del modelo."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado para generar una estrategia de comunicación de lanzamiento para 'Lexus', una experiencia de teatro inmersivo en CDMX. El prompt define rol, contexto de negocio, audiencia objetivo y solicita ángulos de comunicación diferenciados para redes sociales y mailing, orientado a agotar preventa de forma orgánica.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Estrategia de lanzamiento y comunicación para evento de entretenimiento inmersivo dirigido a millennials urbanos.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt tiene buena estructura (rol + contexto + objetivo + audiencia) y está anclado a un caso real de OCESA, lo que es prometedor. Sin embargo, sigue siendo un ejercicio de construcción de prompt, no una solución recurrente integrada al flujo de trabajo diario; además incluye una instrucción ambigua ('casos de éxito que encuentres en la web') que evidencia exploración básica del uso de la herramienta.",
          "level_up_suggestion": "Para subir de nivel, toma el output que generó este prompt y úsalo realmente en la campaña de Lexus: documenta qué ángulo funcionó mejor, itera el prompt con esos aprendizajes y conviértelo en una plantilla reutilizable para futuros lanzamientos de OCESA."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Para subir de nivel, toma el output que generó este prompt y úsalo realmente en la campaña de Lexus: documenta qué ángulo funcionó mejor, itera el prompt con esos aprendizajes y conviértelo en una plantilla reutilizable para futuros lanzamientos de OCESA."
    },
    {
      "id": "110740748897478671154",
      "name": "Mayra Ivette Herrera Galvan Mendoza",
      "is_named": true,
      "avg_score": 2.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        2.0
      ],
      "levels": [
        "En Desarrollo"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.0,
          "level": "En Desarrollo",
          "strengths": [
            "El prompt incluye la solicitud de 'ajustes si la planeación no es realista', lo cual es una instrucción inteligente que pide al modelo razonamiento crítico sobre sus propias propuestas.",
            "Los cuatro sub-requerimientos de la tarea están bien articulados y cubren un proceso de planeación completo (priorización, distribución, riesgos, ajustes)."
          ],
          "recommendations": [
            "Agregar un Rol específico para el modelo (ej. 'Actúa como un Senior Project Manager con experiencia en agencias digitales de entretenimiento') para obtener outputs más calibrados.",
            "Incluir datos concretos del equipo real: número de personas, horas disponibles, proyectos en curso con nombres y fechas, para que el output sea directamente aplicable."
          ],
          "alchemist_signals": [
            "El prompt tiene la intención correcta pero le falta la especificidad que lo haría realmente útil. El siguiente paso es inyectar los datos reales del equipo y proyecto para transformarlo de plantilla genérica a herramienta de trabajo."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 2,
              "justification": "El prompt tiene Contexto (Project Manager en agencia digital) y Tarea con 4 sub-requerimientos, pero carece de Rol definido para el modelo y el Formato está especificado solo superficialmente ('tabla clara con recomendaciones'). La estructura es funcional pero básica."
            },
            "Aplicación a Caso Real": {
              "score": 2,
              "justification": "Menciona ser Project Manager en agencia digital, lo cual es más cercano al contexto real que un prompt genérico, pero no incluye detalles específicos de OCESA, nombres de proyectos reales, capacidades concretas del equipo o fechas. El nivel de personalización es superficial."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "La solicitud de identificar riesgos de sobrecarga y ajustes si la planeación no es realista muestra cierto pensamiento de diseño, pero no hay evidencia de iteración, comprensión de limitaciones del modelo ni decisiones de diseño sofisticadas."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado para asistir en la planeación semanal de proyectos, orientado a priorizar tareas, distribuir carga de trabajo y detectar riesgos de sobrecarga. Aunque el prompt tiene estructura clara con contexto y requerimientos definidos, carece de datos reales (proyectos, horas, deadlines) que lo conviertan en una herramienta operativa aplicada a su trabajo diario.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Planeación semanal de proyectos en agencia digital con múltiples clientes y niveles de urgencia.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt demuestra comprensión de la anatomía básica (contexto, rol, necesidades, formato de salida), pero no incluye datos reales del trabajo —proyectos actuales, miembros del equipo, horas disponibles— lo que lo mantiene como ejercicio conceptual y no como una solución aplicada a un problema concreto y recurrente.",
          "level_up_suggestion": "Incorpora al prompt datos reales de tu semana: nombres de proyectos, tareas pendientes, horas disponibles por persona y fechas límite; con eso pasarás de un template genérico a una herramienta que resuelve tu problema operativo real cada lunes."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Gestión de Proyectos",
      "level_up_suggestion": "Incorpora al prompt datos reales de tu semana: nombres de proyectos, tareas pendientes, horas disponibles por persona y fechas límite; con eso pasarás de un template genérico a una herramienta que resuelve tu problema operativo real cada lunes."
    },
    {
      "id": "114353135574688787995",
      "name": "Mariana Resendiz",
      "is_named": true,
      "avg_score": 2.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        2.0
      ],
      "levels": [
        "En Desarrollo"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.0,
          "level": "En Desarrollo",
          "strengths": [
            "Las tres categorías de trabajo (Conexión Social, Análisis Profundo, Gestión de Crisis) son una taxonomía funcional con definiciones claras que guían al modelo hacia una clasificación útil.",
            "El concepto es práctico y directamente aplicable a la gestión del día a día en OCESA, lo cual indica que el estudiante identifica problemas reales que la IA puede resolver."
          ],
          "recommendations": [
            "Agregar Contexto específico del rol en OCESA y un ejemplo real de lista de tareas como input para hacer el prompt inmediatamente utilizable.",
            "Añadir instrucciones de Formato de salida (tabla, lista con colores, tiempo estimado por bloque) y un criterio de priorización dentro de cada categoría."
          ],
          "alchemist_signals": [
            "El concepto del prompt es valioso y el estudiante tiene clara intuición sobre los tipos de trabajo que requieren diferentes enfoques cognitivos. El siguiente paso es desarrollar esa intuición en un prompt completo y operativo."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 2,
              "justification": "El prompt tiene Rol (experto en Productividad Ágil) y una Tarea con 3 categorías de clasificación bien nombradas. Sin embargo, no hay Contexto específico del trabajo real ni Formato de salida detallado más allá de la clasificación en bloques. La estructura es básica."
            },
            "Aplicación a Caso Real": {
              "score": 2,
              "justification": "El prompt menciona 'Gestión de Crisis (Dudas/Faltantes)' que podría ser relevante al contexto de operaciones de eventos, pero el placeholder '[PEGAR TU LISTA]' sin ningún ejemplo y la ausencia de detalles de OCESA indican que no fue personalizado a un caso real específico."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "Las tres categorías de clasificación tienen definiciones cortas (ej. 'Requieren calidez y rapidez', 'Requieren foco total') que guían el razonamiento del modelo de forma básica. Sin embargo, no hay evidencia de diseño consciente de flujo, iteración o comprensión de limitaciones del modelo."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt de clasificación de tareas y correos en tres categorías funcionales (social, análisis y crisis) orientado a organizar la carga de trabajo diaria. El sistema busca priorizar según el tipo de atención que requiere cada actividad, pero aún depende de que el usuario pegue manualmente su lista sin aplicarlo a un contexto laboral específico de OCESA.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Organización y priorización de tareas operativas diarias",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt muestra comprensión de estructura básica con roles y categorías, pero usa un placeholder genérico '[PEGAR TU LISTA]' sin anclar el caso a un problema real y recurrente de su trabajo en OCESA. No hay evidencia de aplicación en un flujo laboral concreto.",
          "level_up_suggestion": "Sustituye el placeholder por un ejemplo real de tu bandeja de entrada o lista de pendientes de un día típico en OCESA, y agrega una instrucción de output que indique prioridad y tiempo estimado por bloque para hacerlo accionable de inmediato."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Gestión de Proyectos",
      "level_up_suggestion": "Sustituye el placeholder por un ejemplo real de tu bandeja de entrada o lista de pendientes de un día típico en OCESA, y agrega una instrucción de output que indique prioridad y tiempo estimado por bloque para hacerlo accionable de inmediato."
    },
    {
      "id": "104570289294903597082",
      "name": "Valeria Moreno",
      "is_named": true,
      "avg_score": 2.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        2.0
      ],
      "levels": [
        "En Desarrollo"
      ],
      "sprints": {
        "sprint_1": {
          "score": 2.0,
          "level": "En Desarrollo",
          "strengths": [
            "El núcleo del prompt (emociones → material físico → temperatura de color) es una cadena de asociación creativa sofisticada que refleja comprensión del proceso de diseño basado en psicología.",
            "La especificidad de pedir temperatura de color exacta (no solo 'colores cálidos') muestra pensamiento de diseñador aplicado a la instrucción del modelo."
          ],
          "recommendations": [
            "Agregar Rol específico para el modelo (ej. 'Actúa como un Director de Arte con experiencia en producción de eventos de entretenimiento') para obtener respuestas calibradas al contexto de OCESA.",
            "Incluir Formato de salida estructurado (tabla o lista con secciones para cada emoción) y un Contexto de quién es el público objetivo del brief analizado."
          ],
          "alchemist_signals": [
            "El prompt revela una mente creativa con pensamiento sensorial y estratégico (relacionar emoción con material físico). Si estructura esta intuición con la arquitectura de prompt completa, puede construir una herramienta de briefing creativo poderosa para producción de eventos."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 2,
              "justification": "El prompt tiene una Tarea clara (analizar brief, extraer 3 emociones, relacionar con material y temperatura de color) y un criterio de justificación (psicología del consumidor). Sin embargo, no tiene Rol definido para el modelo, no tiene Contexto de la industria o empresa, y el Formato de salida no está especificado."
            },
            "Aplicación a Caso Real": {
              "score": 2,
              "justification": "El prompt es relevante para un profesional de diseño o producción creativa que trabaja con briefs y materiales, lo cual podría ser parte de su rol en OCESA. Sin embargo, sin Contexto adicional es difícil confirmar la aplicación directa al trabajo real, y el brief en sí mismo no está proporcionado."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "La instrucción de 'justificar basada en psicología del consumidor' es una técnica de dirección del razonamiento del modelo que muestra cierta comprensión del prompting. Sin embargo, el prompt es muy corto y no evidencia iteración ni diseño consciente de un flujo de trabajo."
            }
          },
          "work_synthesis": "Valeria construyó un prompt orientado al análisis emocional de briefs creativos, buscando traducir emociones a elementos visuales como materiales físicos y temperaturas de color. El ejercicio muestra comprensión de estructura de prompt con instrucciones encadenadas, pero se queda en un caso hipotético sin ancla a un proyecto real de OCESA.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Análisis emocional de briefs para guías de dirección de arte o identidad visual de eventos",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt demuestra conocimiento de técnicas como encadenamiento de tareas y justificación basada en marco teórico (psicología del consumidor), pero no hay evidencia de que se haya aplicado a un brief real de trabajo ni de que resuelva un problema recurrente en su rol.",
          "level_up_suggestion": "Toma un brief real de un evento próximo de OCESA, aplica este prompt y comparte el output con tu equipo para validar si cambió alguna decisión creativa. Ese resultado concreto es lo que transforma el ejercicio en caso de uso real."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Toma un brief real de un evento próximo de OCESA, aplica este prompt y comparte el output con tu equipo para validar si cambió alguna decisión creativa. Ese resultado concreto es lo que transforma el ejercicio en caso de uso real."
    },
    {
      "id": "110283996774674465315",
      "name": "Maria Fernanda Rivera Pinal",
      "is_named": true,
      "avg_score": 1.7,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        1.7
      ],
      "levels": [
        "En Desarrollo"
      ],
      "sprints": {
        "sprint_1": {
          "score": 1.7,
          "level": "En Desarrollo",
          "strengths": [
            "El estudiante identifica correctamente los cuatro componentes básicos del prompt (Rol, Contexto, Tarea, Formato) y los aplica en un solo párrafo fluido.",
            "La especificación del tono ('cercano y motivador') y la restricción de presupuesto son señales de que el estudiante entiende que los parámetros de diseño importan."
          ],
          "recommendations": [
            "Reconstruir el prompt aplicado a un caso real de trabajo en OCESA: un lanzamiento de campaña para un evento, una estrategia de patrocinios, o cualquier desafío del trabajo diario.",
            "Desarrollar cada sección (Rol, Contexto, Tarea, Formato) con etiquetas explícitas y más detalle para practicar la estructura completa del prompt."
          ],
          "alchemist_signals": [
            "El estudiante domina el concepto de estructura básica, pero necesita dar el salto de los ejercicios genéricos a los casos reales de su trabajo en OCESA para desbloquear el valor profesional del prompting."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 2,
              "justification": "El prompt tiene Rol (experto en marketing digital), Contexto (marca de café artesanal en Instagram), Tarea (plan de contenido semana 1) y Formato (tabla), lo cual es correcto. Sin embargo, es muy genérico y no presenta la estructura diferenciada con etiquetas claras ni desarrollo de cada sección."
            },
            "Aplicación a Caso Real": {
              "score": 1,
              "justification": "El prompt trata de lanzar una marca de café artesanal en Instagram, que no tiene relación con el trabajo en OCESA (entretenimiento). No hay personalización al contexto profesional real del estudiante ni a la industria de eventos masivos."
            },
            "Pensamiento de Ingeniero": {
              "score": 2,
              "justification": "Hay elementos básicos de ingeniería de prompts (formato tabla, tono específico, restricción de presupuesto bajo) pero es un prompt de primer nivel sin evidencia de iteración o decisiones de diseño conscientes sobre el modelo."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt estructurado para generar un plan de contenido semanal en Instagram para una marca de café artesanal, incorporando elementos como rol, formato de salida, restricciones de presupuesto y tono. El ejercicio demuestra comprensión básica de la anatomía del prompt, aunque el caso de uso no está vinculado a su trabajo en OCESA.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Planificación de contenido para redes sociales de marca pequeña, externo al contexto OCESA.",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El prompt tiene estructura correcta (rol, contexto, formato, restricciones, tono) y muestra dominio técnico básico de prompting, pero el caso de uso es un ejercicio genérico desconectado de su trabajo diario en la empresa de entretenimiento.",
          "level_up_suggestion": "Aplica esta misma estructura de prompt a un reto real de tu rol en OCESA, por ejemplo generando un plan de contenido para un evento o artista específico de la cartera. Conectar la habilidad adquirida a un problema recurrente de tu trabajo diario es el salto hacia 'Alquimista en Práctica'."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Aplica esta misma estructura de prompt a un reto real de tu rol en OCESA, por ejemplo generando un plan de contenido para un evento o artista específico de la cartera. Conectar la habilidad adquirida a un problema recurrente de tu trabajo diario es el salto hacia 'Alquimista en Práctica'."
    },
    {
      "id": "115916603979959017305",
      "name": "Gerardo Mendez",
      "is_named": true,
      "avg_score": 1.3,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        1.3
      ],
      "levels": [
        "Emergente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 1.3,
          "level": "Emergente",
          "strengths": [
            "La experiencia descrita muestra uso real y efectivo de la IA en el trabajo, lo cual es el objetivo final del programa.",
            "La capacidad de iterar (agregar contexto, recursos y deadlines) demuestra comprensión intuitiva del proceso de refinamiento de prompts."
          ],
          "recommendations": [
            "Traducir esa experiencia exitosa en un prompt estructurado con Rol, Contexto, Tarea y Formato explícitos, para poder replicarlo de forma consistente.",
            "Para el siguiente sprint, presentar el prompt como texto formal con etiquetas, no como una descripción de la experiencia de uso."
          ],
          "alchemist_signals": [
            "El estudiante ya usa la IA de forma efectiva en su trabajo diario, que es el resultado más importante del programa. El siguiente paso es sistematizar esas interacciones en prompts replicables que pueda compartir con su equipo."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 1,
              "justification": "La respuesta describe una experiencia de uso de IA pero no presenta un prompt construido. El prompt mencionado ('¿Me ayudas a extraer el texto para tener un slide en PowerPoint?') es una pregunta conversacional sin estructura de Rol, Contexto, Tarea ni Formato."
            },
            "Aplicación a Caso Real": {
              "score": 2,
              "justification": "La anécdota muestra aplicación real de IA a un problema de trabajo (construir una presentación), lo cual indica comprensión del valor práctico. Sin embargo, el prompt enviado no refleja el aprendizaje del sprint sobre estructura de prompts."
            },
            "Pensamiento de Ingeniero": {
              "score": 1,
              "justification": "Describe haber 'agregado contexto de la presentación, recursos disponibles y deadlines' de forma conversacional, lo que muestra comprensión intuitiva pero no ingeniería consciente de prompts. No hay evidencia del proceso de diseño estructurado aprendido en el sprint."
            }
          },
          "work_synthesis": "El estudiante utilizó IA para convertir notas escritas a mano en una presentación de PowerPoint con plan de trabajo estructurado, logrando en ~10 minutos un entregable que normalmente requiere mayor inversión de tiempo. El caso demuestra uso espontáneo de IA en contexto real, aunque el prompt compartido es rudimentario y no evidencia dominio de ingeniería de prompting.",
          "application_area": "Gestión de Proyectos",
          "application_detail": "Generación rápida de presentaciones y planes de trabajo a partir de notas informales para validación con equipo",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "Aunque el caso de uso tiene aplicación real y genera valor tangible, el prompt presentado es básico ('¿Me ayudas a extraer el texto?') y el estudiante no demuestra construcción estructurada de prompts con los elementos del framework (contexto, rol, restricciones, formato). La narrativa describe el resultado más que la técnica aplicada.",
          "level_up_suggestion": "Documenta y comparte el prompt completo con todos sus componentes (contexto, instrucción, formato esperado, restricciones) para que un compañero pueda replicar exactamente el mismo resultado sin necesitar adaptarlo. Esto te moverá de usuario ocasional a referente de buenas prácticas dentro del equipo."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Gestión de Proyectos",
      "level_up_suggestion": "Documenta y comparte el prompt completo con todos sus componentes (contexto, instrucción, formato esperado, restricciones) para que un compañero pueda replicar exactamente el mismo resultado sin necesitar adaptarlo. Esto te moverá de usuario ocasional a referente de buenas prácticas dentro del equipo."
    },
    {
      "id": "107054313229103567205",
      "name": "Ingrid Elisabeth Aquino Rodriguez",
      "is_named": true,
      "avg_score": 1.0,
      "sprints_count": 1,
      "total_sprints_with_work": 1,
      "alchemist_class": "🧪 Aprendiz Activo",
      "progression": 0,
      "scores": [
        1.0
      ],
      "levels": [
        "Emergente"
      ],
      "sprints": {
        "sprint_1": {
          "score": 1.0,
          "level": "Emergente",
          "strengths": [
            "El fragmento de rol muestra orientación correcta hacia el contexto de OCESA y patrocinios creativos, lo cual indica comprensión del dominio temático.",
            "La mención de 'monetización de experiencias premium para fans' refleja conocimiento del negocio, aunque no fue desarrollado en un prompt funcional."
          ],
          "recommendations": [
            "Completar el prompt con las secciones de Contexto (datos del evento/marca), Tarea (qué debe generar el modelo) y Formato de salida antes de submitter.",
            "Revisar los ejemplos de compañeros destacados para ver cómo se estructura un prompt completo en el contexto de patrocinios."
          ],
          "alchemist_signals": [
            "El inicio del rol es prometedor; el potencial está ahí. Con solo completar las secciones faltantes, este prompt podría escalar a nivel Competente o Destacado dado el contexto relevante de OCESA que ya identificó."
          ],
          "criteria": {
            "Estructura del Prompt": {
              "score": 1,
              "justification": "La respuesta del estudiante se limita a una sola línea de Rol sin desarrollar Contexto, Tarea ni Formato. El texto restante son las instrucciones del evaluador dentro del prompt, no texto del estudiante. Esencialmente no hay un prompt construido."
            },
            "Aplicación a Caso Real": {
              "score": 1,
              "justification": "El fragmento de rol menciona OCESA y 'Creative Sponsoring', lo cual indica cierta conciencia del contexto, pero sin una tarea ni problema concreto planteado, no se puede evaluar aplicación real."
            },
            "Pensamiento de Ingeniero": {
              "score": 1,
              "justification": "No hay evidencia de iteración, decisiones de diseño ni comprensión del funcionamiento del modelo. La respuesta incompleta sugiere que el estudiante no llegó a construir el prompt completo."
            }
          },
          "work_synthesis": "El estudiante construyó un prompt con rol especializado en marketing comercial y patrocinios para eventos masivos, posicionando a la IA como estratega experta en monetización de experiencias premium. El prompt establece un contexto profesional relevante para OCESA, pero se presenta incompleto: solo define el rol sin incluir tarea, contexto de problema, ni output esperado.",
          "application_area": "Marketing y Contenido",
          "application_detail": "Estrategia de patrocinios creativos y monetización de experiencias para fans en eventos masivos",
          "maturity_level": "Aprendiz Activo",
          "maturity_justification": "El estudiante demuestra comprensión básica de la técnica de role-prompting, pero el prompt carece de los elementos esenciales de un prompt completo (tarea concreta, contexto, formato de salida). No hay evidencia de aplicación a un problema real de trabajo ni de resultados obtenidos.",
          "level_up_suggestion": "Completa el prompt añadiendo un problema específico real de tu trabajo diario —por ejemplo: 'Necesito crear una propuesta de patrocinio para [evento X] con [presupuesto Y] dirigida a [marca Z]'— e incluye el formato de respuesta esperado (presentación, tabla comparativa, brief). Así pasas de definir el rol a resolver un problema concreto."
        }
      },
      "maturity_level": "Aprendiz Activo",
      "primary_area": "Marketing y Contenido",
      "level_up_suggestion": "Completa el prompt añadiendo un problema específico real de tu trabajo diario —por ejemplo: 'Necesito crear una propuesta de patrocinio para [evento X] con [presupuesto Y] dirigida a [marca Z]'— e incluye el formato de respuesta esperado (presentación, tabla comparativa, brief). Así pasas de definir el rol a resolver un problema concreto."
    }
  ],
  "sprint_details": {}
};
