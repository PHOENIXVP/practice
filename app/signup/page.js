"use client";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/Button";
import Image from "next/image";
import signupBanner from "../../public/signupBanner.jpg";
import { Input } from "../../components/ui/Input";

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
        className="rounded-l-xl max-md:rounded-none base-1/2 block max-md:hidden"
        height="570"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-6 base-1/2 mx-auto max-md:border rounded-xl max-md:m-4"
      >
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Input
            id="firstName"
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            {...register("age", {
              required: "Age is required",
            })}
          />
          {errors.age && (
            <span className="text-red-500">{errors.age.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <select
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
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </div>

        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                value="male"
                {...register("gender", {
                  required: "Please select your gender",
                })}
              />
              Male
            </label>
            <label>
              <input type="radio" value="female" {...register("gender")} />
              Female
            </label>
            <label>
              <input type="radio" value="other" {...register("gender")} />
              Other
            </label>
          </div>
          {errors.gender && (
            <span className="text-red-500">{errors.gender.message}</span>
          )}
        </div>

        <div>
          <label>Interests:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="programming"
                {...register("interests")}
              />
              Programming
            </label>
            <label>
              <input
                type="checkbox"
                value="design"
                {...register("interests")}
              />
              Design
            </label>
            <label>
              <input type="checkbox" value="music" {...register("interests")} />
              Music
            </label>
          </div>
        </div>

        <div>
          <label>
            <input type="checkbox" {...register("newsletter")} />
            Subscribe to newsletter
          </label>

          {watchNewsletter && (
            <div>
              <label htmlFor="preference">Newsletter Preference:</label>
              <select id="preference" {...register("preference")}>
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
      </form>
    </div>
  );
}
