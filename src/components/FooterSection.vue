<template>
  <footer>
    <p>{{ footerText }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerText: "Copyright Yassine Dib 2022",
    };
  },
};
</script>
<!-- en komponent använder Sass, via style-elementet -->

<style scoped lang="scss">
$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

footer {
  padding: 20px;
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
  max-width: 900px;
  display: block;
  margin: 0 auto;
  text-align: center;
}
</style>
