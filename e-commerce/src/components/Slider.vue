<template>
    <div class=" pt-[45px] px-[60px] ">
        <Swiper :modules="[Navigation, Pagination]" navigation pagination :space-between="20" :slides-per-view="1">
            <SwiperSlide>
                <div class=" h-[370px] bg-[#F4EFE9]  rounded-[20px] flex justify-between px-[60px] pt-[30px] pb-[45px]">
                    <div class="flex flex-col justify-between">
                        <span class="text-[38px] text-[#275B1A]">Покупай лучшие<br> фрукты у нас!</span>
                        <span class="text-[#C4C4C4] text-[38px]">№1 в Казахстане</span>
                    </div>
                    <div>
                        <img src="../assets/image 10.png" alt="">
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class=" h-[370px] bg-[#F4EFE9]  rounded-[20px] flex justify-between px-[60px] pt-[30px] pb-[45px]">
                    <div class="flex flex-col justify-between">
                        <span class="text-[38px] text-[#275B1A]">Покупай лучшие<br> фрукты у нас!</span>
                        <span class="text-[#C4C4C4] text-[38px]">№1 в Казахстане</span>
                    </div>
                    <div>
                        <img src="../assets/image 10.png" alt="">
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class=" h-[370px] bg-[#F4EFE9]  rounded-[20px] flex justify-between px-[60px] pt-[30px] pb-[45px]">
                    <div class="flex flex-col justify-between">
                        <span class="text-[38px] text-[#275B1A]">Покупай лучшие<br> фрукты у нас!</span>
                        <span class="text-[#C4C4C4] text-[38px]">№1 в Казахстане</span>
                    </div>
                    <div>
                        <img src="../assets/image 10.png" alt="">
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// (опционально) подключи нужные модули
import { Navigation, Pagination } from 'swiper/modules';
</script>


<style lang="scss" scoped></style>