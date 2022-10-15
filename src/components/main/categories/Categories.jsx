

 const Categories = (props) => {
  return (
    <div>
                <button>Все</button>
                {
                    props.items.map((item)=>(
                        <button>{item}</button>
                    ))
                }
                {/* <button>Мясные</button>
                <button>Вегетарианская</button>
                <button>Гриль</button>
                <button>Острые</button>
                <button>Зыкрытые</button> */}
            </div>
  )
}

export default Categories;
