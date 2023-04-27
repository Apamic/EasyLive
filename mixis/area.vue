<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		
		watch: {
			
		},
		
		
		
		data() {
			return {
				province: 0,
				city: 0,
				area: 0,
				
				
				provinceList: []
			}
		},
		
		mounted() {
			this.getProvince()
		},
		
		methods: {
			getProvince() {
				this.$request('/content/area/selectProvince',{},'GET').then(res => {
					this.provinceList = res.data
					console.log(this.provinceList)
				})
			}
			
		}

	}
</script>

<style>
</style>