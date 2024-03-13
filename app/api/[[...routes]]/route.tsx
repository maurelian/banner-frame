/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
// import { neynar } from 'frog/hubs'
import { handle } from "frog/next";

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
});

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame("/", (c) => {
  const queryParams = c.req.query();
  const color = queryParams?.color ? queryParams.color : "black";
  console.log("Query Parameters:", JSON.stringify(queryParams, null, 2));
  const text = queryParams?.text
    ? queryParams.text
    : `You need to specify a text query parameter. Example: \n {{app-url}}?text=Hello%20World!&color=orange`;
  const size = queryParams?.size ? queryParams.size : 60;
  console.log("color:", color);
  console.log("text:", text);
  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          background: color,
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: size,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {text}
        </div>
      </div>
    ),
    intents: [],
  });
});

export const GET = handle(app);
export const POST = handle(app);
