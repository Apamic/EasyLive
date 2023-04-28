<template>
	<view>
		<view class="tabs-wrap align-center">
			<u-tabs :list="tabsList" @click="onTab"  lineColor="#000000" lineWidth="30"
			:activeStyle="{
			    color: '#303133',
			    fontWeight: 'bold',
			}"
			itemStyle="padding-left: 15px; padding-right: 15px; height: 50px;"
			
			></u-tabs>
		</view>
	
		<!-- <view class="wrap"> -->
			<view v-if="currentTab == 0">
				<!-- <forum :forumList="forumList"></forum> -->
				
				<forum></forum>
				
			</view>
			
			<view v-if="currentTab == 1" style="background: #fff;">
				
				<growthCenter></growthCenter>
			</view>
			
			<view v-if="currentTab == 2">
				<study></study>
			</view>
		<!-- </view> -->
	</view>
</template>

<script>
	import growthCenter from './components/growthCenter.vue'
	import study from './components/study.vue'
	import forum from './components/forum.vue'
	export default {
	
		data() {
			return {
				tabsList: [
					{
						name: '北漂之家',
					},
					{
						name: '成长中心',
					},
					// {
					// 	name: '学无止境'
					// }
				],
				
				currentTab: 0,
				
				list: ['保洁', '餐厅', '客房', '厨师','司机'],
				current: 0,
				
				
				forumList: []
				
			}
		},
		
		onShow() {
			
		},
		
		
		
		
		
		methods: {
			
			
			
			
			
			onTab(item) {
				console.log('item', item);
				this.currentTab = item.index
			},
			
			
			sectionChange(index) {
				this.current = index
			}
		},
		
		
		components: {
			growthCenter,
			study,
			forum
		}
		
	}
</script>


<style>

	
</style>

<style lang="scss" scoped>
	.wrap {
		padding: 0 24rpx;
	}
	
	.tabs-wrap {
		height: 110rpx;
	}
	
	
</style>