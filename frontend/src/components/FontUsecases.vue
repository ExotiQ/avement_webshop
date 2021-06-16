<template>

    <div class="usecases" :style="!darkmode ? 'color: black; backgroundColor: rgb(240,240,240);' : 'color: white; backgroundColor: Black'">
        <div class="textbox">
            <input type="checkbox" v-model="darkmode" id="darkmode">
            <div v-if="showHeadline" class="headline" @click="headlineOpen = !headlineOpen,subheadlineOpen = false, fltextOpen = false ">
                <p :style="{fontFamily: fontfamily, fontStyle: fstyle, fontSize: fontsize + 'px', fontWeight: fwidth }">{{ setHeadline }}</p>
            </div>
            <div v-if="showSubheadline" class="subheadline" @click="subheadlineOpen = !subheadlineOpen, headlineOpen = false, fltextOpen = false">
                <p :style="{fontFamily: sfontfamily, fontStyle: sfstyle, fontSize: sfontsize + 'px', fontWeight: sfwidth }">{{ setSubHeadline }}</p>
            </div>
            <div v-if="showFltext" class="fltext" @click="fltextOpen = !fltextOpen, headlineOpen = false, subheadlineOpen= false">
                <p :style="{fontFamily: ffontfamily, fontStyle: ffstyle, fontSize: ffontsize + 'px', fontWeight: ffwidth }">{{ setFltext }}</p>
            </div>
        </div>

        <div class="settings">

            <div class="headlineopen open" @click="headlineOpen = !headlineOpen,subheadlineOpen = false, fltextOpen = false ">
                <p>Headline</p>
                <i class="far" :class="{'fas fa-angle-right':!headlineOpen, 'fas fa-angle-down':headlineOpen}"></i>
            </div>

             <input type="checkbox" v-model="showHeadline">

            <div :style="!headlineOpen ? 'height: 0px' : 'height: 200px'" class="headlineSetting setting">
                <input type="text" v-model="headline" placeholder="Headline">
                <select v-model="fstyle">
                    <option v-bind:value="'normal'">normal</option>
                    <option v-bind:value="'italic'">italic</option>
                </select>
                <select v-model="fwidth">
                    <option v-bind:value="300">Thin</option>
                    <option v-bind:value="400">Regular</option>
                    <option v-bind:value="500">Normal</option>
                    <option v-bind:value="600">SemiBold</option>
                    <option v-bind:value="700">Bold</option>
                    <option v-bind:value="800">ExtraBold</option>
                    <option v-bind:value="900">Black</option>
                </select>
                <select v-model="fontfamily">
                    <option v-for="(item, index) in fontl" :key="'item'+index" v-bind:value="item.name">{{ item.name }}</option>
                </select>
                <input type="range" v-model="fontsize" min="16" max="150">
                <input type="number" v-model="fontsize" min="16" max="150">
            </div>

            <div class="subheadlineopen open" @click="subheadlineOpen = !subheadlineOpen, headlineOpen = false, fltextOpen = false">
                <p>Subheadline</p>
                <i class="far" :class="{'fas fa-angle-right':!subheadlineOpen, 'fas fa-angle-down':subheadlineOpen}"></i>
            </div>

             <input type="checkbox" v-model="showSubheadline">

            <div :style="!subheadlineOpen ? 'height: 0px' : 'height: 200px'" class="subheadlineStetting setting">
                <input type="text" v-model="subheadline" placeholder="Teste deinen eigenen Fließtext">
                <select v-model="sfstyle">
                    <option v-bind:value="'normal'">normal</option>
                    <option v-bind:value="'italic'">italic</option>
                </select>
                <select v-model="sfwidth">
                    <option v-bind:value="300">Thin</option>
                    <option v-bind:value="400">Regular</option>
                    <option v-bind:value="500">Normal</option>
                    <option v-bind:value="600">SemiBold</option>
                    <option v-bind:value="700">Bold</option>
                    <option v-bind:value="800">ExtraBold</option>
                    <option v-bind:value="900">Black</option>
                </select>
                <select v-model="sfontfamily">
                    <option v-for="(item, index) in fontl" :key="'item'+index" v-bind:value="item.name">{{ item.name }}</option>
                </select>
                <input type="range" v-model="sfontsize" min="16" max="150">
                <input type="number" v-model="sfontsize" min="16" max="150">
            </div>

            <div class="fltextopen open" @click="fltextOpen = !fltextOpen, headlineOpen = false, subheadlineOpen= false">
                <p>Fließtext</p>
                <i class="far" :class="{'fas fa-angle-right':!fltextOpen, 'fas fa-angle-down':fltextOpen}"></i>
            </div>

             <input type="checkbox" v-model="showFltext">

            <div :style="!fltextOpen ? 'height: 0px' : 'height: 350px'" class="fltextSetting setting">
                <textarea v-model="fltext" placeholder="Teste deinen eigenen Fließtext"></textarea>
                <select v-model="ffstyle">
                    <option v-bind:value="'normal'">Normal</option>
                    <option v-bind:value="'italic'">Italic</option>
                </select>
                <select v-model="ffwidth">
                    <option v-bind:value="300">Thin</option>
                    <option v-bind:value="400">Regular</option>
                    <option v-bind:value="500">Normal</option>
                    <option v-bind:value="600">SemiBold</option>
                    <option v-bind:value="700">Bold</option>
                    <option v-bind:value="800">ExtraBold</option>
                    <option v-bind:value="900">Black</option>
                </select>
                <select v-model="ffontfamily">
                    <option v-for="(item, index) in fontl" :key="'item'+index" v-bind:value="item.name">{{ item.name }}</option>
                </select>
                <input type="range" v-model="ffontsize" min="8" max="30">
                <input type="number" v-model="ffontsize" min="8" max="30">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    computed: {
        fontl(){
            return this.$store.getters.fontlist;
        },
        setHeadline(){
            if (this.headline != ''){
                return this.headline
            }
            return "Headline";
        },
        setSubHeadline(){
            if (this.subheadline != ''){
                return this.subheadline
            }
            return "Subeadline";
        },
        setFltext(){
            if (this.fltext != ''){
                return this.fltext
            }
            return "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe ";
        }
    },
    data(){
        return {
            darkmode: true,
            headline: '',
            subheadline: '',
            fltext: '',
            headlineOpen: false,
            subheadlineOpen: false,
            fltextOpen: false,
            fstyle: 'italic',
            fontfamily: 'Politica',
            fontsize: 80,
            fwidth: 900,
            sfstyle: 'normal',
            sfontfamily: 'Montserrat',
            sfontsize: 30,
            sfwidth: 500,
            ffstyle: 'normal',
            ffontfamily: 'Montserrat',
            ffontsize: 14,
            ffwidth: 500,
            showHeadline: true,
            showSubheadline: true,
            showFltext: true,
        }
    }
}
</script>


