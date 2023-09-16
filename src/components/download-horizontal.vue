<template>
  <KeepAlive>
    <div class="d-flex justify-center">
      <a href="https://play.google.com/apps/internaltest/4701714463779963815">
        <v-img class="installbutton" eager src="@/assets/GooglePlay.webp" alt="GooglePlay Link"></v-img>
      </a>
      <a href="https://testflight.apple.com/join/CZz5IGKt">
        <v-img class="installbutton" eager @click="$router.push('/')" alt="AppStore Link" src="@/assets/AppStore.webp">
        </v-img>
      </a>
    </div>
  </KeepAlive>
</template>

<style>
  .installbutton {
    margin: 10px;
    min-width: 190px;
    max-width: 190px;
    min-height: 90px;
    max-height: 90px;
  }

  @media (max-width:570px) {
    .installbutton {
      min-width: 150px;
      max-width: 150px;
    }
  }

  @media (max-width:350px) {
    .installbutton {
      min-width: 130px;
      max-width: 130px;
    }
  }

</style>
