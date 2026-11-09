# Music Game


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


# Plan de Acción por Fases



### Fase 1: Dependencias y Banco de Datos



1. **Instalar Howler**: Instalar howler y sus declaraciones TypeScript @types/howler en Music-Game.

2. **Dataset de 20 Canciones (songs.json / songs.ts):**
* Crear un archivo con 20 canciones populares (Adele, Queen, Michael Jackson, etc.) asociadas a los audios mp3 (copiaremos las pistas de reproductor-musical a Music-Game/public/music o src/assets/music).
* Cada canción incluirá: id, title, artist, audioSrc, options: \[{ text, isCorrect }].



### Fase 2: Stores de Pinia (Gestión Centralizada)



1. **useRankingStore:**
* Lectura y escritura reactiva en localStorage.
* Lógica de ordenación: puntos descendente → menor tiempo total de escucha → fecha más reciente.
* Función para registrar nueva puntuación y determinar si entró al Top 10.



2. **useAudioStore:**
* Integración con Howler.js.
* Reproducción automática del fragmento de 5 segundos con cálculo de offset aleatorio: seek(randomStart) → temporizador de 5s → pausa y reseteo.
* Cálculo del tiempo acumulado de reproducción para desempatar.



3. **useGameStore:**
* Gestión de rondas (1 a 10), selección de 10 canciones aleatorias.
* Puntuación (+10 / -5 / 0), estado de la pregunta (unanswered, correct, wrong, timeout).

### 

### Fase 3: Landing Page (HomeView)



1. Ajustar el diseño actual de HomeView.vue para que coincida exactamente con las capturas de la práctica:
* Banner superior "¡Nuevo Juego! ¿Cuánto sabes de música?".
* Sección de estadísticas: 10 preguntas | 100 puntos máx | 5s por canción.
* Tarjetas explicativas (Escucha, Adivina, Compite).
* Bloque CTA final animado con enlace a /play.



### Fase 4: Concurso (GameView)

1. Pantalla Inicial de Bienvenida:
* Formulario para ingresar el nombre del jugador antes de iniciar la partida.



2. Interfaz de Juego:
* GameHeader: muestra el nombre del jugador, puntos acumulados y la barra de progreso (ej. "Pregunta 3 de 10 - 30%").
* Reproductor visual: botón central animado de reproducción y barra indicadora de 5 segundos.
* Opciones de respuesta: botones interactivos con transiciones y feedback visual inmediato (verde / rojo con iconos de check y cruz).
* Temporizador de respuesta que active el estado de tiempo agotado si el usuario no contesta.
* Botón "Siguiente Pregunta".



3. Pantalla de Resumen Final:
* Tarjeta de feedback según puntuación ("¡Excelente! Tienes un gran conocimiento musical").
* Resumen de aciertos, precisión en % y posición alcanzada en el ranking.
* Botón "Jugar de Nuevo".



### Fase 5: Ranking (RankingView)



1. Vista vacía cuando no existen registros previos.

2. Tabla de clasificación con las 10 mejores marcas:
* Corona de oro para el 1.º lugar, medallas para 2.º y 3.º.
* Badge "Tú" para resaltar la puntuación obtenida por el usuario actual.
* Visualización de fecha, % de precisión, puntos y tiempo de desempate.



3. Mensaje motivacional si el jugador no logró entrar en el Top 10.

4. Botones "Volver al Inicio" y "Jugar Ahora".



### Fase 6: Pruebas, Verificación y Accesibilidad



1. Validar que la compilación de TypeScript y el linter no tengan advertencias (npm run type-check y npm run lint).

2. Comprobar el ciclo de vida del audio (que no queden instancias de Howler sonando al cambiar de ruta o reiniciar).

3. Verificar persistencia de rankings reiniciando el navegador o recargando la página.







