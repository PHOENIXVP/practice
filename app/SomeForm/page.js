import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />

      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
