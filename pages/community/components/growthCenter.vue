<template>
	<view>
		<view class="wrap align-center">
			<u-subsection :list="typeList" :current="current" @change="sectionChange" fontSize="15" inactiveColor="#ADB1C0" activeColor="#000000" keyName="defineName"></u-subsection>
		</view>
		
		<scroll-view scroll-y class="scroll-wrap" :style="{height:(navHeight - 132)+'px'}">
			
			<view class="list-wrap">
				<view class="column">
					<view v-for="(item,index) in leftList" :key="index" @click="$tools.jump(`./videoPlay?item=${JSON.stringify(item)}`)">
						<videoCard :item="item"></videoCard>
					</view>
				</view>
				<view class="column">
					<view v-for="(item,index) in rightList" :key="index" @click="$tools.jump(`./videoPlay?item=${JSON.stringify(item)}`)">
						<videoCard :item="item"></videoCard>
					</view>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import scrollHeight from '@/mixis/scrollHeight.vue'
	import videoCard from '@/components/videoCard.vue'
	export default {
		mixins: [scrollHeight],
		
		props: {
			dataList: {
				type: Array,
				default: () => []
			}
		},
		
		
		data() {
			return {
				list: ['保洁', '餐厅', '客房', '厨师','司机'],
				current: 0,
				
				lists: [],
				
				leftList: [],
				rightList: [],
				typeList: []
			}
		},
		
		
		mounted() {
			this.getDictionaryList()
			
		},
		
		methods: {
			sectionChange(index) {
				
				this.current = index
				
				this.getCultivateCategory()
			},
			
			
			async getCultivateCategory() {
				
				this.leftList = []
				this.rightList = []
				
				let data = await this.$request(`/front/cultivate/cultivateList?cultivateCategory=${this.typeList[this.current].defineCode}`,{},'GET')
				
				if (data) {
					this.lists = data.data
					
					let i = 0;
					while (i < this.lists.length) {
					    this.leftList.push(this.lists[i++]);
					    if (i < this.lists.length) {
					        this.rightList.push(this.lists[i++]);
					    }
					}
					
					//console.log(data)
				}
				
			},
			
			async getDictionaryList() {
				let data = await this.$request('/system/getDictionaryList?code=10010002',{},'GET')
				
				if (data) {
					this.typeList = data.data
					//console.log(this.typeList)
					
					this.getCultivateCategory()
					
				}
				
			},
			
			
			
		},
		
		components: {
			videoCard
		}
		
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 20rpx 10rpx;
		height: 120rpx;
	}
	
	.list-wrap {
		display: flex;
		flex-direction: row; 
		justify-content: space-between;
		padding: 0 30rpx;
	}
	
	.column {
	    display: flex; 
	    flex-direction: column; 
	}
	
</style>