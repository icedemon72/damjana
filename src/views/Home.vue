<template>
	<div class="home_text">
		<h1>Pocetna</h1>
		<p>Kurcina palcina</p>
		<p>[[Ovde idu pravila igre]]</p>
		<p>[[I neki random indijski bullshiti sto samo street shitteri mogu da vole]]</p>
	</div>
	<Footer />
</template>

<script>
	import Footer from '@/components/Footer.vue'

	export default {
		name: 'Home',
		components: {
			Footer
		}
	}
</script>

<style scoped>
	.home_text {
		margin-top: 50px;
        margin-left: 10%;
        margin-right: 10%;
        text-align: justify;
	}
</style>