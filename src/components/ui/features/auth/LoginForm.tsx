"use client";
import Input from "@/components/ui/legacy-input";
import Image from "next/image";
import { type ChangeEvent, type FormEvent, useId, useState } from "react";

interface LoginValues {
  name: string;
  email: string;
}

const LoginForm = () => {
  const [values, setValues] = useState<LoginValues>({ name: "", email: "" });
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginValues, string>>
  >({});
  const nameId = useId();
  const emailId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (values: LoginValues) => {
    const errors: Partial<Record<keyof LoginValues, string>> = {};

    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 2) {
      errors.name = "Name must be at least 2 characters long";
    }
    if (!values.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      errors.email =
        "Please enter a valid email address using the following format: name@example.com";

    return errors;
  };

  const handleBlur = (e: FormEvent) => {
    e.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("login successful", values);
    }
  };

  return (
    <main className="max-w-6xl h-full grid place-items-center lg:grid-cols-2 mx-auto mt-14">
      <section className="max-w-[313px] lg:max-w-[441px]">
        <div className="text-left">
          <h1 className="text-2xl text-black  font-bold">
            Sign in to your account
          </h1>
          <h2 className="text-[#004715] leading-8 font-bold">
            Access exclusive content below.
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            id={nameId}
            value={values.name}
            name="name"
            placeholder="Jane Smith"
            error={errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
          />
          <Input
            label="Email"
            id={emailId}
            value={values.email}
            name="email"
            placeholder="jane@email.com"
            error={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
          />

          <button
            type="submit"
            className="bg-black text-xs text-white rounded-lg block w-full p-3 mt-4 cursor-pointer hover:bg-[#282828] transition-all duration-300 ease-in-out font-semibold text-center active:scale-95 min-h-10 max-w-[309px]"
          >
            Login
          </button>
        </form>

        <div className="flex items-center mt-4 py-3">
          <div className="flex-grow border-t-2 border-[#CCC]"></div>
          <span className="px-3 font-medium tracking-wider text-[#CCC]">
            or
          </span>
          <div className="flex-grow border-t-2 border-[#CCC]"></div>
        </div>

        <div className="flex flex-col justify-center max-lg:items-center">
          <button type="button" className="btn-social">
            <Image src="/github.png" alt="github" width={25} height={24} />
            <span>Github</span>
          </button>
          <button type="button" className="btn-social">
            <Image src="/google.png" alt="google" width={25} height={24} />
            <span>Google</span>
          </button>
        </div>
      </section>

      <section className="bg-secondary size-full">
        <div></div>
      </section>
    </main>
  );
};

export default LoginForm;
