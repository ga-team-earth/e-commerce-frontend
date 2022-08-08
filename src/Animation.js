export const pageAnimation = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
      y: 300,
      transition: {
        duration: 1,
      },
    },
  };

  export const fade = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {ease: "easeOut", duration: 0.75},
    },
  }


  export const photoAnim = {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.75,
      },
    },
  };

  export const titleAnim = {
    hidden: { x: -500 },
    show: {
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  export const cartAnim = {
    hidden: { x: 200 },
    show: {
      x: 0,
      transition: { duration: .25, ease: "easeOut" },
    },
  };