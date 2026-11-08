<script setup lang="ts">
</script>

<template>
    <div class="relative w-72 sm:w-84 md:w-96 aspect-square rounded-full flex items-center justify-center">
        <div class="absolute inset-0 m-auto w-80 h-80 rounded-full bg-sonic-soft-pink/10 animate-ping opacity-30"></div>
        <div class="absolute inset-3 m-auto w-h-86 h-86 rounded-full bg-sonic-cyan/20 blur-xl"></div>
        <div
            class="absolute inset-0 m-auto w-58 h-58 rounded-full border-3 border-sonic-fuchsia/40 shadow-[0_0_50px_rgba(192,38,211,0.3)] animate-ping">
        </div>
        <div class="absolute inset-8 m-auto w-48 h-48 rounded-full border-2 border-sonic-cyan/40 animate-ping "></div>
        <div class="absolute inset-11 rounded-full border-6 border-sonic-fuchsia/40"></div>
        <div
            class="relative w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-full bg-linear-to-b from-[#181124] to-sonic-bg border border-white/15 shadow-2xl flex items-center justify-center overflow-hidden">
            <img src="/src/assets/img/hero-img.png" alt="" class="mt-10 scale-110">
            <div
                class="absolute z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-linear-to-tr from-sonic-fuchsia to-sonic-violet p-1 shadow-lg shadow-sonic-fuchsia/40 flex items-center justify-center">
                <div
                    class="w-full h-full bg-sonic-surface rounded-full flex flex-col items-center justify-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-sonic-fuchsia animate-bounce mt-2.5"
                        viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>