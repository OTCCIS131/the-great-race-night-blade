$(function(){
	let vm = new Vue({
		el: '#app',
		data:{
			racing: true,
			winner: null,
			charmander: 0,
			pikachu: 0,
			tick: 0,
			interval: null
		},
		computed: {
			winning(){
				if (this.charmander == this.pikachu) return null
				
				return this.charmander > this.pikachu ? 'charmander' 'pikachu'
			}
		}
		
		
		
		
		
	})
	
	var hidey = new Vue({
		el: 'hidey',
		
		if (racing == false){
			data: {
				seen: true
			}
		}
		else{
			data: {
				seen: false
			}
		}
	})
	
	
	
	
	
})