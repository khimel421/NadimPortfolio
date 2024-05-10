import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm("service_758fugo", "template_ynd5dj3", form.current, {
        publicKey: "Owbz0_JO2hBwWsvLA",
        
      })
      .then(
        () => {
          form.current.reset();
          Swal.fire("Your message has been sent");
          
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );

      
  };
  return (
    <div className="bg-[#000000]   py-20">
      <section className="flex flex-col items-center  gap-2">
        <h1 className="font-raleway text-2xl md:text-4xl font-semibold text-center p-2 text-white">
          CONTACT
        </h1>
        <hr className=" w-24 border-2 border-white rounded-lg"></hr>
      </section>

      <div>
        <h1 className="text-[#06bcc2] text-center text-xl my-10">
          Have a question or want to work together?
        </h1>
      </div>

      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4  justify-center w-full md:w-[40%] md:mx-auto p-2"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="text-xl p-2 text-white bg-[#1e242c] rounded-lg outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="text-xl p-2 text-white bg-[#1e242c] rounded-lg outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="text-xl p-2 text-white bg-[#1e242c] rounded-lg outline-none"
          />
          <div className=" ml-auto">
            <input
              type="submit"
              value="Submit"
              className="text-white border border-white py-2 px-6 font-semibold hover:bg-[#06bcc2] hover:border-[#06bcc2] cursor-pointer hover:text-white transition-all ease-in-out delay-75"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
