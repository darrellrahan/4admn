import { BiPencil } from "react-icons/bi";
import { RiMailDownloadLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { TbSend, TbTrash } from "react-icons/tb";

export const sidebarData = [
  {
    icon: <BiPencil />,
    text: "Surat Keluar",
  },
  {
    icon: <RiMailDownloadLine />,
    text: "Surat Masuk",
  },
  {
    icon: <AiOutlineStar />,
    text: "Favorit",
  },
  {
    icon: <TbSend />,
    text: "Terkirim",
  },
  {
    icon: <TbTrash />,
    text: "Sampah",
  },
];
