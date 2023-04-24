<template>
	<view class="content-wrap">
		<u-gap height="10" bgColor="transparent"></u-gap>
		
		<view class="card wrap relative" style="padding-bottom: 40rpx;">
			<view class="flex-between align-center">
				<view class="relative">
					<view class="comma">
					</view>
					<text class="absolute" style="top: 40%;left: 0;white-space: nowrap;color: #171A21;font-size: 32rpx;font-weight: 700;">每日一言</text>
				</view>
				<image src="@/static/icon/date.png" mode="widthFix" style="width: 38rpx;"></image>
			</view>
			<view class="p">
				<text style="font-size: 28rpx;color: #333C4F;">
					人生没有白走的路，你现在所有的努力，要么赚经历，要么赚阅历，要么赚财富
				</text>
			</view>
			
			<view class="absolute" style="bottom: -40rpx;left: calc(50% - 300rpx);">
				<image src="@/static/study/group1.png" mode="widthFix" class="" style="width: 600rpx;"></image>
			</view>
			
		</view>
		
		<view class="card">
			<view class="flex-center padding-column30">
				<image src="@/static/study/myStudy.png" mode="widthFix" style="width: 144rpx;"></image>
			</view>
			
			<view class="flex flex-around">
				<view class="item">
					<text class="title">今日学习</text>
					<view>
						<text class="blod">2.7</text>
						<text>小时</text>
					</view>
					
				</view>
				<view class="item">
					<text class="title">连续学习</text>
					<view>
						<text class="blod">07</text>
						<text >天</text>
					</view>
				</view>
				<view class="item">
					<text class="title">累计学习</text>
					<view>
						<text class="blod">188</text>
						<text >天</text>
					</view>
				</view>
				
			</view>
			
		</view>
		
		<view class="card">
			<view class="flex-between align-center wrap" style="padding: 30rpx;">
				<text class="blod" style="font-size: 32rpx;">最近学习</text>
				<view class="align-center">
					<text style="color: #F27738;">
						查看全部 
					</text>
					<u-icon name="arrow-right-double" size="18" color="#F27738"></u-icon>
				</view>
			</view>
			
			<scroll-view scroll-x style="height: 505rpx;width: 100%;">
				<view class="scroll-view flex">
					<view v-for="(item,index) in lists" :key="index" style="padding-left: 20rpx;">
						<videoCard :item="item" :borderColor="'#DEE3ED'"></videoCard>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="card">
			<view class="flex-between align-center wrap" style="padding: 30rpx;">
				<text class="blod" style="font-size: 32rpx;">我的课程</text>
				<!-- <view class="align-center">
					<text style="color: #F27738;">
						查看全部 
					</text>
					<u-icon name="arrow-right-double" size="18" color="#F27738"></u-icon>
				</view> -->
			</view>
			
			<view style="padding: 0 30rpx;">
				<view v-for="(item,index) in 3" :key="index" style="margin-bottom: 20rpx;">
					<cultivateRow direction="row-reverse"></cultivateRow>
				</view>
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import videoCard from "@/components/videoCard.vue"
	import cultivateRow from '@/components/cultivateRow.vue'
	
	export default {
		data() {
			return {
				lists: [
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					{
						text: '酒店保洁培训基础'
					},
				
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					
				],
			}
		},
		
		methods: {
			
		},
		
		components: {
			videoCard,
			cultivateRow
		}
		
	}
</script>



<style  lang="scss"scoped>
	
	.wrap {
		padding: 0 38rpx;
	}
	
	.comma {
		width: 110rpx;
		height: 105rpx;
		background: url('@/static/study/comma.png') no-repeat;
		background-size: contain;
	}
	
	.p {
		padding: 24rpx;
	}
	
	.card {
		
		padding-bottom: 38rpx;
		margin-bottom: 30rpx;
		border-radius: 20rpx;
		box-shadow: 0 4rpx 12rpx 4rpx #f3f5f7;
	}
	
	
	.item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 24rpx;
		width: 212rpx;
		height: 182rpx;
		background: url('@/static/study/group.png') no-repeat;
		background-size: 100% 100%;
		.title {
			color: #333C4F;
		}
		
		.blod {
			font-size: 48rpx;
		}
		
	}
	
	.scroll-view {
		display: flex;
		// white-space: nowrap;
		// overflow: hidden;
	}
	
	text {
		font-size: 24rpx;
	}
	
</style>