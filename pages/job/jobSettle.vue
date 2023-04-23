<template>
	<view>
		<navTop :title="'工作完结-待结算'" bgColor="#F3F4F5"></navTop>
		
		<view class="content-wrap">
			
			<view class="card-wrap">
				<view class="flex flex-between">
					<view>
						<text class="name">猪猪大酒店服务员</text>
						<view class="flex" style="margin-top: 30rpx;">
							<u-tag text="日结" size="mini" bgColor="#F3F5F9" color="#7A8393" borderColor="#F3F5F9"></u-tag>
						</view>
						
					</view>
					<image src="../../static/logo.png" mode="widthFix" style="width: 144rpx;"></image>
				</view>
				
				<view class="padding-column20" style="margin-bottom: 30rpx;">
					<text style=" color: #333C4F;font-size: 24rpx;">工时</text>
					<view class="date" style="margin-top: 20rpx;">
						<text>09:25:23</text>--
						<text>12:23:23</text>
					</view>
				</view>
				
				<view class="padding-column20">
					<view class="flex align-center" style="margin-bottom: 20rpx;">
						<text style="margin-right: 20rpx;">应发工资</text>
						
						
						<u-tag text="待结清" size="mini" type="warning"></u-tag>
						<u-tag text="已结清" size="mini" type="success"></u-tag>
					</view>
					<text class="value">3856.32</text>
				</view>
				
			</view>
			
			
			<u-gap height="10" bgColor="transparent"></u-gap>
			<simpleBlock :src="'@/static/icon/remark.png'" label="工作地点" val="北京市朝阳区北辰路古田二路住住大酒店">
				<image src="@/static/icon/address2.png" mode="widthFix" style="margin-right: 20rpx; width: 50rpx;"></image>
			</simpleBlock>
			<u-gap height="10" bgColor="transparent"></u-gap>
			<simpleBlock :src="'@/static/icon/remark.png'" label="职位发布者" val="李雪琴">
				<image src="@/static/mine/img.png" mode="widthFix" style="margin-right: 20rpx; width: 50rpx;height: 50rpx;border-radius: 50%;"></image>
			</simpleBlock>
			<u-gap height="10" bgColor="transparent"></u-gap>
			<postCard></postCard>
			<u-gap height="10" bgColor="transparent"></u-gap>
			
			<view class="card-wrap">
				<view class="title">
					详情
				</view>
				<view class="row">
					<text class="label">工作单号:</text>
					<text class="val">
						5955522525125465265
					</text>
				</view>
				<view class="row">
					<text class="label">发布时间:</text>
					<text class="val">
						2022年4月23号
					</text>
				</view>
				<view class="row">
					<text class="label">接单时间:</text>
					<text class="val">
						2022年4月23号
					</text>
				</view>
			</view>
			
			
			<view class="fixed-wrap">
				<u-button class="but" text="联系客服" size="large"></u-button>
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import simpleBlock from '@/components/simpleBlock.vue'
	import postCard from '@/components/postCard.vue'
	export default {
		data() {
			return {
				
			}
		},
		
		methods: {
			
		},
		
		components: {
			navTop,
			simpleBlock,
			postCard
		}
	}
</script>

<style lang="scss" scoped>
	.content-wrap {
		padding: 0 32rpx;
	}
	
	.fixed-wrap {
		padding: 20rpx 0;
		
		.but {
			width: 360rpx;
			background: #1250E5;
			color: #fff;
			border-radius: 13rpx;
		}
	}
	
	.card-wrap {
		padding: 24rpx;
		background: #fff;
		border-radius: 22rpx;
		
		.title {
			padding: 10rpx 0;
			color: #161D26;
			font-size: 24rpx;
			font-weight: 700;
		}
		
		.row {
			display: flex;
			padding: 15rpx 0;
			.label {
				flex: 0 0 150rpx;
				width: 150rpx;
				font-size: 24rpx;
				color: #606570;
			}
			
			.val {
				flex: 1;
				font-size: 24rpx;
				color: #000000;
			}
		}
		
	}
	
	.date {
		text {
			color: #333C4F;
			font-size: 35rpx;
			font-weight: 700;
		}
	}
	
	.value {
		color: #EC6735;
		font-size: 35rpx;
		font-weight: 700;
	}
	
	.name {
		font-size: 32rpx;
		color: #333C4F;
		font-weight: 700;
	}
	
	text {
		color: #333C4F;
		font-size: 24rpx;
	}
	
</style>