<template>
	<view class="relative">
		<view class="flex" style="margin-bottom: 20rpx;">
			<u-avatar src="@/static/mine/img.png" shape="circle" size="30"></u-avatar>
			<view class="flex-column" style="margin-left: 20rpx;">
				<text class="name">ERIC MARTINEZ</text>
				<text class="date">2023-12-22 00:00:00</text>
			</view>
		</view>
		<view style="margin-left: 70rpx;">
			<view style="margin-bottom: 20rpx;">
				<text class="txt">
					用户自主管理私钥,资产一手掌握 安全隔离,数据加密
					等获多项安全专利技术用户自主管理私钥,资产一手
					掌握 安全隔离,数据加密等获多项安全专利技术
				</text>
			</view>
			<u-line color="#DADEE6"></u-line>
		</view>
		
		<view class="absolute" style="top: 0;right: 0;" @click.stop="onDeleteRow()" v-if="self">
			<u-icon name="trash-fill" size="20"></u-icon>
		</view>
		
	</view>
</template>

<script>
	export default {
		
		props: {
			self: {
				type: Boolean,
				default: false
			}
		},
		
		data() {
			return {
				
			}
		},
		
		
		methods: {
			onDeleteRow() {
				console.log('onDeleteRow')
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.name {
		color: #21284D;
		font-size: 22rpx;
	}
	
	.date {
		color: #7A8393;
		font-size: 20rpx;
	}
	
	.txt {
		color: #7A8393;
		font-size: 26rpx;
	}
	
	
</style>