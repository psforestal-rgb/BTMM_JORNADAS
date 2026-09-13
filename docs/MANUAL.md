# Manual operativo

Gestión de jornadas laborales · Bloque Tapantí-Macizo de la Muerte

> Este archivo se GENERA desde `src/data/manual.js` con `npm run manual`.
> No lo edite a mano: el manual que vale es el que vive dentro de la
> aplicación, en «Manual», donde se puede leer sin señal.

> **Regla dura.** La herramienta solo REGISTRA y AVISA. Ninguna acción suya aquí genera pagos, suspensiones, reposiciones ni derechos. Toda decisión administrativa la toma la coordinación que corresponda.

---

## En el puesto

### Lo primero

La aplicación abre en «Día»: lo que pasa hoy en cada puesto. Desde ahí se ve quién está en turno, qué hay planificado y si algún puesto se quedó sin quien atienda visitantes.

- En el teléfono, la barra de abajo lleva a Día, Roles, Alertas y Personal. El botón «Más» abre el resto.
- En computadora, todo está en la columna de la izquierda, agrupado en Principal, Jornadas y Control.
- Arriba a la derecha se cambia el mes y el tema (claro, oscuro o alto contraste, que es el que se lee bajo sol).

### La vista Día

Cada puesto muestra tres cosas del día: quién está en Turno, qué hay en Plan y quién atiende Visitantes. Al tocar una casilla se abre el detalle con los nombres.

| Color | Qué significa |
|---|---|
| Rojo | Cobertura crítica: un puesto que debe atender visitantes todos los días no tiene a nadie asignado. |
| Amarillo | Hay gente en turno pero ninguna actividad planificada. |
| Verde | Todo en orden. |

- En el teléfono se pasa de un día a otro deslizando con el dedo.
- El botón «+ Asignar» aparece en cada persona que está en turno y no tiene actividad.

### Leer el rol

La cuadrícula de Roles es un calendario continuo: se desplaza mes a mes sin cambiar de pantalla. Cada fila es una persona, cada columna un día.

| Código | Qué es |
|---|---|
| T1, T2, T3… | Turno. El número es el día que lleva de la racha. |
| L1, L2… | Libre. |
| V1, V2… | Vacaciones. |
| IN | Incapacidad. |
| E1, E2… | Teletrabajo. Cuenta como día de trabajo, pero no como presencia en el puesto. |
| O-F, O-FA, O-G, O-CM | Códigos del rol institucional cuyo significado nadie ha documentado todavía. Se guardan enteros para no perderlos: el que va después del guion es el código tal como lo escribió la administración. |
| (vacío) | El rol no dice nada de esa persona ese día. |

> Un aro ÁMBAR con «?» significa que el rol institucional se contradice ese día: trae dos filas de la misma persona que no dicen lo mismo. Al pasar por encima se lee qué decía la otra. Confirme con la administración cuál vale.

> Un aro ROJO que parpadea es otra cosa: hay una actividad asignada a alguien que ese día no está de turno, o teletrabajando cuando hace falta estar presente. Al tocarlo se abre el detalle.

### Editar el rol

1. Toque su NOMBRE en la primera columna. Eso abre la edición de esa fila.
2. Toque el día que quiere cambiar y elija la categoría.
3. Los consecutivos se renumeran solos: si convierte un T3 en libre, lo que sigue se recalcula.

El recuadro verde «INICIO» marca el primer día laboral del mes, que es desde donde arranca la rotación.

El botón «Aplicar…» del panel de edición llena un rango completo según la modalidad (10x5, 12x6, 16x8…). El rango puede cruzar meses. Antes de aplicar se elige si la rotación REINICIA en T1 o CONTINÚA la del día anterior; y hay un atajo que coloca la fecha de inicio justo después del último día ya programado, para seguir sin sobrescribir nada.

### Sin ratón y sin tocar la pantalla

| Tecla | Qué hace |
|---|---|
| Flechas | Mueven de celda en celda dentro de la cuadrícula de Roles. |
| Inicio / Fin | Van al primer y al último día DEL MES, no del rango cargado. |
| / | Salta al buscador de la vista en que esté. |
| Esc | Cierra el cuadro abierto. |
| Tab | Recorre los controles. Dentro de un cuadro, el foco no se escapa. |

