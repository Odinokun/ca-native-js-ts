type StudentType = {
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType;
  technologies: TechnologiesType[];
};

type AddressType = {
  streetTitle: string;
  city: LocalCityType;
};

type LocalCityType = {
  cityTitle: string;
  county: string;
};

type TechnologiesType = {
  id: number;
  title: string;
};

const student: StudentType = {
  name: 'John Doe',
  age: 16,
  isActive: true,
  address: {
    streetTitle: '123 Main St',
    city: {
      cityTitle: 'Springfield',
      county: 'USA',
    },
  },
  technologies: [
    { id: 1, title: 'HTML' },
    { id: 2, title: 'CSS' },
    { id: 3, title: 'JS' },
    { id: 4, title: 'React' },
  ],
};

console.log(student.address.city.cityTitle); // Springfield
