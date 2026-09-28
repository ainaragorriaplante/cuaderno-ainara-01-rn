# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido
- Separar la lógica de los datos de la interfaz visual utilizando colecciones en formato array.
- implementar el componente 'FlatList' para renderizar listas de elementos de manera eficiente en React Native.
- Configurar cuadrículas de múltiples columnas utilizando las propiedades 'numColumns' y 'columnWrapperStyle'.
- Asegurar una identificación única y estable para cada elemento mediante 'keyExtractor'.

## Respuesta a la pregunta de comprensión
¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

Respuesta:
La principal ventaja es que se aplica el principio de separación de responsabilidades. Modificar los datos directamente en el array actualiza de forma automática y dinámica la interfaz a través de 'FlatList' y 'renderItem'. Si lo hiciéramos manualmente en el JSX, tendríamos que buscar y alterar código repetitivo línea por línea, lo que hace que el mantenimiento sea lento, propenso a errores y poco escalable cuando manejamos cientos de productos.

## Qué he modificado
- He adaptado la paleta de colores completa al modo oscuro (fondo de pantalla, tarjetas de productos, títulos y colores de texto) para que coincida exactamente con la referencia visual.
- He conservado los seis productos iniciales estructurados en su array con sus respectivos iconos, nombres y precios.

## Resultado
Explica brevemente cómo ha quedado la interfaz.
La interfaz muestra un catálogo desplazable organizado en un grid de dos columnas con tarjetas oscuras estilizadas, donde cada elemento presenta de forma clara su icono, nombre y precio actualizados.