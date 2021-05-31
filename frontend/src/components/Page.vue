<template>
    <div class="page" :style="{'align-items': align, 'margin-bottom': dist*45+'px'}">
        <img v-if="img" :src="require(`../assets/${img}`)" alt="logo"
         :style="imgposit">

         <div class="container"  :style=" textposit ">
            <p :class="[subheadline ? 'bigheadline' : 'headline']">{{ headline }}</p>
            <p v-if="bigheadline && !headline" class="bigheadline">{{ bigheadline }}</p>
            <p v-if="subheadline" class="subheadline">{{ subheadline }}</p>
            <p class="text">{{ text }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'page',
    components: {
    },
    computed:{
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
                        "grid-column": "3 / 5" 
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
    .page{
        width: 100%;
        display: grid;
        grid-column-gap: 45px;
        grid-row-gap: 0px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
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
        font-size:1.6em;
        font-weight: 500;
        margin-bottom: 26px;
    }

    .text{
        font-size: 1em;
        font-weight: 400;
        column-count: 2;
        column-width: calc((100vw - 90px - 245px - 3* 45px)/4);
        column-gap: 45px;
    }

    img{
        width: 100%;
    }
</style>