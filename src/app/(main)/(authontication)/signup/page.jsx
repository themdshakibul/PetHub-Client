"use client";

import { authClient } from "@/lib/auth-client";
import { Check, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (passwordValue !== confirmPasswordValue) {
      toast.error("Passwords do not match!");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const signUpData = Object.fromEntries(formData.entries());

    const { confirmPassword, ...rest } = signUpData;

    const { data, error } = await authClient.signUp.email({
      ...rest,
    });

    if (data) {
      toast.success("Successfully Signed Up!");
      redirect("/");
    }

    if (error) {
      toast.error(error.message || "Registration failed");
    }
  };

  const signUpWidthGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });

    if (data) {
      toast.success("Sigin Successfull!");
      redirect("/");
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-12 transition-colors duration-300 dark:bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-indigo-400/40 via-purple-400/40 to-pink-400/40 opacity-40 blur-[130px] animate-pulse dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500" />
      <div className="absolute bottom-1/4 right-1/4 h-112.5 w-112.5 translate-x-1/2 translate-y-1/2 rounded-full bg-linear-to-br from-fuchsia-400/30 via-rose-400/30 to-orange-300/30 opacity-35 blur-[120px] dark:from-fuchsia-500 dark:via-rose-500 dark:to-orange-400" />

      <div className="relative w-full max-w-md rounded-3xl p-8 backdrop-blur-2xl border border-black/10 bg-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] dark:border-white/15 dark:bg-white/4 dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-black/5 text-2xl shadow-inner dark:border-white/15 dark:bg-white/10">
            🚀
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">
            Create Account
          </h2>
          <p className="mt-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Join the secure ecosystem
          </p>
        </div>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Full Name */}
          <TextField isRequired name="name" type="text">
            <Label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Full Name
            </Label>
            <Input
              placeholder="Alex Walker"
              className="mt-1"
              variant="bordered"
              radius="xl"
              classNames={{
                inputWrapper:
                  "bg-black/[0.02] border-black/10 h-11 dark:bg-white/[0.02] dark:border-white/10",
              }}
            />
            <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
          </TextField>

          {/* Email Address */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(v) =>
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Invalid email" : null
            }
          >
            <Label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-200">
              Email Address
            </Label>
            <Input
              placeholder="alex@example.com"
              className="mt-1"
              variant="bordered"
              radius="xl"
              classNames={{
                inputWrapper:
                  "bg-black/[0.02] border-black/10 h-11 dark:bg-white/[0.02] dark:border-white/10",
              }}
            />
            <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
          </TextField>

          {/* Photo URL */}
          <TextField isRequired name="image" type="url">
            <Label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-200">
              Photo URL
            </Label>
            <Input
              placeholder="https://example.com/avatar.jpg"
              className="mt-1"
              variant="bordered"
              radius="xl"
              classNames={{
                inputWrapper:
                  "bg-black/[0.02] border-black/10 h-11 dark:bg-white/[0.02] dark:border-white/10",
              }}
            />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            validate={(v) => (v.length < 6 ? "Min 6 characters" : null)}
          >
            <Label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-200">
              Password
            </Label>
            <InputGroup className="mt-1">
              <InputGroup.Input
                type={isPassVisible ? "text" : "password"}
                placeholder="••••••••"
                variant="bordered"
                radius="xl"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                classNames={{
                  inputWrapper:
                    "bg-black/[0.02] border-black/10 h-11 dark:bg-white/[0.02] dark:border-white/10",
                }}
              />
              <InputGroup.Suffix className="pr-2">
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={() => setIsPassVisible(!isPassVisible)}
                >
                  {isPassVisible ? <Eye size={16} /> : <EyeSlash size={16} />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
          </TextField>

          {/* Confirm Password */}
          <TextField
            isRequired
            name="confirmPassword"
            validate={(v) =>
              v !== passwordValue ? "Passwords do not match" : null
            }
          >
            <Label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-200">
              Confirm Password
            </Label>
            <InputGroup className="mt-1">
              <InputGroup.Input
                type={isConfirmPassVisible ? "text" : "password"}
                placeholder="••••••••"
                variant="bordered"
                radius="xl"
                value={confirmPasswordValue} // Controlled Value
                onChange={(e) => setConfirmPasswordValue(e.target.value)} // টাইপ করা নিশ্চিত করতে
                classNames={{
                  inputWrapper:
                    "bg-black/[0.02] border-black/10 h-11 dark:bg-white/[0.02] dark:border-white/10",
                }}
              />
              <InputGroup.Suffix className="pr-2">
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={() => setIsConfirmPassVisible(!isConfirmPassVisible)}
                >
                  {isConfirmPassVisible ? (
                    <Eye size={16} />
                  ) : (
                    <EyeSlash size={16} />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
          </TextField>

          <Button
            type="submit"
            color="primary"
            radius="xl"
            className="w-full h-11 font-bold text-white bg-linear-to-r from-primary-500 to-purple-600 shadow-lg mt-2"
          >
            <Check className="size-4 mr-1" /> Sign Up
          </Button>
        </Form>

        {/* Google Signup */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-black/10 dark:border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
            <span className="bg-white dark:bg-slate-900 px-4 text-slate-400">
              Social Join
            </span>
          </div>
        </div>

        <Button
          onClick={signUpWidthGoogle}
          fullWidth
          variant="bordered"
          radius="xl"
          className="h-11 font-bold text-slate-700 dark:text-slate-200"
        >
          <FcGoogle size={18} className="mr-2" /> Sign up with Google
        </Button>

        <p className="mt-5 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <a
            href="/signin"
            className="font-bold text-primary-600 hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;
