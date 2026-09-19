import logo from "../assets/Images/logo.svg";
import iconSun from "../assets/Images/icon-sun.svg";
import iconMoon from "../assets/Images/icon-moon.svg";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    
    <header className="flex items-center justify-between bg-[hsl(200,60%,99%)] dark:bg-[hsl(226,25%,17%)] rounded-2xl px-6 py-4 shadow-sm border border-transparent dark:border-[hsl(225,23%,24%)]">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Extensions logo" className="h-8 w-auto " />
      </div>

      <button
        type="button"
        onClick={onToggleTheme}
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[hsl(217,61%,90%)] dark:bg-[hsl(225,23%,24%)] hover:bg-[hsl(0,0%,78%)] dark:hover:bg-[hsl(226,11%,37%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(3,71%,56%)] transition-colors cursor-pointer"
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}>
        <img src={isDark ? iconSun : iconMoon} alt="" className="w-5 h-5" />
      </button>
    </header>
  );
}

export default Header;
