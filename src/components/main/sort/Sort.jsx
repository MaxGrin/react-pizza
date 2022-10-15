
const Sort = () => {
    return(
        <div className={moduleCss.sort}>
                <img src={arrowUpSort} alt="" />
                <span>Сортировка по:</span>
                <span>популярности</span>
                <div className={moduleCss.sort_popup}>
                    <ul>
                        <li>популярности</li>
                        <li>цене</li>
                        <li>алфавиту</li>
                    </ul>
                </div>
            </div>
    )
    }