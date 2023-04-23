<template>
	<view>
		<navTop :title="'工作打卡'" bgColor="#F3F4F5"></navTop>
		
		<view class="content-wrap">
			
			<view class="card-wrap">
				<view class="basic">
					<view>
						<text class="title">猪猪大酒店服务员</text>
					</view>
					<view class="flex">
						<u-tag text="日结" size="mini" bgColor="#F3F5F9" color="#7A8393" borderColor="#F3F5F9"></u-tag>
					</view>
					<view class="flex-end">
						<text style="color: #333C4F;font-weight: 700;">星期4</text>
					</view>
					<view class="flex-between">
						<text style="color: #EC6735;font-weight: 700;">
							30元/小时
						</text>
						<text style="color: #333C4F;">
							2023年7月16号
						</text>
					</view>
				</view>
				
				<view class="align-center flex-column" style="margin-bottom: 40rpx;">
					<view :class="['circle','flex-column','align-center','flex-center',entryRange ? 'range1': 'range2']" style="margin-bottom: 40rpx;">
						<text style="font-size: 42rpx;">上班打卡</text>
						<text style="font-size: 28rpx;">
							16:25:23
						</text>
					</view>
					
					<!-- <view class="flex align-center">
						<u-icon name="checkmark-circle-fill" size="18" color="#20B387"></u-icon>
						<text style="margin-left: 10rpx; color: #333C4F;font-size: 24rpx;">您已进入考勤范围</text>
					</view> -->
					
					<view class="flex align-center">
						<u-icon name="error-circle-fill" size="18" color="#FF5D00"></u-icon>
						<text style="margin-left: 10rpx; color: #333C4F;font-size: 24rpx;">您不在考勤范围内</text>
					</view>
					
				</view>
				
				
				<view class="case">
					<view class="row" style="padding-bottom: 100rpx;">
						<text>上班</text>
						<view class="point line">
							
						</view>
						<view class="flex-column">
							<text style="color: #333C4F;font-size: 32rpx;font-weight: 700;">08:00</text>
							<text style="font-size: 24rpx;">武汉市武昌区静安路猪猪大酒店</text>
						</view>
					</view>
					
					
					<view class="row">
						<text>下班</text>
						<view class="point">
							
						</view>
						<view class="flex-column">
							<text style="color: #333C4F;font-size: 32rpx;font-weight: 700;">08:00</text>
							<text style="font-size: 24rpx;">武汉市武昌区静安路猪猪大酒店</text>
						</view>
					</view>
				</view>
				

			</view>
			
			<u-gap height="10" bgColor="transparent"></u-gap>
			
			<postCard></postCard>
		</view>
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import postCard from '@/components/postCard.vue'
	export default {
		data() {
			return {
				entryRange: false,
			}
		},
		
		components: {
			navTop,
			postCard
		}
	
	}
</script>
	
<style lang="scss" scoped>
	.content-wrap {
		padding: 0 30rpx 30rpx;
	}
	
	.card-wrap {
		padding: 40rpx;
		background: #fff;
		border-radius: 22rpx;
	}
	
	.basic {
		view {
			height: 50rpx;
		}
	}
	
	.title {
		color: #161D26;
		font-size: 32rpx;
		font-weight: 700;
	}
	
	text {
		font-size: 28rpx;
		color: #7A8393;
	}
	
	.circle {
		width: 270rpx;
		height: 270rpx;
		background: linear-gradient(to bottom,#3296ED,#1250E5);
		border-radius: 50%;
		box-shadow: 5rpx 10rpx 30rpx 2rpx #5E92EE;
		text {
			color: #fff;
		}
	}
	
	.range1 {
		background: linear-gradient(to bottom,#3296ED,#1250E5);
		box-shadow: 5rpx 10rpx 30rpx 2rpx #5E92EE;
	}
	
	.range2 {
		background: linear-gradient(to bottom,#32ED9C,#1EB7C8);
		box-shadow: 5rpx 10rpx 30rpx 2rpx #73E0ED;
	}
	
	
	.case {
		.row {
			display: flex;
			
			.point {
				margin: 15rpx 25rpx 0;
				width: 14rpx;
				height: 14rpx;
				border: 3rpx solid #000000;
				border-radius: 50%;
			}
		}
	}
	
	.line {
		position: relative;
		
		&::after {
			content: '';
			position: absolute;
			left: 5rpx;
			top: 30rpx;
			width: 2rpx;
			height: 125rpx;
			background: #CDD5E5;
		}
	} 
	
</style>