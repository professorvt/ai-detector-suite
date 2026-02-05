// export default async function handler(req, res) {
//   // 1. Sirf POST allow karo
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   // 2. Vercel Environment Variables se Secret Maal uthao
//   const PRIVATE_BACKEND_URL = process.env.PRIVATE_BACKEND_URL;
//   const HF_TOKEN = process.env.HF_TOKEN;

//   // Agar variables set nahi hain to error do
//   if (!PRIVATE_BACKEND_URL || !HF_TOKEN) {
//     return res
//       .status(500)
//       .json({ error: "Server Configuration Missing (Check Vercel Env Vars)" });
//   }

//   try {
//     // 3. Private Backend ko request bhejo (Secret Token ke saath)
//     const backendResponse = await fetch(
//       `${PRIVATE_BACKEND_URL}/detect_ai_detailed`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${HF_TOKEN}`, // 👈 Ye Main Chabi hai
//         },
//         body: JSON.stringify(req.body),
//       },
//     );

//     // 4. Data parse karo
//     const data = await backendResponse.json();

//     // 5. Frontend ko wapas bhejo
//     return res.status(200).json(data);
//   } catch (error) {
//     console.error("Proxy Error:", error);
//     return res.status(500).json({ error: "Failed to connect to AI Brain" });
//   }
// }

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PRIVATE_BACKEND_URL = process.env.PRIVATE_BACKEND_URL;
  const HF_TOKEN = process.env.HF_TOKEN;

  if (!PRIVATE_BACKEND_URL || !HF_TOKEN) {
    return res
      .status(500)
      .json({ error: "Server Configuration Missing (Check Vercel Env Vars)" });
  }

  try {
    const backendResponse = await fetch(
      `${PRIVATE_BACKEND_URL}/detect_ai_detailed`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HF_TOKEN}`,
        },
        body: JSON.stringify(req.body),
      },
    );

    const data = await backendResponse.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    return res.status(500).json({ error: "Failed to connect to AI Brain" });
  }
}
