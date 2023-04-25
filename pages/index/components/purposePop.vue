<template>
	<view class="content-wrap">
		<u-overlay :show="show">
			<view class="warp">
				<view class="rect relative">
					<view class="title align-center">
						<image src="@/static/icon/warning.png" mode="widthFix" style="margin-right: 10rpx; width: 36rpx;"></image>
						<text style="color: #333C4F;font-size: 34rpx;font-weight: 700;">选择您的目的</text>
					</view>
					<view class="flex flex-between" style="margin-bottom: 24rpx;">
						<view class="item" v-for="(item,index) in typeList" :key="index" :class="current == index ? 'active' : ''" @click.stop="current = index">
							<image :src="`../../static/index/${item.src}${current == index ? '-ac' : ''}.png`" mode="widthFix" style="width: 80rpx;"></image>
							<text>{{item.name}}</text>
						</view>
						
					</view>
					
					<u-button text="确认" class="but" size="large" @click="onSubmit()"></u-button>
					
					<view class="absolute" style="top: 20rpx;right: 20rpx;" @click="show = false">
						<u-icon name="close-circle" size="28"></u-icon>
					</view>
					
				</view>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				
				current: 0,
				
				typeList: [
					{
						type: 0,
						name: '我要入住',
						src: 'checkIn'
					},
					{
						type: 1,
						name: '我要面试',
						src: 'interview'
					},
				]
			}
		},
		
		
		onReady() {
			
		},
		
		
		methods: {
			onSubmit() {
				
				let {current,typeList} = this
				this.show = false
				this.$tools.jump(`./checkIn?item=${JSON.stringify(typeList[current])}`)
				
				
			}
		}
		
	}
	
	
</script>

<style lang="scss" scoped>
	
	.warp {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		height: 100%;
		padding: 100rpx 20rpx;
	}
	
	.rect {
		padding: 32rpx 36rpx;
		width: 100%;
		background: #fff;
		border-radius: 18rpx;
	}
	
	
	.title {
		margin-bottom: 28rpx;
	}
	
	
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 300rpx;
		height: 180rpx;
		background: #F6F8FC;
		border-radius: 10rpx;
		
		image {
			margin-bottom: 20rpx;
		}
		
		text {
			color: #818AA0;
			font-size: 30rpx;
		}
		
	}
	
	.active {
		border: 2rpx solid #99A4BB;
		text {
			color: #333C4F;
			font-size: 30rpx;
		}
	}
	
	
	.but {
		color: #fff;
		background: #004CFF;
		border-radius: 16rpx;
	}
	
</style>