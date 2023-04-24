<template>
	<view class="wrap">
		<u-tabs :list="tabsList" @click="onTab"  lineColor="#000000" lineWidth="30" 
		:activeStyle="{
            color: '#303133',
            fontWeight: 'bold',
        }"
		itemStyle="padding-left: 15px; padding-right: 15px; height: 50px;"
		
		></u-tabs>
		
		<view v-show="currentTab == 0">
			<growthCenter></growthCenter>
		</view>
		
		<view v-show="currentTab == 1">
			<study></study>
		</view>
		
	</view>
</template>

<script>
	import growthCenter from './components/growthCenter.vue'
	import study from './components/study.vue'
	export default {
	
		data() {
			return {
				tabsList: [
					{
						name: '成长中心',
					},
					{
						name: '学无止境'
					}
				],
				
				currentTab: 0
				
			}
		},
		
		methods: {
			onTab(item) {
				console.log('item', item);
				this.currentTab = item.index
			}
		},
		
		
		components: {
			growthCenter,
			study
		}
		
	}
</script>


<style>
	page {
		background: #fff;
	}
	
</style>

<style lang="scss" scoped>
	.wrap {
		padding: 0 24rpx;
	}
	
	
</style>