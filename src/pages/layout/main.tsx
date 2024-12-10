import Header from "../../components/header/main"
import {
  QueryClientProvider,
} from 'react-query'
import { apiClient } from "../../api/api"

type ChildNodes = {
  children: React.ReactNode
}

const Layout = ({children}: ChildNodes) => {

  return (
    <>
      <QueryClientProvider client={apiClient}>
        <Header children={children}/>
      </QueryClientProvider>
    </>
  )
}

export default Layout;