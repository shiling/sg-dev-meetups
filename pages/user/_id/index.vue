<template>
  <div class="app-page container">
    
    <div class="row">

      <div class="col-4">
        <!---USER CARD-->
        <user-profile-card :user="user" :allow-edit="true"></user-profile-card>
      </div>
      
      <section class="col-8">
        <!---INTERESTS-->
        <section id="user-interests" class="mb-3">
          <h2>Interests</h2>
            <p>
              <tag-list :tags="user.interests" size="large"></tag-list>
            </p>
        </section>
        <!---SPEAKING-->
        <section id="user-speaking-topics" class="mb-3">
          <h2>Open to speaking about</h2>
          <p>
            <tag-list :tags="user.speaking" size="large"></tag-list>
          </p>
        </section>
        <!---GROUPS-->
        <section id="user-groups" class="mb-3">
          <h2>Member of {{user.groups.length}} groups</h2>
          <div class="user-groups">
            <group-summary-card
              v-for="group in user.groups"
              :key="group.id"
              :group="group"
              class="mr-3 mb-3"
            ></group-summary-card>
          </div>
        </section>
      </section>
    </div>

  </div>
</template>

<script>

import GroupSummaryCard from "~/components/group/GroupSummaryCard"
import UserProfileCard from "~/components/user/UserProfileCard"
import TagList from "~/components/TagList"

export default {
  components: {
    GroupSummaryCard,
    UserProfileCard,
    TagList,
  },
  data: function(){
    return {
      user: {
        id: "chenhuijing",
        profileImgUrl: "https://picsum.photos/id/237/200/300",
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
            bannerImgUrl: "https://picsum.photos/400/200",
            tags: ["#css", "#webdev"]
          },
          {
            id: "js-conf-asia",
            name: "JsConfAsia",
            bannerImgUrl: "https://picsum.photos/600/400",
            tags: ["#javascript"]
          }
        ],
        social: {
          github: "chenhuijing",
          twitter: "chenhuijing",
          linkedin: "chenhuijing"
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  

  section{
    h2 {
      margin-bottom: 1rem;
    }
  }

  .user-groups {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  
</style>