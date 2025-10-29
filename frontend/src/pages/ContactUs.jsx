import React from 'react';
import { useForm } from 'react-hook-form';
function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log('Submitting the form', data);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">First Name</label>
        <input
          className={errors.firstName ? 'border-red-500' : ''}
          type="text"
          {...register('firstName', {
            required: true,
            minLength: { value: 3, message: 'Min length atleast 3' },
          })}
        />
        {errors.firstName && (
          <p className="text-red-600">{errors.firstName.message}</p>
        )}

        <label htmlFor="">Last Name</label>
        <input
          type="text"
          {...register('lastName', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Last name is not as per rules',
            },
          })}
        />

        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? 'Submitting' : 'Submit'}
        />
      </form>
    </div>
  );
}

export default ContactUs;
