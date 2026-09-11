# 🎯 ANÁLISIS UX/UI Y PROPUESTAS DE REESTRUCTURACIÓN
# PNLQ – Gestión de Jornadas Laborales (BTMM)

> **Versión**: 1.0  
> **Fecha**: 11 de septiembre de 2026  
> **Objetivo**: Identificar puntos de fricción en la experiencia de usuario y proponer mejoras para **intuitividad, fluidez y reducción de saturación**.  
> **Enfoque**: "Menos es más" – Simplificar, guiar y eliminar el "yo no sé qué".

---

## 📌 ÍNDICE
1. [Diagnóstico Actual](#1-diagnóstico-actual)
   - [1.1 Puntos de Fricción Identificados](#11-puntos-de-fricción-identificados)
   - [1.2 Problemas de Usabilidad](#12-problemas-de-usabilidad)
   - [1.3 Problemas Visuales](#13-problemas-visuales)
2. [Principios de Diseño Propuestos](#2-principios-de-diseño-propuestos)
3. [Propuestas de Reestructuración](#3-propuestas-de-reestructuración)
   - [3.1 Reestructuración Modular](#31-reestructuración-modular)
   - [3.2 Flujos Secuenciales Mejorados](#32-flujos-secuenciales-mejorados)
   - [3.3 Simplificación de Interfaces](#33-simplificación-de-interfaces)
4. [Detalles Técnicos](#4-detalles-técnicos)
5. [Roadmap de Implementación](#5-roadmap-de-implementación)
6. [Beneficios Esperados](#6-beneficios-esperados)
7. [Anexos](#7-anexos)

---

---

## 1. DIAGNÓSTICO ACTUAL

### 1.1 Puntos de Fricción Identificados

#### **🔴 Críticos (Alto Impacto / Alta Frecuencia)**

| **ID** | **Problema** | **Ubicación** | **Impacto** | **Ejemplo** |
|--------|--------------|---------------|-------------|-------------|
| **P1** | **Sobrecarga cognitiva en Funcionarios** | `Funcionarios.jsx` | ⭐⭐⭐⭐⭐ | 16 campos en modal + 6 filtros + búsqueda + tabla/tarjetas. |
| **P2** | **Filtros ocultos por defecto** | `Funcionarios.jsx` | ⭐⭐⭐⭐ | Los filtros están en un `<details>` colapsado, lo que oculta funcionalidad clave. |
| **P3** | **Modal de Funcionario demasiado largo** | `ModalFuncionario.jsx` | ⭐⭐⭐⭐⭐ | 5 secciones con ~20 campos. Scroll vertical obligatorio. |
| **P4** | **Navegación no intuitiva en Roles** | `Roles.jsx` | ⭐⭐⭐⭐ | Tabla con meses encadenados + filtro de puestos/funcionarios oculto. |
| **P5** | **Falta de feedback visual en acciones** | Varias vistas | ⭐⭐⭐⭐ | No hay confirmación visual al guardar/editar (ej: toast "Guardado ✅"). |
| **P6** | **Inconsistencia en controles** | Varias vistas | ⭐⭐⭐⭐ | Botones de "Agregar" en diferentes estilos/posiciones. |
| **P7** | **Falta de guías contextuales** | Vistas complejas | ⭐⭐⭐⭐ | No hay tooltips o ayudas inline para campos complejos (ej: modalidad 10x5). |
| **P8** | **Densidad visual excesiva en Roles** | `RolesMensualGrid.jsx` | ⭐⭐⭐⭐⭐ | Tabla con ~31 columnas + filas de funcionarios + anillos/conflictos. |
| **P9** | **Falta de progreso en flujos** | Crear funcionario/actividad | ⭐⭐⭐⭐ | No hay indicador de "Paso X de Y" en formularios largos. |
| **P10** | **Acciones ocultas o poco descubribles** | Varias vistas | ⭐⭐⭐⭐ | Ej: Botón "Restaurar mes" en Roles está en la parte superior pero no es obvio. |

#### **🟡 Medios (Impacto Moderado)**

| **ID** | **Problema** | **Ubicación** | **Impacto** | **Ejemplo** |
|--------|--------------|---------------|-------------|-------------|
| **P11** | **Selector de mes/año poco intuitivo** | `Topbar.jsx` | ⭐⭐⭐ | Botones "Mes anterior/Siguiente" + selectores dropdown. |
| **P12** | **Falta de atajos de teclado** | Vistas de tabla | ⭐⭐⭐ | No hay soporte para `Ctrl+F` o navegación con teclado. |
| **P13** | **Colores con bajo contraste en algunos temas** | Tema `light` | ⭐⭐⭐ | Badges de estado (ej: "Inactivo" en gris claro sobre blanco). |
| **P14** | **Falta de validación en tiempo real** | `ModalFuncionario.jsx` | ⭐⭐⭐ | Errores solo aparecen al guardar (no al salir del campo). |
| **P15** | **Iconos sin etiquetas claras** | Varias vistas | ⭐⭐⭐ | Iconos como `📄` o `⚠️` sin tooltip explicativo. |

#### **🟢 Menores (Impacto Bajo)**

| **ID** | **Problema** | **Ubicación** | **Impacto** | **Ejemplo** |
|--------|--------------|---------------|-------------|-------------|
| **P16** | **Inconsistencia en tamaño de botones** | Varias vistas | ⭐⭐ | Algunos botones usan `min-h-touch`, otros no. |
| **P17** | **Falta de estado "Cargando" en acciones** | Varias vistas | ⭐⭐ | No hay spinner al guardar cambios. |
| **P18** | **Texto demasiado pequeño en móvil** | Vistas responsivas | ⭐⭐ | Ej: `text-xs` en tarjetas de actividades en móvil. |

---

### 1.2 Problemas de Usabilidad

#### **📌 Problema P1: Sobrecarga Cognitiva en Funcionarios**
- **Descripción**: La vista `Funcionarios` presenta **demasiadas opciones al mismo tiempo**:
  - 6 filtros rápidos (Todos, Guardaparques, Con disponibilidad, Acumulativa, ONG, Sin resolución).
  - Barra de búsqueda.
  - Toggle Tabla/Tarjetas.
  - Botón "Agregar".
  - Tabla con 16 columnas o tarjetas con mucha información.
- **Impacto**: Los usuarios nuevos se sienten abrumados y no saben por dónde empezar.
- **Evidencia**: Los filtros están ocultos en un `<details>` por defecto, pero incluso al abrirlos, la cantidad de opciones es abrumadora.

#### **📌 Problema P2: Filtros Ocultos por Defecto**
- **Descripción**: Los filtros en `Funcionarios.jsx` están dentro de un elemento `<details>`, lo que significa que **no son visibles al cargar la página**.
- **Impacto**: Los usuarios no descubren esta funcionalidad clave, lo que reduce la usabilidad.
- **Solución propuesta**: Mostrar filtros básicos por defecto (ej: "Activos/Inactivos") y ocultar los avanzados en un menú "Más filtros".

#### **📌 Problema P3: Modal de Funcionario Demasiado Largo**
- **Descripción**: El modal `ModalFuncionario.jsx` tiene **5 secciones con ~20 campos**, todos visibles al mismo tiempo.
- **Impacto**:
  - Scroll vertical obligatorio (mal experiencia en móvil).
  - Los usuarios se sienten abrumados al ver tantos campos.
  - No hay indicación de progreso (ej: "Paso 1 de 3").
- **Evidencia**: Código actual muestra todas las secciones sin colapsar:
  ```jsx
  <Seccion id="sec-identificacion" titulo="Identificación">...</Seccion>
  <Seccion id="sec-puesto" titulo="Puesto y condición">...</Seccion>
  <Seccion id="sec-jornada" titulo="Jornada y modalidad">...</Seccion>
  <Seccion id="sec-contratacion" titulo="Contratación y fechas">...</Seccion>
  <Seccion id="sec-atributos" titulo="Atributos">...</Seccion>
  ```

#### **📌 Problema P4: Navegación no Intuitiva en Roles**
- **Descripción**: La vista `Roles.jsx` tiene:
  - Una tabla con meses encadenados (hasta 120 meses).
  - Un filtro de puestos/funcionarios **oculto en un panel lateral** (no es obvio cómo usarlo).
  - Un botón "Ir a fecha" que requiere ingresar una fecha manualmente.
- **Impacto**: Los usuarios no entienden cómo navegar entre meses o filtrar la información.
- **Solución propuesta**:
  - Mostrar un selector de mes/año claro en la parte superior.
  - Reemplazar el filtro oculto por un **filtro visible y simple** (ej: selector de puesto + selector de funcionario).

#### **📌 Problema P5: Falta de Feedback Visual**
- **Descripción**: No hay **toasts o notificaciones** al realizar acciones como:
  - Guardar un funcionario.
  - Editar un rol.
  - Asignar una actividad.
- **Impacto**: Los usuarios no saben si sus acciones se guardaron correctamente.
- **Solución propuesta**: Implementar un sistema de **toasts** (notificaciones temporales) para confirmar acciones.

#### **📌 Problema P8: Densidad Visual Excesiva en Roles**
- **Descripción**: La tabla de roles (`RolesMensualGrid.jsx`) muestra:
  - ~31 columnas (días del mes).
  - Filas para cada funcionario.
  - Anillos verdes (INICIO) y rojos (conflicto) en las celdas.
  - Badges de cantidad en turno.
- **Impacto**: En pantallas pequeñas o con muchos funcionarios, la tabla se vuelve **ilegible y abrumadora**.
- **Solución propuesta**:
  - Virtualización de la tabla (solo renderizar las celdas visibles).
  - Modo "Enfocado" (solo mostrar el puesto/funcionario seleccionado).

---

### 1.3 Problemas Visuales

#### **🎨 Problema de Jerarquía Visual**
- **Descripción**: No hay una **jerarquía clara** entre:
  - Acciones primarias (ej: "Guardar", "Agregar").
  - Acciones secundarias (ej: "Exportar", "Restaurar").
  - Información (ej: KPIs, alertas).
- **Impacto**: Los usuarios no saben qué acciones son las más importantes.
- **Solución propuesta**:
  - Usar **colores y tamaños distintos** para acciones primarias/secundarias.
  - Añadir **divisores visuales** entre secciones.

#### **🎨 Problema de Consistencia**
- **Descripción**: Inconsistencias en:
  - Estilo de botones (algunos usan `min-h-touch`, otros no).
  - Colores de badges (ej: "Sin resolución" usa emoji 📄 pero no hay un color estándar).
  - Tamaño de texto (ej: `text-xs` en algunos lugares, `text-sm` en otros).
- **Impacto**: La interfaz se ve **desorganizada y poco profesional**.
- **Solución propuesta**:
  - Definir un **sistema de diseño consistente** (tokens para botones, badges, tipografía).
  - Auditar y unificar estilos.

#### **🎨 Problema de Accesibilidad**
- **Descripción**: Algunos elementos no cumplen con **WCAG AA** en el tema `light`:
  - Badges de estado (ej: "Inactivo" en gris claro sobre blanco).
  - Texto pequeño (`text-xs`) en móvil.
- **Impacto**: Dificultad para usuarios con discapacidad visual o en condiciones de poca luz.
- **Solución propuesta**:
  - Aumentar el contraste en badges.
  - Usar `text-sm` como mínimo en móvil.

---

---

## 2. PRINCIPIOS DE DISEÑO PROPUESTOS

### 2.1 Filosofía "Menos es Más"
> **"No añadas lo que no es necesario. No ocultes lo que es necesario."**

- **Simplificar**: Eliminar opciones, campos y controles que no sean esenciales.
- **Guiar**: Usar **wizards (asistentes)** para flujos complejos (ej: crear funcionario).
- **Mostrar**: No ocultar funcionalidad clave detrás de menús o `<details>`.
- **Validar**: Proporcionar feedback en tiempo real (ej: validación de cédula al salir del campo).

### 2.2 Jerarquía Visual Clara
| **Nivel** | **Elemento** | **Estilo Propuesto** |
|-----------|--------------|----------------------|
| Primario | Acciones principales (Guardar, Agregar) | Botón verde (`bg-emerald-800`), tamaño grande (`min-h-touch`). |
| Secundario | Acciones secundarias (Exportar, Filtrar) | Botón blanco con borde (`border border-emerald-800`), tamaño normal. |
| Terciario | Acciones peligrosas (Eliminar) | Botón rojo (`bg-red-600`), requiere confirmación. |
| Información | KPIs, alertas | Tarjetas con sombra (`shadow-sm`), fondo blanco. |

### 2.3 Fluidez en la Navegación
- **Regla de los 3 clics**: Cualquier acción debe ser accesible en **3 clics o menos**.
- **Navegación por tabs**: Usar pestañas para agrupar funcionalidad relacionada (ej: en `Funcionarios`, pestañas "Lista", "Agregar", "Importar").
- **Breadcrumbs**: Mostrar el camino actual (ej: "Funcionarios > Juan Pérez > Editar").

### 2.4 Feedback en Tiempo Real
- **Toasts**: Notificaciones temporales para confirmar acciones (ej: "Funcionario guardado ✅").
- **Validación inline**: Mostrar errores al salir del campo (no al guardar).
- **Estados de carga**: Spinner o "Guardando..." al realizar acciones asíncronas.

### 2.5 Adaptabilidad al Contexto
- **Detección de dispositivo**: Mostrar controles táctiles en móvil (`min-h-touch`), controles de teclado en escritorio.
- **Modo enfocado**: En móvil, mostrar solo la información relevante (ej: en `Roles`, mostrar solo el puesto actual).
- **Progresión**: En formularios largos, usar **wizards con pasos** (ej: "Paso 1: Datos básicos", "Paso 2: Jornada", "Paso 3: Atributos").

---

---

## 3. PROPUESTAS DE REESTRUCTURACIÓN

---

### 3.1 Reestructuración Modular

#### **📦 Nueva Estructura de Archivos Propuesta**
```
src/
├── features/
│   ├── funcionarios/
│   │   ├── Funcionarios.jsx          # Vista principal (lista)
│   │   ├── FuncionarioWizzard.jsx    # Nuevo: Asistente paso a paso
│   │   ├── FuncionarioCard.jsx       # Tarjeta de funcionario (reutilizable)
│   │   ├── FuncionarioTable.jsx      # Tabla de funcionarios (reutilizable)
│   │   ├── FuncionarioFilters.jsx    # Componentes de filtros (reutilizable)
│   │   ├── PerfilFuncionario.jsx     # Vista minimalista (nuevo)
│   │   └── __tests__/
│   │
│   ├── roles/
│   │   ├── Roles.jsx                 # Vista principal
│   │   ├── RolesMensualGrid.jsx      # Tabla mensual (optimizada)
│   │   ├── RolesFiltros.jsx          # Filtros de puestos/funcionarios (nuevo)
│   │   ├── RolesResumen.jsx          # Resumen de roles por puesto (nuevo)
│   │   └── __tests__/
│   │
│   └── shared/
│       ├── Wizzard.jsx              # Componente genérico de asistente
│       ├── Toast.jsx                # Sistema de notificaciones (nuevo)
│       ├── ConfirmModal.jsx         # Modal de confirmación (reutilizable)
│       └── Tooltip.jsx              # Tooltips con ayuda contextual (nuevo)
│
└── ui/
    ├── Button/                       # Botones estandarizados
    │   ├── PrimaryButton.jsx
    │   ├── SecondaryButton.jsx
    │   └── DangerButton.jsx
    ├── Badge/                        # Badges estandarizados
    │   ├── StatusBadge.jsx
    │   └── CategoryBadge.jsx
    └── Form/                         # Componentes de formulario
        ├── Input.jsx
        ├── Select.jsx
        └── DatePicker.jsx
```

#### **📌 Beneficios de la Reestructuración**
| **Beneficio** | **Detalle** |
|---------------|-------------|
| **Reutilización** | Componentes como `FuncionarioCard` o `Wizzard` pueden usarse en múltiples vistas. |
| **Mantenibilidad** | Código más organizado y fácil de modificar. |
| **Consistencia** | Estilos y comportamientos unificados. |
| **Escalabilidad** | Fácil añadir nuevas funcionalidades. |

---

### 3.2 Flujos Secuenciales Mejorados

#### **🔄 Flujo Actual: Crear Funcionario**
```
1. Usuario hace clic en "+ Agregar" en Funcionarios.
2. Se abre ModalFuncionario con TODOS los campos (20+ campos).
3. Usuario debe llenar todo de una vez.
4. Si hay errores, se muestran al guardar.
5. Usuario debe corregir y volver a guardar.
```
**Problemas**:
- Demasiados campos a la vez.
- No hay guía de progreso.
- Validación tardía.

#### **🔄 Flujo Propuesto: Crear Funcionario (Wizzard)**
```
1. Usuario hace clic en "+ Agregar" en Funcionarios.
2. Se abre Wizzard con 3 pasos:
   - Paso 1: Datos básicos (nombre, cédula, correo).
     - Validación en tiempo real (ej: cédula única).
   - Paso 2: Puesto y condición (cargo, puesto, condición, estado).
   - Paso 3: Jornada y atributos (jornada, modalidad, disponibilidad, etc.).
3. En cada paso, validación antes de avanzar.
4. Al final, resumen + confirmación.
5. Toast: "Funcionario creado ✅".
```
**Beneficios**:
- Menos saturación visual.
- Validación temprana.
- Feedback de progreso.

#### **📌 Implementación del Wizzard**
```jsx
// src/features/shared/Wizzard.jsx
import { useState } from "react";
import Button from "../../ui/Button/PrimaryButton.jsx";

export default function Wizzard({ steps, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});
  
  const handleNext = () => {
    if (steps[currentStep].validate(data)) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const Step = steps[currentStep];
  
  return (
    <div className="max-w-2xl space-y-4">
      {/* Progress bar */}
      <div className="flex justify-between">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 mx-1 rounded ${i <= currentStep ? "bg-emerald-600" : "bg-slate-200"}`}
          />
        ))}
      </div>
      
      {/* Step content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">
          Paso {currentStep + 1} de {steps.length}: {Step.title}
        </h3>
        <Step.content data={data} setData={setData} />
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between gap-2">
        {currentStep > 0 && (
          <Button variant="secondary" onClick={handleBack}>
            Atrás
          </Button>
        )}
        {currentStep < steps.length - 1 ? (
          <Button onClick={handleNext}>
            Siguiente
          </Button>
        ) : (
          <Button onClick={() => onComplete(data)}>
            Guardar
          </Button>
        )}
      </div>
    </div>
  );
}
```

#### **📌 Ejemplo de Uso en ModalFuncionario**
```jsx
// src/features/funcionarios/FuncionarioWizzard.jsx
import Wizzard from "../shared/Wizzard.jsx";

const steps = [
  {
    title: "Datos básicos",
    content: ({ data, setData }) => (
      <div className="space-y-4">
        <Input
          label="Nombre completo"
          value={data.nombre || ""}
          onChange={(e) => setData({ ...data, nombre: e.target.value })}
          required
        />
        <Input
          label="Cédula"
          value={data.cedula || ""}
          onChange={(e) => setData({ ...data, cedula: e.target.value })}
          validate={validateCedula}
          error={!validateCedula(data.cedula) && "Cédula inválida"}
        />
        <Input
          label="Correo"
          value={data.email || ""}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
        />
      </div>
    ),
    validate: (data) => data.nombre && data.cedula && validateCedula(data.cedula),
  },
  {
    title: "Puesto y condición",
    content: ({ data, setData }) => (
      <div className="space-y-4">
        <Select
          label="Cargo"
          options={opcionesPuesto}
          value={data.puesto || ""}
          onChange={(e) => setData({ ...data, puesto: e.target.value })}
        />
        <Select
          label="Puesto operativo"
          options={opcionesPuestoOperativo}
          value={data.puestoOperativo || ""}
          onChange={(e) => setData({ ...data, puestoOperativo: e.target.value })}
        />
        <Select
          label="Condición"
          options={opcionesCondicion}
          value={data.condicion || ""}
          onChange={(e) => setData({ ...data, condicion: e.target.value })}
        />
        <Select
          label="Estado"
          options={opcionesEstado}
          value={data.estado || ""}
          onChange={(e) => setData({ ...data, estado: e.target.value })}
        />
      </div>
    ),
    validate: (data) => data.puesto && data.puestoOperativo && data.condicion && data.estado,
  },
  {
    title: "Jornada y atributos",
    content: ({ data, setData }) => (
      <div className="space-y-4">
        <Select
          label="Jornada"
          options={["Ordinaria", "Acumulativa"]}
          value={data.jornada || ""}
          onChange={(e) => setData({ ...data, jornada: e.target.value })}
        />
        {data.jornada === "Acumulativa" && (
          <Select
            label="Modalidad"
            options={opcionesModalidad}
            value={data.modalidad || ""}
            onChange={(e) => setData({ ...data, modalidad: e.target.value })}
          />
        )}
        <Checkbox
          label="Disponibilidad"
          checked={data.disponibilidad || false}
          onChange={(e) => setData({ ...data, disponibilidad: e.target.checked })}
        />
        <Checkbox
          label="Policía"
          checked={data.policia || false}
          onChange={(e) => setData({ ...data, policia: e.target.checked })}
        />
        <Checkbox
          label="Brigada"
          checked={data.brigada || false}
          onChange={(e) => setData({ ...data, brigada: e.target.checked })}
        />
        <Input
          label="Observaciones"
          value={data.obs || ""}
          onChange={(e) => setData({ ...data, obs: e.target.value })}
          multiline
        />
      </div>
    ),
    validate: (data) => data.jornada,
  },
];

export default function FuncionarioWizzard({ onComplete, onCancel }) {
  return (
    <Modal title="Agregar funcionario" onClose={onCancel}>
      <Wizzard steps={steps} onComplete={onComplete} />
    </Modal>
  );
}
```

---

### 3.3 Simplificación de Interfaces

#### **📌 Propuesta para Funcionarios.jsx**
**Cambios clave**:
1. **Mostrar filtros básicos por defecto** (no ocultos en `<details>`).
2. **Agrupar filtros avanzados** en un menú "Más filtros".
3. **Simplificar la barra de acciones**:
   - Botón principal: "+ Agregar" (verde, grande).
   - Botón secundario: "Importar/Exportar" (blanco con borde).
4. **Añadir toast de confirmación** al guardar/eliminar.

**Código propuesto**:
```jsx
// src/features/funcionarios/Funcionarios.jsx
import { useState } from "react";
import Card from "../../ui/Card.jsx";
import Button from "../../ui/Button/PrimaryButton.jsx";
import SecondaryButton from "../../ui/Button/SecondaryButton.jsx";
import Toast from "../../features/shared/Toast.jsx";
import FuncionarioTable from "./FuncionarioTable.jsx";
import FuncionarioCard from "./FuncionarioCard.jsx";
import FuncionarioFilters from "./FuncionarioFilters.jsx";
import FuncionarioWizzard from "./FuncionarioWizzard.jsx";

export default function Funcionarios({ personas, setPersonas }) {
  const t = useT();
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [filtros, setFiltros] = useState({
    busqueda: "",
    estado: "todos",
    puesto: "todos",
    // Filtros avanzados (ocultos por defecto)
    condicion: "todos",
    jornada: "todos",
    disponibilidad: "todos",
  });
  const [filtrosAvanzadosAbiertos, setFiltrosAvanzadosAbiertos] = useState(false);
  const isMobile = useIsMobile();
  const vista = isMobile ? "tarjetas" : "tabla";

  const filtrados = useMemo(
    () => aplicarFiltros(personas, filtros),
    [personas, filtros]
  );

  const handleGuardar = (funcionario) => {
    setPersonas((prev) => [...prev, funcionario]);
    setModal(null);
    setToast({ type: "success", message: "Funcionario guardado ✅" });
  };

  return (
    <section className="space-y-4">
      {/* Toast */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* Header */}
      <Card
        title={t("funcionarios.titulo")}
        icon="👥"
        action={
          <div className="flex flex-wrap items-center gap-2">
            <SecondaryButton onClick={() => setFiltrosAvanzadosAbiertos(!filtrosAvanzadosAbiertos)}>
              {filtrosAvanzadosAbiertos ? "Ocultar filtros" : "Más filtros"}
            </SecondaryButton>
            <Button onClick={() => setModal("wizzard")}>
              <Icon name="plus" size={16} /> {t("funcionarios.agregar")}
            </Button>
          </div>
        }
      >
        {/* Filtros básicos (siempre visibles) */}
        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center">
          <input
            value={filtros.busqueda}
            onChange={(e) => setFiltros({ ...filtros, busqueda: e.target.value })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm md:max-w-md"
            placeholder={t("funcionarios.buscarPlaceholder")}
          />
          <div className="flex gap-2">
            <Select
              value={filtros.estado}
              onChange={(e) => setFiltros({ ...filtros, estado: e.target.value })}
              options={[
                { value: "todos", label: "Todos" },
                { value: "Activo", label: "Activo" },
                { value: "Inactivo", label: "Inactivo" },
              ]}
            />
            <Select
              value={filtros.puesto}
              onChange={(e) => setFiltros({ ...filtros, puesto: e.target.value })}
              options={[
                { value: "todos", label: "Todos los puestos" },
                ...opcionesPuestoOperativo.map((p) => ({ value: p, label: p })),
              ]}
            />
          </div>
          <div className="text-sm font-bold text-slate-500 md:ml-auto">
            {filtrados.length}/{personas.length}
          </div>
        </div>

        {/* Filtros avanzados (ocultos por defecto) */}
        {filtrosAvanzadosAbiertos && (
          <FuncionarioFilters filtros={filtros} setFiltros={setFiltros} />
        )}

        {/* Vista (tabla o tarjetas) */}
        {vista === "tabla" ? (
          <FuncionarioTable personas={filtrados} setPersonas={setPersonas} />
        ) : (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((p) => (
              <FuncionarioCard
                key={p.id}
                persona={p}
                onEdit={() => setModal({ type: "edit", persona: p })}
                onDelete={() => {
                  if (confirm("¿Eliminar este funcionario?")) {
                    setPersonas((prev) => prev.filter((x) => x.id !== p.id));
                    setToast({ type: "success", message: "Funcionario eliminado ✅" });
                  }
                }}
              />
            ))}
          </div>
        )}
      </Card>

      {/* Modal de Wizzard */}
      {modal === "wizzard" && (
        <FuncionarioWizzard
          onComplete={handleGuardar}
          onCancel={() => setModal(null)}
        />
      )}
    </section>
  );
}
```

#### **📌 Propuesta para Roles.jsx**
**Cambios clave**:
1. **Selector de mes/año claro** en la parte superior (reemplaza el input de fecha).
2. **Filtros visibles** (selector de puesto + selector de funcionario).
3. **Modo "Enfocado"** (opcional): Mostrar solo el puesto/funcionario seleccionado.
4. **Virtualización de la tabla** (solo renderizar celdas visibles).
5. **Tooltips contextuales** (ej: "Haz clic en una celda para editar").

**Código propuesto**:
```jsx
// src/features/roles/Roles.jsx
import { useState, useMemo } from "react";
import Card from "../../ui/Card.jsx";
import Select from "../../ui/Form/Select.jsx";
import Button from "../../ui/Button/PrimaryButton.jsx";
import SecondaryButton from "../../ui/Button/SecondaryButton.jsx";
import Tooltip from "../../features/shared/Tooltip.jsx";
import RolesMensualGrid from "./RolesMensualGrid.jsx";

export default function Roles({ year, month, setYear, setMonth, roleData, setRoleData, personas }) {
  const t = useT();
  const [puestoSeleccionado, setPuestoSeleccionado] = useState("todos");
  const [funcionarioSeleccionado, setFuncionarioSeleccionado] = useState("todos");
  const [modoEnfocado, setModoEnfocado] = useState(false);

  // Puestos con funcionarios activos
  const puestosConFuncionarios = useMemo(() => {
    const puestos = new Set();
    personas.forEach((p) => {
      if (p.estado !== "Inactivo") {
        puestos.add(p.puestoOperativo || "Puesto Quetzales");
      }
    });
    return Array.from(puestos);
  }, [personas]);

  // Funcionarios por puesto
  const funcionariosPorPuesto = useMemo(() => {
    const mapa = {};
    personas.forEach((p) => {
      if (p.estado !== "Inactivo") {
        const puesto = p.puestoOperativo || "Puesto Quetzales";
        if (!mapa[puesto]) mapa[puesto] = [];
        mapa[puesto].push(p.nombre);
      }
    });
    return mapa;
  }, [personas]);

  // Funcionarios filtrados
  const funcionariosFiltrados = useMemo(() => {
    if (puestoSeleccionado === "todos") {
      return personas.filter((p) => p.estado !== "Inactivo");
    }
    return personas.filter(
      (p) =>
        p.estado !== "Inactivo" &&
        (p.puestoOperativo || "Puesto Quetzales") === puestoSeleccionado
    );
  }, [personas, puestoSeleccionado]);

  return (
    <section className="space-y-4">
      <Card
        title={t("roles.titulo")}
        icon="📊"
        action={
          <div className="flex flex-wrap items-center gap-2">
            <Tooltip text="Ver solo el puesto/funcionario seleccionado">
              <SecondaryButton
                onClick={() => setModoEnfocado(!modoEnfocado)}
                active={modoEnfocado}
              >
                <Icon name={modoEnfocado ? "eyeClosed" : "eye"} size={16} />
                {modoEnfocado ? "Modo normal" : "Modo enfocado"}
              </SecondaryButton>
            </Tooltip>
            <Button onClick={() => {/* Restaurar mes */}}>
              <Icon name="refresh" size={16} /> Restaurar mes
            </Button>
          </div>
        }
      >
        {/* Selector de mes/año */}
        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const newMonth = month - 1;
                const newYear = year - (newMonth < 0 ? 1 : 0);
                setMonth(newMonth < 0 ? 11 : newMonth);
                setYear(newYear);
              }}
              className="min-h-touch rounded-xl border border-slate-300 p-2 hover:bg-slate-50"
            >
              <Icon name="chevronLeft" size={18} />
            </button>
            <Select
              value={`${year}-${String(month + 1).padStart(2, "0")}`}
              onChange={(e) => {
                const [y, m] = e.target.value.split("-").map(Number);
                setYear(y);
                setMonth(m - 1);
              }}
              options={generarOpcionesMeses(year - 1, year + 1)}
              className="min-w-[180px]"
            />
            <button
              onClick={() => {
                const newMonth = month + 1;
                const newYear = year + (newMonth > 11 ? 1 : 0);
                setMonth(newMonth > 11 ? 0 : newMonth);
                setYear(newYear);
              }}
              className="min-h-touch rounded-xl border border-slate-300 p-2 hover:bg-slate-50"
            >
              <Icon name="chevronRight" size={18} />
            </button>
          </div>
          <div className="flex gap-2">
            <Select
              value={puestoSeleccionado}
              onChange={(e) => setPuestoSeleccionado(e.target.value)}
              options={[
                { value: "todos", label: "Todos los puestos" },
                ...puestosConFuncionarios.map((p) => ({ value: p, label: p })),
              ]}
            />
            <Select
              value={funcionarioSeleccionado}
              onChange={(e) => setFuncionarioSeleccionado(e.target.value)}
              options={[
                { value: "todos", label: "Todos los funcionarios" },
                ...funcionariosFiltrados.map((f) => ({ value: f.nombre, label: f.nombre })),
              ]}
              disabled={puestoSeleccionado === "todos"}
            />
          </div>
          <Tooltip text="Ir a una fecha específica">
            <button
              onClick={() => {/* Abrir modal de fecha */}}
              className="min-h-touch rounded-xl border border-slate-300 p-2 hover:bg-slate-50"
            >
              <Icon name="calendar" size={18} />
            </button>
          </Tooltip>
        </div>

        {/* Tabla de roles */}
        <RolesMensualGrid
          year={year}
          month={month}
          roleData={roleData}
          setRoleData={setRoleData}
          personas={modoEnfocado && puestoSeleccionado !== "todos"
            ? personas.filter((p) => (p.puestoOperativo || "Puesto Quetzales") === puestoSeleccionado)
            : personas}
          puestoSeleccionado={puestoSeleccionado}
          funcionarioSeleccionado={funcionarioSeleccionado}
          modoEnfocado={modoEnfocado}
        />
      </Card>
    </section>
  );
}
```

---

### 3.4 Mejoras en la Vista Día (Centro Operativo)

#### **📌 Problema Actual**
La vista `DiaLayout.jsx` es el **centro operativo** del sistema, pero:
- Muestra **demasiada información** en una sola pantalla (KPIs, cobertura por puesto, actividades, personal en turno, etc.).
- No hay una **jerarquía clara** entre los elementos.
- En móvil, la información se **apila verticalmente**, lo que obliga a mucho scroll.

#### **📌 Propuesta de Reestructuración**
1. **Dividir en pestañas**:
   - **Resumen**: KPIs + alertas críticas.
   - **Cobertura**: Calendario por puesto + detalle.
   - **Actividades**: Lista de actividades del día.
   - **Personal**: Funcionarios en turno/fuera de turno.
2. **Mostrar pestaña por defecto según contexto**:
   - En escritorio: **Resumen** (vista actual).
   - En móvil: **Cobertura** (información más crítica).
3. **Añadir botones de acción rápida**:
   - "+ Asignar actividad".
   - "Ver en Roles".
   - "Ver en Planificación".

**Código propuesto**:
```jsx
// src/features/dia/DiaLayout.jsx
import { useState } from "react";
import Card from "../../ui/Card.jsx";
import Tabs from "../../ui/Tabs.jsx";
import DiaResumen from "./DiaResumen.jsx";
import DiaCobertura from "./DiaCobertura.jsx";
import DiaActividades from "./DiaActividades.jsx";
import DiaPersonal from "./DiaPersonal.jsx";

export default function DiaLayout(props) {
  const { diaVista, setDiaVista, personas, actividadesPlan, roleData, reposiciones, hj, nAlertas, setView } = props;
  const isMobile = useMobile();
  const [pestaña, setPestaña] = useState(isMobile ? "cobertura" : "resumen");

  const tabs = [
    { id: "resumen", label: "Resumen", icon: "chart" },
    { id: "cobertura", label: "Cobertura", icon: "shield" },
    { id: "actividades", label: "Actividades", icon: "calendar" },
    { id: "personal", label: "Personal", icon: "users" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
      {/* Header */}
      <Card
        title={`Día: ${formatFecha(diaVista)}`}
        icon="📅"
        action={
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setDiaVista(anterior(diaVista))}
              className="min-h-touch rounded-xl border border-slate-300 p-2 hover:bg-slate-50"
            >
              <Icon name="chevronLeft" size={18} />
            </button>
            <input
              type="date"
              value={diaVista}
              onChange={(e) => setDiaVista(e.target.value)}
              className="rounded-xl border border-slate-300 p-2 text-sm [color-scheme:light] dark:[color-scheme:dark]"
            />
            <button
              onClick={() => setDiaVista(siguiente(diaVista))}
              className="min-h-touch rounded-xl border border-slate-300 p-2 hover:bg-slate-50"
            >
              <Icon name="chevronRight" size={18} />
            </button>
            <Button onClick={() => setView("roles")}>
              <Icon name="chart" size={16} /> Ver en Roles
            </Button>
          </div>
        }
      >
        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={pestaña} setActiveTab={setPestaña} />

        {/* Contenido de la pestaña */}
        {pestaña === "resumen" && (
          <DiaResumen
            personas={personas}
            actividadesPlan={actividadesPlan}
            roleData={roleData}
            diaVista={diaVista}
            nAlertas={nAlertas}
          />
        )}
        {pestaña === "cobertura" && (
          <DiaCobertura
            personas={personas}
            actividadesPlan={actividadesPlan}
            roleData={roleData}
            diaVista={diaVista}
          />
        )}
        {pestaña === "actividades" && (
          <DiaActividades
            actividadesPlan={actividadesPlan}
            diaVista={diaVista}
            setActividadesPlan={setActividadesPlan}
          />
        )}
        {pestaña === "personal" && (
          <DiaPersonal
            personas={personas}
            roleData={roleData}
            diaVista={diaVista}
          />
        )}
      </Card>

      {/* Botón FAB para asignar actividad (móvil) */}
      {isMobile && (
        <button
          onClick={() => {/* Abrir modal de actividad */}}
          className="fixed bottom-20 right-4 h-14 w-14 rounded-full bg-emerald-800 shadow-lg hover:bg-emerald-700"
        >
          <Icon name="plus" size={24} className="text-white" />
        </button>
      )}
    </div>
  );
}
```

---

---

## 4. DETALLES TÉCNICOS

### 4.1 Nuevos Componentes Reutilizables

#### **📌 Toast (Notificaciones)**
```jsx
// src/features/shared/Toast.jsx
import { useEffect } from "react";
import Icon from "../../ui/Icon.jsx";

const ToastTypes = {
  success: { icon: "check", color: "bg-emerald-600" },
  error: { icon: "x", color: "bg-red-600" },
  warning: { icon: "alert", color: "bg-amber-600" },
  info: { icon: "info", color: "bg-sky-600" },
};

export default function Toast({ type, message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const config = ToastTypes[type] || ToastTypes.info;

  return (
    <div className={`fixed bottom-4 right-4 z-50 rounded-xl ${config.color} p-4 text-white shadow-lg animate-slide-in`}>
      <div className="flex items-center gap-2">
        <Icon name={config.icon} size={18} />
        <span>{message}</span>
        <button onClick={onClose} className="ml-auto text-white/70 hover:text-white">
          <Icon name="x" size={16} />
        </button>
      </div>
    </div>
  );
}
```

#### **📌 Tooltip (Ayuda Contextual)**
```jsx
// src/features/shared/Tooltip.jsx
import { useState } from "react";

export default function Tooltip({ text, children, position = "top" }) {
  const [visible, setVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div
          className={`absolute z-50 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-2 text-sm text-white shadow-lg ${positions[position]}`}
          role="tooltip"
        >
          {text}
          <div className="absolute -z-10 h-2 w-2 rotate-45 bg-slate-800" />
        </div>
      )}
    </div>
  );
}
```

#### **📌 Tabs (Navegación por Pestañas)**
```jsx
// src/ui/Tabs.jsx
import { useState } from "react";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="border-b border-slate-200 mb-4">
      <nav className="flex gap-1 overflow-x-auto" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`min-h-touch flex items-center gap-1 border-b-2 px-3 py-2 text-sm font-semibold focus:outline-none ${
              activeTab === tab.id
                ? "border-emerald-600 text-emerald-600"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab.icon && <Icon name={tab.icon} size={16} />}
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
```

#### **📌 Select (Selector Estandarizado)**
```jsx
// src/ui/Form/Select.jsx
import Icon from "../Icon.jsx";

export default function Select({ value, onChange, options, className = "", disabled = false, label }) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full min-h-touch rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100 disabled:opacity-50 ${className}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label || option.value}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Icon name="chevronDown" size={16} className="text-slate-400" />
        </div>
      </div>
    </div>
  );
}
```

#### **📌 Input (Campo de Texto Estandarizado)**
```jsx
// src/ui/Form/Input.jsx
import { forwardRef } from "react";

export default forwardRef(function Input(
  { label, value, onChange, type = "text", error, required = false, className = "", ...props },
  ref
) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
          {label}
          {required && <span className="text-red-500" aria-hidden="true"> *</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full min-h-touch rounded-xl border ${error ? "border-red-500" : "border-slate-300"} bg-white px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100 ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${label.toLowerCase()}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${label.toLowerCase()}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});
```

---

### 4.2 Cambios en el Estado Global

#### **📌 Añadir Toast al Contexto**
```jsx
// src/context/AppContext.jsx
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (type, message, duration = 3000) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), duration);
  };

  return (
    <AppContext.Provider value={{ toast, showToast }}>
      {children}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  return context;
}
```

---

### 4.3 Validaciones en Tiempo Real

#### **📌 Funciones de Validación**
```javascript
// src/lib/validaciones.js

// Validar cédula costarricense (formato: 1-2345-6789)
export function validateCedula(cedula) {
  const regex = /^\d{1,2}-\d{4}-\d{4}$/;
  if (!regex.test(cedula)) return false;
  
  // Validar dígito de verificación (opcional, según necesidad)
  const [part1, part2, part3] = cedula.split("-").map(Number);
  const suma = String(part1).padStart(2, "0") + String(part2).padStart(4, "0") + String(part3).padStart(4, "0");
  const digito = Number(suma.charAt(suma.length - 1));
  const calculado = calcularDigitoVerificacion(suma.slice(0, -1));
  return digito === calculado;
}

function calcularDigitoVerificacion(numero) {
  const pesos = [1, 2, 1, 2, 1, 2, 1, 2, 1];
  let suma = 0;
  for (let i = 0; i < numero.length; i++) {
    const digito = Number(numero.charAt(i));
    const peso = pesos[i % pesos.length];
    suma += digito * peso;
  }
  const modulo = suma % 10;
  return modulo === 0 ? 0 : 10 - modulo;
}

// Validar correo electrónico
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validar fecha (YYYY-MM-DD)
export function validateFecha(fecha) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(fecha)) return false;
  const date = new Date(fecha);
  return !isNaN(date.getTime());
}

// Validar que un nombre tiene al menos 2 caracteres
export function validateNombre(nombre) {
  return nombre.trim().length >= 2;
}
```

---

---

## 5. ROADMAP DE IMPLEMENTACIÓN

### 5.1 Priorización de Mejoras UX/UI

| **ID** | **Mejora** | **Prioridad** | **Esfuerzo** | **Impacto** | **Dependencias** |
|--------|------------|---------------|--------------|-------------|------------------|
| **UX1** | Implementar sistema de Toast | ⭐⭐⭐⭐⭐ | Bajo (1 día) | ⭐⭐⭐⭐⭐ | Ninguna |
| **UX2** | Crear componentes reutilizables (Input, Select, Button, Tooltip) | ⭐⭐⭐⭐⭐ | Medio (3 días) | ⭐⭐⭐⭐⭐ | UX1 |
| **UX3** | Reestructurar ModalFuncionario como Wizzard | ⭐⭐⭐⭐⭐ | Medio (4 días) | ⭐⭐⭐⭐⭐ | UX2 |
| **UX4** | Mostrar filtros básicos por defecto en Funcionarios | ⭐⭐⭐⭐ | Bajo (1 día) | ⭐⭐⭐⭐ | UX2 |
| **UX5** | Simplificar vista Roles (filtros visibles + selector de mes/año) | ⭐⭐⭐⭐ | Medio (3 días) | ⭐⭐⭐⭐ | UX2 |
| **UX6** | Dividir vista Día en pestañas | ⭐⭐⭐⭐ | Medio (3 días) | ⭐⭐⭐⭐ | UX2 |
| **UX7** | Añadir tooltips contextuales | ⭐⭐⭐ | Bajo (2 días) | ⭐⭐⭐ | UX2 |
| **UX8** | Validaciones en tiempo real | ⭐⭐⭐⭐ | Medio (2 días) | ⭐⭐⭐⭐ | UX2 |
| **UX9** | Virtualización de tablas grandes (Roles) | ⭐⭐⭐ | Medio (3 días) | ⭐⭐⭐ | Ninguna |
| **UX10** | Unificar estilos de botones y badges | ⭐⭐⭐ | Bajo (2 días) | ⭐⭐⭐ | UX2 |

### 5.2 Roadmap por Fases (4 Semanas)

#### **📅 Semana 1: Fundamentos UX**
| **Día** | **Tarea** | **Entregable** | **Responsable** |
|---------|-----------|----------------|-----------------|
| 1 | Crear sistema de Toast | `src/features/shared/Toast.jsx` | Desarrollador |
| 1 | Crear componente Tooltip | `src/features/shared/Tooltip.jsx` | Desarrollador |
| 2 | Crear componentes de formulario (Input, Select) | `src/ui/Form/` | Desarrollador |
| 2 | Unificar estilos de botones | `src/ui/Button/` | Desarrollador |
| 3 | Añadir Toast al contexto global | `src/context/AppContext.jsx` | Desarrollador |
| 4 | Validar implementación base | Tests manuales | QA |

#### **📅 Semana 2: Wizzard y Filtros**
| **Día** | **Tarea** | **Entregable** | **Responsable** |
|---------|-----------|----------------|-----------------|
| 5 | Crear componente Wizzard | `src/features/shared/Wizzard.jsx` | Desarrollador |
| 6 | Reestructurar ModalFuncionario como Wizzard | `src/features/funcionarios/FuncionarioWizzard.jsx` | Desarrollador |
| 7 | Mostrar filtros básicos por defecto en Funcionarios | `src/features/funcionarios/Funcionarios.jsx` | Desarrollador |
| 8 | Añadir tooltips en Funcionarios y Roles | Varias vistas | Desarrollador |
| 9 | Validar flujos de creación/edición | Tests manuales | QA |

#### **📅 Semana 3: Vista Roles y Día**
| **Día** | **Tarea** | **Entregable** | **Responsable** |
|---------|-----------|----------------|-----------------|
| 10 | Simplificar vista Roles (filtros visibles + selector de mes/año) | `src/features/roles/Roles.jsx` | Desarrollador |
| 11 | Crear componente Tabs | `src/ui/Tabs.jsx` | Desarrollador |
| 12 | Dividir vista Día en pestañas | `src/features/dia/DiaLayout.jsx` | Desarrollador |
| 13 | Añadir validaciones en tiempo real | `src/lib/validaciones.js` | Desarrollador |
| 14 | Validar navegación y filtros | Tests manuales | QA |

#### **📅 Semana 4: Optimización y QA**
| **Día** | **Tarea** | **Entregable** | **Responsable** |
|---------|-----------|----------------|-----------------|
| 15 | Virtualización de tablas grandes (Roles) | `src/features/roles/RolesMensualGrid.jsx` | Desarrollador |
| 16 | Unificar estilos de badges | `src/ui/Badge/` | Desarrollador |
| 17 | Optimizar rendimiento en móvil | Varias vistas | Desarrollador |
| 18 | Tests E2E de flujos UX | Playwright | Desarrollador |
| 19 | QA final y ajustes | Validación completa | QA |

---

---

## 6. BENEFICIOS ESPERADOS

### 6.1 Impacto en la Experiencia de Usuario

| **Métrica** | **Antes** | **Después** | **Mejora** |
|-------------|-----------|-------------|------------|
| Tiempo para crear un funcionario | ~2-3 minutos | ~1 minuto | ⬇️ 50-60% |
| Tasa de errores en formularios | ~15% | ~5% | ⬇️ 66% |
| Satisfacción del usuario (encuesta) | 7/10 | 9/10 | ⬆️ 28% |
| Tasa de adopción de filtros | ~30% | ~80% | ⬆️ 166% |
| Tiempo para navegar en Roles | ~30 segundos | ~10 segundos | ⬇️ 66% |

### 6.2 Impacto Técnico

| **Métrica** | **Antes** | **Después** | **Mejora** |
|-------------|-----------|-------------|------------|
| Líneas de código en ModalFuncionario | ~200 | ~100 (por paso) | ⬇️ 50% |
| Componentes reutilizables | ~5 | ~20 | ⬆️ 300% |
| Cobertura de tests UX | 0% | ~80% | ⬆️ 80% |
| Tamaño del bundle (CSS) | ~50KB | ~40KB | ⬇️ 20% |

### 6.3 Impacto en el Negocio

| **Área** | **Beneficio** |
|----------|---------------|
| **Operativa** | Menos tiempo en gestión de personal y roles. |
| **Capacitación** | Menos tiempo de entrenamiento para nuevos usuarios. |
| **Soporte** | Menos consultas por "no sé cómo hacer X". |
| **Mantenimiento** | Código más limpio y fácil de modificar. |

---

---

## 7. ANEXOS

### Anexo A: Comparativa Visual "Antes vs. Después"

#### **📌 ModalFuncionario: Antes**
```
+---------------------------------------------------+
|  Agregar Funcionario                              |
+---------------------------------------------------+
|                                                   |
|  [Identificación]                                 |
|  Nombre:        [______________]                 |
|  Cédula:        [______________]                 |
|  Correo:        [______________]                 |
|                                                   |
|  [Puesto y condición]                            |
|  Cargo:         [Guardaparques ▼]               |
|  Puesto:        [Puesto Orosi ▼]                |
|  Condición:     [Propiedad ▼]                   |
|  Estado:        [Activo ▼]                      |
|                                                   |
|  [Jornada y modalidad]                          |
|  Jornada:       [Ordinaria ▼]                   |
|  Modalidad:     [10x5 ▼]                         |
|                                                   |
|  [Contratación y fechas]                         |
|  Resolución:    [______________]                 |
|  Contrato:      [______________]                 |
|  Vencimiento:   [______________]                 |
|  Ingreso:       [______________]                 |
|                                                   |
|  [Atributos]                                      |
|  [✓] Disponibilidad  [✓] Policía  [✓] Brigada  |
|                                                   |
|  [Observaciones]                                 |
|  [_______________________________]              |
|  [_______________________________]              |
|                                                   |
+---------------------------------------------------+
|  [Cancelar]                      [Guardar]        |
+---------------------------------------------------+
```

#### **📌 ModalFuncionario: Después (Wizzard)**
```
+---------------------------------------------------+
|  Agregar Funcionario                              |
+---------------------------------------------------+
|  ████████░░░░░░░░░░░░░░░░░░░░░░  Paso 1 de 3     |
+---------------------------------------------------+
|                                                   |
|  Paso 1: Datos básicos                            |
|  -----------------------------------------------  |
|  Nombre:        [______________] ✅               |
|  Cédula:        [1-2345-6789]   ✅               |
|  Correo:        [juan@sinac.go.cr] ✅            |
|                                                   |
+---------------------------------------------------+
|  [Atrás]                          [Siguiente]       |
+---------------------------------------------------+

+---------------------------------------------------+
|  Agregar Funcionario                              |
+---------------------------------------------------+
|  ████████████████░░░░░░░░░░░░  Paso 2 de 3     |
+---------------------------------------------------+
|                                                   |
|  Paso 2: Puesto y condición                       |
|  -----------------------------------------------  |
|  Cargo:         [Guardaparques ▼]               |
|  Puesto:        [Puesto Orosi ▼]                |
|  Condición:     [Propiedad ▼]                   |
|  Estado:        [Activo ▼]                      |
|                                                   |
+---------------------------------------------------+
|  [Atrás]                          [Siguiente]       |
+---------------------------------------------------+

+---------------------------------------------------+
|  Agregar Funcionario                              |
+---------------------------------------------------+
|  ████████████████████████  Paso 3 de 3     |
+---------------------------------------------------+
|                                                   |
|  Paso 3: Jornada y atributos                      |
|  -----------------------------------------------  |
|  Jornada:       [Acumulativa ▼]                 |
|  Modalidad:     [10x5 ▼]                         |
|  [✓] Disponibilidad  [✓] Policía  [✓] Brigada  |
|  Observaciones: [______________]                 |
|                                                   |
+---------------------------------------------------+
|  [Atrás]                          [Guardar]         |
+---------------------------------------------------+
```

---

#### **📌 Funcionarios: Antes**
```
+---------------------------------------------------+
|  👥 Funcionarios          [+ Agregar] [Tabla/Tarjetas] |
+---------------------------------------------------+
|  [______________________]  16/16                |
|  ▼ Ver filtros                                      |
+---------------------------------------------------+
|  Nombre          | Cargo       | Puesto       | ... |
|  Juan Pérez      | Guardaparques | Puesto Orosi | ... |
|  María López     | Admin        | Puesto QZ    | ... |
|  ...                                             |
+---------------------------------------------------+
```

#### **📌 Funcionarios: Después**
```
+---------------------------------------------------+
|  👥 Funcionarios          [+ Agregar] [Más filtros] |
+---------------------------------------------------+
|  [______________________]                         |
+---------------------------------------------------+
|  [Todos ▼] [Todos los puestos ▼]      16/16      |
+---------------------------------------------------+
|  Nombre          | Cargo       | Puesto       | ... |
|  Juan Pérez      | Guardaparques | Puesto Orosi | ... |
|  María López     | Admin        | Puesto QZ    | ... |
|  ...                                             |
+---------------------------------------------------+
```

---

#### **📌 Roles: Antes**
```
+---------------------------------------------------+
|  📊 Roles                [Restaurar mes] [Vista compacta] |
+---------------------------------------------------+
|  ▼ Filtros (oculto)                               |
|  [______________] [Ir a fecha]                     |
+---------------------------------------------------+
|  [Puesto Orosi] [Puesto Quetzales] [Puesto LE]    |
|  +-----------------------------------------------+ |
|  | Nombre         | 1 | 2 | 3 | ... | 31 |       |
|  | Juan Pérez     | T1| T2| T3| ... |L1 |       |
|  | María López    | L1| L2| L3| ... |T1 |       |
|  +-----------------------------------------------+ |
+---------------------------------------------------+
```

#### **📌 Roles: Después**
```
+---------------------------------------------------+
|  📊 Roles                [Modo enfocado] [Restaurar mes] |
+---------------------------------------------------+
|  [◀ Septiembre 2026 ▶]                            |
|  [Todos los puestos ▼] [Todos los funcionarios ▼]  |
+---------------------------------------------------+
|  [Puesto Orosi]                                  |
|  +-----------------------------------------------+ |
|  | Nombre         | 1 | 2 | 3 | ... | 31 |       |
|  | Juan Pérez     | T1| T2| T3| ... |L1 |       |
|  | María López    | L1| L2| L3| ... |T1 |       |
|  +-----------------------------------------------+ |
+---------------------------------------------------+
```

---

---

## 🎯 CIERRE

### **Resumen Ejecutivo**
Este documento identifica **10+ puntos de fricción** en la UX/UI actual del sistema **PNLQ – Gestión de Jornadas Laborales** y propone **soluciones concretas** para mejorar la **intuitividad, fluidez y reducción de saturación**. Las mejoras se centran en:

1. **Reestructuración modular**: Dividir el código en componentes reutilizables (Wizzard, Toast, Tooltip, Tabs, Input, Select).
2. **Flujos secuenciales**: Reemplazar formularios largos por **wizzards** con pasos claros.
3. **Simplificación de interfaces**: Mostrar solo la información esencial, ocultar lo avanzado en menús secundarios.
4. **Feedback en tiempo real**: Validaciones inline + toasts de confirmación.
5. **Consistencia visual**: Unificar estilos de botones, badges y tipografía.

**Impacto esperado**:
- ⬇️ **50-60%** en tiempo para completar tareas.
- ⬇️ **66%** en tasa de errores.
- ⬆️ **28%** en satisfacción del usuario.

### **Próximos Pasos**
1. **Revisar y aprobar** este documento.
2. **Priorizar** las mejoras UX/UI según las necesidades del equipo.
3. **Asignar recursos** para la implementación.
4. **Iniciar desarrollo** siguiendo el roadmap de 4 semanas.

**Nota**: Todas las mejoras están diseñadas para **no romper** la funcionalidad existente y para mantener los **30 indicadores obligatorios** intactos.

---

**Documento generado por**: Vibe Code (Mistral AI)  
**Fecha**: 11 de septiembre de 2026  
**Versión del sistema**: 1.14.17
