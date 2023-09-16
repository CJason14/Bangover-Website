<template>
    <div class="startdiv d-flex justify-center flex-column align-center">
    <div class="blur d-flex justify-center flex-column align-center">
    <v-fade-transition appear>
      <div class="d-flex justify-center flex-column align-center">
        <v-img class="mx-4 logoimage" src="@/assets/Bangover-Transparent.webp" aspect-ratio="1/1" min-height="300" min-width="300"
          contain></v-img>
        <h1 class="brandname">Bangover</h1>
          <download/>
      </div>
    </v-fade-transition>
    </div>
  </div>
</template>

<script setup>
import download from './../components/download-horizontal.vue'
import Footer from './../components/footer.vue'
</script>

<style>
  .startdiv {
    position: fixed;
    color: white;
    font-size: x-large;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: cover;
    background-image: url(@/assets/Party-Hoch.webp)
  }

  .blur {
    position: absolute;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(8px);
  }

  .brandname{
    font-family: "Bangover";
    font-size: 70px;
  }
</style>