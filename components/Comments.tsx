"use client";

import { useIsThreadActive } from "@liveblocks/react-lexical";
import { Composer, Thread } from "@liveblocks/react-ui";
import { useThreads } from "@liveblocks/react/suspense";
import React from "react";

import { cn } from "@/lib/utils";

const ThreadWrapper = ({ thread }: ThreadWrapperProps) => {
  const isActive = useIsThreadActive(thread.id);

  return (
    <Thread
      thread={thread}
      data-state={isActive ? "active" : null}
      className={cn(
        "comment-thread boarder",
        isActive && "!border-blue-500 shadow-md",
        thread.resolved && "opacity-40"
      )}
    />
  );
};

const Comments = () => {
  const { threads } = useThreads();

  return (
    <div className="comments-container">
      <Composer className="comment-composer" />

      {threads.map((thread) => (
        <ThreadWrapper
          key={thread.id}
          thread={thread}
        />
      ))}
    </div>
  );
};

export default Comments;
