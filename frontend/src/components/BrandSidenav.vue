<template>
    <div id="sidebar">
        <a  href="/"><img class="logo" :src="require(`../assets/schriftlogo-black.svg`)" alt="logo"></a>
        <ul id="navigation">
            <li v-for="(item, index) in navigation" :key="'item'+index">
                <i v-if="item.subnav" class="far" 
                :class="{'fas fa-angle-right':!item.open,
                'fas fa-angle-down':item.open}"></i>
                <div class="title" @click="item.open = !item.open">
                    {{ item.title }}
                </div>
                <Dropdown v-if="item.subnav" :list="item"/>
            </li>
        </ul>
    </div>
</template>

<script>

import Dropdown from './Dropdown.vue'

    export default {
        computed: {
            navigation(){
                return this.$store.getters.navigation;
            }
        },
         components: {

            Dropdown,
        }, 
    }
</script>

<style lang="scss" scoped>
    #sidebar {
        text-transform: uppercase;
        display: inline-block;
        text-align: left;
        width: 200px;
        position: fixed;
        left: 45px;
        top: 50%;
        transform: translate(0%, -50%);
    }

    .logo {
        width: 150px;
    }

    #navigation {
        list-style: none;
        padding: 0px;
        margin: 0px;

        li {
            position: relative;
            color: black;
            cursor: pointer;

            .title {
                padding-bottom: 10px;
                padding-top: 10px;
                text-indent: 0px;
            }

            i {
                position: absolute;
                top: 12px;
                right: 0px;
            }
        }
    }

    .img {
        height: 26px;
        }
</style>