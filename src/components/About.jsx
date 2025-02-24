import Bh from "../assets/Black Hole.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-50 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={Bh} alt="Blach Hole" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Black hole adalah objek luar angkasa dengan gravitasi sangat kuat
              sehingga cahaya pun tidak bisa lepas darinya. Mereka terbentuk
              dari runtuhnya bintang besar dan memiliki titik pusat yang disebut
              singularitas, di mana massa terkonsentrasi secara ekstrem. Batas
              di sekitar black hole disebut event horizon—begitu sesuatu
              melewatinya, tidak ada yang bisa keluar. Black hole bisa bermassa
              bintang, menengah, atau supermasif, dengan yang terakhir ditemukan
              di pusat galaksi-galaksi besar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
