<template>
    <div class="bg-[#275B1A] px-[100px] py-[70px]">
        <div class="bg-white rounded-[20px] " v-auto-animate>
            <Header :isOpenCart="isOpenCart" :toggleCart="toggleCart"  /> 
            
            <router-view :isOpenCart="isOpenCart" :toggleCart="toggleCart" > 
                
            </router-view>
        </div>
    </div>
</template>

<script setup>
import Header from './components/Header.vue'

import { ref } from 'vue'
const isOpenCart = ref(false)

function toggleCart() {
    isOpenCart.value = !isOpenCart.value
}
</script>