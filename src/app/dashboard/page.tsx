import React from "react";
import { Card } from "../components/ui/Linkscard";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaPlus,
  FaReddit,
  FaShareAlt,
  FaSnapchat,
  FaSnapchatGhost,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdAddLink } from "react-icons/md";

const links = [
  {
    title: "Created Links",
    id: 1,
    icon: <MdAddLink size={24} />,
    peoples: [],
    urls: [
      {
        title: "Facebook",
        url: "https://www.facebook.com",
        icon: <FaFacebook />,
      },
      {
        title: "Twitter",
        url: "https://www.twitter.com",
        icon: <FaTwitter />,
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com",
        icon: <FaInstagram />,
      },
      {
        title: "GitHub",
        url: "https://www.github.com",
        icon: <FaGithub />,
      },
    ],
  },
  {
    title: "Shared Links",
    id: 2,
    icon: <FaShareAlt size={24} />,
    urls: [],
    peoples: [
      {
        username: "Aryan Ghosali",
        LinkShared: [
          {
            name: "facebook",
            id: 1,
            sharedApp: <FaFacebook />,
          },
          {
            name: "Snapchat",
            id: 2,
            sharedApp: <FaSnapchat />,
          },
          {
            name: "Instagram",
            id: 3,
            sharedApp: <FaInstagram />,
          },
        ],
        imageLink: "https://randomuser.me/api/portraits/women/59.jpg",
      },
      {
        username: "Jane Doe",
        LinkShared: [
          {
            name: "Facebook",
            id: 4,
            sharedApp: <FaFacebook />,
          },
          {
            name: "Instagram",
            id: 6,
            sharedApp: <FaInstagram color="purple" />,
          },
          {
            name: "Snapchat",
            id: 7,
            sharedApp: <FaSnapchatGhost color="yellow" />,
          },
        ],
        imageLink: "https://randomuser.me/api/portraits/lego/1.jpg",
      },
      {
        username: "Bob Smith",

        LinkShared: [
          {
            name: "YouTube",
            id: 8,
            sharedApp: <FaYoutube />,
          },
          {
            name: "Twitch",
            id: 9,
            sharedApp: <FaTwitch />,
          },
          {
            name: "Reddit",
            id: 11,
            sharedApp: <FaReddit />,
          },
        ],
        imageLink: "https://randomuser.me/api/portraits/men/35.jpg",
      },
    ],
  },
  {
    title: "Add new",
    id: 3,
    icon: <FaPlus size={24} />,

    description:
      "From breaking news and entertainment to sports and politics, get the full story.",
  },
];

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex  items-center">
        <div className="w-full grid grid-cols-3 gap-4 box-border">
          {links.map((link) => (
            <div key={link.id}>
              <Card link={link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
