"use client";

import { useOthers } from "@liveblocks/react";
import Image from "next/image";
import React from "react";

const ActiveCollaborators = () => {
  const others = useOthers();

  const collaborators = others.map((other) => other.info);

  console.log(collaborators);

  return (
    <ul className="collaborators-list">
      {collaborators.map(({ id, avatar, name, color }) => (
        <li
          key={id}
          className="p-1"
        >
          <Image
            src={avatar}
            alt={name}
            width={100}
            height={100}
            objectFit="cover"
            className="inline-block max-w-8 rounded-full ring-2 ring-dark-100"
            style={{ border: `2px solid ${color}` }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollaborators;
