// MarinaHacks 6.0 prizes, listed left to right as they appear on the page.
// PrizeImg can be one image path, or a list of paths for a category with
// more than one prize (they show side by side between the rocks).

export type PrizeEntry = {
  name: string;
  // what the prize actually is, shown in smaller text under the category
  item?: string;
  PrizeImg: string | string[];
  // Optional: move this prize up (negative) or down (positive) between the rocks,
  // as a % of the image's height, if its picture has uneven empty space
  imgOffsetY?: string;
};

const IMG = "/images/PrizesAssets";

export const Prize: PrizeEntry[] = [
  {
    name: "BEST OVERALL",
    item: "Beats Solo Buds & HyperX Keyboard",
    PrizeImg: [`${IMG}/OverallOne.png`, `${IMG}/OverallTwo.png`],
  },
  {
    name: "BEST TECHNICAL",
    item: "HyperX Headset",
    PrizeImg: `${IMG}/Technical.png`,
  },
  {
    name: "BEST SOCIAL GOOD",
    item: "WeFone B6 GPS Drone",
    PrizeImg: `${IMG}/Social Good.png`,
    imgOffsetY: "-12%",
  },
  {
    name: "BEST ENTERTAINMENT",
    item: "4K Digital Camera",
    PrizeImg: `${IMG}/Entertainment.png`,
  },
];