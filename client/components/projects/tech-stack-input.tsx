"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  value: string[];
  onChange: (value: string[]) => void;
}

export default function TechStackInput({
  value,
  onChange,
}: Props) {
  const [input, setInput] = useState("");

  const addTech = () => {
    const tech = input.trim();

    if (!tech) return;

    if (value.includes(tech)) {
      setInput("");
      return;
    }

    onChange([...value, tech]);
    setInput("");
  };

  const removeTech = (tech: string) => {
    onChange(
      value.filter((item) => item !== tech)
    );
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {value.map((tech) => (
          <div
            key={tech}
            className="
            flex
            items-center
            gap-2
            rounded-full
            border
            px-3
            py-1
            text-sm
            "
          >
            {tech}

            <button
              type="button"
              onClick={() =>
                removeTech(tech)
              }
            >
              <X className="size-3" />
            </button>
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            addTech();
          }
        }}
        placeholder="Type technology and press Enter"
        className="
        w-full
        rounded-md
        border
        p-3
        "
      />
    </div>
  );
}
