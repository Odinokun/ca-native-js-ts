export type CityType = {
  title: string;
  houses: HouseType[];
  governmentBuildings: Array<string>;
  citizensNumber: number;
};

type HouseType = {
  buildedAt: number;
  repaired: boolean;
  address: AddressType;
};

type AddressType = {
  number: number;
  street: StreetType;
};

type StreetType = {
  title: string;
};
