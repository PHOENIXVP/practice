"use client";
import { useForm } from "react-hook-form";

export default function App() {
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
    <>
      <h2>React Hook Form Example</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName.message}</span>
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
            <span className="error">{errors.email.message}</span>
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
          {errors.age && <span className="error">{errors.age.message}</span>}
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
            <span className="error">{errors.country.message}</span>
          )}
        </div>

        <div>
          <label>Gender:</label>
          <div className="radio-group">
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
            <span className="error">{errors.gender.message}</span>
          )}
        </div>

        <div>
          <label>Interests:</label>
          <div className="checkbox-group">
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
          <label className="checkbox-label">
            <input type="checkbox" {...register("newsletter")} />
            Subscribe to newsletter
          </label>

          {watchNewsletter && (
            <div className="conditional-field">
              <label htmlFor="preference">Newsletter Preference:</label>
              <select id="preference" {...register("preference")}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          )}
        </div>

        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
