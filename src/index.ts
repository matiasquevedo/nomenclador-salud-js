// src/index.ts

import Studies from './utils/studies';



export function saludar(nombre: string): string {
  return `¡Hola, ${nombre}!`;
}

export function sumar(a: number, b: number): number {
  return a + b;
}

export { Studies };