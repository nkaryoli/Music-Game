import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import avatar1 from '@/assets/img/avatar1.png';
import avatar2 from '@/assets/img/avatar2.png';
import avatar3 from '@/assets/img/avatar3.png';
import avatar4 from '@/assets/img/avatar4.png';
import avatar5 from '@/assets/img/avatar5.png';
import avatar6 from '@/assets/img/avatar6.png';
import avatar7 from '@/assets/img/avatar7.png';

const AUTH_STORAGE_KEY = 'music_game_auth_user';

export const AVATAR_PATHS = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7] as const;
export type AvatarPath = (typeof AVATAR_PATHS)[number];

export interface UserSession {
    username: string;
    email?: string;
    avatarPath?: string;
    loginDate: string;
}

export const useAuthStore = defineStore('auth', () => {

    const user = ref<UserSession | null>(loadSession());

    function loadSession(): UserSession | null {
        try {
            const data = localStorage.getItem(AUTH_STORAGE_KEY);
            return data ? (JSON.parse(data) as UserSession) : null;
        } catch (e) {
            console.error('Error al cargar sesión de usuario:', e);
            return null;
        }
    }

    function saveSession() {
        try {
            if (user.value) {
                localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user.value));
            } else {
                localStorage.removeItem(AUTH_STORAGE_KEY);
            }
        } catch (e) {
            console.error('Error al guardar sesión de usuario:', e);
        }
    }

    const isAuthenticated = computed(() => !!user.value);
    const currentUsername = computed(() => user.value?.username || '');
    const currentAvatarPath = computed(() => user.value?.avatarPath || AVATAR_PATHS[0]);

    /**
     * Inicia sesión guardando el usuario en memoria y en localStorage
     */
    function login(username: string, avatarPath: string = AVATAR_PATHS[0], email?: string) {
        const trimmed = username.trim();
        if (!trimmed) return;

        user.value = {
            username: trimmed,
            email: email ? email.trim() : undefined,
            avatarPath,
            loginDate: new Date().toISOString(),
        };

        saveSession();
    }

    /**
     * Cierra sesión y elimina la persistencia
     */
    function logout() {
        user.value = null;
        saveSession();
    }

    return {
        user,
        isAuthenticated,
        currentUsername,
        currentAvatarPath,
        login,
        logout,
    };
});