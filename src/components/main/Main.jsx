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
                   <button></button>
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
                   <button></button>
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
                   <button></button>
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
                   <button></button>
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
                   <button></button>
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
                   <button></button>
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
                   <button></button>
            </div>

           
        </div>
        </div>
        
    )
}

export default Main ;