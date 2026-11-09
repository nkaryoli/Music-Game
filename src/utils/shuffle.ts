/**
 * Mezcla aleatoriamente los elementos de un array sin mutar el original.
 */
export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}
