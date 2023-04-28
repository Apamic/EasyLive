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
			
			<sendBlock @onSend="onSend"></sendBlock>
			
		</view>
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import sendBlock from '@/components/sendBlock.vue'
	export default {
		data() {
			return {
				src: '',
				
				dialogueList: []
				
			}
		},
		
		onReady() {
			
			this.careerHello()
			
			
		},
		
		
		methods: {
			onSend(val) {
				console.log(val)
			},
			
			async careerHello() {
				let data = await this.$request('/content/career/hello',{},'GET')
				
				if (data) {
					console.log(data.data)
				}
				
			}
			
			
		},
		
		components: {
			navTop,
			sendBlock
		},
		
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
	
</style>