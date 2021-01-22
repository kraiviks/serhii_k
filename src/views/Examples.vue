<template>
  <v-container fluid>
    <v-row dense class="align-start">
      <v-col
        v-for="item in content"
        :key="item.name"
        :cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <a :href="item.link" target="_blank">
            <img :src="item.src" width="100%"/>
            <v-card-title>
              <v-icon v-text="item.icon"></v-icon>
              {{ item.name }}
            </v-card-title>
          </a>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Examples",
  data: () => ({
    content: [
      {
        name: "H-Tecnology",
        link: "https://kraiviks.github.io/Layouts/H-Tecnology/dist/",
        icon: "mdi-alpha-h-box",
        src: require("@/assets/H-Tecnology.png"),
      },
      {
        name: "Grig adaptive",
        link: "https://kraiviks.github.io/Layouts/alisayed/dist/",
        icon: "mdi-alpha-a-box",
        src: require("@/assets/alisayed.png"),
      },
      {
        name: "Adaptive_bootstrap_letusmake",
        link: "https://kraiviks.github.io/Layouts/adaptive_to_bootstrap/dist/",
        icon: "mdi-alpha-l-box",
        src: require("@/assets/letusmake.png"),
      },
      {
        name: "Adaptive_bootstrap_LandX",
        link: "https://kraiviks.github.io/Layouts/landx/dist/",
        icon: "mdi-alpha-l-box-outline",
        src: require("@/assets/LandX.png"),
      },
      {
        name: "To-do VueJS",
        link: "https://kraiviks.github.io/k-to-do/",
        icon: "mdi-alpha-t-box",
        src: require("@/assets/To-do.png"),
      },
      {
        name: "Vue-App-Vuetify",
        link: "https://kraiviks.github.io/vue-app-vuetify/",
        icon: "mdi-alpha-v-box",
        src: require("@/assets/vue-app-vuetify.png"),
      },
    ],
  }),
};
</script>
