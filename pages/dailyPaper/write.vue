<template>
	<view class="flex-column">
		<navTop :title="''" :leftText="'取消'"></navTop>
		<view class="content-wrap">
			<u--textarea v-model="txt" placeholder="说点什么把.." height="300" style="padding: 10rpx;" confirm-type="send"></u--textarea>
			
			<u-upload
				:fileList="fileList1"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="1"
				width="150"
				height="150"
			>
				
			</u-upload>
			
			<view class="flex">
				<u-tag text="猪猪大酒店" shape="circle" size="mini" bgColor="#F3F5F9" color="#7A8393" borderColor="#F3F5F9" icon="map" ></u-tag>
				
				
			</view>
			
		</view>
		
		<view class="fixed" style="bottom: 200rpx;left: 0;right: 0;">
			<u-button text="提交" class="custom-style" size="large"></u-button>
		</view>
		
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	
	export default {
		data() {
			return {
				txt: '',
				fileList1: []
			}
		},
		
		
		onReady() {
			
		},
		
		methods:{
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			
			
			async afterRead(event) {
				
				console.log(event)
				
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			
			
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			}
		},
		
		
		components:{
			navTop
		}
		
	}
</script>

<style>
	
	page {
		background: #fff; 
	}
</style>


<style lang="scss" scoped>
	.content-wrap {
		padding: 0 30rpx;
	}
	
	
	.custom-style {
		margin: 0 auto;
		width: 360rpx;
		font-size: 40rpx;
		color: #fff;
		background: #1250E5;
	}
	
</style>