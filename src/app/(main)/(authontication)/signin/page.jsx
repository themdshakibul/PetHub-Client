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
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SiginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const SiginData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      ...SiginData,
    });

    if (data) {
      toast.success("Successfulli Sign In!");
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const siginWidthGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if (data.success) {
      toast.success("Sigin Successfull");
      redirect("/");
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-12 selection:bg-primary-500/30 transition-colors duration-300 dark:bg-slate-950">
      <div className="absolute top-1/4 left-1/4 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-indigo-400/40 via-purple-400/40 to-pink-400/40 opacity-40 blur-[130px] animate-pulse duration-6000 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500" />
      <div className="absolute bottom-1/4 right-1/4 h-112.5 w-112.5 translate-x-1/2 translate-y-1/2 rounded-full bg-linear-to-br from-fuchsia-400/30 via-rose-400/30 to-orange-300/30 opacity-35 blur-[120px] dark:from-fuchsia-500 dark:via-rose-500 dark:to-orange-400" />
      <div className="absolute top-1/2 left-1/2 h-75 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[100px] dark:bg-cyan-500/15" />

      <div
        className="relative w-full max-w-md rounded-3xl p-8 transition-all duration-500 backdrop-blur-2xl
        /* Light Mode Glass */
        border border-black/10 bg-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] hover:border-black/15 hover:bg-white/70
        /* Dark Mode Glass */
        dark:border-white/15 dark:bg-white/4 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] dark:hover:border-white/25 dark:hover:bg-white/6"
      >
        <div className="absolute inset-x-0 top-0 h-px rounded-t-3xl bg-linear-to-r from-transparent via-black/10 to-transparent dark:via-white/30" />

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-black/5 text-2xl shadow-inner backdrop-blur-md transition-transform duration-300 hover:scale-110 dark:border-white/15 dark:bg-white/10">
            🐾
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 drop-shadow-xs dark:text-slate-50 dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
            Welcome Back
          </h2>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Secure Gateway Access
          </p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Email Address
            </Label>
            <Input
              placeholder="john@example.com"
              className="mt-1.5"
              variant="bordered"
              radius="xl"
              classNames={{
                input:
                  "text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium",
                inputWrapper:
                  "bg-black/[0.02] border-black/10 hover:border-black/20 focus-within:!border-primary-500 transition-all duration-200 h-11 backdrop-blur-md dark:bg-white/[0.02] dark:border-white/10 dark:hover:border-white/20 dark:focus-within:!border-primary-400",
              }}
            />
            <FieldError className="text-xs font-semibold text-rose-500 dark:text-rose-400 mt-1.5" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Need at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need at least one number";
              return null;
            }}
          >
            <div className="flex justify-between items-center">
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Password
              </Label>
            </div>
            <InputGroup className="mt-1.5">
              <InputGroup.Input
                className="w-full"
                type={isVisible ? "text" : "password"}
                placeholder="••••••••••••"
                variant="bordered"
                radius="xl"
                classNames={{
                  input:
                    "text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium",
                  inputWrapper:
                    "bg-black/[0.02] border-black/10 hover:border-black/20 focus-within:!border-primary-500 transition-all duration-200 h-11 backdrop-blur-md dark:bg-white/[0.02] dark:border-white/10 dark:hover:border-white/20 dark:focus-within:!border-primary-400",
                }}
              />
              <InputGroup.Suffix className="pr-2">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="light"
                  radius="full"
                  className="text-slate-500 hover:bg-black/5 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-200"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description className="text-[11px] font-medium text-slate-500 mt-1 dark:text-slate-500">
              Must include 8+ chars, 1 uppercase, and 1 number.
            </Description>
            <FieldError className="text-xs font-semibold text-rose-500 dark:text-rose-400 mt-1.5" />
          </TextField>

          <div className="flex gap-3 mt-3">
            <Button
              type="submit"
              color="primary"
              radius="xl"
              className="flex-1 h-11 font-bold text-white shadow-lg bg-linear-to-r from-primary-500 via-indigo-500 to-purple-600 shadow-primary-500/20 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <Check className="size-4 mr-1" />
              Sign In
            </Button>
          </div>
        </Form>

        <div className="relative my-7">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-black/10 dark:border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
            <span className="bg-transparent px-4 text-slate-400 dark:text-slate-500 backdrop-blur-xl">
              Secured OAuth 2.0
            </span>
          </div>
        </div>

        <Button
          onClick={siginWidthGoogle}
          fullWidth
          variant="bordered"
          radius="xl"
          size="lg"
          className="h-11 bg-black/2 border-black/10 font-bold text-slate-700 shadow-xs transition-all duration-300 hover:bg-black/5 hover:border-black/20 hover:text-slate-900 active:scale-[0.98] dark:bg-white/3 dark:border-white/10 dark:text-slate-200 dark:shadow-md dark:hover:bg-white/8 dark:hover:border-white/20 dark:hover:text-white"
        >
          <FcGoogle />
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
          New to the platform?{" "}
          <Link
            href="/signup"
            className="font-bold text-primary-600 hover:text-primary-500 hover:underline transition-colors dark:text-primary-400 dark:hover:text-primary-300"
          >
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SiginPage;
