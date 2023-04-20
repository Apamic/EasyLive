<template>
	<view class="flex-column">
		<view class="type-wrap flex">
			<view class="flex-1 text-center" :class="currentJobType == index ? 'active' : ''" v-for="(item,index) in jobType" :key="item" @click="currentJobType = index">
				<text>{{item}}</text>
			</view>
		</view>
		
		<!-- <template v-if="currentJobType == 0"> -->
			<jobSearch></jobSearch>
		<!-- </template> -->
		<!-- <template v-if="currentJobType == 1">
			<myJob></myJob>
		</template> -->
		
		<scroll-view scroll-y class="scroll-wrap" :style="{height:navHeight+'px'}">
			<u-gap height="5" bgColor="#F6F8FC"></u-gap>
			<view v-for="(item,index) in 1" :key="index">
				<view class="item">
					<jobRow></jobRow>
				</view>
				<u-gap height="5" bgColor="#F6F8FC"></u-gap>
			</view>
		</scroll-view>
		
		<!-- <u-picker :show="show" :columns="columns" @cancel="show = false" @confirm="confirm"></u-picker> -->
		
	</view>
</template>

<script>
	import jobSearch from "./components/jobSearch.vue"
	import myJob from "./components/myJob.vue"
	import jobRow from "@/components/jobRow.vue"
	export default {
		data() {
			return {
				jobType: [
					'找工作',
					// '我的工作'
				],
				currentJobType: 0,
				pH:0, //窗口高度
				navHeight:0, //元素的所需高度
				
				
				columns: [
					['中国', '美国', '日本']
				],
				
				show: false
				
			}
		},
		
		
		onReady() {
			
			this.show = true
			
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
			confirm(e) {
				console.log('confirm', e)
				this.show = false
			}
		},
		
		components: {
			jobSearch,
			myJob,
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
	
	.type-wrap {
		padding: 0 200rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #fff;
		
		text {
			color: #333C4F;
			font-size: 28rpx;
		}
		
		.active {
			text {
				font-size: 34rpx;
				font-weight: bold;
				color: #333C4F;
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