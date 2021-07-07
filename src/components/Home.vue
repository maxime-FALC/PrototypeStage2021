<template>
<div class="login-form">
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input v-model = "message" class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input v-model = "mdp" class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button  class="button is-success" v-on:click="checkMessage">
      Login
    </button>
  </p>
</div>
</div>
</template>

<script>

export default {
  name: 'Home',
  data() {
      return {
          id : "",
          mdp : ""
         



          }
      },
       methods :  {
              checkMessage: function() {
                   console.log(this.message)
                   
                   return (this.message === "identifiant")
                  
              }
  }
  }

</script>