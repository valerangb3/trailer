<template>
  <v-app>
    <v-app-bar app color="blue-grey lighten-3" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Версия 0.1</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <div>
      <v-main>
        <!-- <HelloWorld/> -->
        <!-- <div>
        <router-link to="/">На главную</router-link><br>
        <router-link to="/foo">Перейти к Foo</router-link><br>
        <router-link to="/bar">Перейти к Bar</router-link>
      </div> -->

        <router-view></router-view>
      </v-main>
    </div>
    <v-footer app>
      <div>Подвал сайта (Справочная информация)</div>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Trailers from './components/Trailers';

export default {
  name: "App",

  components: {
    // HelloWorld,
    // Trailers,
  },

  data: () => ({
    //
  }),
};
</script>
