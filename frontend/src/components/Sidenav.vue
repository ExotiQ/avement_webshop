<template>
    <div>
        <a href="/Shop/tops">TOPS</a>
        <a href="/Shop/tops">BOTTOMS</a>
        <a href="/Shop/tops">ACCESORIES</a>
        <a style="color: red" href="/Shop/tops">SALE</a>
    </div>
</template>

<script>
    export default {
        name:'Sidenav',
        props:{

        }
    }
</script>

<style scoped>
    div{
        display: inline-block;
        text-align: left;
        width: 70px;
        position: fixed;
        left: 70px;
        top: 50%;
        transform: translate(0%, -50%);
    }

    a{
        text-decoration: none;
        display: inline-block;
        color: black;
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 14px;
    }
</style>