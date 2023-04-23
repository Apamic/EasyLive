<template>
	<view>
		<navTop :title="'岗位详情'"></navTop>
		<view class="content-wrap">
			<view class="card-wrap flex-between">
				<image src="@/static/logo.png" mode="widthFix" style="width: 144rpx;"></image>
				<view class="flex-column flex-between flex-1" style="padding-left: 30rpx;">
					<text style="color: #161D26;font-size: 32rpx;font-weight: 700;">猪猪大酒店服务员</text>
					<text style="color: #7A8393;font-size: 22rpx;">还需<text style="color: #EC6735;">20</text>人</text>
					<view class="flex-between">
						<u-tag text="日结" size="mini" bgColor="#F3F5F9" color="#7A8393" borderColor="#F3F5F9"></u-tag>
						<text style="color: #EC6735;font-size: 30rpx;font-weight: 700;">30元/小时</text>
					</view>
				</view>
			</view>
			
			<simpleBlock :src="'@/static/icon/remark.png'" label="工作地点" val="北京市朝阳区北辰路古田二路住住大酒店">
				<image src="@/static/icon/address2.png" mode="widthFix" style="margin-right: 20rpx; width: 50rpx;"></image>
			</simpleBlock>
			
			<simpleBlock :src="'@/static/icon/remark.png'" label="备注" val="北京市朝阳区北辰路古田二路住住大酒店北京市朝阳区北辰路古田二路住住大酒店">
				<image src="@/static/icon/remark.png" mode="widthFix" style="margin-right: 20rpx; width: 50rpx;"></image>
			</simpleBlock>
			
			<simpleBlock :src="'@/static/icon/remark.png'" label="职位发布者" val="李雪琴">
				<image src="@/static/mine/img.png" mode="widthFix" style="margin-right: 20rpx; width: 50rpx;height: 50rpx;border-radius: 50%;"></image>
			</simpleBlock>
			
			
			<postCard></postCard>
			
			
			<view class="fixed-wrap">
				<u-button class="but" text="接单报名" size="large"></u-button>
			</view>
			
		</view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import postCard from '@/components/postCard.vue'
	import simpleBlock from '@/components/simpleBlock.vue'
	export default {
		data() {
			return {
				
			}
		},
		
		methods: {

		},
		
		components: {
			navTop,
			postCard,
			simpleBlock
		}
		
	}
	
	
</script>

<style lang="scss" scoped>
	.content-wrap {
		padding: 32rpx 32rpx 0;
	}
	
	.card-wrap {
		margin-bottom: 20rpx;
		padding: 24rpx;
		background: #fff;
		border-radius: 22rpx;
	}
	
	.fixed-wrap {
		padding: 30rpx;
	}
	
	.but {
		width: 360rpx;
		background: #1250E5;
		color: #fff;
		font-size: 13rpx;
	}
	
</style>