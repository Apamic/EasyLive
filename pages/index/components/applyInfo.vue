<template>
	<view class="card flex-column align-center">
		<image src="../../../static/index/success.png" mode="widthFix" style="width: 96rpx;"></image>
		<text style="font-weight: 700;font-size: 30rpx;margin-bottom: 40rpx;">申请成功，等待客服人员确认</text>
		
		<image src="../../../static/logo.png" mode="widthFix" style="width: 350rpx;"></image>
		
		<text style="font-size: 30rpx;margin-bottom: 10rpx;">
			长按保存
		</text>
		<text style="font-size: 24rpx;">
			加入企业微信
		</text>
		
		<view style="margin-top: 100rpx;">
			<u-button class="but" text="我知道了" size="large" @click="onSubmit()"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		methods: {
			onSubmit() {
				this.$tools.back(1)
			}
		},
		
		components: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		padding: 80rpx 38rpx 80rpx;
		background: #fff;
		border-radius: 10rpx;
	}
	
	.but {
		width: 240rpx;
		color: #fff;
		background: #1250E5;
	}
	
	image {
		margin-bottom: 40rpx;
	}
	
	text {
		color: #000000;
	}
	
</style>