import { createRoot } from "react-dom/client";
import Order from "./Order";
// import Pizza from "./Pizza";

const App = () => {
    return (
        <Order />
        // <div>
        //     <h1>Padre Gino's - Order Now</h1>
        //     <Pizza
        //         name="Pepperoni"
        //         description="pep, cheese n stuff"
        //         image={"/public/pizzas/pepperoni.webp"}
        //     />
        //     <Pizza
        //         name="Hawaiian"
        //         description="ham, pie n stuff"
        //         image={"/public/pizzas/hawaiian.webp"}
        //     />
        //     <Pizza
        //         name="Americano"
        //         description="french, hpt dogs n stuff"
        //         image={"/public/pizzas/big_meat.webp"}
        //     />
        // </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
