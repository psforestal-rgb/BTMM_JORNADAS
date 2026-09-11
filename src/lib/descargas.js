/**
 * Descarga de archivos generados en el navegador.
 *
 * Vive aparte porque lo necesitan dos sitios (respaldo JSON en «Datos» y
 * exportación CSV de funcionarios) y una segunda copia acabaría divergiendo.
 *
 * Devuelve `false` en vez de lanzar: un navegador que bloquee la descarga no
 * debe tumbar la vista, y el llamador decide cómo avisar.
 */
export function descargarArchivo(nombre, contenido, tipo = "application/json") {
  try {
    const blob = new Blob([contenido], { type: tipo });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return true;
  } catch {
    return false;
  }
}
