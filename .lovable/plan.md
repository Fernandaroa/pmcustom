# Reorganización completa del sitio PM CUSTOM

Reemplazo el contenido actual con la nueva estructura del documento, transformando el sitio en multipágina con rutas SEO dedicadas. Solo español.

## Estructura de rutas

```text
/                          Home (landing optimizada SEO + conversión)
/sistemas-embebidos        Servicio
/iot                       Servicio
/automatizacion-industrial Servicio
/desarrollo-productos      Servicio
/investigacion-desarrollo  Servicio (Ley I+D / CORFO)
/casos-exito               Listado de casos
/casos-exito/control-riego        Detalle
/casos-exito/nodo-iot-agricultura Detalle
/casos-exito/data-logger          Detalle
/industrias                Listado (Agro, Minería, Industria, Manufactura, Energía, Logística)
/contacto                  Formulario completo
```

Se elimina `/propuesta-2` (queda redirect a `/`).

## Home (/)

Secciones en orden, según el documento:

1. **Hero**: titular "Transformamos desafíos operacionales en soluciones tecnológicas inteligentes", bajada, CTA principal "Solicita una evaluación" → `/contacto`, CTA secundario "Conoce nuestros casos de éxito" → `/casos-exito`. Imagen: `hero-iot.jpg` actual.
2. **Autoridad**: "Más que tecnología…" + grilla de 8 beneficios con íconos (lucide).
3. **Diferenciador (3 pilares)**: Seguridad / Robustez / Usabilidad, tipo cards expandibles (hover/click muestra descripción extendida). Reutilizo `pillar-services.jpg`, `pillar-products.jpg`, `pillar-corfo.jpg`.
4. **Qué hacemos**: 5 tarjetas (Sistemas Embebidos, IoT, Automatización, I+D, Desarrollo de Productos) cada una linkeada a su ruta.
5. **Proceso 7 pasos**: timeline horizontal/vertical (Diagnóstico → Optimización).
6. **Casos de éxito**: 3 tarjetas con imágenes (`work-*.jpg`) linkeadas al detalle.
7. **Industrias**: grilla de 6 con íconos.
8. **CTA final de conversión** + link a `/contacto`.

SEO `head()`: title "Sistemas Embebidos e IoT para Empresas | PM CUSTOM Chile", meta description del documento.

## Páginas de servicio (5)

Cada una: hero con título y bajada del servicio, descripción extendida, beneficios, CTA a contacto. SEO propio (title/description). Imagen: mix entre `pillar-*` existentes y 2-3 generadas nuevas para servicios que no tienen imagen adecuada (sistemas embebidos, automatización).

## Casos de éxito

- `/casos-exito`: listado con las 3 tarjetas (igual que en home pero como página dedicada).
- 3 páginas de detalle con el contenido del documento (descripción + beneficios listados). Imagen: una de `work-*.jpg` por caso.

## Industrias

Una sola página con las 6 industrias (Agricultura, Minería, Industria, Manufactura, Energía, Logística), cada una con su descripción del documento.

## Contacto

Mantengo el formulario existente (nombre, empresa, email, teléfono opcional) que ya guarda en `contact_submissions`. Lo muevo a su propia página y agrego el copy de la sección final de conversión arriba.

## Componentes compartidos

- `SharedNav` actualizado con los nuevos links (Servicios dropdown, Casos, Industrias, Contacto).
- Footer simple con marca + links principales.
- Se elimina el toggle ES/EN y se simplifica `i18n.tsx` (o se borra y se reemplaza por strings directos en español).

## Imágenes

- **Reutilizar**: `hero-iot.jpg`, `pillar-services.jpg`, `pillar-products.jpg`, `pillar-corfo.jpg`, `work-1..5.jpg`.
- **Generar nuevas** (~4): embedded-systems hero, automatizacion-industrial, industrias-collage, proceso (opcional).

## Detalles técnicos

- Borrar `/propuesta-2` y `i18n.tsx` (o vaciar dict). Quitar `LanguageToggle` de la nav.
- Mantener stack: TanStack Router file-based, Tailwind v4, shadcn.
- Cada route file con `head()` propio (title, description, og:title, og:description, canonical relativo).
- Actualizar `sitemap.xml.ts` si existe; si no, crear uno con todas las rutas públicas.
- No tocar `routeTree.gen.ts` ni archivos auto-generados de Supabase.
- Formulario sigue usando la tabla `contact_submissions` existente (sin migración nueva).

## Lo que se elimina

- Ruta `/propuesta-2` y sus secciones (carrusel, etc.) — su contenido se redistribuye o se descarta.
- Sistema bilingüe ES/EN.
- Contenido antiguo "Tu Partner Tecnológico en Sistemas Embebidos e IoT" (reemplazado por el nuevo hero).
