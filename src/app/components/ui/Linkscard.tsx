import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronCircleRight, FaChevronRight, FaCommentDots, FaDotCircle } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
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

export const Card: React.FC<CardProps> = ({ link }) => {
  return (
    <div className="bg-white rounded-md p-4 shadow-lg grid gap-2 text-black">
      <div className="flex items-center text-black">
        <div className="bg-gray-200 p-2 rounded-full">{link.icon}</div>
        <h3 className="ml-4 text-lg font-medium ">{link.title}</h3>
      </div>
      <ul>
        {link.urls
          ? link.urls.slice(0, 4).map((url) => (
              <li
                key={url.url}
                className=" relative text-black font-[600] w-full flex items-center gap-2 bg-gray-200 hover:bg-gray-300 m-2 px-4 py-2 box-border rounded"
              >
                {url.icon}
                <Link href={url.url}>{url.title}</Link>
                <RiShareBoxLine className="absolute right-2" />
              </li>
            ))
          : ""}
        {link.peoples
          ? link.peoples.slice(0, 3).map((people) => (
              <li
                key={people.username}
                className={
                  "relative text-black font-[600] w-full flex justify-between items-center gap-2 bg-gray-200 hover:bg-gray-300 m-2 px-4 py-2 box-border rounded"
                }
              >
                <div className="flex items-center gap-2">
                  <img
                    src={people.imageLink}
                    alt="userimage"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {people.username}
                </div>
                {people.LinkShared
                  ? 
                       
                <span className="flex items-center gap-2"> {people.LinkShared.length}<FaChevronRight /></span>
                
                    
                  : ""}
              </li>
            ))
          : ""}
      </ul>

      <Button variant="secondary">Visit Analytics</Button>
    </div>
  );
};
