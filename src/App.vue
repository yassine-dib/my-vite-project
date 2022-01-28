<script>
import CounterBotona from "./components/CounterBotona.vue";
import WebCalls from "./components/WebCalls.vue";
import HelloWorld from "./components/HelloWorld.vue";
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";

export default {
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
    "hello-world": HelloWorld,
    "web-calls": WebCalls,
    "counter-botona": CounterBotona,
    "hello-world": HelloWorld,
  },
  name: "app",
  data() {
    return {
      products: [
        { name: "Volvo dulix-Skin", price: 289990 },
        { name: "Volvo R-Star", price: 478000 },
        { name: "Volvo R-Shells", price: 659000 },
        { name: "Volvo Inscreption", price: 839000 },
      ],
    };
  },
};
</script>

<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Hem</router-link>
        </li>
        <li>
          <router-link to="/about">Om</router-link>
        </li>
        <li>
          <router-link to="/contact">Kontakt</router-link>
        </li>
        <li>
          <a href="/external.html">External page</a>
        </li>
      </ul>
    </nav>
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>

  <hello-world msg=" Bygg din Volvo" />
  <p>
    Bygg din Volvo exakt som du vill ha den. Välj modell och utförande i
    konfiguratorn. Upptäck nya bilmodeller från Volvo och hitta din närmaste
    Volvohandlare. Smartare körning. För renare körning. Säkerhet åt alla håll.
    Alltid uppkopplad. Hög komfort. Maximal valfrihet
  </p>
  <web-calls />
  <counter-botona />
  <main>
    <router-view />
  </main>
</template>

<style>
h1 {
  font-size: large red;
}
nav li {
  display: inline-block;
  margin-left: 15px;
  padding: 5px;
  background-color: antiquewhite;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}
nav li:hover {
  background-color: aqua;
  color: white;
}
</style>
