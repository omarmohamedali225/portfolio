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
