<template>
	<view>
		<view style="padding-bottom: 20rpx;">
			<u-tabs :list="tabsList" @click="onTab"  lineColor="#000000" lineWidth="30"
			:activeStyle="{
			    color: '#303133',
			    fontWeight: 'bold',
			}"
			itemStyle="padding-left: 15px; padding-right: 15px; height: 50px;"
			
			></u-tabs>
		</view>
		
		<!-- <view class="wrap"> -->
			<view v-show="currentTab == 0" style="padding: 0 20rpx;">
				<forum></forum>
			</view>
			
			<view v-show="currentTab == 1">
				
				<!-- <u-subsection :list="list" :current="current" @change="sectionChange" fontSize="15" inactiveColor="#ADB1C0" activeColor="#000000"></u-subsection> -->
				
				<growthCenter></growthCenter>
			</view>
			
			<view v-show="currentTab == 2">
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
					{
						name: '学无止境'
					}
				],
				
				currentTab: 0,
				
				list: ['保洁', '餐厅', '客房', '厨师','司机'],
				current: 0,
				
			}
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
	
	
</style>