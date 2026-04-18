/**
 * Extrait le contenu du template d'un fichier .vue importé avec ?raw
 * @param sourceCode - Le code source brut du fichier .vue
 * @returns Le contenu du <template> formaté
 */
export function extractTemplate(sourceCode: string): string {
  const templateMatch = sourceCode.match(/<template>([\s\S]*?)<\/template>/);

  if (!templateMatch) {
    console.warn("No <template> found in source code");
    return "";
  }

  return templateMatch[1].trim();
}

/**
 * Extrait et formate le contenu du script d'un fichier .vue importé avec ?raw
 * @param sourceCode - Le code source brut du fichier .vue
 * @returns Le contenu du <script> formaté
 */
export function extractScript(sourceCode: string): string {
  const scriptMatch = sourceCode.match(/<script[^>]*>([\s\S]*?)<\/script>/);

  if (!scriptMatch) {
    console.warn("No <script> found in source code");
    return "";
  }

  return scriptMatch[1].trim();
}

/**
 * Extrait et formate le contenu du style d'un fichier .vue importé avec ?raw
 * @param sourceCode - Le code source brut du fichier .vue
 * @returns Le contenu du <style> formaté
 */
export function extractStyle(sourceCode: string): string {
  const styleMatch = sourceCode.match(/<style[^>]*>([\s\S]*?)<\/style>/);

  if (!styleMatch) {
    console.warn("No <style> found in source code");
    return "";
  }

  return styleMatch[1].trim();
}
