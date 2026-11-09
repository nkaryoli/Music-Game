<template>
  <div
    class="z-10 bg-sonic-surface shadow-xl shadow-sonic-bg rounded-full flex justify-between items-center gap-4 px-4 py-3"
  >
    <div class="p-2.5 bg-sonic-cyan/40 text-cyan-200 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-audio-lines preview-icon"
      >
        <path d="M2 10v3" />
        <path d="M6 6v11" />
        <path d="M10 3v18" />
        <path d="M14 8v7" />
        <path d="M18 5v13" />
        <path d="M22 10v3" />
      </svg>
    </div>
    <div class="flex items-end gap-1">
      <span class="w-1 bg-sonic-cyan rounded-full animate-[bounce_0.8s_infinite] h-4"></span>
      <span class="w-1 bg-fuchsia-300 rounded-full animate-[bounce_1.1s_infinite_0.1s] h-6"></span>
      <span class="w-1 bg-purple-300 rounded-full animate-[bounce_0.9s_infinite_0.2s] h-3"></span>
      <span class="w-1 bg-sonic-cyan rounded-full animate-[bounce_1.2s_infinite_0.3s] h-5"></span>
      <span class="w-1 bg-fuchsia-400 rounded-full animate-[bounce_0.7s_infinite_0.4s] h-2"></span>
    </div>
  </div>
</template>

<style scoped></style>
