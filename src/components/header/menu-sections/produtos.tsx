import { BeakerIcon } from '@heroicons/react/24/solid'

export const Produtos = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <p>Produtos</p>
      </div>
      <ul className="bg-base-200 rounded-box dropdown-content grid grid-cols-2 gap-10 w-max p-4 z-40" tabIndex={0}>
        <li className='w-max'>
          <div>
            <BeakerIcon className="w-6 text-blue-500" />
            <a>Lorem Title</a>
          </div>
          <ul>
            <li><a>P #1</a></li>
            <li><a>P #2</a></li>
            <li><a>P #3</a></li>
            <li><a>P #4</a></li>
          </ul>
        </li>
        <li className='w-max'>
          <div>
            <BeakerIcon className="w-6 text-blue-500" />
            <a>Lorem Title</a>
          </div>
          <ul>
            <li><a>P #1</a></li>
            <li><a>P #2</a></li>
            <li><a>P #3</a></li>
            <li><a>P #4</a></li>
          </ul>
        </li>
        <li className='w-max'>
          <div>
            <BeakerIcon className="w-6 text-blue-500" />
            <a>Lorem Title</a>
          </div>
          <ul>
            <li><a>P #1</a></li>
            <li><a>P #2</a></li>
            <li><a>P #3</a></li>
            <li><a>P #4</a></li>
          </ul>
        </li>
        <li className='w-max'>
          <div>
            <BeakerIcon className="w-6 text-blue-500" />
            <a>Lorem Title</a>
          </div>
          <ul>
            <li><a>P #1</a></li>
            <li><a>P #2</a></li>
            <li><a>P #3</a></li>
            <li><a>P #4</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}