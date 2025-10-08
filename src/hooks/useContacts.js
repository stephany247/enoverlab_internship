import { useEffect, useState } from "react";
import { userService } from "../utils/userService";
import { assets } from "../assets/assets";

export function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const localImages = [
    assets.amanda,
    assets.pelumi,
    assets.joseph,
    assets.tosin,
    assets.anna,
  ];

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await userService.getContacts();
        const contactsWithImages = data.map((contact, index) => ({
          ...contact,
          image: localImages[index % localImages.length],
        }));
        setContacts(contactsWithImages);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return { contacts, loading };
}
