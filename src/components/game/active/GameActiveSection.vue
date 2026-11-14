<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { useAudioStore } from '@/stores/audio'
import GameHeader from './GameHeader.vue'
import AudioPlayerCard from './AudioPlayerCard.vue'
import QuestionCard from './QuestionCard.vue'
import type { AnswerOption } from '@/types/game'

const gameStore = useGameStore()
const audioStore = useAudioStore()

function handleAnswerSelected(option: AnswerOption) {
  gameStore.selectAnswer(option)
}

function handleNext() {
  gameStore.nextQuestion()
}

function handleToggleAudio() {
  audioStore.togglePlay()
}

</script>

<template>
  <div class="flex flex-col gap-6 w-full" v-if="gameStore.currentQuestion">

    <GameHeader
      :player-name="gameStore.playerName"
      :score="gameStore.score"
      :current-round="gameStore.currentRoundNumber"
      :total-rounds="10"
      :progress="gameStore.progressPercentage"
      :time-left="gameStore.timeLeft"
    />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

      <div class="lg:col-span-5">
        <AudioPlayerCard
          :is-playing="audioStore.isPlaying"
          :progress="audioStore.playbackProgress"
          :volume="audioStore.volume"
          @toggle="handleToggleAudio"
          @set-volume="audioStore.setVolume"
        />
      </div>

      <div class="lg:col-span-7">
        <QuestionCard
          :question="gameStore.currentQuestion"
          :shuffled-options="gameStore.currentShuffledOptions"
          :selected-option-id="gameStore.selectedOptionId"
          :answer-status="gameStore.answerStatus"
          :feedback-message="gameStore.feedbackMessage"
          @answer-selected="handleAnswerSelected"
          @next="handleNext"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
