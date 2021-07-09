<template>
  <section class="hero is-white is-fullheight">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <div class="card is-rounded">
            <header class="card-header">
              <p class="card-header-title is-5">To do :</p>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div ref="content" class="content">
                <span class="title is-2">Your program : </span>
                <!--si on a un element dans le program alors on affiche le programme-->
                <ul v-if="program[0]">
                  <li v-for="p in program" :key="p.nbCompTime">
                    <!--solution pas optimale, on a pas acces a lindex du programme courant sur les tableuax-->
                    <span
                      ><strong> Exercise</strong> : {{ p.exercises[0].title }}
                    </span>
                    <br />
                    <span
                      ><strong>You will train :</strong>
                      {{ p.exercises[0].bodyparts }}
                    </span>
                    <br />
                    <span
                      ><strong
                        >For : </strong
                      >{{ p.nbTimesPlanned }} times.</span
                    >
                    <br />
                    <span
                      ><strong>You are expected to do it :</strong>
                      {{ p.nbCompTime }} times.
                    </span>
                    <br />
                    <span
                      ><strong>Your next session is scheduled on : </strong
                      >{{ p.nextSession }}.
                    </span>
                  </li>
                </ul>
                <ul v-else>
                  {{
                    this.title
                  }}
                </ul>
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
  //le component se crée on établit la connexion
  created() {
    this.socket = io.connect("http://[0000:0000:0000:0000:0000:ffff:c0a8:2b18]:3000");
  },
  mounted() {
    this.socket.on("programSent", (data) => {
      //console.log("bien recu du therapeute");
      var jsonProgram = JSON.parse(data);
      this.program.push(jsonProgram);
      //console.log(this.program[0].exercises[0].title)
      //console.log(this.program[0].nbTimesPlanned)
      this.title = this.program[0].exercises[0].title;
      alert("You received today's program");
    });
  },
  methods: {},
};
</script>

