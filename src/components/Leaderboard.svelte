<script lang="ts">
  import "../base.css";

  import { Table, Button } from "sveltestrap";
  export let board: any[];
  export let name: string;
  let color = "light";
</script>

<h1 class="tw-text-xl mx-auto tw-text-center tw-py-8">{name}</h1>
<div class="tw-mx-auto tw-w-1/2 tw-rounded-lg tw-bg-slate-300 tw-pb-1">
  <Table class="tw-mx-auto text-lg">
    <thead>
      <tr class="text-center">
        <th>Place</th>
        <th>Name</th>
        <th>Score</th>
      </tr>
    </thead>
    {#if board}
    {#each board as entry}
      <tr
        class="[&:nth-child(2)]:tw-bg-yellow-200 [&:nth-child(3)]:tw-bg-gray-200 [&:nth-child(4)]:tw-bg-amber-700 tw-group hover:tw-bg-gray-200 tw-text-center tw-rounded-lg"
      >
        <th scope="row">{entry?.place}</th>
        <td class="tw-text-black"
          ><Button
            {color}
            class="border-0 tw-group-hover:tw-bg-gray-200 tw-w-full"
            href={`/people/${entry.person.slug.current}`}
            >{entry.person.name}</Button
          ></td
        >
        <td>{entry.value}</td>
      </tr>
    {/each}
    {/if}
  </Table>
</div>
