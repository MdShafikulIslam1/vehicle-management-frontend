"use client";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Input from "../components/Shared/Form/Input";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch("example"));
  return (
    <div>
      <Head>
        <title>VT-Login</title>
      </Head>
      {/* w-full h-screen */}
      <div className="bg-[#00334E]">
        <div className="w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white p-2">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col py-4"
              >
                <input
                  {...register("name", { required: true })}
                  placeholder="Type your Name"
                />
                {errors.name && <span>This field is required</span>}
                <input defaultValue="test" {...register("example")} />
                {/* <Input
        {...register("email", { required: true })}
        type="email" 
        placeholder="Type your email"
      />
      {errors.exampleRequired && <span>This field is required</span>} */}

                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <input type="submit" value="Send" />
                {/* <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button> */}

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p className="text-gray-400">Need Help?</p>
                </div>
                <p className="py-4 mt-8">
                  <span className="text-gray-600">New to website?</span>{" "}
                  <Link href="/">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
