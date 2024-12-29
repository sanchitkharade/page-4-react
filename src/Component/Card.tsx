import { Button, Rating } from "@mantine/core"


const Card = () => {
  return (
    <div className="w-1/4 h-1/2 border rounded-xl flex-col justify-center items-center hover:cursor-pointer hover:shadow-yellow-500 hover:shadow-lg">
        <div className="h-5/3"> <img sizes="fixed" src="/Table.webp" alt="" /> </div>
        <div className="flex flex-col h-5/2 items-center p">
            <div className=" pt-1">Guyer Chair</div>
      <div className="text-red-600 pt-1">$ 45.00</div>
      <div className=" pt-1 pb-2"><Rating value={3.5} fractions={2} readOnly /></div>
      <Button fullWidth color="red">Add to Cart</Button>
      </div>
      
      
    </div>
  )
}

export default Card
