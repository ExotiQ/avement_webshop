<template>
    <header>
        <div :style="{'color': color}" id="container">
            <a href="/"><img class="align-left" :src="require(`../assets/schriftlogo-${color}.svg`)" alt="logo"></a>
            <a class="align-left"  href="/search" :style="{'color': color}">Suche</a>
            <a class="align-left"  href="/Shop" :style="{'color': color}">Shop</a>
            <a class="align-right"  href="/cart" :style="{'color': color}">Warenkorb ({{ cartItemCount }})</a>
            <a class="align-right"  href="/Account" :style="{'color': color}">Account</a>
            <a class="align-right" href="/about" :style="{'color': color}">Lookbook</a>
            <a class="align-right" href="/brand" :style="{'color': color}">Brand</a>
        </div>
    </header>
</template>

<script>
    export default {
        name:'Header',
        props:{
            color: {
                type: String,
                default: "black",
            }
        },
        computed: {
            cartItemCount() {
                return this.$store.getters.cartItemCount;
            }
        }
    }
</script>

<style scoped lang="scss">
    header{
        position: absolute;
        z-index: 2;
        width: 100%;
        height: auto;
        //background-color: mediumslateblue;
    }

    #container{
        display: inline-block;
        //background-color: mediumvioletred;
        padding: 45px 45px 20px 45px;
        width: calc(100% - 90px);
        font-size: 14px;
    }

    img{
        height: 16px;
    }

    a{
        margin: 0px 0px 0px 20px;
        text-decoration: none;
    }


</style>