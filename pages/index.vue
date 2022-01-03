<script>
import BaseHeader from '../components/BaseHeader.vue'
import UserTestimonials from '~/views/UserTestimonials.vue';
import NewTestimonials from '~/views/NewTestimonials.vue';
import SelectedTestimonal from '~/components/SelectedTestimonal.vue';
export default {
  components: {
    BaseHeader,
    UserTestimonials,
    NewTestimonials,
    SelectedTestimonal
  },
  data() {
    return {
      //current "page"
      component: 'UserTestimonials',
    }
  },
  //toggle the current page
  methods: {
    togglePageChange(event) {
      this.component=event;
    },

  },
  computed: {
    modal: {
      get () {
        return this.$store.state.modal;
      },
    }
  }
}
</script>

<template>
  <div class="bg-lavender-web h-screen w-full bg-img relative overflow-hidden">
    <SelectedTestimonal v-if="modal === true" class="z-index-9999"/>
    <BaseHeader/>
    <div class="max-w-[1093px] mx-auto flex mt-[47px] mb-[58px]">
      <h1 class="text-tart-orange text-3xl  whitespace-nowrap">
        <span v-if="component == 'UserTestimonials'">
          Testimonials
        </span>
        <span v-else>
          New Testimony
        </span>
      </h1>
      <div class="w-full flex justify-end">
        <button @click="component = 'NewTestimonials'" v-if="component == 'UserTestimonials'" class="w-[182px] h-[60px] cstm-border px-[11px] py-[8px]">
          New
        </button>
      </div>
    </div>
    <component :is="component" />
  </div>

</template>

<style>

  .cstm-border {
    @apply border-[5px] border-ultramarine;
  }

  .bg-img {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='831' height='831' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%230000d0'/%3E%3Cstop offset='1' stop-color='%233c00f3'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%23868686'/%3E%3Cstop offset='0.09' stop-color='%23ababab'/%3E%3Cstop offset='0.18' stop-color='%23c4c4c4'/%3E%3Cstop offset='0.31' stop-color='%23d7d7d7'/%3E%3Cstop offset='0.44' stop-color='%23e5e5e5'/%3E%3Cstop offset='0.59' stop-color='%23f1f1f1'/%3E%3Cstop offset='0.75' stop-color='%23f9f9f9'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='0.11' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top left;
  }

  .z-index-9999 {
    z-index: 9999;
  }
</style>
