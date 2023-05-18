<script lang="ts">
  import { catToColor } from "../utils/colorFuncs";
  export let cats: any[];
</script>

<ul
  class="tw-w-96 mx-auto tw-mt-4 tw-bg-slate-100 tw-p-4 tw-rounded-lg tw-divide-y tw-divide-slate-400"
>
  {#each cats as cat}
    <li class="tw-py-2 first:tw-pt-0 last:tw-pb-0">
      <h1 class="tw-font-bold">{cat.title}</h1>
      <div class="tw-flex">
        <!-- <div -->
        <!--   class={"tw-w-[2px] tw-mt-2 sm:tw-w-2 tw-h-4 tw-mr-2 " + -->
        <!--     `${cat ? catToColor(cat.title) + " " : catToColor(" ")} tw-h-[${ -->
        <!--       cat.boards.length * 10 -->
        <!--     }px]`} -->
        <!-- /> -->
        <ul>
          {#if cat.boards}
            {#each cat.boards as board}
              <li class="tw-py-1 sm:tw-items-center">
                <div
                  class={" tw-absolute tw-py-4 tw-w-2 tw-h-4 tw-mr-2 " +
                    `${
                      board.categories ? catToColor(cat.title) : catToColor("")
                    }`}
                />
                <a class="tw-ml-4" href={`/leaderboards/${board.slug.current}`}
                  >{board.title}</a
                >
              </li>
            {/each}
          {/if}
        </ul>
      </div>
    </li>
  {/each}
</ul>
