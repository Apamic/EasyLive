<template>
	<view>
		<u-navbar :title="title" :safeAreaInsetTop="false" placeholder autoBack :titleStyle="{fontSize: '34rpx',fontWeight: '700',color: titleColor}" :bgColor="bgColor">
			<view class="u-nav-slot" slot="left">
				<text style="color: #333C4F;font-size: 32rpx;font-weight: 700;" v-if="leftText">{{leftText}}</text>
				<u-icon v-else name="arrow-leftward" size="20" :color="titleColor"></u-icon>
			</view>
			<view class="u-nav-slot" slot="right">
				<slot></slot>
				<view v-if="service">
					<image src="@/static/icon/service.png" mode="widthFix" style="margin-left: 50rpx;width: 43rpx;"></image>
				</view>
			</view>
		</u-navbar>
	</view>
	
</template>

<script>
	export default {
		
		props: {
			title: {
				type: String,
				default: ''
			},
			
			bgColor: {
				type: String,
				default: 'transparent'
			},
			
			leftText: {
				type: String,
				default: ''
			},
			service: {
				type: Boolean,
				default: false
			},
			titleColor: {
				type: String,
				default: '#303133'
			}
			
		},
		
		data() {
			return {
				
			}
		}
	}
	
</script>



<style lang="scss" scoped>
	
	
	
</style>