<template>
<div class="slideshow">
    <div class="slider">
        <div v-for="(item, index) in slideElements" :key="'item'+index" class="element" :style="{ backgroundImage: 'url(' + require(`../assets/${item.img}`) + ')' }">
            <div class="textbox">
                <p class="headline">{{ item.headline }}</p>
                <p class="text">{{ item.text }}</p>
            </div>
        </div>    
    </div>
    <div class="btnleft btn" @click="prevImg">
        <i class="fas fa-angle-left"></i>
    </div>
    <div class="btnright btn" @click="nextImg">
        <i class="fas fa-angle-right"></i>
    </div>
</div>
</template>

<script>
export default {
    created() {
        window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    data() {
        return{
            imgcount: 0,
        }
    },
    computed:{
        slideElements(){
            return this.$store.getters.slider;
        },
    },
    methods: {
        nextImg(){
            let element = document.getElementsByClassName("slider")[0];
            let value =element.offsetWidth; 
            if(this.imgcount < 3){
                this.imgcount += 1;
            }
            console.log(this.imgcount);
            element.scrollLeft += value;
        },
        prevImg(){
            let element = document.getElementsByClassName("slider")[0];
            let value =element.offsetWidth; 
            if(this.imgcount > 0){
                this.imgcount -= 1;
            }
            element.scrollLeft -= value;
        },
        myEventHandler() {
            let element = document.getElementsByClassName("slider")[0];
            let value = element.offsetWidth * this.imgcount; 
            element.scrollLeft = value;
        }
    }
}
</script>

<style lang="scss" scoped>

    .slideshow{
        width: 100%;
        position: relative;
        display: inline-block;
    }

    .slider{
        position: relative;
        height: 700px;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        scroll-behavior: smooth;
    }

    .slider::-webkit-scrollbar {
            display: none;
        }

    .element{
        display: inline-block;
        position: relative;
        width: 100%;
        height: 700px;
        background-size: cover;
        color: white;
        overflow-y: none;
        transition: 1s;
    }

    img{
        height: 100%;
        width: 100%;
    }

    .headline{  
        font-size: 6em;
        font-weight: 700;
        margin: 40px;
        white-space: normal;
    }

    .text{
        margin-left: 40px;
        top: 80px;
        font-size: 2em;
        width: 600px;
        white-space: normal;
    }

    .textbox{
        position: absolute;
    }

    .btn{
        position: absolute;
        top: 50%;
        font-size: 2em;
        color:white;
        background-color: black;
        padding: 10px;
        cursor: pointer;
    }

    .btnright{
        right: 0px;
        transform: translate(50%,-50%);
    }

    .btnleft{
        transform: translate(-50%,-50%);
    }
</style>