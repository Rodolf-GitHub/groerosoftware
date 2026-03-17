<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ServiciosSection from '@/components/ServiciosSection.vue'
import NosotrosSection from '@/components/NosotrosSection.vue'
import ProyectosSection from '@/components/ProyectosSection.vue'
import TechStackSection from '@/components/TechStackSection.vue'
import ContactoCTA from '@/components/ContactoCTA.vue'
import FooterSection from '@/components/FooterSection.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()
</script>

<template>
  <div>
    <HeroSection />
    <ServiciosSection />
    <NosotrosSection />
    <ProyectosSection />
    <TechStackSection />
    <ContactoCTA />
    <FooterSection />
  </div>
</template>
