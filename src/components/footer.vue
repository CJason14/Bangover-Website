<template>
  <v-footer class="margintop d-flex justify-center flex-column align-center bg-black">
    <div class="footerdiv d-flex justify-space-around">
      <div class="hidetitle">
        <h1 class="brandnamefooter">Bangover</h1>
      </div>
      <div>
        <h2 class="text-h5 titlefooter">Weiteres</h2>
        <br>
        <router-link to="Datenschutzerklaerung" style="text-decoration: none; color: inherit;">
          <p>Datenschutzerklärung</p>
        </router-link>
        <router-link to="AGB" style="text-decoration: none; color: inherit;">
          <p>AGB</p>
        </router-link>
        <router-link to="Kontakt" style="text-decoration: none; color: inherit;">
          <p>Kontakt</p>
        </router-link>
        <router-link to="Impressum" style="text-decoration: none; color: inherit;">
          <p>Impressum</p>
        </router-link>
        <router-link to="Download" style="text-decoration: none; color: inherit;">
          <p>Download</p>
        </router-link>

      </div>
      <div class="d-flex flex-column align-center">
        <h2 class="text-h5 titlefooter">Folge uns!</h2>
        <br>
        <div>
          <a class="footer-social-network-icons w-inline-block"><img
              src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbf0a2f2b67e3b3ba079c_Twitter%20Icon.svg"
              width="20" height="20" alt="Twitter icon"></a><a class="footer-social-network-icons w-inline-block"><img
              src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbfe70fcf5a0514c5b1da_Instagram%20Icon.svg"
              width="20" height="20" alt="Instagram icon"></a><a class="footer-social-network-icons w-inline-block"><img
              src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbe42e1e6034fdaba46f6_Facebook%20Icon.svg"
              width="20" height="20" alt="Facebook Icon"></a><a class="footer-social-network-icons w-inline-block"><img
              src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0002f2b676eb4ba0869_LinkedIn%20Icon.svg"
              width="20" height="20" alt="LinkedIn Icon"></a><a class="footer-social-network-icons w-inline-block"><img
              src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0112f2b6739c9ba0871_Pinterest%20Icon.svg"
              width="20" height="20" alt="Pinterest Icon"></a>
        </div>
      </div>
    </div>
    <br>
    <br>
  </v-footer>
</template>


<style>
  .footerdiv {
    min-width: 740px;
    width: 80vw;
    max-width: 1500px;
    padding: 20px;
  }

  .footer-social-network-icons {
    margin-top: 20px;
    margin: 10px;
  }

  .brandnamefooter {
    font-family: "Bangover";
    font-size: 40px;
  }

  @media (max-width:670px) {

    .hidetitle {
      display: none;

    }

    .footerdiv {
      min-width: 400px;
    }
  }

  @media (max-width:450px) {
    .titlefooter {
      font-size: medium;
    }

    .footer-social-network-icons {
      padding-top: 10px;
      margin: 5px;
    }
  }

</style>
