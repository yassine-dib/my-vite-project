<script>
export default {
  data() {
    return { counter: 0 };
  },
  methods: {
    increase() {
      this.counter++;
    },
  },
};
</script>

<template>
  <input @click="increase" type="button" :value="counter" />
</template>
