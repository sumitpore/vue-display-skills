<template>
  <div id="app">
	<nav>
		<!-- use router-link component for navigation. -->
		<!-- specify the link by passing the `to` prop. -->
		<!-- `<router-link>` will be rendered as an `<a>` tag by default -->
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
  	</nav>
	<div class="content-container">
		<!-- route outlet -->
		<!-- component matched by the route will render here -->
		<router-view></router-view>
	</div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}

nav a {
	margin-left: 10px;
}

.content-container {
	padding: 10px;
}
</style>
