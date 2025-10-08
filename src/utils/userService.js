import api from "./api";

const getCurrentUserData = async () => {
  const res = await api.get("/users/me");
  return res.data.data[0];
};

export const userService = {
  getCurrentUser: async () => {
    const user = await getCurrentUserData();
    return user;
  },

  getUserReminders: async () => {
    const user = await getCurrentUserData();
    return user?.reminders || [];
  },

  getUserSchedules: async () => {
    const user = await getCurrentUserData();
    return user?.schedules || [];
  },

  getContacts: async () => {
    const res = await api.get("/contacts");
    return res.data.data || [];
  },

  deleteUser: async () => {
    const res = await api.delete("/users/me");
    return res.data;
  },
};
