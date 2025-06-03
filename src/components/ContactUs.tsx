import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../components/UI/Earth";
import { slideIn } from "../../lib/motion";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jouliano Adel",
          from_email: form.email,
          to_email: "Joulianoadel@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div>
        <div>
            <p className="flex items-center justify-center text-5xl font-extrabold capitalize">i would love to hear from you!</p>
        </div>
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse justify-evenly items-center overflow-hidden px-10">
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-[700px] mb-20'
        >
            <p className='sm:text-[18px] text-[14px] text-gray-500 uppercase tracking-wider'>Get in touch</p>
            <h3 className='text-gray-900 font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px]'>Contact.</h3>

            <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
            >
            <label className='flex flex-col'>
                <span className='text-gray-800 font-medium mb-4'>Your Name</span>
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-gray-100 py-4 px-6 placeholder-gray-400 text-gray-900 rounded-lg outline-none border border-gray-300 font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-gray-800 font-medium mb-4'>Your email</span>
                <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your E-Mail?"
                className='bg-gray-100 py-4 px-6 placeholder-gray-400 text-gray-900 rounded-lg outline-none border border-gray-300 font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-gray-800 font-medium mb-4'>Your Message</span>
                <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-gray-100 py-4 px-6 placeholder-gray-400 text-gray-900 rounded-lg outline-none border border-gray-300 font-medium focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none'
                />
            </label>

            <button
                type='submit'
                className='bg-blue-600 hover:bg-blue-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-blue-400 transition'
                disabled={loading}
            >
                {loading ? "Sending..." : "Send"}
            </button>
            </form>
        </motion.div>

        <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='flex-1 w-full h-[400px] md:h-[500px] max-w-xl'
        >
            <EarthCanvas />
        </motion.div>
        </div>
    </div>
  );
};

export default ContactUs;