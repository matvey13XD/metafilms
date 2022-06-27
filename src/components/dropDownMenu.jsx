const DropDownMenu = ({setFilter}) => {
    return (
      <div style={{position: "absolute", zIndex: "2", right: "170px", top: "200px"}} class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Сортировать по:
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" onClick={() => setFilter("rating")}>По Рейтингу</a></li>
    <li><a class="dropdown-item" onClick={() => setFilter("gдрама")}>По Жанру(Драма)</a></li>
    <li><a class="dropdown-item" onClick={() => setFilter("gбоевик")}>По Жанру(Боевик)</a></li>
    <li><a class="dropdown-item" onClick={() => setFilter("gужасы")}>По Жанру(Ужасы)</a></li>
    <li><a class="dropdown-item" onClick={() => setFilter("gфантастика")}>По Жанру(Фантастика)</a></li>
    <li><a class="dropdown-item" onClick={() => setFilter("gкомедия")}>По Жанру(Комедия)</a></li>
    <li><a class="dropdown-item" onClick={() => setFilter("gтриллер")}>По Жанру(Триллер)</a></li>
    <li><a class="dropdown-item" onClick={() => setFilter("gдетектив")}>По Жанру(Детектив)</a></li>
  </ul>
</div>
    )
}

export default DropDownMenu;