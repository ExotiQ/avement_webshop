<template>
    <div :class="[fullsize ? 'fullsize' : 'page']" :style="{'align-items': align, 'margin-bottom': dist*45+'px'}">
        <div v-if="special" class="special">
            <FontUsecases v-if="usecases" />
            <Colors v-if="colors" />
            <Layouts v-if="layouts" />
            <div  v-if="fontlist" class="fontcontainer">
                <table class="container" :style="{ backgroundColor: colorswitch}">
                <tr>
                    <td class="first"></td>
                    <td class="second"><select v-model="fontstyle">
                        <option selected v-bind:value="0">normal</option>
                        <option v-bind:value="1">italic</option>
                        </select>
                    </td>
                    <td class="third"><input v-model="fltext" placeholder="Teste deinen eigenen Fließtext"></td>
                    <td class="forth"><input v-model="message" placeholder="Teste deine Eigene Headline"></td>
                    <td class="fifth"><i class="fas fa-download"></i></td>
                </tr>
                </table>
                <FontList v-for="(item, index) in fontl" :key="'item'+index" :fontfamily="item" 
                :fontstyle="fontstyle" :headline="message" :fltext="fltext" :bgcolor="index"/>
            </div>
        </div>      
        <img :class="[fullsize ? 'fullsizeimg' : '']" v-if="img" :src="require(`../assets/${img}`)" alt="logo" :style="imgposit">
        <div class="container"  :style=" textposit ">
            <p :class="[subheadline ? 'bigheadline' : 'headline']">{{ headline }}</p>
            <p v-if="bigheadline && !headline" class="bigheadline">{{ bigheadline }}</p>
            <p v-if="subheadline" class="subheadline">{{ subheadline }}</p>
            <p class="text">{{ text }}</p>
        </div>
    </div>
</template>

<script>

import FontList from '../components/FontList'
import FontUsecases from '../components/FontUsecases'
import Colors from '../components/Colors'
import Layouts from '../components/Layouts'

export default {
    name: 'page',
    components: {
        FontList,
        FontUsecases,
        Colors,
        Layouts,
    },
    data() {
            return {
                message: '',
                fltext: '',
                fontstyle: '0',
            }
    },
    computed:{
        fontl(){
            return this.$store.getters.fontlist;
        },
        headlinetext(){
            return "headline";
        },
        textposit (){
            console.log(this.textcolumns);
            if(this.textcolumns == 1){
                if (this.textpos === "left") {
                    return{
                        "grid-column": "1 / 2", 
                    }
                }
            else if(this.textpos === "top"){
                return{
                        "grid-column": "1 / 2", 
                        "margin-bottom": "45px" 
                    }
            }
                else{
                        return{
                        "grid-column": "4 / 5"
                    }
                }
            }
            else{
                if (this.textpos === "left") {
                    return{
                        "grid-column": "1 / 3" 
                    }
                }
                else if(this.textpos === "top"){
                     return{
                        "grid-column": "1 / 3", 
                        "margin-bottom": "45px" 
                    }
                }
                else{
                        return{
                        "grid-column": "3 / 5"
                    }
                }
            }
        },
        imgposit (){
            if(this.textcolumns == 1){
                if (this.textpos === "left") {
                    return{
                        "grid-column": "2 / 5" 
                    }
                }
                else if (this.textpos === "right"){
                        return{
                        "grid-column": "1 / 4"
                    }
                }
                else{
                     return{
                        "grid-column": "1 / 5"
                    }
                }
            }
            else{
                if (this.textpos === "left") {
                    return{
                        "grid-column": "3 / 6",
                    }
                }
                else if (this.textpos === "right"){
                        return{
                        "grid-column": "1/ 3"
                    }
                }
                else{
                     return{
                        "grid-column": "1 / 5"
                    }
                }
            }
        },
        special (){
            if(this.fontlist || this.usecases || this.colors || this.layouts){
                return true;
            }
            else{
                return false;
            }
        }
    },
    props:{
        headline: {
            type: String,
        },
        subheadline: {
            type: String,
        },
        bigheadline: {
            type: String,
        },
        text: {
            type: String,
        },
        img: {
            type: String,
        },
        align:{
            type: String,
            default: "center",
        },
        textpos:{
            type: String,
            default: "left",
        },
        textcolumns:{
            type: Number,
            default: 1,
        },
        dist:{
            type: Number,
            default: 4,
        },
        fullsize:{
            type: Boolean,
            default: false,
        },
        fontlist:{
            type: Boolean,
            default: false,
        },
        usecases:{
            type: Boolean,
            default: false,
        },
        colors:{
            type: Boolean,
            default: false,
        },
        layouts:{
            type: Boolean,
            default: false,
        }
    },
    methods:{   
    },
}


</script>

<style lang="scss" scoped>

    
    p{
        margin: 0px;
    }

    .special{
        width: 100%;
        display: inline-block;
        grid-column: 1 / 5;
    }

    .fontcontainer{
        width: 100%;
        background-color:rgb(25, 25, 25);
        color: white;
    }

    .fullsize{
        position: relative;
        height: 100vh;
        overflow: hidden;
    }

    .fullsizeimg{
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
    }

    .page{
        width: calc(100% - 45px);
        margin-left: 45px;
        display: grid;
        grid-column-gap: 45px;
        grid-row-gap: 0px;
        grid-template-columns: 1fr 1fr 1fr 1fr 0px;
        height: auto;
    }

    .container{
        display: inline-block;
        grid-row: 1 / 2;
    }

    .headline{
        font-size:2em;
        font-weight: 700;
        margin-bottom: 26px;
        text-transform: uppercase
    }
    .bigheadline{
        font-size:4em;
        font-weight: 600;
        margin-bottom: 10px;
        line-height:1.0;
        text-transform: uppercase;
        word-break: keep-all;
    }

    .subheadline{
        font-size:1.5em;
        font-weight: 500;
        margin-bottom: 26px;
    }

    .text{
        font-size: 1em;
        line-height: 1.8em;
        font-weight: 400;
        column-count: 2;
        column-width: calc((100vw - 90px - 245px - 3* 45px)/4);
        column-gap: 45px;
    }

    img{
        width: 100%;
    }

    table{
        width: 100%;
        border-collapse: collapse;
        background-color: black;
    }

    td{
        padding: 10px;
        vertical-align: top;
    }

    .first{
       
        font-weight: 600;
        font-size: 25px;
        width: 160px;
    }
    .second{
        
        font-size: 1em;
        line-height: 1.8em;
        width: 320px;
    }
    .third{
        width: calc(100vw - 1215px);
    }
    .forth{
        width: 250px;
    }
    input{
        outline: none;
        width: calc(100% - 12px) ;
        height: 30px;
        padding-left: 10px;
        border: 1px solid black;
        border-radius: 20px;
        font-size: 1em;
    }
    .fifth{
        font-family: montserrat;
        vertical-align:middle;
        width: 16px;
    }
    .first,.second,.third,.forth{
        border-right: 10px solid black;
    }

    select {
        width: 150px;
        padding-left: 10px;
        border: none;
        height: 30px;
        font-size: 0.9em;
        font-family: 'Montserrat', serif;
        margin-top: 1px;
    }


    /* CAUTION: Internet Explorer hackery ahead */


    select::-ms-expand {
        display: none; /* Remove default arrow in Internet Explorer 10 and 11 */
    }

    /* Target Internet Explorer 9 to undo the custom arrow */
    @media screen and (min-width:0\0) {
        select {
            background: none\9;
            padding: 5px\9;
        }
    }
    
</style>