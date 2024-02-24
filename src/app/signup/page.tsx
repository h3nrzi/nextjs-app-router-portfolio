'use client';

import axios, { AxiosError } from 'axios';
import { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const defaultValueFormData = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: ''
};

const SignupForm = () => {
  const [formData, setFormData] = useState(defaultValueFormData);

  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const passwordConfirmRef = useRef<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFormData({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirm: passwordConfirmRef.current.value
    });

    console.log({ formData });

    await axios
      .post('https://digi-amir.liara.run/api/v1/users/signup', formData)
      // .post('http://localhost:3000/api/v1/users/signup', formData)
      .then(() => toast.success('کاربر با موفقیت ثبت نام کرد'))
      .catch((err) => {
        toast.error('خطایی رخ داد');
        console.log(err);
      });
  };

  return (
    <div className="m-auto w-50">
      <Toaster />
      <form onSubmit={handleSubmit} className="container mt-5">
        <div className="form-group mb-2">
          <label>نام:</label>
          <input type="text" className="form-control" ref={nameRef} required />
        </div>
        <div className="form-group mb-2">
          <label>ایمیل:</label>
          <input type="email" className="form-control" ref={emailRef} required />
        </div>
        <div className="form-group mb-2">
          <label>پسوورد:</label>
          <input type="password" className="form-control" ref={passwordRef} required />
        </div>
        <div className="form-group mb-2">
          <label>تایید پسوورد:</label>
          <input type="password" className="form-control" ref={passwordConfirmRef} required />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
