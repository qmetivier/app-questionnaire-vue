<template>
  <div class="login_div">
    <img src="../assets/checklist.png" alt="Questionnaire" class="img_questionnaire">
    <div id="Form_Login">
      <div id="ErrorMessage" v-text="QM_errorMessage"></div>
      <label for="firstName_login" class="labelForm">Prénom :
        <input type="text" id="firstName_login" v-model="QM_firstName">
      </label>
      <label for="lasName_login" class="labelForm">Nom :
        <input type="text" id="lasName_login" v-model="QM_lastName">
      </label>
      <label for="company_login" class="labelForm">Entreprise :
        <input type="text" id="company_login" v-model="QM_company">
      </label>
      <button id="button_login" v-on:click='QM_login'>Se connecter</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'QM_Login',
    data() {
      return{
        QM_firstName: "",
        QM_lastName: "",
        QM_company: "",
        QM_errorMessage: "",
      }
    },
    methods : {
        QM_login : function (){
          if (this.QM_firstName === "" || this.QM_lastName === "" || this.QM_company === ""){
            this.QM_errorMessage = "Veuillez remplir tout les champs";
          }else{
            this.QM_errorMessage = "";
            window.location.pathname = "/questionnaire";
          }
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .login_div{
    text-align: center;
    margin: 0 auto;
    width: 95vw;
    height: 100vh;
    background-color: ghostwhite;
  }

  .img_questionnaire{
    width: 150px;
  }

  #Form_Login{
    background-color: lightsteelblue;
    width: 500px;
    margin: 0 auto;
    border: lightsteelblue 2px solid;
    border-radius: 10px;
    padding-bottom: 5px;
    padding-left: 50px;
    text-align: left;
  }

  #Form_Login .labelForm{
    position: relative;
    color: ghostwhite;
    display: block;
    padding: 10px;
  }

  #Form_Login .labelForm input{
    position: absolute;
    top: 20%;
    right: 20%;
  }

  #button_login{
    display: block;
    margin: 20px auto;
  }

</style>
