<template>
  <div class="typo" v-bind:style="getStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tiv",
  data() {
    return {
      color: {
        white: "white",
        black: "black",
        primary: "#0336FF",
        danger: "crimson",
        success: "springgreen",
        info: "#1dc7ea",
        warning: "#ff9500"
      },
      type: {
        header1: {
          "font-size": "52px",
          "font-weight": "300"
        },
        header2: {
          "font-size": "36px",
          "font-weight": "300"
        },
        header3: {
          "font-size": "28px",
          "font-weight": "300"
        },
        header4: {
          "font-size": "22px",
          "font-weight": "300"
        },
        header5: {
          "font-size": "16px",
          "font-weight": "300"
        },
        paragraph: {
          "font-size": "16px",
          "line-height": "1.5"
        }
      },
      muteStyle: {
        opacity: "0.5"
      }
    };
  },
  props: {
    textcol: String,
    size: String,
    muted: String
  },
  computed: {
    getStyle() {
      let x = {};
      if (this.muted === "true") {
        x.opacity = this.muteStyle.opacity;
      }
      return Object.assign({}, this.type[this.size], x, {
        color: this.color[this.textcol]
      });
    }
  }
};
</script>
<style lang="scss">
.typo {
  font-family: "Roboto", sans-serif;
  word-wrap: break-word;
  display: inline-block;
  a {
    color: #0336ff;
    text-decoration: none;
    opacity: 0.8;
    transition: color 0.1s ease-in;
    &:hover {
      color: springgreen;
    }
  }
}
</style>
