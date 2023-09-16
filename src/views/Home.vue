<template>
  <div class="startdiv">
    <div class="blur d-flex justify-center flex-column align-center">
      <div class="d-flex justify-center flex-column align-center">
        <v-img id="phoneimage" class="mx-4" alt="Brand Logo (Bangover)" src="@/assets/Bangover-Transparent.webp"
          aspect-ratio="1/1" min-height="300" min-width="300" contain></v-img>
        <h1 class="brandname">Bangover</h1>
      </div>
      <br>
      <p class="">App installieren</p>
      <download />
    </div>
  </div>
  <div class="container">
    <div class="chevron"></div>
    <div class="chevron"></div>
    <div class="chevron"></div>
  </div>
  <div class="maincontent" id="maindiv">
    <div class="mainframephone" id="phoneframe">
      <img alt="App Preview" class="framepreview" src="@/assets/iPhone-Frame.png" min-height="300" max-height="600"
        min-width="300"/>
      <div class="background" id="phonebackground"></div>
      <p id="phonedescription" class="description"></p>
    </div>
    <div class="space">

    </div>
    <div class="transitionspace my-10 d-flex justify-center flex-column align-center">
      <h4 class="">App installieren</h4>
      <download />
      <br>
      <br>
      <br>
    </div>
    <Footer>
    </Footer>
  </div>
</template>

<script setup>
  import download from './../components/download-horizontal.vue'
  import Footer from './../components/footer.vue'

  window.onscroll = function (e) {
    var clientHeight = ((document.getElementById('maindiv').clientHeight) / 4) - 90;
    let height = screen.height;
    let scrolled = document.documentElement.scrollTop - height;

    var phone = document.getElementById("phoneframe");
    var phoneimage = document.getElementById("phonebackground");
    var description = document.getElementById("phonedescription");

    if (clientHeight * 3 < scrolled) {
      phone.classList.add("hide");
    } else if (clientHeight * 2 < scrolled) {
      phoneimage.style.backgroundImage = "url(../Bangover-Speicher.png)"
      description.innerText = "Speicher";
      phone.classList.remove("hide");
    } else if (clientHeight < scrolled) {
      phoneimage.style.backgroundImage = "url(../Bangover-Poste.png)"
      description.innerText = "Poste";

    } else if (clientHeight > scrolled) {
      phoneimage.style.backgroundImage = "url(../Bangover-Preview.png)"
      description.innerText = "Partys!";
    }
  }

</script>
<style>
  .description {
    position: absolute;
    top: 200px;
    left: 70%;
    transition: all 5s ease-out;
    font-weight: bold;
  }

  .framepreview {
    z-index: 10;
    position: absolute;
    top: 10px;
    left: calc(50% - 160px);
    border-radius: 30px;
    height: 610px;
    width: 325px;
  }

  .background {
    position: absolute;
    top: 30px;
    left: calc(50% - 140px);
    border-radius: 20px;
    height: 570px;
    width: 280px;
    overflow: hidden;
    transition: all 2s ease-out;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .hide {
    opacity: 0 !important;
    margin-bottom: 70%;
  }
  
  .space {
    margin: 450vh;
  }

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

  .roundimage {
    min-height: 300px;
    min-width: 300px;
    max-height: 300px;
    max-width: 300px;
    border-radius: 50%;
    overflow: hidden;

  }

  .blur {
    position: absolute;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(8px);
  }

  .text {
    max-width: 70%;
    width: 500px;
    min-width: 350px;
  }

  .maincontent {
    position: relative;
    top: 100vh;
    padding-top: 100px;
    width: 100vw;
    background: white;
  }

  .mainframephone {
    position: -webkit-sticky;
    position: sticky;
    top: calc(50vh - 300px);
    font-size: 20px;
    transition: all 2s ease-out;
    z-index: 5;
  }

  .brandname{
    font-family: "Bangover";
    font-size: 70px;
  }

</style>

<style lang="scss">
  @import "./../styles/arrow.scss";


  @media (max-width:570px) {
    .transitionspace{
      padding-top: 80vh;
    }

    .container{
      top: 83vh !important;
    }

  }
</style>
