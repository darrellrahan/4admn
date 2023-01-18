import React from "react";
import img from "../assets/smkn1bdg.svg";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineReply } from "react-icons/hi";
import { RxDotsVertical } from "react-icons/rx";
import { BiImage } from "react-icons/bi";

const Message = () => {
  return (
    <div className="message-area">
      <div className="top-message">
        <div className="left">
          <div>
            <img src={img} alt="img" />
          </div>
          <div>
            <h3 className="regular-text">SMKN 1 Bandung</h3>
            <p className="small-text">
              Dari<span style={{ marginLeft: "2rem" }}>:</span> smkn1@mail.com
              <br />
              Kepada<span style={{ marginLeft: "0.6rem" }}>:</span>{" "}
              smkn4@mail.com
            </p>
          </div>
        </div>
        <div className="right">
          <div className="buttons">
            <button>
              <AiOutlineStar />
            </button>
            <button>
              <HiOutlineReply />
            </button>
            <button>
              <RxDotsVertical />
            </button>
          </div>
          <div>
            <p className="small-text">Selasa, Jan 17, 10:20</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="message-text">
        <h1 className="regular-text">INVITED</h1>
        <p className="regular-text">
          A landing page is any web page that a consumer can land on, but in the
          marketing realm, it's usually a standalone page, distinct from your
          homepage or any other page, that serves a single and focused purpose.
          A landing page is a follow up to any promises that you've made in your
          content. Essentially, it's the next step toward a visitor becoming a
          customer. Your landing page lets you make a trade, some sort of
          special offer, piece of information or a deal, in return for providing
          contact information. Landing pages can be click-through, leading to
          another page such as your e-commerce site, or lead generation based.
          Lead generation landing pages typically offer items like an eBook,
          free trial, contest entry or webinar registration in return for the
          submission of contact information.
        </p>
      </div>
      <div className="reply-area">
        <p className="regular-text">
          <HiOutlineReply /> SMKN 1 Bandung
        </p>
        <input type="text" autoComplete="off" />
        <div>
          <button>Kirim</button>
          <button>Aa</button>
          <button>
            <BiImage />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
