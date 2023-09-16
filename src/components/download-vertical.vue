<template>
  <KeepAlive>
    <div class="">
      <a href="https://play.google.com/apps/internaltest/4701714463779963815">
        <v-img eager src="@/assets/GooglePlay.webp" alt="GooglePlay Link" min-height="50" min-width="150"></v-img>
      </a>
      <a href="https://testflight.apple.com/join/CZz5IGKt">
        <v-img eager @click="$router.push('/')" alt="AppStore Link" src="@/assets/AppStore.webp" min-height="50" min-width="150"></v-img>
      </a>
    </div>
  </KeepAlive>
</template>
