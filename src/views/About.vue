<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello! Selamat Datang!</h1>

    <div class="paragraph">
      <div>
        You're about to view the portofolio segment of <strong>Arief Achmadi Yusra</strong>, a Game Programmer specialized in Unity 3D and Unreal Engine with more than 2 years of experience.<br/>
        I've also operate another field in Programming such as .NET Development and Web Development, in short i've functioned like a fine swiss knife.
      </div>

      <div style="margin-top: 20px;">Feel Free to look at my  <router-link to="/team-projects">Team Projects</router-link> or <router-link to="/personal-projects"> Personal Projects</router-link>. You can also view my<router-link to="/resume"> Resume</router-link> to know more about me.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a Game Developer or another field that i'm strong at, eager to learn more and more as i'm developing to a more mature coder. You can reach me at <a href="mailto:ariefachmadi@yahoo.co.id">ariefachmadi@yahoo.co.id</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="my kisah" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>