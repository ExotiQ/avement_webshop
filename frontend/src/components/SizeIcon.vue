<template>
    <div class="sizeicon">
        <p>{{ size }}</p>
    </div>
</template>

<script>
export default {
    name: "SizeIcon",
        computed:{},
        components:{},
        props:{
            size:{
                type: String,
            }
        }
}
</script>

<style lang="scss" scoped>
    .sizeicon{
        height: 40px;
        width: 40px;
        margin-right: 10px;
        border: 2px solid black;
        color: black;
        position: relative;
        display: inline-block;
        transition: 0.5s;
    }
    .sizeicon p{
        margin: 0px;
        font-weight: 500;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-transform: uppercase;
    }
    .sizeicon:hover{
        color: white;
        background-color: black;
        cursor: pointer;
    }
</style>