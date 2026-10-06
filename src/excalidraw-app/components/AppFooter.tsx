import React from "react";
import { Footer } from "../../packages/excalidraw/index";
import { EncryptedIcon } from "./EncryptedIcon";
import { ExcalidrawPlusAppLink } from "./ExcalidrawPlusAppLink";

export const AppFooter = React.memo(() => {
  return (
    <Footer>
      <div
        style={{
          display: "flex",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        <a
          href="https://arham.dev"
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: "0.75rem",
            color: "var(--color-primary)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            padding: "2px 6px",
            borderRadius: "6px",
          }}
          title="Curated by Arham Eskafi (arham.dev)"
        >
          ⚡ arham.dev
        </a>
        <EncryptedIcon />
      </div>
    </Footer>
  );
});
