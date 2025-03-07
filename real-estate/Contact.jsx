import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "3a704dcb-25d4-4229-9a83-59d4658d2463"); // Ensure this is correct

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Request Failed:", error);
      setResult("❌ Failed to send. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />

        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit Form"}
        </button>
      </form>
      <p>{result}</p>
    </div>
  );
}
