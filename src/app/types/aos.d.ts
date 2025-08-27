declare module "aos" {
  const AOS: {
    init: (options?: any) => void;
    refresh: () => void;
    refreshHard: () => void;
    // You can add more types if needed
  };

  export default AOS;
}
