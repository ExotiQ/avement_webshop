<template>
    <div class="cartitems">
        <router-link
        class="link"
        :to="{ name: 'Products', params: { product_id: item.id,  } }"
        >
            <div class="img" :style="{ backgroundImage: 'url(' + require(`../resources/${item.image[0]}`) +')' }"></div>
        </router-link>
        <div class="text">
            <router-link
            class="link"
            :to="{ name: 'Products', params: { product_id: item.id,  } }"
            >
                <p class="name">{{ item.name }}</p>
            </router-link>
            <i class="fas fa-times" @click="deleteItem(item)"></i>
            <div class="size"><p>M</p></div>
            <div class="color" :style="{ backgroundColor: `${item.color}`}"></div>
            <div class="number">
                <p @click="minus()">-</p>
                <input type="number" min="0" max="5" :value="quantity">
                <p @click="plus()">+</p>
            </div>
            <p class="price">{{ item.price }}€</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "cartItems",
    props: {
        item: {
            type: Object,
        },
        quantity: {
            type: Number,
        }
    },
    data() {
        return{
            amount: 1,
        }
    },
    methods: {
        plus() {
            this.addToCart();
        },
        minus() {
            if(this.quantity > 1){
                this.removeItem();
            } else{
                this.deleteItem(this.item);
            }
        },
        deleteItem(item) {
            if (confirm("Willst du das produkt wirklich entfernen?") == true) {
                this.$store.commit('deleteItem', item);
            }
        },
        removeItem() {
            this.$store.commit('removeItem', {
                product: this.item,
            });
        },
        addToCart() {
            this.$store.dispatch("addProductToCart", {
                product: this.item,
                quantity: 1,
            });
        },
    }

}
</script>

<style scoped lang="scss">

    .cartitems{
        margin-top: 20px;
        height: 130px;
        width: 100%;
        display: inline-block;
    }
    
    .img{
        height: 100%;
        width: 130px;
        margin-right: 20px;
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
    }

    .link{
        text-decoration: none;
    }

    .text{
        float: left;
        width: 200px;

        .name{
            margin: 0px;
            padding: 0px;
            font-weight: 600;
            color: black;
            text-decoration: none;
        }

        i{
            float: right;
            margin-top: -20px;
        }

        .size{
            height: 25px;
            width: 25px;
            margin-top: 10px;
            background-color: black;
            color: white;
            position: relative;
            float: left;

            p{
                margin: 0px;
                font-weight: 500;
                font-size: 14px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-transform: uppercase; 
            }

        }

        .color{
            margin-top: 10px;
            margin-left: 7px;
            margin-right: 100px;
            border-radius: 50%;
            height: 25px;
            width: 25px;
            float: left;
        }

        .number{
            display: inline-block;
            p{
                float: left;
                margin-right: 15px;
                user-select: none;
                cursor: pointer;
            }
        
            input[type=number] { 
                -moz-appearance: textfield;
                -webkit-appearance: none; 
                appearance: none;
                margin: 0; 
                border: none;
                float: left;
                margin-right: 15px;
                
                height: 20px;
                //margin-top: 16px;
            }
            input[type=number] {
                width: 30px;
                padding: 0px;
                margin-top: 15px;
                text-align: center;
                font-family: 'Montserrat';
                font-size: 15px;
            }

            input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{
                display: none;
            }
        }

        .price{
            margin: 0px;
            font-size: 14px;
        }
    }

</style>