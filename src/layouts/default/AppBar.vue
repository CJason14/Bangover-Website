<template>
  <KeepAlive>
    <div>
      <v-app-bar app dark>
        <v-img eager rel="preload" @click="$router.push('/')" alt="Brand Logo (Bangover)" class="mx-4"
          src="@/assets/Bangover-Transparent.webp" aspect-ratio="1/1" max-height="50" max-width="50" contain></v-img>
        <h1 class="text-h5 font-weight-bold title-bar brandnameapp" @click="$router.push('/')">Bangover</h1>
        <v-app-bar-title />
        <v-app-bar-nav-icon aria-label="Navigation Button" id="Navigation Button" @click="drawer = true">
        </v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer class="bg-deep-purple" theme="dark" v-model="drawer" temporary location="right">
        <v-list color="transparent" aria-label="Navigation">
          <v-list-item aria-label="Homepage" to="/" exact color="white" prepend-icon="mdi-view-dashboard"
            title="Homepage"></v-list-item>
          <v-list-item aria-label="Kontakt" to="/kontakt" color="white" prepend-icon="mdi-card-account-phone"
            title="Kontakt"></v-list-item>
          <v-list-item aria-label="Datenschutzerklärung" to="Datenschutzerklaerung" color="white"
            prepend-icon="mdi-lock" title="Datenschutzerklärung"></v-list-item>
          <v-list-item aria-label="Impressum" to="Impressum" color="white" prepend-icon="mdi-fingerprint"
            title="Impressum"></v-list-item>
          <v-list-item aria-label="AGB" to="AGB" color="white" prepend-icon="mdi-format-paragraph"
            title="AGB"></v-list-item>
          <v-list-item aria-label="Download" to="/download" color="white" prepend-icon="mdi-download" title="Download">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </KeepAlive>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      drawer: false,
      group: null,
    }),
  };

</script>

<style>
  .title-bar {
    cursor: pointer;
  }

  .brandnameapp {
    font-family: "Bangover" !important;
    font-size: xx-large !important;
  }

</style>
