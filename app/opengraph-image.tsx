import { ImageResponse } from "next/og";

export const alt =
  "NexSync Labs — software, websites and apps built in Rampurhat, Birbhum";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f3eee4",
          padding: "60px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 34,
              letterSpacing: "-0.01em",
              color: "#1d251f",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                backgroundColor: "#b04723",
              }}
            />
            NexSync Labs
          </div>
          <div
            style={{
              fontSize: 17,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#b04723",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {"Rampurhat · Birbhum"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#1d251f",
            }}
          >
            <span>Software, websites and apps that</span>
            <span style={{ fontStyle: "italic", color: "#b04723" }}>
              earn their keep.
            </span>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#465248",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            {"ERP · Dynamic websites · Invoice systems · School software · Mobile apps"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(29, 37, 31, 0.18)",
            paddingTop: 26,
            fontSize: 19,
            color: "#465248",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span>nexsynclabs.vercel.app</span>
          <span>hello@nexsynclabs.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
