<template>
  <div>
    <h1>Team Projects</h1>

    <div style="margin-bottom: 30px;">
      The following are some stuff I've made or heavily contributed to the team projects.<br/>
      Most of them isn't released to public or still on development. I've show this to showcase my skills using Unity and several Game Engines
    </div>

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
