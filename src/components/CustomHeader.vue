<template>
  <a-row type="flex" justify="space-between" algin="center">
    <a-col :span="12"></a-col>
    <a-col>
      <a-space align="center">
        <a-avatar>
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        <span>test</span>
      </a-space>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.custom-header {
  background: #fff;
  padding: 0;
}
</style>
