import { Atendimento, Institucional, Produtos } from "./menu-sections";

type ChildNodes = {
  children: React.ReactNode
}

// const Header = () => {
//   return (
//     <div className="navbar bg-base-100">
//       {/* Mobile Menu */}
// <div className="navbar max-w-max">
//   <div className="dropdown">
//     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M4 6h16M4 12h8m-8 6h16" />
//       </svg>
//     </div>
//     <ul
//       tabIndex={0}
//       className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//       <Produtos />
//       <Atendimento />
//       <Institucional />
//     </ul>
//   </div>
//   <a className="btn btn-ghost text-xl">daisyUI</a>
// </div>
//       {/* Desktop Menu */}
//       <div className="navbar hidden lg:flex">
//         <Produtos />
//         <Atendimento />
//         <Institucional />
//       </div>
//       <div className="navbar-end">
//         <a className="btn">Button</a>
//       </div>
//     </div>
//   )
// }

const Header = ({ children }: ChildNodes) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 px-2">Name Lorem Ipsum</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <div className="navbar hidden lg:flex">
                <Produtos />
                <Atendimento />
                <Institucional />
              </div>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
        </ul>
      </div>
    </div>
  )
}
export default Header;