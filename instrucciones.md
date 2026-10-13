CONTEXTO
Mi portafolio es HTML/CSS/JS puro (sin framework, sin npm, sin build) y se abre también con file://. No uses fetch() ni type="module". Mantén la paleta, tipografías y estilo visual de las tarjetas existentes. No toques otras secciones.

TAREA
Mejora la tarjeta de MySaaS en la sección Experiencia (la de emprendimientos). Si MySaaS comparte tarjeta con LoWeb, sepárala en una tarjeta propia a todo el ancho de la grilla (grid-column: 1 / -1) y deja LoWeb intacto en su lugar.

ESTRUCTURA DE LA TARJETA (en este orden)
1. Encabezado: título "MySaaS", etiqueta "En construcción" y subtítulo: "POS + tienda online para pequeños comerciantes de Pereira. Evolución de LoWeb."
2. Descripción corta: "Sistema multi-tenant para que comerciantes gestionen inventario, ventas y catálogo con una interfaz mínima y clara. Modelo freemium: plan gratis (POS + catálogo) y premium (venta online con carrito)."
3. Stack, como chips: Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Tailwind CSS v4, Kinde Auth.
4. Estado del proyecto en dos columnas (en móvil, apiladas):
   - Listo: Autenticación (Kinde) · Onboarding de negocio · Dashboard · Inventario (CRUD, filtros, paginación por cursor, exportación CSV, selección múltiple) · Variantes de producto con SKU único por negocio
   - Próximamente: Ventas / POS · Clientes y fidelización · Tienda pública con carrito · Reportes
5. Decisiones técnicas, en 3 o 4 viñetas cortas: arquitectura modular por features; aislamiento de datos por negocio (multi-tenant); transacciones atómicas al guardar productos y variantes; Server Components por defecto.
6. Barra de progreso visual (CSS puro) con el texto "5 de 9 módulos".
7. Enlace "Ver repositorio" SOLO si te doy la URL; si no, no lo agregues.

REQUISITOS DE DISEÑO
- Separación clara entre bloques, con subtítulos pequeños en mayúsculas.
- Los "Listo" con ícono de check y los "Próximamente" con estilo atenuado.
- Responsive: en pantallas pequeñas todo en una columna.
- Accesible: contraste suficiente, y la barra de progreso con aria-label.
- Cambios mínimos: sin reordenar secciones ni refactorizar CSS existente. Si necesitas CSS nuevo, ponlo con prefijo .mysaas- para no chocar con otros estilos.

REGLAS
- No ejecutes servidores ni curl, ni comandos destructivos.
- No dejes teléfonos ni datos personales en el HTML.
- Al terminar, dime qué archivos modificaste y qué cambió en cada uno.
- Actualiza AGENTS.md con lo hecho.