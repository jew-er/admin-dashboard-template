<template>
  <div class="typography">
    <div class="typography-container">
      <div class="typo-row">
        <tiv class="typo-desc" size="header5">Header 1:</tiv>
        <tiv size="header1">This text represents Header 1</tiv>
      </div>
      <div class="typo-row">
        <tiv class="typo-desc" size="header5">Header 2:</tiv>
        <tiv size="header2">This text represents Header 2</tiv>
      </div>
      <div class="typo-row">
        <tiv class="typo-desc" size="header5">Header 3:</tiv>
        <tiv size="header3">This text represents Header 3</tiv>
      </div>
      <div class="typo-row">
        <tiv class="typo-desc" size="header5">Header 4:</tiv>
        <tiv size="header4">This text represents Header 4</tiv>
      </div>
      <div class="typo-row">
        <tiv class="typo-desc" size="header5">Header 5:</tiv>
        <tiv size="header5">This text represents Header 5</tiv>
      </div>
      <div class="typo-row">
        <tiv class="typo-desc" size="header5">Paragraph:</tiv>
        <tiv size="paragraph">
          This text represents a paragraph,
          but unfortunately I am too lazy to find
          lorem ipsum placeholder for it. So I guess
          you're stuck with this text for the reminder
          of the example. Isn't that just horrific?
          This text is even readable english!
          What kind of a placeholder is that supposed to be?
        </tiv>
      </div>
      <div class="typo-row">
        <tiv class="typo-desc" size="header5">Muted Text:</tiv>
        <tiv size="paragraph" muted="true">And this text is a paragraph that is muted</tiv>
      </div>
      <div class="typo-row">
        <tiv class="typo-desc" size="header5">Colors:</tiv>
        <div class="typo-col">
          <tiv size="paragraph" textcol="primary">Primary text color</tiv>
          <tiv size="paragraph" textcol="info">Info text color</tiv>
          <tiv size="paragraph" textcol="success">Success text color</tiv>
          <tiv size="paragraph" textcol="warning">Warning text color</tiv>
          <tiv size="paragraph" textcol="danger">Danger text color</tiv>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tiv from "@/components/Tiv.vue";
export default {
  name: "Typography",
  components: {
    Tiv
  }
};
</script>

<style lang="scss" scoped>
.typography {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsla(240, 7%, 81%, 0.15);
  width: 100%;
  overflow: hidden;
  right: 0;
  top: 60px;
  padding: 35px;
  box-sizing: border-box;
  .typography-container {
    min-height: 100vh;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 4px;
    background: white;
    text-align: left;
    padding: 20px;
    box-sizing: border-box;
    .typo-row {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      flex-wrap: wrap;
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      .typo-desc {
        width: 140px;
      }
      .typo {
        width: calc(100%);
      }
    }
  }
}
</style>
