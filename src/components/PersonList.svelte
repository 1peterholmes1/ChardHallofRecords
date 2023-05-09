<script lang="ts">
  import { urlForImage } from "../utils/urlForImage";
  export let people: any[];
</script>

<ul
  class="tw-w-1/2 mx-auto tw-mt-4 tw-bg-slate-100 tw-p-4 tw-rounded-lg tw-divide-y tw-divide-slate-400"
>
  {#each people as person}
    <li class="tw-py-2 first:tw-pt-0 last:tw-pb-0">
      <a href={`/people/${person.slug.current}`}>
        <div class="tw-flex tw-flex-row tw-items-center tw-space-x-4">
          {#if person?.image}
            <img
              class="tw-rounded-full"
              width="40"
              height="40"
              src={urlForImage(person.image.asset).width(40).url()}
              alt={person.name}
            />
          {:else}
            <div
              class="tw-w-[40px] tw-h-[40px] tw-bg-gray-600 tw-rounded-full"
            />
          {/if}
          <a href={`/people/${person.slug.current}`}>{person.name}</a>
        </div>
      </a>
    </li>
  {/each}
</ul>
