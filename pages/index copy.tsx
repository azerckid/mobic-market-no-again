import exp from "constants";
import type { NextPage } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className="bg-slate-500  p-5  grid gap-10 sm:grid-cols-2 lg:grid-cols-3 space-y-5 min-h-screen">
      <div className="p-10 bg-white flex flex-col justify-between  rounded-lg shadow-xl sm:bg-red-400">
        <span className="font-semibold text-3xl">SELECT ITEM</span>
        <ul>
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex justify-between my-2 odd:bg-blue-100 even:bg-gray-100 rounded-sm"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$ 200</span>
            </div>
          ))}
        </ul>
        {/* <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$ 200</span>
        </div> */}
        <div className="mt-2 pt-2 flex justify-between border-t-2 border-dashed">
          <span>TOTAL</span>
          <span className="font-semibold">$ 400</span>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="w-2/4 mx-auto bg-blue-500 text-white rounded-lg px-5 py-2">
            CHECKOUT
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
        <div className="p-6 pb-16 sm:pb-32 md:pb-52 bg-blue-500">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="p-4 rounded-3xl bg-white relative -top-5">
          <div className="flex justify-between items-end  text-center relative -top-16">
            <div className="flex flex-col">
              <span className="text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-28 w-28 rounded-full bg-red-400 group-hover:bg-slate-500 transition-colors"></div>
            <div className="flex flex-col">
              <span className="text-gray-500">Spent</span>
              <span className="font-semibold">$2,340</span>
            </div>
          </div>

          <div className="flex flex-col items-center -mt-10">
            <span className="font-medium text-2xl">Tony Molly</span>
            <span className="text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-3xl shadow-xl">
        <div className="mb-5 flex justify-between items-center">
          <span>←</span>
          <div className="space-x-3">
            <span>★ 4.9</span>
            <span className="p-2">♥︎</span>
          </div>
        </div>
        <div className="w-full h-80 bg-yellow-600 mb-5"></div>
        <div className="flex flex-col mb-2">
          <span className="font-medium mb-1">Swoon Lounge</span>
          <span className="text-xs text-gray-500 -mt-1">Chair</span>
        </div>
        <div className="mb-5 flex justify-between  ">
          <div className="flex items-center space-x-2">
            <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition-all"></button>
            <button className="w-5 h-5 rounded-full bg-green-500 focus:ring-2 ring-offset-2 ring-green-500 transition-all"></button>
            <button className="w-5 h-5 rounded-full bg-blue-500 focus:ring-2 ring-offset-2 ring-blue-500 transition-all"></button>
            {/* <input type="radio"></input>
            <input type="radio"></input>
            <input type="radio"></input> */}
          </div>
          <div className="flex flex-row items-center space-x-3">
            <button className="p-2 shadow-lg font-medium border-2 flex justify-center items-center rounded-md aspect-square w-12">
              -
            </button>
            <span className="font-bold">1</span>
            <button className="p-2 shadow-lg font-medium border-2 flex justify-center items-center rounded-md aspect-square w-12">
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-3xl">$450</span>
          <button className="bg-blue-500 text-white rounded-lg px-5 py-2 hover:bg-pink-300 hover:text-black active:bg-teal-500 focus:bg-green-400">
            Add to cart
          </button>
        </div>
      </div>

      <div className="p-10 bg-blue-500 rounded-lg shadow-xl focus-within:bg-blue-300">
        <form className="flex flex-col justify-center space-y-2 ">
          <input
            type="text"
            required
            placeholder="UserName"
            className="required:border-red-500 border-2 peer"
          />
          <input type="password" placeholder="Password" />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            Forgot User name?
          </span>
          <span className="hidden peer-valid:block peer-valid:text-green-500">
            Awesome User name
          </span>
          <input type="submit" value="Login" className="bg-white" />
        </form>
      </div>

      <div className="p-6 bg-white rounded-3xl shadow-xl lg:col-span-2">
        <details className="mb-5 open:bg-indigo-500 open:text-white">
          <summary className="font-bold">Summary</summary>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quia, quae, quibusdam, asperiores voluptate quos doloribus
            voluptatum consequatur accusantium quas ea. Quisquam, voluptatum
            molestias. Quisquam, voluptatum molestias. Quisquam, voluptatum
            molestias.
          </p>
        </details>
        <details className="mb-5">
          <summary className="font-bold">Summary</summary>
          <p className="selection:bg-indigo-600 selection:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quia, quae, quibusdam, asperiores voluptate quos doloribus
            voluptatum consequatur accusantium quas ea. Quisquam, voluptatum
            molestias. Quisquam, voluptatum molestias. Quisquam, voluptatum
            molestias.
          </p>
        </details>
      </div>

      <div className="p-6 bg-white rounded-3xl shadow-xl">
        <div className="flex flex-col space-y-2 p-5">
          <ul className="list-decimal marker:text-teal-500">
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-white rounded-3xl shadow-xl">
        <div className="flex flex-col space-y-2 p-5">
          <input
            type="file"
            className="file:border-0 file:rounded-md file:bg-purple-400 file:text-white file:px-5 file:py-2 file:font-semibold file:hover:bg-purple-500 file:active:bg-purple-600 file:focus:bg-purple-600 file:outline-none file:transition-colors file:cursor-wait"
          />
        </div>
      </div>

      <div className="p-6 bg-white rounded-3xl shadow-xl lg:col-span-3">
        <div className="flex flex-col space-y-2 p-5">
          <p className="first-letter:font-extrabold first-letter:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quas
            suscipit provident blanditiis eos libero delectus, nostrum veniam,
            dolore praesentium quia maiores. Iure repudiandae ad aspernatur
            earum itaque tempora! Delectus.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
