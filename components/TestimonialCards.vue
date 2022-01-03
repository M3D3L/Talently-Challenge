<script>
  import TalentlyLogo from "~/components/TalentlyLogo.vue";
  export default {
    components: {
      TalentlyLogo
    },
    data () {
      return {
        users:[
          {
            name: "John Doe",
            profession: "CEO",
            company: "Talently",
            img: "https://randomuser.me/api/portraits/men/94.jpg"
          },
          {
            name: "Jane Doe",
            profession: "CEO",
            company: "Talently",
            img: "https://randomuser.me/api/portraits/women/94.jpg"
          },

        ]
      }
    },
    methods: {
        updateModal(e) {
        this.$store.commit('updateModal');
        this.$store.commit('selectedTestimonial', e);
      },
    },
  }
</script>

<template>

  <div  class="w-full grid sm:grid-cols-2 lg:grid-cols-3 max-w-[1093px] mx-auto px-[11px] pb-[24px]">
    <template v-for="(user, index) in users">
      <div class="w-full px-[11px] pb-[24px]">
        <!--Function toggles modal and sets selected testimonial-->
        <div @click="updateModal(user)" class="flex flex-row shadow-lg h-[102px] border-[5px] cursor-pointer hover:border-ultramarine group border-tart-orange bg-lavender-web bg-opacity-90">
          <!--Profile Picture-->
          <img class="profile-pic" :src="user.img" />
          <div class="flex flex-col text-[16px] ml-[21px] text-ultramarine">
            <!--User Name-->
            <h2 class="mt-[23px] group-hover:text-tart-orange">
              <strong>
                {{user.name}}
              </strong>
            </h2>
            <!--Role-->
            <h3 class="text-black">
              Web Developer
            </h3>
          </div>
        </div>
      </div>
    </template>
  </div>

</template>

<style scoped>
  .profile-pic {
    @apply w-[52px] h-[52px] ml-[21px] my-[20px] rounded-full transform group-hover:animate-bounce border-ultramarine filter drop-shadow-md;
  }

</style>
