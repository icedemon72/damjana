<template>
    <div class="about_text">
        <h1>O meni</h1>
        <p>Ja sam Damjana Cebasek kurac palac</p>
    </div>
    <Footer />
</template>

<script>
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'ONama',
        components: {
            Footer
        }
    }
</script>

<style scoped>
    .about_text {
        margin-top: 50px;
        margin-left: 10%;
        margin-right: 10%;
        text-align: justify;
    }
</style>