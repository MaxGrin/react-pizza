import arrowUpSort from '../../assets/arrow-up-sort.svg'
import moduleCss from './Main.module.css'
import pizzaImg from '../../assets/pizza.svg'
import Categories from './categories/Categories'

const Main = () =>{
    const items = ['Мясные', 'Вегетарианские','Гриль','Острые','Закрытые']

    return(
        <div>
          <div className={moduleCss.wrapper}>
            <Categories items={items} />
        
        <div className={moduleCss.sort}>
            <img src={arrowUpSort} alt="" />
            <span>Сортировка по: </span>
            <span>популярности</span>
            <div className={moduleCss.sort_popup}>
                <ul>
                    <li>популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                </ul>
            </div>
        </div>
        </div>
        <div>
            <h1>Все пиццы</h1>
            <div>
                <img src={pizzaImg} alt="" />
                <h3>Чизбургер-пицца</h3>
                <div>
                    <span>тонкое</span>
                    <span>традиционное</span>
                    <span>26 см</span>
                    <span>30 см</span>
                    <span>40 см</span>
                </div>
                   <h4>395 руб</h4>
                   <button>Добавить</button>
            </div>

            <div>
                <img src={pizzaImg} alt="" />
                <h3>Чизбургер-пицца</h3>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                   <h4></h4>
                   <button>Добавить</button>
            </div>

            <div>
                <img src={pizzaImg} alt="" />
                <h3>Чизбургер-пицца</h3>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                   <h4></h4>
                   <button>Добавить</button>
            </div>

            <div>
                <img src={pizzaImg} alt="" />
                <h3>Чизбургер-пицца</h3>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                   <h4></h4>
                   <button>Добавить</button>
            </div>

            <div>
                <img src={pizzaImg} alt="" />
                <h3>Чизбургер-пицца</h3>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                   <h4></h4>
                   <button>Добавить</button>
            </div>

            <div>
                <img src="" alt="" />
                <h3></h3>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                   <h4></h4>
                   <button>Добавить</button>
            </div>

            <div>
                <img src="" alt="" />
                <h3></h3>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                   <h4></h4>
                   <button>Добавить</button>
            </div>

            <div>
                <img src="" alt="" />
                <h3></h3>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                   <h4></h4>
                   <button>Добавить</button>
            </div>

           
        </div>
        </div>
        
    )
}

export default Main ;