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
      area: "Italy",
      image: "https://placecats.com/300/300",
    },
  },
};

export const ACTIVE_USER = "martina";

export const ACTIVE_ACCOUNT = USERS[ACTIVE_USER];

export const TOKEN = ACTIVE_ACCOUNT.token;

export const MOCK_PROFILE = ACTIVE_ACCOUNT.mockProfile;
