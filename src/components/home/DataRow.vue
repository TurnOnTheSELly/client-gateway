<script setup>

  defineProps (['rowObject', 'searchKeys'])

</script>

<template>
  <table>

    <tr>
      <!-- <th
        v-for="(header, i) in searchKeys"
        :key="`${header}${i}`"
        class="header-shows"
      >
      {{ header }}
      </th> -->
    </tr>
    <tr
      v-for="entity in rowObject"
      :key="`entity-${entity.name}`"
      class="table-rows"
    >
      <td
        v-for="(header, i) in searchKeys"
        :key="`${header}-${i}`"
      >
        <slot :name="`column${i}`" :entity="entity"> </slot>
      </td>
    </tr>
  </table>
</template>


<style scoped>
.header-shows {
  background-color: var(--base);
  color: var(--gold)
}
.table-rows {
  /* display: inline; */
  color: var(--iris);
  background-color: var(--overlay);
  border: 5px solid var(--foam);
  border-radius: 25px;
  /* margin: 5px;
  padding: 5px;
  max-height: 75px;
  overflow: scroll; */
}
.table-rows:nth-child(odd) {
  /* display: inline; */
  color: var(--foam);
  background-color: var(--surface);
  border: 5px solid var(--foam);
  border-radius: 25px;
  /* margin: 5px;
  padding: 5px;
  max-height: 75px;
  overflow: scroll; */
}

.data {
  display: inline-block;
  padding: 10px 20px;
  margin: 3px;

}
</style>