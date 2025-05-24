import { useForm, SubmitHandler } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white
    focus:outline-none focus:ring-2 focus:ring-secondary-500 transition`;

  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    const isValid = await trigger();
    if (!isValid) {
      e?.preventDefault();
      return;
    }
    // formsubmit.co will handle submission as action target
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5 leading-relaxed text-gray-700">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row">
          <motion.div
            className="basis-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={handleSubmit(onSubmit)}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
              noValidate
            >
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className={inputStyles}
                type="text"
                placeholder="NAME"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", {
                  required: "Name is required.",
                  maxLength: {
                    value: 100,
                    message: "Name cannot exceed 100 characters.",
                  },
                })}
              />
              {errors.name && (
                <p role="alert" className="mb-4 text-primary-500">
                  {errors.name.message}
                </p>
              )}

              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p role="alert" className="mb-4 text-primary-500">
                  {errors.email.message}
                </p>
              )}

              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message", {
                  required: "Message is required.",
                  maxLength: {
                    value: 2000,
                    message: "Message cannot exceed 2000 characters.",
                  },
                })}
              />
              {errors.message && (
                <p role="alert" className="mb-4 text-primary-500">
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                className="hover:bg-secondary-600 mt-5 rounded-lg bg-secondary-500 px-20 py-3 font-semibold
                  text-white transition duration-500"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="Contact us graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
