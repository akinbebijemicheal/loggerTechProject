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
import borders from "assets/theme-dark/base/borders";
import typography from "assets/theme-dark/base/typography";

// Work Trial helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { dark, white } = colors;
const { borderRadius } = borders;
const { size } = typography;

const menuItem = {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: rgba(white.main, 0.8),
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: dark.main,
        color: white.main,
      },
    },
  },
};

export default menuItem;
