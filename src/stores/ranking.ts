import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { RankingEntry } from '@/types/game';

const STORAGE_KEY = 'concurso_musical_rankings';

export const useRankingStore = defineStore('ranking', () => {
    // 1. Estado: lista de clasificaciones cargadas de localStorage
    const rankings = ref<RankingEntry[]>(loadFromStorage())

    function loadFromStorage(): RankingEntry[] {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? (JSON.parse(data) as RankingEntry[]) : [];
        } catch (e) {
            console.error('Error al cargar rankings de localStorage:', e);
            return [];
        }
    }

    function saveToStorage() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(rankings.value));
        } catch (e) {
            console.error('Error al guardar rankings en localStorage:', e);
        }
    }

    /**
     * Ordena según los criterios de la práctica:
     * 1. Puntos descendente (más puntos primero)
     * 2. Desempate: Menor tiempo de escucha primero
     * 3. Más reciente primero
     */
    const sortedRankings = computed(() => {
        return [...rankings.value].sort((a, b) => {
            // Criterio 1: Mayor puntuación
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            // Criterio 2: Desempate por menor tiempo de escucha
            if (a.totalListeningTime !== b.totalListeningTime) {
                return a.totalListeningTime - b.totalListeningTime;
            }
            // Criterio 3: Fecha más reciente
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
    })

    // Top 10 mejores puntuaciones
    const top10 = computed(() => {
        return sortedRankings.value.slice(0, 10);
    })

    /**
     * Guarda una nueva partida en el ranking
     */
    function addEntry(entryData: Omit<RankingEntry, 'id' | 'date'>): RankingEntry {
        const newEntry: RankingEntry = {
            ...entryData,
            id: crypto.randomUUID ? crypto.randomUUID() : `rank_${Date.now()}`,
            date: new Intl.DateTimeFormat('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }).format(new Date()),
        };

        rankings.value.push(newEntry);
        saveToStorage();
        return newEntry;
    }

    /**
     * Obtiene la posición (1-indexed) de una entrada específica en el ranking global
     */
    function getPosition(entryId: string): number {
        return sortedRankings.value.findIndex((item) => item.id === entryId) + 1;
    }

    /**
     * Comprueba si una posición está dentro del Top 10
     */
    function isTop10(position: number): boolean {
        return position > 0 && position <= 10;
    }

    return {
        rankings,
        sortedRankings,
        top10,
        addEntry,
        getPosition,
        isTop10,
    };
});