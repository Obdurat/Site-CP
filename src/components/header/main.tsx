import { Atendimento, Institucional, Produtos } from "./menu-sections";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      {/* Mobile Menu */}
      <div className="navbar max-w-max">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Produtos />
            <Atendimento />
            <Institucional />
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      {/* Desktop Menu */}
      <div className="navbar hidden lg:flex">
        <Produtos />
        <Atendimento />
        <Institucional />
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}
export default Header;