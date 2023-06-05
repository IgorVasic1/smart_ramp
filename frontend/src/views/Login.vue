<template>
  <div style="display:flex; margin-top: 190px; justify-content:center; align-items:center; height:100%;" class="card-container">
      <v-card v-model="dialog" max-width="600px" min-width="360px" elevation="0">
          <div>
              <v-tabs v-model="tab" show-arrows background-color="#184264d9" icons-and-text dark grow>
                  <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                  <v-tab v-for="i in tabs" :key="i">
                      <v-icon large>{{ i.icon }}</v-icon>
                      <div class="caption py-1">{{ i.name }}</div>
                  </v-tab>
                  <v-tab-item>
                      <v-card class="px-4">
                          <v-card-text>
                              <v-form ref="loginForm" v-model="valid" lazy-validation>
                                  <v-row class="d-flex justify-center align-center">
                                      <v-col cols="12">
                                          <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field v-model="loginPassword" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Lozinka" hint="Morate unijeti bar 8 znakova" counter @click:append="show1 = !show1"></v-text-field>
                                      </v-col>
                                      <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                      </v-col>
                                      <v-spacer></v-spacer>
                                        <v-col class="d-flex justify-center align-center" cols="12" lg="8" md="8" sm="8" xsm="8">
                                          <v-btn style="text-transform: none;" class="white--text" large block :disabled="!valid" color="#184264d9" @click="validate"><v-icon class="mr-3">mdi-account-circle-outline</v-icon> Prijava na sustav</v-btn>
                                      </v-col>
                                      <v-col class="d-flex justify-center align-center mb-8" cols="8" >
                                            <div ref="googleLoginBtn" />
                                        </v-col>
                                    </v-row>
                              </v-form>
                          </v-card-text>
                      </v-card>
                  </v-tab-item>
                  <v-tab-item>
                      <v-card class="px-4" tile>
                          <v-card-text>
                              <v-form ref="registerForm" v-model="valid" lazy-validation>
                                  <v-row>
                                      <v-col cols="12" sm="6" md="6">
                                          <v-text-field v-model="firstName" :rules="[rules.required]" label="Ime" maxlength="20" required></v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="6">
                                          <v-text-field v-model="lastName" :rules="[rules.required]" label="Prezime" maxlength="20" required></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field v-model="registerTable" :rules="registerRules" label="Registracijska oznaka" required></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Lozinka" hint="Mora sadržavati bar 8 znakova" counter @click:append="show1 = !show1"></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Potvrdite lozinku" counter @click:append="show1 = !show1"></v-text-field>
                                      </v-col>
                                      <v-spacer></v-spacer>
                                      <v-row class="d-flex justify-center align-center">
                                        <v-col class="d-flex justify-center align-center my-4 mb-8" cols="12" md="8" sm="3" xsm="12">
                                          <v-btn width="100%" style="text-transform: none;" class="white--text" large block :disabled="!valid" color="#184264d9" @click="validate"><v-icon class="mr-3">mdi-account-circle</v-icon> Registriraj se na sustav</v-btn>
                                      </v-col>
                                      </v-row>
                                  </v-row>
                              </v-form>
                          </v-card-text>
                      </v-card>
                  </v-tab-item>
              </v-tabs>
          </div>
      </v-card>
</div>
</template>


<script>

export default {
 methods: {
    validate() {
      this.$router.push('/dashboard');
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async handleCredentialResponse(response) {
      this.login(response.credential).then(() => {
        console.log(response);
        this.$router.replace('/reports');
       }).catch(err => {
         console.error(err);
       });
      },
      onWindowLoad(){
        const gClinetId = ["344325573867-qld2832g1hfg56b8s79l6mj7mhm8oprk.apps.googleusercontent.com"];
        window.google.accounts.id.initialize({
          client_id: gClinetId,
          callback: this.handleCredentialResponse,
          auto_select: true
        });
        window.google.accounts.id.renderButton(
          this.$refs.googleLoginBtn, {
            text: "Login",
            size: "large",
            width: "350",
            height: "100",
            theme: "outline"
          }
        );
      },
  },
  beforeMount() {
        window.addEventListener("load", this.onWindowLoad);
    },
  mounted(){
    this.onWindowLoad();
  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
        {name:"Prijava", icon:"mdi-account-circle", path: "/login"},
        {name:"Registracija", icon:"mdi-account-circle-outline", path:"/register"}
    ],
    valid: true,
    
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Obavezno polje",
      v => /.+@.+\..+/.test(v) || "E-mail mora biti validan"
    ],
    emailRules: [
      v => !!v || "Obavezno polje",
      v => /.+@.+\..+/.test(v) || "E-mail mora biti validan"
    ],
    registerRules: [
        v => !!v || "Obavezno polje",
        v => /^[A-Z]\d{2}-[A-Z]-\d{3}$/.test(v) || "Registracija mora biti formata 'M74-A-590'"
        ],

    show1: false,
    rules: {
      required: value => !!value || "Obavezno polje",
      min: v => (v && v.length >= 8) || "Minimalno 8 Karaktera"
    }
  })
}
</script>
 <style lang="scss" scoped>
 .plate{
    margin-left: auto;
    margin-right: auto;
 }
.title-text {
  font-size: 20px;
  letter-spacing: 0;
  line-height: normal;
}

.description-text {
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: normal;
}

.height-100 {
  height: 100vh;
}

.register-container {
  padding-left: 64px;
  padding-right: 64px;
  border-radius: 4px;

  max-width: 440px;
  padding-bottom: 64px;

  .logo {
    width: 56px;
    height: 56px;
  }
  .card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

  #googleLoginBtn {
    display: flex;
    padding-top: 11px;
    padding-bottom: 11px;
    align-items: center;
    cursor: pointer;
    justify-content: center;

    img {
      width: 18px;
      height: 18px;
      margin-right: 22px;
    }

    /* This is where you control how the button looks. Be creative! */

  }
  .overlay_scrim{
    background-color: white;
  }
}
</style>