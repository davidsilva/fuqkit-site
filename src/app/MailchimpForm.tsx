'use client';

import React from "react";

export default function MailchimpForm() {
  return (
    <div className="w-full max-w-xl mx-auto bg-gray-800/90 rounded-lg shadow-lg p-6 my-8">
      <h2 className="text-2xl font-bold mb-2 text-center">Win a Fuqkit!</h2>
      <form
        action="https://fuqkit.us12.list-manage.com/subscribe/post?u=dc26919366bda1becc321be5e&amp;id=ac3ab3954d&amp;f_id=00fc9fe0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="space-y-4"
        target="_blank"
        noValidate
      >
        <div className="flex flex-col">
          <label htmlFor="mce-EMAIL" className="font-semibold">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            className="input input-bordered mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mce-FNAME" className="font-semibold">
            First Name
          </label>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            className="input input-bordered mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mce-LNAME" className="font-semibold">
            Last Name
          </label>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            className="input input-bordered mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Birthday</label>
          <div className="flex gap-2">
            <input
              className="input input-bordered w-16"
              type="text"
              pattern="[0-9]*"
              placeholder="MM"
              size={2}
              maxLength={2}
              name="BIRTHDAY[month]"
              id="mce-BIRTHDAY-month"
            />
            <span>/</span>
            <input
              className="input input-bordered w-16"
              type="text"
              pattern="[0-9]*"
              placeholder="DD"
              size={2}
              maxLength={2}
              name="BIRTHDAY[day]"
              id="mce-BIRTHDAY-day"
            />
            <span className="text-xs text-gray-500">(mm / dd)</span>
          </div>
        </div>
        <input type="hidden" name="tags" value="9398936,9398937" />
        {/* Honeypot */}
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input
            type="text"
            name="b_dc26919366bda1becc321be5e_ac3ab3954d"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="btn btn-primary w-full"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}