/**
=========================================================
* Work Trial - v2.1.0
=========================================================

* Product Page: https://micheal-akinbebije-portfolio.vercel.appproduct/material-dashboard-react
* Copyright 2022 Micheal Newton (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Work Trial base styles
import borders from "assets/theme/base/borders";

const { borderRadius } = borders;

const avatar = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out",
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: "auto",
    },
  },
};

export default avatar;
