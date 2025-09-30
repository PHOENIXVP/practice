"use client";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/Button";
import Image from "next/image";
import signupBanner from "../../public/signupBanner.jpg";
import { Input } from "../../components/ui/Input";
import { primary } from "../../cnostants/tvar";

export default function Someform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      age: 18,
      country: "",
      gender: "",
      interests: [],
      newsletter: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchNewsletter = watch("newsletter");

  return (
    <div className="flex max-md:flex-wrap max-w-5xl container mx-auto border max-md:border-none rounded-xl my-6 max-md:my-0 relative">
      <Image
        src={signupBanner}
        alt="signupBanner"
        className="rounded-l-xl max-md:rounded-none max-w-1/2 block max-md:hidden"
        height="570"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 mx-auto max-md:border rounded-xl max-md:m-4 max-sm:m-6 w-1/2 max-md:w-full"
      >
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        <div className="space-y-2 overflow-y-auto max-h-[95vh] max-md:max-h-[78vh]] p-2">
          <div className="flex flex-col gap-2">
            <label className="block" htmlFor="firstName">
              First Name
            </label>
            <Input
              id="firstName"
              type="text"
              className={`${errors.firstName ? "boder-red-500" : ""}`}
              {...register("firstName", {
                required: "First name is required",
              })}
            />
            <span
              className={`${
                errors.firstName ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.firstName ? errors.firstName.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="block" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            <span
              className={`${
                errors.email ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.email ? errors.email.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="block" htmlFor="age">
              Age
            </label>
            <Input
              id="age"
              type="number"
              {...register("age", {
                required: "Age is required",
              })}
            />
            <span
              className={`${
                errors.age ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.age ? errors.age.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="block" htmlFor="country">
              Country
            </label>
            <select
              className="px-3 py-2 rounded-lg w-full"
              id="country"
              {...register("country", {
                required: "Please select a country",
              })}
            >
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
            </select>
            <span
              className={`${
                errors.country ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.country ? errors.country.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label>Gender</label>
            <div className="flex flex-wrap gap-2">
              <label className="space-x-2">
                <input
                  type="radio"
                  value="male"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                <span>Male</span>
              </label>
              <label className="space-x-2">
                <input type="radio" value="female" {...register("gender")} />
                <span>Female</span>
              </label>
              <label className="space-x-2">
                <input type="radio" value="other" {...register("gender")} />
                <span>Other</span>
              </label>
            </div>
            <span
              className={`${
                errors.gender ? "visible" : "invisible"
              } text-red-500 text-xs px-3`}
            >
              {errors.gender ? errors.gender.message : <>&nbsp;</>}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label>Interests</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  className={`accent-${primary}`}
                  value="programming"
                  {...register("interests")}
                />
                Programming
              </label>
              <label>
                <input
                  type="checkbox"
                  className={`accent-${primary}`}
                  value="design"
                  {...register("interests")}
                />
                Design
              </label>
              <label>
                <input
                  type="checkbox"
                  className={`accent-${primary}`}
                  value="music"
                  {...register("interests")}
                />
                Music
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>
              <input
                type="checkbox"
                className={`accent-${primary}`}
                {...register("newsletter")}
              />
              Subscribe to newsletter
            </label>

            {watchNewsletter && (
              <div className="flex flex-col gap-2">
                <label className="block" htmlFor="preference">
                  Newsletter Preference
                </label>
                <select
                  className="px-3 py-2 rounded-lg w-full"
                  id="preference"
                  {...register("preference")}
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            )}
          </div>

          <div className="space-x-2">
            <Button type="submit" varient="primary" className="btn btn-primary">
              Submit
            </Button>
            <Button
              type="button"
              // varient="secondary"
              cVarient={["blue-600", "sky-400"]}
              onClick={() => reset()}
              className="btn btn-secondary"
            >
              Reset
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
