import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

const customComponents = {
  types: {
    image: ({ value }: any) => {
      return `
        <picture>
          <source
            srcset="${urlForImage(value.asset).format('webp').url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    }
  }
};

export function sanityPortableText(portableText: any) {
  return portableTextToHtml(portableText, customComponents);
}
