"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import {
  Button,
  Card,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoCheck, GoPlus, GoTrash } from "react-icons/go";

const App = () => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [addresses, setAddresses] = useState([
    {
      name: "Podyumpark",
      description: "Podyumpark AVM",
      link: "https://www.podyumpark.com/",
    },
  ]);
  const [emails, setEmails] = useState([
    "uzunfurkan11@gmail.com",
    "petrovcoffee@gmail.com",
  ]);
  const [phoneNumbers, setPhoneNumbers] = useState(["0533 560 72 61"]);
  const [modalAction, setModalAction] = useState(null);

  const addAddress = () => {
    setAddresses([...addresses, { name: "", description: "", link: "" }]);
  };

  const removeAddress = (index) => {
    const updatedAddresses = [...addresses];
    updatedAddresses.splice(index, 1);
    setAddresses(updatedAddresses);
  };

  const addEmail = () => {
    setEmails([...emails, ""]);
  };

  const removeEmail = (index) => {
    const updatedEmails = [...emails];
    updatedEmails.splice(index, 1);
    setEmails(updatedEmails);
  };

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const removePhoneNumber = (index) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers.splice(index, 1);
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const areYouSureRemover = (index, type) => {
    switch (type) {
      case "email":
        removeEmail(index);
        break;
      case "address":
        removeAddress(index);
        break;
      case "phoneNumber":
        removePhoneNumber(index);
        break;

      default:
        break;
    }
  };

  const handleModalTrigger = (index, type) => {
    setModalAction({ index, type });
    onOpen();
  };

  const getContactInfos = () => {
    axios.get("/api/site/iletisim").then((res) => {
      const { contacts } = res.data;
      setAddresses(contacts.addresses);
      setEmails(contacts.emails);
      setPhoneNumbers(contacts.phones);
    });
  };

  const postContactInfos = () => {
    axios
      .post("/api/site/iletisim", {
        contacts: { addresses, emails, phones: phoneNumbers },
      })
      .then((res) => {
        router.refresh();
      });
  };

  useEffect(() => {
    getContactInfos();
  }, []);

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title={"İletişim Bilgileri"} />
        <Button
          startContent={<GoCheck size={20} />}
          color="success"
          className="text-white"
          onClick={() => {
            postContactInfos();
          }}
        >
          Değişiklikleri Kaydet
        </Button>
      </PageHeaderSection>
      <Card className="p-4 mt-4 flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-medium">Adresler</h2>
          <Button
            startContent={<GoPlus size={20} strokeWidth={1} />}
            onClick={addAddress}
          >
            Adres Ekle
          </Button>
        </div>
        {addresses.map((address, index) => (
          <div
            key={index}
            className="py-4 border-b border-gray-200 flex flex-col lg:flex-row lg:items-stretch space-y-2 lg:space-y-0 lg:space-x-2 w-full last:border-b-0 last:pb-0"
          >
            <Input
              type="text"
              value={address.name}
              onChange={(e) => {
                const updatedAddresses = [...addresses];
                updatedAddresses[index].name = e.target.value;
                setAddresses(updatedAddresses);
              }}
              placeholder="Adres Adı"
              label="Adres Adı"
            />
            <Input
              type="text"
              value={address.description}
              onChange={(e) => {
                const updatedAddresses = [...addresses];
                updatedAddresses[index].description = e.target.value;
                setAddresses(updatedAddresses);
              }}
              placeholder="Adres Tarifi"
              label="Adres Tarifi"
            />
            <Input
              type="text"
              value={address.link}
              onChange={(e) => {
                const updatedAddresses = [...addresses];
                updatedAddresses[index].link = e.target.value;
                setAddresses(updatedAddresses);
              }}
              placeholder="Adres Linki"
              label="Adres Linki"
              endContent={
                <button
                  onClick={() => handleModalTrigger(index, "address")}
                  className="focus:outline-none self-center"
                  type="button"
                >
                  <GoTrash color="red" size={20} strokeWidth={0.4} />
                </button>
              }
            />
          </div>
        ))}
      </Card>

      <Card className="p-4 mt-4 flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-medium">Mailler</h2>
          <Button
            startContent={<GoPlus size={20} strokeWidth={1} />}
            onClick={addEmail}
          >
            Mail Ekle
          </Button>
        </div>
        {emails.map((email, index) => (
          <div
            key={index}
            className="py-4 border-b border-gray-200 flex flex-col lg:flex-row lg:items-stretch space-y-2 lg:space-y-0 lg:space-x-2 w-full last:border-b-0 last:pb-0"
          >
            <Input
              type="text"
              value={email}
              onChange={(e) => {
                const updatedEmails = [...emails];
                updatedEmails[index] = e.target.value;
                setEmails(updatedEmails);
              }}
              placeholder="Mail Adresi"
              label="Mail Adresi"
              endContent={
                <button
                  onClick={() => handleModalTrigger(index, "email")}
                  className="focus:outline-none self-center"
                  type="button"
                >
                  <GoTrash color="red" size={20} strokeWidth={0.4} />
                </button>
              }
            />
          </div>
        ))}
      </Card>

      <Card className="p-4 mt-4 flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-medium">Telefonlar</h2>
          <Button
            startContent={<GoPlus size={20} strokeWidth={1} />}
            onClick={addPhoneNumber}
          >
            Telefon Ekle
          </Button>
        </div>
        {phoneNumbers.map((phoneNumber, index) => (
          <div
            key={index}
            className="py-4 border-b border-gray-200 flex flex-col lg:flex-row lg:items-stretch space-y-2 lg:space-y-0 lg:space-x-2 w-full last:border-b-0 last:pb-0"
          >
            <Input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                const updatedPhoneNumbers = [...phoneNumbers];
                updatedPhoneNumbers[index] = e.target.value;
                setPhoneNumbers(updatedPhoneNumbers);
              }}
              placeholder="Telefon Numarası"
              label="Telefon Numarası"
              endContent={
                <button
                  onClick={() => handleModalTrigger(index, "phoneNumber")}
                  className="focus:outline-none self-center"
                  type="button"
                >
                  <GoTrash color="red" size={20} strokeWidth={0.4} />
                </button>
              }
            />
          </div>
        ))}
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Silmek istediğinden emin misin?
              </ModalHeader>
              <ModalBody>
                <p>Bu değişiklik geri alınamaz.</p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Vazgeç
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    areYouSureRemover(modalAction.index, modalAction.type);
                    onClose();
                  }}
                >
                  Evet, sil
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default App;
