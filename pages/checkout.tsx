import Head from "next/head";
import Header from "../components/Header";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
// import Stripe from "stripe";
import Button from "../components/Button";
// import CheckoutProduct from "../components/CheckoutProduct";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
// import { fetchPostJSON } from "../utils/api-helpers";
// import getStripe from "../utils/get-stripejs";

function Checkout() {
  const items = useSelector(selectBasketItems);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Bag - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div>
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>

          {items.length > 0 && (
            <Button 
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}

        </div>
      </main>
    </div>
  )
}

export default Checkout