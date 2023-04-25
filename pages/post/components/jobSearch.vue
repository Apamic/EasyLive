<template>
	<view class="content-wrap">
		<view class="tabs-wrap flex">
			<view class="tab text-center" :class="currentType == index ? 'active' : ''" v-for="(item,index) in type" :key="item" @click="currentType = index">
				<text>{{item}}</text>
			</view>
		</view>
		<view class="flex flex-between type">
			<view @click="show = true">
				<text>北京</text>
				<image src="../../../static/icon/unfold.png" mode="widthFix" style="width: 20rpx;"></image>
			</view>
			
			<view class="flex">
				<!-- <view @click="show = true" style="margin-left: 50rpx;">
					<text>距离</text>
					<image src="../../../static/icon/unfold.png" mode="widthFix" style="width: 20rpx;"></image>
				</view> -->
				
				<view @click="show = true" style="margin-left: 50rpx;">
					<text>职业类型</text>
					<image src="../../../static/icon/unfold.png" mode="widthFix" style="width: 20rpx;"></image>
				</view>
			</view>
		</view>
		
		
		<u-picker :show="show" :columns="columns" @cancel="show = false" @confirm="confirm"></u-picker>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: ['全部','临时','长期','实习','全职'],
				currentType: 0,
				columns: [
					['中国', '美国', '日本']
				],
				
				show: false
			}
		},
		
		methods: {
			confirm(e) {
				console.log('confirm', e)
				this.show = false
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.content-wrap {
		padding: 0 24rpx;
		background: #fff;
		
		.tabs-wrap {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 10rpx;
			height: 66rpx;
			
			background: #F6F8FC;
			border-radius: 10rpx;
			.tab {
				width: 130rpx;
				height: 52rpx;
				line-height: 52rpx;
				text {
					font-size: 28rpx;
					color: #ADB1C0;
				}
			}
			.active {
				background: #fff;
				border-radius: 10rpx;
				text {
					color: #333C4F;
				}
			}
			
		}
		
	}
	
	.type {
		padding: 30rpx 0;
		text {
			font-size: 24rpx;
			color: #333C4F;
		}
		
		image {
			margin-left: 10rpx;
		}
		
	}
	
</style>