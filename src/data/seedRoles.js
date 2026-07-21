// Datos normalizados desde “Rol Bloque 2026.xlsm”.
// La fuente contiene enero-agosto de 2026. Julio-agosto corresponden a la
// revisión del archivo institucional del 21/07/2026; los meses sin datos
// quedan en blanco.
// Conversión: número -> T; L/V/IN se preservan; F/FA/G y otros -> O-<código>.
import { puestos } from "./puestos.js";

const FUENTE_ROLES_2026 = {
  "1": {
    "Alexander Alvarado": "O-F LI LI LI LI LI LI V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 V1 V2 V3 V4 V5 V6",
    "Carlos Cordero": "O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1",
    "Diana Tencio": "O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1",
    "Errol Salazar": "O-F T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6",
    "Fabricio Carbonell": "O-F O-FA T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 L1",
    "Guillermo Pérez": "L4 L5 L6 O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6",
    "Jetzelly Villalobos": "L1 L2 L3 L4 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 V1 V2 L1 LA",
    "Josué Brenes": "L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA",
    "Karen Valle": "O-F T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1",
    "Kenneth Mena": "L3 L4 L5 L6 T1 O-FA T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 IN IN",
    "Laura Valverde": "O-F V7 V8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6",
    "Mariano Solís": "O-F T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA V1 V2 V3 V4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4",
    "Mayra Espinoza": "L3 L4 L5 O-FA LA LA LA LA LA LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2",
    "Yeison Cortés": "O-F T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4",
    "Yolanda Elizondo": "O-F V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15 V16 L1 L2 L3 L4 L5 L6 L7 L8 O-FA T1 T2 T3 T4 T5 T6 T7 T8"
  },
  "2": {
    "Alexander Alvarado": "V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4",
    "Carlos Cordero": "T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1",
    "Diana Tencio": "L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 LA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 L1",
    "Errol Salazar": "LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8",
    "Fabricio Carbonell": "T6 T7 T8 T9 T10 T11 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 L4 L5 L1 L2 L3 L4 L5 T1 T2 T3 T4",
    "Guillermo Pérez": "T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10",
    "Jetzelly Villalobos": "V1 V2 V3 V4 V5 L1 L2 L3 T1 T2 T3 T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11",
    "Josué Brenes": "V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 L1 L2 V1 V2 V3 V4 L1 L2",
    "Karen Valle": "L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1",
    "Kenneth Mena": "IN IN IN IN IN IN IN IN IN IN IN IN L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13",
    "Laura Valverde": "T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4",
    "Mariano Solís": "L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15",
    "Mayra Espinoza": "T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11",
    "Yeison Cortés": "T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1",
    "Yolanda Elizondo": "T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3"
  },
  "3": {
    "Alexander Alvarado": "T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 · · · · · · · · · · · · · · · · · · · ·",
    "Carlos Cordero": "L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 L1 T1 T2 T3 T4 T5 T6 T7 T8",
    "Diana Tencio": "L2 LA LA LA T4 T5 L1 L2 T1 T2 T3 LA T5 L1 L2 O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G O-G L1 L2 T1 T2",
    "Errol Salazar": "T9 T10 L1 L2 L3 L4 L5 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7",
    "Fabricio Carbonell": "T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5",
    "Guillermo Pérez": "T11 T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 L1 L2 V1 V2 V3 V4 V5 V6 V7 L1 L2 L3 L4 IN IN IN IN IN",
    "Jetzelly Villalobos": "T12 L1 L2 L3 L4 L5 L6 LA LA V1 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6",
    "Josué Brenes": "LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5",
    "Karen Valle": "L2 T1 T2 T3 T4 T5 L1 L2 IN T2 T3 T4 T5 L1 L2 T1 LA LA T4 T5 L1 L2 T1 T2 T3 V1 T5 L1 L2 T1 T2",
    "Kenneth Mena": "V14 V15 L1 L2 L3 IN IN IN IN IN IN IN V1 V2 V3 V4 L1 L2 IN IN IN IN IN IN IN IN IN IN IN IN IN",
    "Laura Valverde": "L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11",
    "Mariano Solís": "V16 L1 L2 L3 L4 L5 L6 L7 L8 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10",
    "Mayra Espinoza": "T12 T13 T14 T15 T16 T17 L1 L2 L3 L4 L5 L6 L7 L8 L9 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1",
    "Yeison Cortés": "L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T1",
    "Yolanda Elizondo": "L4 L5 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4"
  },
  "4": {
    "Carlos Cordero": "T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5",
    "Diana Tencio": "LA O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4",
    "Errol Salazar": "T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9",
    "Fabricio Carbonell": "T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 V5 V6 V7 V8",
    "Guillermo Pérez": "IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4",
    "Jetzelly Villalobos": "T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3",
    "Josué Brenes": "T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 V1 V2 V3 V4 L1 L2 LA T2 T3 T4 T5 T6 T7 T8 T9",
    "Karen Valle": "T3 O-F O-F L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4",
    "Kenneth Mena": "IN V1 V2 V3 L1 IN IN IN IN IN IN IN IN IN IN IN IN IN IN V1 V2 L1 L L L L L L L L",
    "Laura Valverde": "T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 T1 T2 T3",
    "Mariano Solís": "L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10",
    "Mayra Espinoza": "T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA V1 V2 V3 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 L",
    "Yeison Cortés": "L2 L3 L4 L5 L6 T2 L1 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 IN IN IN T3 T4 T5 T6 T7",
    "Yolanda Elizondo": "T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2"
  },
  "5": {
    "Carlos Cordero": "T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 O-FA V1 V2 V3 V4 V5 V6 V7 V8",
    "Diana Tencio": "T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2",
    "Errol Salazar": "T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA O-FA O-FA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3",
    "Fabricio Carbonell": "V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA O-FA O-FA O-FA O-FA T1 T2 T3 T4",
    "Guillermo Pérez": "IN IN IN IN IN IN IN IN IN IN IN IN IN IN T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5",
    "Jetzelly Villalobos": "T4 T5 T6 L1 L2 L3 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 LA LA LA LA LA V1 V2",
    "Josué Brenes": "T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 LA L1 L2 L3 L4 LA",
    "Juan Pablo Granados": "T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3",
    "Karen Valle": "T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2",
    "Kenneth Mena": "L L L L L L L L L L L L L L L L L L L L L L L V1 V2 V3 V4 V5 V6 L1 L2",
    "Laura Valverde": "T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4",
    "Mariano Solís": "L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1",
    "Mayra Espinoza": "L1 L2 L3 L4 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8",
    "Pablo Sánchez": "T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2",
    "Yeison Cortés": "O-FA L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 LA T4 T5 T6 T7 T8 L1 L2 L3",
    "Yolanda Elizondo": "T3 T4 T5 T6 T7 T8 T9 LA L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3"
  },
  "6": {
    "Carlos Cordero": "V9 V10 V11 V12 V13 V14 V15 V16 V17 V18 V19 V20 L1 L2 L3 L4 L5 L6 L7 L8 L9 L10 O-FA V1 V2 V3 V4 V5 V6 V7",
    "Diana Tencio": "T1 T2 T3 LA T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2",
    "Errol Salazar": "T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5",
    "Fabricio Carbonell": "T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 L1 T10 L2 L3 T1 L4 L5 T2 T3 T4 T5 T6 T7",
    "Guillermo Pérez": "T6 L1 L2 L3 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10",
    "Jetzelly Villalobos": "V3 V4 L1 L2 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8",
    "Josué Brenes": "LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 L1 L2 L3 T1 T2 L4 L5 L6 L1 · · · · · · · · ·",
    "Juan Pablo Granados": "L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3",
    "Karen Valle": "T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 LA T5 L2 T1 T2 T3 T4 LA L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2",
    "Kenneth Mena": "L3 T1 T2 T3 T4 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2",
    "Laura Valverde": "T5 T6 T7 T8 L1 L2 L3 L4 O-FA O-FA O-FA O-FA LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 V1 V2 V3 V4 L1",
    "Mariano Solís": "L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1",
    "Mayra Espinoza": "T9 T10 T11 T12 T13 T14 L1 L2 L3 L4 L5 L6 L7 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1",
    "Pablo Sánchez": "T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 V1 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2",
    "Yeison Cortés": "L4 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2",
    "Yolanda Elizondo": "T4 T5 T6 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1"
  },
  "7": {
    "Carlos Cordero": "V8 L1 L2 L3 L4 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5",
    "Diana Tencio": "T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5",
    "Errol Salazar": "T1 T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1",
    "Fabricio Carbonell": "T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8",
    "Guillermo Pérez": "L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8",
    "Jetzelly Villalobos": "T9 T10 L1 L2 L3 L4 L5 LA T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6",
    "Juan Pablo Granados": "L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 L1 L2 L3 LA LA",
    "Karen Valle": "T3 T4 LA T5 L2 T1 T2 T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5",
    "Kenneth Mena": "T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 LA T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5",
    "Laura Valverde": "L2 LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3 T4 T5 T6 T7 T8 L1",
    "Mariano Solís": "L2 L3 L4 L5 LA V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11",
    "Mayra Espinoza": "T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5",
    "Pablo Sánchez": "T3 T4 T5 L1 L2 V1 V2 V3 V4 V5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5",
    "Yeison Cortés": "T3 T4 T5 L1 L2 T1 T2 T3 V1 V2 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5",
    "Yolanda Elizondo": "T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2"
  },
  "8": {
    "Carlos Cordero": "T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T5",
    "Diana Tencio": "L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1",
    "Errol Salazar": "T2 T3 T4 T5 T6 T7 T8 L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5",
    "Fabricio Carbonell": "L1 L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2",
    "Guillermo Pérez": "T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T10",
    "Jetzelly Villalobos": "T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7",
    "Karen Valle": "L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1",
    "Kenneth Mena": "L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1",
    "Laura Valverde": "L2 L3 L4 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3",
    "Mariano Solís": "T12 L1 L2 L3 L4 L5 L6 V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 L1 L2 L3 L4 L5 L6 L7 T1 T2 T3",
    "Mayra Espinoza": "L6 LA V1 V2 V3 V4 V5 V6 V7 V8 L1 L2 L3 L4 LA LA T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5",
    "Monserrath Navarro": "T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3",
    "Pablo Sánchez": "L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1",
    "Yeison Cortés": "L4 LA T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1 T2 T3 T4 T5 L1 L2 T1",
    "Yolanda Elizondo": "T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 L1 L2 L3 L4 L5 L6 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 L1 L2 L3 L4 L5"
  }
};

