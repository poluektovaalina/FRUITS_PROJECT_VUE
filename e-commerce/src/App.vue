<template>
    <div class="bg-[#275B1A] px-[100px] py-[70px]">
        <div class="bg-white rounded-[20px] " v-auto-animate>
            <Header :changeStatus="changeStatus" :authStatus="authStatus" :activeUser="activeUser" :isOpenCart="isOpenCart" :toggleCart="toggleCart"  /> 
            
            <router-view :changeStatus="changeStatus" :isOpenCart="isOpenCart" :toggleCart="toggleCart" :activeUserFunction="activeUserFunction"> 
                
            </router-view>
        </div>
    </div>
</template>

<script setup>
import Header from './components/Header.vue'


import { ref } from 'vue'
const isOpenCart = ref(false)
const authStatus = ref(true)



function changeStatus(bool){
    authStatus.value = bool
}

function toggleCart() {
    isOpenCart.value = !isOpenCart.value
}

const activeUser = ref('')


function activeUserFunction (username){
    activeUser.value = username
}

async function checkUser
</script>