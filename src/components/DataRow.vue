<script setup>

  defineProps (['rowObject', 'searchKeys'])

</script>

<template>
  <table>

    <tr>
      <th
        v-for="(header, i) in searchKeys"
        :key="`${header}${i}`"
        class="header-shows"
      >
      {{ header }}
      </th>
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
  background-color: var(--gold);
  color: var(--base)
}
.table-rows {
  /* display: inline; */
  color: var(--base);
  background-color: var(--iris);
  border: 5px solid var(--foam);
  border-radius: 25px;
  /* margin: 5px;
  padding: 5px;
  max-height: 75px;
  overflow: scroll; */
}
.table-rows:nth-child(odd) {
  /* display: inline; */
  background-color: var(--foam);
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