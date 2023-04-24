<template>
	<view>
		<view class="banner">
			<navTop :title="'报名培训'" :titleColor="'#fff'"></navTop>
			
			<view class="desc">
				<text>
					文字介绍培训，培训可以做什么，我们安置了多少优秀的培训 助力你成为更好的人
				</text>
				
			</view>
			
		</view>
		
		<view class="content-wrap">
			<view style="padding: 20rpx 0;">
				<view class="title">
					
					<text>培训现场</text>
					
				</view>
			</view>
			<view style="margin-bottom: 26rpx;">
				
				<u-subsection :list="tabList" :current="currentTab" @change="sectionChange" :inactiveColor="'#ADB1C0'" :activeColor="'#000000'" fontSize="14"></u-subsection>
				
			</view>
		</view>
		
		
		<scroll-view scroll-y class="scroll-wrap" :style="{height:navHeight+'px'}">
			
			<view style="padding: 0 32rpx 144rpx;">
				<view v-for="(item,index) in 10" :key="index" style="margin-bottom: 20rpx;">
					<cultivateRow></cultivateRow>
				</view>
			</view>
			
			
		</scroll-view>
		
		<view class="fixed-wrap">
			<u-button class="but" text="我要报名培训" size="large"></u-button>
		</view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import cultivateRow from '@/components/cultivateRow.vue'
	import scrollHeight from "@/mixis/scrollHeight.vue"
	export default {
		mixins:[scrollHeight],
		data() {
			return {
				tabList: [
					'客房培训','餐馆培训','宴会小时工'
				],
				currentTab: 0
			}
		},
		
		
		methods: {
			sectionChange(index) {
				this.currentTab = index
			}
		},
		
		components: {
			navTop,
			cultivateRow
		}
	}
</script>


<style>
	page {
		background: #fff;
	}
</style>


<style lang="scss" scoped>
	
	.banner {
		position: relative;
		padding: 40rpx;
		background: #1250E5;
		&::before {
			content: '';
			position: absolute;
			bottom: -30rpx;
			right: 40rpx;
			width: 0;
			height: 0;
			border-top: 30rpx solid transparent;
			border-right: 30rpx solid #1250E5;
			border-bottom: 30rpx solid transparent;
		}
	}
	
	.desc {
		padding: 24rpx;
		border: 2rpx dashed #F6F8FC;
		text {
			font-size: 28rpx;
			color: #fff;
		}
	}
	
	.content-wrap {
		padding: 0 32rpx;
	}
	
	.title {
		position: relative;
		padding: 0 32rpx;
		font-size: 34rpx;
		font-weight: 700;
		&::after {
			content: '';
			position: absolute;
			left: 0;
			width: 8rpx;
			height: 100%;
			background: #EC6735;
			border-radius: 4rpx;
		}
	}
	
	.fixed-wrap {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 20rpx 0;
		background: #fff;
		box-shadow: 0 -3rpx 10rpx 1rpx rgba(120, 131, 166, 0.16);
	}
	
	
	.but {
		width: 360rpx;
		color: #fff;
		background: #1250E5;
	}
	
</style>