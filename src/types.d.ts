interface User {
  gender: Gender;
  name: {
    title: Title;
    first: string;
    last: string;
  };
  location: {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: Coordinates;
    timezone: Timezone;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: Date;
    age: number;
  };
  registered: {
    date: Date;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: null | string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

enum Gender {
  Female = "female",
  Male = "male",
}

interface Option {
  value: string | number;
  label: string;
}

interface Filters {
  results: number;
  country: string | null;
  age: string | null;
  genre: string | null;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Street {
  number: number;
  name: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Name {
  title: Title;
  first: string;
  last: string;
}

enum Title {
  MS = "Ms",
  Madame = "Madame",
  Mademoiselle = "Mademoiselle",
  Miss = "Miss",
  Monsieur = "Monsieur",
  Mr = "Mr",
  Mrs = "Mrs",
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}



