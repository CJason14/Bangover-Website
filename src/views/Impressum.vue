<template>
  <div class="d-flex justify-center flex-column align-center">
    <div class="content">
      <h1 class="maintitle">Impressum</h1>
      <hr class="solid">
      <br>
      <br>
      <p>
        Legal Disclosure<br>
        Information in accordance with Section 5 TMG<br>
      </p>
      <br>
      <p>
        GoEcho Engineering GmbH<br>
        c/o COCENTER<br>
        Koppoldstr. 1<br>
        86551 Aichach<br>
        Represented by<br>
        Bernhard Karl<br>
      </p>
      <br>
      <p>
        Contact Information<br>
        E-Mail: support@bangover.de<br>
        Internet address: www.bangover.de<br>
        Register entry<br>
        Entry in: Handelsregister<br>
        Register Number: HRB 9132<br>
        Register Court: Amtsgericht Ingolstadt<br>
        VAT number<br>
        VAT indentification number in accorance with Section 27 a of the German VAT act
      </p>
      <br>
      <p>
        DE323993793
      </p>
      <br>
      <p>
        Disclaimer
        Accountability for content<br>
        The contents of our app and pages have been created with the utmost care. However, we cannot guarantee the
        contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore
        responsible for our own content on these app and web pages. In this matter, please note that we are not
        obliged to monitor the transmitted or saved information of third parties, or investigate circumstances
        pointing to illegal activity. Our obligations to remove or block the use of information under generally
        applicable laws remain unaffected by this as per Â§Â§ 8 to 10 of the Telemedia Act (TMG).
      </p>
      <br>
      <p>
        Accountability for links<br>
        Responsibility for the content of external links (to web pages of third parties) lies solely with the
        operators of the linked pages. No violations were evident to us at the time of linking. Should any legal
        infringement become known to us, we will remove the respective link immediately.
      </p>
      <br>
      <p>
        Copyright<br>
        Our app and web pages and their contents are subject to German copyright law. Unless expressly permitted by
        law, every form of utilizing, reproducing or processing works subject to copyright protection on our app and
        web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work
        are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may
        violate copyright laws.
        <br><br>
        <br><br>
        <br><br>
      </p>
    </div>
  </div>
  <br>
  <br>
  <Footer>
  </Footer>
</template>


<script setup>
  import Footer from './../components/footer.vue'

</script>

<style>
  .content {
    margin-top: 40px;
    max-width: 710px;
    margin-bottom: 140px;
  }

  .maintitle {
    margin-bottom: 20px;
  }

  pre {
    font-family: sans-serif;
    white-space: pre-wrap;
    /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;
    /* Mozilla, since 1999 */
    white-space: -pre-wrap;
    /* Opera 4-6 */
    white-space: -o-pre-wrap;
    /* Opera 7 */
    word-wrap: break-word;
    /* Internet Explorer 5.5+ */
  }

  hr.solid {
    border-top: 3px solid #000000;
  }

  .aligncenter {
    align-items: center !important;
  }

  @media (max-width: 750px) {
    h1 {
      font-size: x-large;
    }

    .aligncenter {
      align-items: normal !important;
    }

    .content {
      margin: 15px;
      font-size: 15px;
      padding-top: 25px;
    }

    .maintitle {
      margin-bottom: 10px;
    }

  }

</style>
