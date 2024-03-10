export async function getData() {
  try {
    const res = await fetch(`https://vercel-psi-coral.vercel.app/bioderma`);

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);

  }
};




export async function getSingleData(slug) {
  try {
    const res = await fetch(`https://vercel-psi-coral.vercel.app/bioderma/${slug}`);

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);

  }
};