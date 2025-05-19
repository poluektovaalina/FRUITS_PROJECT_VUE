<template>
    <div v-auto-animate>
        <div  v-if="fruits.length > 0" class="px-[60px] py-[40px] flex gap-[40px] flex-wrap">
            <Product @closeKgModal="closeKgModal" @addLike="addLike" @addToCart="addToCart" v-for="fruit in fruits" :key="fruit.id" :fruit="fruit"></Product>
        </div>
        <div v-else class="h-[90vh] flex flex-col items-center justify-center ">
            <div style="max-width: 150px; padding: 0 0 30px 0;">
                <img class="object-cover" src="../assets/emty.png" alt="">
            </div>
            <span>Ничего не найдено</span>
        </div>
    </div>
</template>

<script setup>
import Product from './Product.vue';

defineProps({
    fruits: Array,
})


</script>

<style lang="scss" scoped></style>