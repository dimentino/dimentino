const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

if (!apiDomain) {
  throw new Error("API domain is not defined");
}

// Fetch all properties
async function fetchProperties({ showFeatured = false } = {}) {
  try {
    const res = await fetch(
      `${apiDomain}/properties${showFeatured ? "/featured" : ""}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

// Fetch single property
async function fetchProperty(id) {
  try {
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching property:", error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
