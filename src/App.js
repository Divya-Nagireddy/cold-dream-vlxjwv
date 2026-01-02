import { useCallback, useEffect, useState } from "react";
import ProductList from "./components/productList";
import { useFetch } from "./hooks/useFetch";
import { processProductAnalytics } from "./service/api";
import { getData } from "./service/api";
import "./styles.css";

export default function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const { data, loading } = useFetch();
  // 1. Handle async data, bonus points for a custom hook
  // getData() will return a promise that resolves with the data after 1s

  // 2. Create your component composition

  // 3. Pass in callbacks (the right way) so each product click calls the right analytics
  //    then navigates

  // 4. Responsive design - make it look nice

  // 5. After data loads, replace the #third-party div's text with the product count.
  //.   This div is injected by a third party
  const onClick = useCallback(
    () => async (product) => {
      await processProductAnalytics(product.id);
      console.log("[Analytics - Done] Product processed: ", product.id);

      // there would be some followup logic header
    },
    []
  );

  return (
    <div className="App">
      <header className="header">Ulta</header>
      <ProductList data={data} loading={loading} onClick={onClick} />
      <footer className="AppFooter">
        <p>Copyright &copy; 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}
