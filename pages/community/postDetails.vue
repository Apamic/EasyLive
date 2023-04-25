<template>
	<view style="padding-bottom: 50rpx;">
		<navTop :title="'员工帖子'" bgColor="#F3F4F5"></navTop>
		<view class="wrap">
			<view style="margin-bottom: 20rpx;">
				<commentCard></commentCard>
			</view>
			
			<view class="card-wrap">
				<view style="padding: 30rpx;margin-bottom: 20rpx;" v-for="(item,index) in 10" :key="index">
					<view class="flex" style="margin-bottom: 20rpx;">
						<u-avatar src="../../static/mine/img.png" shape="circle" size="30"></u-avatar>
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
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import commentCard from "@/components/commentCard.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		
		components: {
			navTop,
			commentCard
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
	
</style>