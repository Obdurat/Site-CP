import { useRouteError } from "react-router-dom";

type ErrorObj = {
  statusText: string;
  message: string;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorObj ;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!!</h1>
      <p>Desculpe, um erro inexperado aconteceu</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage