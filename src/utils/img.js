export const getImageUrl = (imageName) => {
  // Always use the public folder path since it's accessible in both dev and prod
  return `/projects/${imageName}`;
};
