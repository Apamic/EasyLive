<template>
	<view class="card-wrap flex-column relative">
		<text class="title">你听过最恐怖的同事是什么样子？</text>
		<view class="flex" style="margin-bottom: 20rpx;">
			<u-avatar src="../../static/mine/img.png" shape="circle" size="30"></u-avatar>
			<view class="flex-column" style="margin-left: 20rpx;">
				<text class="name">ERIC MARTINEZ</text>
				<text class="date">2023-12-22 00:00:00</text>
			</view>
		</view>
		<text class="txt" :class="hideTxt ? 'hideTxt' : ''">
			用户自主管理私钥,资产一手掌握 安全隔离,数据加密
			等获多项安全专利技术用户自主管理私钥,资产一手
			掌握 安全隔离,数据加密等获多项安全专利技术
			数据加密等获多项安全专利技术数据加密等获多项安全专利技术
		</text>
		<view class="img-wrap">
			<image src="../static/logo.png" mode="widthFix" style="width: 200rpx;height: 200rpx;" v-for="(item,index) in 9" :key="index"></image>
		</view>
		
		<view class="absolute" style="top: 0;right: 0;">
			<slot></slot>
		</view>
		
		<view class="reaction-wrap">
			<!-- <view class="reaction">
				<u-icon name="share-square" size="22"></u-icon>
				<text>转发</text>
			</view> -->
			<view class="reaction">
				<u-icon name="chat" size="22"></u-icon>
				<text>评论</text>
			</view>
			<!-- <view class="reaction">
				<u-icon name="heart" size="22"></u-icon>
				<text>点赞</text>
			</view> -->
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			hideTxt: {
				type:Boolean,
				default: true 
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
		padding: 30rpx;
		background: #fff;
		border-radius: 20rpx;
		box-shadow: 0 2rpx 12rpx #eee;
	}
	
	.title {
		margin-bottom: 20rpx;
		font-size: 32rpx;
		color: #000;
		font-weight: 700;
	}
	
	.name {
		color: #21284D;
		font-size: 22rpx;
	}
	
	.date {
		color: #7A8393;
		font-size: 20rpx;
	}
	
	.txt {
		// text-align: justify;
		color: #7A8393;
		font-size: 28rpx;
	}
	
	.hideTxt {
		@include bov(3)
	}
	
	.img-wrap {
		display: grid;
		grid-template-columns: repeat(3,1fr);
		grid-row-gap: 14rpx;
		padding: 20rpx 0;
	}
	
	.reaction-wrap {
		display: flex;
		padding-top: 10rpx;
		.reaction {
			position: relative;
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			text {
				margin-left: 10rpx;
				color: #8C94A1;
				font-size: 24rpx;
			}
			
			&::before {
				content: '';
				position: absolute;
				left: 0;
				width: 2rpx;
				height: 20rpx;
				background: #8C94A1;
			}
			
			&:nth-of-type(1)::before {
				content: none;
			}
			
		}
		
	}
	
	
	
	
</style>