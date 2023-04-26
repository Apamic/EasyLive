<template>
	<view>
		<view class="flex">
			<view class="input-wrap align-center" style="margin-right: 20rpx;">
				<u--input
				    placeholder="输入内容"
					v-model="val"
				></u--input>
			</view>
			
			<u-button class="but" text="发送" size="large" @click="onSend()"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val: ''
			}
		},
		
		methods: {
			onSend() {
				
				this.$emit('onSend',this.val)
				this.val = ''
			}
		},
		
		
	}
</script>

<style lang="scss" scoped>
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