<template>
  <div class="userprofile">
    <div class="form-wrapper">
      <div>
        <h3>Edit Profile</h3>
      </div>
      <form>
        <div class="inputrow">
          <div class="input-wrapper">
            <Inputfield width="100%" label="Username"/>
          </div>
          <div class="input-wrapper">
            <Inputfield width="100%" label="Email"/>
          </div>
          <div class="input-wrapper">
            <Inputfield width="100%" label="Company"/>
          </div>
        </div>
        <div class="inputrow">
          <div class="input-wrapper">
            <Inputfield width="100%" label="First Name "/>
          </div>
          <div class="input-wrapper">
            <Inputfield width="100%" label="Last Name"/>
          </div>
        </div>

        <Inputfield width="100%" label="Address"/>
        <div class="inputrow">
          <div class="input-wrapper">
            <Inputfield width="100%" label="City"/>
          </div>
          <div class="input-wrapper">
            <Inputfield width="100%" label="Country"/>
          </div>
          <div class="input-wrapper">
            <Inputfield width="100%" label="Postal Code"/>
          </div>
        </div>

        <button class="form-btn">Update Profile</button>
      </form>
    </div>
    <div class="profile-wrapper">
      <Profile
        cover="https://coverfiles.alphacoders.com/549/54927.jpg"
        pic="http://sharon.audubon.org/sites/g/files/amh746/f/styles/hero_mobile/public/beardeddragon.jpg?itok=F9Ez8GAo"
        name="Bearded Dragon"
        username="lizard_23x"
        content="All the women in my family were bearded, especially the dragons."
      />
    </div>
  </div>
</template>

<script>
import Inputfield from "@/components/Inputfield.vue";
import Profile from "@/components/Profile.vue";
export default {
  name: "userprofile",
  components: {
    Inputfield,
    Profile
  }
};
</script>

<style lang="scss">
.userprofile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background: hsla(240, 7%, 81%, 0.15);
  width: 100%;
  overflow: hidden;
  padding: 35px;
  box-sizing: border-box;
  min-height: 100vh;
}
.profile-wrapper {
  width: 30%;
  height: 400px;
}
form {
  background: white;
  height: 80%;
  display: flex;
  flex-direction: column;
}

.inputrow {
  display: flex;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: space-between;
  .input-wrapper {
    flex: 1 1 100%;
    margin-right: 5px;
    margin-left: 5px;
  }
}
.form-wrapper {
  background: white;
  width: 65%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  padding: 15px;
  overflow: hidden;
  min-width: 100px;
  box-sizing: border-box;
}

.form-btn {
  background: crimson;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  padding: 15px;
  color: white;
  display: inline-block;
  width: 150px;
  box-sizing: border-box;
  border: 3px solid transparent;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:active {
    border: 3px solid lightseagreen;
  }

  //This removes a stupid border in firefox when button is clicked
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

@media only screen and (max-width: 1000px) {
  .userprofile {
    flex-direction: column;
    align-items: center;
    .profile-wrapper {
      width: 100%;
    }
    .inputrow {
      flex-direction: column;
      margin: 0;
      div {
        margin-bottom: 20px;
      }
    }
    .form-wrapper {
      width: 100%;
      height: auto;
    }
  }
}
</style>
