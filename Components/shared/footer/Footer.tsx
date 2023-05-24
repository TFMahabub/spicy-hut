import Facebook from "@/Components/Icons/Facebook";
import Instagram from "@/Components/Icons/Instagram";
import Twitter from "@/Components/Icons/Twitter";
import Youtube from "@/Components/Icons/Youtube";

const Footer = () => {
  return (
    <footer>
      <div className="container px-[100px] py-12 border-t-[1px] border-secondary/20 section_gap">
        {/* <Image src={} className="" alt="" /> */}
        <p className="pText text-center">212 Madison Ave, New York, NY 10016</p>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-2 text-secondary tracking-wide text-lg leading-relaxed">
          <a href="http://" className="hover:text-primary duration-500">
            contact@patiotime.com
          </a>
          <p className="hidden md:block">|</p>
          <a href="http://" className="hover:text-primary duration-500">
            booking@patiotime.com
          </a>
        </div>
        <a href="http://">
          <p className="text-secondary tracking-wide text-lg leading-relaxed text-center hover:text-primary duration-500">
            (055) 325 1616
          </p>
        </a>
        <div className="mt-3 flex items-center justify-center gap-4">
          <a href="http://facebook.com" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
          <a href="http://youtube.com" target="_blank" rel="noreferrer">
            <Youtube />
          </a>
          <a href="http://twitter.com" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href="http://instagram.com" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