<style lang="scss" scoped>

    .open{
        position: relative;
        width: calc(100% - 70px);
        padding: 10px;
        margin: 10px;
        margin-bottom: 0px;
        background-color: black;
        cursor: pointer;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        
        i{
            position: absolute;
            top: 12px;
            right: 10px;
        }

    }

    input[type=checkbox]{
        float: right;
        margin-top: -25px;
        margin-right: 15px;
    }

    .headline{
        p{
            line-height: 100%;
        } 
    }
    
    .subheadline{
        margin-top: 2px;
        p{
            line-height: 100%;
        }
    }
    .fltext{
        line-height: 180%;
         margin-top: 40px;
    }

    .setting{
        transition: height 0.5s ease-in-out;
        overflow: hidden;
    }

    .usecases{
        display: inline-block;
        position: relative;
        width: 100%;
        font-size: 1em;
    }

    #darkmode{
        position:absolute;
        top: 49px;
        right: 10px;
    }

    .textbox{
        width: calc(100% - 420px);
        position: relative;
        float: left;
        padding: 45px;
    }

    .settings{
        height: 500px;
        width: 330px;
        background-color:rgb(20, 20, 20);
        color: white;
        float: right;

        input, select{
            font-size: 0.9em;
            font-family: 'Montserrat', serif;
            border: none;
        }

        input[type=text]{
            outline: none;
            margin: 10px;
            width: calc(100% - 30px) ;
            height: 30px;
            padding-left: 10px;
            border: none;
            border-radius: 20px;
        }

        select{
            margin-left: 10px;
            width: calc(100% - 20px);
            margin-bottom: 10px;
            padding: 3px;
        }

        input[type=range]{
            margin-left: 10px;
            width: calc(100% - 100px);
        }

        input[type=number]{
            margin-left: 10px;
            width: 60px;
            margin-right: 10px;
            float: right;
            margin-bottom: 10px;
        }

        textarea{
            appearance: none;
            height: 170px;
            resize: none;
            width: 290px;
            margin: 10px;
            margin-bottom: 5px;
            border: none;
            padding: 10px;
            font-size: 1em;
            font-family: 'Montserrat', serif;
            border-radius: 10px;
        }
    }

</style>
