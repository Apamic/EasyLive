<template>
	<view class="card-content">
		<view class="item flex">
			<image src="@/static/logo.png" mode="widthFix" style="width: 144rpx;border-radius: 10rpx;"></image>
			<view class="flex-1 flex-column flex-between" style="padding-left: 30rpx;">
				<view class="flex-between align-center">
					<text class="name">
						服务员
					</text>
					<text class="value">
						30元/小时
					</text>
				</view>
				<view>
					<text style="font-size: 22rpx;color: #7A8393;">
						猪猪大酒店
					</text>
					<text style="font-size: 22rpx;color: #20B387;">
						12km
					</text>
				</view>
				<view class="flex">
					<view style="margin-right: 10rpx;">
						<u-tag text="8:00-18:00" size="mini" bgColor="#F3F5F9" borderColor="#F3F5F9" color="#7A8393"></u-tag>
					</view>
					
					<view style="margin-right: 10rpx;">
						<u-tag  text="3月2日-3月10日" size="mini" bgColor="#F3F5F9" borderColor="#F3F5F9" color="#7A8393"></u-tag>
					</view>
					
					<u-tag text="日结" size="mini" bgColor="#F3F5F9" borderColor="#F3F5F9" color="#7A8393"></u-tag>
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

<style lang="scss" scoped>
	
	.card-content {
		.item {
			
			.value {
				color: #EC6735;
				font-size: 30rpx;
				font-family: 700;
			}
		}
	}
	
</style>