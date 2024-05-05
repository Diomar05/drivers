import styles from './Paginacion.module.css'
import { useState } from 'react'

const Paginacion = ({allDrivers, driverPage, paginacion}) => {

  const [actualPage, setActualPage] = useState(1)

  // const pages = [];

  //   for (let i = 1; i <= Math.ceil(allDrivers / driverPage); i++) {
  //   pages.push(i);
  // }

  const totalPages = Math.ceil(allDrivers / driverPage); 

  const visiblePages = [];

  const maxVisiblePages = 5;

  let startPage = actualPage - Math.floor(maxVisiblePages / 2);

  let endPage = actualPage + Math.floor(maxVisiblePages / 2);

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  const goToPage = (page) => {
    setActualPage(page);
    paginacion(page);
  };

  const goToPrevPage = () => {
    if (actualPage > 1) {
      goToPage(actualPage - 1);
    }
  };

  const goToNextPage = () => {
    if (actualPage < totalPages) {
      goToPage(actualPage + 1);
    }
  };






  return (
    <div>
      <ul className={styles.list}>
        <li>
          <button className={styles.button} onClick={goToPrevPage} disabled={actualPage === 1}>
            Anterior
          </button>
        </li>
        {visiblePages.map((number) => (
          <li key={number}>
            <div
              className={
                actualPage === number ? styles.crumb__active : styles.crumb
              }onClick={() => goToPage(number)}>{number}
            </div>
          </li>
        ))}
        <li>
          <button className={styles.button} onClick={goToNextPage} disabled={actualPage === totalPages}>
            Siguiente
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginacion;
