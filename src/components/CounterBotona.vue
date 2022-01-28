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
  <input class="btn btn-primary" type="button" value="get rebos" />
</template>