La cuadrícula entera se puede recorrer con el teclado y cada celda dice de quién y de qué día es, para que un lector de pantalla pueda leerla.

### Sin conexión

La aplicación sigue funcionando completa sin señal: los datos viven en el aparato, no en un servidor. Lo que edite se guarda igual y ahí sigue cuando vuelva la conexión.

- Un aviso amarillo «Sin conexión» dice de cuándo son los datos que está viendo.
- Al reconectar, si hay una versión nueva aparece un aviso verde para actualizar.
- Nada se envía solo a ningún lado.

---

## Administración

### Para qué sirve cada vista

| Vista | Para qué |
|---|---|
| Día | Qué pasa en cada puesto una fecha concreta. |
| Roles | El rol mensual de todo el bloque, editable. |
| Planificación general | Agenda de actividades, con filtros que viajan en la dirección web. |
| Funcionarios | Las fichas del personal: alta, edición, baja reversible, importación y exportación. |
| Planificación/Funcionario | La agenda de una sola persona. |
| Adelanto de viáticos | Lo que hay que tramitar, con el corte administrativo aplicado. |
| Reposición de tiempo | Tiempo trabajado fuera de rol y su devolución. |
| Disponibilidad | Control de contratos de disponibilidad y sus vencimientos. |
| Alertas | Todo lo que la herramienta detectó, en un solo sitio. |
| Datos · respaldo | Respaldos, restauración, rastro de cambios y exportación a base de datos. |
| Configuración | Las reglas administrativas y los puestos operativos. |

### Fichas y traslados

La ficha de cada persona incluye el HISTORIAL DE PUESTOS: por dónde ha pasado y desde cuándo. No es adorno. El rol de cada mes se archiva bajo el puesto donde la persona estaba ESE mes, así que el historial es lo que explica dónde está su rol anterior.

> Al cambiar el puesto de alguien, el formulario pregunta desde cuándo vale el traslado. El tramo anterior se cierra la víspera y se abre el nuevo. El rol de los meses ya trabajados se queda donde estaba, que es lo correcto: se trabajó ahí.

- Una fecha «desde» vacía significa «desde antes de lo que el registro cubre», no una fecha que falte por llenar.
- Cerrar el último tramo es lo que marca que la persona salió del bloque. Su rol anterior no se borra.
- Un puesto que ya no opera se conserva marcado como histórico: no se puede asignar a nadie, pero el rol de cuando sí operaba se sigue viendo.

### Las reglas que se pueden cambiar

| Regla | De fábrica | Qué cambia |
|---|---|---|
| Puestos que requieren atención de visitantes a diario | Orosi y Quetzales | Día marca en rojo el puesto que se quede sin nadie. |
| Día de corte de viáticos | 15 | El plazo para tramitar (1 a 28). |
| Mes objetivo de viáticos | Siguiente | Si se tramita para el mes próximo o el actual. |
| Permitir consulta tras el cierre | Sí | Si la lista sigue visible después del corte. |
| Aplicar feriados | Sí | El primer día laboral salta los feriados oficiales. |
| Horas de jornada | 8 | Base para los cálculos de reposición. |
| Avisar de inactivo con actividad | Sí | Alerta. |
| Avisar de incapacitado con actividad | Sí | Alerta. |
| Avisar de acumulativa sin modalidad | Sí | Alerta. |
| Avisar de reposición pendiente | Sí | Alerta. |

Cada cambio pide dos pasos: aplicar y confirmar. Hay un botón para volver a los valores de fábrica. Desde aquí también se crean, renombran y ordenan los puestos operativos.

> Renombrar un puesto arrastra las fichas y las reglas que lo mencionan, pero el rol ya archivado se queda con el nombre viejo. No se pierde: la aplicación lo sigue encontrando y la exportación lo conserva.

### Respaldos

Los datos viven en este aparato y en ningún otro sitio. Si se pierde el aparato, se pierden. Por eso los respaldos no son opcionales.

