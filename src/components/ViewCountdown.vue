<template>
<div class="cboard">
  <div id='tableDiv'>
    <h2 id="add-new">{{this.addNew}}</h2>
    <h2 id="task-name">{{ this.taskOutput }}</h2>
    <h2 id="due-text" v-if="hasTask">is due in...</h2>
    <p id="countdown" v-if="hasTask">{{ this.countdownOutput }}</p>
    <div id="ddl-collab-box">
      <p id="ddl" v-if="hasTask">Deadline: {{ this.deadlineOutput }}</p>
      <p v-for="c in this.collaboratorOutput" class="collab" :key="c">{{ c }}</p>
    </div>

  </div>
</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ViewCountdown',
  data: function () {
    return {
      taskOutput: "",
      countdownOutput: "",
      collaboratorOutput: "",
      deadlineOutput: "",
      addNew: "",
      hasTask: false
    }
  },
  props: {
    taskPassed: {
      type: String
    },
    deadlinePassed: {
      type: String
    },
    collaboratorPassed: {
      type: Array
    }
  },

  watch: {
    taskPassed: function () {
      // var timeStamp = moment().format('MMMM Do YYYY, h:mm:ss a')
      this.taskOutput = this.taskPassed
    },
    
    collaboratorPassed: function () {
      this.collaboratorOutput = this.collaboratorPassed
    },
  },

  methods: {
    time () {
      if (this.$props.deadlinePassed.length>0) {
        this.deadlineOutput = moment(this.deadlinePassed).format("M/D/YYYY, dddd")

        var now = moment();
        var end = moment(this.deadlinePassed);
        var duration = moment.duration(end.diff(now));
        this.countdownOutput = duration.days() + " days " + duration.hours() + " hours " + duration.minutes()  + " minutes " + duration.seconds() + " seconds";

        this.addNew = ""

        // document.getElementById("collab").innerHTML = this.collaboratorOutput;
        this.hasTask = true
      }
      else {
        this.noTask()
      }
    },

    noTask () {
      if (this.$props.taskPassed.length<=0) {
        this.addNew = "No task is currently in display. Add a new task here!"
      }
    }
  },

  mounted () {
    this.interval = setInterval(this.time, 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
}


</script>

<style>
  #outputTable {
    margin-left: auto;
    margin-right: auto;
  }

  table, th, td {
    border: 0.5px solid black;
    border-collapse: collapse;
  }

  th, td {
    padding: 10px;
    width: 300px;
  }

  body, html {
    background-color: #bfdee8;
    /* rock.svg image source: Amber Zheng */
    background: url("../../public/img/rock.svg") bottom;
    /* background-position: absolute; */
    background-size:cover;
    height: 100%;
  }

  #task-name {
    font-size: 90px;
    display: inline-block;
    color: #2d4952;
  }

  #countdown {
    font-size: 45px;
    background-color: #a1c4d0;
    box-shadow: 3px 3px 10px #7598a4;
    width: 80%;
    padding: 10px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .collab {
    /* border: 2px solid #000000; */
    font-size: 20px;
    display: inline-block;
    margin: 0 5px;
    background-color: #8aaeba;
    padding: 3px 8px 2px 8px;
    border-radius: 6px;
    box-shadow: 3px 3px 5px #7598a4;
  }

  #due-text {
    color: #78888c;
    display: inline-block;
    margin-left: 15px;
  }

  #ddl-collab-box {
    margin-top: 50px;
  }

  #ddl {
    font-size: 20px;
    color: #2d4952;
  }

</style>
