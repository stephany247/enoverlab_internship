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

  updateUser: async (updateData) => {
    const res = await api.patch("/users/me", updateData);
    return res.data;
  },

  deleteUser: async () => {
    const res = await api.delete("/users/me");
    return res.data;
  },
};
