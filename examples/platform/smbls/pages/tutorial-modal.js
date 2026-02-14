export const tutorialModal = {
  extends: 'ModalWindow',
  onInit: (el, s) => {
    s.update({
      title: 'Tutorial',
      description: 'Watch youtube video.',
      youtube: 'https://www.youtube.com/embed/QIdimVDuSEU?si=NaGhGaHADN8jj_aH&amp;controls=0'
    }, {
      preventUpdate: true
    })
  },
  ModalHeader: {
    props: ({
      state
    }) => ({
      title: state.title,
      p: state.description
    }),
  },
  Flex: {
    Iframe: {
      props: ({
        state
      }) => ({
        boxSize: '315px 560px',
        src: state.youtube,
        title: state.title,
        border: '0',
        round: 'X2',
        margin: '-B -Z -Z',
        minHeight: '0',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        allowfullscreen: true
      }),
    },
  },
};