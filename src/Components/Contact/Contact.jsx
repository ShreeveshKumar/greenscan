import React, { useState } from "react";

const Contact = () => {
  const [name, setname] = useState();
  const [mail, setmail] = useState();
  const [message, setmessage] = useState();

  return (
    <div>
          <div className='flex flex-col items-center justify-center text-center text-xl mb-8 '>
            <span className='bg-blue-600 text-white w-44 py-2 mb-4 rounded'>Get in touch</span>
            <span className='bg-lime-600 text-white w-44 py-2 rounded'>Tell us your views</span>
        </div>

          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 rounded w-96 shadow-lg shadow-black">
                <h1 className="text-xl font-bold mb-4">Enter your name</h1>
                <input className="border w-full p-2 mb-4" type="text" name="name" id="name" onChange={(e)=>setname(e.target.value)}/>

                <h1 className="text-xl font-bold mb-4">Enter your email</h1>
                <input className="border w-full p-2 mb-4" type="text" name="email" id="email" onChange={(e)=>setmail(e.target.value)}/>

                <h1 className="text-xl font-bold mb-4">Enter your message</h1>
                <textarea
                    className="border w-full p-2 mb-4 resize-none"
                    name="message"
                    id="message"
                    rows="4"
                    onChange={(e) => setmessage(e.target.value)}
                ></textarea>
                <button className="bg-green-500 text-white py-2 px-4 rounded">Send</button>
            </div>
        </div>
    </div>
  );
};

export default Contact;
