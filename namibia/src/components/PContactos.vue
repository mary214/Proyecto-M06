<template>
    <div>
      <h1>{{ $t("contact_us") }}</h1>
      <PContactForm />
    </div>
  </template>
  
  <script>
  import PContactForm from "./PContactForm.vue";
  
  export default {
    name: 'PContactos',
    components: { PContactForm },
  }
  </script>
  