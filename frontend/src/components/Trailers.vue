<template>
  <v-container grid-list-xs>
    <v-row no-gutters>
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12"
        lg="4"
        sm="6"
        class="pa-4"
      >
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.name"></v-card-title>
          </v-img>

          <v-card-title>
            {{ card.name }}
          </v-card-title>

          <v-card-subtitle> Одноосный </v-card-subtitle>

          <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <v-btn color="teal lighten-2" text @click="test(card.detail_url)">
              Подробнее
            </v-btn>
          </v-card-actions>
        </v-card>
        <!-- <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import url from '@/assets/trailers/tr1.jpg'

export default {
  //
  name: "Trailers",
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        name: "Прицеп КРД-050100",
        //https://63.img.avito.st/640x480/9319983363.jpg
        src: "https://63.img.avito.st/640x480/9319983363.jpg",
        detail_url: "/0",
      },
      {
        title: "Favorite road trips",
        name: "Прицеп САЗ-82994",
        src: "https://92.img.avito.st/640x480/9319983192.jpg",
        detail_url: "/1",
      },
      {
        title: "Best airlines",
        name: 'Прицеп "Крепыш"',
        src: "https://67.img.avito.st/640x480/9319983167.jpg",
        detail_url: "/2",
      },
      {
        title: "Best airlines1",
        name: 'Прицеп "Цинк-Мастер"',
        src: "https://63.img.avito.st/640x480/9319983363.jpg",
        detail_url: "/3",
      },
      {
        title: "Favorite road trips1",
        name: "Прицеп САЗ-82994",
        src: "https://92.img.avito.st/640x480/9319983192.jpg",
        detail_url: "/4",
      },
      {
        title: "Best airlines2",
        name: 'Прицеп "Крепыш"',
        src: "https://67.img.avito.st/640x480/9319983167.jpg",
        detail_url: "/5",
      },
    ],
  }),
  methods: {
    test: function (url) {
      this.$router.push(url);
      // console.log(url)
    },
  },
};
</script>

<style>
</style>