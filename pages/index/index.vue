<template>
	<view class="content-wrap">
		
		<view class="main"> 
			<view class="info flex flex-between">
				<view class="align-center">
					<image src="../../static/logo.png" mode="widthFix" style="width: 43rpx;border-radius: 50%;margin-right: 20rpx;"></image>
					<text style="font-size: 32rpx;">阿婆克烈</text>
				</view>
				<view class="align-center">
					<text style="font-size: 24rpx;">武汉</text>
					<image src="../../static/icon/address.png" mode="widthFix" style="width: 18rpx;margin-left: 15rpx;"></image>
				</view>
			</view>
			
			<view style="padding: 0 30rpx 30rpx;">
				<u-swiper
					:list="list1"
					@change="change"
					@click="click"
				></u-swiper>
				
				<view class="flex align-center" style="padding: 20rpx 0;">
					<view class="label">
						<text>广播</text>
						<image src="../../static/icon/broadcast.png" mode="widthFix" style="width: 40rpx;"></image>
					</view>
					
					<text class="secondary-text">今日入住人数 10</text>	
				</view>
				
				<scroll-view scroll-x style="margin-bottom: 20rpx;">
					<view class="flex">
						<view class="flex-column align-center" style="margin-right: 26rpx;" v-for="(item,index) in 3" :key="item">
							<image src="../../static/logo.png" style="width: 266rpx;height: 175rpx;"></image>
							<text style="height: 70rpx;line-height: 70rpx; color: #1D202E;font-size: 24rpx;">宿舍实况</text>
						</view>
					</view>
				</scroll-view>
				
				<view class="grid">
					<image src="@/static/index/1.png" mode="widthFix" style="width: 420rpx;grid-column: 1 / 3;grid-row: 1 / 3;" @click="$refs.purposePop.show = true"></image>
					<image src="@/static/index/2.png" style="width: 252rpx;height: 96rpx;" @click="$tools.jump('./careerPlanning')"></image>
					<image src="@/static/index/3.png" style="width: 252rpx;height: 96rpx; align-self:end;" @click="$tools.jump('./cultivate')"></image>
				</view>
			</view>
		</view>
		
		<view style="padding: 30rpx;">
			<view class="card-wrap" style="margin-bottom: 50rpx;">
				<view class="top flex-between align-center">
					<text class="name">
						热门岗位
					</text>
					<image src="../../static/icon/more.png" mode="widthFix" style="width: 22rpx;"></image>
				</view>
				
				<view class="card-content">
					<view v-for="(item,index) in 2" :key="index" class="item">
						<jobRow></jobRow>
					</view>
				</view>
			</view> 
			
			<view class="">
				<view class="align-center" style="margin-bottom: 20rpx;">
					<image src="../../static/icon/fire.png" mode="widthFix" style="margin-right: 20rpx; width: 30rpx;"></image>
					<text class="name">
						免费入职火爆现场
					</text>
				</view>
				
				<scroll-view scroll-x>
					<view class="scroll-wrap">
						<view class="item" v-for="(item,index) in 2" :key="item">
							<view class="flex-column flex-around">
								<text class="secondary-text">3月2日-3月10日</text>
								<text class="name" style="font-size: 34rpx;">洪山广场招聘会</text>
								<text  class="secondary-text">第二期</text>
							</view>
							<image src="../../static/logo.png"  style="width: 210rpx;height: 140rpx;"></image>
						</view>
					</view>	
				</scroll-view>
			</view>
				
		</view>
		
		<purposePop ref="purposePop"></purposePop>
	</view>
</template>

<script>
	import jobRow from "@/components/jobRow.vue"
	import purposePop from "./components/purposePop.vue"
	
	export default {
		data() {
			return {
				title: 'Hello',
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				]
			}
		},
		onLoad() {

		},
		methods: {
			change() {
				
			}
		},
		
		components: {
			jobRow,
			purposePop
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.main {
		background: #fff;
		border-radius: 0 0 20rpx 20rpx;
		.info {
			position: relative;
			display: flex;
			padding: 20rpx 30rpx;
			background: #004CFF;
			
			text {
				color: #fff;
			}
			&::before {
				content: '';
				position: absolute;
				bottom: -94rpx;
				left: 0;
				right: 0;
				height: 100rpx;
				background: #004CFF;
				border-radius: 0 0 50rpx 50rpx;
			}
		}
	}
	
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr; 
		grid-template-rows: 1fr 1fr;
	}
	
	
	
	.label {
		display: flex;
		align-items: center;
		padding: 8rpx 15rpx;
		margin-right: 24rpx;
		background: #F4F5F5;
		border-radius: 24rpx;
		
		text {
			color: #89909F;
			font-size: 24rpx;
		}
		
		image {
			margin-left: 10rpx;
		}
		
	}
	
	
	
	.name {
		font-size: 32rpx;
		color: #000000;
		font-weight: bold;
	}
	
	
	.secondary-text {
		font-size: 22rpx;
		color: #7A8393;
	}
	
	
	.card-wrap {
		padding: 30rpx;
		background: #fff;
		border-radius: 20rpx;
		.top {
			
		}
		.card-content {
			.item {
				padding: 20rpx;
				margin: 20rpx 0;
				background: linear-gradient(to right bottom, rgba(247, 249, 250, 0) , rgba(249, 250, 251, 1));
				border: 2rpx solid #F1F3F7;
				border-radius: 20rpx;
				.value {
					color: #EC6735;
					font-size: 30rpx;
					font-family: 700;
				}
			}
		}
	}
	
	
	.scroll-wrap {
		display: flex;
		height: 220rpx;
		white-space: nowrap;
		// overflow: hidden;
		.item {
			display: flex;
			justify-content: space-between;
			flex: 0 0 600rpx;
			margin-right: 20rpx;
			padding: 28rpx 26rpx;
			width: 600rpx;
			background: #fff;
			border: 2rpx solid #DEE3ED;
			border-radius: 16rpx;
		}
	}
	
</style>
