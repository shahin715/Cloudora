"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [data, setData] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("/data/contact.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ success (fake submit)
    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>

          <p className="text-gray-600 mb-8">{data.subtitle}</p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-[#22C1DC]" />
              <span className="text-gray-700">{data.email}</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-[#22C1DC]" />
              <span className="text-gray-700">{data.phone}</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#22C1DC]" />
              <span className="text-gray-700">{data.location}</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div
          data-aos="fade-left"
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* NAME */}
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#22C1DC]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#22C1DC]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#22C1DC]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#22C1DC] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
