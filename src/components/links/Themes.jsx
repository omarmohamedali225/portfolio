<<<<<<< HEAD
import { FaAdjust } from "react-icons/fa";

export default function Themes() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <button className="themes" onClick={toggleTheme}>
        <FaAdjust />
      </button>
    </>
  );
}
=======
import { FaAdjust } from "react-icons/fa";

export default function Themes() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <button className="themes" onClick={toggleTheme}>
        <FaAdjust />
      </button>
    </>
  );
}
>>>>>>> f229ba40a7ba7f225851aedb31877e072f9046bb
