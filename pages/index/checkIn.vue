<template>
	<view>
		<navTop :title="currentItem.name" :bgColor="'#fff'" :service="true">
		</navTop>
		
		<view class="content-wrap">
			<view class="card-wrap" style="margin-bottom: 20rpx;">
				<view style="margin-bottom: 20rpx;">
					<u-steps :current="current">
						<u-steps-item title="我要报名"></u-steps-item>
						<u-steps-item :title="`${currentItem.type == 0 ? '入住' : '面试'}预约`"></u-steps-item>
						<u-steps-item title="确认行程"></u-steps-item>
					</u-steps>
				</view>
				<view class="text-center">
					<text style="color: #F27738;font-size: 24rpx;">当前免费入住名额充足</text>
				</view>
				
			</view>
			
			<view v-show="current == 0">
				<basicInfo :type="currentItem.type" @next="next"></basicInfo>
			</view>
			
			<view v-show="current == 1">
				<appointmentInfo :type="currentItem.type" @back="next" @next="next"></appointmentInfo>
			</view>
			
			<view v-show="current == 2">
				<applyInfo></applyInfo>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import basicInfo from './components/basicInfo.vue'
	import appointmentInfo from './components/appointmentInfo.vue'
	import applyInfo from './components/applyInfo.vue'
	export default {
		data() {
			return {
				currentItem: {},
				current: 1
			}
		},
		
		
		onLoad(option) {
			if (option.item) {
				this.currentItem = JSON.parse(option.item)
				//console.log(this.currentItem)
			}
			
		},
		
		
		methods: {
			next(e) {
				this.current = e
			}
		},
		
		
		components: {
			navTop,
			basicInfo,
			appointmentInfo,
			applyInfo
		}
	}
</script>

<style lang="scss" scoped>
	.content-wrap {
		padding: 30rpx 20rpx;
	}
	
	.card-wrap {
		padding: 30rpx 0 10rpx;
		background: #fff;
		border-radius: 10rpx;
	}
	
	
</style>