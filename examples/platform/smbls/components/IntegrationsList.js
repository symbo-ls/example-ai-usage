export const IntegrationsList = {
  extends: 'Grid',
  childExtends: 'IntegrationItem',
  height: '100%',
  width: '100%',
  padding: 'Z2 A',
  overflow: 'auto',
  overflowY: 'auto',
  templateColumns: 'repeat(4, 1fr)',
  templateRows: 'repeat(12, 1fr)',
  childrenAs: 'state',
  children: [
    {
      poster: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iy6P.qskNVuU/v0/1200x-1.png',
      title: 'Google Maps',
    },
    {
      poster: 'https://plausible.io/docs/img/numbers-not-adding-up.png',
      title: 'Plausible Analytics',
    },
    {
      poster: 'https://images.ctfassets.net/xny2w179f4ki/79Ufvhs5lHbhgaamd7E5SO/dbce5c98feff7e3e2411155f29d668ef/Screen_Shot_2021-12-01_at_12.29_1.png',
      title: 'Intercom',
    },
    {
      poster: 'https://assets.cdn.prod.twilio.com/original_images/whats-new-in-capturing-video-feature.png',
      title: 'Twillio Video',
    },
    {
      poster: 'https://community.fabric.microsoft.com/t5/image/serverpage/image-id/109469i0FAB4D2BF0FEEBA6?v=v2',
      title: 'Twitter Feed',
    },
    {
      poster: 'https://searchengineland.com/wp-content/seloads/2011/03/facebook-like-buttons.jpg',
      title: 'Facebook Like button',
    },
    {
      poster: 'https://cdn.pixabay.com/photo/2020/03/19/13/58/youtube-4947559_1280.jpg',
      title: 'Youtube Video',
    },
    {
      poster: 'https://i.ytimg.com/vi/NooR1uqCgtg/mqdefault.jpg',
      title: 'Figma Preview',
    },
    {
      poster: 'https://res.cloudinary.com/practicaldev/image/fetch/s--CRJTTGM8--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/g595slgphyi9lkqz2u18.png',
      title: 'Mardown preview',
    },
    {
      poster: 'https://vimeo-blog-images.storage.googleapis.com/2022/03/Blog_-Video-Editing-on-Tiktok-and-best-Tiktok-editing-apps.png',
      title: 'Tiktok Video',
    },
  ],
  gap: 'C1',
};