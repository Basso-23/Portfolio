import Clipboard from "@/assets/Icons/Clipboard";
import Send from "@/assets/Icons/Send";
import Check from "@/assets/Icons/Check";

const Navbar = ({ language, setLanguage, notify, refresh, resume }) => {
  return (
    <>
      {/* Logo */}
      <div className=" pointer-events-none roboto-bold text-[30px] border-[3.5px]  border-black w-[50px] h-[48px]  roboto-500 flex items-center text-center justify-center">
        P
      </div>
      {/* Navbar----------------------------------------------- */}
      <div className=" lg:flex hidden gap-[45px] roboto-500 text-[12px] tracking-wide uppercase">
        {/* correo----------------------------------------------- */}
        <div>
          <div className=" cursor-default focus w-full h-full relative">
            {language ? <div>Correo electrónico</div> : <div>Email</div>}
          </div>
          <div className="focus-content2 absolute sm:flex hidden justify-center flex-col tracking-wide w-[210px] roboto-light">
            <div className="h-[10px] w-full"></div>

            <div
              onClick={notify}
              className=" bg-[#101010] normal-case text-[12px] px-6 py-4 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer "
            >
              <div className="relative flex">
                {language ? (
                  <div>Copiar al portapapeles</div>
                ) : (
                  <div>Copy to clipboard</div>
                )}
                <div className="  absolute -right-6 ">
                  <Clipboard />
                </div>
              </div>
            </div>
            <a
              href="mailto:carlos.baso23@gmail.com"
              className=" bg-[#101010] normal-case text-[12px] px-6 py-4 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer "
            >
              <div className="relative flex">
                {language ? <div>Enviar correo</div> : <div>Send email</div>}
                <div className="  absolute -right-6 ">
                  <Send />
                </div>{" "}
              </div>
            </a>
          </div>
        </div>
        {/* Github----------------------------------------------- */}
        <a
          target="_blank"
          href="https://github.com/Basso-23"
          className=" cursor-pointer"
        >
          Github
        </a>
        {/* LinkedIn----------------------------------------------- */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/carlosbaso/"
          className=" cursor-pointer"
        >
          Linkedin
        </a>
        {/* Currículum----------------------------------------------- */}
        <a target="_blank" href={resume} className=" cursor-pointer">
          {language ? <div>Currículum</div> : <div>Resume</div>}
        </a>
        {/* Idioma----------------------------------------------- */}
        <div>
          <div className="cursor-default focus w-full h-full relative">
            {language ? <div>Idioma</div> : <div>Language</div>}
          </div>
          <div className="focus-content3 absolute sm:flex hidden justify-center flex-col tracking-wide w-[210px] roboto-light">
            <div className="h-[10px] w-full"></div>
            <div
              onClick={() => {
                setLanguage(true);
                refresh();
              }}
              className=" bg-[#101010] normal-case text-[12px] px-6 py-4 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer "
            >
              <div className="relative flex">
                Español
                <div className=" -mt-[4px] absolute -right-6 ">
                  {language ? <Check /> : null}
                </div>{" "}
              </div>
            </div>

            <div
              onClick={() => {
                setLanguage(false);
                refresh();
              }}
              className=" bg-[#101010] normal-case text-[12px] px-6 py-4 border-b-[1px] border-[#333333] flex gap-2 cursor-pointer "
            >
              <div className="relative flex">
                English
                <div className=" -mt-[4px] absolute -right-8 ">
                  {language ? null : <Check />}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
