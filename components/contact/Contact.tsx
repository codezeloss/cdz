import Link from "next/link";
import {MdEmail} from "react-icons/md";

export default function Contact() {
    return (
        <footer id="contact" className="w-full py-6 lg:py-11">
            <div className="w-full flex flex-col justify-between lg:flex-row items-start gap-20 mb-11 lg:mb-24">
                <div className="w-full mr-auto">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16">
                        Contact Me
                    </h1>
                    <div className="text">
                        I would love to hear about your project and discuss how I can help.
                        You can reach me on LinkedIn or X,<br/> <Link
                        className="flex items-center gap-1"
                        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>or email me at <span
                        className="w-fit bg-muted rounded px-2 hover:font-bold flex items-center gap-1"><MdEmail
                        className="block size-4"/> {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

{/*<div className="w-full ml-auto flex flex-col justify-end">
                <ContactForm/>
              </div>*/
}