const DIAS_MES_2026 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const ROLES_FUENTE_HASTA = "2026-08-31";
export const ROLES_FUENTE_VERSION = "2026-07-21T20:19:49.675Z";

export const baseRoleData = (() => {
  const result = {};
  for (let month = 1; month <= 12; month += 1) {
    const sourceMonth = FUENTE_ROLES_2026[month] || {};
    for (const puesto of puestos) {
      for (const nombre of puesto.funcionarios) {
        const tokens = sourceMonth[nombre]?.split(" ") || [];
        for (let day = 1; day <= DIAS_MES_2026[month - 1]; day += 1) {
          const token = tokens[day - 1];
          result[`2026-${month}-${puesto.nombre}-${nombre}-${day}`] = token && token !== "·" ? token : "";
        }
      }
    }
  }
  return result;
})();

// Solo julio-agosto se vuelve a imponer sobre instalaciones existentes: es
// la pestaña revisada en la fuente enlazada. Enero-junio y los meses futuros
// quedan fuera de esta actualización para no borrar historia ni ediciones
// locales que la fuente actual no pretende revisar.
export const roleDataFuenteActualizacion = Object.fromEntries(
  Object.entries(baseRoleData).filter(([key]) => {
    const match = key.match(/^2026-(\d+)-/);
    const month = Number(match?.[1]);
    return month >= 7 && month <= 8;
  }),
);

export function reconciliarRoleDataConFuente(roleData = {}) {
  return { ...roleData, ...roleDataFuenteActualizacion };
}
