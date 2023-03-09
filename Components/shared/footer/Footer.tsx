import Facebook from "@/Components/Icons/Facebook";
import Instagram from "@/Components/Icons/Instagram";
import Twitter from "@/Components/Icons/Twitter";
import Youtube from "@/Components/Icons/Youtube";

const Footer = () => {
  return (
    <footer>
      <div className="container p-[100px]">
        {/* <Image src={} className="" alt="" /> */}
        <p className="pText text-center">212 Madison Ave, New York, NY 10016</p>
        <div className="flex items-center justify-center gap-2 text-secondary tracking-wide text-lg leading-relaxed">
          <a href="http://" className="hover:text-primary duration-500">
            contact@patiotime.com
          </a>
          <p>|</p>
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
          <a href="http://facebook.com" target="_blank">
            <Facebook />
          </a>
          <a href="http://youtube.com" target="_blank">
            <Youtube />
          </a>
          <a href="http://twitter.com" target="_blank">
            <Twitter />
          </a>
          <a href="http://instagram.com" target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
