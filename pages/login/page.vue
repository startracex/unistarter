<script setup>
import A from "~/components/Link";
</script>
<template>
	<view class="container">
		<view class="form-pad form-ico">
			<uni-forms @submit="onsubmit" ref="form" :modelValue="FormData" :rules="rules">
				<uni-forms-item name="email" required>
					<uni-easyinput prefixIcon="email-filled" v-model="FormData.email" placeholder="电子邮箱" />
				</uni-forms-item>
				<uni-forms-item name="password" required>
					<uni-easyinput prefixIcon="locked-filled" type="password" v-model="FormData.password" placeholder="密码" />
				</uni-forms-item>
				<button class="button" type="primary" @click="submit('form')">提交</button>
			</uni-forms>
			<view class="buttom">
				<A url="/signup">
					<text class="gray">
						注册
					</text>
				</A>
			</view>
		</view>
	</view>
</template>

<script>
import EmailRules from "~/utils/rules/email.js";
import PasswordRules from "~/utils/rules/password.js";
import { useUser } from "~/context/user.js";
import { jump } from "~/utils/link.js";
export default {
	data() {
		return {
			FormData: {
				email: "",
				password: "",
			},
			rules: {
				email: {
					rules: EmailRules
				},
				password: {
					rules: PasswordRules
				}
			}

		};
	},
	methods: {
		submit() {

			const userhook = useUser();
			this.$refs.form.validate().then(res => {
				uniCloud.callFunction({
					name: "testing",
					data: res
				}).then(res => {
					const userdata = res.result.data;
					userhook.login(userdata);
					uni.showToast({
						title: '登录成功',
						icon: 'success',
						duration: 2000
					});
					setTimeout(() => {
						jump("/");
					}, 1400);
				});

			}).catch(err => {
			});
		}
	}
};
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
