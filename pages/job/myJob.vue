<template>
	<view>
		<navTop :title="'我的工作'" :bgColor="'#fff'"></navTop>
		
		<view class="tabs-wrap">
			<view v-for="(item,index) in tabs" :key="item.val" class="tab" @click="currentTab = index">
				<image :src="`../../static/job/ic${index}${currentTab == index ? '-ac' : ''}.png`" mode="widthFix" style="width: 64rpx;height: 64rpx;"></image>
				<text>{{item.val}}</text>
			</view>
			
		</view>
		<scroll-view scroll-y class="scroll-wrap" :style="{height:navHeight+'px'}">
			<u-gap height="5" bgColor="#F6F8FC"></u-gap>
			<view v-for="(item,index) in 10" :key="index">
				<view class="item">
					<jobRow></jobRow>
				</view>
				<u-gap height="5" bgColor="#F6F8FC"></u-gap>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import jobRow from "@/components/jobRow.vue"
	
	export default {
		data() {
			return {
				tabs: [
					{
						val: '已报名',
						
					},
					{
						val: '进行中',
						
					},
					{
						val: '待结算',
						
					},
					{
						val: '已完结',
						
					},
					{
						val: '已取消',
						
					}
				],
				
				currentTab: 0,
				
				
				pH:0, //窗口高度
				navHeight:0, //元素的所需高度
			}
		},
		
		onLoad() {
			
		},
		
		onReady() {
			let that=this;
			uni.getSystemInfo({ //调用uni-app接口获取屏幕高度
				success:(res) => { //成功回调函数
					that._data.pH=res.windowHeight //windoHeight为窗口高度，主要使用的是这个
					let titleH=uni.createSelectorQuery().select(".scroll-wrap"); //想要获取高度的元素名（class/id）
					titleH.boundingClientRect(data=>{
						let pH=that._data.pH; 
						that._data.navHeight = pH-data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
					}).exec()
				}
			})
		},
		
		methods: {
			
		},
		
		components: {
			navTop,
			jobRow
		}
		
		
		
	}
</script>

<style>
	
	page {
		background: #F6F8FC;
	}
	
</style>


<style lang="scss" scoped>
	.tabs-wrap {
		display: flex;
		align-items: center;
		height: 160rpx;
		background: #fff;
		.tab {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			//padding: 30rpx 0 20rpx;
			image {
				margin-bottom: 16rpx;
			}
			
			text {
				color: #333C4F;
				font-size: 24rpx;
			}
		}
	}
	
	
	.scroll-wrap {
		.item {
			padding: 20rpx 30rpx;
			background: #fff;
		}
	}
	
</style>