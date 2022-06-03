export default function PageNation({ page, totalPage, handlePage }) {
  function handleClick(e) {
    const {
      currentTarget: {
        dataset: { page },
      },
    } = e;

    handlePage(page);
  }

  return (
    <>
      <button
        type="button"
        data-page="prev"
        onClick={handleClick}
        disabled={page === 1}
      >
        &lt;
      </button>

      {Array(totalPage)
        .fill()
        .map((_, i) => (
          <button type="button" data-page={i + 1} onClick={handleClick}>
            {i + 1}
          </button>
        ))}

      <button
        type="button"
        data-page="next"
        onClick={handleClick}
        disabled={page === totalPage}
      >
        &gt;
      </button>
    </>
  );
}
