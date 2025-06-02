<template>
    <div>
        <Slider />
        <Search :searchProducts="searchProducts"/>
        <AllProducts :fruits="fruits" />
        <!-- <Basket v-if="toggleCart" :toggleCart="toggleCart" :isOpenCart="isOpenCart" :cartItems="cartItems"
            :removeItemCart="removeItemCart" /> -->
    </div>
</template>

<script setup>

//привязываем блоки 
import Slider from '../components/Slider.vue'; 
import AllProducts from '../components/AllProducts.vue'
import Search from '../components/Search.vue';


//Чтобы забирать данные с базы данных
import axios from 'axios'

const fruits = ref([])
const compareFruits = ref([])
const props = defineProps({
    changeStatus: Function
})

const API_BASE_URL = "http://localhost:4000/api/"

async function getAllProducts() {
    try {
        const response = await axios.get("http://localhost:4000/api/fruits") //пока не закончится это строка следующие не начнут работатьб
        return response.data
    } catch (error) {
        console.log(error.response.status)
        props.changeStatus
        return[]
    }
}

// async function auth() {
//     try{
//         const response = await axios.post("http://localhost:4000/auth/login",{
//             identifier: "alina",
//             password: "alina",
//         })
//     }catch(error){

//     }
    
// }

// async function logout() {
//     try {
//         const response =  await axios.post("http://localhost:4000/logout")
//     } catch (error) {
        
//     }
    
// }

// прогрузка сначала дом элементов потом базы данных
import { onMounted, ref } from 'vue'



// Search

async function searchProducts(event) {

    fruits.value = compareFruits.value.filter((fruit) => {
        return fruit.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    console.log(fruits.value)
}

onMounted(async () => { 
    fruits.value = await getAllProducts()
    compareFruits.value = fruits.value
    console.log(fruits.value)
})








//Принимаем Function отвечающую за открытие и закрытие корзины через True/False
// defineProps({
// isOpenCart: Boolean,
// toggleCart: Function
// })

// function removeItemCart(id) {
// cartItems.value = cartItems.value.filter(item => item.id != id)
// localStorage.setItem('cart', JSON.stringify(cartItems.value))
// renderFruits()
// }
</script>
