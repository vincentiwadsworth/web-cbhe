# Web CBHE - Plan de Trabajo etapa 1

## 1. Contexto y Objetivos

**Contexto:** El sitio web actual de la CBHE, aunque funcional, proyecta una imagen anticuada (estética 2012-2016) y presenta deficiencias críticas en la experiencia de usuario, especialmente en dispositivos móviles. La auditoría inicial revela una jerarquía visual confusa, sobrecarga de información y una base tecnológica que requiere actualización (Joomla 3).

**Objetivos Estratégicos:**

1. **Modernizar la Identidad Digital:** Renovar el sitio web para que refleje el liderazgo y la visión de futuro de la CBHE en el sector energético.
2. **Mejorar la Experiencia de Usuario (UX):** Ofrecer una navegación intuitiva, clara y totalmente adaptada a dispositivos móviles (responsive).
3. **Fortalecer la Propuesta de Valor:** Proponer un rediseño del contenido para comunicar eficazmente los beneficios, servicios y eventos a los afiliados y al público general.
4. **Diseñar Minimum Viable Product (MVP) en JavaScript para validar diseño:** Plasmar pasos anteriores en una web responsive y profesional para validar propuesta de valor con la dirección ejecutiva de la CBHE.

---

## 2. Alcance del Proyecto

### Tecnología

- **Plataforma:** Migración de Joomla 3.10 a Joomla 4.
- **Servidor:** Asegurar compatibilidad con PHP 7.0.14-2 o superior.

### Rediseño Visual y de Usabilidad (Basado en Auditoría)

- **Layout y Estructura:**
  - Eliminar el fondo con gradiente y adoptar un fondo limpio y neutro (#f8f9fa o #ffffff).
  - Unificar los elementos de navegación duplicados (botones y círculos) en una única sección de "Accesos Directos" clara y visualmente atractiva (grid de tarjetas).
  - Introducir un contenedor principal con espaciado adecuado (padding/margin) para dar "aire" al contenido y mejorar la legibilidad en todas las pantallas.
- **Consistencia Visual (UI):**
  - Estandarizar la tipografía y los botones en todo el sitio.
  - Rediseñar el pie de página (footer) para que sea moderno y funcional, con información organizada en columnas.

### Arquitectura de Contenido y Navegación (Basado en Relevamiento)

**Menú Principal:**

- **CBHE:**
  - Mantener todos los sub-links actuales.
  - **Agregar:** "Empresas Afiliadas".
- **INFORMACIÓN DE LA INDUSTRIA:**
  - Mantener: "Datos de Bolivia", "Mapas del Sector", "Documentos de interés".
- **SALA DE PRENSA:**
  - Mantener contenido actual.
  - **Agregar:** Blog de noticias con capacidad para compartir en redes sociales.
- **SERVICIOS:**
  - Mantener: "WEBINARS".
  - **Agregar:** "Convenio Manzana 40" (formato landing page).
- **CAPACITACIÓN:**
  - Mantener contenido actual.
  - **Agregar:** Detalle de cursos (formato landing page).
- **FUNDESOC:**
  - Mantener link externo.
- **EVENTOS:**
  - **Agregar** como sección principal en el menú.
  - Debe permitir la creación de eventos en formato landing page.
- **CONTACTO:**
  - Mantener sección actual.
- **REDES:**
  - Mantener enlaces a redes sociales.

---

## 3. Fases, Hitos y Duración del Proyecto

**Duración Total Estimada:** 8 semanas.

| Fase                                             | Hitos y Entregables Clave                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1. Diagnóstico y Diseño Estratégico** | **Hito 1.1:** Redacción de visión y objetivos.`<br>`**Hito 1.2:** Arquitectura de la información y wireframes del nuevo sitio.`<br>`**Hito 1.3:** Mockups (diseños visuales) que apliquen el rediseño (fondo limpio, layout moderno, nuevos componentes de UI).                                                                   |
| **2. Desarrollo e Implementación**        | **Hito 2.1:** Desarrollo de la nueva plantilla responsive basada en los mockups aprobados.`<br>`**Hito 2.2:** Implementación de nuevas secciones (Observatorio global)) y tipos de contenido (landing pages para convenios, cursos y eventos).`<br>`**Hito 2.3:** Migración y carga del contenido existente a la nueva estructura. |
| **3. Pruebas, Lanzamiento y Soporte**      | **Hito 3.1:** Fase de Quality Assurance (QA): Pruebas funcionales, de usabilidad y de compatibilidad en navegadores y dispositivos móviles.`<br>`**Hito 3.2:** Capacitación al equipo de CBHE para la administración del nuevo sitio.`<br>`**Hito 3.3:** Lanzamiento oficial del nuevo sitio web.                                   |

---

## 4. Próximos Pasos

1. **Validación del Plan:** Revisar y aprobar este plan de trabajo.
2. **Redactar visión y objetivos:** Redactar visión y objetivos (Hito 1.1) basado en este documento y los ubicados en @web-cbhe.
