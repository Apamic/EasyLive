<template>
	<view>
		<view class="card-wrap flex-column flex-between relative">
			<image src="../../../static/resume/pdf.png" mode="widthFix" style="width: 88rpx;"></image>
			<view>
				<text class="name">阿婆克烈的简历</text>
				<text class="size">56.45KB</text>
			</view>
			<text class="date">2020.03.20</text>
			
			<image class="absolute" src="../../../static/resume/handle.png" mode="widthFix" style="width: 40rpx;top: 20rpx;right: 20rpx;" @click="show = true"></image>
		</view>
		
		<u-action-sheet :closeOnClickOverlay="true"  @close="show = false" :actions="list" :show="show"></u-action-sheet>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name:'重命名',
						color:'#333C4F',
						fontSize:'16'					
					},	
					{
						name:'删除',
						color:'#333C4F',
						fontSize:'16'	
					}
				],
				
				
				show: false
			}
		},
		
		methods: {
			
		}
		
	}
	
	
</script>

<style lang="scss" scoped>
	.card-wrap {
		padding: 30rpx;
		width: 335rpx;
		height: 335rpx;
		background: #fff;
		border-radius: 31rpx;
	}
	
	.name {
		font-size: 30rpx;
		font-weight: 700;
	}
	
	.size {
		font-size: 24rpx;
		color: #333C4F;
	}
	
	.date {
		font-size: 22rpx;
		color: #333C4F;
	}
	
</style>