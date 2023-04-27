<template>
	<view>
		<navTop :title="'发稿'"></navTop>
		
		<view class="">
			<u--input
			    placeholder="请输入标题"
			    border="surround"
			    v-model="form.title"
			    fontSize="23"
				:customStyle="{padding: '10px 20px'}"
			  ></u--input>
			<u-line color="#EEEEEE"></u-line>
			<view style="padding: 10px">
				<u--textarea v-model="form.content" placeholder="请输入内容" height="200" maxlength="600" count confirm-type="send"></u--textarea>
			</view>
			
			<view style="padding: 10px;">
				<u-upload
					:fileList="fileList1"
					@afterRead="afterRead"
					@delete="deletePic"
					name="1"
					multiple
					:maxCount="9"
					width="110"
					height="110"
				>
				</u-upload>
			</view>
			
			<view class="but-wrap">
				<u-button class="but" text="发贴" @click="onAddBbs()" size="large"></u-button>
			</view>
			
			
		</view>
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	export default {
		data() {
			return {
				form: {
					title: '',
					content: ''
				},
				
				fileList1: []
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
			},
			
			
			async onAddBbs() {
				
				let {title,content} = this.form
				
				if (!title) this.$tools.toast('请输入标题')
				if (!content) this.$tools.toast('请输入内容')
				
				let data = await this.$request('/content/bbs/addBbs',this.form)
				
				if (data) {
					this.$tools.toast('发贴成功,等待审核')
					setTimeout(() => {
						this.$tools.back(1)
					},2000)
				}
			} 
			
		},
		
		components: {
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
	.but-wrap {
		padding: 80rpx 0 0;
	}
	
	.but {
		width: 340rpx;
		color: #fff;
		background: #1250E5;
	}
	
</style>