/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "0.5px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
      margin: {
        "87px": "87px",
      },
      height: {
        19: "82px",
      },
      maxWidth: {
        "278px": "278px",
        "296px": "296px",
        xxxs: "305px",
        xmd: "488px",
        xxs: "274px",
        btnsm: "314px",
        btn: "689px",
        form: "748px",
        mxl: "550px",
      },
      maxHeight: {
        "193px": "193px",
      },
      width: {
        1: "1px",
        19: "380px",
        18: "360px",
        300: "350px",
        400: "450px",
      },

      maxHeight: {
        156: "622px",
      },
      fontSize: {
        16: "64px",
        21: "21px",
      },
      fontWeight: {
        littleBold: "500",
      },
      colors: {
        lightAsh: "#707070",
        almostBlack: "#222222",
        bgColor: "#F7F7F7",
        tableHeadBg: "#EAEAEA",
        darkAsh: "#D0D0D0",
        lighterAsh: "#F3F3F3",
        blackRussian: "#101828",
        shadeBlue: "#667085",
        success: "#027A48",
        lightPurple: "#F9F5FF",
        darkPurple: "#7F56D9",
        darkerBlue: "#344054",
        tintedAsh: "#808080",
        disabled: "#FAFAFA",
        darkGreen: "#014342",
        kesAsh: "#EAEAEA",
        kesText: "#555555",
        percentAsh: "#B5B5B5",
        EAE:"#EAECF0",
        FFB:"#FFBD2E",
        mediumGreen:"#80B539",
        EFEF: "#EFEFEF",
        E5E5E5:"#E5E5E5"

        // danger: "B42318",
      },
      boxShadow: {
        xmd: "0px 4px 40px 0px rgba(0, 0, 0, 0.15)",
      },
      gridTemplateColumns: {
        profileLayoutL: "auto 305px",
        profileLayoutM: "auto 278px",
      },
      borderRadius: {
        100: "100px",
        20: "20px",
      },
      inset: {
        "135px": "-135px",
      },
    },
  },
  plugins: [],
};
