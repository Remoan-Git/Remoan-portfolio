import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import socialLinks from "@/personal-data/socialLinks";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sendStatus, setSendStatus] = useState(0);
  // 0 default / 1 sending / 2 sent / 3 try again

  const resetFormValues = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendStatus(1);

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await axios.post(
        "https://formcarry.com/s/wV8ofp1QPlK",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSendStatus(2);
        resetFormValues();
        setTimeout(() => {
          setSendStatus(0);
        }, 1500);
      } else {
        console.error("Failed to submit form");
        setSendStatus(3);
        setTimeout(() => {
          setSendStatus(0);
        }, 1500);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSendStatus(3);
      setTimeout(() => {
        setSendStatus(0);
      }, 1500);
    }
  };

  return (
    <div>
      <div className="separator-ball-1" />
      <div className="separator-ball-2 slide-top" />
      <div className="separator-ball-3 slide-top" />
      <span className="section-title"> Contact Me</span>
      <div className="contact-section">
        <div className="bg-shadow-4" />
        <form
          className="contact-form flex scale-up-center"
          onSubmit={handleSubmit}
        >
          <input
            className="contact-name-input"
            placeholder="Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="contact-email-input flex"
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            className="contact-message-input"
            placeholder="Message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            disabled={sendStatus != 0}
            className="contact-form-btn"
            type="submit"
          >
            {sendStatus === 0
              ? "Send"
              : sendStatus === 1
              ? "Sending..."
              : sendStatus === 2
              ? "Sent ✓"
              : "Try Again!"}
          </button>
        </form>
        <div className="social-info-container">
          <div className="contact-social-item">
            <Link href={socialLinks.linkedin} target="_blank">
              <Image src="/icons/LinkedIn.svg" width="35" height="35" />
            </Link>
          </div>
          <div className="contact-social-item">
            <Link href={`mailto:${socialLinks.email}`} target="_blank">
              <Image src="/icons/mail.svg" width="35" height="35" />
            </Link>
          </div>
          <div className="contact-social-item">
            <Link href={socialLinks.instagram} target="_blank">
              <Image src="/icons/instagram.svg" width="35" height="35" />
            </Link>
          </div>
          <div className="contact-social-item">
            <Link href={socialLinks.github} target="_blank">
              <Image src="/icons/github.svg" width="35" height="35" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
