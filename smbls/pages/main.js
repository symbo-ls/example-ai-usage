export const main = {
  extends: "Page",
  width: "100%",
  margin: "0",
  flexFlow: "x",
  align: "stretch",
  onRender: async (el, s) => {
    await el.call("auth");
  },
  Cover: {
    backgroundImage:
      "https://images.unsplash.com/photo-1751601454754-68dce3c26795?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    backgroundSize: "cover",
    flex: 2,
  },
  Login: {
    flex: 5,
    flexAlign: "center center",
    Window: {
      theme: "dialog",
      padding: "A A2",
      margin: "auto",
      round: "A2",
      H3: {
        maxWidth: "F",
        lineHeight: "1.2",
        fontWeight: "300",
        children: ["Welcome to", "Tech dashboard"],
      },
      P: {
        fontWeight: "300",
        color: "caption",
        margin: "X2 - B2",
        text: "Sign in using Google to continue",
      },
      Link: {
        margin: "0 -W",
        href: "https://api.nodeops.ninja/auth/google",
        Img: {
          src: "google.svg",
        },
      },
    },
  },
};
