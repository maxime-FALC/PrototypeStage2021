<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header has-background-primary ">
            <p class="card-header-title has-text-white">Patient Info</p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li id="patientName">
                  <span>Name : </span>{{ patients[0].nameP }}
                </li>
                <li id="patientAge">
                  <span>Age : </span>{{ patients[0].age }}
                </li>
                <li id="patientHeight">
                  <span>Height : </span>{{ patients[0].height }}
                </li>
                <li id="patientWeight">
                  <span>Weight : </span>{{ patients[0].weight }}
                </li>
                <li id="patientDiagnosis">
                  <span>Diagnosis : </span>{{ patients[0].diagnosis }}
                </li>
                <li id="patientPrescription">
                  <span>Prescription : </span>{{ patients[0].prescription }}
                </li>
                <li id="patientPrescriptionDate">
                  <span>Prescription Date : </span
                  >{{ patients[0].prescriptionDate }}
                </li>
                <li id="patientDoctor">
                  <span>Doctor : </span>{{ patients[0].doctor }}
                </li>
              </ul>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Plan</a>
            <a href="#" class="card-footer-item">Progress</a>
            <a href="#" class="card-footer-item">Report to Doctor</a>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header has-background-primary">
            <p class="card-header-title has-text-white">Summary</p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li id="therapyOtD">
                  <span>OT Starting Date: </span>{{ therapy[0].OtStartingDate }}
                </li>
                <li id="therapyNumCompletedS">
                  <span>Num Completed Sessions : </span
                  >{{ therapy[0].numCompletedSessions }}
                </li>
                <li id="therapyPlannedNumSessions">
                  <span>Planned Num Sessions : </span
                  >{{ therapy[0].plannedNumSessions }}
                </li>
                <li id="therapyProgramCompletionD">
                  <span>Program Completion Date : </span
                  >{{ therapy[0].programCompletionDate }}
                </li>
                <li id="therapyComments">
                  <span>Comments : </span>{{ therapy[0].comments }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="box is-transparent has-text-centered">
          <button class="button is-success mt-6 is-rounded">Trigger Session</button>
        </div>
      </div>
    </div>
    <section class="hero is-large is-white">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <p class="title">Program</p>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <button class="button is-info is-rounded">Edit Program</button>
                </div>
              </div>
            </nav>
            <!-- Main container -->

            <!-- Left side -->

            <table class="table">
              <thead class= "has-background-black ">
                <tr>
                  <th  class="has-text-white"><abbr title="Exercice ">Exercice</abbr></th>
                  <th class="has-text-white">Planned num of sessions</th>
                  <th class="has-text-white">
                    <abbr title="Played" >Num of completion time</abbr>
                  </th>
                  <th class="has-text-white"><abbr title="Won" >Next Session</abbr></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Basket</th>
                  <td>30</td>
                  <td>7</td>
                  <td>01/13/13</td>
                </tr>
                <tr>
                  <th>Maze</th>
                  <td>30</td>
                  <td>7</td>
                  <td>01/13/13</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="column">
            <!-- Right side -->
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <p class="title">Library of exercices</p>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <button class="button is-success is-rounded">Add Exercise</button>
                </div>
              </div>
            </nav>

            <table class="table">
              <thead class= "has-background-black ">
                <tr>
                  <th class="has-text-white"><abbr title="Exercice">Exercice</abbr></th>
                  <th class="has-text-white">Bodyparts</th>
                  <th class="has-text-white">
                    <abbr title="Played">Num Cognitive Tasks</abbr>
                  </th>
                  <th class="has-text-white"><abbr title="Won">Nums Perceptive Tasks</abbr></th>
                  <th class="has-text-white"><abbr title="Won">Nums Motor Tasks</abbr></th>
                  <th class="has-text-white"><abbr title="Won">Expected Completion Time</abbr></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="ex in exercice" :key="ex.title">
                  <th>{{ ex.title }}</th>
                  <th>{{ ex.bodyparts }}</th>
                  <th>{{ ex.numCogTasks }}</th>
                  <th>{{ ex.numPercTasks }}</th>
                  <th>{{ ex.numMotorTasks }}</th>
                  <th>{{ ex.expectedComplTime }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <!--<div>
    <textarea  v-model.lazy="title" name="text" id="" cols="30" rows="10"></textarea>
    <button v-on:click = "clicked">Click me</button>
  </div> -->
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: "Dashboard",
  data() {
    return {
      socket: null,
      title: "lolent",
      exercice: [],
      program : [],
      patients: [
        {
          nameP: "PatientA",
          age: 45,
          gender: "F",
          height: "1m76",
          weight: 95,
          diagnosis: "Ischemic stroke event with left\rhemiparesis",
          prescription:
            "Retraining of dexterity movement, cognitive exercises associated with activities of daily living",
          prescriptionDate: "11/18/2020",
          doctor: "Doctor D",
        },
      ],
      therapy: [
        {
          id: 1,
          OtStartingDate: "11/22/2020",
          numCompletedSessions: 4,
          plannedNumSessions: 8,
          programCompletionDate: "11/22/2020",
          comments: "left hand dominance",
        },
      ],
    };
  },
  created() {
    this.socket = io("http://localhost:3000");
  },
  mounted() {
    this.socket.on("exercice", (data) => {
      this.exercice = data
      
      //console.log(this.exercice)
      this.socket.on("exercisesToBeDone", (data) => {
        console.log(data);
      });
    });
  },
  methods: {
    clicked() {
      this.socket.emit("sendP", this.exercice);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
