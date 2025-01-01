export const getLikedResolutions = (): string[] => {
  const storedData = localStorage.getItem('likedResolutions');
  return storedData ? JSON.parse(storedData) : [];
};

export const isResolutionLiked = (resolutionId: string): boolean => {
  const likedResolutions = getLikedResolutions();
  return likedResolutions.includes(resolutionId);
};

export const likeResolution = (resolutionId: string): void => {
  const likedResolutions = getLikedResolutions();

  if (!likedResolutions.includes(resolutionId)) {
    likedResolutions.push(resolutionId);
    localStorage.setItem('likedResolutions', JSON.stringify(likedResolutions));
  } else {
    console.log('Resolution is already liked.');
  }
};
