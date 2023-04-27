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
				    v-model="form.checkinName"
				   
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
			
			<view class="item-wrap" >
				<view class="item flex-between align-center" :class="form.sex == 0 ? 'active' : ''" @click="form.sex = 0">
					<image :src="`../../static/index/man${form.sex == 0 ? '-ac': ''}.png`" mode="widthFix" ></image>
					<text>男</text>
				</view>
				<view class="item flex-between align-center" :class="form.sex == 1 ? 'active' : ''" @click="form.sex = 1">
					<image :src="`../../static/index/woman${form.sex == 1 ? '-ac': ''}.png`" mode="widthFix" ></image>
					<text>女</text>
				</view>
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">出生日期</text>
			</view>
			
			<view class="input-wrap flex-between" style="padding: 0 20rpx;" @click="dateTimeShow = true">
				<!-- <u--input
				    placeholder="请选择出生日期"
				    v-model="form.date"
					disabled
				  ></u--input> -->
				
				<text>{{form.date | formatTime('YMD')}}</text> 
				 
				<u-icon name="arrow-right" size="20"></u-icon>   
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
				    v-model="form.idcard"
					
				  ></u--input>
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">家庭住址</text>
			</view>
			
			<view class="area-wrap">
				<view class="item" @click="onSelectArea('Province')">
					<text>{{provinceStr}}</text>
					<u-icon name="arrow-down-fill" size="15"></u-icon>
				</view>
				<view class="item" @click="onSelectArea('City')">
					<text>{{cityStr}}</text>
					<u-icon name="arrow-down-fill" size="15"></u-icon>
				</view>
				<view class="item" @click="onSelectArea('Area')">
					<text>{{areaStr}}</text>
					<u-icon name="arrow-down-fill" size="15"></u-icon>
				</view>
			</view>
			
			
			
			<view class="input-wrap">
				<u--input
				    placeholder="街道/社区"
				    v-model="form.address"
			
				  ></u--input>
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">身体状况</text>
			</view>
			<view class="item-wrap">
				<view class="item flex-center align-center" :class="form.healthState == 0 ? 'active' : '' " @click="form.healthState = 0">
					
					<text>良好</text>
				</view>
				<view class="item flex-center align-center" :class="form.healthState == 1 ? 'active' : '' " @click="form.healthState = 1">
					
					<text>其他</text>
				</view>
			</view>
			
			<view class="input-wrap" style="margin-top: 20rpx;">
				<u--textarea v-model="form.healthStatedes" placeholder="身体状况描述" confirm-type="send"></u--textarea>
			</view>
			
			
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">期望薪资</text>
			</view>
			<view class="input-wrap">
				<u--input
				    placeholder="请输入您期望的薪资"
				    v-model="form.salaryExpectation"
					type="number"
				  ></u--input>
			</view>
			
		</view>
		
		<view class="flex-end">
			<u-button class="but" text="下一步" size="large" @click="onSubmit()"></u-button>
		</view>
		
		
		<u-datetime-picker
			:show="dateTimeShow"
			v-model="form.birthDay"
			mode="date"
			:formatter="formatter"
			:maxDate="Number(new Date())"
			:minDate="0"
			@confirm="confirm"
			@cancel="cancel"
		></u-datetime-picker>
		
		
		<u-picker :show="areaShow" :columns="columns" @cancel="cancel" @confirm="areaConfirm" keyName="name"></u-picker>
		
		
	</view>
	
	
</template>

