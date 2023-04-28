<template>
	<view class="card-content">
		<view class="item flex">
			<image :src="item.enterpriseImage" style="width: 144rpx;height: 144rpx;border-radius: 10rpx;"></image>
			<view class="flex-1 flex-column flex-between" style="padding-left: 30rpx;">
				<view class="flex-between align-center">
					<text class="name">
						{{item.positionName}}
					</text>
					<text class="value">
						{{item.salary}}元/{{item.salaryType}}
					</text>
				</view>
				<view>
					<text style="font-size: 22rpx;color: #7A8393;">
						{{item.workingPlace}}
					</text>
					<!-- <text style="font-size: 22rpx;color: #20B387;">
						12km
					</text> -->
				</view>
				<view class="flex">
					<view style="margin-right: 10rpx;">
						<u-tag text="8:00-18:00" size="mini" bgColor="#F3F5F9" borderColor="#F3F5F9" color="#7A8393"></u-tag>
					</view>
					
					<view style="margin-right: 10rpx;">
						<u-tag  :text="`${$tools.formatTime(item.begin_time,'MD')}-${$tools.formatTime(item.end_time,'MD')}`" size="mini" bgColor="#F3F5F9" borderColor="#F3F5F9" color="#7A8393"></u-tag>
					</view>
					
					<!-- <u-tag :text="item.salaryType" size="mini" bgColor="#F3F5F9" borderColor="#F3F5F9" color="#7A8393"></u-tag> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		props:{
			item: {
				type: Object,
				default: () => {}
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