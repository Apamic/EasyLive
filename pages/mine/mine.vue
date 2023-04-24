<template>
	<view>
		<view class="bj"> 
			<view class="flex flex-between heads">
				<view class="flex">
					<view style="margin-right: 20rpx;">
						<u-avatar src="@/static/mine/img.png"></u-avatar>
					</view>
					
					<view class="flex-column info">
						<text class="name">ERIC MARTINEZ</text>
						<text class="id">ID:18776727</text>
					</view>
				</view>
				
				
				<view class="align-center">
					<image src="@/static/icon/set.png" mode="widthFix" style="width: 40rpx;"></image>
					
					<image src="@/static/icon/service.png" mode="widthFix" style="margin-left: 50rpx;width: 43rpx;"></image>
				</view>
			</view>
			
			<view class="value-wrap flex-1" style="margin-top: 20rpx;">
				<view class="item">
					<text style="font-size: 34rpx;">--</text>
					<text>钱包余额</text>
				</view>
				<view class="item">
					<text style="font-size: 34rpx;">--</text>
					<text>积分</text>
				</view>
				<view class="item">
					<text style="font-size: 34rpx;">--</text>
					<text>工作时长(H)</text>
				</view>
				<view class="item">
					<text style="font-size: 34rpx;">--</text>
					<text>信誉分数</text>
				</view>
			</view>
			
			
			<view class="vip-wrap" >
				<image src="@/static/icon/vip0.png" mode="widthFix" style="width: 30rpx;"></image>
				<text class="level">
					暂未开放会员等级
				</text>
			</view>
			
		</view>
		
		<view class="wrap">
			<view class="title">
				<text>常用功能</text>
			</view>
			<view class="grid">
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic0.png" mode="widthFix" style="width: 78rpx;" @click="$tools.jump('../resume/resume')"></image>
					<text>个人简历</text>
				</view>
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic1.png" mode="widthFix" style="width: 78rpx;" @click="$tools.jump('../job/myJob')"></image>
					<text>我的工作</text>
				</view>
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic2.png" mode="widthFix" style="width: 78rpx;" @click="$tools.toast('暂未开放')"></image>
					<text>我的推荐</text>
				</view>
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic3.png" mode="widthFix" style="width: 78rpx;" @click="$tools.toast('暂未开放')"></image>
					<text>积分商城</text>
				</view>
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic4.png" mode="widthFix" style="width: 78rpx;" @click="$tools.toast('暂未开放')"></image>
					<text>我的投稿</text>
				</view>
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic5.png" mode="widthFix" style="width: 78rpx;" @click="$tools.jump('../dailyPaper/dailyPaper')"></image>
					<text>工作日报</text>
				</view>
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic6.png" mode="widthFix" style="width: 78rpx;" @click="$tools.toast('暂未开放')"></image>
					<text>我的证书</text>
				</view>
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic7.png" mode="widthFix" style="width: 78rpx;" @click="$tools.toast('暂未开放')"></image>
					<text>合伙人申请</text>
				</view>
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic8.png" mode="widthFix" style="width: 78rpx;" @click="$tools.toast('暂未开放')"></image>
					<text>我的合同</text>
				</view>
				<view class="flex-column align-center item">
					<image src="@/static/mine/ic9.png" mode="widthFix" style="width: 78rpx;" @click="$tools.toast('暂未开放')"></image>
					<text>我的保险</text>
				</view>
			</view>
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
			
		}
	}
</script>


<style>
	page {
		background: #fff;
	}
</style>

<style lang="scss" scoped>
	
	.bj {
		display: flex;
		flex-direction: column;
		height: 460rpx;
		background: url('@/static/mine/bj.png') no-repeat;
		background-size: 100% 100%;
	}
	
	.heads {
		padding: 60rpx 37rpx;
	}
	
	.info {
		.name {
			color: #21284D;
			font-size: 32rpx;
			font-weight: 700;
		}
		
		.id {
			color: #7A8393;
			font-size: 24rpx;
		}
		
	}
	
	
	.value-wrap {
		display: flex;
		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			
			text {
				color: #21284D;
				font-size: 20rpx;
			}
			
		}
	}
	
	
	.wrap {
		
	}
	
	.title {
		padding: 20rpx 30rpx;
		text {
			color: #000000;
			font-size: 28rpx;
		}
	}
	
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		
		.item {
			padding-bottom: 40rpx;
			image {
				margin-bottom: 10rpx;
			}
			
			text {
				color: #21284D;
				font-size: 24rpx;
			}
		}
	}
	
	.vip-wrap {
		padding: 34rpx 70rpx;
		width: 100%;
		height: 123rpx;
		background: url("@/static/mine/vipGroup.png") no-repeat;
		background-size: 100% 100%;
		
		image {
			margin-right: 20rpx;
		}
		
		.level {
			color: #FFC772;
			font-size: 26rpx;
		}
		
	}
	
</style>