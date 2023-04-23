<template>
	<view class="card-wrap align-center">
		<view>
			<slot></slot>
		</view>
		<view class="flex-column" style="line-height: 40rpx;">
			<text style="color: #161D26;font-weight: 700;">{{label}}</text>
			<text style="color: #606570;">{{val}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			
			label: {
				type: String,
				default: ''
			},
			
			val: {
				type: String,
				default: ''
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
	.card-wrap {
		padding: 24rpx;
		background: #fff;
		border-radius: 22rpx;
	}
	
	text {
		font-size: 24rpx;
	}
	
</style>