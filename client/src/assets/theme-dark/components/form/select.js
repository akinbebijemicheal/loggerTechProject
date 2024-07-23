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
import colors from "assets/theme-dark/base/colors";

// Work Trial helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { transparent } = colors;

const select = {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      padding: `0 ${pxToRem(12)} !important`,

      "& .Mui-selected": {
        backgroundColor: transparent.main,
      },
    },

    selectMenu: {
      background: "none",
      height: "none",
      minHeight: "none",
      overflow: "unset",
    },

    icon: {
      display: "none",
    },
  },
};

export default select;
