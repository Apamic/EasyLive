<template>
	<view class="card">
		<view class="title">
			基本信息
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">姓名</text>
			</view>
			
			<view class="input-wrap">
				<u--input
				    placeholder="请输入姓名"
				    v-model="form.name"
				   
				  ></u--input>
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">上传本人照片</text>
			</view>
			
			<u-upload
				:fileList="fileList1"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="1"
			></u-upload>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">性别</text>
			</view>
			
			<view class="item-wrap">
				<view class="item flex-between align-center">
					<image :src="`../../static/index/man.png`" mode="widthFix" ></image>
					<text>男</text>
				</view>
				<view class="item flex-between align-center">
					<image :src="`../../static/index/woman.png`" mode="widthFix" ></image>
					<text>女</text>
				</view>
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">出生日期</text>
			</view>
			
			<view class="input-wrap" @click="dateTimeShow = true">
				<!-- <u--input
				    placeholder="请选择出生日期"
				    v-model="form.date"
					disabled
				  ></u--input> -->
				  
				  
				<text>{{form.date}}</text>  
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">联系电话</text>
			</view>
			
			<view class="input-wrap">
				<u--input
				    placeholder="请输入联系电话"
				    v-model="form.phone"
					mode="number"
				  ></u--input>
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">身份证号</text>
			</view>
			
			<view class="input-wrap">
				<u--input
				    placeholder="请输入身份证号"
				    v-model="form.id"
					
				  ></u--input>
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">家庭住址</text>
			</view>
			
			<view class="input-wrap">
				<u--input
				    placeholder="街道/社区"
				    v-model="form.area"
			
				  ></u--input>
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">身体状况</text>
			</view>
			<view class="item-wrap">
				<view class="item flex-center align-center">
					
					<text>良好</text>
				</view>
				<view class="item flex-center align-center">
					
					<text>其他</text>
				</view>
			</view>
			
			<view class="input-wrap" style="margin-top: 20rpx;">
				<u--textarea v-model="form.desc" placeholder="身体状况描述" confirm-type="send"></u--textarea>
			</view>
			
			
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">期望薪资</text>
			</view>
			<view class="input-wrap">
				<u--input
				    placeholder="请输入您期望的薪资"
				    v-model="form.value"
					type="number"
				  ></u--input>
			</view>
			
		</view>
		
		<view class="flex-end">
			<u-button class="but" text="下一步" size="large" @click="onSubmit()"></u-button>
		</view>
		
		
		<u-datetime-picker
			:show="dateTimeShow"
			v-model="form.date"
			mode="date"
			:formatter="formatter"
			@confirm="confirm"
			@cancel="cancel"
		></u-datetime-picker>
		
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					gender: 0,
					date: Number(new Date()),
					phone: '',
					id: '',
					value: '',
					condition: '',
					desc: ''
				},
				 
				 
				fileList1: [],
				
				dateTimeShow: false 
			}
		},
		
		
		methods: {
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			},
			
			
			cancel() {
				this.dateTimeShow = false
			},
			
			confirm(e) {
				this.dateTimeShow = false
				const timeFormat = uni.$u.timeFormat
				
				console.log(this.result(e.value, e.mode))
				
				this.form.date = timeFormat(e.value, 'yyyy-mm-dd')
				
				console.log(this.form.date)
			},
			
			
			result(time, mode) {
				const timeFormat = uni.$u.timeFormat,
					toast = uni.$u.toast
				switch (mode) {
					case 'datetime':
						return toast(timeFormat(time, 'yyyy-mm-dd hh:MM'))
					case 'date':
						return timeFormat(time, 'yyyy-mm-dd')
					case 'year-month':
						return toast(timeFormat(time, 'yyyy-mm'))
					case 'time':
						return toast(time)
					default:
						return ''
				}
			},
			
			onSubmit() {
				this.$emit('next',1)
			},
			
			
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
		
		components: {
			
		}
		
	}
	
</script>

<style lang="scss" scoped>
	
	/deep/ .u-textarea {
		background: transparent;
	}
	
	
	.card {
		padding: 30rpx 38rpx 30rpx;
		background: #fff;
		border-radius: 10rpx;
	}
	
	.title {
		margin-bottom: 30rpx;
		color: #000000;
		font-size: 30rpx;
	}
	
	.row {
		padding-bottom: 40rpx;
		.label {
			font-size: 22rpx;
			color: #7A8393;
		}
		.input-wrap {
			display: flex;
			align-items: center;
			padding: 10rpx;
			min-height: 100rpx;
			line-height: 100rpx;
			background: #F6F8FC;
			border-radius: 13rpx;
		}
		
		.item-wrap {
			display: flex;
			justify-content: space-between;
			.item {
				padding: 0 40rpx;
				width: 310rpx;
				height: 100rpx;
				background: #F6F8FC;
				border-radius: 13rpx;
				
				text {
					color: #ADB1C0;
					font-size: 28rpx;
				}
				
				image {
					width: 40rpx;
				}
				
			}
		}
		
	}
	
	
	.but {
		margin: 0;
		width: 240rpx;
		color: #fff;
		background: #1250E5;
	}
	
</style>