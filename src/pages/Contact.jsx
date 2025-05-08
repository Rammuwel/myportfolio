import profile from '../assets/portfolio-img.png'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { toast } from 'react-toastify';

export default function Contact() {

  const messageRef = useRef()
  const emailRef = useRef()
  const nameRef = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !nameRef.current?.value.trim() ||
      !emailRef.current?.value.trim() ||
      !messageRef.current?.value.trim()
    ) {
      toast.warning("Please fill in all fields");
      return;
    }
  
    emailjs.sendForm(
      'service_b3ahr3v',
      'template_yre21ia',
      e.target,
      'IGnYdw9yJH2r5Zp4T'  
    ).then(
      (result) => {
        console.log(result.text);
        toast.success('Message sended successfully')
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      },
      (error) => {
        console.log(error.text);
        toast.error(error.text)
      }
    );
  };
  

  return (
    <>
      <div className='w-full min-h-screen'>
        <div className='p-5 mx-auto max-w-5xl flex flex-col gap-5'>
          <div className='flex flex-col md:flex-row min-h-56  items-center space-x-4'>
            <div className='w-40 h-40 rounded-full overflow-hidden border border-gray-700'>
              <img src={profile} alt="Ram" className='w-full' />
            </div>
            <div>
              <h1 className="text-3xl font-bold p-1 border-b  border-b-gray-700 ">Let’s Connect <span className='inline-block animate-wave'>Me 🤝</span></h1>
              <p className="text-gray-300">I’m always open to meaningful conversations</p>
            </div>
          </div>

          <div className="mt-5 w-full">

            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <form onSubmit={sendEmail}>
              <label   htmlFor="name" className="block text-sm">Name</label>
              <input ref={nameRef} type="text" id="name" name='name' className="w-full p-2 mb-4 border rounded" />

              <label htmlFor="email" className="block text-sm">Email</label>
              <input ref={emailRef} type="email" id="email" name='email' className="w-full p-2 mb-4 border rounded" />

              <label htmlFor="message" className="block text-sm">Message</label>
              <textarea ref={messageRef} id="message" name='message' className="w-full p-2 mb-4 border rounded" rows="4"></textarea>

              <button type="submit" className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded">Send</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
