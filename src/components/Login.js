import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Swal from "sweetalert2";
import { addUser, removeUser } from "../redux/userSlice";
import { removeMovies } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const user = useSelector((store) => store.user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user?.uid,
            name: user?.displayName,
            email: user?.email,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(removeMovies());
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  }, [user]);

  const onSubmit = (data) => {
    const { name, email, password } = data;
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            text: error?.code ? error?.code : "Something went wrong",
          });
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              dispatch(
                addUser({
                  uid: auth?.currentUser?.uid,
                  name: auth?.currentUser?.displayName,
                  email: auth?.currentUser?.email,
                })
              );
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                text: error?.message ? error?.message : "Something went wrong",
              });
            });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            text: error?.code ? error?.code : "Something went wrong",
          });
        });
    }
  };
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg')] bg-cover bg-center h-screen">
      {/* <img src={LOGO_URL} alt="logo" className="absolute h-20 left-[10%]" /> */}
      <Header />
      <div className="flex justify-center p-8 w-1/3 rounded-md flex-col items-center bg-[rgba(0,0,0,0.8)] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="text-white text-2xl">
          {isLogin ? "Sign In" : "Sign Up"}
        </div>
        <form
          className="flex flex-col text-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          {!isLogin && (
            <div>
              <input
                type="text"
                className="h-12 my-4 ps-2 rounded-sm bg-[#3d3d3c] border"
                placeholder="Name"
                maxLength={12}
                {...register("name", {
                  required: "Name is required",
                  onChange: (e) => {
                    setValue("name", e.target.value.replace(/[^A-Za-z]/g, ""));
                  },
                })}
              />
              {errors?.name && (
                <p className="text-red-700">{errors?.name?.message}</p>
              )}
            </div>
          )}
          <input
            type="text"
            className="h-10 my-4 ps-2 rounded-sm bg-[#3d3d3c] border"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Provide correct email address",
              },
            })}
          />
          {errors?.email && (
            <p className="text-red-700">{errors?.email?.message}</p>
          )}
          <input
            type="password"
            className="h-10 my-4 ps-2 rounded-sm bg-[#3d3d3c] border"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
                message:
                  "Password must have at least one upper case, one lower case, one number, one special character and 8 characters",
              },
            })}
          />
          {errors?.password && (
            <p className="text-red-700">{errors?.password?.message}</p>
          )}
          <button className="bg-[#e50914] text-white cursor-pointer py-2 mt-2 rounded-md">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="text-white flex py-4 gap-4">
          <p className="text-gray-400">
            {isLogin ? "New to Netflix?" : "Already a user?"}
          </p>
          <p
            className="font-bold cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up now" : "Sign in now"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
