const About = () => {

  return (
    <section
      className="flex flex-col md:flex-row relative top-[100px] gap-4 xl:gap-10 bg-[#dbf1f6] px-5 md:px-10 lg:px-40 2xl:px-80 pt-5 md:pt-10 lg:pt-20 pb-20 md:pb-28 rounded-t-[50px]"
    >
      <div id="about" className="absolute top-[-100px]"></div>
      <h2 className="text-2xl md:text-3xl text-center md:text-left md:min-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] font-bold tracking-wide">
        O Nama
      </h2>
      <article className="text-base md:text-2xl text-center md:text-left leading-normal flex flex-col gap-4 xl:gap-10">
        <p>
          Mi smo dinamičan ansambl muzičara koji nastoji da stvara nezaboravne trenutke prilagođene vašoj jedinstvenoj prilici. Predstavićemo raznoliki repertoar koji obuhvata klasična remek-dela, savremene hitove i personalizovane aranžmane. Bilo da se radi o venčanju, romantičnoj večeri, korporativnom događaju ili privatnom okupljanju, dozvolite nam da vašem posebnom danu dodamo dašak elegancije i šarma.
        </p>
      </article>
    </section>
  );
};

export default About;
