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
      {/* Top Section */}
      <div>
        <div className="mt-16 container mx-auto flex flex-col space-y-5">
          <h1 className="font-bold mx-auto text-4xl ">Contact Us</h1>
          <p className="text-center mx-auto text-xl">
            Our dedicated experts are here to help you with any of your
            questions, contact us by filling out the form below and we will be
            in touch shortly.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-14 container mx-auto  border-slate-400 shadow-2xl rounded-md p-8">
        {/* <form action="" onSubmit={handleSubmit(onSubmit)}>
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
        </form> */}

        <form action="">
          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-slate-400 px-4 py-4 rounded-md placeholder:text-xl placeholder:-ml-8"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Enter your Email"
                className="border border-slate-400 px-4 py-4 rounded-md placeholder:text-xl placeholder:-ml-8"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="border border-slate-400 px-4 py-4 rounded-md placeholder:text-xl placeholder:-ml-8"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="border border-slate-400 px-4 py-4 rounded-md placeholder:text-xl placeholder:-ml-8"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
              className="border border-slate-400 px-2 py-2 rounded-md placeholder:text-xl "
            ></textarea>
          </div>

          <div className="mt-6">
            <input
              type="submit"
              name=""
              id=""
              className="bg-[#1d54c8] text-white px-4 py-2 rounded-md cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
