<template>
	<view class="card-wrap">
		<view class="top flex-between">
			<text style="font-weight: 700;">第3天</text>
			<text style="font-size: 22rpx;">
				已累计签到 <text style="margin: 0 8rpx; font-size: 22rpx;color: #F27738;">25</text> 天
			</text>
		</view>
		<view >
			<text class="p">用户自主管理私钥,资产一手掌握 安全隔离,数 据加密等获多项安全专利技术用户自主管理私 钥,资产一手术用户自主管理私钥,资产一手掌握 安全隔钥,资产一手术用户自主管理私钥,资产一手掌握 安全隔</text>
		</view>
		
		<view style="padding: 30rpx 0 40rpx;">
			<image src="../../../static/logo.png" style="width: 184rpx;height: 184rpx;"></image>
		</view>
		
		<view class="flex-column">
			<text class="t">武汉市武昌区静安路猪猪大酒店</text>
			<text class="t">08:20:23</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		onLoad() {
			
		},
		
		
		onReady() {
			
		},
		
		
		methods:{
			
		}
		
	}
	
	
</script>

<style lang="scss" scoped>
	.card-wrap {
		padding: 0 32rpx 25rpx;
		background: #fff;
		border-radius: 22rpx;
		
		.top {
			height: 82rpx;
			line-height: 82rpx;
			border-bottom: 2rpx solid #CDD5E5;
		}
		
	}
	
	.p {
	   @include	bov(3)
	   padding-top: 30rpx;
	   line-height: 44rpx;
	}
	
	text {
		font-size: 28rpx;
		color: #333C4F;
	} 
	
	.t {
		font-size: 22rpx;
		color: #7A8393;
	}
	
</style>