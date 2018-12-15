<template>
  <div class="notify">
    <div class="notify-container">
      <Tiv size="header3">Notification showcase</Tiv>
      <Tiv
        size="paragraph"
        muted="true"
      >Made by yours truly. I will write a documentation eventually</Tiv>
      <div class="showcase">
        <div>
          <Tiv size="paragraph">Different styles</Tiv>
          <notif mode="static" type="info">This is a plain notification</notif>
          <notif mode="static" type="info" :closeButton="true">This notification has a close button</notif>
          <notif
            mode="static"
            type="info"
            :closeButton="true"
            :hasIcon="true"
            icon="alarm"
          >And this one also has an icon</notif>
          <notif mode="static" type="info" :closeButton="true" :hasIcon="true" icon="gift">
            Here is how it looks as the content amount increases. By default the notifications will vanish after 3 seconds.
            You can use mode="static" to prevent this. Also, click on the notifications.
          </notif>
        </div>
        <div>
          <Tiv size="paragraph">They come in different colors</Tiv>
          <notif
            mode="static"
            type="primary"
            :closeButton="true"
          >Primary - This text is a placeholder</notif>
          <notif
            mode="static"
            type="success"
            :closeButton="true"
          >Success - This text is a placeholder</notif>
          <notif mode="static" type="info" :closeButton="true">Info - This text is a placeholder</notif>
          <notif
            mode="static"
            type="warning"
            :closeButton="true"
          >Warning - This text is a placeholder</notif>
          <notif mode="static" type="danger" :closeButton="true">Danger - This text is a placeholder</notif>
        </div>
      </div>
      <div class="ccc">
        <notif
          v-for="(i,key) in notify"
          v-bind:key="key"
          :closeButton="true"
          type="info"
          icon="warning"
          :hasIcon="true"
        >Spamming notifications as if the world is ending.</notif>
      </div>
      <button class="btn" v-on:click="clickHandle">Click here to see a notification stream</button>
    </div>
  </div>
</template>
<script>
import Notif from "@/components/Notif.vue";
import Tiv from "@/components/Tiv.vue";
export default {
  name: "Notify",
  data() {
    return {
      notify: []
    };
  },
  methods: {
    clickHandle() {
      this.notify.push(1);
    }
  },
  components: {
    Notif,
    Tiv
  }
};
</script>
<style lang="scss" scoped>
.notify {
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
  .notify-container {
    min-height: 100vh;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 4px;
    background: white;
    text-align: left;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .showcase {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
    .ccc {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-start;
      position: fixed;
      height: 100%;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }
    .btn {
      padding: 10px;
      color: white;
      background: gray;
      border: none;
      border-radius: 4px;
      width: 300px;
      height: 50px;
      margin: auto;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .showcase {
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
    }
  }
}
</style>
