<script>
import CounterBotona from './CounterBotona.vue';
export default {
  Components: {
    CounterBotona
  },
  props: {
    msg: String
  }
}

</script>

<template>
  <CounterBotona />
  <img alt="walo" src="../assets/volvo4.jpg" />
  <p>{{ msg }}</p>
</template>

<style >
p {
  font-weight: bold;
}
</style>
