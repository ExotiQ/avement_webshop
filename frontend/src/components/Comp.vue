<template>
    <div  v-if="comp.format == layformat && comp.vert == vert" class="comp" v-on:click="updateValues">
        <img :src="require(`../assets/${comp.img[0].src}`)" alt="img" :style="vert ? 'width: 96px' : 'width: 150px'">
    </div>
</template>

<script>
export default {
    props:{
        comp: {
            type: Object,
        },
        layformat:{
            type: String,
        },
        vert:{
            type: Boolean,
        },
        index:{
            type: Number,
        }
    },
    methods:{
        updateValues(){
            this.$emit('update', this.comp);
        },
    }
}
</script>

<style lang="scss" scoped>

    .comp{
        
        margin-right: 10px;
        margin-top: 10px;
        height: auto;
        float: left;
        cursor: pointer;
    }

    img{
        display: block;
    }

</style>