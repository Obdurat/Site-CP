const Header = () => {
  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">Hackaton de corno</a>
      </div> 
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Documentações</div>
            <ul className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><a target="_blank" href="https://tanstack.com/query/v3/docs/react/overview">React Query</a></li> 
              <li><a target="_blank" href="https://clerk.com/docs">{"Clerk (Para Login)"}</a></li>
              <li><a target="_blank" href="https://daisyui.com/components/">DaisyUI</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;