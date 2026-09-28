# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
- Componer una pantalla completa y realista integrando múltiples bloques visuales (saludos, tarjetas de saldo destacadas y filas de elementos).
- Aplicar el patrón de componentes reutilizables mediante la definición de tipos ('MovementProps') y la transferencia de datos por medio de props.
- Estructurar diseños adaptados al modo oscuro manteniendo una jerarquía visual clara y un contraste adecuado.

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

Respuesta:
Las partes repetitivas que comparten una estructura idéntica pero cambian en su contenido (como cada fila de movimientos) se deben convertir en componentes reutilizables (ej. 'Movement'). En cambio, los elementos estructurales únicos de la pantalla principal (como el saludo de bienvenida o la tarjeta de saldo general) se pueden dejar directamente en 'App', ya que no se van a duplicar ni iterar a lo largo de la vista.

## Qué he modificado
- He adaptado toda la interfaz al modo oscuro (fondos oscuros, tarjetas contrastadas y textos en color blanco).
- Se ha configurado el componente reutilizable 'Movement' para mostrar los movimientos requeridos ("Nómina" y "Supermercado") con sus respectivos importes.

## Resultado
Explica brevemente cómo ha quedado la interfaz.
La interfaz muestra un diseño bancario moderno y limpio con el saludo personalizado, la tarjeta de saldo disponible y una lista de movimientos recientes estructurada con componentes reutilizables en modo oscuro.