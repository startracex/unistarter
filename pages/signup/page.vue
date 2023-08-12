<script setup>
import A from "@/components/Link"
</script>
<template>
	<view class="container">
		<view class="form-pad form-ico">
			<uni-forms @submit="submit" ref="form" :modelValue="FormData" :rules="rules">
				<uni-forms-item name="email" required>
					<uni-easyinput prefixIcon="email-filled" v-model="FormData.email" placeholder="电子邮箱" />
				</uni-forms-item>
				<uni-forms-item name="password" required>
					<uni-easyinput prefixIcon="locked-filled" type="password" v-model="FormData.password" placeholder="密码" />
				</uni-forms-item>
				<uni-forms-item name="passwordc">
					<uni-easyinput prefixIcon="refreshempty" type="password" v-model="FormData.passwordc" placeholder="确认密码" />
				</uni-forms-item>
				<button class="button" type="primary" @click="submit('form')">提交</button>
			</uni-forms>
			<view class="buttom">
				<A url="/forget" class="tonew">
					<text>
						忘记密码
					</text>
				</A>
				<A url="/login" class="gray">
					<text>
						登录
					</text>
				</A>

			</view>
		</view>
	</view>
</template>

<script>
import EmailRules from "@/utils/rules/email.js"
import PasswordRules from "@/utils/rules/password.js"
import { useUser } from "@/context/user.js"
export default {
	data() {
		return {

			FormData: {
				email: "",
				password: "",
				passwordc: "",
			},
			rules: {
				email: {
					rules: EmailRules
				},
				password: {
					rules: PasswordRules
				},
				passwordc: {
					rules: [{
						validateFunction: function (rule, value, data, callback) {
							if (value) {
								return value === data.password
							}
							return false
						},
						errorMessage: '密码不一致',
					}]
				}
			}

		}
	},
	methods: {
		submit() {
			const userhook = useUser()
			this.$refs.form.validate().then(res => {
				uniCloud.callFunction({
					name: "testing",
					data: res
				}).then(res => {
					const userdata = res.result.data
					userhook.login(userdata)
					uni.showToast({
						title: '注册成功',
						icon: 'success',
						duration: 2000
					})
					setTimeout(() => {
						jump("/")
					}, 1400);
				})

			}).catch(err => {
			})
		}
	}
}
</script>

<style>
.buttom {
	display: flex;
	justify-content: space-around;
	width: 100%;
	font-size: .8em;
	margin-top: .8em;
}
</style>
