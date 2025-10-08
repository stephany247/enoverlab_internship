import api from "../utils/api";

export const userService = {
  // ✅ Get currently logged-in user
  getCurrentUser: async () => {
    const res = await api.get("/users/me");
    return res.data.data[0]; // adjust for your API structure
  },

  // ✅ Get all reminders of the current user
  getUserReminders: async () => {
    const res = await api.get("/users/me");
    return res.data.data[0]?.reminders || [];
  },

  // ✅ Get all schedules of the current user
  getUserSchedules: async () => {
    const res = await api.get("/users/me");
    return res.data.data[0]?.schedules || [];
  },

  // ✅ Update user details (like name, email, etc.)
  updateUser: async (updateData) => {
    const res = await api.patch("/users/me", updateData);
    return res.data;
  },

  // ✅ Delete user account (if applicable)
  deleteUser: async () => {
    const res = await api.delete("/users/me");
    return res.data;
  },
};
