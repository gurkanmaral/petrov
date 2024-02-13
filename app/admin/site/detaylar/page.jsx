import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Button, Card, Divider, Input } from "@nextui-org/react";
import { GoCheck } from "react-icons/go";

export default function page() {
  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title={"Detaylar"} />
        <Button
          startContent={<GoCheck size={20} strokeWidth={1} />}
          color="success"
          className="text-white"
        >
          Değişiklikleri Kaydet
        </Button>
      </PageHeaderSection>

      {/* Seni görmek güzel fonksiyonunun yönetileceği bir alan. Bir text ve bir görsel olacak. */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <Card className="p-4">
            <div className="text-lg font-medium">Seni Görmek Güzel</div>
            <Divider className="my-4" />
            <div className="flex flex-col space-y-5">
              <Input
                label="Açılış Yazısı"
                placeholder="Site ilk açıldığında gösterilecek yazı"
                type="text"
              />
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Görsel
                </label>
                <input
                  type="file"
                  className="w-full border border-gray-200 rounded-lg p-2"
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-1">
          <Card className="p-4">
            <div className="text-lg font-medium">Banner Yönetimi</div>
            <Divider className="my-4" />
            <div className="flex flex-col space-y-5">
              <Input
                label="Link"
                placeholder="Banner'a tıklandığında yönlendirilecek link"
                type="text"
              />
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Görsel
                </label>
                <input
                  type="file"
                  className="w-full border border-gray-200 rounded-lg p-2"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-1">
          {/* Menüler fonksiyonunun yönetileceği bir alan. Bir menü adı, açıklaması ve bir görsel olacak. */}
          <Card className="p-4">
            <div className="text-lg font-medium">FSM Menü</div>
            <Divider className="my-3" />
            <div className="flex flex-col space-y-5">
              <Input
                label="Menü adı"
                placeholder="Sitede menü adı olarak gösterilen alan"
                type="text"
              />
              <Input
                label="Açılış/Kapanış Saatleri"
                placeholder="Şube açılış/kapanış saatlerinin gösterildiği alan"
                type="text"
              />
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Görsel
                </label>
                <input
                  type="file"
                  className="w-full border border-gray-200 rounded-lg p-2"
                />
                <img
                  className="w-full rounded-lg aspect-[16/9]"
                  src="https://via.placeholder.com/1600x900"
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-1">
          {/* Menüler fonksiyonunun yönetileceği bir alan. Bir menü adı, açıklaması ve bir görsel olacak. */}
          <Card className="p-4">
            <div className="text-lg font-medium">PodyumPark Menü</div>
            <Divider className="my-3" />
            <div className="flex flex-col space-y-5">
              <Input
                label="Menü adı"
                placeholder="Sitede menü adı olarak gösterilen alan"
                type="text"
              />
              <Input
                label="Açılış/Kapanış Saatleri"
                placeholder="Şube açılış/kapanış saatlerinin gösterildiği alan"
                type="text"
              />
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Görsel
                </label>
                <input
                  type="file"
                  className="w-full border border-gray-200 rounded-lg p-2"
                />
                <img
                  className="w-full rounded-lg aspect-[16/9]"
                  src="https://via.placeholder.com/1600x900"
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
