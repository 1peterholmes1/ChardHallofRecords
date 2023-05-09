<script lang="ts">
  export let name: string;
  export let bio: any;
  export let image: any;
  import { PortableText } from "@portabletext/svelte";
  // import { urlForImage } from "../utils/urlForImage";
  // console.log(urlForImage(image.asset));
</script>

<div class="mx-auto tw-bg-gray-100 tw-w-96 tw-rounded-lg tw-p-4">
  <div class="tw-flex tw-flex-row tw-space-x-4 tw-items-center">
    <div class="">
      {#if image != ""}
        <img class="tw-rounded-full" width="100" alt="" src={image} />
      {:else}
        <div class="tw-w-[100px] tw-h-[100px] tw-rounded-full tw-bg-gray-400" />
      {/if}
    </div>
    <h1 class="tw-text-2xl">{name}</h1>
  </div>
  <div class="tw-p-4">
    {#if bio}
      <PortableText value={bio} />
    {/if}
  </div>
  <!-- <div class=""> -->
  <!--   {#if entries} -->
  <!--     {console.log(entries)} -->
  <!--   {/if} -->
  <!-- </div> -->
</div>
