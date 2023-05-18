<script lang="ts">
  export let boards: any[];
  import { catToColor } from "../utils/colorFuncs";
  // console.log(boards[0].categories);
</script>

<ul
  class="tw-w-96 mx-auto tw-mt-4 tw-bg-slate-100 tw-p-4 tw-rounded-lg tw-divide-y tw-divide-slate-400"
>
  {#each boards as board}
    <li class="tw-py-2 first:tw-pt-0 last:tw-pb-0 tw-flex sm:tw-items-center">
      <div
        class={"tw-w-[2px] sm:tw-w-2 tw-h-5 tw-mr-2 " +
          `${
            board.categories
              ? catToColor(board.categories[0].title)
              : catToColor("")
          }`}
      />
      <a href={`/leaderboards/${board.slug.current}`}>{board.title}</a>
    </li>
  {/each}
</ul>
