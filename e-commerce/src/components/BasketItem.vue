<template>
    <div class="basis-[22.7%] ">
        <div class="border-[2px] border-[#F3F3F3] hvTovar rounded-[40px] relative py-[24px] px-[29px] flex items-center flex-col">
            <div class="cursor-pointer like p-[10px] absolute bg-white  rounded-[7px] border-[#F8F8F8] border-[1px] top-[10px] left-[34px] ">
                <svg class="" width="16" height="16" viewBox="0 0 16 16"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z"
                        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div class="w-[150px]">
                <img class="w-full" :src="cartItem.image" alt="">
            </div>
            <div class=" flex flex-col gap-[30px] ">
                <span class="text-[16px] font-bold pt-[10px]">{{cartItem.title}}</span>
                <div class="flex justify-between items-center   " >
                    <div class="flex flex-col gap-[2px]">
                        <span class="text-[12px] text-[#9D9D9D]">Цена</span>
                        <span class="text-[14px] font-bold mt-[-6px]">{{cartItem.price}} тг/ {{ cartItem.kg }}кг</span>
                    </div>
                    <div @click="$emit('removeItemCart', cartItem.id)" class="bg-[#FFFF] border-[1px] border-[#F2F2F2] rounded-[8px] flex items-center justify-center h-min-[32px] w-[32px] h-[32px] text-[#D3D3D3] font-bold text-[20px] ">
                        <img src="../assets/closed.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    cartItem: Object,
    title: String,

})
defineEmits(['removeItemCart'])

</script>