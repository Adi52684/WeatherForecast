function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export async function weatherIcon(icons) {
  try {
    const icon = await import(`../assets/icons/${imageName}`);
    return icon.default || icon; // Some setups may require .default
  } catch (error) {
    console.error("Icon not found:", error);
    return null; // Return a default icon or null if the icon isn't found
  }
}
