import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <footer id="contact" className="w-full py-6 lg:py-11">
      <div className="w-full flex flex-col justify-between lg:flex-row items-start gap-20 mb-11 lg:mb-24">
        <div className="w-full mr-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16">
            Contact Me
          </h1>
          <p className="text">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="w-full ml-auto flex flex-col justify-end">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}
