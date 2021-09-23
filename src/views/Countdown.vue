<template>
  <div id="app" img-src="../public/img/rock.png">
    <link href="https://unpkg.com/bootstrap@4.5.2/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://unpkg.com/bootstrap-vue@2.17.1/dist/bootstrap-vue.css" rel="stylesheet" />

    <b-btn @click="openSidebar" pill variant="outline-info" id="edit-btn">
      Edit Task
    </b-btn>

    <!-- <h1>Neta's Task Countdown Board</h1> -->

    <b-sidebar id="input-sidebar">
      <InputCountdown 
        v-on:taskEntered="displayTask"
        v-on:deadlineEntered="displayDdl"
        v-on:collaboratorEntered="displayCollab"/>
    </b-sidebar>

    <ViewCountdown 
      v-bind:taskPassed="taskData"
      v-bind:deadlinePassed="deadlineData"
      v-bind:collaboratorPassed="collaboratorData"/>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js"></script>
<script src="https://unpkg.com/bootstrap-vue@2.17.1/dist/bootstrap-vue.js"></script>
<script>
import InputCountdown from '@/components/InputCountdown.vue'
import ViewCountdown from '@/components/ViewCountdown.vue'

export default {
  name: 'Countdown',
  components: {
    InputCountdown,
    ViewCountdown
  },
  data: function () {
    return {
      // Data properties go here
      taskData: "",
      deadlineData: "",
      collaboratorData: []
    }
  },
  methods: {
    // Methods go here
    displayTask(variable){
      this.taskData=variable
    },
    displayDdl(variable){
      this.deadlineData=variable
    },
    displayCollab(variable){
      this.collaboratorData=variable
    },
    openSidebar(){
      this.$root.$emit('bv::toggle::collapse', 'input-sidebar')
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#edit-btn {
  margin-bottom: 40px;
  font-weight: bold;
  border-width: 2px;
}
</style>
