<template>
	<div class="topnav">

		<div id="menu" class="row nav_row justify-content-between">
			<h3 id="ham" class="hamburger" @click="myFunction()"><i class="fa fa-bars" aria-hidden="true"></i></h3>
			<h3 class="master">MASTERMIND</h3>
			<h3 id="txt"></h3>
		</div>

		<div id="myLinks">
			<router-link to="/">Home <span class="sr-only">(current)</span></router-link>
			<router-link to="/onama">O meni</router-link>
			<router-link class="nav-item nav-link" to="/igra">Igraj</router-link>
		</div>

	</div>
	<router-view />
</template>

<script>
	export default {
        methods: {
			myFunction(){ 
				let val = (document.getElementById('myLinks').style.display === "block"); 
				document.getElementById('ham').style.color = (val) ? '#7b68ee' : '#5139d6';
				document.getElementById('myLinks').style.display = (val) ? 'none' : 'block';
			},
			startTime() { 
				const today = new Date();
				let h = this.checkTime(today.getHours()); 
				let m = this.checkTime(today.getMinutes());
				let s = this.checkTime(today.getSeconds());
				document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s; 
				setTimeout(this.startTime, 1000); 
			},
			checkTime(t) { 
				return (t > 9) ? t : '0' + t;
			}

		}, 
		mounted() { 
			this.startTime(); 
		}
    }
	
</script>


<style scoped>
	.router-link-active {
		color: red !important;
	}

	.nav_row {
		padding-top: 20px;
		padding-bottom: 20px;
		margin-left: 10%;
		margin-right: 10%;
		color: #7b68ee;
	}

	.hamburger {
		cursor: pointer;
	}

	.topnav {
		overflow: hidden;
	} 

	.topnav #myLinks {
		display: none;
		margin-bottom: 20px;
	}

	.topnav a {
		background-color: #7b68ee;
		color: #ffffff;
		padding: 14px 16px;
		text-decoration: none;
		display: block;
	}
	
	.master {
		font-family: 'Bungee', cursive;
	}

	#txt {
		background-color: #7b68ee;
		color: #ffffff;
		padding: 5px;
	}

	.topnav a:hover {
		background-color: #ddd;
	} 

</style>


