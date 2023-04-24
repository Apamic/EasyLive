<template>
	<view class="card-wrap flex-column" :style="{border: `2rpx solid ${borderColor}`,boxShadow: borderColor == 'transparent' ? '0 3rpx 10rpx 2rpx rgba(25, 60, 83, 0.16)' : ''}">
		<image src="../static/logo.png" style="width: 330rpx;height: 330rpx;"></image>
		<view class="wrap">
			<text class="title">{{item.text}}</text>
			<view class="align-center" style="padding-top: 20rpx;">
				<image src="../static/icon/play.png" mode="widthFix" style="margin-right: 10rpx; width: 24rpx;"></image>
				<text class="num">1888</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		
		props: {
			item: {
				type: Object,
				default: () => {}
			},
			
			borderColor: {
				type: String,
				default: 'transparent'
			}
		},
		
		data() {
			return {
				
			}
		},
		
		methods: {
			
		}
		
	}
</script>

<style lang="scss" scoped>
	.card-wrap {
		margin-bottom: 24rpx;
		width: 330rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}
	
	.wrap {
		padding: 17rpx;
	}
	
	.title {
		font-size: 24rpx;
	}
	
	.num {
		font-size: 22rpx;
	}
	
	text {
		color: #000000;
	}
</style>