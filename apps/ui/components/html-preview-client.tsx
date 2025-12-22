"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTab } from "@/registry/default/ui/tabs";

interface HtmlPreviewClientProps extends React.ComponentProps<"div"> {
  html: string;
  code: React.ReactNode;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
}

export function HtmlPreviewClient({
  html,
  code,
  className,
  align = "center",
  hideCode = false,
  ...props
}: HtmlPreviewClientProps) {
  const [tab, setTab] = React.useState("preview");

  return (
    <div
      className={cn("group relative mt-4 mb-12 flex flex-col gap-2", className)}
      {...props}
    >
      <Tabs onValueChange={setTab} value={tab}>
        <div className="flex items-center justify-between">
          {!hideCode && (
            <TabsList className="bg-transparent p-0 *:data-[slot=tab-indicator]:rounded-lg *:data-[slot=tab-indicator]:bg-accent *:data-[slot=tab-indicator]:shadow-none">
              <TabsTab className="rounded-lg" value="preview">
                Preview
              </TabsTab>
              <TabsTab className="rounded-lg" value="code">
                Code
              </TabsTab>
            </TabsList>
          )}
        </div>
      </Tabs>
      <div
        className="relative rounded-xl border data-[tab=code]:bg-code"
        data-tab={tab}
      >
        <div
          className="invisible data-[active=true]:visible"
          data-active={tab === "preview"}
        >
          <div
            className={cn(
              "flex h-[350px] w-full overflow-hidden rounded-xl bg-background p-10",
              align === "center" && "items-center justify-center",
              align === "start" && "items-start justify-center",
              align === "end" && "items-end justify-center",
            )}
          >
            {/* flyoui-scope enables flyoui styles */}
            <div
              className="flyoui-scope"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <div
          className="**:[figure]:!m-0 absolute inset-0 hidden overflow-hidden data-[active=true]:block **:[pre]:h-[350px]"
          data-active={tab === "code"}
          data-slot="code"
        >
          {code}
        </div>
      </div>
    </div>
  );
}
