<template>
  <van-cell is-link @click="showPopup"> 显示地址 </van-cell>
  <van-popup v-model:show="show" position="bottom">
    <van-area
      title="标题"
      @confirm="confirmHandle"
      :area-list="areaList"
      :columns-placeholder="['请选择', '请选择', '请选择']"
    />
  </van-popup>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
import areaList from "./area"

function useArea() {
  const show = ref(false)
  const showPopup = () => {
    show.value = true
  }
  const confirmHandle = () => {
    show.value = false
  }
  return {
    show,
    showPopup,
    confirmHandle,
  }
}

export default defineComponent({
  name: "Area",

  setup() {
    return {
      areaList,
      ...useArea(),
    }
  },
})
</script>
