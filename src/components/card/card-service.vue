<template>
    <div class="w-full px-8 py-7 flex flex-col gap-6 bg-[#F8F9FB]">
        <div class="relative h-8 aspect-square flex items-center justify-start">
            <component :is="icon" size="44" color="#002774" stroke-width="1.5" />
        </div>
        <h2 class="text-[#101828] md:text-2xl text-xl font-bold">{{ label }}</h2>
    </div>
</template>

<script>
// ICONS
import { Wifi, CarFront, Snowflake, Thermometer, Utensils, AlarmSmoke, Beer, TvMinimal, Coffee } from 'lucide-vue-next'

export default {
    name: 'card-service',
    components: {
        // ICONS
        Wifi,
        CarFront,
        Snowflake,
        Thermometer,
        Utensils,
        AlarmSmoke,
        Beer,
        TvMinimal,
        Coffee
    },
    props: {
        icon: String,
        label: String,
        description: String
    }
}
</script>

<style scoped></style>