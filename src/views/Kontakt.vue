<template>
  <div class="contactimage">
    <div class="blurcontact d-flex justify-center flex-column align-center">
      <h1 class="contactheadline">Kontaktiere uns!</h1>
    </div>
  </div>
  <div class="contentcontact d-flex justify-center flex-column align-center">
    <div>
      <h1>Kontakt</h1>
      <br>
      <v-list>
        <v-list-item prepend-icon="mdi-email" title="Email">

        </v-list-item>
        <v-list-item prepend-icon="mdi-phone" title="Telefonnummer">

        </v-list-item>
        <v-list-item prepend-icon="mdi-home" title="Anschrift">

        </v-list-item>
      </v-list>
    </div>
  </div>

</template>




<style>
  .contactimage {
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: cover;
    background-image: url(@/assets/DJPult.webp);
    height: 30vh;
  }

  .blurcontact {
    position: absolute;
    width: 100vw;
    height: 30vh;
    backdrop-filter: blur(8px);
  }

  .contentcontact {
    margin-top: 20px;
  }

  .contactheadline{
    color: white;
    font-size: 50px;
  }
</style>
