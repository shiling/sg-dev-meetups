<template>
  <div class="app-page container">
    
    <div class="row">
      <div class="col-4">
        <!---USER CARD-->
        <div class="card user-profile text-center">
          <div>
            <img :src="user.profileImgUrl" alt="Profile image" class="user-profile__image rounded-circle mb-3">
          </div>
          <h1 class="user-profile__name">{{user.name}}</h1>
          <div class="mb-3">
            <fa icon="link"/> <a class="user-profile__website" :href="user.website">{{user.website}}</a>
          </div>
          <p>{{user.bio}}</p>
          <div class="user-profile__social-list">
            <a href="#" class="user-profile__social-link"><fa :icon="['fab', 'github']"/></a>
            <a href="#" class="user-profile__social-link"><fa :icon="['fab', 'twitter']"/></a>
            <a href="#" class="user-profile__social-link"><fa :icon="['fab', 'linkedin']"/></a>
          </div>
        </div>
      </div>
      
      <section class="col-8">
        <!---INTERESTS-->
        <section id="user-interests" class="mb-3">
          <h2>Interests</h2>
            <p>
              <a href="#" v-for="interest in user.interests" :key="interest">
                {{interest}}
              </a>
            </p>
        </section>
        <!---SPEAKING-->
        <section id="user-speaking-topics" class="mb-3">
          <h2>Open to speaking about</h2>
          <p>
            <a href="#" v-for="topic in user.speaking" :key="topic">
              {{topic}}
            </a>
          </p>
        </section>
        <!---GROUPS-->
        <section id="user-groups" class="mb-3">
          <h2>Member of {{user.groups.length}} groups</h2>
          <div class="user-groups">
            <div class="card">
              TalkCSS
            </div>
          </div>
        </section>
      </section>
    </div>

  </div>
</template>

<script>

export default {
  data: function(){
    return {
      user: {
        profileImgUrl: "https://via.placeholder.com/150",
        name: "Chen Hui Jing",
        website: "https://www.chenhuijing.com",
        bio: "Vivamus rutrum blandit quam, vel pellentesque felis porttitor a. Vivamus fermentum placerat risus ac volutpat. Sed eu porttitor augue, a accumsan eros.",
        interests: [
          "#webdev", "#css"
        ],
        speaking: [
          "#css"
        ],
        groups: [
          {
            id: "talk-css",
            name: "TalkCSS",
            bannerImageUrl: ""
          }
        ],
        social: {
          github: "chenhuijing",
          twitter: "chenhuijing",
          linkedin: "chenhuijing"
        }
      }
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .user-profile {
    display: flex;
    flex-direction: column;
    
  }
  .user-profile__name{
    font-weight: bold;
    font-size: 2rem;
  }
  
  .user-profile__social-link{
    margin: 0 .5rem;
    font-size: 1.5rem;
    color: #424242;
    &:hover{
      color: black;
    }
  }
</style>