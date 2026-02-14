export const InstallCdn = {
  P: {
    color: 'gray8',
    margin: '0',
    text: 'Add this script to the top of your HTML:',
  },
  Code: {
    margin: 'Z1 0 0',
    value: (el) => `<script src="https://api.symbols.app/cdn/${el.getAppKey() && el.getAppKey().split('.')[0]}"></script>`,
    Title: null,
    Buttons: {
      FrameworkSwitcher: null,
    },
  },
};