
export const state = () => ({
  modal: false,
  profilePicture: String,
  profession: String,
  selectedUser: {
    name: String,
    profession: String,
    img: String,
  },

})

export const mutations = {
  //userType
  updateModal(state) {
    state.modal = !state.modal;
  },
  selectedTestimonial(state, payload) {
    state.selectedUser.name = payload.name;
    state.selectedUser.profession = payload.profession;
    state.selectedUser.img = payload.img;
  }
}
