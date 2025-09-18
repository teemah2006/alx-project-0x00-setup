import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Click Me" styles="rounded-sm btn-sm"/>
      <Button title="Click Me" styles="rounded-md btn-md"/>
      <Button title="Click Me" styles="rounded-lg btn-md"/>
      <Button title="Click Me" styles="rounded-full btn-lg"/>
    </div>
  )
}
export default Landing