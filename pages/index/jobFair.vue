<template>
	<view>
		<navTop :title="'招聘会'"></navTop>
		<view class="content-wrap" v-html="currentItem.activityContent">
			
		</view>
		
		<view class="fixed-wrap">
			<u-button class="but" text="我要报名" size="large"></u-button>
		</view>
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	export default {
		data() {
			return {
				currentItem: {}
			}
		},
		
		onLoad(option) {
			if (option.item) {
				this.currentItem = JSON.parse(option.item)
				console.log(this.currentItem)
			}
		},
		
		methods: {
			
		},
		
		components: {
			navTop
		}
	}
</script>


<style>
	page {
		/* background: #fff; */
	}
</style>

<style lang="scss" scoped>
	.fixed-wrap {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 30rpx;
		background: #fff;
	}
	
	
	.but {
		width: 360rpx;
		color: #fff;
		background: #1250E5;
		border-radius: 13rpx;
	}
	
</style>