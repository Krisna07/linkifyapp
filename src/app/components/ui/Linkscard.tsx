import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import Button from "./Button";

interface CardProps {
  link: {
    title: string;
    urls: {
      title: string;
      url: string;
      icon: JSX.Element;
    }[];
    description: string;
    icon: JSX.Element;
    peoples: {
      username: string;
      LinkShared: {
        name: string;
        id: number;
        sharedApp: JSX.Element;
      }[];
      imageLink: string;
    }[];
  };
}
interface peoples {
  username: string;
  LinkShared: {
    name: string;
    id: number;
    sharedApp: JSX.Element;
  }[];
}

const SharedLinks = ({ item }: peoples) => {
  const [icons, showIcons] = useState<boolean>(false);

  return (
    <li
      key={item.username}
      className={
        "relative text-black font-[600] w-full lg:flex justify-between items-center gap-2 bg-gray-200 hover:bg-gray-300 my-2 px-4 py-2 box-border rounded"
      }
    >
      <div className="flex items-center gap-2">
        <img
          src={item.imageLink}
          alt="userimage"
          width={40}
          height={40}
          className="rounded-full"
        />
        {item.username}
      </div>
      {item.LinkShared ? (
        <span
          className="max-w-1/2 relative flex items-center justify-end gap-2"
          onClick={() => showIcons(!icons)}
        >
          {!icons ? item.LinkShared.length : ""}
          {icons
            ? item.LinkShared.map((social) => (
                <span key={social.id} className="text-xl">
                  {social.sharedApp}
                </span>
              ))
            : ""}
          <FaChevronRight
            className={` transition-all ${
              icons ? "absolute right-20" : "relative right-0"
            }`}
          />
        </span>
      ) : (
        ""
      )}
    </li>
  );
};

export const Card: React.FC<CardProps> = ({ link }) => {
  return (
    <div className="bg-white rounded-md box-border  shadow-lg p-4 grid gap-2 text-black">
      <div className="flex items-center text-black">
        <div className="bg-gray-200 p-2 rounded-full">{link.icon}</div>
        <h3 className="ml-4 text-lg font-medium ">{link.title}</h3>
      </div>
      <ul className="w-full box-border">
        {link.urls
          ? link.urls.slice(0, 4).map((url) => (
              <li
                key={url.url}
                className=" relative text-black font-[600] w-full flex items-center gap-2 bg-gray-200 hover:bg-gray-300 my-2 px-4 py-2 box-border rounded"
              >
                {url.icon}
                <Link href={url.url}>{url.title}</Link>
                <RiShareBoxLine className="absolute right-2" />
              </li>
            ))
          : ""}
        {link.peoples
          ? link.peoples
              .slice(0, 3)
              .map((people) => <SharedLinks item={people} />)
          : ""}
      </ul>

      <Button variant="secondary">Visit Analytics</Button>
    </div>
  );
};
