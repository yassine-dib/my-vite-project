<script>
export default {
  data() {
    return {
      counter: 0,
      el: "...",
      checkedNames: [], // v-model
    };
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
  <!--in this code i used v-model -->
  <div class="cars">
    <ul>
      <li>
        <input
          type="checkbox"
          id="xc60"
          value="volovo xc60 charge"
          v-model="checkedNames"
        />
        <label for="xc60">volovo xc60 charge</label>
      </li>
      <li>
        <input
          type="checkbox"
          id="xc90"
          value="volvo xc90 hybrid"
          v-model="checkedNames"
        />
        <label for="xc90">volvo xc90 hybrid</label>
      </li>
      <li>
        <input
          type="checkbox"
          id="xc40"
          value="volvo xc40 electric"
          v-model="checkedNames"
        />
        <label for="xc40">volvo xc40 electric</label>
      </li>
    </ul>
    <span>The volvo That You Checked Is : {{ checkedNames }}</span>
  </div>
</template>

<style>
.cars {
  display: block;
  margin: 0 auto;
  max-width: 600px;
  font-size: 21px;
}

.cars ul {
  display: block;
  margin: 0 auto;
  max-width: 900px;
  font-size: 24px;
}
</style>
