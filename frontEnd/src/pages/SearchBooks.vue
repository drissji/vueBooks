<template>

<div in class="px-14">
  <label class="flex flex-col-reverse relative focus group">
    
    <input
        type="email" name="email" required
        class="border-2 border-gray px-4 py-3 leading-9"
        v-model="keyword"
        @change="getdata">
    
    <span class="absolute text-xl transform -translate-y-3 left-4 transition leading-10 group-focus-within:-translate-y-16">
      Book name 
    </span>

    <span class="ml-auto leading-10">* Required</span>
  
  </label>
</div>

<div>

    <!-- .items[0].volumeInfo.title -->
 
    
    <div class="grid grid-cols-1 md:grid-cols-3">

    <div v-for="item of data" class="bg-white">

        <div v-if="item.volumeInfo.hasOwnProperty('imageLinks')">
            <img :src="item.volumeInfo.imageLinks.thumbnail" class="p-3 font-semibold"> 
        </div>
       <span>{{item.volumeInfo.title}}</span>
<!--         {{ item.volumeInfo.imageLinks.thumbnail }}
 --><!--         {{ item.volumeInfo.title }}
 -->
    </div>

    </div>


</div>

</template>

<script setup>

import { computed, ref } from 'vue';
import instance from '../axios/index'
import store from '../store'
import states from '../store/states'

const keyword = ref('')



const data = computed(() => store.state.searchMeals);

function getdata(){
    //instance.get('volumes?q=flowers')
    store.dispatch('fetchData',keyword.value)

}



</script>