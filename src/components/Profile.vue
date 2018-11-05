<template>
    <div class="profile">             
        <div class="profile-cover" :style="{'background-image': 'url('+cover+')'}">

        </div>
        <div class="profile-pic" :style="{'background-image': 'url('+pic+')'}">

        </div>
        <div class="profile-content">
            <div class="profile-name">{{name}}</div>
            <div class="profile-username">{{username}}</div>
            <div class="profile-txt">{{content}}</div>
        </div>
        <footer>
            <font-awesome-icon :icon="['fab','facebook']" />
            <font-awesome-icon :icon="['fab','twitter']" /> 
            <font-awesome-icon :icon="['fab', 'instagram']" /> 
        </footer>
    </div>
</template>

<script>
export default {
    name:"Profile",
    props:{
        cover:String,
        pic:String,
        content:String,
        name:String,
        username:String
    }
}
</script>

<style lang="scss">
    .profile{
        width: 30%;
        background:white;
        border: 1px solid rgba(0, 0, 0, 0.125);
        height: 350px;
        border-radius:4px;
        box-sizing:border-box;
        position:relative;
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content: space-around;
        .profile-cover{
            height:30%;
            width:100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }

        .profile-pic{
            position:absolute;
            border-radius:100%;
            width: 100px;
            height:100px;
            left:calc(50% - 50px);
            top:calc(30% - 50px);
            background-size: cover;
            border: 5px solid rgba(255,255,255,0.9);
            background-repeat: no-repeat;
            background-position: center center;
        }

        .profile-content{
            margin-top:70px;
            .profile-name{
                color: crimson;
            }
            .profile-username{
                color:rgba(0,0,0,0.4);
                font-size:0.8em;
            }

            .profile-txt{
                font-size: 0.9em;
                margin:20px;
            }
        }

        footer{
            width:90%;
            border-top:1px solid rgba(0, 0, 0, 0.125);
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            padding-top:5px;
            padding-right:50px;
            font-size:1.5em;
            height:12%;
            svg{
                transition: 0.1s ease-in;
            }
            svg:hover{
                opacity:0.8;
                color: crimson;
                cursor:pointer;              
            }
        }
    }


</style>
