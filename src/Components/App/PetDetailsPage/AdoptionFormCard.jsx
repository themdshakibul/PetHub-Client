"use client";

import { authClient } from "@/lib/auth-client";
import { adoptUserPet } from "@/lib/Data";
import { Card, Button, DateField, Label, DatePicker } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaHeart,
  FaUser,
  FaEnvelope,
  FaCalendar,
  FaCommentDots,
} from "react-icons/fa";

export const AdoptionFormCard = ({ petInfo }) => {
  const [date, setDate] = useState(null);

  const { data } = authClient.useSession();
  const user = data?.user;

  const {
    _id,
    petName,
    petImageUrl,
    category,
    status,
    healthStatus,
    description,
    age,
    breed,
    gender,
    adoptionFee,
    species,
  } = petInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const petData = Object.fromEntries(formData.entries());

    const fieldData = {
      userId: user.id,
      usrName: user.name,
      ...petData,
      _id,
      petName,
      petImageUrl,
      category,
      status,
      healthStatus,
      description,
      age,
      breed,
      gender,
      adoptionFee,
      species,
      date: new Date(date),
    };
    // console.log(fieldData);

    const adopt = await adoptUserPet(fieldData);

    if (adopt) {
      toast.success("Adopt Successfull!");
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto p-4 sm:p-0">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-rose-500/15 dark:bg-rose-500/20 rounded-full blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none animate-pulse" />

      <Card className="relative w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[32px] overflow-hidden shadow-xl dark:shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
        <div className="rounded-2xl px-6 py-6 sm:px-8 sm:pt-8 sm:pb-6 bg-linear-to-b from-rose-500/10 to-transparent dark:from-rose-500/10 border-b border-slate-200 dark:border-white/10">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1.5">
            Request to Adopt{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-pink-500">
              {petName}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-[13px] leading-relaxed">
            Fill out this form and the owner will review your request within 24
            hours.
          </p>
        </div>
        {/* Form Body */}
        <form
          onSubmit={handleSubmit}
          className="px-6 py-6 sm:px-8 sm:py-7 space-y-5"
        >
          {/* Pet Name */}
          <div className="space-y-1.5">
            <label className="text-slate-500 dark:text-slate-400 font-bold text-[11px] uppercase tracking-widest block">
              Pet Name
            </label>
            <input
              readOnly
              name="name"
              value={petName}
              className="w-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-rose-400 focus:border-rose-500 h-12 pl-5 pr-4 rounded-2xl text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all cursor-not-allowed"
            />
          </div>

          {/* Your Name */}
          <div className="space-y-1.5">
            <label className="text-slate-500 dark:text-slate-400 font-bold text-[11px] uppercase tracking-widest block">
              Your Name
            </label>
            <div className="relative">
              <FaUser
                className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-500/70"
                size={14}
              />
              <input
                readOnly
                value={user?.name}
                name="yourName"
                className="w-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-rose-400 focus:border-rose-500 h-12 pl-11 pr-4 rounded-2xl text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all cursor-not-allowed"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-slate-500 dark:text-slate-400 font-bold text-[11px] uppercase tracking-widest block">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope
                className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-500/70"
                size={14}
              />
              <input
                readOnly
                value={user?.email}
                name="email"
                className="w-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-rose-400 focus:border-rose-500 h-12 pl-11 pr-4 rounded-2xl text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all cursor-not-allowed"
              />
            </div>
          </div>

          {/* Pickup Date */}
          <div className="space-y-1.5">
            <label className="text-slate-500 dark:text-slate-400 font-bold text-[11px] uppercase tracking-widest block">
              Preferred Pickup Date
            </label>
            <div className="relative">
              <FaCalendar
                className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-500/70 z-10"
                size={14}
              />
              <DateField onChange={setDate} name="date">
                <DateField.Group className="w-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-rose-400 focus-within:border-rose-500 h-12 pl-7 pr-4 rounded-2xl text-slate-900 dark:text-slate-100 outline-none transition-all flex items-center">
                  <DateField.Input>
                    {(segment) => <DateField.Segment segment={segment} />}
                  </DateField.Input>
                </DateField.Group>
              </DateField>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-slate-500 dark:text-slate-400 font-bold text-[11px] uppercase tracking-widest block">
              Message to Owner
            </label>
            <div className="relative">
              <FaCommentDots
                className="absolute left-4 top-4 text-rose-500/70"
                size={14}
              />
              <textarea
                rows={3}
                name="text"
                placeholder="Tell the owner why you'd be a great match for Dj Dog..."
                className="w-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-rose-400 focus:border-rose-500 rounded-2xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none resize-y min-h-23"
              />
            </div>
          </div>

          <div className="h-px bg-slate-200 dark:bg-white/10 my-3" />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            className="relative bg-linear-to-r from-rose-500 via-pink-600 to-rose-500 text-white font-extrabold text-[15px] h-14 rounded-2xl shadow-lg hover:-translate-y-0.5 active:scale-[0.985] transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2 tracking-wide">
              <FaHeart className="animate-pulse" size={16} />
              Adopt {petName} 🐾
            </span>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AdoptionFormCard;
