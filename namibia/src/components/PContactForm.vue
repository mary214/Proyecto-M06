<template>
    <!-- Formulari de contacte -->
    <form @submit.prevent="handleSubmit">
      
      <!-- Selecció del mètode d'enviament -->
      <div>
        <label for="method">{{ $t("method") }}:</label>
        <select v-model="selectedMethod">
          <option value="axios">Axios</option>
          <option value="fetch">Fetch</option>
          <option value="fake">Fake</option>
        </select>
      </div>
  
      <!-- Camp per introduir el nom -->
      <div>
        <label for="name">{{ $t("contact_name") }}</label>
        <!--input type="text" v-model="form.name" id="name" required /-->
        <input type="text" v-model="formData.name" id="name" />
        <!-- Missatge d'error si el camp de nom està buit -->
        <p v-if="v$.formData.name.$error" class="error">
          {{ $t("error_name") }}
        </p>
      </div>
  
      <!-- Camp per introduir el correu electrònic -->
      <div>
        <label for="email">{{ $t("contact_email") }}</label>
        <!--input type="email" v-model="form.email" id="email" required /-->
        <input type="email" v-model="formData.email" id="email" />
        <!-- Missatge d'error si el correu no és vàlid -->
        <p v-if="v$.formData.email.$error" class="error">
          {{ $t("error_email") }}
        </p>
      </div>
  
      <!-- Camp per introduir el telèfon -->
      <div>
        <label for="phone">{{ $t("contact_phone") }}</label>
        <input type="text" v-model="formData.phone" id="phone" />
        <p v-if="v$.formData.phone.$error" class="error">
          {{ $t("error_phone") }}
        </p>
      </div>
  
      <!-- Camp per escriure el missatge -->
      <div>
        <label for="message">{{ $t("contact_message") }}</label>
        <!--textarea v-model="form.message" id="message" required></textarea-->
        <textarea v-model="formData.message" id="message"></textarea>
        <!-- Missatge d'error si el missatge és massa curt -->
        <p v-if="v$.formData.message.$error" class="error error-minlength">
          {{ $t("error_minlength") }}
        </p>
      </div>
  
      <!-- Botó per enviar el formulari -->
      <button type="submit">{{ $t("send") }}</button>
    </form>
  
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </template>
  
  <script>
  import { useVuelidate } from "@vuelidate/core"; // Importem la funció principal de Vuelidate
  import { required, email, minLength, maxLength, helpers } from "@vuelidate/validators"; // Importem els validadors necessaris
  import axios from "axios"; // Importem Axios per a les peticions HTTP
  
  export default {
    name: "PContactForm", // Nom del component
  
    // Definim les dades del formulari
    data() {
      return {
        formData: {
          name: "", // Nom de l'usuari
          email: "", // Correu electrònic de l'usuari
          phone: "", // Telèfon de l'usuari
          message: "", // Missatge introduït per l'usuari
        },
        responseMessage: "", // Missatge de resposta del servidor
        selectedMethod: "fake", // Mètode per defecte
      };
    },
  
    // Configuració de validacions amb Vuelidate
    validations() {
      return {
        formData: {
          // Validació del nom: només lletres i espais, mínim 3 caràcters, màxim 50
          name: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(50),
            onlyLetters: helpers.withMessage(
              this.$t("error_name_format"),
              (value) => /^[a-zA-ZÀ-ÿ\s]+$/.test(value)
            ),
          },
  
          // Validació de correu electrònic
          email: { required, email }, // El correu és obligatori i ha de tenir format vàlid
  
          // Validació de telèfon: només números i exactament 9 dígits
          phone: {
            required,
            digits: helpers.withMessage(
              this.$t("error_phone"),
              (value) => /^[6789]\d{8}$/.test(value) // 6, 7, 8 o 9 + 8 números més
            ),
          },
  
          // Validació de missatge: mínim 10 caràcters, màxim 500
          message: { required, minLength: minLength(10), maxLength: maxLength(500) },
        },
      };
    },
  
    // Configurem Vuelidate en el setup per accedir a les validacions
    setup() {
      return { v$: useVuelidate() }; // Retornem l'instància de Vuelidate per poder utilitzar-la
    },
  
    methods: {
      /*
        Funció per gestionar l'enviament del formulari.
        - Es valida tot el formulari abans d'enviar.
        - Si no hi ha errors, es mostra un missatge d'èxit.
      */
      async handleSubmit() {
        this.v$.$validate(); // Executa la validació del formulari
        if (!this.v$.$error) {
          // Aquí podríem afegir la lògica per enviar el formulari, per exemple, a un backend
          if (this.selectedMethod === "axios") {
            await this.submitFormAxios();
          } else if (this.selectedMethod === "fetch") {
            await this.submitFormFetch();
          } else {
            this.responseMessage = this.$t("form_success");
            this.clearForm();
          }
      }
      },
      /*
        Funció per enviar el formulari a un backend amb Axios.
        - Es fa servir axios per fer una petició POST a l'API.
        - Si la petició és correcta, es mostra un missatge d'èxit i es neteja el formulari.
        - Si hi ha un error, es mostra un missatge d'error per consola.
      */
      async submitFormAxios() {
        try {
          const response = await axios.post('https://api.exemple.com/contact', this.formData);
          this.responseMessage = response.data.message || this.$t("form_success");
          this.clearForm();
        } catch (error) {
          this.responseMessage = this.$t("error_responseMessage");
          console.error(this.$t("error_sendAxios"), error);
        }
      },
      /*
        Funció per enviar el formulari a un backend amb Fetch.
        - Es fa servir fetch per fer una petició POST a l'API.
        - Si la petició és correcta, es mostra un missatge d'èxit i es neteja el formulari.
        - Si hi ha un error, es mostra un missatge d'error per consola.
      */
      async submitFormFetch() {
        try {
          const response = await fetch("https://api.exemple.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.formData),
          });
  
          if (!response.ok) throw new Error(this.$t("error_responseServer"));
  
          const data = await response.json();
          this.responseMessage = data.message || this.$t("form_success");
          this.clearForm();
        } catch (error) {
          this.responseMessage = this.$t("error_responseMessage");
          console.error(this.$t("error_sendFetch"), error);
        }
      },
      // Funció per netejar el formulari després de l'enviament
      clearForm() {
        this.formData = { name: "", email: "", phone: "", message: "" };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estil per als errors del formulari */
  .error {
    color: red;
    font-size: 0.8em;
    margin-top: 0.2em;
  }
  
  /* Estil per ressaltar els errors en els camps */
  .error-minlength {
    font-weight: bold;
    border-left: 3px solid red;
    padding-left: 8px;
  }
  </style>