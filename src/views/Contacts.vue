<template>
  <v-container fluid>
    <v-card max-width="300px" class="mx-auto">
      <v-img :src="require('@/assets/photo.jpg')" height="300px">
        <span
          class="headline pl-4 pt-4 d-inline-block"
          v-text="'Serhii'"
          style="color: #4fbeac"
        ></span>
      </v-img>

      <v-card-actions class="white justify-center">
        <v-btn
          v-for="(social, i) in contacts"
          :key="i"
          :color="social.color"
          class="white--text"
          fab
          icon
          small
          :href="social.link"
          @click="social.name == '@gmail' ? dialog = true : null"
        >
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">
            @Email
          </v-card-title>
          <v-card-text
            >{{email}}</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false" v-clipboard:copy="email">
              Скопіювати email
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Contacts",
  data: () => ({
    dialog:false,
    email: "kraiviks@gmail.com",
    contacts: [
      {
        name: "instagram",
        link: "https://www.instagram.com/kostiv_serhii",
        icon: "mdi-instagram",
        color: "red lighten-3",
      },
      {
        name: "@gmail",
        icon: "mdi-gmail",
        color: "cyan darken-1",
      },
      {
        name: "facebook",
        link: "https://www.facebook.com/kraiviks",
        icon: "mdi-facebook",
        color: "indigo",
      },
    ],
  }),
};
</script>
