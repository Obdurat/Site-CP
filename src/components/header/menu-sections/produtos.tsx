import { BeakerIcon } from '@heroicons/react/24/solid'

export const Produtos = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Produtos</summary>
          <ul className="menu xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
            <li>
              <div>
                <BeakerIcon className="w-6 text-blue-500"/>
                <a>Lorem Title</a>
              </div>
              <ul>
                <li><a>P #1</a></li>
                <li><a>P #2</a></li>
                <li><a>P #3</a></li>
                <li><a>P #4</a></li>
              </ul>
            </li>
            <li>
            <div>
                <BeakerIcon className="w-6 text-blue-500"/>
                <a>Lorem Title</a>
              </div>
              <ul>
                <li><a>P #1</a></li>
                <li><a>P #2</a></li>
                <li><a>P #3</a></li>
                <li><a>P #4</a></li>
              </ul>
            </li>
            <li>
            <div>
                <BeakerIcon className="w-6 text-blue-500"/>
                <a>Lorem Title</a>
              </div>
              <ul>
                <li><a>P #1</a></li>
                <li><a>P #2</a></li>
                <li><a>P #3</a></li>
                <li><a>P #4</a></li>
              </ul>
            </li>
            <li>
            <div>
                <BeakerIcon className="w-6 text-blue-500"/>
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
        </details>
      </li>
    </ul>
  )
}