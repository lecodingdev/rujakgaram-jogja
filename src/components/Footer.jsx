import { Link } from "react-router-dom";
import { useNavigationContext } from "./context";
import scrollToTop from "./ScrollToTop";

function Footer() {
  const { setSelectedNavLink } = useNavigationContext();

  return (
    <footer className="w-full h-60 bg-black text-white ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-5 mt-10 mb-5 text-lg">
          <Link
            className="hover:underline"
            to="/"
            onClick={() => {
              setSelectedNavLink("/");
              scrollToTop();
            }}
          >
            Home
          </Link>
          <Link
            className="hover:underline"
            to="/store"
            onClick={() => {
              setSelectedNavLink("/store");
              scrollToTop();
            }}
          >
            Store
          </Link>
          <Link
            className="hover:underline"
            to="/menu"
            onClick={() => {
              setSelectedNavLink("/menu");
              scrollToTop();
            }}
          >
            Menu
          </Link>
        </div>
        <div className="text-center mb-5">
          <p className="text-3xl font-bold uppercase">Business Hours</p>
          <p>Open Daily</p>
          <p>11.00 - 21.00</p>
        </div>
        <div className="text-center">
          <p>
            Build with <a href="https://vitejs.dev/">💜</a> by{" "}
            <a
              className="hover:text-sky-500"
              href="https://www.linkedin.com/in/alan-tanadi"
              target="_blank"
              rel="noreferrer"
            >
              Alan Tanadi
            </a>{" "}
            -{" "}
            <a
              className="hover:text-gray-500"
              href="https://github.com/lecodingdev"
              target="_blank"
              rel="noreferrer"
            >
              LeCodingDev
            </a>
          </p>
          <p>© 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
