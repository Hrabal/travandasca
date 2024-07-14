<script setup lang="ts"></script>

<template>
  <div class="ocean">
    <div class="wave parallax"></div>
  </div>
</template>

<style scoped>
.ocean {
  width: 100%;
  height: 100%;
  z-index: -999;
  position: fixed;
  bottom: 0;
  left: 0;
}

.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
  position: absolute;
  width: 6400px;
  bottom: 0;
  left: 0;
  height: 198px;
  transform: translate(0, 0, 0);
  opacity: 0.2;
  animation: wave 9s ease infinite;
}

.wave:nth-of-type(2) {
  top: -168px;
  animation: swell 7s ease infinite;
  opacity: 0.1;
}

.parallax {
  animation-name: parallax;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-direction: alternate;
  animation-timeline: scroll(root);
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}
@keyframes swell {
  0%,
  100% {
    transform: translate(0, -30px);
  }
  50% {
    transform: translate(0, 5px);
  }
}

@keyframes parallax {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
