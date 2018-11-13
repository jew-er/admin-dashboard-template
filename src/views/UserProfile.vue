<template>
    <div class="userprofile">
        <div class="form-wrapper">
            <div>
                <h3>Edit Profile</h3>
            </div>
            <form>
              <div class="inputrow">
                <Inputfield width="100%" label="Username"/>
                <Inputfield width="100%" label="Email"/>
                <Inputfield width="100%" label="Company"/>
              </div>
              <div class="inputrow">
                <Inputfield width="15vw" label="First Name "/>
                <Inputfield width="15vw" label="Last Name"/>
              </div>

                <Inputfield width="100%" label="Address"/>
                <div class="inputrow">
                <Inputfield width="100%" label="City"/>
                <Inputfield width="100%" label="Country"/>
                <Inputfield width="100%" label="Postal Code"/>
                </div>

                <button class="form-btn">Update Profile</button>
            </form>
            </div>
            <Profile 
            cover="https://coverfiles.alphacoders.com/549/54927.jpg"
            pic="http://sharon.audubon.org/sites/g/files/amh746/f/styles/hero_mobile/public/beardeddragon.jpg?itok=F9Ez8GAo"
            name="Bearded Dragon"
            username="lizard_23x"
            content="All the women in my family were bearded, especially the dragons."
            />
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
  background: hsla(240, 7%, 81%, 0.15);
  width: 100%;
  overflow: hidden;
  padding: 35px;
  box-sizing: border-box;
  min-height: 100vh;
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
  margin-top: 40px;
  margin-bottom: 40px;
  justify-content: space-between;
  display: flex;
}
.form-wrapper {
  background: white;
  width: 65%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  padding: 15px;
  height: 470px;
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
</style>
