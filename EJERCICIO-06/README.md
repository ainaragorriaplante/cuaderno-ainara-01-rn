# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido
- Construir estructuras de cuadrícula sencillas (*grids*) en React Native combinando 'flexDirection: 'row'' con 'flexWrap: 'wrap''.
- Calcular porcentajes de ancho adaptativos ('width: '48%'') para posicionar elementos de forma simétrica en dos columnas.
- Crear componentes reutilizables que aceptan propiedades (props) para evitar duplicar código en interfaces repetitivas.

## Respuesta a la pregunta de comprensión
¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Respuesta:
Porque si cada tarjeta ocupara exactamente el 50% de la fila, sumado al espacio de separación (`gap`) o los márgenes intermedios, el ancho total superaría el 100% del contenedor disponible. Esto provocaría que la segunda tarjeta salte automáticamente a la siguiente línea de forma descontrolada. Al usar un 48%, dejamos un margen de holgura que permite alojar perfectamente el espacio de separación horizontal sin romper el diseño de dos columnas.

## Qué he modificado
- He cambiado la paleta de colores completa al modo oscuro (fondo general, tarjetas, textos y variaciones) para que coincida con la referencia visual.
- Se ha añadido una quinta tarjeta de métrica correspondiente a"Tickets" con su respectivo valor y datos.

## Resultado
Explica brevemente cómo ha quedado la interfaz.
La interfaz muestra un panel de control con un título y subtítulo informativos, seguido de un grid organizado en dos columnas que distribuye de manera limpia y uniforme las tarjetas de métricas del negocio en modo oscuro.