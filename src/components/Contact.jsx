import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Nitesh D.",
        from_email: form.email,
        to_email: "nitinkhatri9898@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
<div className="mt-0 flex flex-col-reverse xl:flex-row gap-8 w-full overflow-hidden">

  {/* CONTACT FORM */}
  <motion.div
  variants={slideIn("left", "tween", 0.2, 1)}
  className="flex-[0.6] bg-black-100 p-6 rounded-2xl"
>
  <p className={styles.sectionSubText}>Get in touch</p>
  <h3 className={styles.sectionHeadText}>Contact.</h3>

  <form
    ref={formRef}
    onSubmit={handleSubmit}
    className="mt-3 flex flex-col gap-4"
  >
    {/* Name */}
    <label className="flex flex-col">
      <span className="text-white font-medium mb-1 text-sm">
        Your Name
      </span>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        className="bg-tertiary py-2.5 px-4 text-sm placeholder:text-secondary
                   text-white rounded-lg outline-none font-medium"
      />
    </label>

    {/* Email */}
    <label className="flex flex-col">
      <span className="text-white font-medium mb-1 text-sm">
        Your Email
      </span>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        className="bg-tertiary py-2.5 px-4 text-sm placeholder:text-secondary
                   text-white rounded-lg outline-none font-medium"
      />
    </label>

    {/* Message */}
    <label className="flex flex-col">
      <span className="text-white font-medium mb-1 text-sm">
        Message
      </span>
      <textarea
        rows={4}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message"
        className="bg-tertiary py-2.5 px-4 text-sm placeholder:text-secondary
                   text-white rounded-lg outline-none font-medium resize-none"
      />
    </label>

    {/* Button */}
    <button
      type="submit"
      className="bg-tertiary py-2.5 px-6 rounded-lg w-fit
                 text-white text-sm font-semibold shadow-md shadow-primary"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  </form>
</motion.div>

  {/* EARTH CANVAS */}
  <motion.div
    variants={slideIn("right", "tween", 0.2, 1)}
    className="flex-[0.4] h-[300px] sm:h-[400px] xl:h-[450px]"
  >
    <EarthCanvas />
  </motion.div>

</div>

  );
};

export default SectionWrapper(Contact, "contact");