<script lang="ts">
  export let writeups: any[];
  let years = writeups.map((w) => w.year);
  years = [...new Set(years)];
</script>

<ul
  class="tw-w-96 mx-auto tw-mt-4 tw-bg-slate-100 tw-p-4 tw-rounded-lg tw-divide-y tw-divide-slate-400"
>
  {#each years as y}
    <li class="tw-py-2 first:tw-pt-0 last:tw-pb-0">
      <div class="tw-flex">
        <span class="tw-text-gray-400">Wk</span>
        <h3 class="tw-w-full tw-text-center tw-text-xl">{y}</h3>
      </div>
      <ul>
        {#each writeups.filter((w) => w.year === y) as w}
          <li class="tw-py-1 sm:tw-items-center tw-pl-2">
            {w.week}<a class="tw-ml-4" href={`/fantasy/${w.slug.current}`}
              >{w.title}</a
            >
          </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>
