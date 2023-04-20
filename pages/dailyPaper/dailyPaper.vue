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
	
	export default {
		data() {
			return {
				pH:0, //窗口高度
				navHeight:0, //元素的所需高度
			}
		},
		
		
		onLoad() {
			
		},
		
		onReady() {
			let that=this;
			uni.getSystemInfo({ //调用uni-app接口获取屏幕高度
				success:(res) => { //成功回调函数
					that._data.pH=res.windowHeight //windoHeight为窗口高度，主要使用的是这个
					let titleH=uni.createSelectorQuery().select(".scroll-wrap"); //想要获取高度的元素名（class/id）
					titleH.boundingClientRect(data=>{
						let pH=that._data.pH; 
						that._data.navHeight = pH-data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
					}).exec()
				}
			})
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