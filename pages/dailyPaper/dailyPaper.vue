<template>
	<view>
		<navTop :title="'工作日报'">
			<image src="@/static/dailyPaper/edit.png" mode="widthFix" style="width: 32rpx;" @click="$tools.jump('./write')"></image>
		</navTop>
		
		<scroll-view scroll-y class="scroll-wrap" :style="{height:navHeight+'px'}">
			<view v-for="(item,index) in 10" :key="index" class="item" >
				<dayCard></dayCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import dayCard from './components/dayCard.vue'
	import scrollHeight from "@/mixis/scrollHeight.vue"
	export default {
		mixins: [scrollHeight],
		data() {
			return {
				
			}
		},
		
		
		onLoad() {
			
		},
		
		onReady() {
			
		},
		
		components: {
			navTop,
			dayCard
		}
	}
	
	
</script>

<style>
	page {
		
	}
</style>


<style lang="scss" scoped>
	
	.scroll-wrap {
		
		.item {
			position: relative;
			padding: 0 30rpx 40rpx 100rpx;
			
			&::after {
				content: '';
				position: absolute;
				width: 2rpx;
				height: 100%;
				top: 30rpx;
				left: 50rpx;
				background: #CDD5E5;
				z-index: 999;
			}
			
			&::before {
				content: '';
				position: absolute;
				width: 10rpx;
				height: 10rpx;
				top: 30rpx;
				left: 45rpx;
				background: #fff;
				border: 2rpx solid #000;
				border-radius: 50%;
				z-index: 1000;
			}
			
		}
	}
	
	
</style>