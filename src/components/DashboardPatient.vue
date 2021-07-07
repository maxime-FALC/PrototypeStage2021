<template>
  <div>
    <textarea  v-model.lazy="title" name="text" id="" cols="30" rows="10"></textarea>
    <button v-on:click = "clicked">Click me</button>
  </div>
</template>

<script>
import io from "socket.io-client"
export default {
    name: 'Dashboard',
    data() {
      return {
        socket: null,
        title :"lolent",
        exercice: [{
          title: "para"
        }]

      }
    },
    created() {
      this.socket = io("http://localhost:3000")
    },
    mounted() {
      this.socket.on("exercice", data =>{
        
        this.exercice.push(data)
        this.title = this.exercice[1].title
        //console.log(this.exercice)
         this.socket.on("exercisesToBeDone", data =>{
            console.log(data)
          })

      })
    },
    methods : {
        clicked() {
          this.socket.emit("sendP", this.exercice)
         
 
    }

    }
  

    
    }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
