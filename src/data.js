import { BiPencil } from "react-icons/bi";
import { RiMailDownloadLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { TbSend, TbTrash } from "react-icons/tb";
import smkn1 from "./assets/smkn1bdg.svg";
import smkn2 from "./assets/smkn2bdg.svg";
import smkn3 from "./assets/smkn3bdg.svg";
import smkn5 from "./assets/smkn5bdg.svg";
import smkn6 from "./assets/smkn6bdg.svg";
import smkn7 from "./assets/smkn7bdg.svg";

export const sidebarData = [
  {
    icon: <BiPencil />,
    text: "Surat Keluar",
    url: "/new",
  },
  {
    icon: <RiMailDownloadLine />,
    text: "Surat Masuk",
    url: "/",
  },
  {
    icon: <AiOutlineStar />,
    text: "Favorit",
    url: "/favourite",
  },
  {
    icon: <TbSend />,
    text: "Terkirim",
    url: "/sent",
  },
  {
    icon: <TbTrash />,
    text: "Sampah",
    url: "/bin",
  },
];

export const inbox = [
  {
    img: smkn1,
    name: "SMKN 1 Bandung",
    messages:
      "INVITED - A landing page is any web page that a consumer can land on, but in the landing page is any web page that a consumer can land on, but in the",
    date: "Jan 17",
  },
  {
    img: smkn2,
    name: "SMKN 2 Bandung",
    messages:
      "INVITED - A landing page is any web page that a consumer can land on, but in the landing page is any web page that a consumer can land on, but in the",
    date: "Jan 16",
  },
  {
    img: smkn3,
    name: "SMKN 3 Bandung",
    messages:
      "INVITED - A landing page is any web page that a consumer can land on, but in the landing page is any web page that a consumer can land on, but in the",
    date: "Jan 15",
  },
  {
    img: smkn5,
    name: "SMKN 5 Bandung",
    messages:
      "INVITED - A landing page is any web page that a consumer can land on, but in the landing page is any web page that a consumer can land on, but in the",
    date: "Jan 14",
  },
  {
    img: smkn6,
    name: "SMKN 6 Bandung",
    messages:
      "INVITED - A landing page is any web page that a consumer can land on, but in the landing page is any web page that a consumer can land on, but in the",
    date: "Jan 13",
  },
  {
    img: smkn7,
    name: "SMKN 7 Bandung",
    messages:
      "INVITED - A landing page is any web page that a consumer can land on, but in the landing page is any web page that a consumer can land on, but in the ",
    date: "Jan 12",
  },
];
