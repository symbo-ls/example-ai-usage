export const closeModalVideo = function closeModalVideo() {
  this.getRoot('ModalVideo').state.update({ activeVideo: false })
}