| Qué es | Cuándo usarlo |
|---|---|
| Crear respaldo | Al cerrar el mes, antes de un cambio grande, y cuando termine una jornada de trabajo en campo. |
| Compartir respaldo | Para mandarlo por correo o guardarlo en la nube desde el propio teléfono. |
| Restaurar respaldo | Reemplaza todo con el archivo. Antes descarga sola una copia de lo que hay; si esa copia no se puede descargar, NO restaura nada. |
| Respaldos automáticos | Los aparta la aplicación sola cuando cambia el formato con que guarda los datos. Se conservan los 5 últimos y no se borran al reiniciar. |
| Exportar a base de datos | Cuando otro sistema tenga que consultar esta información. |

La exportación a base de datos es distinta del respaldo: el respaldo sirve para volver a cargar los datos AQUÍ, y la exportación los descompone en doce tablas con clave primaria para que otro sistema pueda consultarlos. Sale en JSON —que lleva la definición del esquema dentro— y en SQL listo para ejecutar en SQLite o PostgreSQL.

### Qué avisa la herramienta

| Aviso | Cuándo |
|---|---|
| Disponibilidad vencida | La fecha ya pasó. |
| Disponibilidad vence hoy | Es el último día. |
| Disponibilidad por vencer | Quedan 60 días o menos. |
| Sin resolución acumulativa | Jornada acumulativa sin resolución registrada. |
| Acumulativa sin modalidad | Jornada acumulativa sin modalidad (10x5, 12x6…). |
| Revisar disponibilidad | Persona incapacitada con disponibilidad activa. |
| Incapacitado con actividad | Hay actividad asignada de hoy en adelante. |
| Inactivo con actividad | Igual, para quien ya no está activo. |
| Reposición pendiente | Tiempo trabajado fuera de rol sin devolver. |
| Cobertura crítica | Un puesto que debe atender visitantes se quedó sin nadie. |

---

## Jefatura

### Qué garantiza y qué no

- La versión exacta está siempre a la vista, con el número de compilación: sirve para auditar qué código estaba corriendo.
- Todo cambio en una ficha queda en el rastro de cambios, campo por campo, con lo que decía antes y lo que dice después.
- Antes de cualquier migración del formato de los datos se aparta un respaldo, y se puede descargar.
- El rol institucional se vuelve a imponer solo del mes de sincronización en adelante, y solo donde el libro dice algo: corrige y agrega, nunca vacía.

- NO envía datos a terceros.
- NO genera pagos ni derechos.
- NO ejecuta suspensiones.
- NO decide nada: todo aviso queda para revisión humana.

### De dónde salen los datos

| Fuente | Qué aporta |
|---|---|
| Rol Bloque (Excel institucional) | El rol diario de cada persona y por qué puestos pasó durante el año. |
| Planificación BTMM (documento de Google) | Las actividades programadas por día y por puesto. |
| Lo que se edita aquí | Manda sobre los meses ya cumplidos; el libro solo se reimpone del mes de sincronización en adelante. |

> Las dos fuentes se sincronizan a mano cuando la administración publica una revisión. La versión aplicada de cada una se puede consultar en el archivo que genera «Exportar a base de datos».

### Cuando algo no cuadra

La herramienta prefiere enseñar una duda antes que resolverla por su cuenta. Esto es lo que puede encontrarse y qué significa.

| Lo que ve | Qué pasó |
|---|---|
| Un código O- seguido de letras | El rol institucional usa un código cuyo significado nadie documentó. Se guarda entero para no perderlo; en cuanto la administración lo aclare, se convierte. |
| Aro ámbar con «?» | El propio rol institucional se contradice ese día: trae dos filas de la misma persona con valores distintos. |
| Una fila con todas las celdas vacías | El rol dejó de traer a esa persona pero nadie ha confirmado que saliera del bloque. Se deja visible a propósito, en vez de hacerla desaparecer. |
| Un puesto marcado como histórico | Dejó de operar, pero el rol de cuando operaba sigue siendo real y hay que poder verlo. |

### Reportar un problema

1. Anote la versión, que está a la vista en la aplicación.
2. Diga en qué vista ocurre.
3. Escriba los pasos para que vuelva a pasar.
4. Indique el aparato y el navegador.
5. Si puede, adjunte un respaldo: con él se reproduce el problema exactamente.
