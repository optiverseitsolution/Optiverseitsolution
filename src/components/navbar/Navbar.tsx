import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <MainNavbar />
    </header>
  );
}