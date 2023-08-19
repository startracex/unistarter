<script setup>
import { useUser } from "~/context/user.js";
import { jump } from "~/utils/link";
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
</script>

<style></style>
