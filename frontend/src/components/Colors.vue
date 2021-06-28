<template>
    <div class="colors"> 
        <div class="color-box">
            <div class="prime">
                <p>Primärfarben</p>
                <Color v-for="(item, index) in primeColors" :key="'item'+index" :color="item" @update="displayColor" />
            </div>
            <div class="second">
                <p>Sekundärfarben</p>
                <Color v-for="(item, index) in secondColors" :key="'item'+index" :color="item" @update="displayColor" />
            </div>
        </div>
        <div class="infobox">
            <div class="cblock" :style="{'backgroundColor': '#'+hex}"></div>
            <div id="colordata">
                <p>CMYK – {{ cmyk }}</p>
                <i @click="copy(1)" class="far fa-copy"></i>
                <p>HEX – {{ hex }}</p>
                <i @click="copy(2)" class="far fa-copy"></i>
                <p>RGB – {{ rgb }}</p>
                <i @click="copy(3)" class="far fa-copy"></i>
                <input type="text" :value="cmyk">
                <input type="text" :value="hex">
                <input type="text" :value="rgb">
            </div>
            <div class="recomendet">
                <h1>Empfohlene Kombinationen:</h1>
                <div v-for="(item, index) in rec" :key="'item'+index" class="rec">
                    <div class="recColor" :style="{'backgroundColor': item}"></div>
                    <p>{{ item }}</p>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>

import Color from '../components/Color.vue'

export default {
    components:{
        Color,
    },
    data(){
        return {
            hex: '',
            rgb: '',
            cmyk: '',
            rec: [],
        }
    },
    computed:{
        colors(){
            return this.$store.getters.colors;
        },
        primeColors(){
            return this.$store.getters.primeColors;
        },
        secondColors(){
            return this.$store.getters.secondColors;
        },
        
    },
    methods: {
        displayColor(variable){
            this.hex = variable.hex.replace(/#/g,"");
            this.rgb = variable.rgb.slice(4,variable.rgb.length - 1).replace(/,/g,"");
            this.cmyk = variable.cmyk;
            this.rec = variable.recomendet;
        },
        copy(number) {
            var copyText = document.getElementById("colordata").getElementsByTagName("input")[number-1];
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
             alert("Copied the text: " + copyText.value);
        }, 
    }
}
</script>

<style lang="scss" scoped>
    .colors{
        background-color: black;
        display: inline-block;
        width: 100%;
        height: 500px;
    }

    .color-box{
        width: calc(100% - 370px);
        height: calc(100% - 40px);
        background-color: rgb(230, 230, 230);
        padding: 20px;
        display: inline-block;

        p{
            margin-bottom: 10px;
            font-size: 25px;
            font-weight: 600;
        }
    }

    .prime{
        height: 100%;
        margin-right: 20px;
        float: left;
    }

    .infobox{
        width: 330px;
        height: calc(100% - 0px);
        
        background-color: rgb(25, 25, 25);
        color: white;
        float: right;

        #colordata{
            margin-top: 15px;

            p{
            margin-bottom: 7px;
            margin-left: 10px;
            text-transform: uppercase;
            width: 200px;
            float: left;
            }

            i{
                float: right;
                margin-right: 10px;
            }

            input{
                appearance: none;
                height: 0px;
                width: 0px;
                border: none;
                overflow: hidden;
                opacity: 0;
            }
        }

        .recomendet{
            margin-top: 20px;
            margin-left: 10px;
            width: calc(100% - 20px);
            display: inline-block;

            h1{
                margin-bottom: 10px;
                font-weight: 600;
                font-size: 16px;
            }
            .rec{
                display: inline-block;
                width: 100%;
                margin-bottom: 5px;

                p{
                    width: 90px;
                    float: left;
                    text-transform: uppercase;
                }
            }
            .recColor{
                width: calc(100% - 90px);
                height: 20px;
                float: right;
            }
        }

    }

    .cblock{
        height: 100px;
        width: 100%;
        margin-bottom: 10px;
    }

</style>