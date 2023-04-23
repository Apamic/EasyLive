<template>
	<view>
		<navTop :title="'职业规划'" bgColor="#fff"></navTop>
		
		<view class="content-wrap">
			
			<view class="left row">
				
				<u-avatar src="@/static/logo.png"></u-avatar>
				
				<view class="txt">
					<text>
						123456789456
					</text>
				</view>
				
			</view>
			
			<view class="right row">
				<u-avatar src="@/static/logo.png"></u-avatar>
				<view class="txt">
					<text>
						123456789456
					</text>
				</view>
				
				
			</view>
		</view>
		
		
		<view class="fixed bottom" style="bottom: 0;right: 0;left: 0;">
			
			<view class="flex">
				<view class="input-wrap align-center" style="margin-right: 20rpx;">
					<u--input
					    placeholder="输入内容"
					></u--input>
				</view>
				
				<u-button class="but" text="发送" size="large"></u-button>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	
	export default {
		data() {
			return {
				src: ''
			}
		},
		
		methods: {
			
		},
		
		components: {
			navTop
		}
	}
</script>

<style lang="scss" scoped>
	
	.content-wrap {
		padding: 46rpx 30rpx 120rpx;
		
		.row {
			display: flex;
			padding-bottom: 30rpx;
			.txt {
				padding: 24rpx;
				max-width: 300rpx;
				background: #fff;
				border-radius: 10rpx;
				text {
					
				}
			}
		}
		
		.left {
			.txt {
				margin-left: 20rpx;
			}
		}
		
		
		.right {
			display: flex;
			flex-direction: row-reverse;
			.txt {
				margin-right: 20rpx;
				color: #fff;
				background: #1250E5;
			}
		}
		
	}
	
	
	
	.bottom {
		padding: 20rpx;
		background: #fff;
	}
	
	.input-wrap {
		flex: 1;
		background: #F6F8FC;
		border-radius: 13rpx;
	}
	
	.but {
		width: 120rpx;
		height: 70rpx;
		color: #fff;
		background: #1250E5;
		border-radius: 13rpx;
	}
	
</style>