<template>
	<view>
		<navTop :title="currentItem.videoType ? currentItem.videoType : '培训课程'"></navTop>
		
		<view>
			<view>
				<video id="myVideo" :src="currentItem.videoPath"
					@error="videoErrorCallback" style="width: 100%;height: 750rpx;" controls></video>
			</view>
			
			<view class="content-wrap">
				<view class="flex-column" style="padding: 0 40rpx;">
					<text class="title">{{currentItem.centerName}}</text>
					<text class="txt">
						{{currentItem.centerDes}}
					</text>
				</view>				
			</view>
		</view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	export default {
		data() {
			return {
				currentItem: {}
			}
		},
		
		onLoad(option) {
			if (option.item) {
				this.currentItem = JSON.parse(option.item)
				console.log(this.currentItem,'currentItem')
			}
			
		},
		
		methods: {
			videoErrorCallback() {
				
			}
		},
		
		
		components: {
			navTop
		}
	}
</script>

<style lang="scss" scoped>
	.content-wrap {
		.title {
			padding: 20rpx 0;
			color: #000000;
			font-size: 34rpx;
			font-weight: 700;
		}
		
		.txt {
			font-size: 28rpx;
			color: #333333;
		}
		
	}
	
	
	
</style>