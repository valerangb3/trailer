<template>
  <div>
    <v-container grid-list-xs>
      <v-row no-gutters>
        <v-col cols="12" lg="3" sm="6" class="pa-4">
          <div>
            <h2>А здесь будет список прицепов</h2>
            <p>
              То есть при выборе конкретного прицепа будет подгружаться
              необходимая инфомрация
            </p>
            <ul>
              <li
                @click="test(card.detail_url)"
                v-for="card in cards"
                :key="card.title"
              >
                {{ card.name }}
              </li>
            </ul>
          </div>

          <!-- <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card> -->
        </v-col>
        <v-col cols="12" lg="9" sm="6" class="pa-4">
          <div>
            <h1>Описание прицепа</h1>
            <p>Будет слайдер и основные характеристики прицепа</p>
            <p>ИД___{{id}}</p>
            <p><router-link to="/">На главную</router-link><br /></p>
            <p>{{ name }}</p>
          </div>
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
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["id"],
  data: () => ({
    name: "Прицеп КРД-050100",
    cards: [
      {
        title: "Pre-fab homes",
        name: "Прицеп КРД-050100",
        src: "https://63.img.avito.st/640x480/9319983363.jpg",
        detail_url: "/1",
      },
      {
        title: "Favorite road trips",
        name: "Прицеп САЗ-82994",
        src: "https://92.img.avito.st/640x480/9319983192.jpg",
        detail_url: "/2",
      },
      {
        title: "Best airlines",
        name: 'Прицеп "Крепыш"',
        src: "https://67.img.avito.st/640x480/9319983167.jpg",
        detail_url: "/3",
      },
      {
        title: "Best airlines1",
        name: 'Прицеп "Цинк-Мастер"',
        src: "https://63.img.avito.st/640x480/9319983363.jpg",
        detail_url: "/4",
      },
      {
        title: "Favorite road trips1",
        name: "Прицеп САЗ-82994",
        src: "https://92.img.avito.st/640x480/9319983192.jpg",
        detail_url: "/5",
      },
      {
        title: "Best airlines2",
        name: 'Прицеп "Крепыш"',
        src: "https://67.img.avito.st/640x480/9319983167.jpg",
        detail_url: "/6",
      },
    ],
  }),
  methods: {
    test: function (url) {
      this.$router.push(url);
    },
  },
};
</script>

<style>
</style>