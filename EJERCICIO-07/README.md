# Ejercicio 07 - Feed de noticias

## Qué he aprendido
- Utilizar el componente 'ScrollView' para permitir el desplazamiento vertical en pantallas cuyo contenido excede la altura disponible.
- Crear componentes reutilizables ('NewsCard') para evitar la duplicación de código estructurado.
- Pasar datos dinámicos a través de propiedades (*props*) para renderizar una misma plantilla visual con contenidos diferentes.

## Respuesta a la pregunta de comprensión
¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

Respuesta:
Lo que debe cambiar son los datos específicos de cada contenido (es decir, las props como la categoría y el título de la noticia). Lo que debe permanecer exactamente igual es la estructura visual y el diseño base (la disposición de las etiquetas, los espaciados, los márgenes, los bordes redondeados y los estilos generales def

## Qué he modificado
- He adaptado la paleta de colores completa al modo oscuro (fondo general, tarjetas, textos y categorías) para que coincida con la referencia visual.
- He añadido las cuatro tarjetas de noticias específicas solicitadas en el diseño ("IA y desarrollo", "React Native", "Arquitecturas cloud" e "Interfaces accesibles").

## Resultado
Explica brevemente cómo ha quedado la interfaz.
La interfaz muestra un feed de noticias desplazable mediante 'ScrollView', integrado por un título principal y tarjetas oscuras reutilizables que muestran de forma limpia y ordenada las diferentes categorías y títulos de actualidad.