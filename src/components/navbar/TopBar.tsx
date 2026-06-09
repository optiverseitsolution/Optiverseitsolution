import phoneIcon from "../../assets/NavIcons/call.png";
import whatsApp from "../../assets/NavIcons/whatsapp.png";

export default function TopBar() {
  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-auto max-w-7xl flex-col items-center justify-center gap-2 px-4 py-2 text-xs sm:h-10 sm:flex-row sm:justify-end sm:gap-6 sm:py-0 sm:text-sm">
        <a
          href="https://wa.me/9779803713931"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 font-semibold text-black transition hover:text-green-700"
        >
          <img src={whatsApp} alt="WhatsApp" className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
          <span>WhatsApp</span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-2 text-center font-semibold text-black">
          <img src={phoneIcon} alt="Phone" className="h-4 w-4 object-contain" />
          <a href="tel:+9779803713931" className="hover:text-green-700">
            +977 - 9803713931
          </a>
          <span className="text-gray-400">|</span>
          <a href="tel:+9779824790012" className="hover:text-green-700">
            +977 - 9824790012
          </a>
        </div>
      </div>
    </div>
  );
}