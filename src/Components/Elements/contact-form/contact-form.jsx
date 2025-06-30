import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex justify-center">
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
            <span className="label-text font-semibold">Nama</span>
          </div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama"
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
            <span className="label-text font-semibold">Pesan</span>
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Pesan"
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

export default ContactForm;