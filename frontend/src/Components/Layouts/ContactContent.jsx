import React, { useState, useEffect } from "react";

const ContactContent = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" , message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      const cleanedValue = value.replace(/[^\d\s\+\-\(\)]/g, '');
      setForm(prev => ({ ...prev, [name]: cleanedValue }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div className="text-white mt-24 w-full lg:w-[90%] " id="contact">
      <div className="flex flex-row border p-2 rounded-lg w-fit justify-start mb-4">
          <img src="/chat.png" alt="" className="w-4" />
          <p className="pl-2 text-xs">CONTACT ME</p>
        </div>
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          lg:w-[90%]
          mx-auto
          p-4 md:p-8
          bg-base-200 
          rounded-xl 
          shadow 
          flex flex-col gap-4
          mb-20
          lg:mb-0
          lg:-right-full
        "
      >
        {status === "success" && (
          <div className="alert alert-success shadow-lg">
            <span>Pesan berhasil dikirim!</span>
          </div>
        )}
        {status === "error" && (
          <div className="alert alert-error shadow-lg">
            <span>Gagal mengirim pesan, coba lagi.</span>
          </div>
        )}

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Full Nama</span>
          </div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Phone</span>
          </div>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone Number "
            required
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Message</span>
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="textarea textarea-bordered w-full min-h-[100px]"
          />
        </label>

        <button
          type="submit"
          className="btn w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold border-0 transition-colors duration-200"
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>
    </div>
  );
};

export default ContactContent;