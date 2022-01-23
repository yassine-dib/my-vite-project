<script>
export default {
  created() {
    fetch(`https://api.github.com/users/${this.reponame}/repos`)
      .then((response) => response.json())
      .then((result) => {
        this.repos = result;
      });
  },
  data() {
    return {
      repos: null,
      reponame: "octocat",
    };
  },
};
</script>

<template>
  <ol class="repositories" v-if="repos">
    <li v-for="repo in repos">{{ repo.name }}</li>
  </ol>
</template>

<style>
li {
  border: solid 1px royalblue;
}
.repositories li {
  margin-top: 5px;
  padding: 2px;
  background-color: rgb(109, 104, 104);
  font-size: 17px;
  color: aliceblue;
  font-weight: 700;
}
</style>
