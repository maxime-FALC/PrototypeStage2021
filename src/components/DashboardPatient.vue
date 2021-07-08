<template>
  <section class="hero is-white is-fullheight">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <div class="card is-rounded">
            <header class="card-header">
              <p class="card-header-title">To do :</p>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                {{ title }}
              </div>
            </div>
            <footer class="card-footer">
              <div class="button is-info is-fullwidth">Start Session</div>
            </footer>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
          
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
           
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import io from "socket.io-client";
export default {
  name: "DashboardPatient",
  data() {
    return {
      socket: null,
      title: "Your therapist didnt send any exercises yet",
      exercice: [],
      program: [],
    };
  },
  created() {
    this.socket = io.connect("http://localhost:3000");
  },
  mounted() {
    this.socket.on("r", (data) => {
      console.log("bien recu du therapeute");
      this.exercice.push(data);
      this.title = data.title;
    });
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
