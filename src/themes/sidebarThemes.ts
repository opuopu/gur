import { ThemeConfig } from "antd";

export const sidebardThemes: ThemeConfig = {
  components: {
    Menu: {
      itemSelectedBg: "rgb(253, 133, 51)",
      itemSelectedColor: "black",
      itemColor: "white",
      fontSize: 18,
      iconSize: 18,
      iconMarginInlineEnd: "14px",
      borderRadius: 0,
      borderRadiusLG: 0,
      itemMarginInline: 0,
    },

    Button: {
      defaultHoverBorderColor: "#F67E2F",
      defaultHoverBg: "#F67E2F",
      defaultHoverColor: "none",
    },
  },
};
