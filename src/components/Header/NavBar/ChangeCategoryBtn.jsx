import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./ChangeCategoryBtn/ChangeCategoryBtn.module.css";
import Menu from "./ChangeCategoryBtn/Menu.jsx";

export default function ChangeCategoryBtn() {
  const [srcImg, setSrcImg] = useState();
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    (async function getImg() {
      const img = await import("../../../assets/menu-outline.svg");
      setSrcImg(img.default);
    })();
  }, []);

  const { isPending, error, data } = useQuery({
    queryKey: ["categories_data"],
    queryFn: () =>
      axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <button
        type="button"
        aria-label="Select category"
        className={styles.viewCategoriesBtn}
        onClick={() => setMenuVisible(true)}
      >
        <img className={styles.icon} src={srcImg} alt="Menu icon" />
        <p className={styles.tooltip} aria-hidden="true">
          Select category
        </p>
      </button>
      {menuVisible && (
        <Menu data={data} styles={styles} setMenuVisible={setMenuVisible} />
      )}
    </>
  );
}
