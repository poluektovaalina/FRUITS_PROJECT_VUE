<template>
    <div class="flex justify-between px-[60px] pt-[40px]">
        <div class="text-[32px] text-[#000] font-bold">
            Все фрукты
        </div>
        <div class="flex gap-[13px] items-center px-[18px] py-[13px] border-[1px] border-[#F3F3F3] rounded-[10px]">
            <div>
                <img src="../assets/searh.svg" alt="">
            </div>
            <input @input="searchProducts" class="outline-none" type="text" placeholder="Поиск...">
        </div>
    </div>
</template>

<script setup>
defineProps({
    searchProducts: Function
})
</script>

<style lang="scss" scoped>

</style>