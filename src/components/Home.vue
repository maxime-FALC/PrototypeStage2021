<template>
  <!--futur login possible -->
  <section class="hero is-fullheight is-white">
    <div class="hero-body is-justify-content-center ">
      <div class="buttons ">
          <router-link class="button is-large is-success mr-6" to="/dashboardtherapist"
            >Therapist Interface</router-link
          >
      
  
          <router-link class="button is-large is-success ml-6" to="/dashboardpatient"
            >Patient Interface</router-link
          >
      
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>