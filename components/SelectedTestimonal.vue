import SelectedUser from '~/components/SelectedUser.vue';
<script>
  export default {
    components: {

    },
    data () {
      return {
        SelectedTestimonal: [],
      }
    },
    methods: {
        updateModal() {
        this.$store.commit('updateModal')
      }
    },
    computed: {
      selectedUser: {
        get () {
          return this.$store.state.selectedUser;
        },
      }
    }
  }
</script>

<template>
  <div @click="updateModal" class="absolute w-full h-full bg-black bg-opacity-40 flex justify-center">

      <div class="h-[499px] text-[23px] hover:drop-shadow-xl filter drop-shadow-lg max-w-[435px] w-full border-2 mt-[190px] flex flex-col bg-lavender-web pt-[66px]">
        <p class="mx-auto">{{selectedUser.name}}</p>
        <p class="mx-auto">{{selectedUser.profession}}</p>

      </div>
      <img class="mt-[124px] rounded-full  h-[132px] w-[132px] bg-gray-400 mx-auto absolute" :src="selectedUser.img"/>
  </div>
</template>

<style>

</style>
