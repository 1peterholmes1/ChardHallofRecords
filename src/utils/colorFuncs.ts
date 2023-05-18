export function catToColor(category: string) {
  switch (category) {
    case 'Athletic':
      return 'tw-bg-red-400';
    case 'Video Games':
      return 'tw-bg-yellow-400';
    case 'Eating':
      return 'tw-bg-blue-400';
    default:
      return 'black';
  }
}


export const placeToColor = (place: number) => {
  if (place === 1) {
    return "tw-bg-yellow-200";
  } else if (place === 2) {
    return "tw-bg-gray-200";
  } else if (place === 3) {
    return "tw-bg-amber-700";
  } else {
    return "tw-bg-gray-100";
  }
};
