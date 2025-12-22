"use client";

import { useEffect, useState } from "react";

export function FlyonuiStyles() {
  const [version, setVersion] = useState(Date.now());

  useEffect(() => {
    // En desarrollo, observar cambios vía polling
    if (process.env.NODE_ENV === "development") {
      const interval = setInterval(() => {
        fetch("/css/flyonui.css", { method: "HEAD", cache: "no-store" })
          .then((res) => {
            const lastModified = res.headers.get("last-modified");
            if (lastModified) {
              const newVersion = new Date(lastModified).getTime();
              setVersion((prev) => {
                if (prev !== newVersion) {
                  console.log("🔄 FlyonUI CSS updated");
                  return newVersion;
                }
                return prev;
              });
            }
          })
          .catch(() => {});
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <link
      href={`/css/flyonui.css?v=${version}`}
      rel="stylesheet"
    />
  );
}
