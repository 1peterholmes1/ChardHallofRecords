<script lang="ts">
  import "../base.css";

  import { Table, Button } from "sveltestrap";
  export let board: any[];
  export let name: string;
  let color = "light";
  import { placeToColor } from "../utils/colorFuncs";
</script>

<h1 class="tw-text-xl mx-auto tw-text-center tw-py-8">{name}</h1>
<div class="tw-mx-auto tw-w-96 tw-rounded-lg tw-bg-slate-300 tw-pb-1">
  {#if board}
    <Table class="tw-mx-auto text-lg">
      <thead>
        <tr class="text-center">
          <th>Place</th>
          <th>Name</th>
          {#if board[0].value}
            <th>Score</th>
          {/if}
        </tr>
      </thead>
      {#each board as entry}
        <tr
          class={`${placeToColor(entry?.place)}` +
            " tw-group tw-text-center tw-rounded-lg"}
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
          {#if entry.value}
            <td>{entry.value}</td>
          {/if}
        </tr>
      {/each}
    </Table>
  {:else}
    <h1 class="tw-text-xl mx-auto tw-text-center tw-py-8">No entries yet</h1>
  {/if}
</div>
