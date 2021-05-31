<template>
    <div class="product">
        <router-link class="link" :to="{ name: 'Products', params: {product_id: list.name}}">
            <div @mouseover="hover = true" @mouseleave="hover = false" class="container">
                <img :src="require(`../assets/${list.img[0].src}`)" alt="">     
                <div  class="text">
                    <p v-if="hover" class="name info">{{ list.name }}</p>
                    <p v-if="hover" class="info">{{ list.price }}€</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'product',
    components: {

    },
    computed:{
        
    },
    props:{
        list: {
            type: Object,
        },
    },
    methods:{
    },
    data(){
        return {
            hover:false,
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        width: calc((100% - 90px)/ 3);
        margin:15px;
        float: left;
        text-align: center;
        cursor: pointer;
    }
    img{
        width: 100%;
    }
    p{
        margin: 0px;
        margin-bottom: 2px;
        max-height: 19px;  
        font-size: 14px;
        font-weight: 400;
    }
    .name{
        font-weight: 500;
    }

    .text{
        position: relative;
        margin-top: 10px;
        margin-bottom: 30px;
        height: 10px;
    }

    .link{
        text-decoration: none;
        color: black;
    }


</style>