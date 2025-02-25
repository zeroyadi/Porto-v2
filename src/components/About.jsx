import IR from "../assets/IR.png";

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
            <img className="rounded-2xl" src={IR} alt="Blach Hole" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Hai semuanyaa 👋, nama saya Irsyad Hidayat. Sejak kecil, saya
              selalu merasa tertarik dengan teknologi dan bagaimana hal-hal di
              balik layar berfungsi. Rasa ingin tahu itulah yang akhirnya
              membawa saya kepada dunia website. Ketertarikan saya pada website
              dimulai saat saya pertama kali melihat bagaimana informasi dapat
              diakses dengan mudah hanya dengan beberapa klik. Saya merasa kagum
              dengan bagaimana sebuah halaman web yang terlihat sederhana
              sebenarnya terdiri dari berbagai elemen yang kompleks dan bekerja
              bersama-sama untuk memberikan pengalaman yang mulus bagi
              penggunanya. Seiring berjalannya waktu, saya mulai mendalami lebih
              dalam tentang pembuatan dan pengelolaan website. Saya belajar
              tentang berbagai bahasa pemrograman seperti HTML, CSS, dan
              JavaScript, yang merupakan fondasi dasar dari sebuah website.
              Ketika saya mulai mengerti cara membuat halaman web dasar, saya
              merasakan kepuasan tersendiri setiap kali berhasil menyelesaikan
              proyek kecil. Tidak berhenti di situ, saya juga mulai mempelajari
              berbagai framework yang membantu dalam pengembangan website. Saya
              telah belajar dan menggunakan framework seperti React.js untuk
              pengembangan front-end, yang memungkinkan saya membuat antarmuka
              pengguna yang dinamis dan interaktif. Selain itu, saya juga telah
              mengenal Next.js, sebuah framework React yang powerful untuk
              membangun aplikasi web dengan fitur server-side rendering (SSR)
              dan static site generation (SSG). Next.js membantu saya dalam
              mengoptimalkan performa dan SEO pada proyek-proyek website yang
              saya buat. Di sisi back-end, saya juga telah mempelajari Laravel,
              sebuah framework PHP yang sangat populer dan memiliki sintaks yang
              elegan. Laravel memudahkan saya dalam membangun aplikasi web yang
              kompleks dengan fitur-fitur seperti routing, ORM (Eloquent), dan
              sistem autentikasi yang terintegrasi. Kombinasi antara Next.js
              untuk front-end dan Laravel untuk back-end memberikan saya
              fleksibilitas dalam mengembangkan aplikasi web yang modern dan
              efisien. Dengan mempelajari framework-framework ini, saya semakin
              memahami bagaimana sebuah website dapat dikembangkan dengan lebih
              cepat, terstruktur, dan scalable. Setiap langkah dalam proses
              belajar ini memberikan saya wawasan baru dan semakin memperdalam
              passion saya terhadap dunia pengembangan web. Terima kasih! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
