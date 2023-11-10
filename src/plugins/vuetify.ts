/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1b6a90",
          secondary: "#cd6540",
          info: "#238894",
          warning: "#f16f38",
          error: "#df391f",
          success: "#717734",
          background: "#f7dfb3",
        },
      },
      dark: {
        colors: {
          primary: "#1b6a90",
          secondary: "#f6a868",
          info: "#238894",
          warning: "#f16f38",
          error: "#ed6553",
          success: "#717734",
          background: "#28282B",
        },
      },
    },
    defaultTheme: "dark",
  },
});
