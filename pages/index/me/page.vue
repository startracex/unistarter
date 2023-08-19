<script setup>
import { useUser } from '~/context/user';
const user = useUser();
</script>
<template>
	<view class="container">
		<view class="form-pad">
			<view class="input-file">
				<uni-file-picker :value="[{

					url: '/static/tab/all.png',
					extname: 'png',
					name: 'shuijiao.png'

				}]" ref="ava" limit="1" disable-preview :imageStyles="imageStyles" file-mediatype="image">选择</uni-file-picker>
			</view>
			<uni-forms @submit="submit" ref="form" :modelValue="formData" :rules="rules">
				<uni-forms-item label="姓名" name="name">
					<uni-easyinput type="text" v-model="formData.name" />
				</uni-forms-item>
				<uni-forms-item label="邮箱" name="email">
					<uni-easyinput type="email" v-model="formData.email" />
				</uni-forms-item>
				<uni-forms-item label="电话" name="phone">
					<uni-easyinput type="phone" v-model="formData.phone" />
				</uni-forms-item>
				<button @click="submit(form)" type="primary">同步</button>
				<button @click="user.logout()" class="logout" type="warn">登出</button>
			</uni-forms>
		</view>
	</view>
</template>
<script>
import { useUser } from '~/context/user'

export default {
	setup() {
		const user = useUser()
		console.log(user);
	},
	data() {
		const user = useUser()
		const userinfo = user.data()
		return {
			formData: {
				name: user.data("name"),
				email: user.data("email"),
				phone: user.data("phone"),
			},
			imageStyles: {
				width: 84,
				height: 84,
				border: {
					radius: '50%',
				}
			},
			avatarValue: {
				url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg',
				extname: 'png',
				name: 'uniapp-logo.png'
			},
		}
	},
	methods: {
		submit() {
			const userhook = useUser()
			this.$refs.form.validate().then(res => {
				const data = {
					...res,
					avatar: this.$refs.ava.files[0]?.url
				}
				log(data)
				userhook.update(data)
			})
		}
	},
}
</script>


<style>
.logout {
	margin-top: 1em;
}

.custom-image-box {
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.input-file {
	flex: none;
	width: fit-content;
	margin-bottom: 1.15em;
}


.text {
	font-size: 14px;
	color: #333;
}
</style>
