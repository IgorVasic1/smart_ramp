<template>
  <v-card class="card-background pa-8" elevation="0" height="445">
    <video ref="video" width="100%" height="100%" controls></video>
  </v-card>
</template>

<script>
import Hls from 'hls.js';

export default {
  mounted() {
    let hls = new Hls();
    let stream = "https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8";
    let video = this.$refs["video"];
    hls.loadSource(stream);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  },
};
</script>
<style>
.card-background {
  width: 100%;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white !important;
}
</style>