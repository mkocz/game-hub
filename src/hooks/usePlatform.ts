import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number ) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => id === platform.id);
};

export default usePlatform;
