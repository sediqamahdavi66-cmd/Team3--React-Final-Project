import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 pt-5 pb-0 w-full flex flex-col md:flex-row items-center justify-between text-[15px] text-[#6E7A93] bg-transparent">
      {/* Left Side */}
      <div className="mb-4 md:mb-0">
        © 2026, made with{" "}
        <Heart className="inline-block w-4 h-4 mx-1 mb-0.5 text-[#3A416F] fill-[#3A416F]" />{" "}
        by <span className="font-bold text-[#3A416F]">MyPIHUB</span> for a
        better web.
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-8">
        <a href="#" className="hover:text-[#3A416F] transition-colors">
          MyPatientHUB
        </a>
        <a href="#" className="hover:text-[#3A416F] transition-colors">
          About Us
        </a>
        <a href="#" className="hover:text-[#3A416F] transition-colors">
          Blog
        </a>
      </div>
    </footer>
  );
}
