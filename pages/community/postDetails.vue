<template>
	<view style="padding-bottom: 120rpx;">
		<navTop :title="'员工帖子'" bgColor="#F3F4F5"></navTop>
		<view class="wrap">
			<view style="margin-bottom: 20rpx;">
				<commentCard :hideTxt="false"></commentCard>
			</view>
			
			<view class="card-wrap">
				<view style="padding: 30rpx;margin-bottom: 20rpx;" v-for="(item,index) in 10" :key="index">
					
					<commentRow :self="self"></commentRow>
	
				</view>
			</view>
		</view>
	
		<view class="fixed bottom" style="bottom: 0;left: 0;right: 0;">
			<sendBlock @onSend="onSend"></sendBlock>
		</view>
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import commentCard from "@/components/commentCard.vue"
	import sendBlock from '@/components/sendBlock.vue'
	import commentRow from "@/components/commentRow.vue"
	export default {
		data() {
			return {
				self: false
			}
		},
		
		onLoad(option) {
			if (option.self) {
				this.self = option.self == 1 ? true : false
			}
		},
		
		methods: {
			onSend(val) {
				console.log(val)
			}
		},
		
		components: {
			navTop,
			commentCard,
			sendBlock,
			commentRow
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 0 20rpx;
	}
	
	.card-wrap {
		background: #fff;
		border-radius: 20rpx;
	}
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
	
	.bottom {
		padding: 20rpx;
		background: #fff;
		box-shadow: 0px -5px 10px -5px #eee;
	}
	
</style>