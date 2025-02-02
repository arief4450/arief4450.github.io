<template>
  <div>
    <h1>Personal Projects</h1>

    <div style="margin-bottom: 30px;">
      And here are some other stuff I've made personally, just a piece of mind that i had when i'm bored doing heavy stuff. I've never release it for public but if you're interested please do check it!
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
