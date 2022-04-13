import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function MyContact() {
  return (
    <div className="my-contact w-full lg:w-1/2">
      <div className="wrapper px-4 flex flex-col gap-5 md:gap-10">
        <div className="title">
          <h1 className="font-inter font-extrabold text-2xl md:text-3xl lg:text-4xl text-white text-left">
            Contact Me ...
          </h1>
        </div>
        <div className="contact px-8 mx-auto md:mx-0 h-full">
          <ul className="text-white text-base flex flex-col justify-around">
            <li>
              <a
                href="http://wa.me/+6285641889512"
                className="flex gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href="http://t.me/+6285641889512"
                className="flex gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <TelegramIcon />
                <span>Telegram</span>
              </a>
            </li>
            <li>
              <a
                href="http://linkedin.com/in/muhammad-a-589675141"
                className="flex gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
