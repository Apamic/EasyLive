<template>
	<view>
		<navTop :title="'设置'"></navTop>
		<view class="content-wrap">
			<view class="row flex-between align-center" @click="$tools.jump('./realName')">
				<text class="label">实名认证</text>
				<u-icon name="arrow-right" size="20"></u-icon>
			</view>
			
			<view class="row flex-between align-center">
				<text class="label">安全设置</text>
				<u-icon name="arrow-right" size="20"></u-icon>
			</view>
			
			<view class="row flex-between align-center">
				<text class="label">关于我们</text>
				<u-icon name="arrow-right" size="20"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	export default {
		data() {
			return {
				
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
		padding: 30rpx;
	}
	
	.row {
		margin-bottom: 20rpx;
		padding: 0 40rpx;
		height: 110rpx;
		background: #fff;
		border-radius: 32rpx;
		
		.label {
			color: #333C4F;
			font-size: 28rpx;
		}
	}
	
</style>