'use client';
import * as React from 'react';
import Button from "./Button";
import * as yup from 'yup';
import { useState } from 'react';

interface ValuesForm {
    fullName: string,
    email: string,
    phone: string,
    message?: string,
}

interface Errors {
    fullName?: string,
    email?: string,
    phone?: string,
}

const schema = yup.object().shape({
    fullName: yup
    .string()
    .required('Full name is required')
    .test('two-words', 'Wrong Full name', (value) => {
      if (value) {
        const words = value.split(' ');
        return words.length === 2;
      }
      return false;
    }),
    email: yup.string().email('Wrong Email').required('Email is required'),
    phone: yup.string().matches(/^\d{10}$/, 'Wrong Phone').required('Phone is reqired'),
    message: yup.string()
})

const ContactForm: React.FC = () => {
    const [errors, setErrors] = useState<Errors>({});
    const [values, setValues] = useState<ValuesForm>({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    

      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          await schema.validate(values, { abortEarly: false });
        } catch (validationErrors) {
         
          if (validationErrors instanceof yup.ValidationError) {
            const newErrors: Errors = {};
            validationErrors.inner.forEach((error) => {
              if (error.path) {
                // newErrors[error.path] = error.message;
              }
            });
            setErrors(newErrors);
          }
        }
      };

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value,
        });
      };



  return (
    <div className="bg-grey_light px-3 py-9  regular-16">
      <form className="grid grid-cols-1 gap-7" onSubmit={handleSubmit}>
      <label className="block">
        <span className="grid gap-2">* Full name:</span>
          <input
            type="text"
            name="full name"
            placeholder="John Rosie"
            required
            className="regular-18"/>
            
          <div className="h-[1px] bg-secondary w-full mt-2"></div>
          {errors.fullName && <span className="text-red_error">{errors.fullName}</span>}
       </label>
        
       <label className="block">
        <span className="grid gap-2">* E-mail:</span>
          <input
            type="e-mail"
            name="e-mail"
            placeholder="johnrosie@gmail.com"
            required
            className="regular-18"
          />
          <div className="h-[1px] bg-secondary w-full mt-2"></div>
          {errors.email && <span className="text-red_error">{errors.email}</span>}
        </label>

        <label className="block">
        <span className="grid gap-2">* Phone:</span>
          <input
            type="number"
            name="phone"
            placeholder="380961234567"
            required
            className="regular-18"
          />
          {!errors.phone && <div className="h-[1px] bg-secondary w-full mt-2"></div>}
          {errors.phone && <span className="text-red_error">{errors.phone}</span> && <div className="h-[1px] bg-red_error w-full mt-2"></div>}
        </label>
        
        <label className="block">
        <span className="grid gap-2">Message:</span>
          <textarea
            name="comment"
            placeholder="My message...."
            className="h-[147px] regular-18"
          ></textarea>
          <div className="h-[1px] bg-secondary w-full mt-2"></div>
        </label>
        
      <div className="flex justify-end mt-4">
      <Button 
      type="submit"
      title="Send"
      icon="/svg/arrow-right.svg"
      variant="btn_transparent"/>
      </div>
      </form>
    </div>
  );
};


export default ContactForm;
