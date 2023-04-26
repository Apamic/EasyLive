<template>
	<view>
		<scroll-view scroll-y class="scroll-wrap" :style="{height:navHeight+'px'}">
			<view style="padding: 10rpx 22rpx;">
				<view v-for="(item,index) in 2" :key="index" style="margin-bottom: 20rpx;" @click="$tools.jump('./postDetails')">
					<commentCard></commentCard>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import scrollHeight from "@/mixis/scrollHeight.vue"
	import commentCard from "@/components/commentCard.vue"
	export default {
		
		mixins:[scrollHeight],
		
		data() {
			return {
				
			}
		},
		
		methods: {
			
		},
		
		components: {
			commentCard
		}
		
		
	}
</script>


<style>
	
</style>

<style lang="scss" scoped>
	
	
</style>