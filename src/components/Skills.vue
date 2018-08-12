<template>
  <div class="hello">
    <div class="holder">
      <!-- submit.prevent will prevent page from reloading and pass the form
      data to method passed to it -->
      <form @submit.prevent="addSkill">
        <!-- v-model will store the data entered in textbox to the passed variable -->
        <input type="text" autocomplete="off" placedholder="Your Skill" v-model="skillModel" name="skill" v-validate="'min:5'">

		<transition name="fade" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
			<p class="error" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
		</transition>
      </form>
      <ul>
		<transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        	<!-- v-bind:key is used with v-for to uniquely identify each node -->
        	<li v-for="(value, key) in skills" v-bind:key="key">
				{{key}}. {{value.skill}}
				<!-- remove method is defined below -->
				<a href="#" class="remove-skill" v-on:click="remove(key)">REMOVE</a>
			</li>
		</transition-group>
      </ul>
      <p v-if="skills.length >= 1"> You have more than one Skill</p>
      <p v-else>You have less skills</p>
		<!-- v-bind maps value to html attribute -->
      <div v-bind:class="{ 'alert': showAlert }"></div>
      <div v-bind:class="blueBox"></div>
      <div v-bind:style="blackBox"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillModel: '',
      skills:[
			// This is an array
			{"skill": "Vue.js"}, // It is 0th Element
			{"skill": "Frontend Developer"} //It is 1st Element
		],
		showAlert: true,
		blueBox: {
			'showBlueAlert': true //showBlueAlert class will be applied to div
		},
		blackBox: {
			// Below properties will be applied as inline properties to div
			'background-color': '#000000',
			'width': '100%',
			'height': '30px'
		}
    }
  },
  methods:{
    addSkill() {
		// this.$validator is coming from veeevalidate library
		this.$validator.validateAll().then((result) => {
			if( result ) {
				this.skills.push({
					"skill": this.skillModel
				});
      			this.skillModel = '';
			}
		});
	},
	remove(index) {
		this.skills.splice(index, 1);
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/Skills.css" scoped></style>
