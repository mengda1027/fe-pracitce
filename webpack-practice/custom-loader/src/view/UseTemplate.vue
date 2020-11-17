<template>
  <div id="user-list">
    <div>@include(../template/list.html)</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2020-11-14",
          name: "MDMD",
          address: "成都天府三街",
        },
        {
          date: "2020-11-14",
          name: "MDMD",
          address: "成都天府三街 ",
        },
        {
          date: "2020-11-14",
          name: "MDMD",
          address: "成都天府三街 ",
        },
        {
          date: "2020-05-03",
          name: "MDMD",
          address: "成都天府三街",
        },
      ],
    }
  },
}
</script>

<style></style>
