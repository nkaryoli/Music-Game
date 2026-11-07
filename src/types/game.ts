export interface AnswerOption {
    id: string,
    text: string,
    isCorrect: boolean
}

export interface SongQuestion {
    id: number,
    title: string,
    artist: string,
    audioSrc: string,
    questionText: string ,// Ej: "¿Qué canción es?"
    options: AnswerOption[]
}

export type AnswerStatus = 'idle' | 'correct' | 'wrong' | 'timeout';

export interface RankingEntry {
    id: string,
    playerName: string,
    score: number, // Puntos (ej: 70)
    totalQuestions: number, // 10
    correctCount: number, // ej: 7
    accuracy: number, // Porcentaje (ej: 70)
    totalListeningTime: number, // Segundos totales de escucha (para desempate)
    date: string // Formato legible ej: "3 nov 2025" o ISO
}