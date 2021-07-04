<template>
  <transition 
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave">
    <ul v-show="list.open" class="sub-items">
      <li class="sub-item" 
          v-for="(item, index) in list.subnav" 
          :key="'item'+index">
          <a :href="item.href">
        <i v-if="item.subnav" class="far"
          :class="{'fa-plus-square':!item.open,
                    'fa-minus-square':item.open}"></i>
        <div class="title" @click="item.open = !item.open">
          {{ item.title }}
        </div>
        <Dropdown class="subnav" v-if="item.subnav" :list="item" />
        </a>
      </li>
    </ul>
  </transition>  
</template>

<script>
  export default {
    name: 'Dropdown',
    props: [
      'list'
    ],
    methods: {
      enter(el) {
        el.style.height = 'auto';
        const height = getComputedStyle(el).height;
        el.style.height = 0;
        getComputedStyle(el);
        setTimeout(() => {
          el.style.height = height;
        });        
      },
      afterEnter(el) {
        el.style.height = 'auto';
      },
      leave(el) {
        el.style.height = getComputedStyle(el).height;
        getComputedStyle(el);
        setTimeout(() => {
          el.style.height = 0;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

  a{
    color: white;
    text-decoration: none;
  }
  .sub-items {
    list-style: none;
    margin-left: 15px;
    padding: 0px;
    margin-top: 0px;
    //border-top: 1px solid black;
    //background-color: black;
    .sub-item {
      position: relative;
      //border: 1px solid black;
      border-top: none;
      color: white;
      font-size: 14px;
     
      cursor: pointer;
      .subnav {
        padding-left: 10px;
      }
      .title {
        padding: 5px;
        text-indent: 0px;
      }
      i {
        position: absolute;
        top: 12px;
        right: 10px;
      }
    }
    .sub-item:hover{
      text-decoration: underline black;
     }
  }
  .expand-enter-active, .expand-leave-active {
    transition: height .5s ease-in-out;
    overflow: hidden;
  }
</style>

