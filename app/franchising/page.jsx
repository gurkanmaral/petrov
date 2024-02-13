import { Button } from "@nextui-org/react";

const page = () => {
  return (
    <section className=" mx-auto">
      <div className="relative">
        <img
          className="aspect-[16/6] object-cover"
          src="/banner-2.png"
          alt=""
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-5 py-10 md:py-20 gap-10">
          <div className="col-span-1 xl:col-span-2 gap-5 flex flex-col font-poppins  text-[14px] ">
            <p>Sayın Girişimci,</p>
            <p>
              Petrov, lezzetli yiyecek ve içeceklerin tadını çıkarmak isteyen
              insanlara en iyi hizmeti sunmayı hedefleyen bir markadır. 4 yılı
              aşkın süredir, Petrov olarak lezzet ve kalite konusundaki
              taahhüdümüzü sürdürmekteyiz ve şimdi bu heyecan verici yolculuğa
              sizinle devam etmek istiyoruz.
            </p>
            <p>Neden Petrov Franchise'?</p>
            <p>
              Petrov Franchise, iş dünyasına girmek veya mevcut işinizi büyütmek
              isteyen girişimciler için mükemmel bir fırsattır. İşletmemizi
              franchise olarak devralmanın ve Petrov markasını temsil etmenin
              birçok avantajı bulunmaktadır:
            </p>
            <div>
              <p>
                1. Güçlü Bir Marka Kimliği: Petrov, müşterileri tarafından
                tanınan ve sevilen bir markadır. Lezzetli yemekleri ve kaliteli
                içecekleri ile biliniriz.
              </p>
              <p>
                2. Operasyonel Desteğimiz: Petrov Franchise sahiplerine işletme
                açılışından sonraki süreçte kapsamlı operasyonel destek
                sağlarız. Personel eğitimi, tedarik zinciri yönetimi ve işletme
                yönetimi konularında size rehberlik ederiz.
              </p>
              <p>
                3.Menü Çeşitliliği: Petrov, zengin bir yiyecek ve içecek menüsü
                sunar. Müşterilerinizi çekmek ve farklı tatları denemelerini
                sağlamak için çeşitli seçenekler sunarız.
              </p>
              <p>
                4.Kazançlı Bir İş Modeli: Petrov Franchise, kârlı bir iş modeli
                sunar. Maliyet etkinliği ve gelir potansiyeli ile girişimciler
                için çekici bir fırsattır.
              </p>
              <p>
                5.Sürekli İnovasyon: Petrov olarak sürekli olarak yenilikçi ürün
                ve hizmetler geliştirmeye odaklanırız. Franchise sahiplerimiz,
                bu inovasyonlardan faydalanma şansına sahiptir.
              </p>
            </div>
            <p>
              Başvurunuzu yaparak Petrov Franchise ailesine katılabilir ve kendi
              başarı hikayenizi yazabilirsiniz. Bizimle iş yapmak için gereken
              adımları atmaya hazırsanız, lütfen bize ulaşın. Size daha fazla
              bilgi sunmak ve sizi Petrov ailesinin bir parçası yapmak için
              sabırsızlanıyoruz.
            </p>
            <p>
              Daha fazla bilgi almak ve başvuru yapmak için bize ulaşın. Siz de
              Petrov Franchise fırsatını kaçırmayın!
            </p>
            <p>Saygılarımızla, Petrov</p>
          </div>
          <div className="col-span-1">
            <form className="grid grid-cols-1 gap-5">
              <div className="flex flex-col">
                <div>
                  Doğum Tarihi <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  className="border-gray-300 border rounded-[5px] p-2"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  Ad Soyad <span className="text-red-500">*</span>
                </div>
                <input
                  type="date"
                  className="border-gray-300 border rounded-[5px] p-2"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  Telefon <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  className="border-gray-300 border rounded-[5px] p-2"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  Meslek <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  className="border-gray-300 border rounded-[5px] p-2"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  İl <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  className="border-gray-300 border rounded-[5px] p-2"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  Yatırım Yapılacak Lokasyon{" "}
                  <span className="text-red-500">*</span>
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="border border-gray-300 p-3 rounded-[6px]"
                ></textarea>
              </div>
              <Button color="success" className="text-white">
                Gönder
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
