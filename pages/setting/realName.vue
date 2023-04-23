<template>
	<view>
		<navTop :title="'实名认证'"></navTop>
		<view class="content-wrap">
			
			<view class="card-wrap">
				
				<view class="flex-column">  
					<text class="title">上传身份证照片</text>
					
					<text class="txt">根据监管要求身份证照片仅用于实名认证</text>
				</view>
				
				<u-upload
					:fileList="fileList1"
					@afterRead="afterRead"
					@delete="deletePic"
					name="1"
					multiple
					:maxCount="1"
					width="250"
					height="150"
				>
					<image src="https://cdn.uviewui.com/uview/demo/upload/positive.png" 
					mode="widthFix" style="width: 250px;height: 150px;"></image>
				</u-upload>
			</view>
			
			
		</view>
		
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	export default {
		data() {
			return {
				fileList1: [],
			}
		},
		
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
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
		
		components: {
			navTop
		}
		
	}
</script>

<style lang="scss" scoped>
	.content-wrap {
		padding: 0 24rpx;
	}
	
	
	.card-wrap {
		padding: 30rpx;
		background: #fff;
		border-radius: 20rpx;
	}
	
	.title {
		padding-bottom: 15rpx;
		color: #000000;
		font-size: 28rpx;
		font-weight: 700;
	}
	
	.txt {
		padding-bottom: 30rpx;
		color: #7A8393;
		font-size: 22rpx;
	}
	
</style>