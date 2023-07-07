import { useParams } from "react-router-dom";

function Country() {
  let params = useParams();
  let { country, state } = params;
  return (
    <>
      <h1>Country : {country}</h1>
      <h1>State : {state}</h1>
    </>
  );
}
export default Country;
