// import Image from "next/image";
// import lemon from '/public/lemon.png'

export default function List() {
    let product = ['tomato', 'pasta', 'coconut'];
    let arry = [2,3,4]
    let b = arry.map((a)=>{
        return 10
    })
    console.log(b);
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                product.map((a, i)=> {
                    return (
                        <div className="food" key={i}>
                        <img src={`/food${i+1}.png`} className="food-img" alt="레몬"/>
                        {/* <Image src={lemon} className="food-img"/> */}
                        <h4>{a} $40</h4>
                    </div>
                    )
                })
            }
        </div>
    )
}