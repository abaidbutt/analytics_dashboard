"use client"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import Error from "../components/Error";
// import Spinner from "../components/Spinner";
// import { registerUser } from "../features/auth/authActions";
import { useRouter } from "next/navigation";

const RegisterScreen = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) router.push("/login");
    // redirect authenticated user to profile screen
    if (userInfo) router.push("/user-profile");
  }, [router, userInfo, success]);
  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      alert("Password mismatch");
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();
    // dispatch(registerUser(data));
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {/* {error && <Error>{error}</Error>} */}
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-input"
          {...register("firstName")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-input"
          {...register("email")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-input"
          {...register("password")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Confirm Password</label>
        <input
          type="password"
          className="form-input"
          {...register("confirmPassword")}
          required
        />
      </div>
      <button type="submit" className="button" disabled={loading}>
        {/* {loading ? <Spinner /> : "Register"} */}
      </button>
    </form>
  );
};
export default RegisterScreen;