<script>
	
	
	
	export default {
		
		props: {
			type: {
				type: Number,
				default: ''
			}
		},
		
		data() {
			return {
				form: {
					type: this.type,
					checkinName: '',
					sex: 0,
					birthDay: Number(new Date()),
					date: Number(new Date()),
					phone: '',
					idcard: '',
					address: '',
					healthState: 0,
					healthStatedes: '',
					salaryExpectation: ''
				},
				 
				 
				fileList1: [],
				
				dateTimeShow: false,
				 
				areaShow: false,
				columns: [
					
				],
				
				
				
				province: 110100,
				provinceStr: '北京省',
				city: 110100,
				cityStr: '市辖区',
				area: 110101,
				areaStr: '东城区',
				
				
				provinceList: [],
				cityList: [],
				areaList: [],
				
				currentStr: ''
			}
		},
		
		watch: {
			'province'() {
				this.getCity()
				this.getArea() 
			},
			
			'city'() {
				this.getArea() 
			}
		},
		
		
		onLoad() {

		},
		
		mounted() {
			
			
		},
		
		
		methods: {
			
			onSelectArea(typeStr) {
				this.areaShow = true
				
				this.currentStr = typeStr
				
				this[`get${typeStr}`]()
				
			},
			
			async getProvince() {
				this.columns=[]
				let data = await this.$request('/content/area/selectProvince',{},'GET')
				
				if (data) {
					this.provinceList = data.data
					this.columns.push(this.provinceList)
					
					
				}
				
			},
			
			async getCity() {
				this.columns=[]
				let data = await this.$request(`/content/area/selectCity?code=${this.province}`,{},'GET')
				
				if (data) {
					this.cityList = data.data
					this.columns.push(this.cityList)
					
					this.city = this.cityList[0].code
					
					this.cityStr = this.cityList[0].name

				}
				
			}, 
			
			async getArea() {
				this.columns=[]
				let data = await this.$request(`/content/area/selectarea?code=${this.city}`,{},'GET')
				
				if (data) {
					this.areaList = data.data
					this.columns.push(this.areaList)
					
					this.area = this.areaList[0].code
					
					this.areaStr = this.areaList[0].name
				}
				
			}, 
			
			areaConfirm(e) {
				
				this[this.currentStr.toLowerCase()] = e.value[0].code
				
				this[`${this.currentStr.toLowerCase()}Str`] = e.value[0].name
					
		        this.areaShow = false
			},
			
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
				this.areaShow = false
			},
			
			confirm(e) {
				this.dateTimeShow = false
				const timeFormat = uni.$u.timeFormat
				
				console.log(this.result(e.value, e.mode))
				
				//this.form.birthDay = timeFormat(e.value, 'yyyy-mm-dd')
				
				this.form.date = e.value
				
				console.log(this.form.birthDay)
			},
			
			
			result(time, mode) {
				const timeFormat = uni.$u.timeFormat,
					toast = uni.$u.toast
				switch (mode) {
					case 'datetime':
						return timeFormat(time, 'yyyy-mm-dd hh:MM')
					case 'date':
						return timeFormat(time, 'yyyy-mm-dd')
					case 'year-month':
						return timeFormat(time, 'yyyy-mm')
					case 'time':
						return time
					default:
						return ''
				}
			},
			
			async onSubmit() {
				
				console.log(this.form)
				let {checkinName,phone,idcard,address,healthStatedes,salaryExpectation} = this.form
				
				if (!checkinName) return this.$tools.toast('请输入姓名')
				if (!this.$verification.mobile(phone)) return this.$tools.toast('请输入正确的手机号')
				if (!this.$verification.idCard(idcard)) return this.$tools.toast('请输入正确的身份证号')
				if (!address) return this.$tools.toast('请输入街道/社区')
				if (!healthStatedes) return this.$tools.toast('身体状况描述')
				if (!salaryExpectation) return this.$tools.toast('请输入您期望的薪资')
				
				this.form.birthDay = this.result(this.form.birthDay,'date')
	
				let data = await this.$request('/checkIn/saveCheckIn',this.form)
				
				if (data) {
					this.$emit('next',1)
				}
				
				
				
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
			
			.active {
				text {
					color: #000000;
				}
				border: 2rpx solid #000;
			}
			
		}
		
	}
	
	
	.but {
		margin: 0;
		width: 240rpx;
		color: #fff;
		background: #1250E5;
	}
	
	
	
	.area-wrap {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
		.item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			width: 200rpx;
			height: 100rpx;
			background: #F6F8FC;
			border-radius: 13rpx;
		}
	}
	
	
</style>