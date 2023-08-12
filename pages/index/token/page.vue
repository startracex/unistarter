<script setup>
import { useUser } from "@/context/user.js";
import { jump } from "@/utils/link";
import { ref } from "vue";
const userhook = useUser();
if (!userhook.data()) {
	jump("/login");
}

</script>
<template>
	<view>

	</view>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>

<style>
</style>
