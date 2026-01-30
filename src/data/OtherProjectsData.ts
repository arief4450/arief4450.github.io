import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("project-6", "Mencari Bee-bee", "img/projects/mencaribee.png", `
    <div class="paragraph">
      <strong>Mencari Bee-Bee</strong> is a game where you need to find where is beebee hidden to complete the game. It's specifically targetted for children under 6, so i made this for my cousin at first and then decided to polish it to look better like right now.
      <br/> Since the game is so simple i've just use Basic JSON for saving the data and not much feature that can be brag off 😆
          <div class="paragraph">
            Main features :
            <ul>
            <li>Find the bees</li>
            <li>Look, a bee!</li>
            <li>And it's gone</li>
            <li>It is flying somewhere</li>
            </ul>
        </div>
        <div class="paragraph">
              <div class="notice">
                You can download and try the app <a href="https://drive.google.com/file/d/1-eVTRuY9vISfl7YDz8EM_YNcWrDFNhaj/view?usp=drive_link" target="_blank">here</a>
              </div>
            </div>

        <div class="paragraph center">
          <img class="pc-screenshot" src="img/projects/mbb/1.png" alt="Mencari bee bee" />
          <img class="pc-screenshot" src="img/projects/mbb/2.png" alt="Mencari bee bee" />
          <img class="pc-screenshot" src="img/projects/mbb/3.png" alt="Mencari bee bee" />
          <img class="pc-screenshot" src="img/projects/mbb/4.png" alt="Mencari bee bee" />
        </div>
    `, "#c10606", false, true),
    new ProjectData("project-7", "IRAMA", "img/projects/irama.png", `
    <div class="paragraph">
                <strong>IRAMA</strong> is a game that i've made for my thesis as a graduate of Computer Science. This game is quite difficult to make, especially in the game mechanics. I've made the rythm notes by scratch to follow the concept of another rythm game like Guitar Hero and Bang!Dream. 
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>Notes and Song is perfectly sync up</li>
              <li>Using unity procedural generation, i've tried to made the notes follows the song bpm</li>
              <li>Traditional Lampung folk and Indonesian National Music</li>
              <li>Simplistic UI</li>
              </ul>
          </div>

            <div class="paragraph">
              <div class="notice">
                You can download and try the app <a href="https://drive.google.com/file/d/1MNSgL51PmJrP4F8xwEjiZG0tL7ZzPQyb/view?usp=sharing" target="_blank">Here</a>
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/irama/1.png" alt="IRAMA" />
                <img class="pc-screenshot" src="img/projects/irama/2.png" alt="IRAMA" />
                <img class="pc-screenshot" src="img/projects/irama/3.png" alt="IRAMA" />
                <img class="pc-screenshot" src="img/projects/irama/4.png" alt="IRAMA" /> 
            </div>`, "#1ca1e2"),
    new ProjectData("project-8", "Minecraft in Unity", "img/projects/miu.jpg", `
    <div class="paragraph">
                This my tries to make <strong>Minecraft in Unity.</strong> My first experimental takes on how to apply procedural generation of assets and making a terrain chunks, a minecraft concept on how they make thousand of unique blocks on single render. 
                <br/> This was using terrain chunks - which is what the actual minecraft does as far as I can tell. This meant using voxel data to only build faces of blocks that are facing air blocks. And because the voxel data is 3D, it's possible to have much more interesting procedural terrain generation, like caves, overhangs, trees, etc.
                <br/> Procedurally generating trees and water were both a little tricky. For trees, I used a perlin noise value at each chunk coordinate to determine how many trees would be in each chunk. Then, a random number generator seeded with the chunk's coordinates was used to build the specific trees. This way, the exact same random numbers are produced each time for a specific chunk, and the same trees are generated.
                <br/> As i said, this thing is still on development as i'm not implement how to interact with the map yet
            </div>

            <div class="paragraph">
              <div class="notice">
                You can download and try the app <a href="https://drive.google.com/file/d/1NEuROg7igp493X3EaQmaeQQDPFGPNaL9/view?usp=sharing" target="_blank">Here</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/miu/1.png" alt="Minecraft in Unity" />
                <img class="pc-screenshot" src="img/projects/miu/2.png" alt="Minecraft in Unity" />
                <img class="pc-screenshot" src="img/projects/miu/3.png" alt="Minecraft in Unity" />
                <img class="pc-screenshot" src="img/projects/miu/4.png" alt="Minecraft in Unity" />
            </div>`),
    new ProjectData("project-9", "Ball Fall Game", "img/projects/bfg.png", `
     <div class="paragraph">
                <strong>Ball Fall Game</strong> is like the title said, it's a ball game that we control to fall. I made this when i'm bored.

            <div class="paragraph">
        Main features :
        <ul>
        <li>Level Count in display</li>
        <li>The more you're down, it's become more difficult</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                You can download and try the app <a href="You can download and try the app " target="_blank">Here</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/bfg/1.png" alt="Ball Fall Game" />
                <img class="pc-screenshot" src="img/projects/bfg/2.png" alt="Ball Fall Game" />
                <img class="pc-screenshot" src="img/projects/bfg/3.png" alt="Ball Fall Game" />
            </div>`
          ),
            

    new ProjectData("project-10", "Simple FPS Multiplayer", "img/projects/fps.jpg", `
     <div class="paragraph">
                <strong>Simple FPS Multiplayer</strong> is my very first attempt at creating Unity Multiplayer feature. The way it works is simple, at the time i made this i've experimenting with local multiplayer first, which means that the players that want to play this must be on the same network and the player must host a room first so another player can join their room. Aside from multiplayer aspect, this game is just provide a simple run and gun gameplay. 
            </div>
            <div class="paragraph">
        Main features :
        <ul>
        <li>Local Multiplayer with <a href="https://www.photonengine.com/pun" target="_blank">Photon Unity Networking 2</a>.</li>
        <li>Random Map Start to give player fair advantage</li>
        <li>All player model and animation is from Mixamo</li>
        <li>Fun Shooting your friends</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                You can download and try the app <a href="https://drive.google.com/file/d/1achKVMXlZpLUIzVL2hatvjDXbQJztwWv/view?usp=drive_link" target="_blank">Here</a>.
              </div>
            </div><div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/fpsmp/1.png" alt="Simple FPS Multiplayer" />
                <img class="pc-screenshot" src="img/projects/fpsmp/2.png" alt="Simple FPS Multiplayer" />
                <img class="pc-screenshot" src="img/projects/fpsmp/3.png" alt="Simple FPS Multiplayer" />
                <img class="pc-screenshot" src="img/projects/fpsmp/4.png" alt="Simple FPS Multiplayer" />
            </div>`),
];