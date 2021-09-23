<template>
  <div class='announcementInput'>
    <link href="https://unpkg.com/bootstrap@4.5.2/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://unpkg.com/bootstrap-vue@2.17.1/dist/bootstrap-vue.css" rel="stylesheet" />
    <!-- <h4>No countdown yet. Enter one below to display.</h4> -->
    <div id="input-box">
      <h4>Start a New Task:</h4>
      <input type="text" v-model="task" placeholder="New task name..." class="input-margin">

      <h4>Add a Deadline:</h4>
      <input type="date" v-model="deadline" class="input-margin">

      <h4>Add Collaborators:</h4>
      <b-form-tags input-id="tags-basic" v-model="collaborator" id="collab-tags"></b-form-tags>

      <b-button @click="openSidebar" v-on:click="send()" pill variant="outline-info" id="submit-btn">Start Countdown</b-button>
      <!-- ; ViewCountdown.methods.noTask() -->
    </div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js"></script>
<script src="https://unpkg.com/bootstrap-vue@2.17.1/dist/bootstrap-vue.js"></script>
<script>
import ViewCountdown from '../components/ViewCountdown.vue'

export default {
  name: 'InputCountdown',
  data: function () {
    return {
      // Data properties go here.
      task: "",
      deadline: "",
      collaborator: []
    }
  },
  methods: {
    send () {
      // $emit code goes here
      // console.log("This is where your $emit code should go!")
      this.$emit('taskEntered', this.task)
      this.$emit('deadlineEntered', this.deadline)
      this.$emit('collaboratorEntered', this.collaborator)
    },
    openSidebar(){
      this.$root.$emit('bv::toggle::collapse', 'input-sidebar')
    }
  }
}
</script>

<style>

h4 {
  /* margin-top: 10px; */
  margin-bottom: 5px;
}

input {
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  font-size: 20px;
}

.input-margin {
  margin-bottom: 50px;
}

button {
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 30px;
  font-size: 20px;
}

#input-box {
  margin-top: 20px;
  margin-bottom: 10px;
}

#submit-btn {
  font-weight: bold;
  border-width: 2px;
}

#collab-tags {
  width: 65%;
  margin: 0 auto 130px auto;
}
</style>
