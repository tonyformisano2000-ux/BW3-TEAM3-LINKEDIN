import martinaProfile from "../assets/martina-profile.jpg";

export const USERS = {
  martina: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBiNTYzOTA2YmJlOTAwMTVkZWU1OGIiLCJpYXQiOjE3NzkxMjc4NjYsImV4cCI6MTc4MDMzNzQ2Nn0.JZjN2osgizy9f_4tzKIJOa3qHhRyBgZO9IpElXOHt8Q",
    mockProfile: {
      _id: "6a0ae6f306bbe90015dee586",
      name: "Martina",
      surname: "Aceto",
      email: "martina.aceto@email.it",
      username: "martina.aceto",
      title: "Frontend Developer",
      area: "Lamezia Terme, Calabria, Italia",
      image: martinaProfile,
    },
  },

  amir: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBkNmUxNTNhMDNhODAwMTUwZDkzYjkiLCJpYXQiOjE3NzkyNjUwNDUsImV4cCI6MTc4MDQ3NDY0NX0.BWi5oiS25jHoHiG3e_wOa4qjh-EwrcfiYLHl5D9MqTU",
    mockProfile: {
      _id: "6a0d6e153a03a800150d93b9",
      name: "Amir",
      surname: "Ka",
      email: "amirka@gmail.com",
      username: "Amir Ka",
      title: "FullStack Dev on the making",
      area: "Sicily, Italy",
      image: "https://placecats.com/300/300",
    },
  },

  ale: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBkN2Y3YjNhMDNhODAwMTUwZDkzZDgiLCJpYXQiOjE3NzkyNjk1MDAsImV4cCI6MTc4MDQ3OTEwMH0.cnpQ4eVvowZig2urCVzQO6HJltEskBFzLhVVcxgaV9o",
    mockProfile: {
      _id: "69e1f2fc739f8700157ab09f",
      name: "Alessandro",
      surname: "Nappa",
      email: "alenappa@gmail.com",
      username: "Ale Nappa",
      title: "FullStack Dev on the making",
      area: "Milan, Italy",
      image: "https://placecats.com/300/300",
    },
  },

  tony: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBkODhlYzNhMDNhODAwMTUwZDkzZmEiLCJpYXQiOjE3NzkyNzE5MTYsImV4cCI6MTc4MDQ4MTUxNn0.2i98UaMB8LsHLInc7wUy-T2iLTpQtbEcBse8NcnTcyE",
    mockProfile: {
      _id: "6a0d88ec3a03a800150d93fa",
      name: "Antonio",
      surname: "Formisano",
      email: "antoformi@gmail.com",
      title: "FullStack Dev quando sono concentrato",
      area: "Rome, Italy",
      image: "https://placecats.com/300/300",
    },
  },
  tancredi: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZGQxMjA2YmJlOTAwMTVkZWU1ODIiLCJpYXQiOjE3NzkwOTY4NTAsImV4cCI6MTc4MDMwNjQ1MH0.-RAXkdX494lDP3FHaEuVnplFQY3j2cpcWeQXEL5YGVU",
    mockProfile: {
      _id: "6a0add1206bbe90015dee582",
      name: "Tancredi",
      surname: "D'Angelo",
      email: "tancredi.dangelo.22@gmail.com",
      username: "tancredi.dangelo",
      title: "Nullafacente",
      area: "Palermo, Italy",
      image: "https://placecats.com/300/300",
    },
  },
};

export const ACTIVE_USER = "amir";

export const ACTIVE_ACCOUNT = USERS[ACTIVE_USER];

export const TOKEN = ACTIVE_ACCOUNT.token;

export const MOCK_PROFILE = ACTIVE_ACCOUNT.mockProfile;
