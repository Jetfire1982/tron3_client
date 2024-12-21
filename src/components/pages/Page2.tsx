
interface Page2Props {
    t: number
    setTest: React.Dispatch<React.SetStateAction<number>>
}



// const Page2 = ({t}: Page2Props) => {
    const Page2: React.FC<Page2Props> = ({t, setTest}) => {
        // setTest(27)
    console.log("render page 2")
    return (
        <h3>Page 2 {t}</h3>
    )
}

export default Page2