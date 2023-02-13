import React from "react";

const Contact = () => {
  const info_contatos =[
    {logo:'mail', text:"rfaeldel@outlook.com"},
    {logo:'logo-whatsapp', text:"+55 (12)99612-6551"}
  ]
  return (
  <section id="contact" className="py-19 px-3 text-white">
    <div className="text-center mt-8">
      <h3 className="text-4xl font-semibold">
        Entre <span className="text-cyan-600">em</span> Contato
      </h3>
      <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl
       bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
        <form className="flex flex-col flex-1 gap-5">
          <input type="Seu nome" placeholder="Seu nome" />
          <input type="Email" placeholder="Seu e-mail" />
          <textarea rows={10} placeholder="Sua mensagem"></textarea>
          <button className="btn-primary w-fit">Enviar</button>
        </form>
        <div className="flex flex-col gap-7">
          {
            info_contatos.map((info_contato, i)=>(
              <div className="flex gap-4 w-fit items-center" key={i}>
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name={info_contato.logo}></ion-icon>
                </div>
                <p className="text-lg">{info_contato.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
