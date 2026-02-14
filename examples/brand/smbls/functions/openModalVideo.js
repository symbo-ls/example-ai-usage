export const openModalVideo = function openModalVideo(url) {
  this.getRoot('ModalVideo').state.update({ activeVideo: url })
}