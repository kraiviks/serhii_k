<template>
  <v-container fluid class="about">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="434" tile>
          <v-img
            height="100%"
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          >
            <v-row>
              <v-col class="pa-0 ml-5 d-flex">
                <v-avatar
                  class="profile justify-start"
                  color="grey"
                  size="164"
                  tile
                >
                  <v-img
                    :src="require('@/assets/Avatar.png')"
                    :lazy-src="require('@/assets/Avatar.png')"
                    size="164"
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="py-0">
                <v-list-item
                  color="rgba(0, 0, 0, .4)"
                  dark
                  class="justify-list"
                >
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      <!-- Serhii Kostiv -->
                      Name
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Web developer</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          max-width="400px"
          height="300px"
          class="mx-auto d-flex flex-column align-start pa-10"
        >
          <h3 class="mb-5 mt-2">About me</h3>
          <div class="d-flex flex-column align-start">
            <!-- <p class="about-p">Serhii Kostiv</p>
            <p class="about-p">24 years</p>
            <p class="about-p">from: Ukraine</p>
            <p class="about-p">
              Вивчаю <i>front-end</i> розробку, з дитинства інтересуюсь ІТ, обожнюю Хаскі 🐺 
            </p> -->
            <p class="about-p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              quis provident voluptas ex incidunt molestiae natus, laudantium
              enim, earum asperiores voluptatibus? Dignissimos repellat earum at
              voluptas, ipsa rerum facere repellendus!
            </p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6"
        ><v-list max-width="400px" class="mx-auto">
          <v-list-item-group color="indigo">
            <v-list-item-title style="font-weight: bold"
              >My skills:</v-list-item-title
            >
            <v-list-item v-for="skill in skills" :key="skill">
              {{ skill }}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    skills: [
      "HTML 5, CSS 3",
      "CSS: FlexBox, Grid",
      "Bootstrap",
      "JS, Vue JS(Vuex,Vuetify)",
      "webpack",
      'Основи PHP / Laravel',
      'Основи работы с DB (MySQL)'
    ],
  }),
};
</script>

<style lang="scss">
.about-p {
  margin: 0 !important;
  font-size: 0.8rem;
  text-align: start;
}
.justify-list {
  .v-list-item__content {
    margin: 3% 0;
    text-align: start;
  }
}
</style>
