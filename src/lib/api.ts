export const API_URL =
  import.meta.env.VITE_API_URL || "https://fruitful-nest-5c8d028fc8.strapiapp.com";

export const submitContactForm = async (formData: any) => {
  const res = await fetch(`${API_URL}/api/contact-submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: formData }),
  });

  if (!res.ok) {
    throw new Error("Failed to submit form");
  }

  return res.json();
};
