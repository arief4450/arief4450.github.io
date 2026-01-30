<template>
  <div id="catching-cat-root" style="width:100%;height:100vh;"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Phaser from 'phaser'
import { createGameConfig } from '@/catching-cat/gameConfig' // your TS/Phaser setup

export default Vue.extend({
  name: 'CatchingCat',
  mounted() {
    const config = createGameConfig('catching-cat-root')
    this._game = new Phaser.Game(config)
  },
  beforeDestroy() {
    if (this._game) {
      this._game.destroy(true)
    }
  }
})
</script>